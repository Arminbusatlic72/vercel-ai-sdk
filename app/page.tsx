import AiChat from "@/components/ai-chat";
import Dashboard from "@/components/dashboard";

export default function Home() {
  return (
    <div className="flex h-screen">
      {/* Left: Dashboard sidebar */}
      <aside className="w-80 md:w-96 border-r bg-slate-50 overflow-auto">
        <Dashboard />
      </aside>

      {/* Right: Chat area */}
      <main className="flex-1 overflow-hidden">
        <AiChat />
      </main>
    </div>
  );
}
