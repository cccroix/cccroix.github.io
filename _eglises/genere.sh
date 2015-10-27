#!/usr/bin/env bash
cat eglises.yaml | while IFS="---\n" read i
do
echo $i
echo "END"
done
