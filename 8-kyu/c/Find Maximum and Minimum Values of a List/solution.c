int min(int* array, int arrayLength)
{
  int min;
  for(int i = 0; i < arrayLength; i++)
  {
    if(!i) min = array[i];
    if(min > array[i]) min = array[i];
  }
  return min;
}

int max(int* array, int arrayLength)
{
  int max;
  for(int i = 0; i < arrayLength; i++)
  {
    if(!i) max = array[i];
    if(max < array[i]) max = array[i];
  }
  return max;
}
