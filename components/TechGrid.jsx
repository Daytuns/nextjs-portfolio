import React from 'react';

const techStack = [
  {
    title: 'Frontend',
    icon: 'https://cdn.simpleicons.org/react',
    text: 'I use React for building dynamic UIs, enhanced with Next.js for routing, performance, and SSR.',
  },
  {
    title: 'Database',
    icon: 'https://cdn.simpleicons.org/mongodb',
    text: 'MongoDB offers flexibility and scalability in handling data for modern applications.',
  },
  {
    title: 'Backend',
    icon: 'https://cdn.simpleicons.org/nodedotjs',
    text: 'Node.js is my backend runtime of choice, often paired with Express and Prisma for scalable APIs.',
  },
  {
    title: 'Styling',
    icon: 'https://cdn.simpleicons.org/tailwindcss',
    text: 'Tailwind gives me full control over styling. Combined with shadcn/ui, it provides clean, accessible components fast.',
  },
];

const TechGrid = () => {
  return (
    <section className="py-16 bg-black text-white">
      <div className="w-full max-w-5xl mx-auto px-4">
        <div className="mb-12">
          <h2 className="text-xl font-semibold mb-2">What I Build With</h2>
          <h3 className="text-[#777a81] text-lg">A solid stack of tools I trust. (Not married though)</h3>
        </div>

        <div className="flex flex-wrap -mx-4">
          {techStack.map((tech, index) => (
            <div key={index} className="w-full sm:w-1/2 px-4 mb-10">
              <div className="flex flex-col items-start h-full min-h-[160px]">
                <img
                  src={tech.icon}
                  alt={`${tech.title} icon`}
                  className="w-10 h-10 mb-3"
                />
                <p className="text-base text-[#777a81] font-semibold leading-relaxed">
                  <span className="font-semibold text-white">{tech.title}. </span>
                  {tech.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechGrid;
