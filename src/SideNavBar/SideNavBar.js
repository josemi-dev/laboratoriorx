import React, { useState } from "react";
import "./SideNavBar.css";

const SideNavBar = () => {
    const [isExpended, setExpendedState] = useState(false);
    const menuItems = [
        {
            text: "Principal"

        },
        {
            text: "Pacientes"

        },
        {
            text: "Medicos"

        },
        {
            text: "Tecnicos"

        },
        {
            text: "Equipos"

        }
    ]
    return (
        <div className="nav-upper">
            <div className={isExpended ? "side-nav-container" : "side-nav-container side-nav-container-NX"}>
                <div className="nav-heading">
                    {isExpended && (<div className="nav-brand">
                        <img src="public\icons\rx.svg" alt="nav brand"></img>
                        <h2>Laboratorio RX</h2>
                    </div>)}
                    <button className={isExpended ? "RX RX-in" : "RX RX-out"}
                        onClick={() => setExpendedState(!isExpended)}
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
                <div className="nav-menu">
                    {menuItems.map(({ text, icon }) => (
                        <a href="#" className={isExpended ? "menu-item" : "menu-item menu-item-NX"}>
                            <img src={icon} alt="" srcSet="" />
                            {isExpended && <p>{text}</p>}
                            {isExpended && <div className="tooltip">{text}</div>}
                        </a>
                    ))}
                </div>
                <div className="nav-footer">
                    <div className="nav-details">
                        <img src="public\icons\rx.svg" alt="" srcSet=""></img>
                        <div className="nav-footer-info">
                            <p className="nav-footer-user-name"> RX </p>
                            <p className="nav-footer-user-position">Lab</p>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SideNavBar
