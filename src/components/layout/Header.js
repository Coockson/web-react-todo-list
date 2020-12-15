import React from 'react';
import { Link } from 'react-router-dom'

export default function Header() {

    const headerStyle = {
        background: '#3377FF',
        color: '#fff',
        textAlign: 'center',
        padding: '10px'
    }

    return (
        <div>
            <header style={headerStyle}>
                <h1>TodoList</h1>
                <Link to="/">Home</Link> | <Link to="/about">About</Link>
            </header>
        </div>
    )
}
