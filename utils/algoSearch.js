function badCharHeuristic(pat) {
    const badchar = new Array(256)
    for (let i = 0; i < 256; i++) {
        
        badchar[i] = -1;
    }

    
    for (let i = 0; i < pat.length; i++) {
        badchar[pat.charCodeAt(i)] = i;
    }
    return badchar
}

function boyerMoore(txt,pat){
    pat = pat.toLowerCase()
    txt = txt.toLowerCase()
    const m = pat.length;
    const n = txt.length;

    const last = badCharHeuristic(pat)

    let j = m-1;
    let i = j;
    while(i <=n-1){
        console.log(pat[j],txt[i])
        if(pat[j] == txt[i]){
            if(j == 0){
                return true
            }else{
                i--;
                j--;
            }
        }else{
            let lo = last[txt.charCodeAt(i)];
            i = i+m - Math.min(j, 1+lo);
            j = m-1;
        }
    }
    return false
}



export default boyerMoore