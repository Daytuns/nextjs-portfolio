import Link from "next/link"
import Image from "next/image"

export default function ProjectCard({
  title,
  href,
  imageSrc,
  description,
  gradient,     // <-- new prop
  imageShadow,  // <-- new prop
  accentColor = 'text-emerald-300' // default fallback
}) {
  return (
    <div className="project-card flex w-full flex-row mt-8">
      <div className="flex flex-col w-full">
        <Link
          href={href}
          target="_blank"
          draggable={false}
          className="relative cursor-pointer overflow-hidden rounded-2xl border border-white/15 bg-[#f2f2f20c] p-1.5 shadow-2xl lg:h-[380px] lg:rounded-3xl lg:p-2"
        >
          {/* Top glow line */}
          <div
            className="absolute inset-x-0 top-0 h-px"
            style={{
              background:
                'linear-gradient(90deg, rgba(0, 0, 0, 0) 5%, rgba(255, 255, 255, 0.8) 35%, rgb(255, 255, 255) 50%, rgba(255, 255, 255, 0.8) 65%, rgba(0, 0, 0, 0) 95%)',
            }}
          />

          {/* Main content container */}
          <div className="group relative flex size-full flex-col justify-between items-center overflow-hidden rounded-xl transition-all duration-300 lg:rounded-2xl">
            {/* Background gradient */}
            <div className="absolute inset-0 -z-1" style={{ background: gradient }} />

            {/* Mid glow accent */}
            <div
              className="absolute inset-x-0 top-px z-10 h-[0.8px] opacity-70"
              style={{
                background:
                  'linear-gradient(90deg, rgba(0, 0, 0, 0) 20%, rgb(255, 255, 255) 50%, rgba(0, 0, 0, 0) 80%)',
              }}
            />

            {/* Text content */}
            <div className={`w-full flex-row items-center justify-between px-10 pt-8 ${accentColor} lg:flex`}>
              <h3 className="max-w-[90%] text-xl">{description}</h3>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-arrow-right size-6"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </div>

            {/* Project image */}
            <Image
              alt={title}
              src={imageSrc}
              width={1203}
              height={753}
              loading="lazy"
              className={`relative bottom-0.5 w-full max-w-[90%] lg:translate-y-4 translate-y-10 rounded-t-lg border-[1.5px] border-white/20 transition-all duration-300 will-change-transform ${imageShadow} lg:block lg:rotate-0 lg:group-hover:scale-[1.08] lg:group-hover:-rotate-3`}
              style={{ color: 'transparent' }}
            />
          </div>
        </Link>
      </div>
    </div>
  )
}
