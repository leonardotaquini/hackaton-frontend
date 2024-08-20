
export default function AuthLayout({
 children
}: {
 children: React.ReactNode;
}) {
  return (
    <main className="h-full grid grid-cols-12">
      <section className="sm:grid place-items-center hidden col-span-6 ">
        <h1 className="text-center text-2xl">Welcome to Devpools</h1>
      </section>
      <section className="col-span-12 sm:col-span-6">
        { children }
      </section>
    </main>
  );
}