public class Kata {
    public static String integrate(int coefficient, int exponent) {
        int newExponent = exponent + 1;
        int newCoefficient = coefficient / newExponent;
        return String.valueOf(newCoefficient) + "x^" + String.valueOf(newExponent);
    }
}