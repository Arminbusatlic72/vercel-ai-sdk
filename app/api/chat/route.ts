// import { streamText, UIMessage, convertToModelMessages } from "ai";

// // Allow streaming responses up to 30 seconds
// export const maxDuration = 30;

// export async function POST(req: Request) {
//   const {
//     messages,
//     model,
//     webSearch
//   }: {
//     messages: UIMessage[];
//     model: string;
//     webSearch: boolean;
//   } = await req.json();

//   const result = streamText({
//     model: webSearch ? "perplexity/sonar" : model,
//     messages: convertToModelMessages(messages),
//     system:
//       "You are a helpful assistant that can answer questions and help with tasks"
//   });

//   // send sources and reasoning back to the client
//   return result.toUIMessageStreamResponse({
//     sendSources: true,
//     sendReasoning: true
//   });
// }

import { streamText, UIMessage, convertToModelMessages } from "ai";
import { createGoogleGenerativeAI } from "@ai-sdk/google";

export const maxDuration = 30;

const google = createGoogleGenerativeAI({
  apiKey: process.env.GOOGLE_GENERATIVE_AI_API_KEY!
});

export async function POST(req: Request) {
  const {
    messages,
    model
  }: {
    messages: UIMessage[];
    model: string;
  } = await req.json();

  const result = streamText({
    model: google(model), // ← Correct usage
    messages: convertToModelMessages(messages),
    system:
      "You are a helpful assistant that can answer questions and help with tasks."
  });

  return result.toUIMessageStreamResponse({
    sendSources: true,
    sendReasoning: true
  });
}
