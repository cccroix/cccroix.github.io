#!/usr/bin/env bash
cat eglises.txt | while read i
do
if [ ! -f "${i}.md" ]; then
echo "---
layout: eglise
eglise: $i
---" > ${i}.md
fi
done

