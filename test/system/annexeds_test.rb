require "application_system_test_case"

class AnnexedsTest < ApplicationSystemTestCase
  setup do
    @annexed = annexeds(:one)
  end

  test "visiting the index" do
    visit annexeds_url
    assert_selector "h1", text: "Annexeds"
  end

  test "creating a Annexed" do
    visit annexeds_url
    click_on "New Annexed"

    fill_in "Address", with: @annexed.address
    fill_in "Leader", with: @annexed.leader
    fill_in "Name", with: @annexed.name
    click_on "Create Annexed"

    assert_text "Annexed was successfully created"
    click_on "Back"
  end

  test "updating a Annexed" do
    visit annexeds_url
    click_on "Edit", match: :first

    fill_in "Address", with: @annexed.address
    fill_in "Leader", with: @annexed.leader
    fill_in "Name", with: @annexed.name
    click_on "Update Annexed"

    assert_text "Annexed was successfully updated"
    click_on "Back"
  end

  test "destroying a Annexed" do
    visit annexeds_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Annexed was successfully destroyed"
  end
end
