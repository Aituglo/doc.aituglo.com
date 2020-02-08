---
title: C
category: Dev
layout: main/sheet
---

## Basics
{: .-three-column}

```c
    #include <stdio.h>

    int main(int argc, char *argv[]){

      return 0;

    }
```

### Arguments

| `argc` | The argument number |
| `argv` | A tab with all arguments |

### Compilation 

| `gcc file.c -o file` | Compile, -g get the source code in gdb | 

### Format Strings

| `%d` | Decimal |
| `%u` | Usigned decimal |
| `%x` | Hexadecimal |
| `%s` | String |
| `%n` | Number of bytes written so far |
| `%08x` | Get the address of a memory variable |

### File access

| `O_RDONLY` | Open file for read-only access |
| `O_WRONLY` | Open file for write-only access |
| `O_RDWR` | Open file for both read and write access |
| `O_APPEND` | Write data at the end of the file |
| `O_TRUNC` | If file already exist, truncate the file to 0 length |
| `O_CREATE` | Create the file if it doesn't exist |

### File Permission


| `S_IRUSR` | Give the file read permission for the user (owner). |
| `S_IWUSR` | Give the file write permission for the user (owner). |
| `S_IXUSR` | Give the file execute permission for the user (owner). |
| `S_IRGRP` | Give the file read permission for the group. |
| `S_IWGRP` | Give the file write permission for the group. |
| `S_IXGRP` | Give the file execute permission for the group. |
| `S_IROTH` | Give the file read permission for other (anyone). |
| `S_IWOTH` | Give the file write permission for other (anyone). |
| `S_IXOTH` | Give the file execute permission for other (anyone). |
