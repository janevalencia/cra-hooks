import React, { useContext } from "react";
import "../styles/navbar.css";
import {
    AiFillGithub,
    AiFillInstagram,
    AiFillTwitterSquare,
    AiFillMediumSquare,
    AiFillLinkedin,
} from "react-icons/ai";
import ThemeContext from "../context/ThemeContext";

const defaultNavProps = {
    year: new Date().getFullYear(),
    author: "Jane Valencia",
};

type NavbarProps = {
    githubURL?: string;
    linkedinUrl?: string;
    twitterUrl?: string;
    mediumUrl?: string;
    instagramUrl?: string;
} & typeof defaultNavProps;

function Navbar({
    githubURL,
    linkedinUrl,
    twitterUrl,
    mediumUrl,
    instagramUrl,
    year,
    author,
}: NavbarProps) {
    const theme = useContext(ThemeContext);

    return (
        <header className="nav">
            {/* Title */}
            <h2 className="nav__title">
                <a href="/">React Hooks</a>
            </h2>
            {/* Main Menus */}
            <nav className="nav__menus">
                <ul>
                    <li>
                        <a href="/use-state">useState</a>
                    </li>
                    <li>
                        <a href="/use-reducer">useReducer</a>
                    </li>
                    <li>
                        <a href="/use-ref">useRef</a>
                    </li>
                    <li>
                        <a href="/use-effect">useEffect</a>
                    </li>
                    <li>
                        <a href="/use-layoutEffect">useLayoutEffect</a>
                    </li>
                    <li>
                        <a href="/use-imperativeHandle">useImperativeHandle</a>
                    </li>
                    <li>
                        <a href="/use-context">useContext</a>
                    </li>
                    <li>
                        <a href="/use-memo">useMemo</a>
                    </li>
                    <li>
                        <a href="/use-callback">useCallback</a>
                    </li>
                    <li>
                        <a
                            href="https://github.com/janevalencia/cra-hooks"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <AiFillGithub size={16} fill="#833AB4" /> Github Repo
                        </a>
                    </li>
                </ul>
            </nav>
            <div className="nav__footer">
                <p>
                    Copyright &copy; {year},
                </p>
                <p>{author}.</p>
                <p>All rights reserved.</p>
                <div className="nav_socials">
                    {githubURL && (
                        <a href={githubURL}>
                            <AiFillGithub size={30} fill="#833AB4" />
                        </a>
                    )}
                    {linkedinUrl && (
                        <a href={linkedinUrl}>
                            <AiFillLinkedin size={30} fill="#405DE6" />
                        </a>
                    )}
                    {mediumUrl && (
                        <a href={mediumUrl}>
                            <AiFillMediumSquare size={30} fill={theme.isDarkMode ? "white" : "black"} />
                        </a>
                    )}
                    {instagramUrl && (
                        <a href={instagramUrl}>
                            <AiFillInstagram size={30} fill="#C13584" />
                        </a>
                    )}
                    {twitterUrl && (
                        <a href={twitterUrl}>
                            <AiFillTwitterSquare size={30} fill="#405DE6" />
                        </a>
                    )}
                </div>
            </div>
        </header>
    );
}
Navbar.defaultProps = defaultNavProps;

export default Navbar;
