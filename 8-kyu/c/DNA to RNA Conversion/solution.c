#include <stdlib.h>
#include <string.h>

char *dna_to_rna(const char *dna)
{
    size_t length = strlen(dna);

    char *rna = (char *)malloc((length + 1) * sizeof(char));
    if (rna == NULL) {
        return NULL;
    }

    for (size_t i = 0; i < length; i++) {
        if (dna[i] == 'T') {
            rna[i] = 'U';
        } else {
            rna[i] = dna[i];
        }
    }

    rna[length] = '\0';

    return rna;
}