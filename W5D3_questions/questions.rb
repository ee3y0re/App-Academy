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

    def initialize(user_data)
        @id = user_data['id']
        @fname = user_data['fname']
        @lname = user_data['lname']
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
end