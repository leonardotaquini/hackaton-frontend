

import { NavigationMenuItem, NavigationMenuLink, navigationMenuTriggerStyle } from '@/components/shadcn/ui/navigation-menu';
import Link from 'next/link';


interface NavigationProps {
    title: string;
    path: string;
}

export const Navigation = ({ title, path }: NavigationProps) => {

    return (

        <NavigationMenuItem>
            <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                <Link href={path} >
                    {title}
                </Link>
            </NavigationMenuLink>
        </NavigationMenuItem>
    )
}
