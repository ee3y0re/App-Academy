# == Schema Information
#
# Table name: cat_rental_requests
#
#  id         :integer          not null, primary key
#  cat_id     :integer          not null
#  start_date :date             not null
#  end_date   :date             not null
#  status     :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class CatRentalRequest < ApplicationRecord
    #freeze makes things immutable, not able to mutate, no changey!
    STATUS_STATES = %w(APPROVED DENIED PENDING).freeze

    validates :cat_id, :start_date, :end_date, :status, presence: true
    validates :status, inclusion: STATUS_STATES

    belongs_to :cat,
    foreign_key: :cat_id,
    class_name: :Cat

    #after cat rental request initialized, default pending status will be assigned based on custom method
    after_initialize :assign_pending_status

    #check
    def approved?
        self.datatus== 'APPROVED'
    end  
    
    def denied?
        self.status =='DENIED'
    end

    def pending?
        self.status == 'PENDING'
    end

    #change
    def approve!
        raise "not pending" if self.status != "PENDING"
        transaction do
            self.status = "APPROVED"
            self.save!

            overlapping_pending_requests.each do |request|
                req.update!(status: "DENIED")
            end
        end
    end

    def deny!
        self.status == 'DENIED'
        self.save!
    end

    private
    #make this private to prevent user from auto approving rental
    def assign_pending_status
        self.status ||= 'PENDING'
    end

    #prevent scheduling conflicts by user
    #sql we meet again but hashes are not used?
    #idk how to explain this
    def overlapping_requests
        CatRentalRequest
            .where.not(id: self.id)
            .where(cat_id: cat_id)
            .where.not('start_date > :end_date OR end_date < :start_date',
                     start_date: start_date, end_date: end_date )
    end

    #this method will call the previous one
    def overlapping_approved_requests
        overlapping_requests.where('status = \'APPROVED\'')
    end

    def overlapping_pending_requests
        overlapping_requests.where('status = \'PENDING\'')
    end

    def does_not_overlap_approved_request
        return if self.denied?
        unless overlapping_approved_requests.empty?
        errors[:base] <<
            'Request conflicts with existing approved request'
        end
    end

    def start_must_come_before_end
        return if start_date < end_date
        errors[:start_date] << 'must come before end date'
        errors[:end_date] << 'must come after start date'
    end
end
