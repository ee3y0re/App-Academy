class User < ApplicationRecord
    validates :username, :session_token, presence: true, uniqueness: true
    validates :password_digest, presence: true

    #validates after creating session token or else web page cannot proceed
    after_initialize :ensure_session_token

    def reset_session_token!
        #session_token is column from table
        #attribute of user
        self.session_token = SecureRandom::urlsafe_base64
        #only called during certain situations
        #when logging in, session token from that hash should match for user
        #can't just leave nil value
        #random string not equal to any session out there
        #no session going to log you in accidentally
        self.save! #saves session token to user
        self.session_token
    end

    def ensure_session_token
        self.session_token ||= SecureRandom::urlsafe_base64
    end

    #setting new password upon signing up
    def password=(password)
        @password = password #probably to use beyond model page
        self.password_digest = BCrypt::Password.create(password)
    end

    
    def is_password?(password) #checks if password inputted is password associated with user
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    #when user inputs username and password and program checks
    def self.find_by_credentials(username, password)
        user = User.find_by(username: username)
        return nil if user.nil?
        #makes sure that this is correct password
        #if correct, return user
        #if incorrect, returns nil
        user.is_password?(password) ? user : nil
    end
end
