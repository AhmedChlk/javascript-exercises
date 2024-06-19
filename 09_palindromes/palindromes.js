const palindromes = function (sentence) {
    const tableauPonctuation = [
        '.', ',', ':', ';', '!', '?',       // Points de ponctuation courants
        '‘', '’', '“', '”', '«', '»',       // Guillemets
        '(', ')', '[', ']', '{', '}',       // Parenthèses et crochets
        ' '                                 // Espaces
    ];

    // Convertir la phrase en minuscules
    let sentencelower = sentence.toLowerCase();
    let start = 0;
    let end = sentencelower.length - 1;

    while (start < end) {
        if (tableauPonctuation.includes(sentencelower[start])) {
            start++;
            continue;
        }
        
        if (tableauPonctuation.includes(sentencelower[end])) {
            end--;
            continue;
        }
        
        if (sentencelower[start] !== sentencelower[end]) {
            return false;
        }
        
        start++;
        end--;
    }
    
    return true;
};

// Ne pas modifier la ligne ci-dessous
module.exports = palindromes;
