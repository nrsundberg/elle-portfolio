import { ReactNode } from "react";
import Footer from "./Footer";

function MainPage({ children }: { children: ReactNode }) {
  return <div className="h-lvh bg-pink-500">{children}</div>;
}

export function Page({ children }: { children: ReactNode }) {
  return (
    <MainPage>
      {children} <Footer />
    </MainPage>
  );
}
