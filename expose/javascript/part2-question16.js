let statistics = {
    redCars: 21,
    blueCars: 45,
    greenCars: 12,
    raceCars: 5,
    blackCars: 40,
    rareCars: 2
  };
  
  for (let carcolorcount in statistics) {
    if (carcolorcount.startsWith('r') || statistics[carcolorcount] % 2 !== 0)
    console.log(statistics[carcolorcount]);
  };