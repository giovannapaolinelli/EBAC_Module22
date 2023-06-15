Feature: Checkout
    Scenario Outline: Checkout
        Given I visit EBAC Store 
        When I add product to the cart and complete shopping
        Then a success screen must appear
    
        Examples:
            | user    | pass                     |
            | gerente | GD*peToHNJ1#c$sgk08EaYJQ |
