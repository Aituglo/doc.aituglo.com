---
title: Yaml
category: Dev
layout: main/sheet
prism_languages: [yaml]
---

### Multiline strings

```yaml
Multiline: |
  hello
  world
```

### Inheritance

```yaml
parent: &defaults
  a: 2
  b: 3

child:
  <<: *defaults
  b: 4
```
