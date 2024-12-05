const getWinner = function (line : string){
    if(line === "XXX") return "X";
    else if (line === "OOO") return "O";
    else return "N";
};


const calculateWinner = function(grid : string[][]):string{
  let winner: string = "N";
  // row check
  for(let i =0; i < 3; i++){
    let line = "";
    for(let j = 0; j<3; j++){
      line+= grid[i][j];
    }
    winner = getWinner(line);
    if(winner!=="N") return winner;
  }

  // column check
  for(let i =0; i < 3; i++){
    let line = "";
    for(let j = 0; j<3; j++){
      line+= grid[j][i];
    }
    winner = getWinner(line);
    if(winner!=="N") return winner;
  }

  // diagonal check
  let diag1 = grid[0][0]+ grid[1][1]+ grid[2][2];
  winner = getWinner(diag1)
  if(winner!=="N") return winner;

  let diag2 = grid[0][2] + grid[1][1] + grid[2][0];
  winner = getWinner(diag2)
  if(winner!=="N") return winner;
  
  return "Not Decided Yet";
}


export default calculateWinner;
