var colors = ['#007bff','#333333', '#c3e6cb', '#dc3545', '#6c757d'];

var donutOptions = {
    cutoutPercentage: 60,
    legend: {
        position: 'bottom',
        padding: 5,
        labels: {
            pointStyle: 'circle',
            usePointStyle: true
        }
    }
};

var chDatas = [
  [3,1],
  [3,1],
  [3,1],
  [3,1],
  [3,1],
  [3,1],
];

var chDonutData1 = {
    labels: ['Present', 'Absent'],
    datasets: [{
        backgroundColor: colors.slice(0, 2),
        borderWidth: 0,
        data: [75,25]
    }],
    options: {
        responsive: true
        }
};
var chDonutData2 = {
    labels: ['Present', 'Absent'],
    datasets: [{
        backgroundColor: colors.slice(0, 2),
        borderWidth: 0,
        data: [75,25]
    }],
    options: {
        responsive: true
        }
};
var chDonutData3 = {
    labels: ['Present', 'Absent'],
    datasets: [{
        backgroundColor: colors.slice(0, 2),
        borderWidth: 0,
        data: [75,25]
    }],
    options: {
        responsive: true
        }
};
var chDonutData4 = {
    labels: ['Present', 'Absent'],
    datasets: [{
        backgroundColor: colors.slice(0, 2),
        borderWidth: 0,
        data: [75,25]
    }],
    options: {
        responsive: true
        }
};
var chDonutData5 = {
    labels: ['Present', 'Absent'],
    datasets: [{
        backgroundColor: colors.slice(0, 2),
        borderWidth: 0,
        data: [75,25]
    }],
    options: {
        responsive: true
        }
};
var chDonutData6 = {
    labels: ['Present', 'Absent'],
    datasets: [{
        backgroundColor: colors.slice(0, 2),
        borderWidth: 0,
        data: [75,25]
    }],
    options: {
        responsive: true
        }
};


var chDonut1 = document.getElementById("chDonut1");
if (chDonut1) {
    new Chart(chDonut1, {
        type: 'pie',
        data: chDonutData1,
        options: donutOptions
    });
}
var chDonut2 = document.getElementById("chDonut2");
if (chDonut2) {
    new Chart(chDonut2, {
        type: 'pie',
        data: chDonutData2,
        options: donutOptions
    });
}
var chDonut3 = document.getElementById("chDonut3");
if (chDonut3) {
    new Chart(chDonut3, {
        type: 'pie',
        data: chDonutData3,
        options: donutOptions
    });
}
var chDonut4 = document.getElementById("chDonut4");
if (chDonut4) {
    new Chart(chDonut4, {
        type: 'pie',
        data: chDonutData4,
        options: donutOptions
    });
}
var chDonut5 = document.getElementById("chDonut5");
if (chDonut5) {
    new Chart(chDonut5, {
        type: 'pie',
        data: chDonutData5,
        options: donutOptions
    });
}
var chDonut6 = document.getElementById("chDonut6");
if (chDonut6) {
  new Chart(chDonut6, {
    type: 'pie',
    data: chDonutData6,
    options: donutOptions
  });

}


function present(donutdata,index,id,para){
  chDatas[+index][0]++;
  let there = Math.round((chDatas[index][0]/(chDatas[index][0]+chDatas[index][1]))*100)
  let notthere = 100 - there
  donutdata.datasets[0].data[0] = +`${there}`
  donutdata.datasets[0].data[1] = +`${notthere}`

  if (+there >= 75){
    document.getElementById(para).innerHTML = "You aren't expecting a Z grade this semester."
  }
  else{
    let required = 3*chDatas[+index][1] - chDatas[+index][0];
    document.getElementById(para).innerHTML = `You have to go a bare of ${required} classes.`
  }

  let chchange = document.getElementById(id)
  if(chchange){
    new Chart(chchange, {
        type: 'pie',
        data: donutdata,
        options: donutOptions
    });
  }
}

function absent(donutdata,index,id,para){
  chDatas[+index][1]++;
  let there = Math.round((chDatas[index][0]/(chDatas[index][0]+chDatas[index][1]))*100)
  let notthere = 100 - there
  donutdata.datasets[0].data[0] = +`${there}`
  donutdata.datasets[0].data[1] = +`${notthere}`

  if (+there >= 75){
    document.getElementById(para).innerHTML = "You aren't expecting a Z grade this semester."
  }
  else{
    let required = 3*chDatas[+index][1] - chDatas[+index][0];
    document.getElementById(para).innerHTML = `You have to go a bare of ${required} classes.`
  }

  let chchange = document.getElementById(id)
  if(chchange){
    new Chart(chchange, {
        type: 'pie',
        data: donutdata,
        options: donutOptions
    });
  }
}
