import { useState } from "react";
import Header from "../common/Header";
import room from "../../resources/room.png"
import link from "../../resources/link.png"
import video from "../../resources/video.png"
import arrow from "../../resources/arrow.png"

export default function Main(){
    const [isAuth, setIsAuth] = useState(false);
    return (
        <div className="app">
            <div className="content">
                <Header/>
                
                <div className="create-button">
                    <span className="general-text">Створити кімнату</span>
                </div>

                <div className="cards">
                    <div className="card">
                        <img src={room} width={90} height={90}></img>
                        <span className="general-text">Створити власну 
                            кімнату для перегляду 
                            відео</span>
                    </div>
                        <img src={arrow} width={90} height={90}></img>
                    <div className="card">
                        <img src={link} width={90} height={90}></img>
                        <span className="general-text">Відправ посилання 
                        на кімнату другу</span>
                    </div>
                        <img src={arrow} width={90} height={90}></img>
                    <div className="card">
                        <img src={video} width={90} height={90}></img>
                        <span className="general-text">Обирайте відео та 
                        насолоджуйтесь переглядом</span>
                    </div>  
                </div>
            </div>
        </div>
    );
}