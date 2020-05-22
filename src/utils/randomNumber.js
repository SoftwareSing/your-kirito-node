export function randomNumber (max = 1000, min = 0) {
  if (min > max) {
    const temp = min
    min = max
    max = temp
  }

  const range = max - min
  const num = Math.floor(Math.random() * range)

  return num + min
}
