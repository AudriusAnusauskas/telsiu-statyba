import { CheckCircle2 } from "lucide-react"
import Image from "next/image"

const values = [
  {
    title: "Atkaklumas",
    description: "Mes atkakliai siekiame užsibrėžtų tikslų ir nepasiduodame sudėtingose situacijose.",
  },
  {
    title: "Kokybė",
    description: "Visada siekiame tik geriausių rezultatų ir aukščiausių standartų kiekviename projekte.",
  },
  {
    title: "Sąžiningumas",
    description: "Sąžiningu darbu siekiame patenkinti klientų, darbuotojų ir partnerių interesus.",
  },
  {
    title: "Atsakomybė",
    description: "Visada vykdome savo įsipareigojimus – laiku, kokybiškai ir skaidriai.",
  },
]

export function AboutSection() {
  return (
    <section id="apie-mus" className="bg-[var(--navy-dark)] py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image collage */}
          <div className="relative">
            <div className="aspect-[4/5] relative">
              <Image
                src="/images/about-main.jpg"
                alt="Telšių Statyba statybų darbai"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
              {/* Overlay card */}
              <div className="absolute -bottom-6 -right-6 bg-[var(--amber)] p-6 w-48">
                <div
                  className="text-[var(--navy-dark)] font-black text-4xl leading-none mb-1"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  30+
                </div>
                <div className="text-[var(--navy-dark)]/70 text-xs font-bold uppercase tracking-widest">
                  Metų patirtis
                </div>
              </div>
            </div>
            {/* Accent line */}
            <div className="absolute -left-6 top-12 bottom-12 w-1 bg-[var(--amber)]/30" />
          </div>

          {/* Right: Content */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-0.5 bg-[var(--amber)]" />
              <span className="text-[var(--amber)] text-xs font-bold tracking-[0.3em] uppercase">
                Apie mus
              </span>
            </div>

            <h2
              className="text-white font-black leading-none mb-6 text-balance"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.8rem, 3.5vw, 3rem)",
                letterSpacing: "-0.02em",
              }}
            >
              GENERALINIS RANGOVAS
              <br />
              <span className="text-[var(--amber)]">VISOJE LIETUVOJE</span>
            </h2>

            <p className="text-white/70 leading-relaxed mb-4 text-sm">
              UAB „Telšių Statyba" vykdo gyvenamosios ir negyvenamosios, visuomeninės bei
              kitos paskirties pastatų statybą, kapitalinį remontą, renovaciją ir kosmetinį
              atnaujinimą.
            </p>
            <p className="text-white/70 leading-relaxed mb-8 text-sm">
              Taip pat teikiame pastatų projektavimo, teritorijų aplinkos tvarkymo, sąmatų
              sudarymo ir techninės priežiūros paslaugas. Mūsų tikslas – teikti kokybiškas
              statybų generalinės rangos paslaugas ir garantuoti teikiamų paslaugų kokybę
              visoje Lietuvoje.
            </p>

            {/* Mission / Vision */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              <div className="border border-white/10 p-5">
                <div className="text-[var(--amber)] text-xs font-bold tracking-widest uppercase mb-2">
                  Vizija
                </div>
                <p className="text-white/60 text-xs leading-relaxed">
                  Nuolatinis augimas ir įvairiapusis tobulėjimas ne tik Lietuvos, bet ir
                  užsienio šalių rinkose – tapti sėkmingiausių Lietuvos statybos bendrovių
                  trejetuke.
                </p>
              </div>
              <div className="border border-white/10 p-5">
                <div className="text-[var(--amber)] text-xs font-bold tracking-widest uppercase mb-2">
                  Misija
                </div>
                <p className="text-white/60 text-xs leading-relaxed">
                  Įgyvendinti visus klientų norus ir reikalavimus teikiant aukščiausio lygio
                  paslaugas. Mes tikime, kad viskas yra įmanoma.
                </p>
              </div>
            </div>

            {/* Values */}
            <div className="space-y-3">
              <div className="text-white/40 text-xs font-bold tracking-widest uppercase mb-4">
                Mūsų vertybės
              </div>
              {values.map((v) => (
                <div key={v.title} className="flex items-start gap-3">
                  <CheckCircle2
                    size={16}
                    className="text-[var(--amber)] flex-shrink-0 mt-0.5"
                  />
                  <div>
                    <span className="text-white font-semibold text-sm">{v.title} — </span>
                    <span className="text-white/55 text-sm">{v.description}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Documents / certifications band */}
        <div className="mt-20 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6 px-8 py-6">
          <div>
            <div className="text-white font-bold text-sm mb-1" style={{ fontFamily: "var(--font-display)" }}>
              Visi veiklos dokumentai ir licencijos
            </div>
            <div className="text-white/50 text-xs">
              Statybos darbų atlikimo licencija · ISO kokybės standartai · Darbų sauga
            </div>
          </div>
          <a
            href="#kontaktai"
            className="flex-shrink-0 bg-[var(--amber)] hover:bg-[var(--amber-dark)] text-[var(--navy-dark)] font-bold text-xs px-6 py-3 uppercase tracking-widest transition-colors"
          >
            Susisiekite su mumis
          </a>
        </div>
      </div>
    </section>
  )
}
