"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import siteConfig from "../data/siteConfig";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href) =>
    href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(href + "/");

  return (
    <header className="navbar">
      <nav className="nav-inner" aria-label="Main navigation">
        <Link href="/" className="brand" aria-label="Konde Keerthi home">
          <span className="brand-badge" aria-hidden="true">
            {siteConfig.shortName}
          </span>
          <span className="brand-text">Konde Keerthi</span>
        </Link>

        <button
          type="button"
          className="nav-toggle"
          aria-expanded={open}
          aria-controls="nav-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span aria-hidden="true">{open ? "✕" : "☰"}</span>
        </button>

        <ul id="nav-menu" className={`nav-links${open ? " open" : ""}`}>
          {siteConfig.navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`nav-link${isActive(link.href) ? " active" : ""}`}
                aria-current={isActive(link.href) ? "page" : undefined}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
