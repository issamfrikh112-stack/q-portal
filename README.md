
"updatedAt": "2026-05-28T13:53:01.159Z",
  "createdAt": "2026-05-28T03:00:34.918Z",
  "id": "fmIZMcOuQazWLGEr",
  "name": "My workflow 3",
  "description": null,
  "active": false,
  "isArchived": false,
  "nodes": [
    {
      "parameters": {
        "promptType": "define",
        "text": "={{ $json.message.text }}",
        "options": {
          "systemMessage": "You are a helpful assistant"
        }
      },
      "type": "@n8n/n8n-nodes-langchain.agent",
      "typeVersion": 3.1,
      "position": [
        192,
        -16
      ],
      "id": "f4fcea51-131a-444b-b994-ac2d60474a7f",
      "name": "AI Agent"
    },
    {
      "parameters": {
        "chatId": "={{ $('Telegram Trigger').item.json.message.chat.id }}",
        "text": "=}{{ $json.output }}",
        "additionalFields": {}
      },
      "type": "n8n-nodes-base.telegram",
      "typeVersion": 1.2,
      "position": [
        608,
        -64
      ],
      "id": "363d7411-ab2c-4d64-905c-57d989db7bc1",
      "name": "Send a text message",
      "webhookId": "3eb9115e-f026-4724-b9af-382776bbf9ed",
      "credentials": {
        "telegramApi": {
          "id": "fRs9XYzeALBupKh2",
          "name": "Telegram account 2"
        }
      }
    },
    {
      "parameters": {
        "updates": [
          "message",
          "callback_query",
          "channel_post",
          "edited_channel_post",
          "edited_message",
          "inline_query",
          "poll",
          "pre_checkout_query",
          "shipping_query"
        ],
        "additionalFields": {
          "download": true,
          "imageSize": "large",
          "chatIds": "",
          "userIds": ""
        }
      },
      "type": "n8n-nodes-base.telegramTrigger",
      "typeVersion": 1.3,
      "position": [
        0,
        0
      ],
      "id": "fc0df92f-04e1-413e-b32e-692807c727e5",
      "name": "Telegram Trigger",
      "webhookId": "83674cf5-196a-4613-bf0e-4a64e86960b1",
      "credentials": {
        "telegramApi": {
          "id": "eR06E70IFQAKcCBs",
          "name": "Telegram account 3"
        }
      }
    },
    {
      "parameters": {
        "model": "openai/gpt-oss-120b:free",
        "options": {}
      },
      "type": "@n8n/n8n-nodes-langchain.lmChatOpenRouter",
      "typeVersion": 1,
      "position": [
        144,
        160
      ],
      "id": "549548d8-25f1-4b6d-95bb-3fd565489014",
      "name": "OpenRouter Chat Model",
      "credentials": {
        "openRouterApi": {
          "id": "rhgPVjNv6WbI2zDv",
          "name": "OpenRouter account"
        }
      }
    },
    {
      "parameters": {
        "sessionIdType": "customKey",
        "sessionKey": "789"
      },
      "type": "@n8n/n8n-nodes-langchain.memoryBufferWindow",
      "typeVersion": 1.4,
      "position": [
        256,
        240
      ],
      "id": "840f22af-087c-445b-a3e5-0637187c5dad",
      "name": "Simple Memory"
    }
  ],
  "connections": {
    "AI Agent": {
      "main": [
        [
          {
            "node": "Send a text message",
            "type": "main",
            "index": 0
          }
        ]
      ]
    },
    "Telegram Trigger": {
      "main": [
        [
          {
            "node": "AI Agent",
            "type": "main",
            "index": 0
          }
        ]
      ]
    },
    "OpenRouter Chat Model": {
      "ai_languageModel": [
        [
          {
            "node": "AI Agent",
            "type": "ai_languageModel",
            "index": 0
          }
        ]
      ]
    },
    "Simple Memory": {
      "ai_memory": [
        [
          {
            "node": "AI Agent",
            "type": "ai_memory",
            "index": 0
          }
        ]
      ]
    }
  },
  "settings": {
    "executionOrder": "v1",
    "binaryMode": "separate"
  },
  "staticData": null,
  "meta": {
    "templateCredsSetupCompleted": true
  },
  "pinData": {},
  "versionId": "dd122317-ed08-444a-8f4a-f25a874ff864",
  "activeVersionId": null,
  "versionCounter": 199,
  "triggerCount": 1,
  "tags": [],
  "parentFolder": null,
  "activeVersion": null,
  "homeProject": {
    "id": "QfwatKuQE2AsNtuK",
    "type": "personal",
    "name": "ISSAM FRIKH <issamfrikh112@gmail.com>",
    "icon": null
  },
  "sharedWithProjects": [],
  "usedCredentials": [
    {
      "id": "eR06E70IFQAKcCBs",
      "name": "Telegram account 3",
      "type": "telegramApi",
      "currentUserHasAccess": true,
      "homeProject": {
        "id": "QfwatKuQE2AsNtuK",
        "type": "personal",
        "name": "ISSAM FRIKH <issamfrikh112@gmail.com>",
        "icon": null
      },
      "sharedWithProjects": []
    },
    {
      "id": "fRs9XYzeALBupKh2",
      "name": "Telegram account 2",
      "type": "telegramApi",
      "currentUserHasAccess": true,
      "homeProject": {
        "id": "QfwatKuQE2AsNtuK",
        "type": "personal",
        "name": "ISSAM FRIKH <issamfrikh112@gmail.com>",
        "icon": null
      },
      "sharedWithProjects": []
    },
    {
      "id": "rhgPVjNv6WbI2zDv",
      "name": "OpenRouter account",
      "type": "openRouterApi",
      "currentUserHasAccess": true,
      "homeProject": {
        "id": "QfwatKuQE2AsNtuK",
        "type": "personal",
        "name": "ISSAM FRIKH <issamfrikh112@gmail.com>",
        "icon": null
      },
      "sharedWithProjects": []
    }
  ],
  "scopes": [
    "workflow:create",
    "workflow:delete",
    "workflow:execute",
    "workflow:execute-chat",
    "workflow:list",
    "workflow:move",
    "workflow:publish",
    "workflow:read",
    "workflow:share",
    "workflow:unpublish",
    "workflow:unshare",
    "workflow:update",
    "workflow:updateRedactionSetting"
  ],
  "checksum": "7205a577a51ef11bc8e60660df50c00abc32f0af6669ed53649f79d2ddbb3074"
}
