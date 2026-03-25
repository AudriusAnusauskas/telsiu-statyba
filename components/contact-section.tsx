import { Phone, Mail, MapPin, Clock, Building } from "lucide-react"

const contacts = [
  {
    dept: "Bendrieji kontaktai",
    icon: Phone,
    lines: ["(8 655) 71820", "(8 652) 08468"],
    type: "phone",
  },
  {
    dept: "El. paštas",
    icon: Mail,
    lines: ["info@telsiustatyba.lt"],
    type: "email",
  },
  {
    dept: "Buhalterija",
    icon: Building,
    lines: ["(8 444) 54754"],
    type: "phone",
  },
  {
    dept: "Gamybos skyrius",
    icon: Building,
    lines: ["(8 683) 04224", "(8 699) 20356"],
    type: "phone",
  },
]

export function ContactSection() {
  return (
    <section id="kontaktai" className="bg-[var(--navy)] py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left: info */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-0.5 bg-[var(--amber)]" />
              <span className="text-[var(--amber)] text-xs font-bold tracking-[0.3em] uppercase">
                Susisiekite
              </span>
            </div>

            <h2
              className="text-white font-black leading-none mb-8 text-balance"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2rem, 4vw, 3.2rem)",
                letterSpacing: "-0.02em",
              }}
            >
              PRADĖKITE
              <br />
              <span className="text-[var(--amber)]">SAVO PROJEKTĄ</span>
              <br />
              SU MUMIS
            </h2>

            {/* Contact cards */}
            <div className="grid sm:grid-cols-2 gap-3 mb-8">
              {contacts.map((c) => {
                const Icon = c.icon
                return (
                  <div key={c.dept} className="bg-white/5 hover:bg-white/10 transition-colors p-5">
                    <div className="flex items-center gap-2 mb-3">
                      <Icon size={14} className="text-[var(--amber)]" />
                      <span className="text-white/50 text-xs font-bold uppercase tracking-widest">
                        {c.dept}
                      </span>
                    </div>
                    {c.lines.map((line) => (
                      <div key={line}>
                        {c.type === "phone" ? (
                          <a
                            href={`tel:${line.replace(/\s/g, "").replace(/[()]/g, "")}`}
                            className="text-white font-semibold text-sm hover:text-[var(--amber)] transition-colors block"
                          >
                            {line}
                          </a>
                        ) : (
                          <a
                            href={`mailto:${line}`}
                            className="text-white font-semibold text-sm hover:text-[var(--amber)] transition-colors block"
                          >
                            {line}
                          </a>
                        )}
                      </div>
                    ))}
                  </div>
                )
              })}
            </div>

            {/* Address + hours */}
            <div className="space-y-4 border-t border-white/10 pt-6">
              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-[var(--amber)] flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-white/50 text-xs font-bold uppercase tracking-widest mb-1">
                    Adresas
                  </div>
                  <div className="text-white text-sm">
                    Šiaulių pl. 10, Telšių m., Telšių sen.,
                    <br />
                    Telšių r. sav., LT-87101
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock size={16} className="text-[var(--amber)] flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-white/50 text-xs font-bold uppercase tracking-widest mb-1">
                    Darbo laikas
                  </div>
                  <div className="text-white text-sm">
                    Pirmadienį – Penktadienį: 07:00 – 16:00
                    <br />
                    <span className="text-white/50 text-xs">Pietų metas: 12:00 – 13:00</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="bg-white/5 p-8">
            <h3
              className="text-white font-bold text-xl mb-6"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Parašykite mums
            </h3>
            <form className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-white/50 text-xs font-bold uppercase tracking-widest block mb-2">
                    Vardas *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full bg-white/10 border border-white/15 text-white placeholder:text-white/25 text-sm px-4 py-3 focus:outline-none focus:border-[var(--amber)] transition-colors"
                    placeholder="Jūsų vardas"
                  />
                </div>
                <div>
                  <label className="text-white/50 text-xs font-bold uppercase tracking-widest block mb-2">
                    El. paštas *
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full bg-white/10 border border-white/15 text-white placeholder:text-white/25 text-sm px-4 py-3 focus:outline-none focus:border-[var(--amber)] transition-colors"
                    placeholder="el.pastas@example.com"
                  />
                </div>
              </div>
              <div>
                <label className="text-white/50 text-xs font-bold uppercase tracking-widest block mb-2">
                  Telefono numeris
                </label>
                <input
                  type="tel"
                  className="w-full bg-white/10 border border-white/15 text-white placeholder:text-white/25 text-sm px-4 py-3 focus:outline-none focus:border-[var(--red)] transition-colors"
                  placeholder="+370 XXX XXXXX"
                />
              </div>
              <div>
                <label className="text-white/50 text-xs font-bold uppercase tracking-widest block mb-2">
                  Paslaugos tipas
                </label>
                <select className="w-full bg-white/10 border border-white/15 text-white/70 text-sm px-4 py-3 focus:outline-none focus:border-[var(--red)] transition-colors appearance-none">
                  <option value="" className="bg-[var(--navy)]">Pasirinkite paslaugą</option>
                  <option value="projektavimas" className="bg-[var(--navy)]">Projektavimo darbai</option>
                  <option value="statyba" className="bg-[var(--navy)]">Bendrieji statybos darbai</option>
                  <option value="genranga" className="bg-[var(--navy)]">Genrangos paslaugos</option>
                  <option value="prieziura" className="bg-[var(--navy)]">Techninė priežiūra</option>
                  <option value="kita" className="bg-[var(--navy)]">Kita</option>
                </select>
              </div>
              <div>
                <label className="text-white/50 text-xs font-bold uppercase tracking-widest block mb-2">
                  Žinutė *
                </label>
                <textarea
                  required
                  rows={5}
                  className="w-full bg-white/10 border border-white/15 text-white placeholder:text-white/25 text-sm px-4 py-3 focus:outline-none focus:border-[var(--amber)] transition-colors resize-none"
                  placeholder="Aprašykite savo projektą ar užklausą..."
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[var(--amber)] hover:bg-[var(--amber-dark)] text-[var(--navy-dark)] font-bold text-sm py-4 uppercase tracking-widest transition-colors duration-200"
              >
                Siųsti užklausą
              </button>
              <p className="text-white/30 text-xs text-center">
                Atsakysime per 1-2 darbo dienas
              </p>
            </form>
          </div>
        </div>

        {/* Rekvizitai band */}
        <div className="mt-16 border-t border-white/10 pt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div>
            <div className="text-white/40 text-[10px] font-bold uppercase tracking-widest mb-1">Pavadinimas</div>
            <div className="text-white text-sm font-medium">UAB „Telšių statyba"</div>
          </div>
          <div>
            <div className="text-white/40 text-[10px] font-bold uppercase tracking-widest mb-1">Įmonės kodas</div>
            <div className="text-white text-sm font-medium">180236330</div>
          </div>
          <div>
            <div className="text-white/40 text-[10px] font-bold uppercase tracking-widest mb-1">PVM kodas</div>
            <div className="text-white text-sm font-medium">LT802363314</div>
          </div>
          <div>
            <div className="text-white/40 text-[10px] font-bold uppercase tracking-widest mb-1">Direktorius</div>
            <div className="text-white text-sm font-medium">Vladimiras Misiūra</div>
          </div>
        </div>
      </div>
    </section>
  )
}
