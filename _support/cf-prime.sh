#!/usr/bin/env bash

(
  echo https://doc.aituglo.com/
  (
    git ls-files \
      | grep -E '\.md$' \
      | grep -v -E 'CONTRIBUTING|README|Readme' \
      | grep -v -E '^_' \
      | sort \
      | uniq \
      | sed 's/\.md$//g'
  ) \
    | sed 's#^#https://doc.aituglo.com/#g'
) \
  | xargs curl >/dev/null
