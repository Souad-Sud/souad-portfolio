"use client";
import { ReactElement, useState } from "react";
import { navLinks } from "@/data/navbar";
import Link from "next/link";
import { List, X } from "lucide-react";
import "./navigation.scss";
import { usePathname } from "next/navigation";

const NavigationBar = (): ReactElement => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className={`navigation ${isOpen ? "navigation--open" : ""}`}>
      <div
        className="navigation__burger"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {isOpen ? (
          <X size={32} color="#F99DC2" />
        ) : (
          <List size={32} color="#F99DC2" />
        )}
      </div>

      <ul className="navigation__list">
        {navLinks.map((link) => (
          <li
            key={link.path}
            className="navigation__list-item"
            onClick={() => setIsOpen(false)}
          >
            {link.external ? (
              <a
                href={link.path}
                target="_blank"
                rel="noopener noreferrer"
                className="navigation__links"
              >
                {link.name}
              </a>
            ) : (
              <Link
                href={link.path}
                className={`navigation__links ${
                  pathname === link.path ? "navigation__links--active" : ""
                }`}
              >
                {link.name}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavigationBar;
