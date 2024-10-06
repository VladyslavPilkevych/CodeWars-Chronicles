package solution
import java.math.BigDecimal

object Suite {

    fun going(n: Int): Double {
        if (n == 0) return 0.0;
        var sum = BigDecimal.ZERO;
        var factorial = BigDecimal.ONE;
    
        for (i in 1..n) {
            factorial *= BigDecimal.valueOf(i.toLong());
            sum += factorial;
        }
    
        return sum.divide(factorial, 100000, BigDecimal.ROUND_HALF_UP).toDouble();
    }
}
