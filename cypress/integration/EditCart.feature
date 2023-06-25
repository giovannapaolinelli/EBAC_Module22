Feature: Edit Cart
    Scenario: Edit Cart
        Given I visit EBAC Store products page 
        When I edit the product in the cart
        Then The cart must be updated