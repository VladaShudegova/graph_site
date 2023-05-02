var ctx = document.getElementById('graph').getContext('2d');
var chart = new Chart(ctx,{
  type: 'line',
  data:{
    labels:['January','February','March', 'April', 'May', 'June', 'July'],
    datasets:[{
      label: 'График показателей',
      data:[-25, -10, 0, 2, 13, 24, 11],
      backgroundColor: ['white'],
      borderColor: [
        '#8DFFF8',
        '#9DFF8D',
        '#F68DFF',
        '#FFA98D',
         '#FFF48D',

      ],
      borderWidht: 4
    }]
  },
  options: {}
});