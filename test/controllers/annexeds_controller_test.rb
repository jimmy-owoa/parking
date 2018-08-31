require 'test_helper'

class AnnexedsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @annexed = annexeds(:one)
  end

  test "should get index" do
    get annexeds_url
    assert_response :success
  end

  test "should get new" do
    get new_annexed_url
    assert_response :success
  end

  test "should create annexed" do
    assert_difference('Annexed.count') do
      post annexeds_url, params: { annexed: { address: @annexed.address, leader: @annexed.leader, name: @annexed.name } }
    end

    assert_redirected_to annexed_url(Annexed.last)
  end

  test "should show annexed" do
    get annexed_url(@annexed)
    assert_response :success
  end

  test "should get edit" do
    get edit_annexed_url(@annexed)
    assert_response :success
  end

  test "should update annexed" do
    patch annexed_url(@annexed), params: { annexed: { address: @annexed.address, leader: @annexed.leader, name: @annexed.name } }
    assert_redirected_to annexed_url(@annexed)
  end

  test "should destroy annexed" do
    assert_difference('Annexed.count', -1) do
      delete annexed_url(@annexed)
    end

    assert_redirected_to annexeds_url
  end
end
