import React, { Component } from 'react'
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'

//Home
const Home = () =>{
    return(
        <div>
            <h2>Home</h2>
            <p>Welcome to ようこそ</p>
            <div className="link_btn">
                <Link to='/form'>入力開始</Link>
            </div>
        </div>
    )
}

export default Home