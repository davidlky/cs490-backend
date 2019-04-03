var random_name = require('node-random-name');

const sample = {
  start_date: '2013-05-05',
  end_date: '2016-12-05',
  customer_id: 5191,
  order_id: '',
};

const n = 20;
const a = [];

const status = [
  'Urgent',
  'Normal',
  'Normal, Large',
  'Urgent, Fragile',
  'Slow, Large',
  'Slow',
  'Normal, Fragile',
  'Normal, Extra Large, Fragile',
];
const locations = [
  {
    address: '200 University Avenue, Waterloo, Canada',
    name: 'Warehouse A',
  },
  {
    address: '200 Lester Avenue, Waterloo, Canada',
    name: 'Warehouse B',
  },
  ,
  {
    address: '200 Weber Avenue, Waterloo, Canada',
    name: 'Warehouse C',
  },
];

for (let i = 0; i < 20; i++) {
  const startDate = new Date();
  startDate.setDate(Math.round(startDate.getDate() + 5 * Math.random()));
  const endDate = new Date();
  endDate.setDate(Math.round(startDate.getDate() + 5 * Math.random()));

  const forecasts = [];
  for (let j = 0; j < 3; j++) {
    const startDate2 = new Date();
    startDate2.setDate(Math.round(startDate2.getDate() + 5 * i));
    const endDate2 = new Date();
    endDate2.setDate(Math.round(startDate2.getDate() + 5));
    forecasts.push({
      start_date: startDate2.toDateString(),
      end_date: endDate2.toDateString(),
      inventory_level: Math.round(100 + 20 * Math.random()),
      inventory_level_required: Math.round(120 + 10 * Math.random()),
      orders_in_last_period: Math.round(30 + 20 * Math.random()),
      inventory_end_of_period: Math.round(120 + 20 * Math.random()),
    });
  }

  a.push({
    first_name: random_name({ random: Math.random, first: true }),
    last_name: random_name({ random: Math.random, last: true }),
    employee_id: Math.round(1000 + 6000 * Math.random()),
    // forecasts: forecats,
  });
}
console.log(JSON.stringify(a));
