import MaintenanceBaseLayout from "@/components/layouts/MaintenanceBaseLayout";

export default function MaintenanceLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <MaintenanceBaseLayout>{children}</MaintenanceBaseLayout>;
}
