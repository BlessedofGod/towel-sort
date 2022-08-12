
// You should implement your task here.

module.exports = function towelSort (matrix) {
    if(!matrix) return []
    return matrix.reduce((acc, arr, i) => {
      if(i % 2 === 0) return [...acc, ...arr]
      return [...acc, ...arr.reverse()]
    }, []);
  }

  
