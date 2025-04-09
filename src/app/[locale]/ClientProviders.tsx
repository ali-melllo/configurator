'use client';

import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/sonner";
import { store } from "../../redux/store";
import { Provider } from "react-redux";
import Header from "@/components/header";
import FrequentlyAskedModal from "@/components/main/modals/frequently-asked-modal";

export default function ClientProviders({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      <TooltipProvider delayDuration={0}>
        <Toaster />
        <Provider store={store}>
          <Header />
          {children}
          <FrequentlyAskedModal />
        </Provider>
      </TooltipProvider>
    </ThemeProvider>
  );
}
