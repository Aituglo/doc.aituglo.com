---
title: Users and Rights
category: Linux
layout: main/sheet
---

## Rights

### Bit flag

| read | 4 |
| write | 2 |
| execute | 1 |

### Commands

| `chmod +x file` | Add execution to file |
| `chmod 731 file` | Give 7 to owner, 3 to group and 1 to others |
| `chmod ugo-wx file` | Remove to user, group and others the right to write and execute |
| `chmod u+w file` | Add to user the write right |
| `chmod u+s file` | Add to user the setuid |
| `chown root:root file` | Change the user and the group |
| `chgrp group file` | Change the group |
| `id` | Get the id of the current user |
| `sudo su another_user` | Connect to another user |

Setuid allows a user to launch a program which is not the owner (eg: passwd command)

## Users

### Commands

| `adduser` | Add a user |
| `deluser` | Delete a user |
| `passwd user` | Change a password | 
| `addgroup` | Add a group |
| `delgroup` | Delete a group |
| `usermod` | Update a user, -l to rename, -g to change the group | 