import { MenuAdmin } from "@/components/admin/MenuAdmin";

type AdminMenuLayoutProps = {
  children: React.ReactNode;
};

export default function AdminMenuLayout({ children }: AdminMenuLayoutProps) {
  return (
    <>
      <MenuAdmin />
      {children}
    </>
  );
}
