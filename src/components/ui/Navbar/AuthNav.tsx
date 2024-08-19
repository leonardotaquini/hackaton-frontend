import { Button } from "@/components/shadcn/ui/button";
import Link from "next/link";

export const AuthNav = () => {
  return (
    <div className="flex space-x-1">
      <Button asChild variant={"ghost"}>
        <Link href="/auth/login">Iniciar Sesión</Link>
      </Button>
      <Button asChild variant={"default"}>
        <Link href="/auth/signup">Registrarse</Link>
      </Button>
    </div>
  );
};
