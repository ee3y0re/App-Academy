# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# ActiveRecord::Base.transaction do |t|
    User.destroy_all
    # ActiveRecord::Base.connection.reset_pk_sequence!(t)
    dum = User.create(email: "somethingdum@gmail.com", password: 'dumdumdumdum')
    dee = User.create(email: "somethingdee@gmail.com", password: 'deedeedeedee')
    doo = User.create(email: "somethingdoo@gmail.com", password: 'doodoodoodoo')
# end