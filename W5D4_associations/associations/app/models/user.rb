# == Schema Information
#
# Table name: users
#
#  id         :bigint           not null, primary key
#  name       :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class User < ApplicationRecord
  validates :name, presence: true
  #return instance of enrollment that matches
  has_many :enrollments, #joins table between stu and course
  primary_key: :id,
  foreign_key: :student_id,
  class_name: :Enrollment

  #not return connection but choosing spec connection
  #output is what source is filtered by through
  #naming combos and further filtering hint at through
  #user.first
  has_many :enrolled_courses, #return all courses for user
    through: :enrollments, #uses methods in same file
    source: :course #class_name from method in through and method in that class
end
