import React from 'react';
import { Button } from '../utils';

const Keypad = () => {
    return (
        <div className='flex flex-col gap-2'>
            <div className='flex gap-2 h-10'>
                <Button value='(' type={'special'} />
                <Button value=')' type={'special'} />
                <Button value='ans' type={'special'} />
                <Button value='del' type={'special'} />
                <Button value='clear' type={'special'} />
            </div>
            <div className='flex gap-2 h-12'>
                <Button value={7} />
                <Button value={8} />
                <Button value={9} />
                <Button value='%' type={'special'} />
                <Button value={'root'} type={'special'} />
            </div>
            <div className='flex gap-2 h-12'>
                <Button value={4} />
                <Button value={5} />
                <Button value={6} />
                <Button value='x' type={'special'} />
                <Button value='/' type={'special'} />
            </div>
            <div className='flex gap-2 h-12'>
                <Button value={1} />
                <Button value={2} />
                <Button value={3} />
                <Button value='+' type={'special'} />
                <Button value='-' type={'special'} />
            </div>
            <div className='flex gap-2 h-12'>
                <Button value='.' type={'special'} />
                <Button value={0} />
                <Button value={'+-'} type={'special'} />
                <Button value='' type={'special'} />
                <Button value='ENTER' type={'special'} />
            </div>
        </div>
    )
}

export default Keypad