Feature: Performing a login

    As a user on the ctqatest login page
    I want to login
    Because I want to test unaccepted credentials

    Background:
        Given I am on the ctqatest login page

    Scenario: Performing login operation with passing invalid test data
        When I login with username and password "test@test.com" "ThisIs@T3st" into the text box
        Then I should see the invalid message on the landing page
        
    Scenario: Performing login operation with passing empty test data
        When I login with username and password "" "" into the text box
        Then I should see the validation error message on the landing page


