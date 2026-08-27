import BaseLayout from "@/components/layouts/BaseLayout";

export default function HomeLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <BaseLayout>{children}</BaseLayout>;
}
