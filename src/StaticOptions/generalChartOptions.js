const standardLine = {
  legend: {
    display: true,
    labels: {
      fontColor: "grey"
    }
  }
  // scales: {
  //   yAxes: [
  //     {
  //       ticks: {
  //         callback: function(value) {
  //           return numeral(value).format("$ 0,0");
  //         }
  //       }
  //     }
  //   ]
  // }
  // callbacks: {
  //   label: function(tooltipItem, data) {
  //     return tooltipItem.yLabel
  //       .toString()
  //       .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  //   }
  // }
};

const standardPie = {
  title: {
    display: false,
    text: "TOP 9 BREAKDOWN"
  },
  legend: {
    position: "left"
  }
};

const standardBar = {
  legend: {
    display: true,
    labels: {
      fontColor: "grey"
    }
  }
};

export default {
  standardLine,
  standardPie,
  standardBar
};
