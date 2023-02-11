import { IconButton, Link } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import React, { useEffect, useRef, useState } from "react";
import images from "../../assets";
import { Logo, Navbar, ListItem, ListContainer, NavToolBar } from "./styles";

function NavBar() {
  const ref = useRef<HTMLDivElement>(null);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const checkIfClickedOutside = (event: MouseEvent) => {
      if (
        isMenuOpen &&
        ref.current &&
        !ref.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", checkIfClickedOutside);

    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [isMenuOpen]);

  return (
    <>
      <Navbar>
        <NavToolBar>
          <Link href="/">
            <Logo src={images.houseLogo} alt="image of homestead logo"></Logo>
          </Link>

          <IconButton onClick={() => setIsMenuOpen((open) => !open)}>
            <MenuIcon />
          </IconButton>

          <ListContainer
            getContentAnchorEl={null}
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
            MenuListProps={{
              disablePadding: true,
            }}
            open={isMenuOpen}
            onClose={() => setIsMenuOpen(false)}
          >
            <ListItem>
              <Link href="/" underline="none" color="inherit">
                HOME
              </Link>
            </ListItem>
            <ListItem>
              <Link href="/Search" underline="none" color="inherit">
                SEARCH
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="/search?purpose=for-sale"
                underline="none"
                color="inherit"
              >
                BUY
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="/search?purpose=for-rent"
                underline="none"
                color="inherit"
              >
                RENT
              </Link>
            </ListItem>
          </ListContainer>
        </NavToolBar>
      </Navbar>
    </>
  );
}

export default NavBar;
