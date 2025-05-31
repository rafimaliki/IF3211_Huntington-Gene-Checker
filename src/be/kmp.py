def compute_lps_array(pattern: str) -> list[int]:
    m = len(pattern)
    lps = [0] * m
    length = 0
    i = 1

    while i < m:
        if pattern[i] == pattern[length]:
            length += 1
            lps[i] = length
            i += 1
        else:
            if length != 0:
                length = lps[length - 1]
            else:
                lps[i] = 0
                i += 1
                
    return lps

def kmp_search(text: str, pattern: str) -> list[int]:
    n = len(text)
    m = len(pattern)
    if m == 0:
        return []
    if n == 0:
        return []

    lps = compute_lps_array(pattern)
    occurrences = []

    i = 0
    j = 0

    while i < n:
        if pattern[j] == text[i]:
            i += 1
            j += 1

        if j == m:
            occurrences.append(i - j)
            j = lps[j - 1]
        elif i < n and pattern[j] != text[i]:
            if j != 0:
                j = lps[j - 1]
            else:
                i += 1

    return occurrences

def count_max_contiguous_cag_repeats(dna_sequence: str) -> int:
    dna_sequence = dna_sequence.upper()
    pattern = "CAG"
    
    if not dna_sequence or not pattern:
        return 0

    cag_occurrences = kmp_search(dna_sequence, pattern)

    if not cag_occurrences:
        return 0

    max_repeats = 0
    current_repeats = 0
    
    if len(cag_occurrences) == 0:
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
            
    if not cag_occurrences:
        return 0

    return max_repeats if max_repeats > 0 else 0


def determine_huntington_risk(cag_repeats: int) -> str:
    if cag_repeats >= 40:
        return f"[PENETRASI PENUH] Jumlah pengulangan CAG: {cag_repeats}. Orang tersebut hampir selalu mengembangkan gejala penyakit Huntington."
    elif 36 <= cag_repeats <= 39:
        return f"[PENETRASI TIDAK LENGKAP] Jumlah pengulangan CAG: {cag_repeats}. Orang tersebut mungkin mengembangkan penyakit Huntington (tidak pasti)."
    elif 27 <= cag_repeats <= 35:
        return f"[KARIER] Jumlah pengulangan CAG: {cag_repeats}. Orang tersebut tidak berisiko mengembangkan penyakit Huntington, tetapi berisiko menurunkannya."
    else:
        return f"[NORMAL] Jumlah pengulangan CAG: {cag_repeats}. Orang tersebut tidak berisiko mengembangkan penyakit Huntington dan menurunkannya."
    
# if __name__ == "__main__":
#     # Example usage
#     dna_sequence = """CAGCAGCAGCAGCAGCAGCAGCAGCAGGCACAG"""
#     max_repeats = count_max_contiguous_cag_repeats(dna_sequence)
#     risk = determine_huntington_risk(max_repeats)
#     print(f"Max CAG repeats: {max_repeats}, Risk: {risk}")