"use client";

import { SessionProvider } from "next-auth/react";
import { Provider } from "react-redux";
import { store } from "../../redux/store";
import Hydration from "@/components/Hydration/Hydration";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <Provider store={store}>
        <Hydration>{children}</Hydration>
      </Provider>
    </SessionProvider>
  );
}
