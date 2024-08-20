import { Card, CardContent, CardHeader } from "@/components/shadcn/ui/card";
import { LockKeyhole } from "lucide-react";

export default function FormLayout({ children}: {children: React.ReactNode;}) {

  return (
    
    <Card className="h-full border-none">
      <CardHeader className="flex justify-center items-center">
        <LockKeyhole size={48} />
      </CardHeader>
      <CardContent>
        { children }
      </CardContent>
    </Card>
  );
}