int uni_total(const char *s) {
  int total = 0;
  while (*s) {
    total += (int)(*s);
    s++;
  }
  return total;
}
