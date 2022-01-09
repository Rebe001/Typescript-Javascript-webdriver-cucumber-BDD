Feature: Performing a search and add to cart operation

    As a user on the ctqatest landing page
    I want to search and add an item to cart
    Because I want to buy an item 

    Background:
        Given I am on the ctqatest landing page

    Scenario: Performing search and add to cart operation
        When I search by text "shirt"
        And I select product <product>
        And I select color and size "Blue" "XS"
        Then I should see product <product> added to the cart

        Examples:
        | product                       |
        | "Slim fit Dobby Oxford Shirt" |
        
