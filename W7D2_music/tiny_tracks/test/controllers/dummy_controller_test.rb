require 'test_helper'

class DummyControllerTest < ActionDispatch::IntegrationTest
  test "should get show" do
    get dummy_show_url
    assert_response :success
  end

end
