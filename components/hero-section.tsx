"use client"

import { useEffect, useState } from "react"
import { ArrowRight, ChevronDown } from "lucide-react"

export function HeroSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section
      id="pradzia"
      className="relative min-h-screen flex items-center overflow-hidden bg-[var(--navy-dark)]"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/hero-bg-telsiai.jpg')" }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[var(--navy-dark)]/70" />

      {/* Amber accent bar left */}
      <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[var(--amber)]" />

      {/* Content */}
      <div
        className={`relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-20 transition-all duration-1000 ${
          mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-0.5 bg-[var(--amber)]" />
            <span className="text-[var(--amber)] text-xs font-bold tracking-[0.3em] uppercase">
              Generalinis Rangovas · Lietuva
            </span>
          </div>

          {/* Headline */}
          <h1
            className="text-white font-black leading-none mb-4 text-balance"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.2rem, 5.5vw, 4.8rem)",
              letterSpacing: "-0.02em",
            }}
          >
            OBJEKTAI
            <br />
            <span className="text-[var(--amber)]">PALIEKANTYS</span>
            <br />
            PĖDSAKĄ
            <br />
            ISTORIJOJE
          </h1>

          {/* Slogan */}
          <p
            className="text-white/90 font-semibold text-xl md:text-2xl mb-5 text-balance"
            style={{ fontFamily: "var(--font-display)", letterSpacing: "0.01em" }}
          >
            Patikimumas. Kokybe. Rezultatas.
          </p>

          {/* Description */}
          <p className="text-white/60 text-base leading-relaxed mb-10 max-w-xl">
            UAB Telsiu Statyba - generalinis rangovas su daugiau nei 30 metu patirtimi.
            Realizuojame gyvenamuosius, komercinius ir pramoninius projektus visoje Lietuvoje.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <a
              href="#kontaktai"
              className="inline-flex items-center gap-2 bg-[var(--amber)] hover:bg-[var(--amber-dark)] text-[var(--navy-dark)] font-bold text-sm px-8 py-4 tracking-wide uppercase transition-colors duration-200"
            >
              Gauti pasiulyma
              <ArrowRight size={16} />
            </a>
            <a
              href="#projektai"
              className="inline-flex items-center gap-2 border-2 border-white/30 hover:border-[var(--amber)] text-white hover:text-[var(--amber)] font-bold text-sm px-8 py-4 tracking-wide uppercase transition-colors duration-200"
            >
              Musu projektai
              <ArrowRight size={16} />
            </a>
          </div>
        </div>

        {/* Stats bar */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-0 border border-white/10 divide-x divide-white/10">
          {[
            { number: "30+", label: "Metų patirtis" },
            { number: "100+", label: "Įvykdytų projektų" },
            { number: "50+", label: "Specialistų komanda" },
            { number: "10+", label: "Miestų Lietuvoje" },
          ].map((stat) => (
            <div key={stat.label} className="px-6 py-5 bg-white/5 hover:bg-white/10 transition-colors">
              <div
                className="text-[var(--amber)] font-black text-3xl mb-1"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {stat.number}
              </div>
              <div className="text-white/60 text-xs font-medium tracking-wide uppercase">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#paslaugos"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/40 hover:text-[var(--amber)] transition-colors"
        aria-label="Slinkti žemyn"
      >
        <ChevronDown size={28} />
      </a>
    </section>
  )
}
