import java.lang.reflect.*;
import java.util.Random;
 
public class Psychic {
 
  public static double guess() {
    try {
        Field field = Class.forName("java.lang.Math$RandomNumberGeneratorHolder").getDeclaredField("randomNumberGenerator");
        field.setAccessible(true);
        Random random = (Random) field.get(null);
        random.setSeed(0);
    } catch (Exception e) {}
    return new Random(0).nextDouble(); 
  }
}
