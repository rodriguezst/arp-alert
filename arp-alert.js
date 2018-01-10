var fs = require('fs');

var known_hosts = fs.readFileSync('known_hosts.txt');
var arpMonitor = new ArpMonitor();

function alert(node) {
    console.log(node.mac, node.ip);
	known_hosts += (node.mac + ',')
	fs.appendFileSync('known_hosts.txt', node.mac + ',');
}
 
arpMonitor.on("in", function(node) {
	if(known_hosts.indexOf(node.mac) == -1) {
		alert(node);
	}
}

