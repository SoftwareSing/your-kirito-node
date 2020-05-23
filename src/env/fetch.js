let envFetch

export function getFetch () {
  return envFetch
}

export function setFetch (fetchFunc) {
  envFetch = fetchFunc
}
