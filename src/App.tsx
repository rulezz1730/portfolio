import React from 'react';
import './App.module.scss';
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Skills from "./components/Skills/Skills";
import MyWorks from "./components/MyWorks/MyWorks";
import Wish from "./components/Wish/Wish";
import Contacts from "./components/Contacts/Contacts";
import Footer from "./components/Footer/Footer";

function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills/>
            <MyWorks/>
            <Wish/>
            <Contacts/>
            <Footer/>
        </div>
    );
}

export default App;
