import React from 'react';
import styles from './App.module.scss';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Contacts from './components/Contacts/Contacts';
import ParticleBackground from './components/Particle/ParticleBackground';
import {Navigate, Route, Routes} from 'react-router-dom';
import MobileMenu from "./components/MobileMenu/MobileMenu";
import NotFound404 from "./components/Test/404Page";

function App() {
    return (<>
            <div className={styles.app}>
                        <Header/>
                        <MobileMenu/>
                    <Routes>
                        {['/', '/portfolio'].map((path, index) =>
                            <Route path={path} key={index} element={<Navigate to='/home'/>}/>)
                        }w
                        <Route path='/home' element={<Home/>}/>
                        <Route path='/projects' element={<Projects/>}/>
                        <Route path='/about' element={<About/>}/>
                        <Route path='/contacts' element={<Contacts/>}/>
                        <Route path='/*' element={<NotFound404/>}/>
                    </Routes>
                <ParticleBackground/>
            </div>
        </>
    );
}

export default App;
