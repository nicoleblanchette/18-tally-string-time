const timeNodes = [...document.querySelectorAll('[data-time]')]

// video solution

  // const seconds = timeNodes
  // .map(node => node.dataset.time)
  // .map(timeCode => {
  //   const [mins, secs] = timeCode.split(':').map(parseFloat)
  //   return (mins * 60) + secs

  // })
  // .reduce((total, vidSeconds) => total + vidSeconds)
  // // console.log(seconds)
  // let secondsLeft = seconds
  // let hours = Math.floor(secondsLeft / 3600)
  // secondsLeft = secondsLeft % 3600

  // let mins = Math.floor(secondsLeft / 60);
  // secondsLeft = secondsLeft % 60;

  // console.log(hours, mins, secondsLeft)
  
// my solution  
const tallyVids = () => {
  let totalHrs = 0;
  let totalMins = 0;
  let totalSecs = 0;
  for (const vid of timeNodes) {
    const vidTime = vid.dataset.time;
    const [mins, secs] = vidTime.split(':').map(parseFloat);
    totalSecs += secs;
    if (totalSecs > 60) {
      totalSecs -= 60;
      totalMins++;
    }

    totalMins += mins;
    if (totalMins > 60) {
      totalMins -= 60;
      totalHrs++;
    }

  }
  console.log(totalHrs, totalMins, totalSecs);
  return (totalHrs, totalMins, totalSecs);
};

tallyVids();