export function getRandomNumber(max: number, min?: number) {
  const rand = Math.random()
  return min ? rand * (max - min) + min : rand * max
}

export function getRandomInt(max: number, min?: number) {
  const rand = Math.random()
  max = Math.floor(max)
  if (min) min = Math.ceil(min)

  return Math.floor(min ? rand * (max - min) + min : rand * max)
}
