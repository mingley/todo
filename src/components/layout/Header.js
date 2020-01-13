import React from "react";
import {GiBrutalHelm} from "react-icons/gi";

export const Header = () => {
const x = 1;
return (
    <header className="header" data-testid="header">
        <nav>
            <div className="logo">
                <img src="/images/logo.png" alt="todo" />
            </div>
            <div className="settings">
                <ul>
                    <li>+</li>
                    <li>
                        <GiBrutalHelm />
                    </li>
                </ul>
            </div>
        </nav>
    </header>
)
};