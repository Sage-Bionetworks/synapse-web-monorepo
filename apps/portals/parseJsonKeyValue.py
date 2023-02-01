#!/usr/bin/python3
import sys, json;
f = open('src/config/docTitleConfig.json')
print(json.load(f)[sys.argv[1]])