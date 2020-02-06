---
title: Nmap
category: Network
layout: main/sheet
updated: 2020-02-06
---

Getting started
---------------
{: .-three-column}

### Target Selection

| Command               | Description             |
| --------------------- | ----------------------- |
| `nmap 192.168.1.1`    | Scan a single IP        |
| `nmap website.com`    | Scan a host             |
| `nmap 192.168.1.1-20` | Scan a range of IP      |
| `nmap 192.168.1.0\24` | Scan a subnet           |
| `nmap -iL list.txt`   | Scan from file          |

### Port Selection

| Command                     | Description             |
| --------------------------- | ----------------------- |
| `nmap -p 22 192.168.1.1`    | Scan a single port      |
| `nmap -p 1-100 192.168.1.1` | Scan a range of ports   |
| `nmap -F 192.168.1.1`       | Scan 100 most common    |
| `nmap -p- 192.168.1.1`      | Scan all ports          |

### Port Scan types

| Command                           | Description                           |
| --------------------------------- | ------------------------------------- |
| `nmap -sT 192.168.1.1`            | Scan using TCP                        |
| `nmap -sS 192.168.1.1`            | Scan using TCP SYN (default)          |
| `nmap -sU -p 123,161 192.168.1.1` | Scan UDP ports                        |
| `nmap -Pn -F 192.168.1.1`         | Scan selected ports - ignore discovery|

### Service and OS Detection

| Command                                      | Description                            |
| -------------------------------------------- | -------------------------------------- |
| `nmap -A 192.168.1.1`                        | Detect OS and Service                  |
| `nmap -sV 192.168.1.1`                       | Standard service detection             |
| `nmap -Pn -F 192.168.1.1`                    | Scan selected ports - ignore discovery |

### Output Formats

| Command                        | Description          |
| -------------------------------| -------------------- |
| `nmap -oN out.txt 192.168.1.1` |  Default             |
| `nmap -oX out.xml 192.168.1.1` | as XML               |
| `nmap -oG out.txt 192.168.1.1` | in a format for grep |
| `nmap -oA out 192.168.1.1`     | all formats          |

### Most used command

| Command                                      | Description                            |
| -------------------------------------------- | -------------------------------------- |
| `nmap -sC -sV 192.168.1.1`                   | Scan using default safe scripts        |



## Also see
{: .-one-column}

* [Tutorial](https://hackertarget.com/nmap-tutorial/) _(hackertarget.com)_