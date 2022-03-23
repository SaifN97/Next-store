import { CartSidebar } from "@components/cart";
import { Sidebar } from "@components/ui";
import { FunctionComponent } from "react";
import Footer from "../Footer";
import Navbar from "../Navbar";
import styles from "./Layout.module.css";

const Layout: FunctionComponent = ({ children }) => {
  return (
    <div className={styles.root}>
      <Navbar />
      <Sidebar>
        <CartSidebar />
      </Sidebar>
      <main className="fit">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
