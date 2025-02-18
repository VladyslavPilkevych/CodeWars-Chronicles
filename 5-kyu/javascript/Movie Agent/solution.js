function Movie(name, start, end) {
  this.name = name;
  this.start = start;
  this.end = end;
}

function schedule(movies) {
  if (movies.length === 0) return 0;

  movies.sort((a, b) => a.end - b.end);

  let count = 0;
  let lastEnd = -1;

  for (const movie of movies) {
    console.log(movie.start, lastEnd)
    if (movie.start > lastEnd) {
      count++;
      lastEnd = movie.end;
    }
  }

  return count;
}
