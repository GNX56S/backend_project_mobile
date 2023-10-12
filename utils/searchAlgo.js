function kmpSearch(txt,pat) {
    txt = txt.toLowerCase()
    pat = pat.toLowerCase()
    let M = pat.length;
    let N = txt.length;
    let lps = new Array(M);
    let i = 0;
    let j = 0;
    while (N - i >= M - j) {
        if (pat[j] == txt[i]) {
            j++;
            i++;
        }
        if (j == M) {
            console.log("Found pattern at index " + (i - j));
            j = lps[j - 1];
            return true
        } else if (i < N && pat[j] != txt[i]) {
            if (j != 0) {
                j = lps[j - 1];
            } else {
                i = i + 1;
            }
        }
    }
    return false
}

export default kmpSearch