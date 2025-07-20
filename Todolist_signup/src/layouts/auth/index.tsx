// layouts/LoginLayout.tsx
import { ReactNode } from "react";

type LayoutProps = {
  children: ReactNode;
};

export default function LoginLayout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-[#f9f9f9] grid grid-rows-[auto_1fr]">
      {/* Header */}
      <header
        className="flex items-center space-x-2 px-8"
        style={{
          height: "80px",
          backgroundColor: "rgba(210, 95, 0, 0.06)",
        }}
      >
        <img
          src="/Logo.svg"
          alt="Logo"
          style={{ width: "50px", height: "50px", marginLeft: "30px" }}
        />
        <span className="text-xl font-bold text-[#D25F00]">TODOLIST</span>
      </header>

      {/* Main Content */}
      <main className="flex justify-center items-center">
        <div className="w-full max-w-md px-4">{children}</div>
      </main>
    </div>
  );
}
