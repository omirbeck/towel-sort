
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let sort = [];
  if (matrix == undefined) return sort; 
  matrix.forEach((i, index) => {
    if(index%2 === 0) {
      i.forEach(j => sort.push(j));
    } else {
      i.reverse().forEach(j => sort.push(j))
    }
  });
  console.log(sort)
  return sort;
}
