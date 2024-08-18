import { ReactNode } from "react";
import Footer from "./Footer";

function MainPage({ children }: { children: ReactNode }) {
  return (
    <div className="h-lvh bg-[#4828c5] bg-hero-pattern bg-no-repeat bg-center bg-[height:200px] bg-[length:400px]">
      {children}
    </div>
  );
}

export function Page({ children }: { children: ReactNode }) {
  return (
    <MainPage>
      {children} <Footer />
    </MainPage>
  );
}
