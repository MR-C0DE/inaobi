import React, { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./stylesheets/NavigationBar.module.css";
import HeaderIconSvg from "../HeaderIconSvg";
import { useRouter } from "next/router";

const NavigationBar = () => {
  const [selected, setSelected] = useState(null);
  const [searchText, setSearchText] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const router = useRouter();
  const { pathname } = router;

  const handleSearch = (event) => {
    setShowSearch(true);
    setSearchText(event.target.value);
  };

  useEffect(() => {
    switch (pathname) {
      case "/":
        setSelected(1);
        break;
      case "/follow":
        setSelected(2);
        break;
      case "/forum":
        setSelected(3);
        break;
      case "/space":
        setSelected(4);
        break;
      case "/vote":
        setSelected(5);
        break;
      case "/notice":
        setSelected(6);
        break;
      default:
        setSelected(null);
        break;
    }
  }, [pathname]);


  return (
    <>
      <div className={styles.NavigationBar}>
        <div className={styles.NavigationBar_content}>
          <nav className={styles.nav}>
            <ul>
              <NavItem isSelected={selected === 1} href="/" name="home" />
              <NavItem
                isSelected={selected === 2}
                href="/follow"
                name="follow"
              />
              <NavItem isSelected={selected === 3} href="/forum" name="forum" />
              <NavItem
                isSelected={selected === 4}
                href="/space"
                name="espace"
              />
              <NavItem isSelected={selected === 5} href="/vote" name="vote" />
              <NavItem
                isSelected={selected === 6}
                href="/notice"
                name="notice"
              />
            </ul>
          </nav>
        </div>
      </div>
      
    </>
  );
};

const NavItem = ({ isSelected, href, name }) => {
  return (
    <li className={isSelected ? styles.selected : "nst"}>
      <Link href={href}>
        <HeaderIconSvg selected={isSelected} name={name} />
      </Link>
    </li>
  );
};

export default NavigationBar;
