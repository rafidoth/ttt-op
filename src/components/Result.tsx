
interface Props{
  winningStatus : string,
  currentPlayer : string
}


export default function Result({winningStatus, currentPlayer}: Props){
  return <>
    <h4> Winner : {winningStatus}</h4>
    <h4>Now Turn : {winningStatus==="Not Decided Yet"? currentPlayer : "Match Ended"} </h4>
  </>
}
