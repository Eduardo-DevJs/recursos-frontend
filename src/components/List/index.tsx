import { PropsWithChildren } from "react";

export default function List({ children }: PropsWithChildren) {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
      {children}
    </ul>
  );
}
