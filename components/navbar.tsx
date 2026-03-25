"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, X, Phone } from "lucide-react"
import { cn } from "@/lib/utils"

const navLinks = [
  { label: "Pradžia", href: "#pradzia" },
  { label: "Apie mus", href: "#apie-mus" },
  { label: "Paslaugos", href: "#paslaugos" },
  { label: "Projektai", href: "#projektai" },
  { label: "Kontaktai", href: "#kontaktai" },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-[var(--navy)] shadow-lg py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="#pradzia" className="flex items-center gap-3 group">
          <Image
            src="/images/telsiu-logo-new.png"
            alt="Telšių Statyba"
            width={120}
            height={40}
            className="h-10 w-auto"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-white/80 hover:text-[var(--amber)] text-sm font-medium tracking-wide uppercase transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA Phone */}
        <a
          href="tel:+37065571820"
          className="hidden lg:flex items-center gap-2 bg-[var(--amber)] hover:bg-[var(--amber-dark)] text-[var(--navy-dark)] font-bold text-sm px-4 py-2.5 transition-colors duration-200"
        >
          <Phone size={14} />
          <span className="tracking-wide">(8 655) 71820</span>
        </a>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-white p-1"
          aria-label="Atidaryti meniu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-[var(--navy-dark)] border-t border-white/10">
          <nav className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-white/80 hover:text-[var(--amber)] hover:bg-white/5 text-sm font-medium tracking-wide uppercase py-3 px-2 transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <a
              href="tel:+37065571820"
              className="mt-3 flex items-center gap-2 bg-[var(--amber)] text-[var(--navy-dark)] font-bold text-sm px-4 py-3 justify-center"
            >
              <Phone size={14} />
              (8 655) 71820
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
