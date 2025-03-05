import {useState} from 'react';

function HeadlessButton({children,...props}){
    
    return children({
        ...props 
    });
}

export {HeadlessButton}