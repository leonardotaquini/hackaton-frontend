import { UserMenu } from "./UserMenu";
import { AuthNav } from "./AuthNav";
import { Navigation } from "./Navigation";
import { redirect } from "next/navigation";
import { NavigationMenuItem } from "@/components/shadcn/ui/navigation-menu";
import { ModeToggle } from "@/components/shadcn/mode-toggle";



export const MenuList = () => {


    const navigation = [
        { title: 'Dashboard', path: '/dashboard' },
        { title: 'item2', path: '/item2' },
        { title: 'item3', path: '/item3' },
      ];

      const handleLogout = () => {
        redirect('/');
      };
    

  return (
    <>
        {navigation.map(({ path, title }, index) => (
          <Navigation key={index} path={path} title={title} />
        ))}
        <NavigationMenuItem>
          <ModeToggle />
        </NavigationMenuItem>

    </>
  );
};
