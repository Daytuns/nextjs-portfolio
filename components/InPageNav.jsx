import { useEffect, useState } from "react"

const InPageNav = () => {
  const links = [
  { id: "intro", label: "Intro" },
  { id: "work", label: "Work" },
  {
    id: "about",
    label: "About",
    children: [
      { id: "education", label: "Information" },
      { id: "thingsIlike", label: "Things I like" },
    ],
  },
]

const allIds = links.flatMap(link =>
  link.children ? [link.id, ...link.children.map(child => child.id)] : [link.id]
)

    const [activeParentId, setActiveParentId] = useState("")
    const [activeChildId, setActiveChildId] = useState("")

    useEffect(() => {
    const handleScroll = () => {
        let newParentId = ""
        let newChildId = ""

        for (let link of links) {
        const section = document.getElementById(link.id)
        if (section) {
            const rect = section.getBoundingClientRect()
            if (rect.bottom > window.innerHeight * 0.2) {
            newParentId = link.id
            break
            }
        }
        }

        for (let link of links) {
        if (!link.children) continue
        for (let child of link.children) {
            const section = document.getElementById(child.id)
            if (section) {
            const rect = section.getBoundingClientRect()
            if (rect.bottom > window.innerHeight * 0.2) {
                newChildId = child.id
                break
            }
            }
        }
        }

        setActiveParentId(newParentId)
        setActiveChildId(newChildId)
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
    }, [])


  return (
    <nav className="fixed right-100 top-15 text-sm space-y-2 z-10 border-l-1 border-[#171717] pl-4">
      <h3 className="text-white font-medium mb-3">On this page</h3>
      {links.map(link => (
        <div key={link.id}>
            <a
            href={`#${link.id}`}
            className={`block py-1 ${activeParentId === link.id ? "text-white" : "text-[#777a81]"}`}
            onClick={e => {
                e.preventDefault()
                document.getElementById(link.id)?.scrollIntoView({ behavior: "smooth", block: "center" })
            }}
            >
            {link.label}
            </a>

            {/* Subsections */}
            {link.children && (
            <div className="ml-4">
                {link.children.map(child => (
                <a
                    key={child.id}
                    href={`#${child.id}`}
                    className={`block py-1 ${activeChildId === child.id && activeParentId === 'about'? "text-white" : "text-[#777a81]"}`}
                    onClick={e => {
                    e.preventDefault()
                    document.getElementById(child.id)?.scrollIntoView({ behavior: "smooth", block: "center" })
                    }}
                >
                    {child.label}
                </a>
                ))}
            </div>
            )}
        </div>
        ))}

    </nav>
  )
}

export default InPageNav
