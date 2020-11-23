---
title: Command line stuff
category: Linux
layout: main/sheet
---

## List

ls [options] [paths]

### Format

| Switch | Description |
|---|---|
| `-1` | One entry per line |
| `-l` | Long view |
| `-o` | Long view (without groups) |
| `-C` | Multicolumn (sorted horizontally) |
| `-x` | Multicolumn (sorted vertically) |
|---
| `-F` | Add / after directories |
| `-G` | Color |
{:.shortcuts}

### Options

| `-R` | Recurse |
| `-a` | Include hidden (dotfiles) |
| `-A` | Include hidden (but not . and ..) |
{:.shortcuts}

### Sorting

| Switch | Description |
|---|---|
| `-r` | reverse order |
| `-S` | sort by size |
| `-t` | sort by time modified |
| `-u` | sort by time accessed |
| `-U` | sort by time created |
| `-c` | sort by time status was changed |
|---
| `-h` | Human-readable size (3k) |
{:.shortcuts}

<br>

## Tail

    tail [-F | -f | -r] [-bN | -cN | -nN] [file ...]

### Modes

| `-f` | follow |
| `-F` | follow by filename (accounts for log rotation) |
| `-r` | Reverse order |
{:.shortcuts}

### Options

| `-bN` | N*512 bytes |
| `-cN` | N bytes |
| `-nN` | N lines |
| `+N`  | Start from line N |
{:.shortcuts}

<br>

## Basics


| `pwd` | Display current directory |
| `uname [-a]` | Display system information |
| `free [-h]` | Display free space |
| `df [-h]` | Display memory information |
| `ps [aux]` | Show processus |
| `id` | Display current user |
| `env` | Get all env variable |
| `echo $PATH` | Display the path variable |
| `export PATH=test` | Set a variable |

<br>

## Compress and Uncompress

### Basics

| Compress | Uncompress           |
| -------  | -------------------- |
| `bzip2`  | `bzcat` or `bunzip2` |
| `gzip`   | `zcat` or `gunzip`   |
| `zip`    | `unzip`              |

### Tar

| `tar` | -c for create, -v for details, -f to assemble into one file |
| `tar -tf` | Display files on a tar file |
| `tar -rvf` | Add a file in an existing tar |
| `tar -xvf` | Extract (-x) |
| `tar -zcvf file.tar.gz files/` | Gzip files |
| `tar -zxvf ` | unGzip files |
| `tar -jcvf file.tar.gz files/` | bzip2 files |
| `tar -jxvf ` | unbzip2 files |

<br>

## Redirection

| `>` | Redirect in a new file (eg: echo "Hello" > file) |
| `>>` | Redirect at the end of a file | 
| `> /dev/null` | Redirect into void |
| `2>` | Redirect the error flow |
| `2>>` | Redirect at the end of a file the error flow |
| `2>&1` | Put error in the same file as normal flux ( eg: cat unknow.txt > file.log 2>&1) |
| `<` | Read from file (eg: cat < notes.csv ) | 
| `<<` | Read from the keyboard  ( eg: sort -n « FIN You can add a lot of line until tape FIN) |
| `|` | Make a command after another | 


## Watch System Activity

| `w` | Watch all users connected |
| `uptime` |
| `who` | Watch users connected ( tty is for terminal and pts form graphical terminal ) |
| `ps` | Process, -ef for all, -efH for tree, -u to select a user |
| `top` | Dynamic list of process |
| `kill pid` | Kill a process |
| `killall process` | Kill all process of a command | 
| `halt` | Shutdown |

## Background Commands

| `&` | Launch in background | 
| `nohup command` | Launch in background in another terminal |
| `Ctrl+Z` | Pause a command |
| `bg` | Push the command you paused in background |
| `jobs` | Display all background process | 
| `fg` | Get the process in foreground, fg %2 to select the 2nd |
| `crontab` | Manage cron, -l to list, -e to modify the crontab, -r to remove |


## Sudo

```
sudo [options] <command>
```

### Listing

| `-l` | List allowed commands |
{:.shortcuts}

### Options

| `-A` | Use $SUDO_ASKPASS |
| `-b` | Run in background |
| `-E` | Preserve environment |
| `-H` | use target's $HOME |
| `-n` | Don't prompt for password |
| `-P` | Preserve group vector |
| `-S` | Read password from stdin |
{:.shortcuts}

### File descriptors

| `-C fd` | Close all open file descriptors |
{:.shortcuts}

### Prompt

| `-p prompt` | Custom prompt (-p "%p password:") |
{:.shortcuts}

### Interactive

| Switch | Description |
|---|---|
| `-i [cmd]` | Interactive shell without variables |
| `-s [cmd]` | Interactive shell |
|----
| `-u user` | run as this user |
| `-g group` | run as this group |
{:.shortcuts}

### Timestamp

| `-v` | revalidate timestamp for 5 mins |
| `-k` | invalidate timestamp |
| `-K` | just like -k |
{:.shortcuts}

<br>

## wc (Word count)

```
... | wc [options]
```

| `-c` | Bytes |
| `-l` | Lines |
| `-m` | Characters (incl multi-byte) |
| `-w` | Words |
{:.shortcuts}

<br>

## Extract, sort and filter data

| `grep` | Find text in file, -i to not consider uppercase, -n number of line, -v to ignore a text, -r for recursive, -E to use Regex |
| `grep -A20 text` | Display the next 20 lines after the text, -B for before |
| `sort` | Sort all lines of a file with alphabet, -o output, -r reverse, -R random sort, -n numbers, -u for unique |
| `wc` | Count lines or words, -l lines, -w words, -c bytes, -m character |
| `uniq file newFile` | Detect and get unique lines or duplicate, -c counter, -d duplicate lines |
| `tr` | Translate |
| `awk '{print $1 " - " $2}'` | Separate 1 and 2 column aith a -. -f for column delimiter |
| `xargs command` | Apply command to each arg, you can do it for each line with -d '\n' |

<br>

## Search-and-replace in all files

    perl -p -i -e 's/hello/HELLO/g' **/*

<br>

## Grep

```
grep [options] [pattern] [file ...]
```

### Options

| Switch | Description |
|---|---|
| `-A num` | Print `num` lines of training context |
|----
| `-G` | --basic-regexp (default) |
| `-E` | --extended-regexp |
| `-P` | --perl-regexp |
|----
| `-f file` | --file (Get patterns for file) |
| `-F` | --fixed-strings |
|----
| `-h` | --no-filename |
| `-H` | --with-filename |
|----
| `-l` | --files-with-matches (just print filenames) |
| `-L` | --files-without-match |
|----
| `-r, -R` | --recursive |
| `-v` | --invert-match |
| `-i` | --ignore-case |
{:.shortcuts}

### Synonyms

    egrep  =>  grep -E
    fgrep  =>  grep -F
