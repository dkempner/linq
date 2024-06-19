function l<T>(x: T[]) {
  const val = x;
  return {
    val: () => val,
    where: (pred: (x: T) => boolean) => l(x.filter(pred)),
    select: <U>(mapper: (x: T) => U) => l(x.map(mapper))
  }
}

export default l;