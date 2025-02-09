local solution = require 'solution'

local function string_to_chars(str)
  local chars = {}

  for c in str:gmatch('.') do
    table.insert(chars, c)
  end

  return chars
end

local function copy_array(ary)
  local result = {}

  for k, v in pairs(ary) do
    result[k] = v
  end

  return result
end

local function shuffle_array(ary)
  local result = copy_array(ary)

  for i = 1, #ary do
    j = math.random(i)
    result[i], result[j] = result[j], result[i]
  end

  return result
end

local function zip_arrays(ary1, ary2)
  local result   = {}
  local min_size = math.min(#ary1, #ary2)

  for i = 1, min_size do
    local pair = { ary1[i], ary2[i] }
    table.insert(result, pair)
  end

  return result
end

local function range(start, stop)
  local result = {}

  for x = start, stop do
    table.insert(result, x)
  end

  return result
end

local function description_for(str, idxs, expected)
  return string.format('Expecting "%s" for str="%s", idxs={ %s }',
                       expected, str, table.concat(idxs, ', '))
end

local function after_action_description_for(str, idxs, actual, expected)
  return string.format('Expected "%s", got "%s", for:\n  str="%s",\n  idxs={ %s }\n',
                       expected, actual, str, table.concat(idxs, ', '))
end

describe('Solution', function()
  it('passes the sample tests', function()
    assert.are.same('acdb',   solution.scramble('abcd',   { 1, 4, 2, 3 }))
    assert.are.same('c0s3s1', solution.scramble('sc301s', { 5, 1, 4, 2, 6, 3 }))
    assert.are.same('5sblk',  solution.scramble('bskl5',  { 3, 2, 5, 4, 1 }))
    assert.are.same('hello',  solution.scramble('ehlol',  { 2, 1, 4, 5, 3 }))
    assert.are.same('world',  solution.scramble('dwolr',  { 5, 1, 2, 4, 3 }))
  end)

  local words = {
    'purple', 'part', 'may', 'made', 'come', 'get', 'did',
    'day', 'down', 'long', 'find', 'number', 'people',
    'what', 'word', 'time', 'witch', 'would', 'water'
  }

  math.randomseed(os.time())

  for _, word in pairs(words) do
    local chars = string_to_chars(word)
    local idxs = range(1, #word)

    local chars_with_idx = zip_arrays(chars, idxs)
    local shuffled_chars_with_idxs = shuffle_array(chars_with_idx)

    local shuffled_idxs = {}
    local shuffled_word = ''

    for _, ic_pair in pairs(shuffled_chars_with_idxs) do
      c, i = table.unpack(ic_pair)

      table.insert(shuffled_idxs, i)
      shuffled_word = shuffled_word .. c
    end

    local expected_str = word
    local actual_str = solution.scramble(shuffled_word, shuffled_idxs)

    it(description_for(shuffled_word, shuffled_idxs, expected_str), function()
      assert.are.same(expected_str, actual_str,
                      after_action_description_for(shuffled_word, shuffled_idxs,
                                                   actual_str, expected_str))
    end)
  end
end)
