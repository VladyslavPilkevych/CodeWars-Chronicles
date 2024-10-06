function calculate(recs) {
  if (!recs?.length) return 0;
  
  const eventList = [];
  recs.forEach((rec) => {
    eventList.push([rec[0], 1, rec[1], rec[3]]);
    eventList.push([rec[2], -1, rec[1], rec[3]]);
  })
  
  eventList.sort((prev, next) => prev[0] - next[0]);
  
  let totalArea = 0;
  let prevX = -1;
  let activeHeight = 0;
  let heights = [];

  for (const event of eventList) {
    let x = event[0];
    let type = event[1];
    let y1 = event[2];
    let y2 = event[3];
    
    if(prevX !== -1 && x !== prevX) {
      totalArea += activeHeight*(x-prevX);
    }
    if(type === 1) {
      heights.push([y1, y2]);
    } else {
      const indexToRemove = heights.findIndex((height) => height[0] === y1 && height[1] === y2);
      if (indexToRemove !== -1) {
        heights.splice(indexToRemove, 1);
      }
    }
    prevX = x;
    activeHeight = calculateActiveHeight(heights);
  }
  return totalArea;
}

function calculateActiveHeight(heights) {
  if(!heights?.length) return 0;
  
  let activeHeight = 0;
  heights.sort((prev, next) => prev[0] - next[0]);
  let min = heights[0][0];
  let max = heights[0][1];
  
  for(let i = 1; i < heights.length; i++) {
    if(heights[i][0] > max) {
      activeHeight += max-min;
      min = heights[i][0];
      max = heights[i][1];
    } else if(heights[i][1] > max) {
      max = heights[i][1];
    }
  }
  activeHeight += max-min;
  return activeHeight;
}