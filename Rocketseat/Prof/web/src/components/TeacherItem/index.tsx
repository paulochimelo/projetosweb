import React from 'react'
import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css'

function TeacherItem(){
    return(
                <article className="teacher-item">
                    <header>
                        <img src="https://scontent-gru2-1.xx.fbcdn.net/v/t1.0-9/76682076_1183684745166024_8995340227266478080_o.jpg?_nc_cat=111&_nc_sid=09cbfe&_nc_eui2=AeHAjZhVJLjBiI6EuqjlVvnc9TelFbhbe6r1N6UVuFt7qszv9FRh8phx_NZwzlDDITGXxPgKrioXfjl3O5dE2Wcn&_nc_ohc=Q-cfR8819NQAX_ICmvK&_nc_ht=scontent-gru2-1.xx&oh=a8bd77e68c029b523d593e803109925a&oe=5F514A3C"/>
                        <div>
                            <strong>Igor Silva</strong>
                            <span>Delphi</span>
                        </div>
                    </header>
                    <p>
                        Programador apaixonado pela linguagem Delphi
                        <br /> <br />
                        Profissional a mais de 5 anos no mercado de trabalho utilizando a linguagem de programação Delphi
                    </p>

                    <footer>
                        <p>
                            Preço/Hora
                            <strong>R$ 50,00</strong>
                        </p>
                        <button type= "button">
                            <img src={whatsappIcon} alt= "Whatsapp"/>
                            Entrar em contato
                        </button>
                    </footer>
                </article>)
}

export default TeacherItem