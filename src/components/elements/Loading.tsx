"use client";

import React from "react";
import { Spinner } from "@heroui/react";

const Loading = () => (
  <div className="fixed inset-0 flex items-center justify-center">
    <div className="container p-6 max-w-sm shadow rounded-md">
      <div className="flex space-x-4 justify-center">
        <Spinner label="Loading..." />
      </div>
    </div>
  </div>
);

export default Loading;
