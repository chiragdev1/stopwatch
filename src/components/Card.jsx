export default function Card({ children }) {
  return (
    <div className="w-full max-w-2xl rounded-3xl border border-white/10 bg-slate-950/70 p-6 shadow-2xl shadow-black/30 backdrop-blur-xl sm:p-8">
      {children}
    </div>
  );
}
