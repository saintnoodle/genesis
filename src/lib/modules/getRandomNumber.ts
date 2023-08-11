/**
 * Generates a random arbitrary number within a specified range
 * @param max The maximum value that can be generated.
 * @param min The minimum value that can be generated. (Default: 0)
 * @returns A random number between min and max.
 */
export function getRandomNumber(max: number, min: number = 0) {
  return Math.random() * (max - min) + min
}

/**
 * Generates a random integer within a specified range. Inputs are rounded.
 * @param max The maximum value that can be generated.
 * @param min The minimum value that can be generated. (Default: 0)
 * @returns A random integer between min and max.
 */
export function getRandomInt(max: number, min: number = 0) {
  max = Math.floor(max)
  min = Math.ceil(min)

  return Math.floor(Math.random() * (max - min) + min)
}
