var uniqueInOrder=function(iterable){
    let result = iterable;
    if (typeof iterable === "string") {
        result = result.split('');
    }
    return result.reduce((acc, item) => {
        if (item !== acc[acc.length - 1]) {acc.push(item);}
        return acc;
    }, []);
}
