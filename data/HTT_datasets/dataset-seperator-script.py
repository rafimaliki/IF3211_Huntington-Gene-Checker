import os

def process_file(input_file, output_file1, output_file2):
    os.makedirs(os.path.dirname(output_file1), exist_ok=True)
    
    with open(input_file, 'r', encoding='utf-8') as f:
        lines = f.readlines()
    
    text1 = ''.join(lines[1:2420])
    
    text2 = ''.join(lines[2421:])
    
    with open(output_file1, 'w', encoding='utf-8') as f:
        f.write(text1)
    
    with open(output_file2, 'w', encoding='utf-8') as f:
        f.write(text2)
    
    print(f"Successfully created {output_file1} and {output_file2}")

if __name__ == "__main__":
    input_file = "ncbi_dataset/data/gene.fna"  
    output_file1 = "data/ncbi-1.txt"
    output_file2 = "data/ncbi-2.txt"
    
    process_file(input_file, output_file1, output_file2)