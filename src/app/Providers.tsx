"use client";

import { SessionProvider } from "next-auth/react";
import { Provider } from "react-redux";
import { usePathname } from "next/navigation";
import { ThemeProvider } from "@mui/material";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { store } from "../redux/store";
import theme from "../theme";
import LayoutPage from "../components/Layout/LayoutPage";

export default function Providers({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAuthRoute =
    pathname?.startsWith("/auth/sign-in") ||
    pathname.startsWith("/auth/sign-up");

  return (
    <SessionProvider>
      <Provider store={store}>
        <AppRouterCacheProvider options={{ key: "css" }}>
          <ThemeProvider theme={theme}>
            {isAuthRoute ? children : <LayoutPage>{children}</LayoutPage>}
          </ThemeProvider>
        </AppRouterCacheProvider>
      </Provider>
    </SessionProvider>
  );
}
