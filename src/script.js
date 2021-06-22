let d = new Date();

console.log(d.toISOString().substring(0, 10));

d.setDate(d.getDate() - 12);

console.log(d.toISOString().substring(0, 10));