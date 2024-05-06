"use client";

import MainProvider from "~/context/MainProvider";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <MainProvider>{children}</MainProvider>
  );
}