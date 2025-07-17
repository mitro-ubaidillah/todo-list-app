'use client';

import { AppStore, makeStore, RootState } from "@/lib/store";
import { useRef } from "react";
import { Provider } from "react-redux";

function PageStoreWrapper({ 
  children, 
  preloadedState 
}: {
  children: React.ReactNode;
  preloadedState: Partial<RootState>;
}) {
  const storeRef = useRef<AppStore | null>(null);

  if (!storeRef.current) {
    storeRef.current = makeStore(preloadedState);
  }

  return <Provider store={storeRef.current}>{children}</Provider>
}

export default PageStoreWrapper;