fun findShort(s: String): Int {
    val stringArray = s.split(" ").toTypedArray()
    var shortestWordLength: Int = stringArray[0].length
    for (word in stringArray) {
        if (word.length < shortestWordLength)
           shortestWordLength = word.length
    }
    return shortestWordLength
}
