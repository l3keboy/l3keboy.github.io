import BaseLayout from "@/components/layouts/BaseLayout";

export default function StackLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <BaseLayout>{children}</BaseLayout>;
}
