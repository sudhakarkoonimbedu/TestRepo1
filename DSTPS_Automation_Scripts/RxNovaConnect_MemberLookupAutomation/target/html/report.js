$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/MemberLookup/MemberLookup_Pharmacy_Verify_PharmacyResults.feature");
formatter.feature({
  "line": 1,
  "name": "MemberLookup Search and verify Pharmacy Pharmacy Results",
  "description": "",
  "id": "memberlookup-search-and-verify-pharmacy-pharmacy-results",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 10,
  "name": "Member Lookup search with valid data",
  "description": "",
  "id": "memberlookup-search-and-verify-pharmacy-pharmacy-results;member-lookup-search-with-valid-data",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 9,
      "name": "@Functional"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "User in Landing Page, he selects the application from menu",
  "rows": [
    {
      "cells": [
        "menu",
        "\u003cApplicationMenu\u003e"
      ],
      "line": 12
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "User search for existing member by entering details in Member Lookup",
  "rows": [
    {
      "cells": [
        "SearchCustomerSet",
        "\u003cSearchCustomerSet\u003e"
      ],
      "line": 14
    },
    {
      "cells": [
        "SearchCustomer",
        "\u003cSearchCustomer\u003e"
      ],
      "line": 15
    },
    {
      "cells": [
        "SearchMemberID",
        "\u003cSearchMemberID\u003e"
      ],
      "line": 16
    },
    {
      "cells": [
        "SearchAltID",
        "\u003cSearchAltID\u003e"
      ],
      "line": 17
    },
    {
      "cells": [
        "SearchExactMatch",
        "\u003cSearchExactMatch\u003e"
      ],
      "line": 18
    },
    {
      "cells": [
        "SearchFirstName",
        "\u003cSearchFirstName\u003e"
      ],
      "line": 19
    },
    {
      "cells": [
        "SearchMI",
        "\u003cSearchMI\u003e"
      ],
      "line": 20
    },
    {
      "cells": [
        "SearchLastName",
        "\u003cSearchLastName\u003e"
      ],
      "line": 21
    },
    {
      "cells": [
        "SearchDOB",
        "\u003cSearchDOB\u003e"
      ],
      "line": 22
    },
    {
      "cells": [
        "SearchClaimID",
        "\u003cSearchClaimID\u003e"
      ],
      "line": 23
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "Member details should be displayed",
  "rows": [
    {
      "cells": [
        "Customer",
        "\u003cCustomer\u003e"
      ],
      "line": 25
    },
    {
      "cells": [
        "MemberID",
        "\u003cMemberID\u003e"
      ],
      "line": 26
    },
    {
      "cells": [
        "AltMemberID",
        "\u003cAltMemberID\u003e"
      ],
      "line": 27
    },
    {
      "cells": [
        "FirstName",
        "\u003cFirstName\u003e"
      ],
      "line": 28
    },
    {
      "cells": [
        "LastName",
        "\u003cLastName\u003e"
      ],
      "line": 29
    },
    {
      "cells": [
        "MI",
        "\u003cMI\u003e"
      ],
      "line": 30
    },
    {
      "cells": [
        "DOB",
        "\u003cDOB\u003e"
      ],
      "line": 31
    },
    {
      "cells": [
        "StartDate",
        "\u003cStartDate\u003e"
      ],
      "line": 32
    },
    {
      "cells": [
        "EndDate",
        "\u003cEndDate\u003e"
      ],
      "line": 33
    }
  ],
  "keyword": "Then "
});
formatter.examples({
  "line": 35,
  "name": "",
  "description": "",
  "id": "memberlookup-search-and-verify-pharmacy-pharmacy-results;member-lookup-search-with-valid-data;",
  "rows": [
    {
      "cells": [
        "ApplicationMenu",
        "SearchCustomerSet",
        "SearchCustomer",
        "SearchMemberID",
        "SearchAltID",
        "SearchExactMatch",
        "SearchFirstName",
        "SearchMI",
        "SearchLastName",
        "SearchDOB",
        "SearchClaimID",
        "Customer",
        "MemberID",
        "AltMemberID",
        "FirstName",
        "LastName",
        "MI",
        "DOB",
        "StartDate",
        "EndDate"
      ],
      "line": 36,
      "id": "memberlookup-search-and-verify-pharmacy-pharmacy-results;member-lookup-search-with-valid-data;;1"
    },
    {
      "cells": [
        "Miscellaneous-\u003eRxNova Connect",
        "Humana",
        "0319 - 0319HUMANA",
        "90818000101",
        "",
        "checked",
        "",
        "",
        "",
        "",
        "",
        "Customer^0319 - 0319HUMANA",
        "Member ID^000000090818000101",
        "Alt Member ID^",
        "First Name^MBR1",
        "Last Name^MBRNONBRIDGECUST",
        "MI^",
        "DOB^01/15/1964",
        "Start Date^01/01/2015",
        "End Date^No end date"
      ],
      "line": 37,
      "id": "memberlookup-search-and-verify-pharmacy-pharmacy-results;member-lookup-search-with-valid-data;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 13948120176,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "performLogin",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "the user access the Hybrid Desktop Application",
  "rows": [
    {
      "cells": [
        "userid",
        "dt79655"
      ],
      "line": 5
    },
    {
      "cells": [
        "password",
        "rxnova1"
      ],
      "line": 6
    },
    {
      "cells": [
        "region",
        "DR1"
      ],
      "line": 7
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "SearchMemberLookUpAndVerifyMemberDetails.user_can_access_the_Hybrid_desktop_application(String,String\u003e)"
});
formatter.result({
  "duration": 33900364197,
  "status": "passed"
});
formatter.scenario({
  "line": 37,
  "name": "Member Lookup search with valid data",
  "description": "",
  "id": "memberlookup-search-and-verify-pharmacy-pharmacy-results;member-lookup-search-with-valid-data;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 9,
      "name": "@Functional"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "User in Landing Page, he selects the application from menu",
  "matchedColumns": [
    0
  ],
  "rows": [
    {
      "cells": [
        "menu",
        "Miscellaneous-\u003eRxNova Connect"
      ],
      "line": 12
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "User search for existing member by entering details in Member Lookup",
  "matchedColumns": [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10
  ],
  "rows": [
    {
      "cells": [
        "SearchCustomerSet",
        "Humana"
      ],
      "line": 14
    },
    {
      "cells": [
        "SearchCustomer",
        "0319 - 0319HUMANA"
      ],
      "line": 15
    },
    {
      "cells": [
        "SearchMemberID",
        "90818000101"
      ],
      "line": 16
    },
    {
      "cells": [
        "SearchAltID",
        ""
      ],
      "line": 17
    },
    {
      "cells": [
        "SearchExactMatch",
        "checked"
      ],
      "line": 18
    },
    {
      "cells": [
        "SearchFirstName",
        ""
      ],
      "line": 19
    },
    {
      "cells": [
        "SearchMI",
        ""
      ],
      "line": 20
    },
    {
      "cells": [
        "SearchLastName",
        ""
      ],
      "line": 21
    },
    {
      "cells": [
        "SearchDOB",
        ""
      ],
      "line": 22
    },
    {
      "cells": [
        "SearchClaimID",
        ""
      ],
      "line": 23
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "Member details should be displayed",
  "matchedColumns": [
    16,
    17,
    18,
    19,
    11,
    12,
    13,
    14,
    15
  ],
  "rows": [
    {
      "cells": [
        "Customer",
        "Customer^0319 - 0319HUMANA"
      ],
      "line": 25
    },
    {
      "cells": [
        "MemberID",
        "Member ID^000000090818000101"
      ],
      "line": 26
    },
    {
      "cells": [
        "AltMemberID",
        "Alt Member ID^"
      ],
      "line": 27
    },
    {
      "cells": [
        "FirstName",
        "First Name^MBR1"
      ],
      "line": 28
    },
    {
      "cells": [
        "LastName",
        "Last Name^MBRNONBRIDGECUST"
      ],
      "line": 29
    },
    {
      "cells": [
        "MI",
        "MI^"
      ],
      "line": 30
    },
    {
      "cells": [
        "DOB",
        "DOB^01/15/1964"
      ],
      "line": 31
    },
    {
      "cells": [
        "StartDate",
        "Start Date^01/01/2015"
      ],
      "line": 32
    },
    {
      "cells": [
        "EndDate",
        "End Date^No end date"
      ],
      "line": 33
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SearchMemberLookUpAndVerifyMemberDetails.the_user_selects_the_application_from_menu_options(String,String\u003e)"
});
formatter.result({
  "duration": 13711513092,
  "status": "passed"
});
formatter.match({
  "location": "SearchMemberLookUpAndVerifyMemberDetails.the_user_search_for_the_existing_member(String,String\u003e)"
});
formatter.result({
  "duration": 16065976693,
  "status": "passed"
});
formatter.match({
  "location": "SearchMemberLookUpAndVerifyMemberDetails.verify_member_details(String,String\u003e)"
});
formatter.result({
  "duration": 4183512465,
  "status": "passed"
});
formatter.write("Completed Scenario");
formatter.after({
  "duration": 431484,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 41,
  "name": "Verify Header details",
  "description": "",
  "id": "memberlookup-search-and-verify-pharmacy-pharmacy-results;verify-header-details",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 40,
      "name": "@Functional"
    }
  ]
});
formatter.step({
  "line": 42,
  "name": "User in Member Lookup Search Page and click on Blue arrow at Customer Field",
  "keyword": "Given "
});
formatter.step({
  "line": 43,
  "name": "User verifies the header details",
  "rows": [
    {
      "cells": [
        "CustomerSet",
        "\u003cCustomerSet\u003e"
      ],
      "line": 44
    },
    {
      "cells": [
        "Customer",
        "\u003cCustomer\u003e"
      ],
      "line": 45
    },
    {
      "cells": [
        "Client",
        "\u003cClient\u003e"
      ],
      "line": 46
    },
    {
      "cells": [
        "Group",
        "\u003cGroup\u003e"
      ],
      "line": 47
    },
    {
      "cells": [
        "Gender",
        "\u003cGender\u003e"
      ],
      "line": 48
    },
    {
      "cells": [
        "MemberID",
        "\u003cMemberID\u003e"
      ],
      "line": 49
    },
    {
      "cells": [
        "AltMemberID",
        "\u003cAltMemberID\u003e"
      ],
      "line": 50
    },
    {
      "cells": [
        "FirstName",
        "\u003cFirstName\u003e"
      ],
      "line": 51
    },
    {
      "cells": [
        "LastName",
        "\u003cLastName\u003e"
      ],
      "line": 52
    },
    {
      "cells": [
        "DOB",
        "\u003cDOB\u003e"
      ],
      "line": 53
    }
  ],
  "keyword": "Then "
});
formatter.examples({
  "line": 55,
  "name": "",
  "description": "",
  "id": "memberlookup-search-and-verify-pharmacy-pharmacy-results;verify-header-details;",
  "rows": [
    {
      "cells": [
        "CustomerSet",
        "Customer",
        "Client",
        "Group",
        "Gender",
        "MemberID",
        "AltMemberID",
        "FirstName",
        "LastName",
        "DOB"
      ],
      "line": 56,
      "id": "memberlookup-search-and-verify-pharmacy-pharmacy-results;verify-header-details;;1"
    },
    {
      "cells": [
        "Customer Set:^Humana",
        "Customer:^0319 - 0319HUMANA",
        "Client:^9007 - NBRG--CLNT1",
        "Group:^RXCONNECT2",
        "Gender:^M",
        "Member ID:^000000090818000101",
        "Alt Member ID:^",
        "First Name:^MBR1",
        "Last Name:^MBRNONBRIDGECUST",
        "DOB:^01/15/1964"
      ],
      "line": 57,
      "id": "memberlookup-search-and-verify-pharmacy-pharmacy-results;verify-header-details;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 47977,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "performLogin",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "the user access the Hybrid Desktop Application",
  "rows": [
    {
      "cells": [
        "userid",
        "dt79655"
      ],
      "line": 5
    },
    {
      "cells": [
        "password",
        "rxnova1"
      ],
      "line": 6
    },
    {
      "cells": [
        "region",
        "DR1"
      ],
      "line": 7
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "SearchMemberLookUpAndVerifyMemberDetails.user_can_access_the_Hybrid_desktop_application(String,String\u003e)"
});
formatter.result({
  "duration": 1436270,
  "status": "passed"
});
formatter.scenario({
  "line": 57,
  "name": "Verify Header details",
  "description": "",
  "id": "memberlookup-search-and-verify-pharmacy-pharmacy-results;verify-header-details;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 40,
      "name": "@Functional"
    }
  ]
});
formatter.step({
  "line": 42,
  "name": "User in Member Lookup Search Page and click on Blue arrow at Customer Field",
  "keyword": "Given "
});
formatter.step({
  "line": 43,
  "name": "User verifies the header details",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9
  ],
  "rows": [
    {
      "cells": [
        "CustomerSet",
        "Customer Set:^Humana"
      ],
      "line": 44
    },
    {
      "cells": [
        "Customer",
        "Customer:^0319 - 0319HUMANA"
      ],
      "line": 45
    },
    {
      "cells": [
        "Client",
        "Client:^9007 - NBRG--CLNT1"
      ],
      "line": 46
    },
    {
      "cells": [
        "Group",
        "Group:^RXCONNECT2"
      ],
      "line": 47
    },
    {
      "cells": [
        "Gender",
        "Gender:^M"
      ],
      "line": 48
    },
    {
      "cells": [
        "MemberID",
        "Member ID:^000000090818000101"
      ],
      "line": 49
    },
    {
      "cells": [
        "AltMemberID",
        "Alt Member ID:^"
      ],
      "line": 50
    },
    {
      "cells": [
        "FirstName",
        "First Name:^MBR1"
      ],
      "line": 51
    },
    {
      "cells": [
        "LastName",
        "Last Name:^MBRNONBRIDGECUST"
      ],
      "line": 52
    },
    {
      "cells": [
        "DOB",
        "DOB:^01/15/1964"
      ],
      "line": 53
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SearchMemberLookUpAndVerifyMemberDetails.click_on_customer_link()"
});
formatter.result({
  "duration": 11672555474,
  "status": "passed"
});
formatter.match({
  "location": "SearchMemberLookUpAndVerifyMemberDetails.verify_header_details(String,String\u003e)"
});
formatter.result({
  "duration": 3324223478,
  "status": "passed"
});
formatter.write("Completed Scenario");
formatter.after({
  "duration": 412777,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 60,
  "name": "Verify Pharmacy_Pharmacy Results",
  "description": "",
  "id": "memberlookup-search-and-verify-pharmacy-pharmacy-results;verify-pharmacy-pharmacy-results",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 59,
      "name": "@Functional"
    }
  ]
});
formatter.step({
  "line": 61,
  "name": "User in Member Lookup details page",
  "keyword": "Given "
});
formatter.step({
  "line": 62,
  "name": "User click on Pharmacy icon",
  "keyword": "Then "
});
formatter.step({
  "line": 63,
  "name": "User provides details and click on Search button",
  "rows": [
    {
      "cells": [
        "City",
        "\u003cCity\u003e"
      ],
      "line": 64
    },
    {
      "cells": [
        "State",
        "\u003cState\u003e"
      ],
      "line": 65
    },
    {
      "cells": [
        "Zip",
        "\u003cZip\u003e"
      ],
      "line": 66
    },
    {
      "cells": [
        "NPI",
        "\u003cNPI\u003e"
      ],
      "line": 67
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 68,
  "name": "User verifies Pharmacy Results details",
  "rows": [
    {
      "cells": [
        "PRPharmacyName",
        "\u003cPRPharmacyName\u003e"
      ],
      "line": 69
    },
    {
      "cells": [
        "PRNPI",
        "\u003cPRNPI\u003e"
      ],
      "line": 70
    },
    {
      "cells": [
        "PRAddress",
        "\u003cPRAddress\u003e"
      ],
      "line": 71
    },
    {
      "cells": [
        "PRCity",
        "\u003cPRCity\u003e"
      ],
      "line": 72
    },
    {
      "cells": [
        "PRState",
        "\u003cPRState\u003e"
      ],
      "line": 73
    },
    {
      "cells": [
        "PRZipCode",
        "\u003cPRZipCode\u003e"
      ],
      "line": 74
    },
    {
      "cells": [
        "PRGILegalBusinessName",
        "\u003cPRGILegalBusinessName\u003e"
      ],
      "line": 75
    },
    {
      "cells": [
        "PRGIName",
        "\u003cPRGIName\u003e"
      ],
      "line": 76
    },
    {
      "cells": [
        "PRGINCPDPID",
        "\u003cPRGINCPDPID\u003e"
      ],
      "line": 77
    },
    {
      "cells": [
        "PRGINPIID",
        "\u003cPRGINPIID\u003e"
      ],
      "line": 78
    },
    {
      "cells": [
        "PRGIMedicareID",
        "\u003cPRGIMedicareID\u003e"
      ],
      "line": 79
    },
    {
      "cells": [
        "PRGIStoreNumber",
        "\u003cPRGIStoreNumber\u003e"
      ],
      "line": 80
    },
    {
      "cells": [
        "PRGIDoctorsName",
        "\u003cPRGIDoctorsName\u003e"
      ],
      "line": 81
    },
    {
      "cells": [
        "PRGILanguageCodes",
        "\u003cPRGILanguageCodes\u003e"
      ],
      "line": 82
    },
    {
      "cells": [
        "PRGIDispenseClassCode",
        "\u003cPRGIDispenseClassCode\u003e"
      ],
      "line": 83
    },
    {
      "cells": [
        "PRGIPriProvTypeCode",
        "\u003cPRGIPriProvTypeCode\u003e"
      ],
      "line": 84
    },
    {
      "cells": [
        "PRGISecProvTypeCode",
        "\u003cPRGISecProvTypeCode\u003e"
      ],
      "line": 85
    },
    {
      "cells": [
        "PRGITerProvTypeCode",
        "\u003cPRGITerProvTypeCode\u003e"
      ],
      "line": 86
    },
    {
      "cells": [
        "LocationAddress1",
        "\u003cLocationAddress1\u003e"
      ],
      "line": 87
    },
    {
      "cells": [
        "LocationAddress2",
        "\u003cLocationAddress2\u003e"
      ],
      "line": 88
    },
    {
      "cells": [
        "LocationCity",
        "\u003cLocationCity\u003e"
      ],
      "line": 89
    },
    {
      "cells": [
        "LocationState",
        "\u003cLocationState\u003e"
      ],
      "line": 90
    },
    {
      "cells": [
        "LocationZIP",
        "\u003cLocationZIP\u003e"
      ],
      "line": 91
    },
    {
      "cells": [
        "LocationPhone",
        "\u003cLocationPhone\u003e"
      ],
      "line": 92
    },
    {
      "cells": [
        "LocationExtension",
        "\u003cLocationExtension\u003e"
      ],
      "line": 93
    },
    {
      "cells": [
        "LocationFax",
        "\u003cLocationFax\u003e"
      ],
      "line": 94
    },
    {
      "cells": [
        "LocationEmail",
        "\u003cLocationEmail\u003e"
      ],
      "line": 95
    },
    {
      "cells": [
        "LocationCrossStDir",
        "\u003cLocationCrossStDir\u003e"
      ],
      "line": 96
    },
    {
      "cells": [
        "PRS24HourOperation",
        "\u003cPRS24HourOperation\u003e"
      ],
      "line": 97
    },
    {
      "cells": [
        "PRSProvideHours",
        "\u003cPRSProvideHours\u003e"
      ],
      "line": 98
    },
    {
      "cells": [
        "PRSAcceptsEPresc",
        "\u003cPRSAcceptsEPresc\u003e"
      ],
      "line": 99
    },
    {
      "cells": [
        "PRSDeliveryService",
        "\u003cPRSDeliveryService\u003e"
      ],
      "line": 100
    },
    {
      "cells": [
        "PRSComService",
        "\u003cPRSComService\u003e"
      ],
      "line": 101
    },
    {
      "cells": [
        "PRSDriveUpWindow",
        "\u003cPRSDriveUpWindow\u003e"
      ],
      "line": 102
    },
    {
      "cells": [
        "PRSDurableMedEquip",
        "\u003cPRSDurableMedEquip\u003e"
      ],
      "line": 103
    },
    {
      "cells": [
        "PRSWalkInClinic",
        "\u003cPRSWalkInClinic\u003e"
      ],
      "line": 104
    },
    {
      "cells": [
        "PRS24HourEmerService",
        "\u003cPRS24HourEmerService\u003e"
      ],
      "line": 105
    },
    {
      "cells": [
        "PRSMultiDoseComPkg",
        "\u003cPRSMultiDoseComPkg\u003e"
      ],
      "line": 106
    },
    {
      "cells": [
        "PRSImmunProvided",
        "\u003cPRSImmunProvided\u003e"
      ],
      "line": 107
    },
    {
      "cells": [
        "PRSHandicappedAcces",
        "\u003cPRSHandicappedAcces\u003e"
      ],
      "line": 108
    },
    {
      "cells": [
        "PRS340BStatus",
        "\u003cPRS340BStatus\u003e"
      ],
      "line": 109
    },
    {
      "cells": [
        "PRSCDoorFacility",
        "\u003cPRSCDoorFacility\u003e"
      ],
      "line": 110
    }
  ],
  "keyword": "Then "
});
formatter.examples({
  "line": 112,
  "name": "",
  "description": "",
  "id": "memberlookup-search-and-verify-pharmacy-pharmacy-results;verify-pharmacy-pharmacy-results;",
  "rows": [
    {
      "cells": [
        "City",
        "State",
        "Zip",
        "NPI",
        "PRPharmacyName",
        "PRNPI",
        "PRAddress",
        "PRCity",
        "PRState",
        "PRZipCode",
        "PRGILegalBusinessName",
        "PRGIName",
        "PRGINCPDPID",
        "PRGINPIID",
        "PRGIMedicareID",
        "PRGIStoreNumber",
        "PRGIDoctorsName",
        "PRGILanguageCodes",
        "PRGIDispenseClassCode",
        "PRGIPriProvTypeCode",
        "PRGISecProvTypeCode",
        "PRGITerProvTypeCode",
        "LocationAddress1",
        "LocationAddress2",
        "LocationCity",
        "LocationState",
        "LocationZIP",
        "LocationPhone",
        "LocationExtension",
        "LocationFax",
        "LocationEmail",
        "LocationCrossStDir",
        "PRS24HourOperation",
        "PRSProvideHours",
        "PRSAcceptsEPresc",
        "PRSDeliveryService",
        "PRSComService",
        "PRSDriveUpWindow",
        "PRSDurableMedEquip",
        "PRSWalkInClinic",
        "PRS24HourEmerService",
        "PRSMultiDoseComPkg",
        "PRSImmunProvided",
        "PRSHandicappedAcces",
        "PRS340BStatus",
        "PRSCDoorFacility"
      ],
      "line": 113,
      "id": "memberlookup-search-and-verify-pharmacy-pharmacy-results;verify-pharmacy-pharmacy-results;;1"
    },
    {
      "cells": [
        "",
        "",
        "",
        "1477568087",
        "Pharmacy Name^LIMESTONE DRUG",
        "NPI^1477568087",
        "Address^200 W MARKET ST",
        "City^ATHENS",
        "State^AL",
        "Zip Code^35611 - 0709",
        "Legal business name^TENNESSEE VALLEY HEALTHCARE LLC",
        "Name^LIMESTONE DRUG",
        "NCPDP ID^0100886",
        "NPI ID^1477568087",
        "Medicare ID^4917380001",
        "Store number^",
        "Doctor\u0027s name^",
        "Language code(s)^en (English)",
        "Dispense class code^01 (Independent Pharmacy)",
        "Primary provider type code^01 (Community/Retail Pharmacy)",
        "Secondary provider type code^",
        "Tertiary provider type code^",
        "Address 1^200 W MARKET ST",
        "Address 2^",
        "City^ATHENS",
        "State^AL",
        "ZIP^35611 - 0709",
        "Phone^(256) 232 - 3811",
        "Extension^",
        "Fax^(256) 232 - 2422",
        "Email^",
        "Cross St / Directions^",
        "24 hour operation^No",
        "Provider hours^Sunday 0900-1700$Monday 0700-1900$Tuesday 0700-1900$Wednesday 0700-1900$Thursday 0700-1900$Friday 0700-1900$Saturday 0800-1700",
        "Accepts ePrescriptions^N",
        "Delivery service^Y",
        "Compounding service^Y",
        "Drive-up window^Y",
        "Durable medical equipment^Y",
        "Walk-in clinic^",
        "24-hour emergency service^",
        "Multi-dose compliance packaging^",
        "Immunizations provided^",
        "Handicapped accessible^Y",
        "340B status^",
        "Closed door facility^"
      ],
      "line": 114,
      "id": "memberlookup-search-and-verify-pharmacy-pharmacy-results;verify-pharmacy-pharmacy-results;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 49183,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "performLogin",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "the user access the Hybrid Desktop Application",
  "rows": [
    {
      "cells": [
        "userid",
        "dt79655"
      ],
      "line": 5
    },
    {
      "cells": [
        "password",
        "rxnova1"
      ],
      "line": 6
    },
    {
      "cells": [
        "region",
        "DR1"
      ],
      "line": 7
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "SearchMemberLookUpAndVerifyMemberDetails.user_can_access_the_Hybrid_desktop_application(String,String\u003e)"
});
formatter.result({
  "duration": 1503859,
  "status": "passed"
});
formatter.scenario({
  "line": 114,
  "name": "Verify Pharmacy_Pharmacy Results",
  "description": "",
  "id": "memberlookup-search-and-verify-pharmacy-pharmacy-results;verify-pharmacy-pharmacy-results;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 59,
      "name": "@Functional"
    }
  ]
});
formatter.step({
  "line": 61,
  "name": "User in Member Lookup details page",
  "keyword": "Given "
});
formatter.step({
  "line": 62,
  "name": "User click on Pharmacy icon",
  "keyword": "Then "
});
formatter.step({
  "line": 63,
  "name": "User provides details and click on Search button",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "rows": [
    {
      "cells": [
        "City",
        ""
      ],
      "line": 64
    },
    {
      "cells": [
        "State",
        ""
      ],
      "line": 65
    },
    {
      "cells": [
        "Zip",
        ""
      ],
      "line": 66
    },
    {
      "cells": [
        "NPI",
        "1477568087"
      ],
      "line": 67
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 68,
  "name": "User verifies Pharmacy Results details",
  "matchedColumns": [
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
    21,
    22,
    23,
    24,
    25,
    26,
    27,
    28,
    29,
    30,
    31,
    32,
    33,
    34,
    35,
    36,
    37,
    38,
    39,
    40,
    41,
    42,
    43,
    44,
    45
  ],
  "rows": [
    {
      "cells": [
        "PRPharmacyName",
        "Pharmacy Name^LIMESTONE DRUG"
      ],
      "line": 69
    },
    {
      "cells": [
        "PRNPI",
        "NPI^1477568087"
      ],
      "line": 70
    },
    {
      "cells": [
        "PRAddress",
        "Address^200 W MARKET ST"
      ],
      "line": 71
    },
    {
      "cells": [
        "PRCity",
        "City^ATHENS"
      ],
      "line": 72
    },
    {
      "cells": [
        "PRState",
        "State^AL"
      ],
      "line": 73
    },
    {
      "cells": [
        "PRZipCode",
        "Zip Code^35611 - 0709"
      ],
      "line": 74
    },
    {
      "cells": [
        "PRGILegalBusinessName",
        "Legal business name^TENNESSEE VALLEY HEALTHCARE LLC"
      ],
      "line": 75
    },
    {
      "cells": [
        "PRGIName",
        "Name^LIMESTONE DRUG"
      ],
      "line": 76
    },
    {
      "cells": [
        "PRGINCPDPID",
        "NCPDP ID^0100886"
      ],
      "line": 77
    },
    {
      "cells": [
        "PRGINPIID",
        "NPI ID^1477568087"
      ],
      "line": 78
    },
    {
      "cells": [
        "PRGIMedicareID",
        "Medicare ID^4917380001"
      ],
      "line": 79
    },
    {
      "cells": [
        "PRGIStoreNumber",
        "Store number^"
      ],
      "line": 80
    },
    {
      "cells": [
        "PRGIDoctorsName",
        "Doctor\u0027s name^"
      ],
      "line": 81
    },
    {
      "cells": [
        "PRGILanguageCodes",
        "Language code(s)^en (English)"
      ],
      "line": 82
    },
    {
      "cells": [
        "PRGIDispenseClassCode",
        "Dispense class code^01 (Independent Pharmacy)"
      ],
      "line": 83
    },
    {
      "cells": [
        "PRGIPriProvTypeCode",
        "Primary provider type code^01 (Community/Retail Pharmacy)"
      ],
      "line": 84
    },
    {
      "cells": [
        "PRGISecProvTypeCode",
        "Secondary provider type code^"
      ],
      "line": 85
    },
    {
      "cells": [
        "PRGITerProvTypeCode",
        "Tertiary provider type code^"
      ],
      "line": 86
    },
    {
      "cells": [
        "LocationAddress1",
        "Address 1^200 W MARKET ST"
      ],
      "line": 87
    },
    {
      "cells": [
        "LocationAddress2",
        "Address 2^"
      ],
      "line": 88
    },
    {
      "cells": [
        "LocationCity",
        "City^ATHENS"
      ],
      "line": 89
    },
    {
      "cells": [
        "LocationState",
        "State^AL"
      ],
      "line": 90
    },
    {
      "cells": [
        "LocationZIP",
        "ZIP^35611 - 0709"
      ],
      "line": 91
    },
    {
      "cells": [
        "LocationPhone",
        "Phone^(256) 232 - 3811"
      ],
      "line": 92
    },
    {
      "cells": [
        "LocationExtension",
        "Extension^"
      ],
      "line": 93
    },
    {
      "cells": [
        "LocationFax",
        "Fax^(256) 232 - 2422"
      ],
      "line": 94
    },
    {
      "cells": [
        "LocationEmail",
        "Email^"
      ],
      "line": 95
    },
    {
      "cells": [
        "LocationCrossStDir",
        "Cross St / Directions^"
      ],
      "line": 96
    },
    {
      "cells": [
        "PRS24HourOperation",
        "24 hour operation^No"
      ],
      "line": 97
    },
    {
      "cells": [
        "PRSProvideHours",
        "Provider hours^Sunday 0900-1700$Monday 0700-1900$Tuesday 0700-1900$Wednesday 0700-1900$Thursday 0700-1900$Friday 0700-1900$Saturday 0800-1700"
      ],
      "line": 98
    },
    {
      "cells": [
        "PRSAcceptsEPresc",
        "Accepts ePrescriptions^N"
      ],
      "line": 99
    },
    {
      "cells": [
        "PRSDeliveryService",
        "Delivery service^Y"
      ],
      "line": 100
    },
    {
      "cells": [
        "PRSComService",
        "Compounding service^Y"
      ],
      "line": 101
    },
    {
      "cells": [
        "PRSDriveUpWindow",
        "Drive-up window^Y"
      ],
      "line": 102
    },
    {
      "cells": [
        "PRSDurableMedEquip",
        "Durable medical equipment^Y"
      ],
      "line": 103
    },
    {
      "cells": [
        "PRSWalkInClinic",
        "Walk-in clinic^"
      ],
      "line": 104
    },
    {
      "cells": [
        "PRS24HourEmerService",
        "24-hour emergency service^"
      ],
      "line": 105
    },
    {
      "cells": [
        "PRSMultiDoseComPkg",
        "Multi-dose compliance packaging^"
      ],
      "line": 106
    },
    {
      "cells": [
        "PRSImmunProvided",
        "Immunizations provided^"
      ],
      "line": 107
    },
    {
      "cells": [
        "PRSHandicappedAcces",
        "Handicapped accessible^Y"
      ],
      "line": 108
    },
    {
      "cells": [
        "PRS340BStatus",
        "340B status^"
      ],
      "line": 109
    },
    {
      "cells": [
        "PRSCDoorFacility",
        "Closed door facility^"
      ],
      "line": 110
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SearchMemberLookUpAndVerifyMemberDetails.verify_member_lookup_detail()"
});
formatter.result({
  "duration": 40266857,
  "status": "passed"
});
formatter.match({
  "location": "VerifyMemberLookUpPharmacyResults.user_click_on_pharmacy()"
});
formatter.result({
  "duration": 1320597500,
  "status": "passed"
});
formatter.match({
  "location": "VerifyMemberLookUpPharmacyResults.search_for_network_pharmacies(String,String\u003e)"
});
formatter.result({
  "duration": 10921668064,
  "status": "passed"
});
formatter.match({
  "location": "VerifyMemberLookUpPharmacyResults.verify_pharmacy_results_details(String,String\u003e)"
});
formatter.result({
  "duration": 20646215912,
  "status": "passed"
});
formatter.write("Completed Scenario");
formatter.after({
  "duration": 370836,
  "status": "passed"
});
});