# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
class User < ApplicationRecord
    #presence and unique
    validates :email, :session_token, presence: true, uniqueness: true
    #only presence
    validates :password_digest, presence: true
    #extra constraint for pw
    validates :password_digest, length: { minimum: 8, allow_nil: true} 
    #not trying to save into database at all 
    #but need it to bypass the validation since there is no strict column in table to reference

    after_initialize :ensure_session_token

    attr_reader :password

    # def self.generate_session_token
    # end #ACTUALLY EXTRA LOL but for readability

    #in rails c, save instance of user e.g. a = User.first
    #instance.reset_session_token!
    #check for difference and change between User.first previously and User.first after running method
    def reset_session_token!
        self.session_token = SecureRandom::urlsafe_base64 #generates actual session token
        self.save! #saving the generated session token to the user instance
        self.session_token
    end

    #new user doesn't have session token so this will generate one for new user
    #runs upon creating new user ##when running rails c, will see it in session_token
    def ensure_session_token
        self.session_token ||= SecureRandom::urlsafe_base64
    end

    #runs upon creating new user ##when running rails c, will see it in password_digest
    #sets up password and hashing, encrypting, and salting
    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    #compares inputted password to password_digest undone
    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    #make sure the correct email and password is passed in
    def self.find_by_credentials(email, password) #why is password nil?
        #print user, email, password
        # debugger
        user = User.find_by(email: email)#takes in options hash
        return nil if user.nil?
        user && user.is_password?(password) ? user: nil
    end
end
