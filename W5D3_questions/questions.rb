require 'sqlite3'
require 'singleton'

class QuestionsDatabase < SQLite3::Database
    include Singleton
  
    def initialize
      super('questions.db')
      self.type_translation = true
      self.results_as_hash = true
    end
end

class User

    attr_accessor :id, :fname, :lname

    def initialize(options)
        @id = options['id']
        @fname = options['fname']
        @lname = options['lname']
    end

    def self.all
        data = QuestionsDatabase.instance.execute("SELECT * FROM users")
        data.map { |row| User.new(row) }
    end

    def self.find_by_id
        data = QuestionsDatabase.instance.execute(<<-SQL, self.id)
            SELECT 
                * 
            FROM 
                users
            WHERE
                id = ?
        SQL
        data.map { |row| User.new(row) }
    end

    def self.find_by_name(fname, lname)
        data = QuestionsDatabase.instance.execute(<<-SQL, fname, lname)
            SELECT 
                * 
            FROM 
                users
            WHERE
                fname = ?
            AND
                lname = ?
        SQL
        data.map { |row| User.new(row) }
    end
end

class Question
    attr_accessor :id, :title, :body

    def initialize(options)
        @id = options['id']
        @title = options['title']
        @body = options['body']
    end

    def self.all
        data = QuestionsDatabase.instance.execute("SELECT * FROM questions")
        data.map { |row| Question.new(row) }
    end

    def self.find_by_author_id(author_id)
        data = QuestionsDatabase.instance.execute(<<-SQL, author_id)
            SELECT 
                * 
            FROM 
                questions
            WHERE
                id = ?
        SQL
        data.map { |row| Question.new(row) }
    end
end

class Reply
    attr_accessor :id, :reply, :question_id, :parent_id, :user_id

    def initialize(options)
        @id = options['id']
        @reply = options['reply']
        @question_id = options['question_id']
        @parent_id = options['parent_id']
        @user_id = options['user_id']
    end

    def self.all
        data = QuestionsDatabase.instance.execute("SELECT * FROM replies")
        data.map { |row| Reply.new(row) }
    end

    def self.find_by_user_id(user_id)
        data = QuestionsDatabase.instance.execute(<<-SQL, user_id)
            SELECT 
                * 
            FROM 
                replies
            WHERE
                user_id = ?
        SQL
        data.map { |row| Reply.new(row) }
    end
end