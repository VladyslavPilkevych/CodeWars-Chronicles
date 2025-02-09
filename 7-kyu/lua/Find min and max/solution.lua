local function get_min_max(seq)
    if #seq == 0 then
        return nil, nil
    end

    local min = seq[1]
    local max = seq[1]

    for i = 2, #seq do
        if seq[i] < min then
            min = seq[i]
        end
        if seq[i] > max then
            max = seq[i]
        end
    end

    return min, max
end

return get_min_max
