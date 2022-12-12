import React, { useState } from 'react';
import Card from './Card';
import axios from 'axios';

const Main = () => {

    const [search, setSearch]=useState('');
    const [bookData, setBookData]=useState([]);
    const searchBook = (e) => {
        if (e.key === "Enter") { 

            axios.get(`https://www.googleapis.com/books/v1/volumes?q=${search}&key=AIzaSyBEGorFybvubiI6byCmmRcr9p8j3xWVoLw&maxResults=40`)
            .then(response => setBookData(response.data.items))
            .catch(error => console.log(error))
        }
    }

    return (
        <>
        <div className='header'>
            <div className='row'>
                <h1>A room without books is like <br/> a body without a soul.</h1>
            </div>
            <div className='row2'>
                <h2>Find Your Book</h2>
                <div className='search'>

                    <input 
                        type='text' 
                        placeholder='Enter Book Title' 
                        value={search} 
                        onChange={e => setSearch(e.target.value)}
                        onKeyPress={searchBook}
                    />

                    <button><i className="fa-solid fa-magnifying-glass"></i></button>
                </div>
                <img src='./Images/bg2.png' alt='' />
             
            </div>
        </div>
        <div className="container">
            {
                <Card book={bookData}/>
            } 
            
        </div>
        </>
    )
}

export default Main;