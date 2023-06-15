Feature: Register Account
    Scenario: Access Register Page
        Given I visit EBAC Store register page
        When I register with email and password
        Then the admin dashboard page should be visible
