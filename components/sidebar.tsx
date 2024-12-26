"use client";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Activity, Calendar, ClipboardList, FileText, Home, Settings, User2, Heart } from "lucide-react"; // Changed icon import
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const routes = [
  {
    label: "Dashboard",
    icon: Home,
    href: "/",
  },
  {
    label: "Medical History",
    icon: FileText,
    href: "/medical-history",
  },
  {
    label: "Diagnostic Reports",
    icon: Calendar,
    href: "/Diagnosed",
  },
  {
    label: "Prescriptions",
    icon: ClipboardList,
    href: "/prescriptions",
  },
  {
    label: "AI Features",
    icon: Activity,
    href: "/Aifeature",
  },
  {
    label: "Profile",
    icon: User2,
    href: "/profile",
  },
  {
    label: "Health Program",
    icon: Heart, // Changed the icon for Health Program
    href: "/Healthprogram",
  },
  {
    label: "Settings",
    icon: Settings,
    href: "/settings",
  },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(true);
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`space-y-4 py-4 mt-24 flex flex-col h-full bg-card text-card-foreground md:w-64 lg:w-48 xl:w-64
      ${isOpen ? 'translate-x-0' : '-translate-x-full'} 
      md:translate-x-0 md:relative md:flex md:w-64 md:shadow-lg`}>
      <div className="flex justify-between items-center px-4 mt-10 py-3 md:hidden">
        <h2 className="mb-2 text-lg font-semibold">Icare</h2>
        <button onClick={toggleSidebar} className="text-white">
          {isOpen ? 'Close' : 'Open'}
        </button>
      </div>
      <ScrollArea className="flex-1 px-3">
        {routes.map((route) => (
          <Link href={route.href} key={route.href}>
            <Button
              variant={pathname === route.href ? "secondary" : "ghost"}
              className={cn("w-full justify-start mb-2 text-lg", // Increased font size
                pathname === route.href && "bg-primary/10"
              )}
            >
              <route.icon className="mr-2 h-5 w-5" /> {/* Increased icon size */}
              <span className={`transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}>
                {route.label}
              </span>
            </Button>
          </Link>
        ))}
      </ScrollArea>
    </div>
  );
}