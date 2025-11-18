export type Message = {
  id: string;
  role: "user" | "assistant" | "system";
  text: string;
  time?: string; // ISO string or human-readable
};

type DashboardProps = {
  messages?: Message[];
};

const mockMessages: Message[] = [
  {
    id: "m1",
    role: "user",
    text: "Hi — how do I get started with the SDK?",
    time: new Date().toISOString()
  },
  {
    id: "m2",
    role: "assistant",
    text: "You can start by creating an instance and calling the chat API. Would you like a code sample?",
    time: new Date(Date.now() - 1000 * 60 * 5).toISOString()
  },
  {
    id: "m3",
    role: "user",
    text: "Yes, please show a minimal example.",
    time: new Date(Date.now() - 1000 * 60 * 2).toISOString()
  },
  {
    id: "m4",
    role: "user",
    text: "Hi — how do I get started with the SDK?",
    time: new Date().toISOString()
  },
  {
    id: "m5",
    role: "assistant",
    text: "You can start by creating an instance and calling the chat API. Would you like a code sample?",
    time: new Date(Date.now() - 1000 * 60 * 5).toISOString()
  },
  {
    id: "m6",
    role: "user",
    text: "Yes, please show a minimal example.",
    time: new Date(Date.now() - 1000 * 60 * 2).toISOString()
  },
  {
    id: "m7",
    role: "user",
    text: "Hi — how do I get started with the SDK?",
    time: new Date().toISOString()
  },
  {
    id: "m8",
    role: "assistant",
    text: "You can start by creating an instance and calling the chat API. Would you like a code sample?",
    time: new Date(Date.now() - 1000 * 60 * 5).toISOString()
  },
  {
    id: "m9",
    role: "user",
    text: "Yes, please show a minimal example.",
    time: new Date(Date.now() - 1000 * 60 * 2).toISOString()
  }
];

export default function Dashboard({ messages = mockMessages }: DashboardProps) {
  return (
    <div className="p-6 max-w-3xl mx-auto">
      <header className="mb-4">
        <h1 className="text-2xl font-semibold">Chat history</h1>
        <p className="text-sm text-muted-foreground">
          A simple timeline of recent messages.
        </p>
      </header>

      <ul className="space-y-3">
        {messages.length === 0 ? (
          <li className="text-sm text-gray-500">No messages yet.</li>
        ) : (
          messages.map((m) => (
            <li
              key={m.id}
              className="p-3 rounded-lg border bg-white/50 shadow-sm flex flex-col"
            >
              <div className="flex items-center justify-between">
                <span
                  className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${
                    m.role === "user"
                      ? "bg-blue-100 text-blue-800"
                      : "bg-green-100 text-green-800"
                  }`}
                >
                  {m.role}
                </span>
                <time className="text-xs text-gray-400">
                  {m.time ? new Date(m.time).toLocaleString() : "—"}
                </time>
              </div>

              <p className="mt-2 text-sm text-gray-800 whitespace-pre-wrap">
                {m.text}
              </p>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}
