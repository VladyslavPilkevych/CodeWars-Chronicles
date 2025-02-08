function reOrdering(text) {
    const regex = /[A-Z]/;
    return text.split(' ').reduce((acc, word) => {
        if (regex.test(word[0])) {
            acc.unshift(word);
        } else {
            acc.push(word);
        }
        return acc;
    }, []).join(" ");
}
