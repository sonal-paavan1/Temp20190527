@currency
Feature:currency
  As a new user I should be able to register successfully to the website
  Scenario: User should able to change currency to Dollar
    Given user is on the home page
    When user hover on Clothing
    And user click on change currency
    Then All product should show in Dollar value

