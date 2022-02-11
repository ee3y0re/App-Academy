class User < ApplicationRecord
    validates :username, :session_token, presence: true, uniqueness: true
    validates :password_digest, presence: true
    validates :password, length: { minimum: 6, allow_nil: true }

    after_initialize :ensure_session_token
    
    attr_reader :password
    #spire

    def self.find_by_credentials(username, password)
        @user = User.find_by(username: username)
        if @user && @user.is_password?(password)
            return @user
        else
            nil
        end
    end

    def password=(password)
        @password = password
        #hashing and salting
        #create makes hash
        self.password_digest = BCrypt::Password.create(password)
    end

    def is_password?(password)
        #bcrypt desalting and dehashing
        #new makes bcrypt password object
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

# [14:20:04] dear_temmie ::  you_got_this  ➜  app_academy/aA_classwork/W7D5_reddit ‹main*› » rails c
# Running via Spring preloader in process 28876
# Loading development environment (Rails 5.2.6.2)
# [1] pry(main)> pass = BCrypt::Password.create("hello")
# => "$2a$12$1da7TofrUMV5UAJUdAzlMOURLqc/u95JFaITFprFqx1JwQZO9y9.O"
# [2] pry(main)> pass2 = BCrypt::Password.create("hello")
# => "$2a$12$Soc73dCJYVdBgJBStfrs1.ASghNhPS4cPgh4CfrRqK81Yt/i3..ia"
# [3] pry(main)> object = BCrypt::Password.new("$2a$12$Soc73dCJYVdBgJBStfrs1.ASghNhPS4cPgh4CfrRqK81Yt/i3..ia")
# => "$2a$12$Soc73dCJYVdBgJBStfrs1.ASghNhPS4cPgh4CfrRqK81Yt/i3..ia"
# [4] pry(main)> object.is_password?("hello")
# => true
# [5] pry(main)> object.is_password?("hello2")
# => false
# [6] pry(main)> object2 = BCrypt::Password.new("$2a$12$1da7TofrUMV5UAJUdAzlMOURLqc/u95JFaITFprFqx1JwQZO9y9.O")
# => "$2a$12$1da7TofrUMV5UAJUdAzlMOURLqc/u95JFaITFprFqx1JwQZO9y9.O"
# [7] pry(main)> object2.is_password?("hello")
# => true
# [8] pry(main)> object.class
# => BCrypt::Password
# [9] pry(main)> 

    def reset_session_token!
        self.session_token = SecureRandom::urlsafe_base64(16)
        self.save! #why do we need to save loudly instead of softly
        self.session_token
    end

    def ensure_session_token
        #either has session_token or makes session token
        self.session_token ||= SecureRandom::urlsafe_base64(16)
    end
end

# print BCrypt::Password.create("hello")