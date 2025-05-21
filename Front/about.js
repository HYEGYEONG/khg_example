AOS.init();

var typed = new Typed('#typed', {
  strings: ["안녕하세요, 저는 웹개발자 입니다."],
  typedSpeed: 1000,
  backSpeed : 100,
  loop: true
});



const skillLabels = ['JavaScript', 'HTML', 'CSS', 'JAVA'];
const skillLevels = [3, 2, 2,2]; // 상=3, 중=2, 하=1

const levelNames = {1: '하', 2: '중', 3: '상'};

const ctx = document.getElementById('myChart').getContext('2d');
new Chart(ctx, {
  type: 'bar',
  data: {
    labels: skillLabels,
    datasets: [{
      label: '보유기술 숙련도',
      data: skillLevels,
      backgroundColor: [
      '#FFE5CC', // JS
        '#E5FFCC', // HTML
        '#CCE5FF', // CSS
        '#FFCCE5' 
      ]
      
    }]
  },
  options: {
    scales: {
      y: {
        min: 0,
        max: 3,
        ticks: {
          stepSize: 1,
          callback: function(value) {
            return levelNames[value] || '';
          }
        }
      }
    }
  }
});