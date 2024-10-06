import java.util.*;

public class RectanglesUnion {
    public static int calculateSpace(int[][] rectangles) {
        List<int[]> events = new ArrayList<>();
        List<Height> heights = new ArrayList<>();
        
        for(int[] rect : rectangles){
            events.add(new int[]{rect[0], 1, rect[1], rect[3]});
            events.add(new int[]{rect[2], -1, rect[1], rect[3]});
        }
        
        events.sort((a, b) -> {return a[0] - b[0];});
        
        int prevX = -1, totalArea = 0, activeHeight = 0;
        
        for(int[] event : events){
            
            int x = event[0];
            int type = event[1];
            int y1 = event[2];
            int y2 = event[3];
            
            if(prevX != -1 && x != prevX){
                totalArea += activeHeight * (x - prevX);
            }
            
            if(type == 1){
                heights.add(new Height(y1, y2));
            }else{
                heights.remove(new Height(y1, y2));
            }
            prevX = x;
            activeHeight = calculateActiveHeight(heights);
        }
        
        return totalArea;
    }
    
    public static int calculateActiveHeight(List<Height> heights) {
        if(heights.size() == 0) return 0;
        
        int activeHeight = 0;
        heights.sort((a, b) -> {return a.a - b.a;});
        
        int min = heights.get(0).a, max = heights.get(0).b;
        
        for(int i = 1; i < heights.size(); i++){
            Height arr = heights.get(i);
            if(arr.a > max){
                activeHeight += max - min;
                min = arr.a;
                max = arr.b;
            }else if(arr.b > max){
                max = arr.b;
            }
        }

        activeHeight += max - min;

        return activeHeight;
    }
}
class Height{
    int a, b;
    public Height(int a, int b){
        this.a = a;
        this.b = b;
    }
    
    public boolean equals(Object obj){
        if(obj instanceof Height){
            Height obj1 = (Height) obj;
            return this.a == obj1.a && this.b == obj1.b;
        }
        
        return false;
    }

}
