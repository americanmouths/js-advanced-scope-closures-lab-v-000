function produceDrivingRange(range){
  return function(start, end){
    let startingBlock = parseInt(start);
    let endingBlock = parseInt(end);
    let distance = Math.abs(endingBlock - startingBlock);
    let travelDistance = range - distance;

    if (travelDistance > 0){
      return `within range by ${travelDistance}`
    } else {
      return `${Math.abs(travelDistance)} blocks out of range`
    }
  }
}

function produceTipCalculator(tip){
  return function(fare){
    return tip * fare;
  }
}
