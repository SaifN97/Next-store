import { Bag as Cart, Heart } from "@components/icons";
import Link from "next/link";
import { FunctionComponent } from "react";
import s from "./Usernav.module.css";

const Usernav: FunctionComponent = () => {
  return (
    <nav>
      <ul className={s.list}>
        <li className={s.item}>
          <Cart />
        </li>
        <li className={s.item}>
          <Link href="/wishlist">
            <a>
              <Heart />
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Usernav;
