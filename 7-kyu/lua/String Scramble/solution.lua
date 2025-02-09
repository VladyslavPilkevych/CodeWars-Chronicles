local kata = {}

function kata.scramble(str, idxs)
    local result = {}

    for i = 1, #idxs do
        result[idxs[i]] = str:sub(i, i)
    end

    return table.concat(result)
end

return kata

