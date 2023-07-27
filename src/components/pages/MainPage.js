import { useState } from "react";

export default function Main(){
    const [isAuth, setIsAuth] = useState(false);
    return (
        <div className="app">
            <div className="content">
                <header className="header">
                    <div className="header-left">
                        <a className="header-text-logo">Closely</a>
                    </div>
                    <div className="header-right">
                        {isAuth ? <></> : 
                            <a className="header-text">Увійти</a>
                        }
                    </div>
                </header>
                <div className="line"></div>
            </div>
        </div>
    );
}