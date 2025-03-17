"use client";

import { useEffect } from "react";

export default function ContextMenuProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
    };

    document.addEventListener("contextmenu", handleContextMenu);
    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
    };
  }, []);

  return <>{children}</>;
}
