# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

#carries out what's within and resets indices on 12
ActiveRecord::Base.transaction do 
    Cat.destroy_all
    User.destroy_all
    ActiveRecord::Base.connection.reset_pk_sequence!('cats')
    ActiveRecord::Base.connection.reset_pk_sequence!('users')

    lucy = Cat.create!(birth_date: '2006/02/07', color: 'brown', name: 'Lucy', sex: 'F', description: 'Grumpy cat T.T')
    mochi = Cat.create!(birth_date: '2020/04/01', color: 'white', name: 'Mochi', sex: 'F', description: 'Scaredy cat O.o;')
    salem = Cat.create!(birth_date: '2021/10/31', color: 'black', name: 'Salem', sex: 'F', description: 'Only likes boys </3')
    clover = Cat.create!(birth_date: '2021/10/31', color: 'white', name: 'Clover', sex: 'M', description: 'Loves food, cuddles, naps, and tumbles ^^')
    spade = Cat.create!(birth_date: '2021/10/31', color: 'white', name: 'Spade', sex: 'M', description: 'Hates baths but loves laps e.e')

    alex = User.create!(username: "alex", password: "password")
    saitama = User.create!(username: "saitama", password: "onepunchman")
    genos = User.create!(username: "genos", password: "demoncyborg")
end