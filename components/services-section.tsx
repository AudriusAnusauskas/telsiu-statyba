import { Building2, HardHat, PenSquare, Wrench, TreePine, ClipboardList } from "lucide-react"

const services = [
  {
    number: "01",
    icon: PenSquare,
    title: "Projektavimo darbai",
    description:
      "Teikiame profesionalias architektūrinio ir konstrukcinio projektavimo paslaugas. Rengiame statybos, rekonstrukcijos bei kapitalinio remonto projektus, sąmatas ir techninę dokumentaciją.",
    items: ["Architektūrinis projektavimas", "Konstrukcijų projektavimas", "Sąmatų sudarymas", "Techninė dokumentacija"],
  },
  {
    number: "02",
    icon: Building2,
    title: "Bendrieji statybos darbai",
    description:
      "Vykdome visų rūšių statybos darbus: naujų pastatų statybą, kapitalinį remontą, renovaciją ir kosmetinį atnaujinimą. Dirbame su gyvenamaisiais, komerciniais ir pramoniniais objektais.",
    items: ["Naujų pastatų statyba", "Kapitalinis remontas", "Renovacija", "Komerciniai objektai"],
  },
  {
    number: "03",
    icon: HardHat,
    title: "Genrangos paslaugos",
    description:
      "Kaip generalinis rangovas, koordinuojame visus statybos proceso dalyvius, užtikriname darbų kokybę, terminų laikymąsi ir saugą statybvietėje visą projekto eigą.",
    items: ["Darbų koordinavimas", "Kokybės kontrolė", "Terminų valdymas", "Statybvietės sauga"],
  },
  {
    number: "04",
    icon: Wrench,
    title: "Techninė priežiūra",
    description:
      "Teikiame statybos techninės priežiūros paslaugas – stebime statybos procesą, tikrinome medžiagų atitikimą projektui ir prižiūrime, kad darbai atitiktų normatyvinius reikalavimus.",
    items: ["Statybos priežiūra", "Medžiagų kontrolė", "Normatyvų laikymasis", "Ataskaitų rengimas"],
  },
  {
    number: "05",
    icon: TreePine,
    title: "Aplinkos tvarkymas",
    description:
      "Vykdome teritorijų ir aplinkos tvarkymo darbus: inžinerinės infrastruktūros įrengimą, aplinkotvarkos darbus ir teritorijų gerinimo projektus.",
    items: ["Inžinerinė infrastruktūra", "Aplinkotvarka", "Kelių tiesimas", "Komunaliniai tinklai"],
  },
  {
    number: "06",
    icon: ClipboardList,
    title: "Konsultacijos ir sąmatos",
    description:
      "Teikiame išsamias konsultacijas statybų klausimais, rengiame lokalines ir suvestines sąmatas, atliekame statybų kainos analizę ir padedame optimizuoti projekto biudžetą.",
    items: ["Kainos analizė", "Lokalinės sąmatos", "Biudžeto planavimas", "Ekspertinės konsultacijos"],
  },
]

export function ServicesSection() {
  return (
    <section id="paslaugos" className="bg-background py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-0.5 bg-[var(--amber)]" />
              <span className="text-[var(--amber)] text-xs font-bold tracking-[0.3em] uppercase">
                Mūsų paslaugos
              </span>
            </div>
            <h2
              className="text-foreground font-black text-balance leading-none"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2rem, 4vw, 3.5rem)",
                letterSpacing: "-0.02em",
              }}
            >
              VISAPUSIŠKI
              <br />
              STATYBŲ SPRENDIMAI
            </h2>
          </div>
          <p className="text-muted-foreground leading-relaxed max-w-sm text-sm">
            Nuo projekto koncepcijos iki galutinės pristatymo – visi statybų darbai
            vienoje vietoje su pilna atsakomybe ir garantijomis.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <div
                key={service.number}
                className="bg-background p-8 hover:bg-[var(--navy)] group transition-colors duration-300"
              >
                {/* Number + icon row */}
                <div className="flex items-start justify-between mb-6">
                  <span
                    className="text-border group-hover:text-white/20 font-black text-6xl leading-none transition-colors"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {service.number}
                  </span>
                  <div className="w-12 h-12 bg-[var(--amber)]/10 group-hover:bg-[var(--amber)] flex items-center justify-center transition-colors duration-300">
                    <Icon
                      size={22}
                      className="text-[var(--amber)] group-hover:text-[var(--navy-dark)] transition-colors duration-300"
                    />
                  </div>
                </div>

                <h3
                  className="text-foreground group-hover:text-white font-bold text-xl mb-3 transition-colors"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {service.title}
                </h3>
                <p className="text-muted-foreground group-hover:text-white/60 text-sm leading-relaxed mb-5 transition-colors">
                  {service.description}
                </p>

                <ul className="space-y-1.5">
                  {service.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 text-xs text-muted-foreground group-hover:text-white/50 transition-colors"
                    >
                      <div className="w-1 h-1 bg-[var(--amber)] flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
