# arp-alert
Monitors the ARP table and saves a list of known hosts. If a new client is detected (not stored on the list), a notification is sent using [Telegram BOT APIs](https://core.telegram.org/bots) and the client is added to the list.

### USAGE:
Change **bot_api_key** and **client_key** in **arp_alert.js** to match your Telegram BOT values.

```javascript
const bot_api_key = 'bot123456:ABC-DEF1234ghIkl-zyx57W2v1u123ew11';
const client_key = '00000000';
```
