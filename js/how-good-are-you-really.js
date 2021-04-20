function betterThanAverage(classPoints, yourPoints) {
    return classPoints.reduce((a, c) => a + c) / classPoints.length > yourPoints ? false : true
}

