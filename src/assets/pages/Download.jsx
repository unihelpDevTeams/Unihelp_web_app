import { ArrowRight, Download, ShieldCheck, Sparkles, Star, Smartphone } from "lucide-react";
import { Link } from "react-router-dom";
import { brand } from "../data/socialLinks";

export default function DownloadPage({ dark = false }) {
  const theme = dark
    ? {
        page: "bg-[#090D16] text-slate-100",
        card: "bg-[#111726]/85 border-slate-800",
        subtext: "text-slate-400",
        muted: "text-slate-300",
        accent: "bg-indigo-500/10 text-indigo-300 border-indigo-500/20",
      }
    : {
        page: "bg-slate-50 text-slate-900",
        card: "bg-white border-slate-200 shadow-lg shadow-slate-200/60",
        subtext: "text-slate-600",
        muted: "text-slate-700",
        accent: "bg-indigo-50 text-indigo-700 border-indigo-200",
      };

  return (
    <div className={`min-h-screen ${theme.page} py-10 md:py-16`}>
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className={`rounded-3xl border p-6 sm:p-10 ${theme.card}`}>
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] ${theme.accent}">
            <Smartphone size={14} />
            Android app download
          </div>

          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <h1 className="text-3xl font-black sm:text-5xl">Download UniHelp for Android</h1>
              <p className={`mt-5 text-lg leading-8 ${theme.subtext}`}>
                UniHelp is a student super app built for Nigerian university students. Download the official Android app to access academic resources, AI tutoring, campus tools, student communities, and more.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={brand.playStoreUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-5 py-3 font-bold text-white transition hover:bg-indigo-700"
                >
                  <Download size={18} />
                  Download on Google Play
                </a>
                <Link
                  to="/register"
                  className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-transparent px-5 py-3 font-bold text-inherit transition hover:bg-slate-100"
                >
                  Create an account
                  <ArrowRight size={16} />
                </Link>
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {[
                  ["AI tutor", "Ask study questions and get guidance."],
                  ["Past questions", "Access study materials for better revision."],
                  ["Student tools", "Track results, community, and campus services."],
                ].map(([title, text]) => (
                  <div key={title} className="rounded-2xl border border-slate-200/80 bg-slate-50/70 p-4">
                    <div className="mb-2 inline-flex rounded-full bg-indigo-100 p-2 text-indigo-600">
                      <Star size={15} />
                    </div>
                    <h2 className="text-base font-black">{title}</h2>
                    <p className={`mt-2 text-sm leading-6 ${theme.subtext}`}>{text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className={`rounded-3xl border p-5 ${theme.card}`}>
              <h2 className="text-2xl font-black">Why students use UniHelp</h2>
              <ul className="mt-6 space-y-4">
                {[
                  "Student-first academic resources and university tools.",
                  "Campus-focused community features and marketplace support.",
                  "GPA, CGPA, formula hub, and CBT preparation resources.",
                  "Simple Android app access for study and campus life.",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 rounded-full bg-emerald-500/15 p-1 text-emerald-500">
                      <ShieldCheck size={16} />
                    </span>
                    <span className={`leading-7 ${theme.muted}`}>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 rounded-2xl border border-indigo-500/20 bg-indigo-500/10 p-4">
                <p className="text-sm font-semibold uppercase tracking-[0.14em] text-indigo-500">Official app</p>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Package name: <span className="font-bold text-inherit">com.zenithdev.unihelp</span>
                </p>
                <p className="mt-1 text-sm text-slate-600">Google Play Store: UniHelp</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
