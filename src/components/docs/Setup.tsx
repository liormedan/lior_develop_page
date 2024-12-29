import { DocsLayout } from "./DocsLayout";

export default function Setup() {
  return (
    <DocsLayout currentChapter="setup">
      <div className="space-y-8">
        <h1 className="text-4xl font-bold mb-8">התקנה והגדרות</h1>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">דרישות מערכת</h2>
          <ul className="list-disc list-inside text-xl space-y-2 pr-6">
            <li>Node.js גרסה 16 ומעלה</li>
            <li>npm או yarn</li>
            <li>Git</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">התקנה ראשונית</h2>
          <div className="bg-muted p-4 rounded-lg text-xl">
            <pre className="whitespace-pre-wrap">
              {`# Clone the repository
git clone https://github.com/your-repo.git

# Install dependencies
npm install

# Start development server
npm run dev`}
            </pre>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">הגדרות סביבה</h2>
          <p className="text-xl">יש להגדיר את משתני הסביבה הבאים בקובץ .env:</p>
          <div className="bg-muted p-4 rounded-lg text-xl">
            <pre className="whitespace-pre-wrap">
              {`VITE_SUPABASE_URL=your-supabase-url
VITE_SUPABASE_ANON_KEY=your-supabase-key`}
            </pre>
          </div>
        </section>
      </div>
    </DocsLayout>
  );
}
