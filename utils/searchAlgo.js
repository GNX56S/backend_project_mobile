function buildPrefixTable(pat) {
    const table = [0];
    let i = 1;
    let j = 0; 
    while (i < pat.length) {
      if (pat[i] === pat[j]) {
        j += 1;
        table[i] = j;
        i += 1;
      } else if (j > 0) {
        j = table[j - 1];
      } else {
        table[i] = 0;
        i += 1;
      }
    }
    return table;
}

function kmpSearch(txt,pat){
    txt = txt.toLowerCase()
    pat = pat.toLowerCase()

    const table = buildPrefixTable(pat)
    let i = 0, j = 0

    while (i < txt.length) {
        if (txt[i] === pat[j]) {
          if (j === pat.length - 1){
            return true
          }
          i++;
          j++;
        } else if (j > 0) {
          j = table[j - 1];
        } else {
          i++;
        }
      }

      return false
}

export default kmpSearch