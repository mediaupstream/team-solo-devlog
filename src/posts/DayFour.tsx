export default function DayFour() {
  return (
    <article>
      <div className="mb-24 text-center">
        <time className="text-gray-400 text-md ">March 27, 2025</time>
        <h1 className="text-2xl font-bold mt-2 mb-4 text-gray-200">Day four</h1>
        <blockquote className="italic text-gray-400 text-sm">
          "The hardest part of anything is thinking about it." - Ajahn Brahm
        </blockquote>
      </div>

      <a href="https://www.loom.com/share/bd36bb6b9c3942d4835a8ba61bf2be25">
        <img src="https://cdn.loom.com/sessions/thumbnails/bd36bb6b9c3942d4835a8ba61bf2be25-38f470155f9369c6-full-play.gif"  className="w-full" />
      </a>

      <div className="prose prose-invert prose-lg max-w-none my-8">
        <p className="text-gray-300 leading-relaxed mb-6">
          Luna added better <em>thinking</em> messages while Claude is trapped in a loop trying to fix it's broken queries.
        </p>

        <img 
          src="/posts/day4/day4.gif"  
          alt="Aligning cosmic bytes"
          className="w-full  object-cover rounded-lg my-8"
        />

        <p className="text-gray-300 leading-relaxed mb-6">
          Both Luna and Derek spent time adjusting the prompts, debugging issues with the Chart preview, and testing out various types of chart generation.
        </p>

        <img 
          src="/posts/day4/day4s.png"  
          alt="Trial and error, mostly error"
          className="w-full  object-cover rounded-lg my-8"
        />
      

      </div>

    </article>
  )
}