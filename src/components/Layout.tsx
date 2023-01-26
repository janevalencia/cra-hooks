import React, { ReactNode } from "react";
import "../styles/layout.css";
import Navbar from "./Navbar";

function Layout({ children }: { children: ReactNode }) {
    return (
        <div className="container">
            <Navbar 
                githubURL="https://github.com/janevalencia"
                linkedinUrl="https://www.linkedin.com/in/janevalencia/"
                mediumUrl="https://medium.com/@janevalencia"
            />
            <main className="main_content">
                {children}
            </main>
        </div>
    );
}

export default Layout;
