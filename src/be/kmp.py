def kmp_search(text: str, pattern: str) -> list[int]:
    n = len(text)
    m = len(pattern)
    if m == 0:
        return []
    if n == 0:
        return []

    occurrences = []

    i = 0
    j = 0

    while i < n:
        if pattern[j] == text[i]:
            i += 1
            j += 1

        if j == m:
            occurrences.append(i - j)
            j = 0
        elif i < n and pattern[j] != text[i]:
            if j != 0:
                j = 0
            else:
                i += 1

    return occurrences

def count_max_contiguous_cag_repeats(dna_sequence: str) -> int:
    dna_sequence = dna_sequence.upper()
    pattern = "CAG"
    
    if not dna_sequence or not pattern:
        return 0

    cag_occurrences = kmp_search(dna_sequence, pattern)

    if not cag_occurrences or len(cag_occurrences) == 0:
        return 0
    
    max_repeats = 1 
    current_repeats = 1
    
    for i in range(1, len(cag_occurrences)):
        if cag_occurrences[i] == cag_occurrences[i-1] + len(pattern):
            current_repeats += 1
        else:
            current_repeats = 1 
            
        if current_repeats > max_repeats:
            max_repeats = current_repeats

    return max_repeats


def determine_huntington_risk(cag_repeats: int) -> str:
    if cag_repeats >= 40:
        return f"[PENETRASI PENUH] Jumlah pengulangan CAG: {cag_repeats}. Orang tersebut hampir selalu mengembangkan gejala penyakit Huntington."
    elif 36 <= cag_repeats <= 39:
        return f"[PENETRASI TIDAK LENGKAP] Jumlah pengulangan CAG: {cag_repeats}. Orang tersebut mungkin mengembangkan penyakit Huntington (tidak pasti)."
    elif 27 <= cag_repeats <= 35:
        return f"[KARIER] Jumlah pengulangan CAG: {cag_repeats}. Orang tersebut tidak berisiko mengembangkan penyakit Huntington, tetapi berisiko menurunkannya."
    else:
        return f"[NORMAL] Jumlah pengulangan CAG: {cag_repeats}. Orang tersebut tidak berisiko mengembangkan penyakit Huntington dan menurunkannya."
    
if __name__ == "__main__":
    # dna_sequence = "CAG" * 9 + "ALBERT" + "CAG" * 10
    dna_sequence = "CAG" * 40
    max_repeats = count_max_contiguous_cag_repeats(dna_sequence)
    risk = determine_huntington_risk(max_repeats)
    print(f"Max CAG repeats: {max_repeats}, Risk: {risk}")