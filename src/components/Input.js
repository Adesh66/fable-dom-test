import React, { useState } from 'react';
import { createNestedObject } from '../helpers/commonHelper';

const Input = ({ setTree }) => {
    const [inputVal, setInputVal] = useState('');
    const submitClickHandler = () => {
        const arr = inputVal.split(',');
        if (arr.length) {
            const nestedObject = createNestedObject(arr);
            setTree(nestedObject);
        }
    };
    return (
        <div className='form-wrapper'>
            <input
                className='form-control'
                placeholder='Enter values'
                type='text'
                onChange={(e) => setInputVal(e.target.value)}
            />
            <button className='btn' onClick={submitClickHandler}>
                Submit {inputVal}
            </button>
        </div>
    );
};

export default Input;
