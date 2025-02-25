package gps

fun gps(s:Int, x:DoubleArray):Int {
    if (x.size <= 1) return 0

    var maxSpeed = 0.0
    for (i in 1 until x.size) {
        val deltaDistance = x[i] - x[i - 1]
        val speed = (3600 * deltaDistance) / s
        if (speed > maxSpeed) {
            maxSpeed = speed
        }
    }

    return kotlin.math.floor(maxSpeed).toInt()
}