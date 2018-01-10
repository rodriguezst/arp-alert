# arp-alert
Monitors the ARP table and saves a list of known hosts. If a new client is detected (not stored on the list), an action is triggered and the client is added to the list.

Change console.log(node.mac, node.ip); to the action you want to trigger when a new host is connected.
