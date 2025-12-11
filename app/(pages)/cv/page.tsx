// app/cv/page.tsx
"use client";

import { Download, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function CVPage() {
  const cvUrl = "/CV.pdf"; // Your PDF in public folder

  return (
    <div className="min-h-screen bg-gray-900 p-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6 p-4 bg-white/5 rounded-lg">
          <Link
            href="/"
            className="flex items-center gap-2 text-white/70 hover:text-white transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>

          <h1 className="text-2xl font-bold text-white">My Curriculum Vitae</h1>

          <a
            href={cvUrl}
            download="YourName_CV.pdf"
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
          >
            <Download className="h-4 w-4" />
            Download PDF
          </a>
        </div>

        {/* PDF Viewer */}
        <div className="bg-white rounded-lg shadow-2xl overflow-hidden">
          <iframe
            src={`${cvUrl}#view=FitH`}
            className="w-full h-[calc(100vh-150px)]"
            title="My CV"
          />
        </div>

        {/* Mobile fallback */}
        <div className="mt-4 text-center text-white/60 text-sm">
          <p>
            Can't view PDF?{" "}
            <a href={cvUrl} className="text-blue-400 hover:underline">
              Download it here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
