const obj1 = {key: '1'};
const obj2 = {key2: '2'};
const merge = {...obj1, ...obj2};

merge.key2=100;

console.log(obj2);
console.log(merge);