Feature: User Login Error Message Validation

  Scenario: Verify "Username is required" error message

    Given User is located on the main page of saucedemo website
    When User click “Login” button
    Then User should see the "Epic sadface: Username is required" error message
    
      
