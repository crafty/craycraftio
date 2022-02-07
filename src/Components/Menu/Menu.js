import React from "react";
import { scroller } from "react-scroll";
import { MenuContainer, MenuItem, Icon } from "./styles";

const Menu = (props) => {
  const sections = ["about", "projects", "contact"];

  const scrollTo = (section) => {
    props.toggleMenu();
    scroller.scrollTo(section, {
      duration: 900,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };

  return (
    <MenuContainer active={props.active}>
      {/* {sections.map(section => (
        <MenuItem
          key={section}
          active={props.active}
          offSide={section === 'projects' ? '-100vw' : '100vw'}
          onClick={() => scrollTo(section)}
        >
          {section.toUpperCase()}
        </MenuItem>
      ))} */}
      {/* <a
        href="https://github.com/craycraftdan"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon className="fab fa-github fa-4x"></Icon>
      </a> */}
      <MenuItem key={"GITHUB"} active={props.active}>
        <a
          href="https://github.com/crafty"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "inherit", textDecoration: "none" }}
        >
          GITHUB
        </a>
      </MenuItem>
      <MenuItem key={"GITHUB"} active={props.active}>
        <a
          href="https://www.linkedin.com/in/craycraftdan/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "inherit", textDecoration: "none" }}
        >
          LINKEDIN
        </a>
      </MenuItem>
      <MenuItem key={"GITHUB"} active={props.active}>
        <a
          href="https://codepen.io/craycraftdan/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "inherit", textDecoration: "none" }}
        >
          CODEPEN
        </a>
      </MenuItem>
    </MenuContainer>
  );
};

export default Menu;
