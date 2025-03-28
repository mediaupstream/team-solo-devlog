import {  useEffect, useState } from "react";
import DayOne from "./posts/DayOne"
import DayTwo from "./posts/DayTwo"
import DayThree from "./posts/DayThree"
import DayFour from "./posts/DayFour"

function App() {
  const [selectedDay, setSelectedDay] = useState(1);

  useEffect(() => {
    document.body.setAttribute('data-day', selectedDay.toString());
    document.documentElement.setAttribute('data-day', selectedDay.toString());
  }, [selectedDay]);

  return (
    <div className="text-center py-8">
      <header className="flex flex-row gap-12 items-center justify-center p-4">
        <img 
          src='/robots-are-smart.gif' 
          alt="logo" 
          className="rounded-full w-42 h-42 object-cover"
        />
        <h1 className="font-mono text-white text-xs text-left">
          <pre><code>{`team
 ▗▄▄▖ ▗▄▖ ▗▖    ▗▄▖ 
▐▌   ▐▌ ▐▌▐▌   ▐▌ ▐▌
 ▝▀▚▖▐▌ ▐▌▐▌   ▐▌ ▐▌
▗▄▄▞▘▝▚▄▞▘▐▙▄▄▖▝▚▄▞▘
             dev log`}
</code></pre>
        </h1>
      </header>
      <main className="max-w-3xl mx-auto px-4 py-8 text-left">

        <article>
        <div className="flex flex-row gap-8 items-center justify-end p-4">
            <a href="https://app-previews-lgnc83ur1.axiom.dev/" target="_blank" className=" !text-sky-300 text-sm border hover:z-50 border-sky-300 px-2 py-1 font-bold hover:bg-sky-900 hover:text-black inline-block transition-all hover:scale-250">
              <span className="inline-block transition-all">Demo</span>
            </a>
            <a href="https://github.com/axiomhq/app/pull/4101" target="_blank" className=" !text-sky-300 text-sm border hover:z-50 border-sky-300 px-2 py-1 font-bold hover:bg-sky-900 hover:text-black inline-block transition-all hover:scale-250">
              <span className="inline-block transition-transform">Code</span>
            </a>
          </div>
          <div className="mb-8">
            <div className="text-gray-500 text-sm">What even is this?</div>
            <h1 className="text-2xl font-bold mt-2 mb-4">Magic Dashboard Charts</h1>
            <div className="prose prose-invert prose-lg max-w-none">
              <p className=" leading-relaxed mb-6">
                We're building a conversational chat interface that lets <strong>Axiom</strong> users generate dashboard charts by describing
                the type of chart they want.
              </p>
              <p className=" leading-relaxed mb-6">
                Follow along on our journey as we build this feature!
              </p>
              {/* <div className="text-sky-200 text-sm">~ Team Solo [ derek, luna ]</div> */}
            </div>
          </div>
        </article>

          <div className="relative pb-8 mb-8 mt-16">
            <div className="flex justify-between items-center relative">
              {[1, 2, 3, 4].map((day) => (
                <button key={day} className={`hover:text-sky-300 relative z-10 flex flex-col items-center opacity-80 hover:opacity-100 cursor-pointer ${selectedDay === day ? 'opacity-100': ''}`} onClick={() => setSelectedDay(day)}>
                  <div className={`px-4 py-2 ${ selectedDay === day ? 'text-sky-300' : 'text-gray-400' }`} >
                    Day {day}
                  </div>
                  <div className={`w-3 h-3 rounded-full -mb-[5px] ${ selectedDay === day ? 'bg-sky-300' : 'bg-gray-700 opacity-80' }`} />
                </button>
              ))}
              {/* Timeline line */}
              <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gray-700" />
            </div>
          </div>

        {selectedDay === 1 && <DayOne />}
        {selectedDay === 2 && <DayTwo />}
        {selectedDay === 3 && <DayThree />}
        {selectedDay === 4 && <DayFour />}

        <div className="mt-8 pt-8 border-t border-gray-700 text-center justify-center">
          <div className="flex items-center justify-center">
            <img 
              src="/robots-are-smart.gif" 
              alt="Author avatar"
              className="w-8 h-8 rounded-full"
            />
            <div className="ml-4 ">
              <p className="text-[#999]">𝒯ℯ𝒶𝓂 𝒮ℴ𝓁ℴ <span className="text-[12px]">&copy; ????</span></p>
              <p className="text-[#999] text-[8px]">what even is this?</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
