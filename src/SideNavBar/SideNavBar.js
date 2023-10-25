import React, { useState } from "react";
import "./SideNavBar.css";
import MaterialIcon, { colorPalette } from "material-icons-react";

const SideNavBar = () => {
  const [isExpanded, setExpandState] = useState(false);

  const menuItems = [
    {
      text: "Inicio",
      icon: "grid_on",
    },
    {
      text: "Pacientes",
      icon: "person_outline",
    },
    {
      text: "Medicos",
      icon: "person",
    },
    {
      text: "Tecnicos",
      icon: "build",
    },
    {
      text: "Equipos",
      icon: "devices",
    },
    {
      text: "Administrador",
      icon: "devices",
    },
  ];

  return (
    <div
      className={
        isExpanded
          ? "side-nav-container"
          : "side-nav-container side-nav-container-NX"
      }
    >
      <div className="nav-upper">
        <div className="nav-heading">
          {isExpanded && (
            <div className="nav-brand">
              <img src="icons/rx.svg" alt="" srcSet="" />
              <h2>Laboratorio RX</h2>
            </div>
          )}
          <button
            className={isExpanded ? "rx rx-in" : "rx rx-out"}
            onClick={() => setExpandState(!isExpanded)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
        <div className="nav-menu">
          {menuItems.map(({ text, icon }) => (
            <a
              className={isExpanded ? "menu-item" : "menu-item menu-item-NX"}
              href="#"
            >
              {icon && (
                <MaterialIcon
                  icon={icon}
                  color={colorPalette.blueGrey._200}
                  size={24}
                />
              )}
              {isExpanded && <p>{text}</p>}
            </a>
          ))}
        </div>
      </div>
      <div className="nav-footer">
        {isExpanded && (
          <div className="nav-details">
            <img
              className="nav-footer-avatar"
              src="icons/admin-avatar.svg"
              alt=""
              srcSet=""
            />
            <div className="nav-footer-info">
              <p className="nav-footer-user-name">Usuario</p>
              <p className="nav-footer-user-position">Tipo</p>
            </div>
          </div>
        )}
        <img className="logout-icon" src="icons/logout.svg" alt="" srcSet="" />
      </div>
    </div>
  );
};

export default SideNavBar;