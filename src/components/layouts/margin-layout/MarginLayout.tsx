import { ReactNode } from "react";

import "./MarginLayout.css";

export default function MarginLayout({ children }: { children: ReactNode }) {
  return (
    <div
      className="content-layout__container"
      data-testid="content-layout__container"
    >
      {children}
    </div>
  );
}
