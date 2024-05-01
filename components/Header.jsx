import React, { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./stylesheets/Header.module.css";
import HeaderIconSvg from "./HeaderIconSvg";
import { useRouter } from "next/router";
import Search from "./Search";

const SIZE_SCREEN_LIMIT = 800;

const Header = ({ screenWidth }) => {
  const [selected, setSelected] = useState(null);
  const [searchText, setSearchText] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [showSearchBarre, setShowSearchBarre] = useState(false);
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
  useEffect(() => {
    if (screenWidth > SIZE_SCREEN_LIMIT) {
      setSearchText("");
      setShowSearch(false);
      setShowSearchBarre(false);
    }
  }, [screenWidth]);

  return (
    <>
      <header className={styles.header}>
        <div className={styles.header_content}>
          <div className={styles.logo}>
            <Link href="/">Inaobi</Link>
          </div>
          <nav className={styles.nav}>
            <ul>
              {!showSearchBarre ? (
                <>
                  <NavItem isSelected={selected === 1} href="/" name="home" />
                  <NavItem
                    isSelected={selected === 2}
                    href="/follow"
                    name="follow"
                  />
                  <NavItem
                    isSelected={selected === 3}
                    href="/forum"
                    name="forum"
                  />
                  <NavItem
                    isSelected={selected === 4}
                    href="/space"
                    name="espace"
                  />
                  <NavItem
                    isSelected={selected === 5}
                    href="/vote"
                    name="vote"
                  />
                  <NavItem
                    isSelected={selected === 6}
                    href="/notice"
                    name="notice"
                  />
                  <li
                    className={
                      screenWidth < SIZE_SCREEN_LIMIT && styles.redux_search
                    }
                  >
                    {screenWidth < SIZE_SCREEN_LIMIT ? (
                      <div
                        onClick={() => {
                          setShowSearchBarre(true);
                        }}
                      >
                        <HeaderIconSvg name="search2" />
                      </div>
                    ) : (
                      <label htmlFor="search">
                        <div className={styles.search}>
                          <HeaderIconSvg name="search" width={20} height={20} />
                          <input
                            type="text"
                            value={searchText}
                            placeholder="Recherche"
                            id="search"
                            onFocus={handleSearch}
                            onChange={handleSearch}
                          />
                        </div>
                      </label>
                    )}
                  </li>
                </>
              ) : (
                <li>
                  <div className={styles.search2}>
                    <div
                      onClick={() => {
                        setShowSearchBarre(false);
                      }}
                    >
                      <HeaderIconSvg name="close" width={20} height={20} />
                    </div>
                    <input
                      type="text"
                      value={searchText}
                      placeholder="Recherche"
                      id="search"
                      onFocus={handleSearch}
                      onChange={handleSearch}
                    />
                  </div>
                </li>
              )}

              <li>
                <Link href="/initiatives">
                  <HeaderIconSvg name="user" />
                </Link>
              </li>
              <li>
                <Link href="/publish">
                  <button className={styles.addBtn}>Publier</button>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      {showSearch ? (
        <Search
          searchText={searchText}
          setSearchText={setSearchText}
          setShowSearch={setShowSearch}
        />
      ) : null}
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

export default Header;
