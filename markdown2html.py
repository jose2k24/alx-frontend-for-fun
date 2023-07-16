#!/usr/bin/python3
"""
This script converts a markdown to html and prints it out.
"""

import sys
import mistune

# check if correct number of arguments provided
if len(sys.argv) < 3:
    print("Usage: ./markdown2html.py <input_file> <output_file>", file=sys.stderr)
    sys.exit(1)

# get input and output file names from command line arguments
input_file = sys.argv[1]
output_file = sys.argv[2]

try:
    # read input file
    with open(input_file, "r") as f:
        input_text = f.read()
except FileNotFoundError:
    # input file not found, print error and exit with status 1
    print("Missing", input_file, file=sys.stderr)
    sys.exit(1)

# convert markdown to html
html_text = mistune.markdown(input_text)

# write html to output file
with open(output_file, "w") as f:
    f.write(html_text)

# exit with status 0
sys.exit(0)
