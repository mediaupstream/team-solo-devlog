export default function DayThree() {
  return (
    <article>
      <div className="mb-16 text-center">
        <time className="text-gray-400 text-md ">March 27, 2025</time>
        <h1 className="text-2xl font-bold mt-2 mb-4 text-gray-200">Day three</h1>
        <blockquote className="italic text-gray-400 text-sm">
          "The journey of a thousand miles begins with a single prompt." - Lao Tzu
        </blockquote>
      </div>

      
      <div className="prose prose-invert prose-lg max-w-none mb-8">
        <p className="text-gray-300 leading-relaxed mb-6">
          Luna improved the prompts that generate charts, and Derek started working on documenting the project.
        </p>
        <img 
          src="/posts/day3/luna-3.png"  
          alt="We will most likely not survive the ai robot apocalypse"
          className="w-full  object-cover rounded-lg my-8"
        />

        <p className="text-gray-300 leading-relaxed mb-6">
          Derek had a conversation with Claude about charts and data.
        </p>
        <video 
          className="w-full rounded-lg my-8"
          controls
          playsInline
        >
          <source src="/posts/day3/make-a-chart.mp4" type="video/mp4" />
          Your browser does not support the video tag. wtf bro
        </video>

      </div>

    </article>
  )
}