import ShinyText from "./blocks/TextAnimations/ShinyText/ShinyText";

const skills = [
  { name: 'HTML', icon: 'https://cdn.simpleicons.org/html5' },
  { name: 'CSS', icon: 'https://cdn.simpleicons.org/css3' },
  { name: 'JavaScript', icon: 'https://cdn.simpleicons.org/javascript' },
  { name: 'TypeScript', icon: 'https://cdn.simpleicons.org/typescript' },
  { name: 'ReactJS', icon: 'https://cdn.simpleicons.org/react' },
  // { name: 'VueJS', icon: 'https://cdn.simpleicons.org/vuedotjs' },
  { name: 'NextJS', icon: 'https://cdn.simpleicons.org/nextdotjs/white' },
  { name: 'Tailwind CSS', icon: 'https://cdn.simpleicons.org/tailwindcss' },
  { name: 'Shadcn', icon: 'https://cdn.simpleicons.org/shadcnui/white' },
  { name: 'Framer Motion', icon: 'https://cdn.simpleicons.org/framer' },
  { name: 'GSAP', icon: 'https://cdn.simpleicons.org/greensock' },
  { name: 'NodeJS', icon: 'https://cdn.simpleicons.org/nodedotjs/darkgreen' },
  { name: 'ExpressJS', icon: 'https://cdn.simpleicons.org/express/white' },
  { name: 'MongoDB', icon: 'https://cdn.simpleicons.org/mongodb/darkgreen' },
  { name: 'MySQL', icon: 'https://cdn.simpleicons.org/mysql' },
  { name: 'Vercel', icon: 'https://cdn.simpleicons.org/Vercel/white' },
  { name: 'Git', icon: 'https://cdn.simpleicons.org/git' },
  { name: 'Github', icon: 'https://cdn.simpleicons.org/github/white' },
  { name: 'Postman', icon: 'https://cdn.simpleicons.org/postman' },
  { name: 'Python', icon: 'https://cdn.simpleicons.org/python' },
  // { name: 'Django', icon: 'https://cdn.simpleicons.org/django/white' },
  { name: 'Tensorflow', icon: 'https://cdn.simpleicons.org/tensorflow' },
  { name: 'Flutter', icon: 'https://cdn.simpleicons.org/flutter' },
  { name: 'Figma', icon: 'https://cdn.simpleicons.org/figma' },
];

export default function Skills() {
  return (
    <div className="mt-30">
        <p className="text-xl">My tech stack.</p>
        <div className="mx-auto mt-10 flex max-w-4xl flex-wrap gap-2 text-lg lg:gap-4">
        {skills.map((skill) => (
            <div
            key={skill.name}
            className="flex items-center justify-center gap-2 rounded-xl border border-white/[0.14] bg-neutral-950 px-4 py-1.5 text-sm text-white/80 lg:text-base"
            >
            <img
                src={skill.icon}
                alt={skill.name}
                className="w-4 lg:w-5"
                height="18"
                width="18"
            />
            <ShinyText text={skill.name} disabled={false} speed={3} className='custom-class cursor-default' />
            </div>
        ))}
        </div>
    </div>
  );
}
