$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("platform/AgentAutoUpdate.feature");
formatter.feature({
  "line": 1,
  "name": "Agent Auto Update Feature",
  "description": "",
  "id": "agent-auto-update-feature",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Validate partner and manifest details with enabled manifest to Partners API-C3601661",
  "description": "",
  "id": "agent-auto-update-feature;validate-partner-and-manifest-details-with-enabled-manifest-to-partners-api-c3601661",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@PlatformRegression"
    },
    {
      "line": 3,
      "name": "@Win7_32Bit"
    },
    {
      "line": 3,
      "name": "@Win7_64Bit"
    },
    {
      "line": 3,
      "name": "@Win8_32Bit"
    },
    {
      "line": 3,
      "name": "@Win8_64Bit"
    },
    {
      "line": 3,
      "name": "@Win10_32Bit"
    },
    {
      "line": 3,
      "name": "@Win10_64Bit"
    },
    {
      "line": 3,
      "name": "@Win8.1_32Bit"
    },
    {
      "line": 3,
      "name": "@WinXP_32Bit"
    },
    {
      "line": 3,
      "name": "@WinXP_64Bit"
    },
    {
      "line": 3,
      "name": "@WinVista_32Bit"
    },
    {
      "line": 3,
      "name": "@WinVista_64Bit"
    },
    {
      "line": 3,
      "name": "@WinServer8_64Bit"
    },
    {
      "line": 3,
      "name": "@WinServer12_64Bit"
    },
    {
      "line": 3,
      "name": "@WinServer16_64Bit"
    },
    {
      "line": 3,
      "name": "@WinServer12R2_64Bit"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User send a Registration POST for Multiple Partners \"\u003cRegistrationEndPoint\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User should validate the \"\u003cStatuscode\u003e\" as in response",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "User send a Post request for Manifest API endpoint as \"\u003cPOSTEndpoint\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User should validate the \"\u003cStatuscode\u003e\" as in response",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "User send a Get request and validate enabled PartnerManifest \"\u003cEndPoint\u003e\"",
  "keyword": "And "
});
formatter.examples({
  "line": 11,
  "name": "",
  "description": "",
  "id": "agent-auto-update-feature;validate-partner-and-manifest-details-with-enabled-manifest-to-partners-api-c3601661;",
  "rows": [
    {
      "cells": [
        "RowIndex",
        "POSTEndpoint",
        "Statuscode",
        "EndPoint",
        "RegistrationEndPoint"
      ],
      "line": 12,
      "id": "agent-auto-update-feature;validate-partner-and-manifest-details-with-enabled-manifest-to-partners-api-c3601661;;1"
    },
    {
      "cells": [
        "1",
        "/agent/v1/partnerManifest",
        "200",
        "/agent/v1/partner/PartnerID/manifest",
        "/agent/v1/registration"
      ],
      "line": 13,
      "id": "agent-auto-update-feature;validate-partner-and-manifest-details-with-enabled-manifest-to-partners-api-c3601661;;2"
    },
    {
      "cells": [
        "2",
        "/agent/v1/partnerManifest",
        "200",
        "/agent/v1/partner/PartnerID/manifest",
        "/agent/v1/registration"
      ],
      "line": 14,
      "id": "agent-auto-update-feature;validate-partner-and-manifest-details-with-enabled-manifest-to-partners-api-c3601661;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 118921639,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Validate partner and manifest details with enabled manifest to Partners API-C3601661",
  "description": "",
  "id": "agent-auto-update-feature;validate-partner-and-manifest-details-with-enabled-manifest-to-partners-api-c3601661;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@WinServer8_64Bit"
    },
    {
      "line": 3,
      "name": "@Win7_32Bit"
    },
    {
      "line": 3,
      "name": "@WinServer12R2_64Bit"
    },
    {
      "line": 3,
      "name": "@WinVista_32Bit"
    },
    {
      "line": 3,
      "name": "@WinXP_32Bit"
    },
    {
      "line": 3,
      "name": "@PlatformRegression"
    },
    {
      "line": 3,
      "name": "@WinServer16_64Bit"
    },
    {
      "line": 3,
      "name": "@Win10_64Bit"
    },
    {
      "line": 3,
      "name": "@WinServer12_64Bit"
    },
    {
      "line": 3,
      "name": "@Win8.1_32Bit"
    },
    {
      "line": 3,
      "name": "@WinVista_64Bit"
    },
    {
      "line": 3,
      "name": "@Win7_64Bit"
    },
    {
      "line": 3,
      "name": "@Win8_64Bit"
    },
    {
      "line": 3,
      "name": "@WinXP_64Bit"
    },
    {
      "line": 3,
      "name": "@Win10_32Bit"
    },
    {
      "line": 3,
      "name": "@Win8_32Bit"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User send a Registration POST for Multiple Partners \"/agent/v1/registration\"",
  "matchedColumns": [
    4
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User should validate the \"200\" as in response",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "User send a Post request for Manifest API endpoint as \"/agent/v1/partnerManifest\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User should validate the \"200\" as in response",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "User send a Get request and validate enabled PartnerManifest \"/agent/v1/partner/PartnerID/manifest\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "/agent/v1/registration",
      "offset": 53
    }
  ],
  "location": "AgentProvisioningStep.i_send_a_registration_post_multiple_partners(String)"
});
formatter.write("I send a Post request for URL https://integration.agent.exec.itsupport247.net/agent/v1/registration");
formatter.write("Json format used for post :{\"sysInfo\":{\"motherboardAdapter\":\"None\",\"hostName\":\"Juno-win7-64\",\"systemManufacturerReference\":\"NA\",\"memory\":\"\",\"hardDriveSerialNumber\":\"\",\"processorType\":\"3\",\"logicalDiskVolumeSerialNumber\":\"CA383253\",\"cdromSerial\":\"\",\"timestampUTC\":\"2017-01-11T12:24:53.489110938Z\\n\",\"osName\":\"Microsoft Windows 7 Professional \",\"virtualMachineIdentity\":\"NA\",\"osSerialNumber\":\"00371-220-7340795-06641\",\"macAddress\":\"00:50:56:A7:7B:69\",\"processorid\":\"1FABFBFF000306F2\",\"osVersion\":\"6.1.7601\",\"osType\":\"NA\",\"biosSerial\":\"VMware-42 27 3c 9f e4 40 cc 17-55 ca 6b 70 03 45 c8 48\"},\"partnerID\":\"99999\"}");
formatter.write("Response For Partner -\u003e : 99999\"3cef33f8-30fe-4913-96f8-0e66ae77bb7b\"");
formatter.write("Json format used for post :{\"sysInfo\":{\"motherboardAdapter\":\"None\",\"hostName\":\"Juno-win7-64\",\"systemManufacturerReference\":\"NA\",\"memory\":\"\",\"hardDriveSerialNumber\":\"\",\"processorType\":\"3\",\"logicalDiskVolumeSerialNumber\":\"CA383253\",\"cdromSerial\":\"\",\"timestampUTC\":\"2017-01-11T12:24:53.489110938Z\\n\",\"osName\":\"Microsoft Windows 7 Professional \",\"virtualMachineIdentity\":\"NA\",\"osSerialNumber\":\"00371-220-7340795-06641\",\"macAddress\":\"00:50:56:A7:7B:69\",\"processorid\":\"1FABFBFF000306F2\",\"osVersion\":\"6.1.7601\",\"osType\":\"NA\",\"biosSerial\":\"VMware-42 27 3c 9f e4 40 cc 17-55 ca 6b 70 03 45 c8 48\"},\"partnerID\":\"69090\"}");
formatter.write("Response For Partner -\u003e : 69090\"aceef27e-87a7-40a8-9748-651a7f353624\"");
formatter.result({
  "duration": 22294881796,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 26
    }
  ],
  "location": "CommonSteps.i_should_validate_the_as_in_response(String)"
});
formatter.write("Status OK");
formatter.result({
  "duration": 6267633,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/agent/v1/partnerManifest",
      "offset": 55
    }
  ],
  "location": "AgentAutoUpdateStep.i_send_a_Post_request_for_Manifest_API(String)"
});
formatter.write("I send a Post request for URL https://integration.agent.exec.itsupport247.net/agent/v1/partnerManifest");
formatter.write("Json format used for post :[ {\r\n  \"partnerId\" : \"99999\",\r\n  \"manifestVersion\" : \"1.0.382.1\"\r\n}, {\r\n  \"partnerId\" : \"69090\",\r\n  \"manifestVersion\" : \"1.0.383.2\"\r\n} ]");
formatter.result({
  "duration": 752534423,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 26
    }
  ],
  "location": "CommonSteps.i_should_validate_the_as_in_response(String)"
});
formatter.result({
  "duration": 53426399,
  "error_message": "java.lang.AssertionError: expected [OK] but found [Not Found]\r\n\tat org.testng.Assert.fail(Assert.java:93)\r\n\tat org.testng.Assert.failNotEquals(Assert.java:512)\r\n\tat org.testng.Assert.assertEqualsImpl(Assert.java:134)\r\n\tat org.testng.Assert.assertEquals(Assert.java:115)\r\n\tat org.testng.Assert.assertEquals(Assert.java:189)\r\n\tat org.testng.Assert.assertEquals(Assert.java:199)\r\n\tat continuum.cucumber.stepDefinations.platform.CommonSteps.i_should_validate_the_as_in_response(CommonSteps.java:342)\r\n\tat ✽.Then User should validate the \"200\" as in response(platform/AgentAutoUpdate.feature:8)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "/agent/v1/partner/PartnerID/manifest",
      "offset": 62
    }
  ],
  "location": "AgentAutoUpdateStep.i_send_a_Get_request_for_enabled_partner_Manifest(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 75637,
  "status": "passed"
});
formatter.before({
  "duration": 623030,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Validate partner and manifest details with enabled manifest to Partners API-C3601661",
  "description": "",
  "id": "agent-auto-update-feature;validate-partner-and-manifest-details-with-enabled-manifest-to-partners-api-c3601661;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@WinServer8_64Bit"
    },
    {
      "line": 3,
      "name": "@Win7_32Bit"
    },
    {
      "line": 3,
      "name": "@WinServer12R2_64Bit"
    },
    {
      "line": 3,
      "name": "@WinVista_32Bit"
    },
    {
      "line": 3,
      "name": "@WinXP_32Bit"
    },
    {
      "line": 3,
      "name": "@PlatformRegression"
    },
    {
      "line": 3,
      "name": "@WinServer16_64Bit"
    },
    {
      "line": 3,
      "name": "@Win10_64Bit"
    },
    {
      "line": 3,
      "name": "@WinServer12_64Bit"
    },
    {
      "line": 3,
      "name": "@Win8.1_32Bit"
    },
    {
      "line": 3,
      "name": "@WinVista_64Bit"
    },
    {
      "line": 3,
      "name": "@Win7_64Bit"
    },
    {
      "line": 3,
      "name": "@Win8_64Bit"
    },
    {
      "line": 3,
      "name": "@WinXP_64Bit"
    },
    {
      "line": 3,
      "name": "@Win10_32Bit"
    },
    {
      "line": 3,
      "name": "@Win8_32Bit"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User send a Registration POST for Multiple Partners \"/agent/v1/registration\"",
  "matchedColumns": [
    4
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User should validate the \"200\" as in response",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "User send a Post request for Manifest API endpoint as \"/agent/v1/partnerManifest\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User should validate the \"200\" as in response",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "User send a Get request and validate enabled PartnerManifest \"/agent/v1/partner/PartnerID/manifest\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "/agent/v1/registration",
      "offset": 53
    }
  ],
  "location": "AgentProvisioningStep.i_send_a_registration_post_multiple_partners(String)"
});
formatter.write("I send a Post request for URL https://integration.agent.exec.itsupport247.net/agent/v1/registration");
formatter.write("Json format used for post :{\"sysInfo\":{\"motherboardAdapter\":\"None\",\"hostName\":\"Juno-win7-64\",\"systemManufacturerReference\":\"NA\",\"memory\":\"\",\"hardDriveSerialNumber\":\"\",\"processorType\":\"3\",\"logicalDiskVolumeSerialNumber\":\"CA383253\",\"cdromSerial\":\"\",\"timestampUTC\":\"2017-01-11T12:24:53.489110938Z\\n\",\"osName\":\"Microsoft Windows 7 Professional \",\"virtualMachineIdentity\":\"NA\",\"osSerialNumber\":\"00371-220-7340795-06641\",\"macAddress\":\"00:50:56:A7:7B:69\",\"processorid\":\"1FABFBFF000306F2\",\"osVersion\":\"6.1.7601\",\"osType\":\"NA\",\"biosSerial\":\"VMware-42 27 3c 9f e4 40 cc 17-55 ca 6b 70 03 45 c8 48\"},\"partnerID\":\"99999\"}");
formatter.write("Response For Partner -\u003e : 99999\"3cef33f8-30fe-4913-96f8-0e66ae77bb7b\"");
formatter.write("Json format used for post :{\"sysInfo\":{\"motherboardAdapter\":\"None\",\"hostName\":\"Juno-win7-64\",\"systemManufacturerReference\":\"NA\",\"memory\":\"\",\"hardDriveSerialNumber\":\"\",\"processorType\":\"3\",\"logicalDiskVolumeSerialNumber\":\"CA383253\",\"cdromSerial\":\"\",\"timestampUTC\":\"2017-01-11T12:24:53.489110938Z\\n\",\"osName\":\"Microsoft Windows 7 Professional \",\"virtualMachineIdentity\":\"NA\",\"osSerialNumber\":\"00371-220-7340795-06641\",\"macAddress\":\"00:50:56:A7:7B:69\",\"processorid\":\"1FABFBFF000306F2\",\"osVersion\":\"6.1.7601\",\"osType\":\"NA\",\"biosSerial\":\"VMware-42 27 3c 9f e4 40 cc 17-55 ca 6b 70 03 45 c8 48\"},\"partnerID\":\"69090\"}");
formatter.write("Response For Partner -\u003e : 69090\"aceef27e-87a7-40a8-9748-651a7f353624\"");
formatter.result({
  "duration": 20928193489,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 26
    }
  ],
  "location": "CommonSteps.i_should_validate_the_as_in_response(String)"
});
formatter.write("Status OK");
formatter.result({
  "duration": 665212,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/agent/v1/partnerManifest",
      "offset": 55
    }
  ],
  "location": "AgentAutoUpdateStep.i_send_a_Post_request_for_Manifest_API(String)"
});
formatter.write("I send a Post request for URL https://integration.agent.exec.itsupport247.net/agent/v1/partnerManifest");
formatter.write("Json format used for post :[ {\r\n  \"partnerId\" : \"99999\",\r\n  \"manifestVersion\" : \"1.0.382.1\"\r\n}, {\r\n  \"partnerId\" : \"69090\",\r\n  \"manifestVersion\" : \"1.0.383.2\"\r\n} ]");
formatter.result({
  "duration": 590251350,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 26
    }
  ],
  "location": "CommonSteps.i_should_validate_the_as_in_response(String)"
});
formatter.result({
  "duration": 52833914,
  "error_message": "java.lang.AssertionError: expected [OK] but found [Not Found]\r\n\tat org.testng.Assert.fail(Assert.java:93)\r\n\tat org.testng.Assert.failNotEquals(Assert.java:512)\r\n\tat org.testng.Assert.assertEqualsImpl(Assert.java:134)\r\n\tat org.testng.Assert.assertEquals(Assert.java:115)\r\n\tat org.testng.Assert.assertEquals(Assert.java:189)\r\n\tat org.testng.Assert.assertEquals(Assert.java:199)\r\n\tat continuum.cucumber.stepDefinations.platform.CommonSteps.i_should_validate_the_as_in_response(CommonSteps.java:342)\r\n\tat ✽.Then User should validate the \"200\" as in response(platform/AgentAutoUpdate.feature:8)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "/agent/v1/partner/PartnerID/manifest",
      "offset": 62
    }
  ],
  "location": "AgentAutoUpdateStep.i_send_a_Get_request_for_enabled_partner_Manifest(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 42667,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 17,
  "name": "Validate enabling manifest for partners using invalid manifest url-C3601662",
  "description": "",
  "id": "agent-auto-update-feature;validate-enabling-manifest-for-partners-using-invalid-manifest-url-c3601662",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 16,
      "name": "@PlatformRegression"
    },
    {
      "line": 16,
      "name": "@swa"
    },
    {
      "line": 16,
      "name": "@Win7_32Bit"
    },
    {
      "line": 16,
      "name": "@Win7_64Bit"
    },
    {
      "line": 16,
      "name": "@Win8_32Bit"
    },
    {
      "line": 16,
      "name": "@Win8_64Bit"
    },
    {
      "line": 16,
      "name": "@Win10_32Bit"
    },
    {
      "line": 16,
      "name": "@Win10_64Bit"
    },
    {
      "line": 16,
      "name": "@Win8.1_32Bit"
    },
    {
      "line": 16,
      "name": "@WinXP_32Bit"
    },
    {
      "line": 16,
      "name": "@WinXP_64Bit"
    },
    {
      "line": 16,
      "name": "@WinVista_32Bit"
    },
    {
      "line": 16,
      "name": "@WinVista_64Bit"
    },
    {
      "line": 16,
      "name": "@WinServer8_64Bit"
    },
    {
      "line": 16,
      "name": "@WinServer12_64Bit"
    },
    {
      "line": 16,
      "name": "@WinServer16_64Bit"
    },
    {
      "line": 16,
      "name": "@WinServer12R2_64Bit"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "User send a Post request for Manifest API endpoint as \"\u003cPOSTEndpoint\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "User should validate the \"\u003cStatuscode\u003e\" as in response",
  "keyword": "Then "
});
formatter.examples({
  "line": 21,
  "name": "",
  "description": "",
  "id": "agent-auto-update-feature;validate-enabling-manifest-for-partners-using-invalid-manifest-url-c3601662;",
  "rows": [
    {
      "cells": [
        "RowIndex",
        "POSTEndpoint",
        "Statuscode"
      ],
      "line": 22,
      "id": "agent-auto-update-feature;validate-enabling-manifest-for-partners-using-invalid-manifest-url-c3601662;;1"
    },
    {
      "cells": [
        "1",
        "/agent/v1/partnerM",
        "404"
      ],
      "line": 23,
      "id": "agent-auto-update-feature;validate-enabling-manifest-for-partners-using-invalid-manifest-url-c3601662;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 422788,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Validate enabling manifest for partners using invalid manifest url-C3601662",
  "description": "",
  "id": "agent-auto-update-feature;validate-enabling-manifest-for-partners-using-invalid-manifest-url-c3601662;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 16,
      "name": "@WinServer8_64Bit"
    },
    {
      "line": 16,
      "name": "@swa"
    },
    {
      "line": 16,
      "name": "@Win7_32Bit"
    },
    {
      "line": 16,
      "name": "@WinServer12R2_64Bit"
    },
    {
      "line": 16,
      "name": "@WinVista_32Bit"
    },
    {
      "line": 16,
      "name": "@WinXP_32Bit"
    },
    {
      "line": 16,
      "name": "@PlatformRegression"
    },
    {
      "line": 16,
      "name": "@WinServer16_64Bit"
    },
    {
      "line": 16,
      "name": "@Win10_64Bit"
    },
    {
      "line": 16,
      "name": "@WinServer12_64Bit"
    },
    {
      "line": 16,
      "name": "@Win8.1_32Bit"
    },
    {
      "line": 16,
      "name": "@WinVista_64Bit"
    },
    {
      "line": 16,
      "name": "@Win7_64Bit"
    },
    {
      "line": 16,
      "name": "@Win8_64Bit"
    },
    {
      "line": 16,
      "name": "@WinXP_64Bit"
    },
    {
      "line": 16,
      "name": "@Win10_32Bit"
    },
    {
      "line": 16,
      "name": "@Win8_32Bit"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "User send a Post request for Manifest API endpoint as \"/agent/v1/partnerM\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "User should validate the \"404\" as in response",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "/agent/v1/partnerM",
      "offset": 55
    }
  ],
  "location": "AgentAutoUpdateStep.i_send_a_Post_request_for_Manifest_API(String)"
});
formatter.write("I send a Post request for URL https://integration.agent.exec.itsupport247.net/agent/v1/partnerM");
formatter.write("Json format used for post :{ }");
formatter.result({
  "duration": 369926124,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "404",
      "offset": 26
    }
  ],
  "location": "CommonSteps.i_should_validate_the_as_in_response(String)"
});
formatter.write("Status Not Found");
formatter.result({
  "duration": 49055976,
  "status": "passed"
});
formatter.after({
  "duration": 28606,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 26,
  "name": "Validate Global Manifest Payload is getting created for N no of Days-C3604832",
  "description": "",
  "id": "agent-auto-update-feature;validate-global-manifest-payload-is-getting-created-for-n-no-of-days-c3604832",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 25,
      "name": "@PlatformRegression"
    },
    {
      "line": 25,
      "name": "@Win7_32Bit"
    },
    {
      "line": 25,
      "name": "@Win7_64Bit"
    },
    {
      "line": 25,
      "name": "@Win8_32Bit"
    },
    {
      "line": 25,
      "name": "@Win8_64Bit"
    },
    {
      "line": 25,
      "name": "@Win10_32Bit"
    },
    {
      "line": 25,
      "name": "@Win10_64Bit"
    },
    {
      "line": 25,
      "name": "@Win8.1_32Bit"
    },
    {
      "line": 25,
      "name": "@WinXP_32Bit"
    },
    {
      "line": 25,
      "name": "@WinXP_64Bit"
    },
    {
      "line": 25,
      "name": "@WinVista_32Bit"
    },
    {
      "line": 25,
      "name": "@WinVista_64Bit"
    },
    {
      "line": 25,
      "name": "@WinServer8_64Bit"
    },
    {
      "line": 25,
      "name": "@WinServer12_64Bit"
    },
    {
      "line": 25,
      "name": "@WinServer16_64Bit"
    },
    {
      "line": 25,
      "name": "@WinServer12R2_64Bit"
    }
  ]
});
formatter.step({
  "line": 27,
  "name": "SSH connection establishes with remote test machine from tag",
  "keyword": "Given "
});
formatter.step({
  "line": 28,
  "name": "User send a Post request for Manifest API endpoint as \"\u003cPOSTEndpoint\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "User should validate the \"\u003cStatuscode\u003e\" as in response",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "User send a Get request for API endpoint as \"\u003cEndPoint\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "User should validate the \"\u003cStatus\u003e\" as in response",
  "keyword": "Then "
});
formatter.step({
  "line": 32,
  "name": "User should fetch response for API",
  "keyword": "And "
});
formatter.examples({
  "line": 34,
  "name": "",
  "description": "",
  "id": "agent-auto-update-feature;validate-global-manifest-payload-is-getting-created-for-n-no-of-days-c3604832;",
  "rows": [
    {
      "cells": [
        "RowIndex",
        "POSTEndpoint",
        "Statuscode",
        "EndPoint",
        "Status"
      ],
      "line": 35,
      "id": "agent-auto-update-feature;validate-global-manifest-payload-is-getting-created-for-n-no-of-days-c3604832;;1"
    },
    {
      "cells": [
        "1",
        "/agent/v1/manifest",
        "201",
        "/agent/v1/manifest?lastNDays\u003d1",
        "200"
      ],
      "line": 36,
      "id": "agent-auto-update-feature;validate-global-manifest-payload-is-getting-created-for-n-no-of-days-c3604832;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 288000,
  "status": "passed"
});
formatter.scenario({
  "line": 36,
  "name": "Validate Global Manifest Payload is getting created for N no of Days-C3604832",
  "description": "",
  "id": "agent-auto-update-feature;validate-global-manifest-payload-is-getting-created-for-n-no-of-days-c3604832;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 25,
      "name": "@WinServer8_64Bit"
    },
    {
      "line": 25,
      "name": "@Win7_32Bit"
    },
    {
      "line": 25,
      "name": "@WinServer12R2_64Bit"
    },
    {
      "line": 25,
      "name": "@WinVista_32Bit"
    },
    {
      "line": 25,
      "name": "@WinXP_32Bit"
    },
    {
      "line": 25,
      "name": "@PlatformRegression"
    },
    {
      "line": 25,
      "name": "@WinServer16_64Bit"
    },
    {
      "line": 25,
      "name": "@Win10_64Bit"
    },
    {
      "line": 25,
      "name": "@WinServer12_64Bit"
    },
    {
      "line": 25,
      "name": "@Win8.1_32Bit"
    },
    {
      "line": 25,
      "name": "@WinVista_64Bit"
    },
    {
      "line": 25,
      "name": "@Win7_64Bit"
    },
    {
      "line": 25,
      "name": "@Win8_64Bit"
    },
    {
      "line": 25,
      "name": "@WinXP_64Bit"
    },
    {
      "line": 25,
      "name": "@Win10_32Bit"
    },
    {
      "line": 25,
      "name": "@Win8_32Bit"
    }
  ]
});
formatter.step({
  "line": 27,
  "name": "SSH connection establishes with remote test machine from tag",
  "keyword": "Given "
});
formatter.step({
  "line": 28,
  "name": "User send a Post request for Manifest API endpoint as \"/agent/v1/manifest\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "User should validate the \"201\" as in response",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "User send a Get request for API endpoint as \"/agent/v1/manifest?lastNDays\u003d1\"",
  "matchedColumns": [
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "User should validate the \"200\" as in response",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 32,
  "name": "User should fetch response for API",
  "keyword": "And "
});
formatter.match({
  "location": "CommonSteps.sshConnectionEstablishedWithRemoteTestMachineFromTag()"
});
formatter.write("\u003cfont color\u003d\"blue\"\u003e\u003cb\u003eConnection Establish for : 10.2.114.113:22\u003c/b\u003e\u003c/font\u003e\u003cbr/\u003e");
formatter.result({
  "duration": 722517953,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/agent/v1/manifest",
      "offset": 55
    }
  ],
  "location": "AgentAutoUpdateStep.i_send_a_Post_request_for_Manifest_API(String)"
});
formatter.write("I send a Post request for URL https://integration.agent.exec.itsupport247.net/agent/v1/manifest");
formatter.write("Json format used for post :{\r\n  \"supportedOS\" : [ {\r\n    \"name\" : \"XP\",\r\n    \"type\" : \"Windows\",\r\n    \"version\" : \"6.1\"\r\n  }, {\r\n    \"name\" : \"Vista\",\r\n    \"type\" : \"Windows\",\r\n    \"version\" : \"6.4\"\r\n  } ],\r\n  \"supportedArch\" : [ \"i386\" ],\r\n  \"packages\" : [ {\r\n    \"name\" : \"platform-agent-core\",\r\n    \"type\" : \"Core\",\r\n    \"version\" : \"1.0.1208\",\r\n    \"sourceUrl\" : \"https://s3.ap-south-1.amazonaws.com/autoupdateagent2/1208_core.zip\"\r\n  }, {\r\n    \"name\" : \"platform-asset-plugin\",\r\n    \"type\" : \"SRP\",\r\n    \"version\" : \"1.0.335\",\r\n    \"sourceUrl\" : \"https://s3.ap-south-1.amazonaws.com/autoupdateagent2/Robin+-+Zip+Files/AssetPlugin.zip\"\r\n  } ],\r\n  \"version\" : \"1.0.682.40\"\r\n}");
formatter.result({
  "duration": 976523163,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "201",
      "offset": 26
    }
  ],
  "location": "CommonSteps.i_should_validate_the_as_in_response(String)"
});
formatter.write("Status Created");
formatter.result({
  "duration": 72454268,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/agent/v1/manifest?lastNDays\u003d1",
      "offset": 45
    }
  ],
  "location": "AgentAutoUpdateStep.i_send_a_Get_request_for_Versioning_of_Agent_Microservice_API(String)"
});
formatter.write("I send a Get request for URL ");
formatter.result({
  "duration": 10024009201,
  "error_message": "java.lang.Exception: \nConfigurations           :  SQL Server Name : 40.121.209.122:3306/, Browser : firefox, OS Type : Windows, Project Name : Juno-Platform-Desktop\nException Stack Trace    :  java.net.MalformedURLException: no protocol: \r\n\tat java.net.URL.\u003cinit\u003e(Unknown Source)\r\n\tat java.net.URL.\u003cinit\u003e(Unknown Source)\r\n\tat java.net.URL.\u003cinit\u003e(Unknown Source)\r\n\tat continuum.cucumber.Page.HTTPUtility.sendGetRequest(HTTPUtility.java:56)\r\n\tat continuum.cucumber.Page.PluginHelper.getEndpointIdforAgentELB(PluginHelper.java:1453)\r\n\tat continuum.cucumber.stepDefinations.platform.AgentAutoUpdateStep.i_send_a_Get_request_for_Versioning_of_Agent_Microservice_API(AgentAutoUpdateStep.java:38)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:37)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:13)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:31)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:299)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.Cucu\r\n\tat continuum.cucumber.reporting.ErrorReporter.createErrorMapAndThrowException(ErrorReporter.java:161)\r\n\tat continuum.cucumber.reporting.ErrorReporter.reportError(ErrorReporter.java:29)\r\n\tat continuum.cucumber.stepDefinations.platform.AgentAutoUpdateStep.i_send_a_Get_request_for_Versioning_of_Agent_Microservice_API(AgentAutoUpdateStep.java:40)\r\n\tat ✽.When User send a Get request for API endpoint as \"/agent/v1/manifest?lastNDays\u003d1\"(platform/AgentAutoUpdate.feature:30)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 26
    }
  ],
  "location": "CommonSteps.i_should_validate_the_as_in_response(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CommonSteps.i_should_fetch_response_for_Performace_API()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 17710052,
  "status": "passed"
});
formatter.uri("platform/AgentProvisioning.feature");
formatter.feature({
  "line": 1,
  "name": "Provisioning and Registration API",
  "description": "",
  "id": "provisioning-and-registration-api",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 84,
  "name": "Validate REST endpoint for Registration POST API-C1795049,C1795050,C1795053",
  "description": "",
  "id": "provisioning-and-registration-api;validate-rest-endpoint-for-registration-post-api-c1795049,c1795050,c1795053",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 83,
      "name": "@PlatformRegression"
    },
    {
      "line": 83,
      "name": "@Win7_32Bit"
    },
    {
      "line": 83,
      "name": "@Win7_64Bit"
    },
    {
      "line": 83,
      "name": "@Win8_32Bit"
    },
    {
      "line": 83,
      "name": "@Win8_64Bit"
    },
    {
      "line": 83,
      "name": "@Win10_32Bit"
    },
    {
      "line": 83,
      "name": "@Win10_64Bit"
    },
    {
      "line": 83,
      "name": "@Win8.1_32Bit"
    },
    {
      "line": 83,
      "name": "@WinServer8_64Bit"
    },
    {
      "line": 83,
      "name": "@WinServer12_64Bit"
    },
    {
      "line": 83,
      "name": "@WinServer16_64Bit"
    },
    {
      "line": 83,
      "name": "@WinServer12R2_64Bit"
    }
  ]
});
formatter.step({
  "line": 85,
  "name": "User read data from excel with rowIndex \"\u003cRowIndex\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 86,
  "name": "User send a POST request for agent registration API endpoint as \"\u003cPOSTEndPoint\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 87,
  "name": "User should validate the \"\u003cStatuscode\u003e\" as in response",
  "keyword": "Then "
});
formatter.step({
  "line": 88,
  "name": "User should fetch response for API",
  "keyword": "And "
});
formatter.step({
  "line": 89,
  "name": "User send a Get request for registration API endpoint as \"\u003cEndPoint\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 90,
  "name": "User should validate the status code as \"200\"OK",
  "keyword": "Then "
});
formatter.step({
  "line": 91,
  "name": "User should fetch response for API",
  "keyword": "And "
});
formatter.step({
  "line": 92,
  "name": "User should validate the format of Registration of Agent Microservice",
  "keyword": "And "
});
formatter.examples({
  "line": 94,
  "name": "",
  "description": "",
  "id": "provisioning-and-registration-api;validate-rest-endpoint-for-registration-post-api-c1795049,c1795050,c1795053;",
  "rows": [
    {
      "cells": [
        "RowIndex",
        "POSTEndPoint",
        "Statuscode",
        "EndPoint"
      ],
      "line": 95,
      "id": "provisioning-and-registration-api;validate-rest-endpoint-for-registration-post-api-c1795049,c1795050,c1795053;;1"
    },
    {
      "cells": [
        "1",
        "/agent/v1/registration",
        "200",
        "/agent/v1/partner/ITSPlatform/endpoint/EndPointID/registration"
      ],
      "line": 96,
      "id": "provisioning-and-registration-api;validate-rest-endpoint-for-registration-post-api-c1795049,c1795050,c1795053;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 128485,
  "status": "passed"
});
formatter.scenario({
  "line": 96,
  "name": "Validate REST endpoint for Registration POST API-C1795049,C1795050,C1795053",
  "description": "",
  "id": "provisioning-and-registration-api;validate-rest-endpoint-for-registration-post-api-c1795049,c1795050,c1795053;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 83,
      "name": "@Win10_64Bit"
    },
    {
      "line": 83,
      "name": "@WinServer12_64Bit"
    },
    {
      "line": 83,
      "name": "@Win8.1_32Bit"
    },
    {
      "line": 83,
      "name": "@WinServer8_64Bit"
    },
    {
      "line": 83,
      "name": "@Win7_64Bit"
    },
    {
      "line": 83,
      "name": "@Win8_64Bit"
    },
    {
      "line": 83,
      "name": "@Win7_32Bit"
    },
    {
      "line": 83,
      "name": "@WinServer12R2_64Bit"
    },
    {
      "line": 83,
      "name": "@PlatformRegression"
    },
    {
      "line": 83,
      "name": "@Win10_32Bit"
    },
    {
      "line": 83,
      "name": "@WinServer16_64Bit"
    },
    {
      "line": 83,
      "name": "@Win8_32Bit"
    }
  ]
});
formatter.step({
  "line": 85,
  "name": "User read data from excel with rowIndex \"1\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 86,
  "name": "User send a POST request for agent registration API endpoint as \"/agent/v1/registration\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 87,
  "name": "User should validate the \"200\" as in response",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 88,
  "name": "User should fetch response for API",
  "keyword": "And "
});
formatter.step({
  "line": 89,
  "name": "User send a Get request for registration API endpoint as \"/agent/v1/partner/ITSPlatform/endpoint/EndPointID/registration\"",
  "matchedColumns": [
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 90,
  "name": "User should validate the status code as \"200\"OK",
  "keyword": "Then "
});
formatter.step({
  "line": 91,
  "name": "User should fetch response for API",
  "keyword": "And "
});
formatter.step({
  "line": 92,
  "name": "User should validate the format of Registration of Agent Microservice",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 41
    }
  ],
  "location": "CommonSteps.i_read_data_from_excel_with_rowIndex(String)"
});
formatter.result({
  "duration": 81939,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/agent/v1/registration",
      "offset": 65
    }
  ],
  "location": "AgentProvisioningStep.i_send_a_POST_request_for_agent_registration_API_endpoint_as(String)"
});
formatter.write("I send a Post request for URL https://integration.agent.service.itsupport247.net/agent/v1/registration");
formatter.write("Json format used for post :{\"sysInfo\":{\"motherboardAdapter\":\"09203-891\",\"hostName\":\"RMM-222\",\"systemManufacturerReference\":\"NA\",\"memory\":\"09203-891\",\"hardDriveSerialNumber\":\"09203-891\",\"processorType\":\"09203-891\",\"logicalDiskVolumeSerialNumber\":\"09203-891\",\"cdromSerial\":\"09203-891\",\"timestampUTC\":\"2017-01-11T12:24:53.489110938Z\",\"osName\":\"linux OS\",\"virtualMachineIdentity\":\"NA\",\"osSerialNumber\":\"09203-891-5001202-52183\",\"macAddress\":\"08:00:25:21:45:e3\",\"processorid\":\"08:00:25:21:45:e3\",\"osVersion\":\"1.3.4\",\"osType\":\"NA\",\"biosSerial\":\"09203-891\"},\"partnerID\":\"ITSPlatform\"}");
formatter.result({
  "duration": 10583633656,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 26
    }
  ],
  "location": "CommonSteps.i_should_validate_the_as_in_response(String)"
});
formatter.write("Status OK");
formatter.result({
  "duration": 57038033,
  "status": "passed"
});
formatter.match({
  "location": "CommonSteps.i_should_fetch_response_for_Performace_API()"
});
formatter.write("Response is :\"9c5e64dd-3ab0-4d6e-b302-3e21a6a21c97\"");
formatter.result({
  "duration": 798060,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/agent/v1/partner/ITSPlatform/endpoint/EndPointID/registration",
      "offset": 58
    }
  ],
  "location": "AgentProvisioningStep.i_send_a_Get_request_for_registration_API_endpoint_as(String)"
});
formatter.write("I send a Get request for URL https://integration.agent.exec.itsupport247.net/agent/v1/partner/ITSPlatform/endpoint/9c5e64dd-3ab0-4d6e-b302-3e21a6a21c97/registration");
formatter.result({
  "duration": 8001450,
  "error_message": "java.lang.Exception: \nConfigurations           :  SQL Server Name : 40.121.209.122:3306/, Browser : firefox, OS Type : Windows, Project Name : Juno-Platform-Desktop\nException Stack Trace    :  java.net.MalformedURLException: no protocol: \r\n\tat java.net.URL.\u003cinit\u003e(Unknown Source)\r\n\tat java.net.URL.\u003cinit\u003e(Unknown Source)\r\n\tat java.net.URL.\u003cinit\u003e(Unknown Source)\r\n\tat continuum.cucumber.Page.HTTPUtility.sendGetRequest(HTTPUtility.java:56)\r\n\tat continuum.cucumber.stepDefinations.platform.AgentProvisioningStep.i_send_a_Get_request_for_registration_API_endpoint_as(AgentProvisioningStep.java:89)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:37)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:13)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:31)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:299)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.model.CucumberScenarioOutline.\r\n\tat continuum.cucumber.reporting.ErrorReporter.createErrorMapAndThrowException(ErrorReporter.java:161)\r\n\tat continuum.cucumber.reporting.ErrorReporter.reportError(ErrorReporter.java:29)\r\n\tat continuum.cucumber.stepDefinations.platform.AgentProvisioningStep.i_send_a_Get_request_for_registration_API_endpoint_as(AgentProvisioningStep.java:91)\r\n\tat ✽.When User send a Get request for registration API endpoint as \"/agent/v1/partner/ITSPlatform/endpoint/EndPointID/registration\"(platform/AgentProvisioning.feature:89)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 41
    }
  ],
  "location": "CommonSteps.i_should_validate_the_status_code_as_OK(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CommonSteps.i_should_fetch_response_for_Performace_API()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AgentProvisioningStep.i_should_validate_the_format_of_registration_of_Agent_Microservice()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 30546,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 111,
  "name": "Validate the Mapping of Old RMM Agent with New Juno Agent-C1933173,C1933167",
  "description": "",
  "id": "provisioning-and-registration-api;validate-the-mapping-of-old-rmm-agent-with-new-juno-agent-c1933173,c1933167",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 110,
      "name": "@PlatformBVT"
    },
    {
      "line": 110,
      "name": "@PlatformRegression"
    },
    {
      "line": 110,
      "name": "@Win10_64Bit"
    }
  ]
});
formatter.step({
  "line": 112,
  "name": "SSH connection establishes with remote test machine from tag",
  "keyword": "Given "
});
formatter.step({
  "line": 113,
  "name": "User read data from excel with rowIndex \"\u003cRowIndex\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 114,
  "name": "User fetch registry values of old RMM agent",
  "keyword": "Then "
});
formatter.step({
  "line": 115,
  "name": "User fetch AgentCore EndPointID from agentCore config file from tag",
  "keyword": "And "
});
formatter.step({
  "line": 116,
  "name": "User send a Get request for API endpoint as \"\u003cEndPoint\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 117,
  "name": "User should validate the status code as \"200\"OK",
  "keyword": "Then "
});
formatter.step({
  "line": 118,
  "name": "User should fetch response for API",
  "keyword": "And "
});
formatter.step({
  "line": 119,
  "name": "User should validate the Data of the response of registration API",
  "keyword": "And "
});
formatter.examples({
  "line": 121,
  "name": "",
  "description": "",
  "id": "provisioning-and-registration-api;validate-the-mapping-of-old-rmm-agent-with-new-juno-agent-c1933173,c1933167;",
  "rows": [
    {
      "cells": [
        "RowIndex",
        "EndPoint"
      ],
      "line": 122,
      "id": "provisioning-and-registration-api;validate-the-mapping-of-old-rmm-agent-with-new-juno-agent-c1933173,c1933167;;1"
    },
    {
      "cells": [
        "1",
        "/agent/v1/partner/PartnerID/endpoint/EndPointID/registration"
      ],
      "line": 123,
      "id": "provisioning-and-registration-api;validate-the-mapping-of-old-rmm-agent-with-new-juno-agent-c1933173,c1933167;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 202667,
  "status": "passed"
});
formatter.scenario({
  "line": 123,
  "name": "Validate the Mapping of Old RMM Agent with New Juno Agent-C1933173,C1933167",
  "description": "",
  "id": "provisioning-and-registration-api;validate-the-mapping-of-old-rmm-agent-with-new-juno-agent-c1933173,c1933167;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 110,
      "name": "@Win10_64Bit"
    },
    {
      "line": 110,
      "name": "@PlatformRegression"
    },
    {
      "line": 110,
      "name": "@PlatformBVT"
    }
  ]
});
formatter.step({
  "line": 112,
  "name": "SSH connection establishes with remote test machine from tag",
  "keyword": "Given "
});
formatter.step({
  "line": 113,
  "name": "User read data from excel with rowIndex \"1\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 114,
  "name": "User fetch registry values of old RMM agent",
  "keyword": "Then "
});
formatter.step({
  "line": 115,
  "name": "User fetch AgentCore EndPointID from agentCore config file from tag",
  "keyword": "And "
});
formatter.step({
  "line": 116,
  "name": "User send a Get request for API endpoint as \"/agent/v1/partner/PartnerID/endpoint/EndPointID/registration\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 117,
  "name": "User should validate the status code as \"200\"OK",
  "keyword": "Then "
});
formatter.step({
  "line": 118,
  "name": "User should fetch response for API",
  "keyword": "And "
});
formatter.step({
  "line": 119,
  "name": "User should validate the Data of the response of registration API",
  "keyword": "And "
});
formatter.match({
  "location": "CommonSteps.sshConnectionEstablishedWithRemoteTestMachineFromTag()"
});
formatter.write("\u003cfont color\u003d\"blue\"\u003e\u003cb\u003eConnection Establish for : 10.2.114.113:22\u003c/b\u003e\u003c/font\u003e\u003cbr/\u003e");
formatter.result({
  "duration": 504267876,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 41
    }
  ],
  "location": "CommonSteps.i_read_data_from_excel_with_rowIndex(String)"
});
formatter.result({
  "duration": 124122,
  "status": "passed"
});
formatter.match({
  "location": "AgentProvisioningStep.i_fetch_registry_values_of_old_rmm_agent_from_tag()"
});
formatter.write("Member ID is-\u003e1234\r\nSite ID is-\u003e50109539\r\nReg ID is-\u003e53758699");
formatter.result({
  "duration": 1776141684,
  "status": "passed"
});
formatter.match({
  "location": "CommonSteps.i_fetch_AgentCore_EndPointID_from_agentCore_config_file_from_tag()"
});
formatter.write("\u003cfont color\u003d\"blue\"\u003e\u003cb\u003eEndPoint ID is 69c21305-4a58-4433-a968-19120bb58afc\u003c/b\u003e\u003c/font\u003e\u003cbr/\u003e");
formatter.result({
  "duration": 309548940,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/agent/v1/partner/PartnerID/endpoint/EndPointID/registration",
      "offset": 45
    }
  ],
  "location": "AgentAutoUpdateStep.i_send_a_Get_request_for_Versioning_of_Agent_Microservice_API(String)"
});
formatter.write("I send a Get request for URL ");
formatter.result({
  "duration": 10003801695,
  "error_message": "java.lang.Exception: \nConfigurations           :  SQL Server Name : 40.121.209.122:3306/, Browser : firefox, OS Type : Windows, Project Name : Juno-Platform-Desktop\nException Stack Trace    :  java.net.MalformedURLException: no protocol: \r\n\tat java.net.URL.\u003cinit\u003e(Unknown Source)\r\n\tat java.net.URL.\u003cinit\u003e(Unknown Source)\r\n\tat java.net.URL.\u003cinit\u003e(Unknown Source)\r\n\tat continuum.cucumber.Page.HTTPUtility.sendGetRequest(HTTPUtility.java:56)\r\n\tat continuum.cucumber.Page.PluginHelper.getEndpointIdforAgentELB(PluginHelper.java:1453)\r\n\tat continuum.cucumber.stepDefinations.platform.AgentAutoUpdateStep.i_send_a_Get_request_for_Versioning_of_Agent_Microservice_API(AgentAutoUpdateStep.java:38)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:37)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:13)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:31)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:299)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.Cucu\r\n\tat continuum.cucumber.reporting.ErrorReporter.createErrorMapAndThrowException(ErrorReporter.java:161)\r\n\tat continuum.cucumber.reporting.ErrorReporter.reportError(ErrorReporter.java:29)\r\n\tat continuum.cucumber.stepDefinations.platform.AgentAutoUpdateStep.i_send_a_Get_request_for_Versioning_of_Agent_Microservice_API(AgentAutoUpdateStep.java:40)\r\n\tat ✽.When User send a Get request for API endpoint as \"/agent/v1/partner/PartnerID/endpoint/EndPointID/registration\"(platform/AgentProvisioning.feature:116)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 41
    }
  ],
  "location": "CommonSteps.i_should_validate_the_status_code_as_OK(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CommonSteps.i_should_fetch_response_for_Performace_API()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AgentProvisioningStep.i_should_validate_the_Data_of_the_response_of_registration_API()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 189090,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 146,
  "name": "Validate REST endpoint for Registration POST API for a given valid partnerID and tokenID-C2473224",
  "description": "",
  "id": "provisioning-and-registration-api;validate-rest-endpoint-for-registration-post-api-for-a-given-valid-partnerid-and-tokenid-c2473224",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 145,
      "name": "@PlatformBVT"
    },
    {
      "line": 145,
      "name": "@PlatformRegression"
    },
    {
      "line": 145,
      "name": "@Win10_64Bit"
    }
  ]
});
formatter.step({
  "line": 147,
  "name": "User read data from excel with rowIndex \"\u003cRowIndex\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 148,
  "name": "User send a POST request for generate token API endpoint as \"\u003cTokenPOSTEndPoint\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 149,
  "name": "User should validate the \"\u003cStatuscode\u003e\" as in response",
  "keyword": "Then "
});
formatter.step({
  "line": 150,
  "name": "User should fetch token for API",
  "keyword": "And "
});
formatter.step({
  "line": 151,
  "name": "User send a POST request for agent registration API endpoint with token as \"\u003cPOSTEndPoint\u003e\" and partner as \"\u003cpartnerID\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 152,
  "name": "User should validate the \"\u003crequest\u003e\" as in response",
  "keyword": "Then "
});
formatter.step({
  "line": 153,
  "name": "User should fetch response for API",
  "keyword": "And "
});
formatter.step({
  "line": 154,
  "name": "User send a Get request for registration API endpoint as \"\u003cEndPoint\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 155,
  "name": "User should validate the status code as \"200\"OK",
  "keyword": "Then "
});
formatter.step({
  "line": 156,
  "name": "User should fetch response for API",
  "keyword": "And "
});
formatter.step({
  "line": 157,
  "name": "User should validate the format of Registration of Agent Microservice",
  "keyword": "And "
});
formatter.examples({
  "line": 159,
  "name": "",
  "description": "",
  "id": "provisioning-and-registration-api;validate-rest-endpoint-for-registration-post-api-for-a-given-valid-partnerid-and-tokenid-c2473224;",
  "rows": [
    {
      "cells": [
        "RowIndex",
        "POSTEndPoint",
        "Statuscode",
        "TokenPOSTEndPoint",
        "partnerID",
        "request",
        "EndPoint"
      ],
      "line": 160,
      "id": "provisioning-and-registration-api;validate-rest-endpoint-for-registration-post-api-for-a-given-valid-partnerid-and-tokenid-c2473224;;1"
    },
    {
      "cells": [
        "1",
        "/agent/v1/registration",
        "200",
        "/agent/v1/generatetoken",
        "50001795",
        "200",
        "/agent/v1/partner/50001795/endpoint/EndPointID/registration"
      ],
      "line": 161,
      "id": "provisioning-and-registration-api;validate-rest-endpoint-for-registration-post-api-for-a-given-valid-partnerid-and-tokenid-c2473224;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 104727,
  "status": "passed"
});
formatter.scenario({
  "line": 161,
  "name": "Validate REST endpoint for Registration POST API for a given valid partnerID and tokenID-C2473224",
  "description": "",
  "id": "provisioning-and-registration-api;validate-rest-endpoint-for-registration-post-api-for-a-given-valid-partnerid-and-tokenid-c2473224;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 145,
      "name": "@Win10_64Bit"
    },
    {
      "line": 145,
      "name": "@PlatformRegression"
    },
    {
      "line": 145,
      "name": "@PlatformBVT"
    }
  ]
});
formatter.step({
  "line": 147,
  "name": "User read data from excel with rowIndex \"1\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 148,
  "name": "User send a POST request for generate token API endpoint as \"/agent/v1/generatetoken\"",
  "matchedColumns": [
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 149,
  "name": "User should validate the \"200\" as in response",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 150,
  "name": "User should fetch token for API",
  "keyword": "And "
});
formatter.step({
  "line": 151,
  "name": "User send a POST request for agent registration API endpoint with token as \"/agent/v1/registration\" and partner as \"50001795\"",
  "matchedColumns": [
    1,
    4
  ],
  "keyword": "When "
});
formatter.step({
  "line": 152,
  "name": "User should validate the \"200\" as in response",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 153,
  "name": "User should fetch response for API",
  "keyword": "And "
});
formatter.step({
  "line": 154,
  "name": "User send a Get request for registration API endpoint as \"/agent/v1/partner/50001795/endpoint/EndPointID/registration\"",
  "matchedColumns": [
    6
  ],
  "keyword": "When "
});
formatter.step({
  "line": 155,
  "name": "User should validate the status code as \"200\"OK",
  "keyword": "Then "
});
formatter.step({
  "line": 156,
  "name": "User should fetch response for API",
  "keyword": "And "
});
formatter.step({
  "line": 157,
  "name": "User should validate the format of Registration of Agent Microservice",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 41
    }
  ],
  "location": "CommonSteps.i_read_data_from_excel_with_rowIndex(String)"
});
formatter.result({
  "duration": 41212,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/agent/v1/generatetoken",
      "offset": 61
    }
  ],
  "location": "AgentProvisioningStep.i_send_a_POST_request_for_generate_token_API_endpoint_as(String)"
});
formatter.write("I send a Post request for URL https://integration.agent.exec.itsupport247.net/agent/v1/generatetoken");
formatter.write("Json format used for post :{\"clientID\":\"789\",\"siteID\":\"\u0027456\",\"partnerID\":\"50001795\"}");
formatter.result({
  "duration": 10728437465,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 26
    }
  ],
  "location": "CommonSteps.i_should_validate_the_as_in_response(String)"
});
formatter.write("Status OK");
formatter.result({
  "duration": 69476815,
  "status": "passed"
});
formatter.match({
  "location": "AgentProvisioningStep.i_should_fetch_token_for_API()"
});
formatter.write("Token is :b9e6fb45-1fe2-49a9-92f2-55e6204545ed");
formatter.result({
  "duration": 651151,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/agent/v1/registration",
      "offset": 76
    },
    {
      "val": "50001795",
      "offset": 116
    }
  ],
  "location": "AgentProvisioningStep.i_send_a_POST_request_for_agent_registration_API_endpoint_with_token_as(String,String)"
});
formatter.write("I send a Post request for URL https://integration.agent.service.itsupport247.net/agent/v1/registration");
formatter.write("Json format used for post :{\"agentID\":\"69c21305-4a58-4433-a968-19120bb58afc\",\"clientID\":\"50109539\",\"legacyRegID\":\"53758699\",\"sysInfo\":{\"motherboardAdapter\":\"09203-891\",\"hostName\":\"RMM-222\",\"memory\":\"09203-891\",\"hardDriveSerialNumber\":\"09203-891\",\"processorType\":\"09203-891\",\"logicalDiskVolumeSerialNumber\":\"09203-891\",\"cdromSerial\":\"09203-891\",\"timestampUTC\":\"2017-01-11T12:24:53.489110938Z\",\"osName\":\"linux OS\",\"virtualMachineIdentity\":\"C5gIv\",\"osSerialNumber\":\"09203-891-5001202-52183\",\"macAddress\":\"08:00:25:21:45:e3\",\"processorid\":\"08:00:25:21:45:e3\",\"osVersion\":\"1.3.4\",\"biosSerial\":\"09203-891\"},\"endpointID\":\"69c21305-4a58-4433-a968-19120bb58afc\",\"siteID\":\"50109539\",\"partnerID\":\"50001795\",\"token\":\"b9e6fb45-1fe2-49a9-92f2-55e6204545ed\"}");
formatter.result({
  "duration": 10329471840,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 26
    }
  ],
  "location": "CommonSteps.i_should_validate_the_as_in_response(String)"
});
formatter.result({
  "duration": 51161187,
  "error_message": "java.lang.AssertionError: expected [OK] but found [Bad Request]\r\n\tat org.testng.Assert.fail(Assert.java:93)\r\n\tat org.testng.Assert.failNotEquals(Assert.java:512)\r\n\tat org.testng.Assert.assertEqualsImpl(Assert.java:134)\r\n\tat org.testng.Assert.assertEquals(Assert.java:115)\r\n\tat org.testng.Assert.assertEquals(Assert.java:189)\r\n\tat org.testng.Assert.assertEquals(Assert.java:199)\r\n\tat continuum.cucumber.stepDefinations.platform.CommonSteps.i_should_validate_the_as_in_response(CommonSteps.java:342)\r\n\tat ✽.Then User should validate the \"200\" as in response(platform/AgentProvisioning.feature:152)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "CommonSteps.i_should_fetch_response_for_Performace_API()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "/agent/v1/partner/50001795/endpoint/EndPointID/registration",
      "offset": 58
    }
  ],
  "location": "AgentProvisioningStep.i_send_a_Get_request_for_registration_API_endpoint_as(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 41
    }
  ],
  "location": "CommonSteps.i_should_validate_the_status_code_as_OK(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CommonSteps.i_should_fetch_response_for_Performace_API()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AgentProvisioningStep.i_should_validate_the_format_of_registration_of_Agent_Microservice()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 16485,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 164,
  "name": "Validate REST endpoint for Registration POST API for a given invalid partnerID-C2473226",
  "description": "",
  "id": "provisioning-and-registration-api;validate-rest-endpoint-for-registration-post-api-for-a-given-invalid-partnerid-c2473226",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 163,
      "name": "@PlatformBVT"
    },
    {
      "line": 163,
      "name": "@PlatformRegression"
    },
    {
      "line": 163,
      "name": "@Win10_64Bit"
    }
  ]
});
formatter.step({
  "line": 165,
  "name": "User read data from excel with rowIndex \"\u003cRowIndex\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 166,
  "name": "User send a POST request for generate token API endpoint as \"\u003cTokenPOSTEndPoint\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 167,
  "name": "User should validate the \"\u003cStatuscode\u003e\" as in response",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 168,
      "value": "#And User should fetch token for API"
    }
  ],
  "line": 169,
  "name": "User send a POST request for agent registration API endpoint with Invalid token as \"\u003cPOSTEndPoint\u003e\" and partner as \"\u003cpartnerID\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 170,
  "name": "User should validate the \"\u003crequest\u003e\" as in response",
  "keyword": "Then "
});
formatter.examples({
  "line": 172,
  "name": "",
  "description": "",
  "id": "provisioning-and-registration-api;validate-rest-endpoint-for-registration-post-api-for-a-given-invalid-partnerid-c2473226;",
  "rows": [
    {
      "cells": [
        "RowIndex",
        "POSTEndPoint",
        "Statuscode",
        "TokenPOSTEndPoint",
        "partnerID",
        "request"
      ],
      "line": 173,
      "id": "provisioning-and-registration-api;validate-rest-endpoint-for-registration-post-api-for-a-given-invalid-partnerid-c2473226;;1"
    },
    {
      "cells": [
        "1",
        "/agent/v1/registration",
        "200",
        "/agent/v1/generatetoken",
        "50001796",
        "400"
      ],
      "line": 174,
      "id": "provisioning-and-registration-api;validate-rest-endpoint-for-registration-post-api-for-a-given-invalid-partnerid-c2473226;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 146424,
  "status": "passed"
});
formatter.scenario({
  "line": 174,
  "name": "Validate REST endpoint for Registration POST API for a given invalid partnerID-C2473226",
  "description": "",
  "id": "provisioning-and-registration-api;validate-rest-endpoint-for-registration-post-api-for-a-given-invalid-partnerid-c2473226;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 163,
      "name": "@Win10_64Bit"
    },
    {
      "line": 163,
      "name": "@PlatformRegression"
    },
    {
      "line": 163,
      "name": "@PlatformBVT"
    }
  ]
});
formatter.step({
  "line": 165,
  "name": "User read data from excel with rowIndex \"1\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 166,
  "name": "User send a POST request for generate token API endpoint as \"/agent/v1/generatetoken\"",
  "matchedColumns": [
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 167,
  "name": "User should validate the \"200\" as in response",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 168,
      "value": "#And User should fetch token for API"
    }
  ],
  "line": 169,
  "name": "User send a POST request for agent registration API endpoint with Invalid token as \"/agent/v1/registration\" and partner as \"50001796\"",
  "matchedColumns": [
    1,
    4
  ],
  "keyword": "When "
});
formatter.step({
  "line": 170,
  "name": "User should validate the \"400\" as in response",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 41
    }
  ],
  "location": "CommonSteps.i_read_data_from_excel_with_rowIndex(String)"
});
formatter.result({
  "duration": 79515,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/agent/v1/generatetoken",
      "offset": 61
    }
  ],
  "location": "AgentProvisioningStep.i_send_a_POST_request_for_generate_token_API_endpoint_as(String)"
});
formatter.write("I send a Post request for URL https://integration.agent.exec.itsupport247.net/agent/v1/generatetoken");
formatter.write("Json format used for post :{\"clientID\":\"789\",\"siteID\":\"\u0027456\",\"partnerID\":\"50001795\"}");
formatter.result({
  "duration": 10221860741,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 26
    }
  ],
  "location": "CommonSteps.i_should_validate_the_as_in_response(String)"
});
formatter.write("Status OK");
formatter.result({
  "duration": 50478521,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/agent/v1/registration",
      "offset": 84
    },
    {
      "val": "50001796",
      "offset": 124
    }
  ],
  "location": "AgentProvisioningStep.i_send_a_POST_request_for_agent_registration_API_endpoint_with_Invalid_token_as(String,String)"
});
formatter.write("I send a Post request for URL https://integration.agent.service.itsupport247.net/agent/v1/registration");
formatter.write("Json format used for post :{\"agentID\":\"69c21305-4a58-4433-a968-19120bb58afc\",\"clientID\":\"50109539\",\"legacyRegID\":\"53758699\",\"sysInfo\":{\"motherboardAdapter\":\"09203-891\",\"hostName\":\"RMM-222\",\"memory\":\"09203-891\",\"hardDriveSerialNumber\":\"09203-891\",\"processorType\":\"09203-891\",\"logicalDiskVolumeSerialNumber\":\"09203-891\",\"cdromSerial\":\"09203-891\",\"timestampUTC\":\"2017-01-11T12:24:53.489110938Z\",\"osName\":\"linux OS\",\"virtualMachineIdentity\":\"NmQ4G\",\"osSerialNumber\":\"09203-891-5001202-52183\",\"macAddress\":\"08:00:25:21:45:e3\",\"processorid\":\"08:00:25:21:45:e3\",\"osVersion\":\"1.3.4\",\"biosSerial\":\"09203-891\"},\"endpointID\":\"69c21305-4a58-4433-a968-19120bb58afc\",\"siteID\":\"50109539\",\"partnerID\":\"50001796\",\"token\":\"12345\"}");
formatter.result({
  "duration": 10259035511,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 26
    }
  ],
  "location": "CommonSteps.i_should_validate_the_as_in_response(String)"
});
formatter.write("Status Bad Request");
formatter.result({
  "duration": 31233924,
  "status": "passed"
});
formatter.after({
  "duration": 47515,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 177,
  "name": "Validate REST endpoint for Registration POST API with invalid tokenID for a given partnerID-C2473227",
  "description": "",
  "id": "provisioning-and-registration-api;validate-rest-endpoint-for-registration-post-api-with-invalid-tokenid-for-a-given-partnerid-c2473227",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 176,
      "name": "@PlatformBVT"
    },
    {
      "line": 176,
      "name": "@PlatformRegression"
    },
    {
      "line": 176,
      "name": "@Win10_64Bit"
    }
  ]
});
formatter.step({
  "line": 178,
  "name": "User read data from excel with rowIndex \"\u003cRowIndex\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 179,
  "name": "User send a POST request for agent registration API endpoint with Invalid token as \"\u003cPOSTEndPoint\u003e\" and partner as \"\u003cpartnerID\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 180,
  "name": "User should validate the \"\u003cStatuscode\u003e\" as in response",
  "keyword": "Then "
});
formatter.examples({
  "line": 182,
  "name": "",
  "description": "",
  "id": "provisioning-and-registration-api;validate-rest-endpoint-for-registration-post-api-with-invalid-tokenid-for-a-given-partnerid-c2473227;",
  "rows": [
    {
      "cells": [
        "RowIndex",
        "POSTEndPoint",
        "Statuscode",
        "partnerID"
      ],
      "line": 183,
      "id": "provisioning-and-registration-api;validate-rest-endpoint-for-registration-post-api-with-invalid-tokenid-for-a-given-partnerid-c2473227;;1"
    },
    {
      "cells": [
        "1",
        "/agent/v1/registration",
        "400",
        "50001795"
      ],
      "line": 184,
      "id": "provisioning-and-registration-api;validate-rest-endpoint-for-registration-post-api-with-invalid-tokenid-for-a-given-partnerid-c2473227;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 357818,
  "status": "passed"
});
formatter.scenario({
  "line": 184,
  "name": "Validate REST endpoint for Registration POST API with invalid tokenID for a given partnerID-C2473227",
  "description": "",
  "id": "provisioning-and-registration-api;validate-rest-endpoint-for-registration-post-api-with-invalid-tokenid-for-a-given-partnerid-c2473227;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 176,
      "name": "@Win10_64Bit"
    },
    {
      "line": 176,
      "name": "@PlatformRegression"
    },
    {
      "line": 176,
      "name": "@PlatformBVT"
    }
  ]
});
formatter.step({
  "line": 178,
  "name": "User read data from excel with rowIndex \"1\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 179,
  "name": "User send a POST request for agent registration API endpoint with Invalid token as \"/agent/v1/registration\" and partner as \"50001795\"",
  "matchedColumns": [
    1,
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 180,
  "name": "User should validate the \"400\" as in response",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 41
    }
  ],
  "location": "CommonSteps.i_read_data_from_excel_with_rowIndex(String)"
});
formatter.result({
  "duration": 144000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/agent/v1/registration",
      "offset": 84
    },
    {
      "val": "50001795",
      "offset": 124
    }
  ],
  "location": "AgentProvisioningStep.i_send_a_POST_request_for_agent_registration_API_endpoint_with_Invalid_token_as(String,String)"
});
formatter.write("I send a Post request for URL https://integration.agent.service.itsupport247.net/agent/v1/registration");
formatter.write("Json format used for post :{\"agentID\":\"69c21305-4a58-4433-a968-19120bb58afc\",\"clientID\":\"50109539\",\"legacyRegID\":\"53758699\",\"sysInfo\":{\"motherboardAdapter\":\"09203-891\",\"hostName\":\"RMM-222\",\"memory\":\"09203-891\",\"hardDriveSerialNumber\":\"09203-891\",\"processorType\":\"09203-891\",\"logicalDiskVolumeSerialNumber\":\"09203-891\",\"cdromSerial\":\"09203-891\",\"timestampUTC\":\"2017-01-11T12:24:53.489110938Z\",\"osName\":\"linux OS\",\"virtualMachineIdentity\":\"IRBE9\",\"osSerialNumber\":\"09203-891-5001202-52183\",\"macAddress\":\"08:00:25:21:45:e3\",\"processorid\":\"08:00:25:21:45:e3\",\"osVersion\":\"1.3.4\",\"biosSerial\":\"09203-891\"},\"endpointID\":\"69c21305-4a58-4433-a968-19120bb58afc\",\"siteID\":\"50109539\",\"partnerID\":\"50001795\",\"token\":\"12345\"}");
formatter.result({
  "duration": 10246058063,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 26
    }
  ],
  "location": "CommonSteps.i_should_validate_the_as_in_response(String)"
});
formatter.write("Status Bad Request");
formatter.result({
  "duration": 31340106,
  "status": "passed"
});
formatter.after({
  "duration": 46545,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 187,
  "name": "Validate REST endpoint for Registration POST API for a given tokenID provided no RMM1.0 is installed-C2473228",
  "description": "",
  "id": "provisioning-and-registration-api;validate-rest-endpoint-for-registration-post-api-for-a-given-tokenid-provided-no-rmm1.0-is-installed-c2473228",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 186,
      "name": "@PlatformBVT"
    },
    {
      "line": 186,
      "name": "@PlatformRegression"
    },
    {
      "line": 186,
      "name": "@Win10_64Bit"
    }
  ]
});
formatter.step({
  "line": 188,
  "name": "User read data from excel with rowIndex \"\u003cRowIndex\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 189,
  "name": "User send a POST request for generate token API endpoint as \"\u003cTokenPOSTEndPoint\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 190,
  "name": "User should validate the \"\u003cStatuscode\u003e\" as in response",
  "keyword": "Then "
});
formatter.step({
  "line": 191,
  "name": "User should fetch token for API",
  "keyword": "And "
});
formatter.step({
  "line": 192,
  "name": "User send a POST request for agent registration API endpoint with token as \"\u003cPOSTEndPoint\u003e\" and partner as \"\u003cpartnerID\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 193,
  "name": "User should validate the \"\u003crequest\u003e\" as in response",
  "keyword": "Then "
});
formatter.step({
  "line": 194,
  "name": "User should fetch response for API",
  "keyword": "And "
});
formatter.step({
  "line": 195,
  "name": "User send a Get request for registration API endpoint as \"\u003cEndPoint\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 196,
  "name": "User should validate the status code as \"200\"OK",
  "keyword": "Then "
});
formatter.step({
  "line": 197,
  "name": "User should fetch response for API",
  "keyword": "And "
});
formatter.step({
  "line": 198,
  "name": "User should validate the format of Registration of Agent Microservice",
  "keyword": "And "
});
formatter.examples({
  "line": 200,
  "name": "",
  "description": "",
  "id": "provisioning-and-registration-api;validate-rest-endpoint-for-registration-post-api-for-a-given-tokenid-provided-no-rmm1.0-is-installed-c2473228;",
  "rows": [
    {
      "cells": [
        "RowIndex",
        "POSTEndPoint",
        "Statuscode",
        "TokenPOSTEndPoint",
        "partnerID",
        "request",
        "EndPoint"
      ],
      "line": 201,
      "id": "provisioning-and-registration-api;validate-rest-endpoint-for-registration-post-api-for-a-given-tokenid-provided-no-rmm1.0-is-installed-c2473228;;1"
    },
    {
      "cells": [
        "1",
        "/agent/v1/registration",
        "200",
        "/agent/v1/generatetoken",
        "",
        "200",
        "/agent/v1/partner/50001795/endpoint/EndPointID/registration"
      ],
      "line": 202,
      "id": "provisioning-and-registration-api;validate-rest-endpoint-for-registration-post-api-for-a-given-tokenid-provided-no-rmm1.0-is-installed-c2473228;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 400969,
  "status": "passed"
});
formatter.scenario({
  "line": 202,
  "name": "Validate REST endpoint for Registration POST API for a given tokenID provided no RMM1.0 is installed-C2473228",
  "description": "",
  "id": "provisioning-and-registration-api;validate-rest-endpoint-for-registration-post-api-for-a-given-tokenid-provided-no-rmm1.0-is-installed-c2473228;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 186,
      "name": "@Win10_64Bit"
    },
    {
      "line": 186,
      "name": "@PlatformRegression"
    },
    {
      "line": 186,
      "name": "@PlatformBVT"
    }
  ]
});
formatter.step({
  "line": 188,
  "name": "User read data from excel with rowIndex \"1\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 189,
  "name": "User send a POST request for generate token API endpoint as \"/agent/v1/generatetoken\"",
  "matchedColumns": [
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 190,
  "name": "User should validate the \"200\" as in response",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 191,
  "name": "User should fetch token for API",
  "keyword": "And "
});
formatter.step({
  "line": 192,
  "name": "User send a POST request for agent registration API endpoint with token as \"/agent/v1/registration\" and partner as \"\"",
  "matchedColumns": [
    1,
    4
  ],
  "keyword": "When "
});
formatter.step({
  "line": 193,
  "name": "User should validate the \"200\" as in response",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 194,
  "name": "User should fetch response for API",
  "keyword": "And "
});
formatter.step({
  "line": 195,
  "name": "User send a Get request for registration API endpoint as \"/agent/v1/partner/50001795/endpoint/EndPointID/registration\"",
  "matchedColumns": [
    6
  ],
  "keyword": "When "
});
formatter.step({
  "line": 196,
  "name": "User should validate the status code as \"200\"OK",
  "keyword": "Then "
});
formatter.step({
  "line": 197,
  "name": "User should fetch response for API",
  "keyword": "And "
});
formatter.step({
  "line": 198,
  "name": "User should validate the format of Registration of Agent Microservice",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 41
    }
  ],
  "location": "CommonSteps.i_read_data_from_excel_with_rowIndex(String)"
});
formatter.result({
  "duration": 256000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/agent/v1/generatetoken",
      "offset": 61
    }
  ],
  "location": "AgentProvisioningStep.i_send_a_POST_request_for_generate_token_API_endpoint_as(String)"
});
formatter.write("I send a Post request for URL https://integration.agent.exec.itsupport247.net/agent/v1/generatetoken");
formatter.write("Json format used for post :{\"clientID\":\"NA\",\"siteID\":\"NA\",\"partnerID\":\"50001795\"}");
formatter.result({
  "duration": 10371617274,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 26
    }
  ],
  "location": "CommonSteps.i_should_validate_the_as_in_response(String)"
});
formatter.write("Status OK");
formatter.result({
  "duration": 54316094,
  "status": "passed"
});
formatter.match({
  "location": "AgentProvisioningStep.i_should_fetch_token_for_API()"
});
formatter.write("Token is :5287ef32-66a3-49ba-8ecb-2528f492267b");
formatter.result({
  "duration": 1075879,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/agent/v1/registration",
      "offset": 76
    },
    {
      "val": "",
      "offset": 116
    }
  ],
  "location": "AgentProvisioningStep.i_send_a_POST_request_for_agent_registration_API_endpoint_with_token_as(String,String)"
});
formatter.write("I send a Post request for URL https://integration.agent.service.itsupport247.net/agent/v1/registration");
formatter.write("Json format used for post :{\"agentID\":\"69c21305-4a58-4433-a968-19120bb58afc\",\"clientID\":\"50109539\",\"legacyRegID\":\"53758699\",\"sysInfo\":{\"motherboardAdapter\":\"09203-891\",\"hostName\":\"RMM-222\",\"memory\":\"09203-891\",\"hardDriveSerialNumber\":\"09203-891\",\"processorType\":\"09203-891\",\"logicalDiskVolumeSerialNumber\":\"09203-891\",\"cdromSerial\":\"09203-891\",\"timestampUTC\":\"2017-01-11T12:24:53.489110938Z\",\"osName\":\"linux OS\",\"virtualMachineIdentity\":\"p1I1X\",\"osSerialNumber\":\"09203-891-5001202-52183\",\"macAddress\":\"08:00:25:21:45:e3\",\"processorid\":\"08:00:25:21:45:e3\",\"osVersion\":\"1.3.4\",\"biosSerial\":\"09203-891\"},\"endpointID\":\"69c21305-4a58-4433-a968-19120bb58afc\",\"siteID\":\"50109539\",\"partnerID\":\"\",\"token\":\"5287ef32-66a3-49ba-8ecb-2528f492267b\"}");
formatter.result({
  "duration": 10356019221,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 26
    }
  ],
  "location": "CommonSteps.i_should_validate_the_as_in_response(String)"
});
formatter.result({
  "duration": 57134033,
  "error_message": "java.lang.AssertionError: expected [OK] but found [Bad Request]\r\n\tat org.testng.Assert.fail(Assert.java:93)\r\n\tat org.testng.Assert.failNotEquals(Assert.java:512)\r\n\tat org.testng.Assert.assertEqualsImpl(Assert.java:134)\r\n\tat org.testng.Assert.assertEquals(Assert.java:115)\r\n\tat org.testng.Assert.assertEquals(Assert.java:189)\r\n\tat org.testng.Assert.assertEquals(Assert.java:199)\r\n\tat continuum.cucumber.stepDefinations.platform.CommonSteps.i_should_validate_the_as_in_response(CommonSteps.java:342)\r\n\tat ✽.Then User should validate the \"200\" as in response(platform/AgentProvisioning.feature:193)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "CommonSteps.i_should_fetch_response_for_Performace_API()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "/agent/v1/partner/50001795/endpoint/EndPointID/registration",
      "offset": 58
    }
  ],
  "location": "AgentProvisioningStep.i_send_a_Get_request_for_registration_API_endpoint_as(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 41
    }
  ],
  "location": "CommonSteps.i_should_validate_the_status_code_as_OK(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CommonSteps.i_should_fetch_response_for_Performace_API()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AgentProvisioningStep.i_should_validate_the_format_of_registration_of_Agent_Microservice()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 51879,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 205,
  "name": "Validate REST endpoint for Registration POST API for a given invalid tokenID provided no RMM1.0 is installed-C2473229",
  "description": "",
  "id": "provisioning-and-registration-api;validate-rest-endpoint-for-registration-post-api-for-a-given-invalid-tokenid-provided-no-rmm1.0-is-installed-c2473229",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 204,
      "name": "@PlatformBVT"
    },
    {
      "line": 204,
      "name": "@PlatformRegression"
    },
    {
      "line": 204,
      "name": "@Win10_64Bit"
    }
  ]
});
formatter.step({
  "line": 206,
  "name": "User read data from excel with rowIndex \"\u003cRowIndex\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 207,
  "name": "User send a POST request for agent registration API endpoint with Invalid token as \"\u003cPOSTEndPoint\u003e\" and partner as \"\u003cpartnerID\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 208,
  "name": "User should validate the \"\u003cStatuscode\u003e\" as in response",
  "keyword": "Then "
});
formatter.examples({
  "line": 210,
  "name": "",
  "description": "",
  "id": "provisioning-and-registration-api;validate-rest-endpoint-for-registration-post-api-for-a-given-invalid-tokenid-provided-no-rmm1.0-is-installed-c2473229;",
  "rows": [
    {
      "cells": [
        "RowIndex",
        "POSTEndPoint",
        "Statuscode",
        "partnerID"
      ],
      "line": 211,
      "id": "provisioning-and-registration-api;validate-rest-endpoint-for-registration-post-api-for-a-given-invalid-tokenid-provided-no-rmm1.0-is-installed-c2473229;;1"
    },
    {
      "cells": [
        "1",
        "/agent/v1/registration",
        "400",
        ""
      ],
      "line": 212,
      "id": "provisioning-and-registration-api;validate-rest-endpoint-for-registration-post-api-for-a-given-invalid-tokenid-provided-no-rmm1.0-is-installed-c2473229;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 430546,
  "status": "passed"
});
formatter.scenario({
  "line": 212,
  "name": "Validate REST endpoint for Registration POST API for a given invalid tokenID provided no RMM1.0 is installed-C2473229",
  "description": "",
  "id": "provisioning-and-registration-api;validate-rest-endpoint-for-registration-post-api-for-a-given-invalid-tokenid-provided-no-rmm1.0-is-installed-c2473229;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 204,
      "name": "@Win10_64Bit"
    },
    {
      "line": 204,
      "name": "@PlatformRegression"
    },
    {
      "line": 204,
      "name": "@PlatformBVT"
    }
  ]
});
formatter.step({
  "line": 206,
  "name": "User read data from excel with rowIndex \"1\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 207,
  "name": "User send a POST request for agent registration API endpoint with Invalid token as \"/agent/v1/registration\" and partner as \"\"",
  "matchedColumns": [
    1,
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 208,
  "name": "User should validate the \"400\" as in response",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 41
    }
  ],
  "location": "CommonSteps.i_read_data_from_excel_with_rowIndex(String)"
});
formatter.result({
  "duration": 100848,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/agent/v1/registration",
      "offset": 84
    },
    {
      "val": "",
      "offset": 124
    }
  ],
  "location": "AgentProvisioningStep.i_send_a_POST_request_for_agent_registration_API_endpoint_with_Invalid_token_as(String,String)"
});
formatter.write("I send a Post request for URL https://integration.agent.service.itsupport247.net/agent/v1/registration");
formatter.write("Json format used for post :{\"agentID\":\"69c21305-4a58-4433-a968-19120bb58afc\",\"clientID\":\"50109539\",\"legacyRegID\":\"53758699\",\"sysInfo\":{\"motherboardAdapter\":\"09203-891\",\"hostName\":\"RMM-222\",\"memory\":\"09203-891\",\"hardDriveSerialNumber\":\"09203-891\",\"processorType\":\"09203-891\",\"logicalDiskVolumeSerialNumber\":\"09203-891\",\"cdromSerial\":\"09203-891\",\"timestampUTC\":\"2017-01-11T12:24:53.489110938Z\",\"osName\":\"linux OS\",\"virtualMachineIdentity\":\"Tl82L\",\"osSerialNumber\":\"09203-891-5001202-52183\",\"macAddress\":\"08:00:25:21:45:e3\",\"processorid\":\"08:00:25:21:45:e3\",\"osVersion\":\"1.3.4\",\"biosSerial\":\"09203-891\"},\"endpointID\":\"69c21305-4a58-4433-a968-19120bb58afc\",\"siteID\":\"50109539\",\"partnerID\":\"\",\"token\":\"12345\"}");
formatter.result({
  "duration": 10284820710,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 26
    }
  ],
  "location": "CommonSteps.i_should_validate_the_as_in_response(String)"
});
formatter.write("Status Bad Request");
formatter.result({
  "duration": 51207733,
  "status": "passed"
});
formatter.after({
  "duration": 24727,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 215,
  "name": "Validate REST response for Registration POST API on the basis of partnerID-C2473192",
  "description": "",
  "id": "provisioning-and-registration-api;validate-rest-response-for-registration-post-api-on-the-basis-of-partnerid-c2473192",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 214,
      "name": "@PlatformRegression"
    },
    {
      "line": 214,
      "name": "@Win7_32Bit"
    },
    {
      "line": 214,
      "name": "@Win7_64Bit"
    },
    {
      "line": 214,
      "name": "@Win8_32Bit"
    },
    {
      "line": 214,
      "name": "@Win8_64Bit"
    },
    {
      "line": 214,
      "name": "@Win10_32Bit"
    },
    {
      "line": 214,
      "name": "@Win10_64Bit"
    },
    {
      "line": 214,
      "name": "@Win8.1_32Bit"
    },
    {
      "line": 214,
      "name": "@WinServer8_64Bit"
    },
    {
      "line": 214,
      "name": "@WinServer12_64Bit"
    },
    {
      "line": 214,
      "name": "@WinServer16_64Bit"
    },
    {
      "line": 214,
      "name": "@WinServer12R2_64Bit"
    }
  ]
});
formatter.step({
  "comments": [
    {
      "line": 216,
      "value": "# Given SSH connection establishes with remote test machine from tag"
    }
  ],
  "line": 217,
  "name": "User read data from excel with rowIndex \"\u003cRowIndex\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "comments": [
    {
      "line": 218,
      "value": "#When User fetch registry values of old RMM agent"
    },
    {
      "line": 219,
      "value": "# And User fetch AgentCore EndPointID from agentCore config file from tag"
    }
  ],
  "line": 220,
  "name": "User send a POST request for agent registration API endpoint as \"\u003cPOSTEndPoint\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 221,
  "name": "User should validate the \"\u003cStatuscode\u003e\" as in response",
  "keyword": "Then "
});
formatter.step({
  "line": 222,
  "name": "User should fetch endpointID from API response",
  "keyword": "And "
});
formatter.step({
  "line": 223,
  "name": "User send a Get request for API endpoint as \"\u003cEndPoint\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 224,
  "name": "User should validate the status code as \"200\"OK",
  "keyword": "Then "
});
formatter.step({
  "line": 225,
  "name": "User should fetch response for API",
  "keyword": "And "
});
formatter.examples({
  "comments": [
    {
      "line": 227,
      "value": "#And I should validate the response of registration API"
    },
    {
      "line": 228,
      "value": "# And I should validate response with EndPointID when sys info algo score is \"\u003cScore\u003e\""
    }
  ],
  "line": 229,
  "name": "",
  "description": "",
  "id": "provisioning-and-registration-api;validate-rest-response-for-registration-post-api-on-the-basis-of-partnerid-c2473192;",
  "rows": [
    {
      "cells": [
        "RowIndex",
        "EndPoint",
        "POSTEndPoint"
      ],
      "line": 230,
      "id": "provisioning-and-registration-api;validate-rest-response-for-registration-post-api-on-the-basis-of-partnerid-c2473192;;1"
    },
    {
      "cells": [
        "1",
        "/agent/v1/partner/118/registration",
        "/agent/v1/registration"
      ],
      "line": 231,
      "id": "provisioning-and-registration-api;validate-rest-response-for-registration-post-api-on-the-basis-of-partnerid-c2473192;;2"
    },
    {
      "cells": [
        "2",
        "/agent/v1/partner/118/registration",
        "/agent/v1/registration"
      ],
      "line": 232,
      "id": "provisioning-and-registration-api;validate-rest-response-for-registration-post-api-on-the-basis-of-partnerid-c2473192;;3"
    },
    {
      "cells": [
        "3",
        "/agent/v1/partner/118/registration",
        "/agent/v1/registration"
      ],
      "line": 233,
      "id": "provisioning-and-registration-api;validate-rest-response-for-registration-post-api-on-the-basis-of-partnerid-c2473192;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 152728,
  "status": "passed"
});
formatter.scenario({
  "line": 231,
  "name": "Validate REST response for Registration POST API on the basis of partnerID-C2473192",
  "description": "",
  "id": "provisioning-and-registration-api;validate-rest-response-for-registration-post-api-on-the-basis-of-partnerid-c2473192;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 214,
      "name": "@Win10_64Bit"
    },
    {
      "line": 214,
      "name": "@WinServer12_64Bit"
    },
    {
      "line": 214,
      "name": "@Win8.1_32Bit"
    },
    {
      "line": 214,
      "name": "@WinServer8_64Bit"
    },
    {
      "line": 214,
      "name": "@Win7_64Bit"
    },
    {
      "line": 214,
      "name": "@Win8_64Bit"
    },
    {
      "line": 214,
      "name": "@Win7_32Bit"
    },
    {
      "line": 214,
      "name": "@WinServer12R2_64Bit"
    },
    {
      "line": 214,
      "name": "@PlatformRegression"
    },
    {
      "line": 214,
      "name": "@Win10_32Bit"
    },
    {
      "line": 214,
      "name": "@WinServer16_64Bit"
    },
    {
      "line": 214,
      "name": "@Win8_32Bit"
    }
  ]
});
formatter.step({
  "comments": [
    {
      "line": 216,
      "value": "# Given SSH connection establishes with remote test machine from tag"
    }
  ],
  "line": 217,
  "name": "User read data from excel with rowIndex \"1\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "comments": [
    {
      "line": 218,
      "value": "#When User fetch registry values of old RMM agent"
    },
    {
      "line": 219,
      "value": "# And User fetch AgentCore EndPointID from agentCore config file from tag"
    }
  ],
  "line": 220,
  "name": "User send a POST request for agent registration API endpoint as \"/agent/v1/registration\"",
  "matchedColumns": [
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 221,
  "name": "User should validate the \"\u003cStatuscode\u003e\" as in response",
  "keyword": "Then "
});
formatter.step({
  "line": 222,
  "name": "User should fetch endpointID from API response",
  "keyword": "And "
});
formatter.step({
  "line": 223,
  "name": "User send a Get request for API endpoint as \"/agent/v1/partner/118/registration\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 224,
  "name": "User should validate the status code as \"200\"OK",
  "keyword": "Then "
});
formatter.step({
  "line": 225,
  "name": "User should fetch response for API",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 41
    }
  ],
  "location": "CommonSteps.i_read_data_from_excel_with_rowIndex(String)"
});
formatter.result({
  "duration": 62545,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/agent/v1/registration",
      "offset": 65
    }
  ],
  "location": "AgentProvisioningStep.i_send_a_POST_request_for_agent_registration_API_endpoint_as(String)"
});
formatter.write("I send a Post request for URL https://integration.agent.service.itsupport247.net/agent/v1/registration");
formatter.write("Json format used for post :{\"agentID\":\"69c21305-4a58-4433-a968-19120bb58afc\",\"clientID\":\"50109539\",\"legacyRegID\":\"53758699\",\"sysInfo\":{\"motherboardAdapter\":\"PFMKN078J340S2\",\"hostName\":\"Juno-win7-64\",\"systemManufacturerReference\":\"HP ProBook 440 G4\",\"memory\":\"1295FECC\",\"hardDriveSerialNumber\":\"RCF50ACE3USG1M\",\"processorType\":\"3\",\"logicalDiskVolumeSerialNumber\":\"CA383253\",\"cdromSerial\":\"NA\",\"timestampUTC\":\"2017-01-11T12:24:53.489110938Z\",\"osName\":\"Microsoft Windows 7 Professional \",\"virtualMachineIdentity\":\"D1B96747-5033-11E6-B041-29D65C0000CD\",\"osSerialNumber\":\"00371-220-7340795-06641\",\"macAddress\":\"00:50:56:A7:7B:69\",\"processorid\":\"1FABFBFF000306F2\",\"osVersion\":\"7.1.7601\",\"osType\":\"windows\",\"biosSerial\":\"VMware-42 27 3c 9f e4 40 cc 17-55 ca 6b 70 03 45 c8 48\"},\"endpointID\":\"69c21305-4a58-4433-a968-19120bb58afc\",\"siteID\":\"50109539\",\"partnerID\":\"118\"}");
formatter.result({
  "duration": 10272829443,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cStatuscode\u003e",
      "offset": 26
    }
  ],
  "location": "CommonSteps.i_should_validate_the_as_in_response(String)"
});
formatter.write("Status OK");
formatter.result({
  "duration": 68674391,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "arguments": [
    {
      "val": "/agent/v1/partner/118/registration",
      "offset": 45
    }
  ],
  "location": "AgentAutoUpdateStep.i_send_a_Get_request_for_Versioning_of_Agent_Microservice_API(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 41
    }
  ],
  "location": "CommonSteps.i_should_validate_the_status_code_as_OK(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CommonSteps.i_should_fetch_response_for_Performace_API()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 42667,
  "status": "passed"
});
formatter.before({
  "duration": 345212,
  "status": "passed"
});
formatter.scenario({
  "line": 232,
  "name": "Validate REST response for Registration POST API on the basis of partnerID-C2473192",
  "description": "",
  "id": "provisioning-and-registration-api;validate-rest-response-for-registration-post-api-on-the-basis-of-partnerid-c2473192;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 214,
      "name": "@Win10_64Bit"
    },
    {
      "line": 214,
      "name": "@WinServer12_64Bit"
    },
    {
      "line": 214,
      "name": "@Win8.1_32Bit"
    },
    {
      "line": 214,
      "name": "@WinServer8_64Bit"
    },
    {
      "line": 214,
      "name": "@Win7_64Bit"
    },
    {
      "line": 214,
      "name": "@Win8_64Bit"
    },
    {
      "line": 214,
      "name": "@Win7_32Bit"
    },
    {
      "line": 214,
      "name": "@WinServer12R2_64Bit"
    },
    {
      "line": 214,
      "name": "@PlatformRegression"
    },
    {
      "line": 214,
      "name": "@Win10_32Bit"
    },
    {
      "line": 214,
      "name": "@WinServer16_64Bit"
    },
    {
      "line": 214,
      "name": "@Win8_32Bit"
    }
  ]
});
formatter.step({
  "comments": [
    {
      "line": 216,
      "value": "# Given SSH connection establishes with remote test machine from tag"
    }
  ],
  "line": 217,
  "name": "User read data from excel with rowIndex \"2\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "comments": [
    {
      "line": 218,
      "value": "#When User fetch registry values of old RMM agent"
    },
    {
      "line": 219,
      "value": "# And User fetch AgentCore EndPointID from agentCore config file from tag"
    }
  ],
  "line": 220,
  "name": "User send a POST request for agent registration API endpoint as \"/agent/v1/registration\"",
  "matchedColumns": [
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 221,
  "name": "User should validate the \"\u003cStatuscode\u003e\" as in response",
  "keyword": "Then "
});
formatter.step({
  "line": 222,
  "name": "User should fetch endpointID from API response",
  "keyword": "And "
});
formatter.step({
  "line": 223,
  "name": "User send a Get request for API endpoint as \"/agent/v1/partner/118/registration\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 224,
  "name": "User should validate the status code as \"200\"OK",
  "keyword": "Then "
});
formatter.step({
  "line": 225,
  "name": "User should fetch response for API",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 41
    }
  ],
  "location": "CommonSteps.i_read_data_from_excel_with_rowIndex(String)"
});
formatter.result({
  "duration": 159515,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/agent/v1/registration",
      "offset": 65
    }
  ],
  "location": "AgentProvisioningStep.i_send_a_POST_request_for_agent_registration_API_endpoint_as(String)"
});
formatter.write("I send a Post request for URL https://integration.agent.service.itsupport247.net/agent/v1/registration");
formatter.write("Json format used for post :{\"agentID\":\"69c21305-4a58-4433-a968-19120bb58afc\",\"clientID\":\"50109539\",\"legacyRegID\":\"53758699\",\"sysInfo\":{\"motherboardAdapter\":\"QFMKN078J340S2\",\"hostName\":\"Juno-win7-32\",\"systemManufacturerReference\":\"HP ProBook 440 G3\",\"memory\":\"2295FECC\",\"hardDriveSerialNumber\":\"SCF50ACE3USG1M\",\"processorType\":\"3\",\"logicalDiskVolumeSerialNumber\":\"DA383253\",\"cdromSerial\":\"NA\",\"timestampUTC\":\"2017-01-11T12:24:53.489110938Z\",\"osName\":\"Microsoft Windows 8 Professional \",\"virtualMachineIdentity\":\"D1B96747-5033-11E6-B041-29D65C0000CE\",\"osSerialNumber\":\"10371-220-7340795-06641\",\"macAddress\":\"11:50:56:A7:7B:69\",\"processorid\":\"2FABFBFF000306F2\",\"osVersion\":\"8.1.7601\",\"osType\":\"windows\",\"biosSerial\":\"VMware-42 27 3c 9f e4 40 cc 17-55 ca 6b 70 03 45 c8 49\"},\"endpointID\":\"69c21305-4a58-4433-a968-19120bb58afc\",\"siteID\":\"50109539\",\"partnerID\":\"118\"}");
formatter.result({
  "duration": 10265037448,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cStatuscode\u003e",
      "offset": 26
    }
  ],
  "location": "CommonSteps.i_should_validate_the_as_in_response(String)"
});
formatter.write("Status OK");
formatter.result({
  "duration": 51914157,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "arguments": [
    {
      "val": "/agent/v1/partner/118/registration",
      "offset": 45
    }
  ],
  "location": "AgentAutoUpdateStep.i_send_a_Get_request_for_Versioning_of_Agent_Microservice_API(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 41
    }
  ],
  "location": "CommonSteps.i_should_validate_the_status_code_as_OK(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CommonSteps.i_should_fetch_response_for_Performace_API()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 21819,
  "status": "passed"
});
formatter.before({
  "duration": 170667,
  "status": "passed"
});
formatter.scenario({
  "line": 233,
  "name": "Validate REST response for Registration POST API on the basis of partnerID-C2473192",
  "description": "",
  "id": "provisioning-and-registration-api;validate-rest-response-for-registration-post-api-on-the-basis-of-partnerid-c2473192;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 214,
      "name": "@Win10_64Bit"
    },
    {
      "line": 214,
      "name": "@WinServer12_64Bit"
    },
    {
      "line": 214,
      "name": "@Win8.1_32Bit"
    },
    {
      "line": 214,
      "name": "@WinServer8_64Bit"
    },
    {
      "line": 214,
      "name": "@Win7_64Bit"
    },
    {
      "line": 214,
      "name": "@Win8_64Bit"
    },
    {
      "line": 214,
      "name": "@Win7_32Bit"
    },
    {
      "line": 214,
      "name": "@WinServer12R2_64Bit"
    },
    {
      "line": 214,
      "name": "@PlatformRegression"
    },
    {
      "line": 214,
      "name": "@Win10_32Bit"
    },
    {
      "line": 214,
      "name": "@WinServer16_64Bit"
    },
    {
      "line": 214,
      "name": "@Win8_32Bit"
    }
  ]
});
formatter.step({
  "comments": [
    {
      "line": 216,
      "value": "# Given SSH connection establishes with remote test machine from tag"
    }
  ],
  "line": 217,
  "name": "User read data from excel with rowIndex \"3\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "comments": [
    {
      "line": 218,
      "value": "#When User fetch registry values of old RMM agent"
    },
    {
      "line": 219,
      "value": "# And User fetch AgentCore EndPointID from agentCore config file from tag"
    }
  ],
  "line": 220,
  "name": "User send a POST request for agent registration API endpoint as \"/agent/v1/registration\"",
  "matchedColumns": [
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 221,
  "name": "User should validate the \"\u003cStatuscode\u003e\" as in response",
  "keyword": "Then "
});
formatter.step({
  "line": 222,
  "name": "User should fetch endpointID from API response",
  "keyword": "And "
});
formatter.step({
  "line": 223,
  "name": "User send a Get request for API endpoint as \"/agent/v1/partner/118/registration\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 224,
  "name": "User should validate the status code as \"200\"OK",
  "keyword": "Then "
});
formatter.step({
  "line": 225,
  "name": "User should fetch response for API",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 41
    }
  ],
  "location": "CommonSteps.i_read_data_from_excel_with_rowIndex(String)"
});
formatter.result({
  "duration": 126545,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/agent/v1/registration",
      "offset": 65
    }
  ],
  "location": "AgentProvisioningStep.i_send_a_POST_request_for_agent_registration_API_endpoint_as(String)"
});
formatter.write("I send a Post request for URL https://integration.agent.service.itsupport247.net/agent/v1/registration");
formatter.write("Json format used for post :{\"agentID\":\"69c21305-4a58-4433-a968-19120bb58afc\",\"clientID\":\"50109539\",\"legacyRegID\":\"53758699\",\"sysInfo\":{\"motherboardAdapter\":\"QFMKN078J340S2\",\"hostName\":\"Juno-win7-32\",\"systemManufacturerReference\":\"HP ProBook 440 G2\",\"memory\":\"2295FECC\",\"hardDriveSerialNumber\":\"SCF50ACE3USG1M\",\"processorType\":\"3\",\"logicalDiskVolumeSerialNumber\":\"DA383253\",\"cdromSerial\":\"NA\",\"timestampUTC\":\"2017-01-11T12:24:53.489110938Z\",\"osName\":\"Microsoft Windows 8 Professional \",\"virtualMachineIdentity\":\"D1B96747-5033-11E6-B041-29D65C0000CE\",\"osSerialNumber\":\"10371-220-7340795-06641\",\"macAddress\":\"11:50:56:A7:7B:69\",\"processorid\":\"2FABFBFF000306F2\",\"osVersion\":\"8.1.7601\",\"osType\":\"windows\",\"biosSerial\":\"VMware-42 27 3c 9f e4 40 cc 17-55 ca 6b 70 03 45 c8 49\"},\"endpointID\":\"69c21305-4a58-4433-a968-19120bb58afc\",\"siteID\":\"50109539\",\"partnerID\":\"118\"}");
formatter.result({
  "duration": 10301998399,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cStatuscode\u003e",
      "offset": 26
    }
  ],
  "location": "CommonSteps.i_should_validate_the_as_in_response(String)"
});
formatter.write("Status OK");
formatter.result({
  "duration": 53364338,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "arguments": [
    {
      "val": "/agent/v1/partner/118/registration",
      "offset": 45
    }
  ],
  "location": "AgentAutoUpdateStep.i_send_a_Get_request_for_Versioning_of_Agent_Microservice_API(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 41
    }
  ],
  "location": "CommonSteps.i_should_validate_the_status_code_as_OK(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CommonSteps.i_should_fetch_response_for_Performace_API()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 45091,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 236,
  "name": "Validate REST endpoint for Registration POST API-C179500",
  "description": "",
  "id": "provisioning-and-registration-api;validate-rest-endpoint-for-registration-post-api-c179500",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 235,
      "name": "@PlatformRegression"
    },
    {
      "line": 235,
      "name": "@Win10_32Bit"
    }
  ]
});
formatter.step({
  "line": 237,
  "name": "SSH connection establishes with remote test machine from tag",
  "keyword": "Given "
});
formatter.step({
  "line": 238,
  "name": "User read data from excel with rowIndex \"\u003cRowIndex\u003e\"",
  "keyword": "When "
});
formatter.step({
  "comments": [
    {
      "line": 239,
      "value": "# And User fetch system attributes from agentCore from tag"
    }
  ],
  "line": 240,
  "name": "User fetch registry values of old RMM agent",
  "keyword": "Then "
});
formatter.step({
  "line": 241,
  "name": "User fetch AgentCore EndPointID from agentCore config file from tag",
  "keyword": "And "
});
formatter.step({
  "line": 242,
  "name": "User send a Get request for API endpoint as \"\u003cEndPoint\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 243,
  "name": "User should validate the status code as \"200\"OK",
  "keyword": "Then "
});
formatter.step({
  "line": 244,
  "name": "User should fetch response for API",
  "keyword": "And "
});
formatter.step({
  "line": 245,
  "name": "User send a POST request for agent registration API endpoint as \"\u003cPOSTEndPoint\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 246,
  "name": "User should validate the \"\u003cStatuscode\u003e\" as in response",
  "keyword": "Then "
});
formatter.step({
  "line": 247,
  "name": "User should fetch response for API",
  "keyword": "And "
});
formatter.examples({
  "comments": [
    {
      "line": 248,
      "value": "#And I should compare EndPointID as \"\u003cStatus\u003e\""
    },
    {
      "line": 250,
      "value": "# When I send a Get request for registration API endpoint as \"\u003cEndPoint\u003e\""
    },
    {
      "line": 251,
      "value": "#Then I should validate the status code as \"200\"OK"
    },
    {
      "line": 252,
      "value": "# And I should fetch response for API"
    },
    {
      "line": 253,
      "value": "# And I should validate the format of Registration of Agent Microservice"
    },
    {
      "line": 254,
      "value": "#And I should validate the system info of the response of registration API"
    }
  ],
  "line": 255,
  "name": "",
  "description": "",
  "id": "provisioning-and-registration-api;validate-rest-endpoint-for-registration-post-api-c179500;",
  "rows": [
    {
      "cells": [
        "RowIndex",
        "POSTEndPoint",
        "Statuscode",
        "EndPoint",
        "Status"
      ],
      "line": 256,
      "id": "provisioning-and-registration-api;validate-rest-endpoint-for-registration-post-api-c179500;;1"
    },
    {
      "cells": [
        "1",
        "/agent/v1/registration",
        "200",
        "/agent/v1/partner/PartnerID/endpoint/EndPointID/registration",
        "true"
      ],
      "line": 257,
      "id": "provisioning-and-registration-api;validate-rest-endpoint-for-registration-post-api-c179500;;2"
    },
    {
      "cells": [
        "2",
        "/agent/v1/registration",
        "200",
        "/agent/v1/partner/PartnerID/endpoint/EndPointID/registration",
        "true"
      ],
      "line": 258,
      "id": "provisioning-and-registration-api;validate-rest-endpoint-for-registration-post-api-c179500;;3"
    },
    {
      "cells": [
        "3",
        "/agent/v1/registration",
        "200",
        "/agent/v1/partner/PartnerID/endpoint/EndPointID/registration",
        "false"
      ],
      "line": 259,
      "id": "provisioning-and-registration-api;validate-rest-endpoint-for-registration-post-api-c179500;;4"
    },
    {
      "cells": [
        "4",
        "/agent/v1/registration",
        "200",
        "/agent/v1/partner/PartnerID/endpoint/EndPointID/registration",
        "true"
      ],
      "line": 260,
      "id": "provisioning-and-registration-api;validate-rest-endpoint-for-registration-post-api-c179500;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 676848,
  "status": "passed"
});
formatter.scenario({
  "line": 257,
  "name": "Validate REST endpoint for Registration POST API-C179500",
  "description": "",
  "id": "provisioning-and-registration-api;validate-rest-endpoint-for-registration-post-api-c179500;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 235,
      "name": "@PlatformRegression"
    },
    {
      "line": 235,
      "name": "@Win10_32Bit"
    }
  ]
});
formatter.step({
  "line": 237,
  "name": "SSH connection establishes with remote test machine from tag",
  "keyword": "Given "
});
formatter.step({
  "line": 238,
  "name": "User read data from excel with rowIndex \"1\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "comments": [
    {
      "line": 239,
      "value": "# And User fetch system attributes from agentCore from tag"
    }
  ],
  "line": 240,
  "name": "User fetch registry values of old RMM agent",
  "keyword": "Then "
});
formatter.step({
  "line": 241,
  "name": "User fetch AgentCore EndPointID from agentCore config file from tag",
  "keyword": "And "
});
formatter.step({
  "line": 242,
  "name": "User send a Get request for API endpoint as \"/agent/v1/partner/PartnerID/endpoint/EndPointID/registration\"",
  "matchedColumns": [
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 243,
  "name": "User should validate the status code as \"200\"OK",
  "keyword": "Then "
});
formatter.step({
  "line": 244,
  "name": "User should fetch response for API",
  "keyword": "And "
});
formatter.step({
  "line": 245,
  "name": "User send a POST request for agent registration API endpoint as \"/agent/v1/registration\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 246,
  "name": "User should validate the \"200\" as in response",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 247,
  "name": "User should fetch response for API",
  "keyword": "And "
});
formatter.match({
  "location": "CommonSteps.sshConnectionEstablishedWithRemoteTestMachineFromTag()"
});
formatter.write("\u003cfont color\u003d\"blue\"\u003e\u003cb\u003eConnection Establish for : 10.2.114.113:22\u003c/b\u003e\u003c/font\u003e\u003cbr/\u003e");
formatter.result({
  "duration": 1224726194,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 41
    }
  ],
  "location": "CommonSteps.i_read_data_from_excel_with_rowIndex(String)"
});
formatter.result({
  "duration": 102787,
  "status": "passed"
});
formatter.match({
  "location": "AgentProvisioningStep.i_fetch_registry_values_of_old_rmm_agent_from_tag()"
});
formatter.write("Member ID is-\u003e1234\r\nSite ID is-\u003e50109539\r\nReg ID is-\u003e53758699");
formatter.result({
  "duration": 1295268221,
  "status": "passed"
});
formatter.match({
  "location": "CommonSteps.i_fetch_AgentCore_EndPointID_from_agentCore_config_file_from_tag()"
});
formatter.write("\u003cfont color\u003d\"blue\"\u003e\u003cb\u003eEndPoint ID is 69c21305-4a58-4433-a968-19120bb58afc\u003c/b\u003e\u003c/font\u003e\u003cbr/\u003e");
formatter.result({
  "duration": 507296723,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/agent/v1/partner/PartnerID/endpoint/EndPointID/registration",
      "offset": 45
    }
  ],
  "location": "AgentAutoUpdateStep.i_send_a_Get_request_for_Versioning_of_Agent_Microservice_API(String)"
});
formatter.write("I send a Get request for URL ");
formatter.result({
  "duration": 10011283873,
  "error_message": "java.lang.Exception: \nConfigurations           :  SQL Server Name : 40.121.209.122:3306/, Browser : firefox, OS Type : Windows, Project Name : Juno-Platform-Desktop\nException Stack Trace    :  java.net.MalformedURLException: no protocol: \r\n\tat java.net.URL.\u003cinit\u003e(Unknown Source)\r\n\tat java.net.URL.\u003cinit\u003e(Unknown Source)\r\n\tat java.net.URL.\u003cinit\u003e(Unknown Source)\r\n\tat continuum.cucumber.Page.HTTPUtility.sendGetRequest(HTTPUtility.java:56)\r\n\tat continuum.cucumber.Page.PluginHelper.getEndpointIdforAgentELB(PluginHelper.java:1453)\r\n\tat continuum.cucumber.stepDefinations.platform.AgentAutoUpdateStep.i_send_a_Get_request_for_Versioning_of_Agent_Microservice_API(AgentAutoUpdateStep.java:38)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:37)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:13)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:31)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:299)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.Cucu\r\n\tat continuum.cucumber.reporting.ErrorReporter.createErrorMapAndThrowException(ErrorReporter.java:161)\r\n\tat continuum.cucumber.reporting.ErrorReporter.reportError(ErrorReporter.java:29)\r\n\tat continuum.cucumber.stepDefinations.platform.AgentAutoUpdateStep.i_send_a_Get_request_for_Versioning_of_Agent_Microservice_API(AgentAutoUpdateStep.java:40)\r\n\tat ✽.When User send a Get request for API endpoint as \"/agent/v1/partner/PartnerID/endpoint/EndPointID/registration\"(platform/AgentProvisioning.feature:242)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 41
    }
  ],
  "location": "CommonSteps.i_should_validate_the_status_code_as_OK(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CommonSteps.i_should_fetch_response_for_Performace_API()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "/agent/v1/registration",
      "offset": 65
    }
  ],
  "location": "AgentProvisioningStep.i_send_a_POST_request_for_agent_registration_API_endpoint_as(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 26
    }
  ],
  "location": "CommonSteps.i_should_validate_the_as_in_response(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CommonSteps.i_should_fetch_response_for_Performace_API()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 671030,
  "status": "passed"
});
formatter.before({
  "duration": 3088968,
  "status": "passed"
});
formatter.scenario({
  "line": 258,
  "name": "Validate REST endpoint for Registration POST API-C179500",
  "description": "",
  "id": "provisioning-and-registration-api;validate-rest-endpoint-for-registration-post-api-c179500;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 235,
      "name": "@PlatformRegression"
    },
    {
      "line": 235,
      "name": "@Win10_32Bit"
    }
  ]
});
formatter.step({
  "line": 237,
  "name": "SSH connection establishes with remote test machine from tag",
  "keyword": "Given "
});
formatter.step({
  "line": 238,
  "name": "User read data from excel with rowIndex \"2\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "comments": [
    {
      "line": 239,
      "value": "# And User fetch system attributes from agentCore from tag"
    }
  ],
  "line": 240,
  "name": "User fetch registry values of old RMM agent",
  "keyword": "Then "
});
formatter.step({
  "line": 241,
  "name": "User fetch AgentCore EndPointID from agentCore config file from tag",
  "keyword": "And "
});
formatter.step({
  "line": 242,
  "name": "User send a Get request for API endpoint as \"/agent/v1/partner/PartnerID/endpoint/EndPointID/registration\"",
  "matchedColumns": [
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 243,
  "name": "User should validate the status code as \"200\"OK",
  "keyword": "Then "
});
formatter.step({
  "line": 244,
  "name": "User should fetch response for API",
  "keyword": "And "
});
formatter.step({
  "line": 245,
  "name": "User send a POST request for agent registration API endpoint as \"/agent/v1/registration\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 246,
  "name": "User should validate the \"200\" as in response",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 247,
  "name": "User should fetch response for API",
  "keyword": "And "
});
formatter.match({
  "location": "CommonSteps.sshConnectionEstablishedWithRemoteTestMachineFromTag()"
});
formatter.write("\u003cfont color\u003d\"blue\"\u003e\u003cb\u003eConnection Establish for : 10.2.114.113:22\u003c/b\u003e\u003c/font\u003e\u003cbr/\u003e");
formatter.result({
  "duration": 452183538,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 41
    }
  ],
  "location": "CommonSteps.i_read_data_from_excel_with_rowIndex(String)"
});
formatter.result({
  "duration": 124606,
  "status": "passed"
});
formatter.match({
  "location": "AgentProvisioningStep.i_fetch_registry_values_of_old_rmm_agent_from_tag()"
});
formatter.write("Member ID is-\u003e1234\r\nSite ID is-\u003e50109539\r\nReg ID is-\u003e53758699");
formatter.result({
  "duration": 2003165574,
  "status": "passed"
});
formatter.match({
  "location": "CommonSteps.i_fetch_AgentCore_EndPointID_from_agentCore_config_file_from_tag()"
});
formatter.write("\u003cfont color\u003d\"blue\"\u003e\u003cb\u003eEndPoint ID is 69c21305-4a58-4433-a968-19120bb58afc\u003c/b\u003e\u003c/font\u003e\u003cbr/\u003e");
formatter.result({
  "duration": 507334542,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/agent/v1/partner/PartnerID/endpoint/EndPointID/registration",
      "offset": 45
    }
  ],
  "location": "AgentAutoUpdateStep.i_send_a_Get_request_for_Versioning_of_Agent_Microservice_API(String)"
});
formatter.write("I send a Get request for URL ");
formatter.result({
  "duration": 10009306662,
  "error_message": "java.lang.Exception: \nConfigurations           :  SQL Server Name : 40.121.209.122:3306/, Browser : firefox, OS Type : Windows, Project Name : Juno-Platform-Desktop\nException Stack Trace    :  java.net.MalformedURLException: no protocol: \r\n\tat java.net.URL.\u003cinit\u003e(Unknown Source)\r\n\tat java.net.URL.\u003cinit\u003e(Unknown Source)\r\n\tat java.net.URL.\u003cinit\u003e(Unknown Source)\r\n\tat continuum.cucumber.Page.HTTPUtility.sendGetRequest(HTTPUtility.java:56)\r\n\tat continuum.cucumber.Page.PluginHelper.getEndpointIdforAgentELB(PluginHelper.java:1453)\r\n\tat continuum.cucumber.stepDefinations.platform.AgentAutoUpdateStep.i_send_a_Get_request_for_Versioning_of_Agent_Microservice_API(AgentAutoUpdateStep.java:38)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:37)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:13)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:31)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:299)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.Cucu\r\n\tat continuum.cucumber.reporting.ErrorReporter.createErrorMapAndThrowException(ErrorReporter.java:161)\r\n\tat continuum.cucumber.reporting.ErrorReporter.reportError(ErrorReporter.java:29)\r\n\tat continuum.cucumber.stepDefinations.platform.AgentAutoUpdateStep.i_send_a_Get_request_for_Versioning_of_Agent_Microservice_API(AgentAutoUpdateStep.java:40)\r\n\tat ✽.When User send a Get request for API endpoint as \"/agent/v1/partner/PartnerID/endpoint/EndPointID/registration\"(platform/AgentProvisioning.feature:242)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 41
    }
  ],
  "location": "CommonSteps.i_should_validate_the_status_code_as_OK(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CommonSteps.i_should_fetch_response_for_Performace_API()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "/agent/v1/registration",
      "offset": 65
    }
  ],
  "location": "AgentProvisioningStep.i_send_a_POST_request_for_agent_registration_API_endpoint_as(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 26
    }
  ],
  "location": "CommonSteps.i_should_validate_the_as_in_response(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CommonSteps.i_should_fetch_response_for_Performace_API()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 1188363,
  "status": "passed"
});
formatter.before({
  "duration": 573091,
  "status": "passed"
});
formatter.scenario({
  "line": 259,
  "name": "Validate REST endpoint for Registration POST API-C179500",
  "description": "",
  "id": "provisioning-and-registration-api;validate-rest-endpoint-for-registration-post-api-c179500;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 235,
      "name": "@PlatformRegression"
    },
    {
      "line": 235,
      "name": "@Win10_32Bit"
    }
  ]
});
formatter.step({
  "line": 237,
  "name": "SSH connection establishes with remote test machine from tag",
  "keyword": "Given "
});
formatter.step({
  "line": 238,
  "name": "User read data from excel with rowIndex \"3\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "comments": [
    {
      "line": 239,
      "value": "# And User fetch system attributes from agentCore from tag"
    }
  ],
  "line": 240,
  "name": "User fetch registry values of old RMM agent",
  "keyword": "Then "
});
formatter.step({
  "line": 241,
  "name": "User fetch AgentCore EndPointID from agentCore config file from tag",
  "keyword": "And "
});
formatter.step({
  "line": 242,
  "name": "User send a Get request for API endpoint as \"/agent/v1/partner/PartnerID/endpoint/EndPointID/registration\"",
  "matchedColumns": [
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 243,
  "name": "User should validate the status code as \"200\"OK",
  "keyword": "Then "
});
formatter.step({
  "line": 244,
  "name": "User should fetch response for API",
  "keyword": "And "
});
formatter.step({
  "line": 245,
  "name": "User send a POST request for agent registration API endpoint as \"/agent/v1/registration\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 246,
  "name": "User should validate the \"200\" as in response",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 247,
  "name": "User should fetch response for API",
  "keyword": "And "
});
formatter.match({
  "location": "CommonSteps.sshConnectionEstablishedWithRemoteTestMachineFromTag()"
});
formatter.write("\u003cfont color\u003d\"blue\"\u003e\u003cb\u003eConnection Establish for : 10.2.114.113:22\u003c/b\u003e\u003c/font\u003e\u003cbr/\u003e");
formatter.result({
  "duration": 534679013,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 41
    }
  ],
  "location": "CommonSteps.i_read_data_from_excel_with_rowIndex(String)"
});
formatter.result({
  "duration": 192485,
  "status": "passed"
});
formatter.match({
  "location": "AgentProvisioningStep.i_fetch_registry_values_of_old_rmm_agent_from_tag()"
});
