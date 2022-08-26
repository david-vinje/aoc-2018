const { readFile } = require('fs')

// part 1
readFile('./day2.txt', (_, bytes) => {
  let twos = threes = 0
  bytes.toString().split('\n').forEach(line => {
    let hasTwos = hasThrees = false
    const freqs = new Map()
    line.split('').forEach(char => {
      if (freqs.has(char)) {
        freqs.set(char, freqs.get(char) + 1)
      } else {
        freqs.set(char, 1)
      }
    })
    freqs.forEach((v, _) => {
      if (v == 2) {
        hasTwos = true
      } else if (v == 3) {
        hasThrees = true
      }
    })
    if (hasTwos) twos++
    if (hasThrees) threes++
  })
  console.log('first star', twos * threes)
})

readFile('./day2.txt', (_, bytes) => {
  const lines = bytes.toString().split('\n')
  for (let i=0; i<lines.length-1; i++) {
    const a = lines[i].split('')
    for (let j=i+1; j<lines.length; j++) {
      const b = lines[j].split('')
      let diffCount = 0;
      for (let k=0; k<a.length; k++) {
        if (a[k] != b[k]) diffCount++
      }
      if (diffCount < 2) {
        let res = ''
        for (let k=0; k<a.length; k++) {
          if (a[k] == b[k]) res += a[k]
        }
        console.log(res)
      }
    }
  }
}) 