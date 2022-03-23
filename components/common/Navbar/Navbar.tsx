import { Container } from "@components/ui";
import Link from "next/link";
import { FunctionComponent } from "react";
import Usernav from "../Usernav";
import s from "./Navbar.module.css";

const Navbar: FunctionComponent = () => {
  return (
    <Container>
      <div className={s.root}>
        <Link href="/">
          <a className={s.logo}>Next_Store</a>
        </Link>
        <nav className="ml-6 space-x-6">
          <Link href="/">
            <a className={s.link}>All</a>
          </Link>
          <Link href="/">
            <a className={s.link}>Clothes</a>
          </Link>
          <Link href="/">
            <a className={s.link}>Accessories</a>
          </Link>
          <Link href="/">
            <a className={s.link}>Shoes</a>
          </Link>
        </nav>
        <div className="flex flex-1 justify-end space-x-8">
          <Usernav />
        </div>
      </div>
    </Container>
  );
};

export default Navbar;
