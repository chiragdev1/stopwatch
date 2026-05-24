import React from "react";

function Card({ children }) {
  return (
    <section className="w-full rounded-4xl border border-zinc-200 bg-white p-6 shadow-[0_20px_60px_rgba(0,0,0,0.06)] dark:border-white/10 dark:bg-white/5 dark:shadow-black/20 sm:p-8">
      {children}
    </section>
  );
}

export default React.memo(Card);
