import React from 'react'

const Navbar = () => {
    return (
        <div className="container bg-light h-75">
            <div className="float-left">
                <ul>
                    <li>Modal Tani</li>
                    <li>Program</li>
                    <li>Investasiku</li>
                    <li>Blog</li>
                </ul>
            </div>
            <div className="float-right">
                <ul>
                    <li>Daftar</li>
                    <li>Masuk</li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar
