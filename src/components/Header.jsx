import React from 'react'
import '../styles/header.css'
import future from '../images/future.png'

export default function Header() {
    return (
        <div className="container">
            <div className='pling'>
                <div className="tech">
                    <div className="teach2">
                        <img src={future} alt="logo" />
                        <ul>
                            <a href=""><li>Maktab haqida</li></a>
                            <a href=""><li>Tariflar</li></a>
                            <a href=""><li>Aloqa</li></a>
                            <a href=""><li>Natijalar</li></a>
                        </ul>
                        <button className='yel'>Student App</button>
                    </div>
                </div>

            </div>

            
           

        </div>

    )
}
