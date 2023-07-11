import React from 'react';
import { Button } from '../utils';
import { BsDot } from 'react-icons/bs';
import { TbDivide, TbMinus, TbPercentage, TbPlus, TbPlusMinus, TbSquareRoot, TbX } from 'react-icons/tb';
import styles from '../styles/buttons.css';

const Keypad = ({ display, setDisplay, topDisplay, setTopDisplay }) => {
    return (
        <>
            <div className='flex flex-col gap-3'>
                <div className='flex gap-3 h-12'>
                    <Button value='(' type={'special'} />
                    <Button value=')' type={'special'} />
                    <Button value='ans' type={'special'} />
                    <Button value='del' type={'special'} />
                    <Button value='clear' type={'special'} />
                </div>
                <div className='flex gap-3 h-16'>
                    <Button value={7} event={setDisplay(display + '7')} />
                    <Button value={8} event={setDisplay(8)} />
                    <Button value={9} event={setDisplay(9)} />
                    <Button value={<TbPercentage />} type={'special'} />
                    <Button value={<TbSquareRoot />} type={'special'} />
                </div>
                <div className='flex gap-3 h-16'>
                    <Button value={4} />
                    <Button value={5} />
                    <Button value={6} />
                    <Button value={<TbX />} type={'special'} />
                    <Button value={<TbDivide />} type={'special'} />
                </div>
                <div className='flex gap-3 h-16'>
                    <Button value={1} />
                    <Button value={2} />
                    <Button value={3} />
                    <Button value={<TbPlus />} type={'special'} />
                    <Button value={<TbMinus />} type={'special'} />
                </div>
            </div>
            <div className='flex gap-3 h-16 -mt-1'>
                <div className="flex gap-3 w-3/5">
                    <Button value={<BsDot />} type={'special'} />
                    <Button value={0} />
                    <Button value={<TbPlusMinus />} type={'special'} />
                </div>
                <div className='w-2/5 -mr-1 pr-1'>
                    <Button value='ENTER' type={'special'} />
                </div>
            </div>
        </>
    )
}

export default Keypad