import { Link } from 'react-router-dom';
import { useState } from "react";
import { Cell } from './Cell';


export const Tictac = () => {

    const [turn, setTurn] = useState<number>(1);
    const [currentResult, setCurrentResult]= useState(["","","","","","","","","",])

    const turnArray: number[] = [1,2,3,4,5,6,7,8,9]

    const handleTurn = (cell: number, side: boolean) => {
        setTurn(turn + 1);
        const arr = [...currentResult]
        side ? arr[cell-1] = 'X' : arr[cell-1] = 'O'
        console.log(turn)
        setCurrentResult(arr)
        console.log(currentResult);
        console.log(side)
    }

    return (
        <div>
            <div className='grid grid-cols-3 row-auto'>
                {turnArray.map((order) => (
                    <Cell key={order} order={order} turn={turn} handleChange={handleTurn}/>
                ))}
            </div>
            <Link to={'/'}>Back</Link>
        </div>
    );
}
