import type React from "react";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
});

export const metadata: Metadata = {
  title: "adTask.ai - Transform Your Digital Presence",
  description:
    "AI-powered marketing assistant that analyzes your business and creates personalized strategies",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${poppins.className} min-h-screen`}>
        {/* Scrollable Container */}
        <div className="relative min-h-screen overflow-hidden  bg-gradient-to-b from-black to-[#0C0F16]">
          {/* Background Grid */}
          <div className="absolute inset-0 pointer-events-none">
            <div
              className="absolute left-1/2 top-[20px] -translate-x-1/2 w-[700px] h-[700px] bg-grid-black/[0.15] dark:bg-grid-white/[0.2] bg-[length:50px_50px]"
              style={{
                maskImage:
                  "radial-gradient(circle, rgba(0,0,0,1) 20%, rgba(0,0,0,0) 60%)",
                WebkitMaskImage:
                  "radial-gradient(circle, rgba(0,0,0,1) 20%, rgba(0,0,0,0) 60%)",
              }}
            />
          </div>

          {/* Triangle Glow Effect */}
          <div className="absolute inset-x-0 top-20 z-0">
            {/* Diffused Triangle Glow */}
            <div className="absolute left-1/2 -translate-x-1/2">
              <div
                className="w-[500px] h-[500px] opacity-80"
                style={{
                  background:
                    "radial-gradient(circle at 50% 20%, rgba(91, 105, 139, 0.8) 25%, rgba(91, 105, 139, 0.5) 50%, transparent 85%)",
                  clipPath: "polygon(50% 0%, 100% 100%, 0% 100%)",
                  filter: "blur(200px)", // Increased blur for a soft diffused effect
                }}
              />
            </div>

            {/* Soft Ambient Glow */}
            <div
              className="absolute left-1/2 -translate-x-1/2
                w-[900px] h-[700px]
                bg-gradient-to-b from-[#5B698B]/40 to-transparent
                blur-[120px]
                opacity-50"
            />

            {/* Inner Glow for More Softness */}
            <div
              className="absolute left-1/2 -translate-x-1/2
                w-[500px] h-[500px]
                bg-[#5B698B]/50
                blur-[150px]
                opacity-60"
            />
          </div>

          {/* Main Content */}
          <div className="relative z-10">{children}</div>
        </div>
      </body>
    </html>
  );
}
