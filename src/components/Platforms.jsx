import React from "react";

const platforms = [
  {
    name: "LinkedIn",
    color: "#0077B5",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      </svg>
    ),
  },
  {
    name: "Indeed",
    color: "#2557A7",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
        <path d="M11.89 0C5.32 0 0 5.48 0 12.24s5.32 12.24 11.89 12.24c6.64 0 11.96-5.48 11.96-12.24S18.53 0 11.89 0zm0 4.07c1.37 0 2.25.71 2.25 1.79 0 1.05-.88 1.76-2.25 1.76s-2.25-.71-2.25-1.76c0-1.08.88-1.79 2.25-1.79zm3.5 12.06c0 1.1-.38 1.54-1.42 1.54h-4.3c-.91 0-1.3-.4-1.3-1.18V8.38h2.09v6.59c0 .35.1.48.42.48h1.02c.3 0 .39-.14.39-.48V8.38h2.09v7.75z" />
      </svg>
    ),
  },
  {
    name: "Glassdoor",
    color: "#0CAA41",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
        <path d="M16.9 7.8v-.6l1.3-1c-1.8-2-4.5-3.3-7.5-3.3-4.7 0-8.6 3.4-9.6 7.9-1.2-1.9-1.2-1.9-1.1-2 .7-4.1 4.3-7.2 8.6-7.2 4.1 0 7.6 2.8 8.6 6.8-.2-.3-.3-.4-.3-.6zm0 13c-3 .5-6 .3-8.8-.9l-.8 1.4c2.8 1.5 6 1.9 9.1 1.3 4.8-.9 8.2-5.1 8.2-10 0-.8-.1-1.6-.3-2.3l-1.4.8c.2.6.2 1.2.2 1.8-.1 3.5-2.7 6.8-6.2 7.9z" />
      </svg>
    ),
  },
  {
    name: "Monster",
    color: "#6D2077",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
        <path d="M21.75 3.5c-.75 0-1.5.5-2 1.5l-2.75 5.5L14.25 5c-.5-1-1.25-1.5-2-1.5s-1.5.5-2 1.5L7.5 10.5 4.75 5c-.5-1-1.25-1.5-2-1.5s-1.5.5-2 1.5v14c0 1.1.9 2 2 2h2v-8l1.25-2.5 2.75 5.5c.5 1 1.25 1.5 2 1.5s1.5-.5 2-1.5l2.75-5.5 1.25 2.5v8h2c1.1 0 2-.9 2-2v-14c0-1-.75-1.5-1.5-1.5z" />
      </svg>
    ),
  },
];

export default function Platforms() {
  return (
    <section className="py-24 bg-white overflow-hidden relative border-t border-gray-100">
      {/* Header */}
      <div className="max-w-6xl mx-auto text-center px-6 mb-16">
        <div className="inline-block px-3 py-1 bg-blue-50 rounded-full text-blue-600 text-xs font-semibold uppercase tracking-wider mb-4">
          Integrated Ecosystem
        </div>
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 tracking-tight">
          Post Once, Reach Everywhere
        </h2>
        <p className="mt-4 text-gray-500 text-lg max-w-2xl mx-auto">
          RecruiterAI automatically syncs your job postings across all major
          hiring platforms instantly.
        </p>
      </div>

      {/* Infinite Scroll */}
      <div className="w-full relative">
        <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div className="flex w-max animate-marquee items-center">
          {[...Array(4)].map((_, setIndex) => (
            <div
              key={setIndex}
              className="flex shrink-0 gap-16 md:gap-24 px-8 md:px-12 items-center"
            >
              {platforms.map((platform, i) => (
                <PlatformLogo key={`${setIndex}-${i}`} platform={platform} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PlatformLogo({ platform }) {
  return (
    <div className="flex items-center justify-center group cursor-pointer">
      <div
        className="transition-all duration-300 transform 
                   group-hover:scale-110 
                   grayscale group-hover:grayscale-0"
        style={{ color: platform.color }}
      >
        {platform.svg}
      </div>
    </div>
  );
}
