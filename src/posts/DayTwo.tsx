import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { solarizedDarkAtom } from 'react-syntax-highlighter/dist/esm/styles/prism';

export default function DayTwo() {
  const codeExample = `➜  frontend-server git:(luna/generate-ai-chart) ✗ npx tsx ./fix-apl.ts
Fixing APL query: ['vercel']| where status === 500| summarize count() by bin_auto(_time)
Fixed APL: ['vercel'] | where toint(["request.statusCode"]) == 500 | summarize count() by bin_auto(_time)`;

  return (
    <article>
      <div className="mb-24 text-center">
        <time className="text-gray-400 text-md ">March 26, 2025</time>
        <h1 className="text-2xl font-bold mt-2 mb-4 text-gray-200">Day two</h1>
      </div>

      <a href="https://www.loom.com/share/47be4b8a5e43422e9da70ddb657ff568">
        <img src="https://cdn.loom.com/sessions/thumbnails/47be4b8a5e43422e9da70ddb657ff568-83a19152fd1a866b-full-play.gif"  className="w-full" />
      </a>

      <div className="prose prose-invert prose-lg max-w-none my-8">

        <p className="text-gray-300 leading-relaxed mb-6">
          Derek added the <strong>ANTHROPIC_API_KEY</strong> to Vercel so that PR previews could use Claude, and continued working on UI:
        </p>
      
        <ul className="list-disc pl-6 mb-6 text-gray-300">
          <li>Making the modal feel more like a conversation</li>
          <li>Continue editing the chart in the sidebar editor</li>
          <li>Yolo mode (add chart directly to dashboard)</li>
        </ul>
      
        <img 
          src="/posts/day2/derek-d2.png"  
          alt="Chat interface with chart actions"
          className="w-full  object-cover rounded-lg my-8"
        />

        

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">Self healing queries</h2>
        <p className="text-gray-300 leading-relaxed mb-6">
          Luna spent time working on <strong>self healing queries</strong> to try and get better results from Claude!
        </p>
        <div className="my-6">
          <SyntaxHighlighter
            language="javascript"
            style={solarizedDarkAtom}
            className="rounded-lg"
            customStyle={{
              backgroundColor: '#1E1E1E',
            }}
          >
            {codeExample}
          </SyntaxHighlighter>
        </div>
      </div>
    </article>
  )
}