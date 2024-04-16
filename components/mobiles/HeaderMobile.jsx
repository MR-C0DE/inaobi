import React, { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./stylesheets/Header.module.css";
import HeaderIconSvg from "../HeaderIconSvg";
import { useRouter } from "next/router";
import Search from "../Search";

const HeaderMobile = () => {
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
      <header className={styles.header}>
       
          <nav className={styles.nav}>
            <ul>
              <li>
                <Link href="/initiatives">
                  <HeaderIconSvg name="user" />
                </Link>
              </li>
              <li>
                <label htmlFor="search">
                  <div className={styles.search}>
                    <HeaderIconSvg name="search" width={20} height={20} />
                    <input
                      type="text"
                      placeholder="Recherche"
                      id="search"
                      onChange={handleSearch}
                    />
                  </div>
                </label>
              </li>
              <li>
                <Link href="/map">
                  <button className={styles.addBtn}>
                    Publier
                  </button>
                </Link>
              </li>
            </ul>
          </nav>
       
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

export default HeaderMobile;
