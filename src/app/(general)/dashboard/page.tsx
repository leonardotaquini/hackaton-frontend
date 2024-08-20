import { redirect } from "next/navigation";


export default function DashboardPage() {
  return (
    // <section className="h-full grid place-items-center">
    //   <h1>Dashboard Page</h1>
    // </section>
    redirect("/dashboard/chart")
  );
}