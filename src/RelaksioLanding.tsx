import { useState } from "react";
<div className="rounded-3xl bg-slate-950/60 p-8 md:p-12 grid md:grid-cols-2 gap-8 items-center">
<div>
<h2 className="text-3xl md:text-4xl font-bold">Lifetime access for <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-300 to-indigo-300">$2.99</span></h2>
<p className="mt-4 text-white/80">Unlock all premium sounds forever. One simple purchase. No recurring fees.</p>
<ul className="mt-6 space-y-3 text-white/80">
<li className="inline-flex items-center gap-2"><ShieldCheck className="h-5 w-5" /> Secure purchase via RevenueCat</li>
<li className="inline-flex items-center gap-2"><Infinity className="h-5 w-5" /> Access on all your devices</li>
<li className="inline-flex items-center gap-2"><Timer className="h-5 w-5" /> Free updates forever</li>
</ul>
</div>
<div className="space-y-3">
<a id="download-ios" href="#" className="block w-full text-center rounded-2xl bg-white text-slate-900 px-5 py-3 font-semibold hover:bg-white/90 inline-flex items-center justify-center gap-2">
<Apple className="h-5 w-5" /> Download on the App Store
</a>
<a id="download-android" href="#" className="block w-full text-center rounded-2xl border border-white/20 px-5 py-3 font-semibold hover:bg-white/10 inline-flex items-center justify-center gap-2">
<Android className="h-5 w-5" /> Get it on Google Play
</a>
<p className="text-center text-xs text-white/60">* Replace links with your real store URLs</p>
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
<p className="mt-3 text-white/80">No subscriptions. One‑time purchase unlocks all premium sounds forever.</p>
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
<div className="h-8 w-8 rounded-xl bg-gradient-to-br from-indigo-500 to-sky-400 grid place-items-center">
<Moon className="h-5 w-5" />
</div>
<span>Relaksio</span>
</div>
<nav className="flex items-center gap-6">
<a href="/relaksio-site/privacy" className="hover:text-white">Privacy</a>
<a href="mailto:hello@example.com" className="hover:text-white">Support</a>
<a href="https://github.com/coddmaster/relaksio-site" className="hover:text-white inline-flex items-center gap-2"><Github className="h-4 w-4" /> GitHub</a>
</nav>
<p>© {new Date().getFullYear()} BrightLabs Studio. All rights reserved.</p>
</div>
</footer>
</div>
);
}