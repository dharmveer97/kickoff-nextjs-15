"use client";

import React from "react";
import { Skeleton } from "@heroui/react";

export default function SkeletonLoading() {
  return Array(8)
    .fill(0)
    .map((_, index) => {
      const key = `${index}loading`;
      return (
        <div className="flex gap-3 my-2" key={key}>
          <div className="relative flex-none">
            <Skeleton className="flex rounded-full w-12 h-12" />
          </div>
          <div className="flex w-full flex-col gap-4">
            <div className="relative w-full rounded-medium bg-content2 px-4 py-3 text-default-600">
              <div className="flex">
                <div className="w-full text-small font-semibold text-default-foreground">
                  <Skeleton className="h-3 w-4/5 rounded-lg" />
                </div>
                <div className="flex-end text-small text-default-400">
                  <Skeleton className="h-3 w-4/5 rounded-lg" />
                </div>
              </div>
              <div className="mt-2 text-small text-default-900">
                <Skeleton className="h-3 w-3/5 rounded-lg" />
              </div>
            </div>
          </div>
        </div>
      );
    });
}
