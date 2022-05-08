import React from 'react';



import LogoImg from '../../assets/images/logo.svg';
import LandingImg from '../../assets/images/landing.svg'
import StudyIcon from '../../assets/images/icons/study.svg'
import GiveClassesIcon from '../../assets/images/icons/give-classes.svg'
import PurpleHeartIcon from '../../assets/images/icons/purple-heart.svg'

import './styles.css'
import { Link } from 'react-router-dom';

function Landing() {
    return (
        <div id="page-landing">
            <div id="page-landing-content" className = "container">
                <div className="logo-container">
                    <img src= {LogoImg} alt = "Proffy"/>
                    <h2>Sua plataforma de estudos online.</h2>
                </div>
                <img 
                    src = {LandingImg} 
                    alt = "Plataforma de estudos" 
                    className = "hero-image"
                />
                <div className="buttons-container">
                    <Link to="/study" className ="study" >
                        <img src= {StudyIcon} alt = "Estudar"></img>
                        Estudar
                    </Link>
                    <Link to="/give-classes" className ="give-classes" >
                        <img src= {GiveClassesIcon} alt = "Dar aulas"></img>
                        Dar aulas
                    </Link>
                </div>

                <span className="total-connection">
                    Total de 200 conexoes já realizadas <img src={PurpleHeartIcon} alt= "Coração roxo"></img>
                </span>
            </div>
        </div>
    )
}

export default Landing;
