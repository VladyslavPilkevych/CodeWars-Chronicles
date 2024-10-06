package solution

object PhoneDir {

    fun phone(strng: String, num: String): String {
        val integerChars = '0'..'9'
        val contactsArray = strng.split("\n").toTypedArray()
        val phoneNumbersArray = mutableListOf<String>()
        val namesArray = mutableListOf<String>()
        val addrressArray = mutableListOf<String>()
    
        for (contact in contactsArray) {
            // phone number
            val splittedByPlus: List<String> = contact.split("+")
            var phoneNumber: String = ""
            if (splittedByPlus.size > 1) {
                phoneNumber = splittedByPlus[1].split(" ")[0]
                if (!phoneNumber.last().toString().all { it in integerChars }) {
                    phoneNumber = phoneNumber.dropLast(1)
                }
            }
            phoneNumbersArray.add(phoneNumber)

            // name
            val nameParts: List<String> = contact.split("<", ">")
            var name: String = ""
            if (nameParts.size > 2) {
                name = nameParts[1]
            }
            namesArray.add(name)

            // address
            val removedOperators = contact.filterNot { c -> "+".contains(c)}
            val address = removedOperators.replace(Regex("""($name|$num|[^a-zA-Z0-9.-])"""), " ").split(' ').filterNot { it.isBlank() }.joinToString(" ")
            addrressArray.add(address)
        }
        val foundElements = phoneNumbersArray.filterIndexed { _, element -> element == num }

        val numberIndex: Int
        if (foundElements.size == 1) {
            numberIndex = phoneNumbersArray.indexOf(num)
        } else if (foundElements.size > 1) {
            return "Error => Too many people: $num"
        } else {
            return "Error => Not found: $num"
        }
        return "Phone => $num, Name => ${namesArray[numberIndex]}, Address => ${addrressArray[numberIndex]}" 
    }
}
