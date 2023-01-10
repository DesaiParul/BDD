Feature: Free CRM Login feature

Scenario Outline: Free CRM Login Test Scenario

Given user is on index Page
When title of login page is Free CRM
Then user should click login button
Then user enters "<username>" and "<password>"
Then user clicks on login button
#Then user check error
Then user is on homepage
Then user close the browser
Examples:
|    username          |     password    |
|paruldesai41@gmail.com|     Parul@123   |


