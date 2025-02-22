import client from "@/lib/apollo-client";
import { ApolloProvider } from "@apollo/client";
import type { Metadata } from "next";
import { ApolloWrapper } from "./_components/ApolloWrapper";

export const metadata: Metadata = {
  title: "next relay",
  description: "next relay playground",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="ja">
      <body>
        <ApolloWrapper>{children}</ApolloWrapper>
      </body>
    </html>
  );
}
