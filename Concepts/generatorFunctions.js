function* dateGenerator(startDate = new Date()) {
    let currentDate = startDate;
    while (true) {
      yield currentDate;
      currentDate.setDate(currentDate.getDate() + 1);
    }
  }
  
  console.log('Next 30 Days');
  const dates = dateGenerator();
  for(let i = 0; i < 30; i++){
    console.log(dates.next().value.toDateString());
  }


