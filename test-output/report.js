$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Selenium_WorkSpace/BDDFramework/src/main/java/features/contacts.feature");
formatter.feature({
  "line": 1,
  "name": "Free CRM Create Contact feature",
  "description": "",
  "id": "free-crm-create-contact-feature",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Free CRM Create a New Conatct Scenario",
  "description": "",
  "id": "free-crm-create-contact-feature;free-crm-create-a-new-conatct-scenario",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "user is on index Page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "title of login page is Free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user should click login button",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 10,
      "value": "#Then user check error"
    }
  ],
  "line": 11,
  "name": "user is on homepage",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "user move to new contact page",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "user enters contact details \"\u003cfirstname\u003e\" and \"\u003clastname\u003e\" and \"\u003cposition\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "user close the browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 15,
  "name": "",
  "description": "",
  "id": "free-crm-create-contact-feature;free-crm-create-a-new-conatct-scenario;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "firstname",
        "lastname",
        "position"
      ],
      "line": 16,
      "id": "free-crm-create-contact-feature;free-crm-create-a-new-conatct-scenario;;1"
    },
    {
      "cells": [
        "paruldesai41@gmail.com",
        "Parul@123",
        "Parul",
        "Desai",
        "Manager"
      ],
      "line": 17,
      "id": "free-crm-create-contact-feature;free-crm-create-a-new-conatct-scenario;;2"
    },
    {
      "cells": [
        "paruldesai41@gmail.com",
        "Parul@123",
        "Tom",
        "Peter",
        "Director"
      ],
      "line": 18,
      "id": "free-crm-create-contact-feature;free-crm-create-a-new-conatct-scenario;;3"
    },
    {
      "cells": [
        "paruldesai41@gmail.com",
        "Parul@123",
        "Jenny",
        "Dsouza",
        "Team Lead"
      ],
      "line": 19,
      "id": "free-crm-create-contact-feature;free-crm-create-a-new-conatct-scenario;;4"
    },
    {
      "cells": [
        "paruldesai41@gmail.com",
        "Parul@123",
        "Rohan",
        "Arora",
        "Sr.Programmer"
      ],
      "line": 20,
      "id": "free-crm-create-contact-feature;free-crm-create-a-new-conatct-scenario;;5"
    },
    {
      "cells": [
        "paruldesai41@gmail.com",
        "Parul@123",
        "Tejal",
        "Desai",
        "Director"
      ],
      "line": 21,
      "id": "free-crm-create-contact-feature;free-crm-create-a-new-conatct-scenario;;6"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 17,
  "name": "Free CRM Create a New Conatct Scenario",
  "description": "",
  "id": "free-crm-create-contact-feature;free-crm-create-a-new-conatct-scenario;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "user is on index Page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "title of login page is Free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user should click login button",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user enters \"paruldesai41@gmail.com\" and \"Parul@123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 10,
      "value": "#Then user check error"
    }
  ],
  "line": 11,
  "name": "user is on homepage",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "user move to new contact page",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "user enters contact details \"Parul\" and \"Desai\" and \"Manager\"",
  "matchedColumns": [
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "user close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "ContactStepDefination.user_is_on_index_Page()"
});
formatter.result({
  "duration": 6417213700,
  "status": "passed"
});
formatter.match({
  "location": "ContactStepDefination.title_of_login_page_is_Free_CRM()"
});
formatter.result({
  "duration": 8973700,
  "status": "passed"
});
formatter.match({
  "location": "ContactStepDefination.user_should_click_login_button()"
});
formatter.result({
  "duration": 2383756900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "paruldesai41@gmail.com",
      "offset": 13
    },
    {
      "val": "Parul@123",
      "offset": 42
    }
  ],
  "location": "ContactStepDefination.user_enters_and(String,String)"
});
formatter.result({
  "duration": 159152700,
  "status": "passed"
});
formatter.match({
  "location": "ContactStepDefination.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 227462700,
  "status": "passed"
});
formatter.match({
  "location": "ContactStepDefination.user_is_on_homepage()"
});
formatter.result({
  "duration": 2035883100,
  "status": "passed"
});
formatter.match({
  "location": "ContactStepDefination.user_move_to_new_contact_page()"
});
formatter.result({
  "duration": 488296000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Parul",
      "offset": 29
    },
    {
      "val": "Desai",
      "offset": 41
    },
    {
      "val": "Manager",
      "offset": 53
    }
  ],
  "location": "ContactStepDefination.user_enters_Contact_Details(String,String,String)"
});
formatter.result({
  "duration": 1200322500,
  "status": "passed"
});
formatter.match({
  "location": "ContactStepDefination.user_close_the_browser()"
});
formatter.result({
  "duration": 1067383800,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Free CRM Create a New Conatct Scenario",
  "description": "",
  "id": "free-crm-create-contact-feature;free-crm-create-a-new-conatct-scenario;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "user is on index Page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "title of login page is Free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user should click login button",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user enters \"paruldesai41@gmail.com\" and \"Parul@123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 10,
      "value": "#Then user check error"
    }
  ],
  "line": 11,
  "name": "user is on homepage",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "user move to new contact page",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "user enters contact details \"Tom\" and \"Peter\" and \"Director\"",
  "matchedColumns": [
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "user close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "ContactStepDefination.user_is_on_index_Page()"
});
formatter.result({
  "duration": 5386359500,
  "status": "passed"
});
formatter.match({
  "location": "ContactStepDefination.title_of_login_page_is_Free_CRM()"
});
formatter.result({
  "duration": 4464700,
  "status": "passed"
});
formatter.match({
  "location": "ContactStepDefination.user_should_click_login_button()"
});
formatter.result({
  "duration": 1906515900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "paruldesai41@gmail.com",
      "offset": 13
    },
    {
      "val": "Parul@123",
      "offset": 42
    }
  ],
  "location": "ContactStepDefination.user_enters_and(String,String)"
});
formatter.result({
  "duration": 132490700,
  "status": "passed"
});
formatter.match({
  "location": "ContactStepDefination.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 223916800,
  "status": "passed"
});
formatter.match({
  "location": "ContactStepDefination.user_is_on_homepage()"
});
formatter.result({
  "duration": 2029203700,
  "status": "passed"
});
formatter.match({
  "location": "ContactStepDefination.user_move_to_new_contact_page()"
});
formatter.result({
  "duration": 503224600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Tom",
      "offset": 29
    },
    {
      "val": "Peter",
      "offset": 39
    },
    {
      "val": "Director",
      "offset": 51
    }
  ],
  "location": "ContactStepDefination.user_enters_Contact_Details(String,String,String)"
});
formatter.result({
  "duration": 1218207000,
  "status": "passed"
});
formatter.match({
  "location": "ContactStepDefination.user_close_the_browser()"
});
formatter.result({
  "duration": 1005784100,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Free CRM Create a New Conatct Scenario",
  "description": "",
  "id": "free-crm-create-contact-feature;free-crm-create-a-new-conatct-scenario;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "user is on index Page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "title of login page is Free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user should click login button",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user enters \"paruldesai41@gmail.com\" and \"Parul@123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 10,
      "value": "#Then user check error"
    }
  ],
  "line": 11,
  "name": "user is on homepage",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "user move to new contact page",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "user enters contact details \"Jenny\" and \"Dsouza\" and \"Team Lead\"",
  "matchedColumns": [
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "user close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "ContactStepDefination.user_is_on_index_Page()"
});
formatter.result({
  "duration": 4635311600,
  "status": "passed"
});
formatter.match({
  "location": "ContactStepDefination.title_of_login_page_is_Free_CRM()"
});
formatter.result({
  "duration": 3999600,
  "status": "passed"
});
formatter.match({
  "location": "ContactStepDefination.user_should_click_login_button()"
});
formatter.result({
  "duration": 1932008100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "paruldesai41@gmail.com",
      "offset": 13
    },
    {
      "val": "Parul@123",
      "offset": 42
    }
  ],
  "location": "ContactStepDefination.user_enters_and(String,String)"
});
formatter.result({
  "duration": 117907200,
  "status": "passed"
});
formatter.match({
  "location": "ContactStepDefination.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 225428700,
  "status": "passed"
});
formatter.match({
  "location": "ContactStepDefination.user_is_on_homepage()"
});
formatter.result({
  "duration": 2024252700,
  "status": "passed"
});
formatter.match({
  "location": "ContactStepDefination.user_move_to_new_contact_page()"
});
formatter.result({
  "duration": 503219300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Jenny",
      "offset": 29
    },
    {
      "val": "Dsouza",
      "offset": 41
    },
    {
      "val": "Team Lead",
      "offset": 54
    }
  ],
  "location": "ContactStepDefination.user_enters_Contact_Details(String,String,String)"
});
formatter.result({
  "duration": 1336919500,
  "status": "passed"
});
formatter.match({
  "location": "ContactStepDefination.user_close_the_browser()"
});
formatter.result({
  "duration": 903167500,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Free CRM Create a New Conatct Scenario",
  "description": "",
  "id": "free-crm-create-contact-feature;free-crm-create-a-new-conatct-scenario;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "user is on index Page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "title of login page is Free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user should click login button",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user enters \"paruldesai41@gmail.com\" and \"Parul@123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 10,
      "value": "#Then user check error"
    }
  ],
  "line": 11,
  "name": "user is on homepage",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "user move to new contact page",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "user enters contact details \"Rohan\" and \"Arora\" and \"Sr.Programmer\"",
  "matchedColumns": [
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "user close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "ContactStepDefination.user_is_on_index_Page()"
});
formatter.result({
  "duration": 5033605000,
  "status": "passed"
});
formatter.match({
  "location": "ContactStepDefination.title_of_login_page_is_Free_CRM()"
});
formatter.result({
  "duration": 3201400,
  "status": "passed"
});
formatter.match({
  "location": "ContactStepDefination.user_should_click_login_button()"
});
formatter.result({
  "duration": 2321537400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "paruldesai41@gmail.com",
      "offset": 13
    },
    {
      "val": "Parul@123",
      "offset": 42
    }
  ],
  "location": "ContactStepDefination.user_enters_and(String,String)"
});
formatter.result({
  "duration": 157476200,
  "status": "passed"
});
formatter.match({
  "location": "ContactStepDefination.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 225370300,
  "status": "passed"
});
formatter.match({
  "location": "ContactStepDefination.user_is_on_homepage()"
});
formatter.result({
  "duration": 2033681700,
  "status": "passed"
});
formatter.match({
  "location": "ContactStepDefination.user_move_to_new_contact_page()"
});
formatter.result({
  "duration": 454397500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Rohan",
      "offset": 29
    },
    {
      "val": "Arora",
      "offset": 41
    },
    {
      "val": "Sr.Programmer",
      "offset": 53
    }
  ],
  "location": "ContactStepDefination.user_enters_Contact_Details(String,String,String)"
});
formatter.result({
  "duration": 1375084100,
  "status": "passed"
});
formatter.match({
  "location": "ContactStepDefination.user_close_the_browser()"
});
formatter.result({
  "duration": 868681400,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Free CRM Create a New Conatct Scenario",
  "description": "",
  "id": "free-crm-create-contact-feature;free-crm-create-a-new-conatct-scenario;;6",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "user is on index Page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "title of login page is Free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user should click login button",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user enters \"paruldesai41@gmail.com\" and \"Parul@123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 10,
      "value": "#Then user check error"
    }
  ],
  "line": 11,
  "name": "user is on homepage",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "user move to new contact page",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "user enters contact details \"Tejal\" and \"Desai\" and \"Director\"",
  "matchedColumns": [
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "user close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "ContactStepDefination.user_is_on_index_Page()"
});
formatter.result({
  "duration": 4984937600,
  "status": "passed"
});
formatter.match({
  "location": "ContactStepDefination.title_of_login_page_is_Free_CRM()"
});
formatter.result({
  "duration": 3696600,
  "status": "passed"
});
formatter.match({
  "location": "ContactStepDefination.user_should_click_login_button()"
});
formatter.result({
  "duration": 2093317600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "paruldesai41@gmail.com",
      "offset": 13
    },
    {
      "val": "Parul@123",
      "offset": 42
    }
  ],
  "location": "ContactStepDefination.user_enters_and(String,String)"
});
formatter.result({
  "duration": 151018000,
  "status": "passed"
});
formatter.match({
  "location": "ContactStepDefination.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 228495600,
  "status": "passed"
});
formatter.match({
  "location": "ContactStepDefination.user_is_on_homepage()"
});
formatter.result({
  "duration": 2024434300,
  "status": "passed"
});
formatter.match({
  "location": "ContactStepDefination.user_move_to_new_contact_page()"
});
formatter.result({
  "duration": 483999600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Tejal",
      "offset": 29
    },
    {
      "val": "Desai",
      "offset": 41
    },
    {
      "val": "Director",
      "offset": 53
    }
  ],
  "location": "ContactStepDefination.user_enters_Contact_Details(String,String,String)"
});
formatter.result({
  "duration": 1258798200,
  "status": "passed"
});
formatter.match({
  "location": "ContactStepDefination.user_close_the_browser()"
});
formatter.result({
  "duration": 908730300,
  "status": "passed"
});
});