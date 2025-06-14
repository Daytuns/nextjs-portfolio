import Link from 'next/link'
import Image from 'next/image'

const AboutLink = () => {
  return (
    <Link
      href="/about"
      className="
        group relative h-[200px] w-[160px] rounded-3xl 
        overflow-hidden shadow-2xl border border-white/[0.05]
        transition-all duration-200 hover:scale-[1.02] mb-18
      "
      style={{
        boxShadow: `
          0 8px 32px rgba(0, 0, 0, 0.4),
          0 1px 0 rgba(255, 255, 255, 0.05)
        `
      }}
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/profile2.jpg"
          alt="About me"
          fill
          className="object-cover"
          unoptimized
        />
        {/* Gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
      </div>

      {/* Content overlay */}
      <div className="absolute inset-0 p-3.5 flex flex-col justify-end">

        {/* About Me text (bottom left) */}
        <div>
          <h2 className="text-white text-lg font-semibold leading-tight">
            More<br/>About Me
          </h2>
        </div>
      </div>
    </Link>
  )
}

export default AboutLink