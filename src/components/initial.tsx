"use client";

export default function Initial({ StartTransition }: { StartTransition: () => void }) {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center text-white">
          <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
            <h1 className="text-gray-900">FIRST PAGE - click button to proceed</h1>
            <button className="bg-slate-700 px-1" onClick={() => StartTransition()}>This is the button</button>
          </div>
        </main>
    )
}