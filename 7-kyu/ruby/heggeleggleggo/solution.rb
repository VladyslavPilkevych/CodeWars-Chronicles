def heggeleggleggo(word)
  consonants = "bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ"
  result = ""

  word.each_char do |char|
    if consonants.include?(char)
      result += char + "egg"
    else
      result += char
    end
  end

  result
end
