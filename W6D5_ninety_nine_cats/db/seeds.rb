# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Cat.destroy_all

# ActiveRecord::Base.connection.reset_pk_sequence!('cats')
cat1 = Cat.create!(birth_date: '2015/01/20', color: 'orange', name: 'Garfield', sex: 'M', description: 'He likes lasagna~')
cat2 = Cat.create!(birth_date: '1996/09/04', color: 'black', name: 'Jiji', sex: 'F', description: 'She validates your feelings, reassures you of your struggles, and helps you take a proactive perspective.')