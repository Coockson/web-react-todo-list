import React from 'react'

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
            </header>
        </div>
    )
}
