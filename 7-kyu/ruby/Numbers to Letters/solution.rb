def switcher(arr)
  alphabet = ('a'..'z').to_a.reverse
  result = ""

  arr.each do |num_str|
    num = num_str.to_i

    if num >= 1 && num <= 26
      result += alphabet[num - 1]
    elsif num == 27
      result += "!"
    elsif num == 28
      result += "?"
    elsif num == 29
      result += " "
    end
  end

  return result
end