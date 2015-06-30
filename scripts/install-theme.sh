#!/usr/bin/env sh

name=$1
remote=$2

cd $THEMEDIR
rm -rf $name
git clone $remote $name

echo "installing the npm dependencies for $name"
cd $name && npm install --production

echo "$name installed at $THEMEDIR/$name"
