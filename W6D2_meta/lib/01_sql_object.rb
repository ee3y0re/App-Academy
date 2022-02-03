require_relative 'db_connection'
require 'active_support/inflector'
# NB: the attr_accessor we wrote in phase 0 is NOT used in the rest
# of this project. It was only a warm up.

class SQLObject
  def self.columns(*names)
    # SELECT COLUMN_NAME 
    # FROM INFORMATION_SCHEMA.COLUMNS
    # names.each do |name|
    #   define_method(name) do
    #     "#{name}".from('information_schema.columns')
    #   end
    # end

    return @columns if @columns
    columns = DBConnection.execute2(<<-SQL)
      SELECT
       *
      FROM
        cats
      LIMIT
        0
    SQL
    expensive_part = columns[0].map { |ele| ele.to_sym } #expensive part is hititng db multiple times
    @columns = expensive_part
  end

  def self.finalize!
  end

  def self.table_name=(table_name)
    # ...
  end

  def self.table_name
    
  end

  def self.all
    # ...
  end

  def self.parse_all(results)
    # ...
  end

  def self.find(id)
    # ...
  end

  def initialize(params = {})
    def initialize(params = {})
      params.each do |key, value|
        "@#{key} = value"
      end
    end
  end

  def attributes
    # ...
  end

  def attribute_values
    # ...
  end

  def insert
    # ...
  end

  def update
    # ...
  end

  def save
    # ...
  end
end
