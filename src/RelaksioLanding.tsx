import { useState } from "react";
import { motion } from "framer-motion";
import {
  Play,
  Pause,
  Moon,
  Waves,
  Sparkles,
  ShieldCheck,
  Timer,
  Infinity,
  Star,
  Apple,
  Smartphone,
  Music2,
} from "lucide-react";

const sounds = [
  { id: 1, title: "Ocean Waves", src: "sounds/ocean.mp3", description: "Gentle shore to calm your mind" },
  { id: 2, title: "Forest Rain", src: "sounds/rain.mp3", description: "Gentle rain under forest canopy" },
  { id: 3, title: "White Noise", src: "sounds/white.mp3", description: "Steady focus companion" },
];

const appImages = [
  "/relaksio-site/Main%20Screen.png",
  "/relaksio-site/Choose%20Sound.png",
  "/relaksio-site/Sleeep%20Timer.png",
  "/relaksio-site/Visual%20Settings.png",
];

function SoundCard({ title, src, description }: { title: string; src: string; description: string }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio] = useState<HTMLAudioElement>(() => new Audio(src));

  const toggle = () => {
    if (!src) return;
    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.currentTime = 0;
      audio.volume = 1;
      audio.play().catch(() => {
        // Some browsers require user interaction; ignore errors here
      });
      setIsPlaying(true);
      audio.onended = () => setIsPlaying(false);
    }
  };

  return (
    <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur shadow-sm hover:shadow-lg transition-all">
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-white/10 to-white/0 transition-opacity pointer-events-none" />
      <div className="flex items-start gap-4">
        <div className="h-12 w-12 rounded-xl bg-white/10 flex items-center justify-center">
          <Music2 className="h-6 w-6" />
        </div>
        <div className="flex-1">
          <h4 className="text-lg font-semibold">{title}</h4>
          <p className="text-sm text-white/70">{description}</p>
        </div>
        <button
          onClick={toggle}
          disabled={!src}
          className="rounded-full border border-white/15 px-4 py-2 text-sm hover:bg-white/10 disabled:opacity-40"
        >
          {isPlaying ? (
            <span className="inline-flex items-center gap-2"><Pause className="h-4 w-4" /> Pause</span>
          ) : (
            <span className="inline-flex items-center gap-2"><Play className="h-4 w-4" /> Preview</span>
          )}
        </button>
      </div>
    </div>
  );
}

export default function RelaksioLanding() {
  return (
    <div className="min-h-screen text-white bg-[radial-gradient(1200px_600px_at_80%_-10%,rgba(120,119,198,.35),transparent),radial-gradient(600px_300px_at_20%_10%,rgba(56,189,248,.25),transparent)] bg-slate-900 overflow-x-hidden">
      {/* Navbar */}
      <header className="sticky top-0 z-30 backdrop-blur border-b border-white/10 bg-slate-900/70">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <img
              src="/relaksio-site/app-icon.png"
              alt="Relaksio icon"
              className="h-8 w-8 rounded-xl object-cover"
            />
            <span className="font-semibold tracking-tight">Relaksio</span>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm text-white/80">
            <a href="#features" className="hover:text-white">Features</a>
            <a href="#previews" className="hover:text-white">Previews</a>
            <a href="#pricing" className="hover:text-white">Pricing</a>
            <a href="#faq" className="hover:text-white">FAQ</a>
          </nav>
          <div className="flex items-center gap-3">
            <a href="#download-ios" className="rounded-xl border border-white/15 px-3 py-2 text-sm hover:bg-white/10 inline-flex items-center gap-2">
              <Apple className="h-4 w-4" /> App Store
            </a>
            <a href="#download-android" className="rounded-xl bg-white text-slate-900 px-3 py-2 text-sm font-medium hover:bg-white/90 inline-flex items-center gap-2">
              <Smartphone className="h-4 w-4" /> Google Play
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative">
        <div className="absolute inset-x-0 -top-20 h-72 bg-gradient-to-b from-indigo-500/20 to-transparent blur-3xl" />
        <div className="mx-auto max-w-6xl px-4 py-20 grid gap-10 items-start min-w-0">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.05]"
            >
              Breathe. <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-sky-300 inline-block pr-1">Relax.</span> Sleep.
            </motion.h1>
            <p className="mt-5 text-sm sm:text-base md:text-lg leading-relaxed text-white/80 max-w-[34ch] sm:max-w-prose text-left break-words">
              Relaksio is a minimalist sound companion to help you focus, unwind, and drift into deep sleep. Simple subscription, no accounts.
            </p>
            <div className="mt-8 hidden sm:flex sm:flex-row gap-3 min-w-0 w-full">
              <a href="#download-ios" className="block w-full sm:w-auto max-w-[calc(100vw-2rem)] min-w-0 box-border rounded-2xl bg-white text-slate-900 px-2 sm:px-5 md:px-6 py-2 md:py-3.5 font-semibold hover:bg-white/90 flex items-center justify-center gap-1 sm:gap-2 shadow-lg shadow-white/10 text-xs sm:text-base whitespace-nowrap text-center mx-auto sm:mx-0">
                <Apple className="hidden sm:block h-5 w-5" />
                <span className="sm:inline hidden">Download on iOS</span>
                <span className="sm:hidden inline">iOS</span>
              </a>
              <a href="#download-android" className="block w-full sm:w-auto max-w-[calc(100vw-2rem)] min-w-0 box-border rounded-2xl border border-white/20 px-2 sm:px-5 md:px-6 py-2 md:py-3.5 font-semibold hover:bg-white/10 flex items-center justify-center gap-1 sm:gap-2 backdrop-blur text-xs sm:text-base whitespace-nowrap text-center mx-auto sm:mx-0">
                <Smartphone className="hidden sm:block h-5 w-5" />
                <span className="sm:inline hidden">Get it on Android</span>
                <span className="sm:hidden inline">Android</span>
              </a>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-3 gap-y-2 text-white/70 text-xs sm:text-sm min-w-0 leading-tight">
              <div className="inline-flex items-center gap-2">
                <Star className="h-4 w-4" />
                <span className="sm:hidden">4.7 rating</span>
                <span className="hidden sm:inline">4.7 average rating</span>
              </div>
              <div className="inline-flex items-center gap-2">
                <ShieldCheck className="h-4 w-4" />
                <span className="sm:hidden">No sign-up</span>
                <span className="hidden sm:inline">No sign-up required</span>
              </div>
              <div className="inline-flex items-center gap-2">
                <Timer className="h-4 w-4" />
                <span className="sm:hidden">$2.99/yr</span>
                <span className="hidden sm:inline">Subscription $2.99/year</span>
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="mt-8"
            >
              <div className="w-full px-4">
                <div
                  className="grid grid-cols-2 gap-3 sm:gap-4 md:flex md:gap-4 md:min-w-max md:overflow-x-auto md:overscroll-x-contain md:scroll-smooth md:snap-x md:snap-mandatory md:touch-pan-y"
                  style={{ WebkitOverflowScrolling: 'touch' }}
                >
                  {appImages.map((src, i) => (
                    <div
                      key={i}
                      className="w-full md:shrink-0 md:w-[180px] lg:w-[240px] aspect-[9/19] overflow-hidden rounded-2xl border border-white/15 shadow-xl bg-slate-900/40 md:snap-center transition-transform hover:-translate-y-1 hover:shadow-2xl"
                    >
                      <img src={src} alt={`Relaksio screenshot ${i + 1}`} className="h-full w-full object-cover" />
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="mx-auto max-w-6xl px-4 py-16">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold">Designed for calm and clarity</h2>
          <p className="mt-3 text-white/80">A simple toolkit to help you focus, relax, and sleep—without distractions.</p>
        </div>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          <div className="rounded-2xl border border-white/15 bg-white/10/50 backdrop-blur p-6 shadow-lg">
            <div className="h-12 w-12 rounded-xl bg-white/10 grid place-items-center mb-4"><Waves className="h-6 w-6" /></div>
            <h3 className="font-semibold text-lg">Curated Ambient Library</h3>
            <p className="text-white/70 mt-2">10 free sounds + 30 premium. Hand‑picked for focus, sleep, and stress relief.</p>
          </div>
          <div className="rounded-2xl border border-white/15 bg-white/10/50 backdrop-blur p-6 shadow-lg">
            <div className="h-12 w-12 rounded-xl bg-white/10 grid place-items-center mb-4"><Timer className="h-6 w-6" /></div>
            <h3 className="font-semibold text-lg">Smart Sleep Timer</h3>
            <p className="text-white/70 mt-2">Drift off without worries—auto fade‑out and stop at your chosen time.</p>
          </div>
          <div className="rounded-2xl border border-white/15 bg-white/10/50 backdrop-blur p-6 shadow-lg">
            <div className="h-12 w-12 rounded-xl bg-white/10 grid place-items-center mb-4"><ShieldCheck className="h-6 w-6" /></div>
            <h3 className="font-semibold text-lg">Privacy‑First</h3>
            <p className="text-white/70 mt-2">No accounts, no trackers. RevenueCat handles purchases securely.</p>
          </div>
        </div>
      </section>

      {/* Sound Previews */}
      <section id="previews" className="mx-auto max-w-6xl px-4 py-16">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold">Listen before you download</h2>
            <p className="mt-3 text-white/80">Short previews to get a feel for Relaksio's vibe.</p>
          </div>
          <a href="#download-android" className="hidden md:inline-flex items-center gap-2 rounded-xl border border-white/15 px-4 py-2 hover:bg-white/10 text-sm">
            <Sparkles className="h-4 w-4" /> Try the full app
          </a>
        </div>
        <div className="mt-8 grid md:grid-cols-3 gap-5">
          {sounds.map((s) => (
            <SoundCard key={s.id} title={s.title} src={s.src} description={s.description} />
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="mx-auto max-w-6xl px-4 py-16">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-indigo-400/20 via-sky-400/15 to-transparent p-[2px]">
          <div className="rounded-3xl bg-slate-900/60 p-8 md:p-12 grid md:grid-cols-2 gap-8 items-center">
<div>
              <h2 className="text-3xl md:text-4xl font-bold">Just <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-300 to-indigo-300">$2.99/year</span></h2>
              <p className="mt-4 text-white/80">Access the full library and future updates with a simple yearly subscription.</p>
<ul className="mt-6 space-y-3 text-white/80">
                <li className="flex items-center gap-2"><ShieldCheck className="h-5 w-5" /> Secure purchase via RevenueCat</li>
                <li className="flex items-center gap-2"><Infinity className="h-5 w-5" /> Use on all your devices</li>
                <li className="flex items-center gap-2"><Timer className="h-5 w-5" /> Auto‑renew, cancel anytime</li>
</ul>
</div>
<div className="space-y-3">
              <a id="download-ios" href="#" className="block w-full text-center rounded-2xl bg-white text-slate-900 px-5 py-3 font-semibold hover:bg-white/90 inline-flex items-center justify-center gap-2 shadow-lg shadow-white/10">
<Apple className="h-5 w-5" /> Download on the App Store
</a>
<a id="download-android" href="#" className="block w-full text-center rounded-2xl border border-white/20 px-5 py-3 font-semibold hover:bg-white/10 inline-flex items-center justify-center gap-2">
                <Smartphone className="h-5 w-5" /> Get it on Google Play
</a>
</div>
</div>
</div>
</section>

{/* Testimonials */}
<section className="mx-auto max-w-6xl px-4 pb-16">
<h2 className="text-3xl md:text-4xl font-bold text-center">Loved by busy minds</h2>
<div className="mt-8 grid md:grid-cols-3 gap-5">
{["Perfect for deep work.", "I fall asleep in minutes now.", "Simple, beautiful, effective."].map((quote, i) => (
<figure key={i} className="rounded-2xl border border-white/10 bg-white/5 p-6">
<blockquote className="text-white/90">“{quote}”</blockquote>
<figcaption className="mt-4 text-sm text-white/60">— App Store user</figcaption>
</figure>
))}
</div>
</section>

{/* FAQ */}
<section id="faq" className="mx-auto max-w-4xl px-4 pb-20">
<h2 className="text-3xl md:text-4xl font-bold text-center">FAQ</h2>
<div className="mt-8 space-y-6">
<details className="rounded-2xl border border-white/10 bg-white/5 p-6">
<summary className="cursor-pointer font-medium">Do I need an account?</summary>
<p className="mt-3 text-white/80">No. Relaksio is privacy‑first and works without sign‑in.</p>
</details>
<details className="rounded-2xl border border-white/10 bg-white/5 p-6">
<summary className="cursor-pointer font-medium">Is there a subscription?</summary>
            <p className="mt-3 text-white/80">Yes. Relaksio is $2.99 per year with auto‑renew. Cancel anytime.</p>
</details>
<details className="rounded-2xl border border-white/10 bg-white/5 p-6">
<summary className="cursor-pointer font-medium">Can I use it offline?</summary>
<p className="mt-3 text-white/80">Yes. Once installed, sounds play offline.</p>
</details>
</div>
</section>

{/* Footer */}
<footer className="border-t border-white/10">
<div className="mx-auto max-w-6xl px-4 py-10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/70">
<div className="flex items-center gap-2">
            <img src="/relaksio-site/app-icon.png" alt="Relaksio icon" className="h-8 w-8 rounded-xl object-cover" />
<span>Relaksio</span>
</div>
<nav className="flex items-center gap-6">
            <a href="https://coddmaster.github.io/relaksio-privacy-policy/" target="_blank" rel="noopener noreferrer" className="hover:text-white">Privacy</a>
            <a href="https://forms.gle/HyAzdwEwNMMn22VFA" target="_blank" rel="noopener noreferrer" className="hover:text-white">Support</a>
            <a href="mailto:bright.app.studios@gmail.com" className="hover:text-white">Email</a>
</nav>
<p>© {new Date().getFullYear()} BrightApp Studio LLC. All rights reserved.</p>
</div>
</footer>
</div>
);
}