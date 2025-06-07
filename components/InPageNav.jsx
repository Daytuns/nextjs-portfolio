import { useEffect, useState } from "react"

const InPageNav = () => {
  const links = [
    { id: "intro", label: "Intro" },
    { id: "work", label: "Work" },
    { id: "about", label: "About" },
  ]

  const [activeId, setActiveId] = useState("")

  useEffect(() => {
    const handleScroll = () => {
      let newActiveId = ""

      for (let i = 0; i < links.length; i++) {
        const section = document.getElementById(links[i].id)
        if (!section) continue

        const rect = section.getBoundingClientRect()
        const sectionBottom = rect.bottom

        if (sectionBottom > window.innerHeight * 0.2) {
          newActiveId = links[i].id
          break // we found the current section
        }
      }

      setActiveId(newActiveId)
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // call once on mount

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav className="fixed right-110 top-15 ml-4 text-sm space-y-2 z-10">
      <h3 className="text-white font-medium mb-3">On this page</h3>
      {links.map((link) => (
        <a
          key={link.id}
          href={`#${link.id}`}
          className={`block py-1 ${
            activeId === link.id ? "text-white font-medium" : "text-[#777a81]"
          } hover:text-white transition-colors duration-200`}
          onClick={(e) => {
            e.preventDefault()
            const element = document.getElementById(link.id)
            if (element) {
              element.scrollIntoView({ behavior: "smooth", block: "center" })
            }
          }}
        >
          {link.label}
        </a>
      ))}
    </nav>
  )
}

export default InPageNav
