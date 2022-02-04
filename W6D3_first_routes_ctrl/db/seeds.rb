# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# ActiveRecord::Base.transaction do
#     User.destroy_all
#     user1 = User.create!(name: ‘CJ’)
#     Course.destroy_all
#     course1 = Course.create!(name: ‘Ruby 101’, instructor_id: user5.id)
#     course2 = Course.create!(name: ‘Ruby 102’, instructor_id: user5.id, prereq_id: course1.id)
#     Enrollment.destroy_all
#     Enrollment.create!(student_id: user3.id, course_id: course1.id)
#     Enrollment.create!(student_id: user4.id, course_id: course1.id)
# end


User.destroy_all
abby = User.create!(username: 'abs')
kia = User.create!(username: 'kishi')
user1 = User.create!(username: 'Taylor')
user2 = User.create!(username: 'Paulo')

Artwork.destroy_all
abby1 = Artwork.create!(title: 'basketball bruises', image_url: 'NBA.com', artist_id: abby.id)
kia1 = Artwork.create!(title: 'Mona Lisa', image_url: 'ITaughtDavinciHowToDraw.com', artist_id: kia.id)
abby2 = Artwork.create!(title: 'Oyster mushrooms', image_url: 'tasty.com', artist_id: abby.id)
kia2 = Artwork.create!(title: 'Beauty and the beast', image_url: 'beast.com', artist_id: kia.id)

ArtworkShare.destroy_all
ArtworkShare.create!(artwork_id: kia1.id, viewer_id: abby.id)
ArtworkShare.create!(artwork_id: abby1.id, viewer_id: kia.id)
ArtworkShare.create!(artwork_id: abby2.id, viewer_id: user2.id)
