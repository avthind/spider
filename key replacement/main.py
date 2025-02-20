def load_file(file_path):
    with open(file_path, 'r') as file:
        return file.readlines()

def parse_source_file(source_lines):
    source_dict = {}
    for line in source_lines:
        if '=' in line:
            name, rest = line.split('=')
            key = rest.strip().split('{{')[1].split('}}')[0].strip().replace(',', ';')
            source_dict[key] = name.strip()
    return source_dict

def replace_error(error_lines, source_dict):
    updated_lines = []
    for line in error_lines:
        found = False
        
        for key, value in source_dict.items():
            if f'({key})' in line:
                
                line = line.replace(line.split('xor')[0].strip(), value)
                line = line.replace(line.split('xor')[1].split(',')[0].strip(), value)
                updated_lines.append(line)
                found = True
                break
        if not found:
            
            updated_lines.append(line)
    return updated_lines

def save_file(file_path, lines):
    with open(file_path, 'w') as file:
        file.writelines(lines)

def main():
    # Get file paths from user input
    source_file_path = input("Enter the path to the source file: ").strip()
    error_file_path = input("Enter the path to the error file: ").strip()
    output_file_path = input("Enter the path for the updated error file: ").strip()

    source_lines = load_file(source_file_path)
    error_lines = load_file(error_file_path)
    source_dict = parse_source_file(source_lines)
    updated_error_lines = replace_error(error_lines, source_dict)

    save_file(output_file_path, updated_error_lines)

    print(f"\nUpdated file saved to {output_file_path}")

if __name__ == "__main__":
    main()
