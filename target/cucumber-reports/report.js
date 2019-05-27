$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Category.feature");
formatter.feature({
  "line": 2,
  "name": "User should able to navigate to all",
  "description": "category page successfully",
  "id": "user-should-able-to-navigate-to-all",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Category"
    }
  ]
});
formatter.scenarioOutline({
  "line": 5,
  "name": "User can nevigets is correct  category page,",
  "description": "so that he can user all products features from categories",
  "id": "user-should-able-to-navigate-to-all;user-can-nevigets-is-correct--category-page,",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "user clicks on \"\u003cCategory\u003e\" link from the menu",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "user should able to navigate to \"\u003crelated category page\u003e\"successfully",
  "keyword": "Then "
});
formatter.examples({
  "line": 9,
  "name": "",
  "description": "",
  "id": "user-should-able-to-navigate-to-all;user-can-nevigets-is-correct--category-page,;",
  "rows": [
    {
      "cells": [
        "Category",
        "related category page"
      ],
      "line": 10,
      "id": "user-should-able-to-navigate-to-all;user-can-nevigets-is-correct--category-page,;;1"
    },
    {
      "cells": [
        "Computers",
        "https://demo.nopcommerce.com/computers"
      ],
      "line": 11,
      "id": "user-should-able-to-navigate-to-all;user-can-nevigets-is-correct--category-page,;;2"
    },
    {
      "cells": [
        "Electronics",
        "https://demo.nopcommerce.com/electronics"
      ],
      "line": 12,
      "id": "user-should-able-to-navigate-to-all;user-can-nevigets-is-correct--category-page,;;3"
    },
    {
      "cells": [
        "Apparel",
        "https://demo.nopcommerce.com/apparel"
      ],
      "line": 13,
      "id": "user-should-able-to-navigate-to-all;user-can-nevigets-is-correct--category-page,;;4"
    },
    {
      "cells": [
        "Digital downloads",
        "https://demo.nopcommerce.com/digitaldownloads"
      ],
      "line": 14,
      "id": "user-should-able-to-navigate-to-all;user-can-nevigets-is-correct--category-page,;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 8433483700,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "User can nevigets is correct  category page,",
  "description": "so that he can user all products features from categories",
  "id": "user-should-able-to-navigate-to-all;user-can-nevigets-is-correct--category-page,;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Category"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "user clicks on \"Computers\" link from the menu",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "user should able to navigate to \"https://demo.nopcommerce.com/computers\"successfully",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Computers",
      "offset": 16
    }
  ],
  "location": "MyStepdefs.userClicksOnLinkFromTheMenu(String)"
});
formatter.result({
  "duration": 1583074900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://demo.nopcommerce.com/computers",
      "offset": 33
    }
  ],
  "location": "MyStepdefs.userShouldAbleToNavigateToSuccessfully(String)"
});
formatter.result({
  "duration": 26996800,
  "status": "passed"
});
formatter.after({
  "duration": 484800,
  "status": "passed"
});
formatter.before({
  "duration": 5609218400,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "User can nevigets is correct  category page,",
  "description": "so that he can user all products features from categories",
  "id": "user-should-able-to-navigate-to-all;user-can-nevigets-is-correct--category-page,;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Category"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "user clicks on \"Electronics\" link from the menu",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "user should able to navigate to \"https://demo.nopcommerce.com/electronics\"successfully",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Electronics",
      "offset": 16
    }
  ],
  "location": "MyStepdefs.userClicksOnLinkFromTheMenu(String)"
});
formatter.result({
  "duration": 1362810700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://demo.nopcommerce.com/electronics",
      "offset": 33
    }
  ],
  "location": "MyStepdefs.userShouldAbleToNavigateToSuccessfully(String)"
});
formatter.result({
  "duration": 10556800,
  "status": "passed"
});
formatter.after({
  "duration": 41000,
  "status": "passed"
});
formatter.before({
  "duration": 5657666400,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "User can nevigets is correct  category page,",
  "description": "so that he can user all products features from categories",
  "id": "user-should-able-to-navigate-to-all;user-can-nevigets-is-correct--category-page,;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Category"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "user clicks on \"Apparel\" link from the menu",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "user should able to navigate to \"https://demo.nopcommerce.com/apparel\"successfully",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Apparel",
      "offset": 16
    }
  ],
  "location": "MyStepdefs.userClicksOnLinkFromTheMenu(String)"
});
formatter.result({
  "duration": 833000400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://demo.nopcommerce.com/apparel",
      "offset": 33
    }
  ],
  "location": "MyStepdefs.userShouldAbleToNavigateToSuccessfully(String)"
});
formatter.result({
  "duration": 9098200,
  "status": "passed"
});
formatter.after({
  "duration": 30300,
  "status": "passed"
});
formatter.before({
  "duration": 5693519000,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "User can nevigets is correct  category page,",
  "description": "so that he can user all products features from categories",
  "id": "user-should-able-to-navigate-to-all;user-can-nevigets-is-correct--category-page,;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Category"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "user clicks on \"Digital downloads\" link from the menu",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "user should able to navigate to \"https://demo.nopcommerce.com/digitaldownloads\"successfully",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Digital downloads",
      "offset": 16
    }
  ],
  "location": "MyStepdefs.userClicksOnLinkFromTheMenu(String)"
});
formatter.result({
  "duration": 1676152200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://demo.nopcommerce.com/digitaldownloads",
      "offset": 33
    }
  ],
  "location": "MyStepdefs.userShouldAbleToNavigateToSuccessfully(String)"
});
formatter.result({
  "duration": 12746500,
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:86)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat org.junit.Assert.assertTrue(Assert.java:52)\r\n\tat CdefgProje.Utils.assertCurrentURL(Utils.java:182)\r\n\tat CdefgProje.MyStepdefs.userShouldAbleToNavigateToSuccessfully(MyStepdefs.java:69)\r\n\tat ✽.Then user should able to navigate to \"https://demo.nopcommerce.com/digitaldownloads\"successfully(Category.feature:8)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 2460421200,
  "status": "passed"
});
});