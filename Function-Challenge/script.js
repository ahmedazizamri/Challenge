const calcAverage = (x, y, z) => (x + y + z) / 3;
var avgDolphins = calcAverage(85, 54, 41),
  avgKoalas = calcAverage(23, 34, 27);

function checkWinner(avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
  } else {
    console.log("No team has won this time...");
  }
}
checkWinner(avgDolphins, avgKoalas);
