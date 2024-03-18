"use client";

import Link from "next/link";
import React from "react";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import {
  DocumentDuplicateIcon,
  HomeIcon,
  UserGroupIcon,
} from "@heroicons/react/16/solid";

const links = [
  { name: "Home", href: "/dashboard", icon: HomeIcon },
  {
    name: "Invoices",
    href: "/dashboard/invoices",
    icon: DocumentDuplicateIcon,
  },
  { name: "Customers", href: "/dashboard/customers", icon: UserGroupIcon },
];
const SidebarItems = () => {
  const pathName = usePathname();
  console.log(pathName, "sdfsfs");
  return (
    <div className="flex lg:flex-col gap-2">
      {links.map((link) => (
        <Link
          key={link.name}
          href={link.href}
          title={link.name}
          className={clsx(
            "flex items-center justify-center lg:justify-start gap-2 p-2 rounded-md hover:bg-blue-600/15 hover:text-blue-600 transition-colors duration-150 w-full",
            { "bg-blue-600/15 text-blue-600": pathName === link.href }
          )}
        >
          <link.icon className="size-8" />
          <span className="text-lg hidden lg:block">{link.name}</span>
        </Link>
      ))}
    </div>
  );
};

export default SidebarItems;
