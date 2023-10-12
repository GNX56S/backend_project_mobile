function badCharHeuristic(str, size, badchar) {
    for (let i = 0; i < 256; i++) {
        badchar[i] = -1;
    }
    
    for (let i = 0; i < size; i++) {
        badchar[str.charCodeAt(i)] = i;
    }
}

function boyerMoore(txt, pat) {
    const m = pat.length;
    const n = txt.length;
    const badchar = new Array(256);
    
    badCharHeuristic(pat, m, badchar);
    let s = 0;
    
    while (s <= (n - m)) {
        let j = m - 1;
        
        while (j >= 0 && pat[j] == txt[s + j]) {
            j--;
        }
        
        if (j < 0) {
            s += (s + m < n) ? m - badchar[txt.charCodeAt(s + m)] : 1;
            return true
        } else {
            s += Math.max(1, j - badchar[txt.charCodeAt(s + j)]);
        }
    }
    return false
}



export default boyerMoore


console.log(boyerMoore("Seasonal Greens Salad".toLowerCase(),"cink"))