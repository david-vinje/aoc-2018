const { readFile } = require('fs')

// part 1
readFile('./day1.txt', (_, data) => {
  const res = data
    .toString()
    .split('\n')
    .map(elem => parseInt(elem))
    .reduce((acc, elem) => acc + elem)
  console.log('first star:', res)
})

// part 2
readFile('./day1.txt', (_, bytes) => {
  const freqs = new Set([0])
  let sum = 0
  let foundAns = false
  const data = bytes.toString().split('\n').map(x => parseInt(x))
  let count = 0
  while (!foundAns) {
    for (let i=0; i<data.length; i++) {
      sum += data[i]
      if (freqs.has(sum)) {
        console.log('second star:', sum)
        foundAns = true
        break
      } else {
        freqs.add(sum)
      }
    }
    count++
  }
})
