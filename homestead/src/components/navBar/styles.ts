import {  AppBar, Menu, MenuItem, Toolbar} from "@material-ui/core";
import styled from "styled-components";


export const Navbar = styled(AppBar)`
      && {
    background-color: white;
  }
    `
export const NavToolBar = styled(Toolbar)`
      && {
    justify-content: space-between;
  }
    `
export const ListContainer = styled(Menu)`
`
export const ListItem = styled(MenuItem)`
      && {
           color: white;
      background-color: teal;
  }
    `

 export const Title = styled.div` 
  margin: 5px;
  color: white;
  `
  export const Logo = styled.img`
  margin-right: auto;
  width: 50%;

`;


  ;