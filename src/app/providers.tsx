"use client";

import * as React from "react";

import { Loading } from "@/components/elements";

export function Providers({ children }) {
  return <React.Suspense fallback={<Loading />}>{children}</React.Suspense>;
}
