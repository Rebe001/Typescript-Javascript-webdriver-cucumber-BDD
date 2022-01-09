Feature: Performing a filter operation
    
    As a user on the ctqatest landing page
    I want to filter products
    Because I only want to view products within my price range

    Background:
        Given I am on the ctqatest landing page

    Scenario: Performing filter operation
        When I select "View All Sale" under sale menu
        And I should see list of products under sale page 
        And I filter with "Price" <minPrice> <maxPrice>
        Then I should see list of products is filtered with price <minPrice> <maxPrice>

        Examples:
        | minPrice | maxPrice |
        | "100.00" | "199.99" |