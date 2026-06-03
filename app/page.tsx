export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-bg-primary text-text-primary font-sans">
      {/* Header */}
      <header className="border-b border-border-custom bg-bg-secondary py-4 px-6 sm:px-12">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-2xl font-bold tracking-tight text-accent">Excy</span>
            <span className="text-xs px-2.5 py-1 rounded-full font-medium border border-border-custom bg-bg-primary text-text-secondary">
              Next.js Boilerplate
            </span>
          </div>
          <nav className="flex gap-4 text-sm font-medium">
            <a
              id="header-nav-github"
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-text-primary transition-colors"
            >
              GitHub
            </a>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-5xl w-full mx-auto px-6 py-12 sm:px-12 sm:py-20 flex flex-col gap-12">
        {/* Hero Section */}
        <section className="flex flex-col gap-4 max-w-2xl">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            Welcome to <span className="text-accent">Excy</span>
          </h1>
          <p className="text-lg text-text-secondary leading-relaxed">
            A clean, basic Next.js boilerplate template configured with React 19, TypeScript, and Tailwind CSS v4. Edit this page to start building your web application.
          </p>
        </section>

        {/* Boilerplate Specs & Setup Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Tech Stack Spec Card */}
          <div className="border border-border-custom rounded-xl p-6 bg-bg-secondary flex flex-col gap-4">
            <h2 className="text-xl font-bold text-text-primary">Boilerplate Stack</h2>
            <ul className="divide-y divide-border-custom text-sm">
              <li className="py-2.5 flex justify-between">
                <span className="text-text-secondary">Framework</span>
                <span className="font-semibold">Next.js 16 (App Router)</span>
              </li>
              <li className="py-2.5 flex justify-between">
                <span className="text-text-secondary">Library</span>
                <span className="font-semibold">React 19</span>
              </li>
              <li className="py-2.5 flex justify-between">
                <span className="text-text-secondary">Language</span>
                <span className="font-semibold">TypeScript</span>
              </li>
              <li className="py-2.5 flex justify-between">
                <span className="text-text-secondary">Styling</span>
                <span className="font-semibold">Tailwind CSS v4</span>
              </li>
              <li className="py-2.5 flex justify-between">
                <span className="text-text-secondary">Code Quality</span>
                <span className="font-semibold">ESLint & Prettier ready</span>
              </li>
            </ul>
          </div>

          {/* Quick Start Card */}
          <div className="border border-border-custom rounded-xl p-6 bg-bg-secondary flex flex-col gap-4">
            <h2 className="text-xl font-bold text-text-primary">Quick Start</h2>
            <div className="flex flex-col gap-3 text-sm">
              <div>
                <p className="text-text-secondary mb-1">To run dev server:</p>
                <code className="block bg-bg-primary px-3 py-2 rounded-md border border-border-custom font-mono text-xs">
                  npm run dev
                </code>
              </div>
              <div>
                <p className="text-text-secondary mb-1">To build for production:</p>
                <code className="block bg-bg-primary px-3 py-2 rounded-md border border-border-custom font-mono text-xs">
                  npm run build
                </code>
              </div>
              <div>
                <p className="text-text-secondary mb-1">To check for linting errors:</p>
                <code className="block bg-bg-primary px-3 py-2 rounded-md border border-border-custom font-mono text-xs">
                  npm run lint
                </code>
              </div>
            </div>
          </div>
        </section>

        {/* Configuration Files Information */}
        <section className="border border-border-custom rounded-xl p-6 flex flex-col gap-4">
          <h2 className="text-xl font-bold text-text-primary">Easy Theme & Font Swaps</h2>
          <p className="text-sm text-text-secondary">
            This template is built with customizability in mind. You can quickly configure typography and colors by editing the following files:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs mt-2">
            <div className="p-4 rounded-lg bg-bg-secondary border border-border-custom">
              <span className="font-mono font-bold block mb-1 text-accent">app/globals.css</span>
              <p className="text-text-secondary">Change hex variables under <code className="bg-bg-primary p-0.5 rounded">:root</code> to quickly switch light & dark theme colors.</p>
            </div>
            <div className="p-4 rounded-lg bg-bg-secondary border border-border-custom">
              <span className="font-mono font-bold block mb-1 text-accent">app/layout.tsx</span>
              <p className="text-text-secondary">Change the Google Font import to easily swap typography across the entire app.</p>
            </div>
            <div className="p-4 rounded-lg bg-bg-secondary border border-border-custom">
              <span className="font-mono font-bold block mb-1 text-accent">app/page.tsx</span>
              <p className="text-text-secondary">Edit the layout or add new routes to replace this page with your product landing.</p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border-custom bg-bg-secondary py-6 px-6 sm:px-12 text-center text-xs text-text-secondary">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <span>&copy; {new Date().getFullYear()} Excy. All rights reserved.</span>
          <div className="flex gap-4">
            <a
              id="footer-link-docs"
              href="https://nextjs.org/docs"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-text-primary transition-colors"
            >
              Next.js Docs
            </a>
            <span>&middot;</span>
            <a
              id="footer-link-tailwind"
              href="https://tailwindcss.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-text-primary transition-colors"
            >
              Tailwind CSS Docs
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
