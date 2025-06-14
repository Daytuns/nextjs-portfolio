import Link from 'next/link'
import Image from 'next/image'

const T3StackCard = () => {
  return (
    <Link
      href="https://create.t3.gg"
      target="_blank"
      className="
        group relative h-[200px] w-[160px] rounded-2xl 
        overflow-hidden shadow-2xl border border-white/[0.05]
        transition-all duration-300 ease-out
        hover:scale-[1.02] hover:border-white/10
        mb-18
      "
      style={{
        background: `
          radial-gradient(circle at 20% 80%, rgba(99, 102, 241, 0.4) 0%, transparent 50%),
          radial-gradient(circle at 80% 20%, rgba(139, 92, 246, 0.3) 0%, transparent 50%),
          radial-gradient(circle at 40% 40%, rgba(168, 85, 247, 0.2) 0%, transparent 50%),
          linear-gradient(135deg, #0f0f23 0%, #1e1b4b 30%, #312e81 60%, #1e1b4b 100%)
        `,
        boxShadow: `
          0 8px 32px rgba(0, 0, 0, 0.4),
          0 1px 0 rgba(255, 255, 255, 0.05),
          inset 0 1px 0 rgba(255, 255, 255, 0.1)
        `
      }}
    >
      {/* Enhanced top glow */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
      
      {/* Subtle inner glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] via-transparent to-transparent pointer-events-none" />
      
      {/* Content */}
      <div className="absolute inset-0 p-4 flex flex-col">
        
        {/* Main content */}
        <div className="flex flex-col justify-center">
          <h1 className="text-white text-base font-bold leading-tight mb-1">
            A Stack
          </h1>
          <h2 className="text-white text-base font-bold leading-tight">
            I Like
          </h2>
        </div>

        {/* Bottom section */}
        <div className="h-full">
          <div className="flex justify-center items-center h-full">
            <div className="transform group-hover:scale-105 transition-transform duration-300">
              <Image
                src="/t3logo.png"
                alt="T3 Stack Logo"
                width={80}
                height={80}
                className="object-contain filter brightness-0 invert drop-shadow-lg"
                unoptimized
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Hover glow effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-violet-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    </Link>
  )
}

export default T3StackCard