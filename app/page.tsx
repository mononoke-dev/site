export default function Home() {
  return (
    <main className="grid flex-1 grid-cols-1 sm:grid-cols-[40%_60%]">
      <div className="hidden bg-panel sm:block" />
      <div className="flex items-center justify-center bg-white px-6 sm:justify-start sm:px-12 sm:blur-[2px] sm:transition-[filter] sm:duration-300 sm:hover:blur-none">
        <h1 className="text-center font-mono text-4xl tracking-tight text-panel motion-safe:animate-fade-in sm:text-left sm:text-6xl">
          mononoke.dev
        </h1>
      </div>
    </main>
  );
}