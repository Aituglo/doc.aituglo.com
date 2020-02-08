---
title: Reverse
category: Hacking
layout: main/sheet
---

## Basics
{: .-three-column}


### Commands

| `file <file>` | Get information about a file |
| `file *` | Get information of all files |
| `hexdump -C file` | Display information in hexadecimal |
| `strings file` | Display all strings on the file |
| `objdump -d file` | All disassembly of the file |
| `objdump -x file | less` | Get information about the file |
| `strace ./file` | Trace what command is executed by the program |
| `ltrace ./file` | Same as strace |

### Tricks

To conserv the shell you can use the **cat -**, for instance : (perl -e ‘print “B”x20 . “\xef\xbe\xad\xde”’; cat -)