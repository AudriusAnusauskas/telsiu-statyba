import Link from "next/link"

const footerLinks = [
  {
    heading: "Navigacija",
    links: [
      { label: "Pradžia", href: "#pradzia" },
      { label: "Apie mus", href: "#apie-mus" },
      { label: "Paslaugos", href: "#paslaugos" },
      { label: "Projektai", href: "#projektai" },
      { label: "Kontaktai", href: "#kontaktai" },
    ],
  },
  {
    heading: "Paslaugos",
    links: [
      { label: "Projektavimo darbai", href: "#paslaugos" },
      { label: "Bendrieji statybos darbai", href: "#paslaugos" },
      { label: "Genrangos paslaugos", href: "#paslaugos" },
      { label: "Techninė priežiūra", href: "#paslaugos" },
      { label: "Aplinkos tvarkymas", href: "#paslaugos" },
    ],
  },
  {
    heading: "Kontaktai",
    links: [
      { label: "(8 655) 71820", href: "tel:+37065571820" },
      { label: "(8 652) 08468", href: "tel:+37065208468" },
      { label: "info@telsiustatyba.lt", href: "mailto:info@telsiustatyba.lt" },
      { label: "Šiaulių pl. 10, Telšiai", href: "#kontaktai" },
    ],
  },
]

export function Footer() {
  return (
    <footer className="bg-[var(--navy-dark)] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <Link href="#pradzia" className="flex items-center gap-3 mb-5">
              <img src="/images/telsiu-logo-new.png" alt="Telšių Statyba" className="h-10 w-auto" />
            </Link>
            <p className="text-white/40 text-xs leading-relaxed mb-5">
              Statybų veiklos generalinis rangovas, vykdantis projektus visoje Lietuvoje
              nuo 1993 metų. Kokybė, patikimumas, profesionalumas.
            </p>
            <div className="flex items-center gap-2 text-[var(--amber)] text-xs font-bold uppercase tracking-widest">
              <div className="w-4 h-0.5 bg-[var(--amber)]" />
              Lietuvos statybos lyderis
            </div>
          </div>

          {/* Links */}
          {footerLinks.map((group) => (
            <div key={group.heading}>
              <div className="text-white/40 text-[10px] font-bold uppercase tracking-widest mb-4">
                {group.heading}
              </div>
              <ul className="space-y-2.5">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-white/60 hover:text-[var(--amber)] text-sm transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-white/30 text-xs">
            © {new Date().getFullYear()} UAB „Telšių Statyba". Visos teisės saugomos.
          </div>
          <div className="text-white/20 text-xs">
            Įmonės kodas: 180236330 · LT-87101 Telšiai
          </div>
        </div>
      </div>
    </footer>
  )
}
