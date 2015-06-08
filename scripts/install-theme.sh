#!/usr/bin/env sh

name=$1
remote=$2

cd $THEMEDIR
git clone $remote $name

echo "$name installed at $THEMEDIR/$name"
