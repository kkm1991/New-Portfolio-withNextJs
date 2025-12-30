import NavBar from "@/components/finalcomponents/final-resizable-navbar";

export default function Home() {
  const mode = "light"; // or "dark", this could be dynamic based on user preference
  return (
    <div className="relative min-h-screen font-sans overflow-hidden">
      {/* BACKGROUND */}
      <div className={`bg-container ${mode === "light" ? "light" : ""}`}>
        <div className="blob blob-1" />
        <div className="blob blob-2" />
        <div className="blob blob-3" />
      </div>
      <div className="relative z-10 min-h-screen ">
        <NavBar />
        {/* rest of your page content */}
      </div>
    </div>
  );
}
