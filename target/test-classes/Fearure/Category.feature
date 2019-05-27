@Category
Feature:User should able to navigate to all
  category page successfully

  Scenario Outline:User can nevigets is correct  category page,
  so that he can user all products features from categories
    When user clicks on "<Category>" link from the menu
    Then user should able to navigate to "<related category page>"successfully
    Examples:
      | Category          | related category page                         |
      | Computers         | https://demo.nopcommerce.com/computers        |
      | Electronics       | https://demo.nopcommerce.com/electronics      |
      | Apparel           | https://demo.nopcommerce.com/apparel          |
      | Digital downloads | https://demo.nopcommerce.com/digitaldownloads |