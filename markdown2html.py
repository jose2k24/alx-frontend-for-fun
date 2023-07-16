#!/usr/bin/python3

"""
markdown2html.py - A script to convert a markdown file to HTML.

Usage: markdown2html.py <input_file> <output_file>
"""

import sys
import mistune


def print_usage_and_exit():
    """Print usage message to STDERR and exit with status 1."""

    print("Usage: markdown2html.py <input_file> <output_file>", file=sys.stderr)
    sys.exit(1)


def print_missing_file_and_exit(filename):
    """Print missing file error message to STDERR and exit with status 1."""

    print(f"Missing {filename}", file=sys.stderr)
    sys.exit(1)


def main():
    """Entry point of the script"""

    # check if correct number of arguments provided
    if len(sys.argv) != 3:
        print_usage_and_exit()

    # get input and output file names from command line arguments
    input_file = sys.argv[1]
    output_file = sys.argv[2]

    try:
        # read input file
        with open(input_file, "r") as f:
            input_text = f.read()
    except FileNotFoundError:
        # input file not found, print error and exit with status 1
        print_missing_file_and_exit(input_file)

    # convert markdown to html
    html_text = mistune.markdown(input_text)

    # write html to output file
    with open(output_file, "w") as f:
        f.write(html_text)

    # exit with status 0
    sys.exit(0)


if __name__ == "__main__":
    main()
