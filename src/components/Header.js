import React from 'react'


export default function Header(props){
    return(
        <header className='row block center head'>
            <div>
                 <h2>Public Publishers </h2> 
            </div>
            <div className='sign'>
                <a href="#">Cart</a> <a href="#"> SignIn</a>
            </div>
        </header>
    );
} 
