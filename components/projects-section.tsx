"use client"

// Projects portfolio component - rebuild v2
import { useState } from "react"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

const categories = ["Visi", "Prekybos centrai", "Pramoniniai", "Gyvenamieji", "Visuomeniniai"]

const projects = [
  {
    id: 1,
    title: "Prekybos centras Telsiai",
    location: "Respublikos g., Telsiai",
    category: "Prekybos centrai",
    status: "Vykdomi darbai",
    image: "/images/project-pc-telsiai.jpg",
    description: "Naujo prekybos centro statyba Telsiu miesto centre.",
  },
  {
    id: 2,
    title: "Verslo centras Bruklinas",
    location: "Pramonės g., Siauliai",
    category: "Prekybos centrai",
    status: "Ivykdyta",
    image: "/images/project-bruklinas.jpg",
    description: "Prekybos ir verslo centro statyba Siauliuose.",
  },
  {
    id: 3,
    title: "Bigso gamykla Ventoje",
    location: "Statybiniu g., Venta",
    category: "Pramoniniai",
    status: "Ivykdyta",
    image: "/images/project-bigso.jpg",
    description: "Gamyklos statyba Ventoje.",
  },
  {
    id: 4,
    title: "PC Rimi Dercekliuose",
    location: "Nidos g., Dercekliai",
    category: "Prekybos centrai",
    status: "Ivykdyta",
    image: "/images/project-rimi.jpg",
    description: "Prekybos centro statybos darbai Dercekliuose.",
  },
  {
    id: 5,
    title: "Daugiabutis Telsiai",
    location: "Sviesos g., Telsiai",
    category: "Gyvenamieji",
    status: "Ivykdyta",
    image: "/images/project-daugiabutis.jpg",
    description: "Daugiabucio namo renovacija.",
  },
  {
    id: 6,
    title: "Akademines gimnazija",
    location: "Laizuvos g., Akmene",
    category: "Visuomeniniai",
    status: "Ivykdyta",
    image: "/images/project-gimnazija.jpg",
    description: "Gimnazijos pastato renovacija.",
  },
  {
    id: 7,
    title: "PC Norfa tinklas",
    location: "Taurage, Kaunas, Vilnius, Mazekiai",
    category: "Prekybos centrai",
    status: "Ivykdyta",
    image: "/images/project-norfa.jpg",
    description: "Prekybos centru statyba keliuose Lietuvos miestuose.",
  },
  {
    id: 8,
    title: "Kino teatras Vaiva",
    location: "H. Manto g., Klaipeda",
    category: "Visuomeniniai",
    status: "Ivykdyta",
    image: "/images/project-vaiva.jpg",
    description: "Kino teatro rekonstrukcija ir modernizavimas.",
  },
]

export function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState("Visi")

  const filteredProjects =
    activeCategory === "Visi" ? projects : projects.filter((p) => p.category === activeCategory)

  return (
    <section id="projektai" className="bg-background py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-0.5 bg-[var(--amber)]" />
              <span className="text-[var(--amber)] text-xs font-bold tracking-[0.3em] uppercase">
                Musu projektai
              </span>
            </div>

            <h2
              className="text-foreground font-black leading-none text-balance"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.8rem, 3.5vw, 3rem)",
                letterSpacing: "-0.02em",
              }}
            >
              STATYTOS STRUKTUROS
              <br />
              <span className="text-[var(--amber)]">PORTFELIS</span>
            </h2>
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  "text-xs font-bold px-4 py-2 uppercase tracking-widest transition-colors duration-200",
                  activeCategory === cat
                    ? "bg-[var(--amber)] text-[var(--navy-dark)]"
                    : "bg-muted text-muted-foreground hover:bg-[var(--navy)] hover:text-white"
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[300px]">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative overflow-hidden cursor-pointer"
            >
              <div className="absolute inset-0">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="absolute inset-0 bg-[var(--navy-dark)]/0 group-hover:bg-[var(--navy-dark)]/75 transition-colors duration-300" />

              <div
                className={cn(
                  "absolute top-3 left-3 text-[10px] font-bold tracking-widest uppercase px-2 py-1",
                  project.status === "Vykdomi darbai"
                    ? "bg-[var(--amber)] text-[var(--navy-dark)]"
                    : "bg-white/20 text-white backdrop-blur-sm"
                )}
              >
                {project.status}
              </div>

              <div className="absolute inset-0 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="text-[var(--amber)] text-[10px] font-bold tracking-widest uppercase mb-1">
                  {project.category}
                </div>
                <h3 className="text-white font-bold text-sm leading-tight mb-2">{project.title}</h3>
                <p className="text-white/60 text-xs mb-4 line-clamp-2">{project.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-white/40 text-xs">{project.location}</span>
                  <div className="w-8 h-8 bg-[var(--amber)] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ArrowRight size={14} className="text-[var(--navy-dark)]" />
                  </div>
                </div>
              </div>

              <a
                href="#kontaktai"
                className="absolute bottom-4 left-4 right-4 px-6 py-4 bg-[var(--navy)] hover:bg-[var(--amber)] text-white hover:text-[var(--navy-dark)] font-bold text-xs uppercase tracking-widest flex items-center gap-2 transition-colors duration-200 opacity-0 group-hover:opacity-100"
              >
                Suzinoti daugiau
                <ArrowRight size={14} className="text-[var(--navy-dark)]" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
