import Link from "next/link";

export const HeadNav = () => {
  return (
      <div className="flex items-center justify-between w-full">
        <Link href="/">
          Logo
        </Link>
      </div>
  );
};
