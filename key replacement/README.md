## Error Message Updater

### Overview

The Error Key Replacement program is a Python script that processes error messages and updates them based on values extracted from a source file. The script allows users to specify file paths at runtime, making it easy to use with different sets of files without modifying the script itself. The script currently parses source values in a particular format (as in the example source.txt and error.txt files) but can be edited to fit formats as needed.

### Features

- **Interactive File Path Input:** Prompts users to enter paths for the source file, error file, and output file.
- **Load and Parse Files:** Reads and parses the source file to extract key-value pairs for replacements.
- **Replace Error Messages:** Updates error messages by replacing placeholders with values from the source file.
- **Save Updated Messages:** Writes the modified error messages to a new file.

### Requirements

- Python 3.x

### Usage

1. **Clone the Repository:**

2. **Run the Script:**

3. **Provide File Paths:**
   - Enter the path to the source file when prompted.
   - Enter the path to the error file when prompted.
   - Enter the path where you want the updated error file to be saved.

4. **Check the Output:**
   - The updated error messages will be saved to the specified output file path.
