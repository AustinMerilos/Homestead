import { AppBar, Menu, MenuItem, Toolbar } from "@material-ui/core";
import styled from "styled-components";
import { colors, radius, shadow, transition } from "../../theme";

export const Navbar = styled(AppBar)`
  && {
    background-color: rgba(255, 255, 255, 0.85);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    box-shadow: ${shadow.soft};
    position: sticky;
    top: 0;
    z-index: 10;
  }
`;
export const NavToolBar = styled(Toolbar)`
  && {
    justify-content: space-between;
  }
`;
export const ListContainer = styled(Menu)`
  .MuiPaper-root {
    border-radius: ${radius.md};
    overflow: hidden;
    box-shadow: ${shadow.cardHover};
  }
`;
export const ListItem = styled(MenuItem)`
  && {
    color: ${colors.white};
    background-color: ${colors.tealDark};
    font-weight: 600;
    letter-spacing: 0.04em;
    padding: 14px 28px;
    transition: ${transition.base};

    &:hover {
      background-color: ${colors.teal};
      padding-left: 34px;
    }
  }
`;

export const Title = styled.div`
  margin: 5px;
  color: white;
`;
export const Logo = styled.img`
  margin-right: auto;
  width: 50%;
  transition: ${transition.base};

  &:hover {
    transform: scale(1.04);
  }
`;
