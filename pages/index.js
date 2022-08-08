import { useState } from "react";
import Head from "next/head";
import { FaArrowRight } from "react-icons/fa";

export default function Home() {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);

  return (
    <div>
      <Head>
        <title>Rich Preview Debugger</title>
        <meta
          name="description"
          content="A debugger to preview the meta tags from a given URL"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="h-screen flex justify-center items-center flex-col bg-fuchsia-500">
        <h1 className="mb-10 text-3xl text-white [text-shadow:-0.1rem_0.1rem_0.25rem_#c026d3]">
          Rich Preview Debugger
        </h1>
        <form className="flex items-center">
          <input
            className="w-96 px-4 py-2 rounded transition-shadow duration-200 text-gray-700 bg-gray-100 focus:outline-none focus:shadow-custom"
            type="url"
            id="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="Enter a URL"
            autoComplete="off"
            autoFocus
          />
          <button
            className="relative w-10 h-10 ml-2 transition-shadow rounded-full bg-white hover:enabled:shadow-custom group disabled:cursor-not-allowed"
            type="submit"
            disabled={loading}
          >
            {loading && (
              <div className="animate-ping absolute inset-0 rounded-full opacity-90 bg-fuchsia-900"></div>
            )}
            <FaArrowRight className="m-auto text-lg transition-transform group-hover:-rotate-45 group-hover:scale-125 group-disabled:transform-none text-gray-700" />
          </button>
        </form>
      </main>
    </div>
  );
}
