for (let key in statistics) {
  if (key.startsWith('r') || statistics[key] % 2 !== 0) {
    console.log(statistics[key]);
  }
}