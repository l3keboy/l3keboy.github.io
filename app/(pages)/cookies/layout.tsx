import CookieDeclaration from "@/components/common/analytics/Cookies/CookieDeclaration";
import BaseLayout from "@/components/layouts/BaseLayout";

export default async function CookiesGroupLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <BaseLayout>
      {children}
      <div className="flex flex-col gap-3 justify-center mt-6 mx-auto">
        <CookieDeclaration />
      </div>
    </BaseLayout>
  );
}
