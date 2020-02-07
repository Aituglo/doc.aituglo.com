---
title: Enumeration
category: Hacking
layout: main/sheet
updated: 2020-02-06
---

## Website directory

### Dirbuster

```bash
dirbuster #You can user /usr/share/dirbuster/wordlists 
```

### Gobuster

```bash
gobuster dir -u <address> -w /usr/share/dirbuster/wordlists/directory-list-2.3-medium.txt # Make a simple search of basics directory of dirbuster list
```

```bash
gobuster dir -u <address> -w /usr/share/dirbuster/wordlists/directory-list-2.3-medium.txt -x .php .html # Only consider php and html file
```

