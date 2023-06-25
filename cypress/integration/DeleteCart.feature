Feature: Delete Cart
    Scenario: Checkout
        Given I visit EBAC Store cart page 
        When I delete my product from the cart
        Then The cart must be empty