import { Navbar } from "@/components/ui/Navbar/Navbar";

export const metadata = {
  title: "DevPools",
  description: "DevPools",
};

export default function GeneralLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
