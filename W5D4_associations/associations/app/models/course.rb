# == Schema Information
#
# Table name: courses
#
#  id            :bigint           not null, primary key
#  name          :string
#  prereq_id     :integer
#  instructor_id :integer
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#
class Course < ApplicationRecord
  has_many :enrollments,
  primary_key: :id,
  foreign_key: :course_id,
  class_name: :Enrollment

  has_many :enrolled_students,
  through: :enrollments,
  source: :student

  # study this one!!!
  belongs_to :prerequisite, # 
  primary_key: :id,
  foreign_key: :prereq_id, # foreign key will always point to another table's id
  # SELECT
  # *
  # FROM
  # courses
  # JOIN
  # courses
  # ON
  # courses.id = courses.prereq_id
  class_name: :Course

  belongs_to :instructor,
    primary_key: :id,
    foreign_key: :instructor_id,
    class_name: :User
end
