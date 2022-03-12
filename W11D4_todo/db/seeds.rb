# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Todo.destroy_all

Todo.create!(title: 'Grocery shopping', body: 'Buy needs', done: false)
Todo.create!(title: 'Eat', body: 'Eat sushi', done: false)
Todo.create!(title: 'Trash', body: 'Dump trash', done: true)
Todo.create!(title: 'Shave', body: 'Trim beard', done: true)