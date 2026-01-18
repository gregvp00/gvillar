import HomeClient from "@/components/HomeClient";
import { getHighlightedSnippets } from "@/lib/shiki";

export default async function Home() {
  const highlightedCode = await getHighlightedSnippets();

  return <HomeClient highlightedCode={highlightedCode} />;
}
