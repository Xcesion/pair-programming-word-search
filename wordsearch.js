
const wordSearch = (letters, word) => { 
    const horizontalJoin = letters.map(ls => ls.join(''))
    for (l of horizontalJoin) {
        if (l.includes(word)){
            return true;
        }
    }

    //let transpose = [];
    transposedMatrix = transpose(letters);
    const verticalJoin = transposedMatrix.map(ls => ls.join(''))

    for (l of verticalJoin) {
        if (l.includes(word)){
            return true;
        }
    }

    return false;

};

//Transpose function 
const transpose = function (matrix) {
  // Replace this code with your solution
  let transposeMatrix = [];
  for(let i = 0; i < matrix.length; i++) {
    if (!transposeMatrix.length) {
      for (let j = 0; j < matrix[i].length; j++) {
        transposeMatrix.push([matrix[i][j]])
      }
    } 
    else {
      for (let j = 0; j < matrix[i].length; j++) {
      // console.log("Transpose Matrix @ j before push:", transposeMatrix[j])
      // console.log(matrix[i][j])
      transposeMatrix[j].push(matrix[i][j]);
      // console.log("Transpose Matrix @ j after push:", transposeMatrix[j]);
      }
    }
  }
  return transposeMatrix;
};

module.exports = wordSearch;

