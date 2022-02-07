const test = [1, 2, 3, 4];

function sumFor(listNum) {
  let sum = 0;
  for(const num of listNum){
    sum += num;
  }
  return sum;
}

console.log(sumFor(test));

function sumWhile(listNum) {
  let sum = 0;
  let i = 0;
  while (i < listNum.length) {
    sum += listNum[i];
    i++;
  }
  return sum;
}

console.log(sumWhile(test));

function sumRecursion(listNum) {
  if (listNum.length === 0) {
    return 0;
  }
  return listNum[0] + sumRecursion(listNum.slice(1, listNum.length));
}

console.log(sumRecursion(test));

function sumTheSimpleWay(listNum) {
  return _.reduce(listNum, function (memo, num) { return memo + num; }, 0);
}

console.log(sumTheSimpleWay(test));