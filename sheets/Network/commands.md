---
title: Network Commands
category: Network
layout: main/sheet
updated: 2020-22-11
---

Network
---------------
{: .-two-column}

### Commands

| Command               | Description             |
| --------------------- | ----------------------- |
| `host domain` | Get information about a domain or an IP |
| `whois domain` | Get DNS informations about a domain |
| `ifconfig` | Display network information |
| `netstat` | Analyse the network, -i interfaces, -u UDP, -t TCP, -a all connections, -n port, -l LISTEN, -s statistics |
| `iptables` | Firewall, -L current rules, -R Reinit all rules | 
| `iptables -A INPUT -p tcp –dport www -j ACCEPT` | Example of iptables |

### Connection

| `nc -l -p 6000` | Connect to the port 6000 |
| `telnet localhost 6000` | Connect to localhost:6000 |
| `ssh user@ip -p port` | Connect using ssh |
| `ssh -i key.txt user@ip -p port ` | Connect using a key |

### Files' transfer

| `wget link` | Download, CTRL+C to pause, --background to bg |
| `wget -c link` | Unpause a download |
| `ftp link` | Connect to a ftp server, get to download, put to push a file |
| `!cd`, `!pwd` | In a FTP server, change the directory in the computer instead of in the FTP server |
| `sftp login@ip` | Secured ftp | 