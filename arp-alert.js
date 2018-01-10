var fs = require('fs');
var https = require('https');
const ArpMonitor = require('arp-monitor');

const bot_api_key = 'bot123456:ABC-DEF1234ghIkl-zyx57W2v1u123ew11';
const client_key = '00000000';

var hosts_file = 'known_hosts.txt';
# Create file if not found
fs.appendFileSync(hosts_file,'');
var known_hosts = fs.readFileSync(hosts_file);
var arpMonitor = new ArpMonitor();

function alert(node) {
    var url = 'https://api.telegram.org/' + bot_api_key + '/sendMessage?chat_id=' + client_key + '&text=Client connected with MAC: ' + node.mac + ' and IP: ' + node.ip;
    https.get(url);
    console.log('[ARP-ALERT] New client connected: ',node.mac, node.ip);
    known_hosts += (node.mac + ',');
    fs.appendFileSync(hosts_file, node.mac + ',');
}
 
arpMonitor.on("in", function(node) {
	if(known_hosts.indexOf(node.mac) == -1) {
		alert(node);
	}
})

