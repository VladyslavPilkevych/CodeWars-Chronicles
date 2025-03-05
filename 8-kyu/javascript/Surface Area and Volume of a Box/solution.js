function getSize(width, height, depth) {
    const surfaceArea = 2 * (width * height + height * depth + width * depth);

    const volume = width * height * depth;

    return [ surfaceArea, volume ];
}
