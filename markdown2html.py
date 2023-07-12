#!/usr/bin/python3
'''
A script that codes markdown to HTML
'''
import sys
import os
import markdown

# Check the number of arguments
if len(sys.argv) < 3:
    print("Usage: ./markdown2html.py <input_file> <output_file>", file=sys.stderr)
    sys.exit(1)

# Get the input and output file names from the command line arguments
input_file = sys.argv[1]
output_file = sys.argv[2]

# Check if the input file exists
if not os.path.isfile(input_file):
    print(f"Missing {input_file}", file=sys.stderr)
    sys.exit(1)

# Read the contents of the Markdown file
with open(input_file, 'r') as f:
    markdown_content = f.read()

# Convert Markdown to HTML
html_content = markdown.markdown(markdown_content)

# Write the HTML content to the output file
with open(output_file, 'w') as f:
    f.write(html_content)

# Exit with a success status code
sys.exit(0)