require 'rails_helper'

RSpec.describe User, type: :model do
  # Username, session_token, password_digest
  context 'validations' do
    it {should validate_presence_of(:username)}
    it {should validate_presence_of(:session_token)}
    it {should validate_presence_of(:password_digest)}
    it {should validate_length_of(:password).is_at_least(6)}

    before(:each) do
      create(:user) #factory bot method calling to user factory
    end

    it {should validate_uniqueness_of(:username)}
    it {should validate_uniqueness_of(:session_token)}
  end
end
