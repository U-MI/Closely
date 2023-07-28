import { useState } from "react";
import user from "../../resources/user.png"

export default function Header(){
    const [isAuth, setIsAuth] = useState(false);
    return (
        <>
            <header className="header">
                    <div className="header-left">
                        <a className="header-text-logo">Closely</a>
                    </div>
                    <div className="header-right">
                        {isAuth ? 
                            <div className="account-icon">
                                <span style={{fontSize: 20}}>User</span>
                                <img src={user} width={35} height={35}></img>
                            </div> : 
                            <a className="header-text">Увійти</a>
                        }
                    </div>
                </header>
                <div className="line"></div>
        </>    
    );
}