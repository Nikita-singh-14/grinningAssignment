"use client";

import { useState } from "react";

const benefits = [
  {
    icon: "◌",
    title: "Unplug naturally",
    text: "A gentle evening ritual for closing your laptop and letting the day become quieter.",
  },
  {
    icon: "☁",
    title: "Rest without pressure",
    text: "No intense formulas or artificial hype—just a calm drink for your wind-down routine.",
  },
  {
    icon: "✦",
    title: "Make space for slow",
    text: "Enjoy it while reading, stretching, journaling, or doing absolutely nothing.",
  },
];

const reviews = [
  {
    quote:
      "I used to reach for another coffee at 6 PM. Now I reach for Slow Bull and actually sleep on time.",
    author: "Ananya, Bengaluru",
    initials: "A",
    color: "bg-[#f28c8c]",
  },
  {
    quote:
      "The packaging feels like a deep breath. The lavender lemon flavour is my new reading companion.",
    author: "Kabir, Mumbai",
    initials: "K",
    color: "bg-[#b8a7e8]",
  },
  {
    quote:
      "It is a fun idea, but the page also feels genuinely premium and usable.",
    author: "Meera, Delhi",
    initials: "M",
    color: "bg-[#f4d58d]",
  },
];

const flavours = [
  {
    name: "Lavender Lemon",
    color: "bg-[#b8a7e8]",
    accent: "text-[#6d5c9e]",
    symbol: "☾",
  },
  {
    name: "Berry Mint",
    color: "bg-[#f28c8c]",
    accent: "text-[#9d3e54]",
    symbol: "✦",
  },
  {
    name: "Chamomile Peach",
    color: "bg-[#fff7e6]",
    accent: "text-[#b27038]",
    symbol: "☁",
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartMessage, setCartMessage] = useState("");

  const addToCart = () => {
    setCartMessage("Night sampler added — your slow evening is on its way.");

    window.setTimeout(() => {
      setCartMessage("");
    }, 3500);
  };

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#111827] text-[#fff7e6]">
      <div
        className={`fixed right-5 top-5 z-[60] max-w-sm rounded-2xl border border-white/10 bg-[#fff7e6] px-5 py-4 text-sm font-bold text-[#111827] shadow-2xl transition-all duration-500 ${
          cartMessage
            ? "translate-y-0 opacity-100"
            : "-translate-y-8 pointer-events-none opacity-0"
        }`}
        aria-live="polite"
      >
        {cartMessage}
      </div>

      <nav className="relative z-50 mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-10">
        <a
          href="#top"
          className="group flex items-center gap-2 text-xl font-black tracking-[0.2em]"
        >
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#f28c8c] text-sm text-[#111827] transition-transform duration-300 group-hover:rotate-12">
            ☾
          </span>
          SLOW BULL
        </a>

        <div className="hidden items-center gap-8 text-sm text-[#d8d2e8] md:flex">
          <a className="nav-link" href="#benefits">
            Benefits
          </a>
          <a className="nav-link" href="#flavours">
            Flavours
          </a>
          <a className="nav-link" href="#reviews">
            Reviews
          </a>
          <a className="nav-link" href="#faq">
            FAQ
          </a>
        </div>

        <div className="hidden md:block">
          <a
            href="#flavours"
            className="rounded-full bg-[#b8a7e8] px-5 py-3 text-sm font-bold text-[#111827] shadow-lg shadow-[#b8a7e8]/20 transition duration-300 hover:-translate-y-1 hover:bg-[#fff7e6]"
          >
            Try the sampler
          </a>
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="rounded-full border border-white/20 px-4 py-2 text-sm font-bold md:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? "Close" : "Menu"}
        </button>
      </nav>

      {menuOpen && (
        <div className="fixed inset-x-4 top-20 z-40 rounded-3xl border border-white/10 bg-[#1d2940]/95 p-6 shadow-2xl backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-5 text-lg font-bold">
            <a href="#benefits" onClick={() => setMenuOpen(false)}>
              Benefits
            </a>
            <a href="#flavours" onClick={() => setMenuOpen(false)}>
              Flavours
            </a>
            <a href="#reviews" onClick={() => setMenuOpen(false)}>
              Reviews
            </a>
            <a href="#faq" onClick={() => setMenuOpen(false)}>
              FAQ
            </a>
            <a
              href="#flavours"
              onClick={() => setMenuOpen(false)}
              className="rounded-full bg-[#f28c8c] px-5 py-3 text-center text-[#111827]"
            >
              Try the sampler
            </a>
          </div>
        </div>
      )}

      <section
        id="top"
        className="relative isolate overflow-hidden border-b border-white/10"
      >
        <video
          className="absolute inset-0 -z-30 h-full w-full object-cover opacity-25"
          autoPlay
          loop
          muted
          playsInline
          poster="/images/slow-evening-poster.jpg"
          aria-hidden="true"
        >
          <source src="/videos/slow-evening.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 -z-20 bg-gradient-to-b from-[#111827]/40 via-[#111827]/75 to-[#111827]" />

        <div className="absolute left-[8%] top-20 -z-10 h-64 w-64 rounded-full bg-[#b8a7e8]/20 blur-3xl animate-float" />
        <div className="absolute bottom-0 right-[8%] -z-10 h-72 w-72 rounded-full bg-[#f28c8c]/15 blur-3xl animate-float-delayed" />

        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <span className="star left-[9%] top-[20%]">✦</span>
          <span className="star left-[45%] top-[13%]">✦</span>
          <span className="star right-[12%] top-[28%]">✦</span>
          <span className="star right-[38%] bottom-[16%]">✦</span>
          <span className="star left-[21%] bottom-[18%]">✦</span>
        </div>

        <div className="mx-auto grid min-h-[740px] max-w-7xl gap-14 px-6 py-20 lg:grid-cols-2 lg:items-center lg:px-10 lg:py-28">
          <div className="animate-fade-up">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#b8a7e8]/30 bg-[#b8a7e8]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#d9d0ff] backdrop-blur-sm">
              <span className="h-2 w-2 rounded-full bg-[#f28c8c] animate-pulse" />
              A calmer kind of energy
            </div>

            <h1 className="max-w-3xl text-5xl font-black leading-[0.92] tracking-tight md:text-7xl lg:text-8xl">
              What if your energy drink helped you{" "}
              <span className="text-[#f28c8c]">do nothing?</span>
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-[#d8d2e8] md:text-xl">
              Meet Slow Bull: a caffeine-free evening drink made for quiet
              moments, slow mornings, and people who are ready to stop running
              on empty.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#flavours"
                className="group rounded-full bg-[#f28c8c] px-6 py-4 font-bold text-[#111827] shadow-xl shadow-[#f28c8c]/20 transition duration-300 hover:-translate-y-1 hover:bg-[#fff7e6]"
              >
                Try the sampler{" "}
                <span className="ml-1 inline-block transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>

              <a
                href="#benefits"
                className="rounded-full border border-white/20 bg-white/5 px-6 py-4 font-bold backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-[#b8a7e8] hover:bg-[#b8a7e8]/10"
              >
                Explore the ritual
              </a>
            </div>

            <div className="mt-12 flex flex-wrap gap-x-8 gap-y-4 text-sm text-[#d8d2e8]">
              <p className="flex items-center gap-2">
                <span className="text-[#f4d58d]">★</span> 4.9/5 evening ritual
              </p>
              <p className="flex items-center gap-2">
                <span className="text-[#b8a7e8]">✓</span> 100% caffeine-free
              </p>
              <p className="flex items-center gap-2">
                <span className="text-[#f28c8c]">✓</span> Plant-based
              </p>
            </div>
          </div>

          <div className="relative flex min-h-[460px] items-center justify-center animate-fade-up-delay">
            <div className="absolute h-[390px] w-[390px] rounded-full border border-[#fff7e6]/15 bg-[#b8a7e8]/10 blur-sm" />
            <div className="absolute h-[310px] w-[310px] rounded-full border border-[#fff7e6]/10" />

            <div className="absolute right-2 top-2 rounded-full bg-[#fff7e6]/90 px-5 py-4 text-center text-[#111827] shadow-xl rotate-12 animate-float">
              <p className="text-xs font-bold uppercase tracking-widest">
                Less rush
              </p>
              <p className="text-lg font-black">More you</p>
            </div>

            <div className="relative z-10 flex items-end gap-3 md:gap-5">
              {flavours.map((flavour, index) => (
                <div
                  key={flavour.name}
                  className={`can-card ${flavour.color} ${
                    index === 1 ? "can-featured" : ""
                  }`}
                >
                  <div className="absolute inset-x-0 top-0 h-16 bg-white/20" />

                  <span className="relative text-[10px] font-black tracking-[0.2em] md:text-xs">
                    SLOW BULL
                  </span>

                  <div className="relative">
                    <div className={`mb-3 text-4xl ${flavour.accent}`}>
                      {flavour.symbol}
                    </div>
                    <p className="text-sm font-black leading-4 md:text-base">
                      {flavour.name}
                    </p>
                    <p className="mt-3 text-[9px] font-bold tracking-widest opacity-70">
                      CAFFEINE-FREE
                    </p>
                  </div>

                  <div className="relative flex items-center justify-between border-t border-[#111827]/10 pt-3 text-[9px] font-bold">
                    <span>250 ML</span>
                    <span>✦</span>
                  </div>
                </div>
              ))}
            </div>

            <p className="absolute bottom-0 text-sm text-[#d8d2e8]">
              Your favourite can, redesigned for the night.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#0d1524]/80">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 py-8 text-center text-sm font-medium text-[#d8d2e8] md:grid-cols-3 lg:px-10">
          <p className="flex items-center justify-center gap-2">
            <span className="text-[#b8a7e8]">◌</span> 100% caffeine-free
          </p>
          <p className="flex items-center justify-center gap-2">
            <span className="text-[#f28c8c]">✦</span> Plant-based ingredients
          </p>
          <p className="flex items-center justify-center gap-2">
            <span className="text-[#f4d58d]">✓</span> 30-day satisfaction
            guarantee
          </p>
        </div>
      </section>

      <section
        id="benefits"
        className="relative mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32"
      >
        <div className="absolute left-0 top-1/2 -z-10 h-64 w-64 rounded-full bg-[#f28c8c]/10 blur-3xl" />

        <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#b8a7e8]">
          The opposite of ordinary
        </p>

        <h2 className="mt-4 max-w-2xl text-4xl font-black leading-tight md:text-6xl">
          Less rush. More you.
        </h2>

        <p className="mt-6 max-w-xl leading-7 text-[#d8d2e8]">
          Slow Bull turns the “one more thing” part of your day into a small,
          intentional ritual you can look forward to.
        </p>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {benefits.map((benefit) => (
            <article
              key={benefit.title}
              className="group rounded-3xl border border-white/10 bg-white/[0.04] p-7 transition duration-500 hover:-translate-y-2 hover:border-[#b8a7e8]/50 hover:bg-[#b8a7e8]/10 hover:shadow-2xl hover:shadow-[#000]/20"
            >
              <div className="mb-12 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#fff7e6] text-3xl text-[#111827] shadow-lg transition duration-500 group-hover:rotate-12">
                {benefit.icon}
              </div>

              <h3 className="text-2xl font-bold">{benefit.title}</h3>

              <p className="mt-4 leading-7 text-[#d8d2e8]">
                {benefit.text}
              </p>

              <div className="mt-8 h-px w-0 bg-[#f28c8c] transition-all duration-500 group-hover:w-full" />
            </article>
          ))}
        </div>
      </section>

      <section
        id="flavours"
        className="mx-auto grid max-w-7xl gap-12 px-6 pb-24 lg:grid-cols-2 lg:items-center lg:px-10 lg:pb-32"
      >
        <div className="relative overflow-hidden rounded-[2rem] bg-[#fff7e6] p-8 text-[#111827] shadow-2xl md:p-12">
          <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[#f4d58d]/60 blur-2xl" />
          <div className="absolute -bottom-20 -left-20 h-48 w-48 rounded-full bg-[#b8a7e8]/50 blur-2xl" />

          <div className="relative">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#75669f]">
              The night sampler
            </p>

            <h2 className="mt-4 max-w-md text-4xl font-black leading-tight md:text-5xl">
              Six cans. Three calming flavours.
            </h2>

            <p className="mt-6 max-w-md leading-7 text-[#4b5563]">
              Chamomile Peach, Lavender Lemon, and Berry Mint—made for a
              better way to end the day.
            </p>

            <div className="mt-8 flex items-end justify-between gap-4 border-t border-[#111827]/10 pt-7">
              <div>
                <p className="text-sm text-[#4b5563]">Sampler price</p>
                <p className="text-4xl font-black">₹799</p>
              </div>

              <button
                type="button"
                onClick={addToCart}
                className="rounded-full bg-[#111827] px-6 py-4 font-bold text-[#fff7e6] transition duration-300 hover:-translate-y-1 hover:bg-[#50456f] hover:shadow-xl"
              >
                Add to cart →
              </button>
            </div>

            <p className="mt-5 text-xs font-medium text-[#4b5563]">
              Free shipping on your first sampler order.
            </p>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#253451] p-8 md:p-12">
          <div className="absolute right-0 top-0 h-48 w-48 rounded-full bg-[#b8a7e8]/20 blur-3xl" />

          <p className="relative text-6xl animate-float">☾ ✦ ☁</p>

          <h3 className="relative mt-10 text-3xl font-black md:text-4xl">
            Your evening, redesigned.
          </h3>

          <ul className="relative mt-8 space-y-5 text-[#d8d2e8]">
            <li className="flex items-center gap-3">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#b8a7e8] text-sm text-[#111827]">
                ✓
              </span>
              Six caffeine-free botanical drinks
            </li>
            <li className="flex items-center gap-3">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#f28c8c] text-sm text-[#111827]">
                ✓
              </span>
              Three original relaxing flavours
            </li>
            <li className="flex items-center gap-3">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#f4d58d] text-sm text-[#111827]">
                ✓
              </span>
              A screen-free evening ritual guide
            </li>
            <li className="flex items-center gap-3">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#fff7e6] text-sm text-[#111827]">
                ✓
              </span>
              Recyclable aluminium packaging
            </li>
          </ul>
        </div>
      </section>

      <section
        id="reviews"
        className="relative overflow-hidden bg-[#253451] px-6 py-24 lg:px-10 lg:py-32"
      >
        <div className="absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-[#b8a7e8]/15 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#f4d58d]">
            Slow moments, real people
          </p>

          <h2 className="mt-4 max-w-2xl text-4xl font-black leading-tight md:text-6xl">
            Loved by people who are done scrolling.
          </h2>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {reviews.map((review) => (
              <blockquote
                key={review.author}
                className="rounded-3xl border border-white/10 bg-[#111827]/30 p-7 backdrop-blur-sm transition duration-500 hover:-translate-y-2 hover:bg-[#111827]/50"
              >
                <div className="mb-7 text-[#f4d58d]">★★★★★</div>

                <p className="leading-7 text-[#d8d2e8]">
                  “{review.quote}”
                </p>

                <div className="mt-8 flex items-center gap-3">
                  <div
                    className={`flex h-11 w-11 items-center justify-center rounded-full font-black text-[#111827] ${review.color}`}
                  >
                    {review.initials}
                  </div>

                  <cite className="not-italic font-bold">
                    — {review.author}
                  </cite>
                </div>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="mx-auto max-w-4xl px-6 py-24 lg:py-32">
        <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#b8a7e8]">
          Good questions
        </p>

        <h2 className="mt-4 text-4xl font-black md:text-5xl">
          Frequently asked questions
        </h2>

        <div className="mt-10 space-y-4">
          <details className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-[#b8a7e8]/50">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-5 font-bold">
              Is Slow Bull an official Red Bull product?
              <span className="text-2xl font-normal text-[#b8a7e8] transition-transform duration-300 group-open:rotate-45">
                +
              </span>
            </summary>

            <p className="mt-4 max-w-2xl leading-7 text-[#d8d2e8]">
              No. Slow Bull is an independent fictional concept created only
              for a front-end development assignment. It is not affiliated with
              Red Bull GmbH.
            </p>
          </details>

          <details className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-[#b8a7e8]/50">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-5 font-bold">
              Does Slow Bull contain caffeine?
              <span className="text-2xl font-normal text-[#b8a7e8] transition-transform duration-300 group-open:rotate-45">
                +
              </span>
            </summary>

            <p className="mt-4 max-w-2xl leading-7 text-[#d8d2e8]">
              No. The concept is designed as a caffeine-free evening beverage
              for people who want to make their night routine feel calmer.
            </p>
          </details>

          <details className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-[#b8a7e8]/50">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-5 font-bold">
              What flavours are included?
              <span className="text-2xl font-normal text-[#b8a7e8] transition-transform duration-300 group-open:rotate-45">
                +
              </span>
            </summary>

            <p className="mt-4 max-w-2xl leading-7 text-[#d8d2e8]">
              The sampler includes Chamomile Peach, Lavender Lemon, and Berry
              Mint, with two cans of each flavour.
            </p>
          </details>
        </div>
      </section>

      <section className="mx-6 mb-16 overflow-hidden rounded-[2rem] border border-[#f28c8c]/30 bg-gradient-to-br from-[#50456f] via-[#394563] to-[#1c2940] px-6 py-16 text-center shadow-2xl lg:mx-10">
        <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#f4d58d]">
          Your sign to slow down
        </p>

        <h2 className="mx-auto mt-5 max-w-3xl text-4xl font-black leading-tight md:text-6xl">
          Give your evening a different kind of boost.
        </h2>

        <p className="mx-auto mt-6 max-w-xl leading-7 text-[#d8d2e8]">
          Make room for tea, books, quiet playlists, deep breaths, and doing
          less on purpose.
        </p>

        <button
          type="button"
          onClick={addToCart}
          className="mt-10 rounded-full bg-[#f28c8c] px-7 py-4 font-bold text-[#111827] shadow-xl shadow-[#111827]/30 transition duration-300 hover:-translate-y-1 hover:bg-[#fff7e6]"
        >
          Get the night sampler →
        </button>
      </section>

      <footer className="border-t border-white/10 px-6 py-10 text-center text-sm text-[#a9a4b8]">
        <p className="font-bold tracking-[0.12em] text-[#fff7e6]">
          SLOW BULL
        </p>
        <p className="mt-3">Your day did enough. Now let it slow down.</p>
        <p className="mt-3 text-xs">
          Independent fictional concept. Not affiliated with Red Bull GmbH.
        </p>
      </footer>
    </main>
  );
}