# Load the Rails application.
require_relative 'application'

# Initialize the Rails application.
Rails.application.initialize!

#automatically convert these keys, add this line on your environment.rb file.
Jbuilder.key_format camelize: :lower