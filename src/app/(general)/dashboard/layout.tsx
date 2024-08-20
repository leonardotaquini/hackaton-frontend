import { SubMenu } from "@/components/dashboard/SubMenu";
import { redirect } from "next/navigation";



export const metadata = {
 title: 'Dashboard',
 description: 'Dashboard',
};

export default function DasboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <main className="h-full flex flex-col">
      <SubMenu />
      {children}
    </main>
  );
}
