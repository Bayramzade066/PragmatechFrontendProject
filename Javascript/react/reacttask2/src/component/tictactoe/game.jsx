import { useEffect, useState } from "react";
import Square from "./square";






export default function Game(){


    const [xOy, setXoY] = useState(Math.random() < 0.5 ? 'X' : 'O');



    const[board, setBoard]= useState([
        ['','',''],
        ['','',''],
        ['','',''],
    ])
    
    
    const CheckWinner= () =>{

        for(let rowIndex=0 ; rowIndex< board.length;rowIndex++){
            if(new Set(board[rowIndex]).size === 1 && board[rowIndex][0] !== ""){
                alert("Winner is - " + xOy)
            }


            const topdownlist=[]
            for(let colIndex=0 ; colIndex<board.length; colIndex++){
                topdownlist.push(board[colIndex][rowIndex])
            }

            if(new Set(topdownlist).size===1 && topdownlist[0] !==''){
                alert("Winner is - " + xOy)
            }
            
            
            // diagonal ucun rowun index reqemi colun index reqemine beraberdise ve burdan cixanlar 1 array daxiline yazdirib size 1e beraberdise ve bos deyilse winner
            //boardin butun qutulari bos deyilse ve winner deyilse alert beraberlik
        }
    }



    useEffect(()=>{
        setXoY(xOy === "X" ? "O" : "X")
        CheckWinner()
 
    },[board])
    

    const click= (x,y) =>{
        const boardCopy = [...board]
        if(!boardCopy[x][y]){
            boardCopy[x][y]=xOy;
            setBoard(boardCopy)
        }
        
    }





    return <div className="w-full h-screen flex items-center justify-center flex-col">
        <h1 className="text-fuchsia-700 flex mb-16 text-7xl">Tic Tac Toe</h1>
        <div className="grid grid-cols-3 w-[30%] mx-auto  items-center">
            {board.map((row,rowIndex) =>
            row.map((value,colIndex) => <Square key={`${rowIndex}-${colIndex}`} value={value} onClick={()=> click(rowIndex,colIndex)} />)
            )}
        </div>
    </div>





}