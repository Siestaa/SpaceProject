import { useState } from 'react';

interface ICellProps {    
    turn: number,
    order: number,
    handleChange: (n: number, c: boolean) => void
}

export const Cell = (props: ICellProps) => {
    const {turn, order, handleChange} = props
    const [disabled, setDisabled] = useState<boolean>(false);
    const [side, setSide] = useState<boolean>(true);

    return (
        <>
            <label data-cell={order} className={`border-2 p-1 w-20 h-20 flex justify-center items-center text-5xl ${side ? 'text-green-400' : 'text-red-400'}`}>{disabled ? side ? 'X' : 'O' : null}
                <input disabled={disabled} onChange={() => {setSide(!!(turn % 2)); handleChange(order, side); setDisabled(true); console.log(side) }} className='appearance-none' type='checkbox' />
            </label>
        </>        
    );
};

