Feature: Free CRM Create Contact feature

Scenario Outline: Free CRM Create a New Conatct Scenario

Given user is on index Page
When title of login page is Free CRM
Then user should click login button
Then user enters "<username>" and "<password>"
Then user clicks on login button
#Then user check error
Then user is on homepage
Then user move to new contact page
Then user enters contact details "<firstname>" and "<lastname>" and "<position>"
Then user close the browser
Examples:
|    username          |     password    |  firstname  |  lastname  |  position   |
|paruldesai41@gmail.com|     Parul@123   |  Parul      |  Desai     |  Manager    |
|paruldesai41@gmail.com|   Parul@123     |Tom          |Peter       | Director    |
|paruldesai41@gmail.com|   Parul@123     |Jenny        |Dsouza      |  Team Lead  |
|paruldesai41@gmail.com|   Parul@123     |Rohan        |Arora       |Sr.Programmer|
|paruldesai41@gmail.com|   Parul@123     |Tejal        |Desai       | Director    |
