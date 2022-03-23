import { CartSidebar } from "@components/cart";
import { Sidebar } from "@components/ui";
import { useUI } from "@components/ui/context";
import { FunctionComponent } from "react";
import Footer from "../Footer";
import Navbar from "../Navbar";
import styles from "./Layout.module.css";

const Layout: FunctionComponent = ({ children }) => {
  const { isSidebarOpen, closeSidebar } = useUI();
  return (
    <div className={styles.root}>
      <Navbar />
      <Sidebar onClose={closeSidebar} isOpen={isSidebarOpen}>
        <CartSidebar />
      </Sidebar>
      <main className="fit">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
