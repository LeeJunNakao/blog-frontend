"use client";

import StyledComponentsRegistry from "./lib/registry";
import DefaultLayout from "@/components/layout/DefaultLayout";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <StyledComponentsRegistry>
          <DefaultLayout>{children}</DefaultLayout>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
