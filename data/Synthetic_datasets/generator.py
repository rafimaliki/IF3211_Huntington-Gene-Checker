import os
import random

DNA_BASES = ['A', 'C', 'G', 'T']
CATEGORY_DISTRIBUTION = {
    "Normal": (1, 26),
    "Carrier": (27, 35),
    "Incomplete Penetrance": (36, 39),
    "Full Penetrance": (40, 60)  
}
CATEGORY_WEIGHTS = {
    "Normal": 0.4,
    "Carrier": 0.3,
    "Incomplete Penetrance": 0.15,
    "Full Penetrance": 0.15
}

os.makedirs("data", exist_ok=True)

def get_repeat_count():
    categories = list(CATEGORY_DISTRIBUTION.keys())
    weights = [CATEGORY_WEIGHTS[cat] for cat in categories]
    chosen_category = random.choices(categories, weights=weights, k=1)[0]
    min_repeat, max_repeat = CATEGORY_DISTRIBUTION[chosen_category]
    repeat_count = random.randint(min_repeat, max_repeat)
    return repeat_count

def generate_dna_with_cag_repeat(repeat_count, total_length=2000):
    repeat_block = "CAG" * repeat_count
    repeat_block_len = len(repeat_block)
    remaining_length = total_length - repeat_block_len
    if remaining_length < 0:
        raise ValueError("Repeat block too large for desired sequence length")

    random_part = ''.join(random.choices(DNA_BASES, k=remaining_length))
    insert_pos = random.randint(0, remaining_length)
    final_sequence = random_part[:insert_pos] + repeat_block + random_part[insert_pos:]
    return final_sequence

def generate_fake_dna_files(n_files: int):
    for i in range(1, n_files + 1):
        repeat_count = get_repeat_count()
        dna_sequence = generate_dna_with_cag_repeat(repeat_count)
        filename = f"data/{i}.txt"
        with open(filename, "w") as f:
            f.write(dna_sequence)
    print(f"{n_files} DNA files generated in 'data/' folder.")

generate_fake_dna_files(10) 
