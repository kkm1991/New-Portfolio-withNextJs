import NavBar from "@/components/finalcomponents/final-resizable-navbar";

export default function Home() {
  return (
    <div className="relative min-h-screen font-sans overflow-hidden">
      {/* BACKGROUND */}
      <div className="bg-container">
        <div className="blob blob-1" />
        <div className="blob blob-2" />
        <div className="blob blob-3" />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 min-h-screen">
        <NavBar />
        {/* rest of your page content */}
      </div>
    </div>
  );
}
