'use client';
import ThemeToggler from "./ThemeToggler"
import { useState, useEffect } from "react";
import Logo from "./Logo";
import Nav from './Nav';
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header>
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <Logo />
          <div>
            {/* Desktop Nav */}
            <Nav />
            <ThemeToggler />
            {/* Mobile Nav */}
            <div>
              <MobileNav />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header