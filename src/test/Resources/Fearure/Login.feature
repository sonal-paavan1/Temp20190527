@Login
Feature: User should not able to login with invalid credential
  So user should see error message

  Background:
    Given user is on Home page

  Scenario Outline: User should notable login with invalid credential

    When  user navigate to login Page
    And user enter invalid "<username>" and "<password>"
    Then user should not be logged in Successfully
    And user see "<Error Message>"

    Examples:

      | username                             | password | Error Message                                                                                           |
      | a12019001506           | mypass1  | Login was unsuccessful. Please correct the errors and try again. The credentials provided are incorrect |
      | KasabiRama120190015060005@yahoo.com  |          | Login was unsuccessful. Please correct the errors and try again. The credentials provided are incorrect |
      | KasabiRama1201900150600051@yahoo.com | mypass   | Login was unsuccessful. Please correct the errors and try again. No customer account found              |
      | KasabiRama1201900150600051@yahoo.com | mypass1  | Login was unsuccessful. Please correct the errors and try again. No customer account found              |
      | KasabiRama1201900150600051@yahoo.com |          | Login was unsuccessful. Please correct the errors and try again. No customer account found              |
      |                                      | mypass   | Please enter your email                                                                                 |
      |                                      | mypass1  | Please enter your email                                                                                      |
      |                                      |          | Please enter your email                                                                                 |
