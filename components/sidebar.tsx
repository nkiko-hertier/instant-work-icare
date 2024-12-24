"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Activity, Calendar, ClipboardList, FileText, Home, Settings, User2 } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

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
    label: "Appointments",
    icon: Calendar,
    href: "/appointments",
  },
  {
    label: "Prescriptions",
    icon: ClipboardList,
    href: "/prescriptions",
  },
  {
    label: "Vital Signs",
    icon: Activity,
    href: "/vitals",
  },
  {
    label: "Profile",
    icon: User2,
    href: "/profile",
  },
  {
    label: "Settings",
    icon: Settings,
    href: "/settings",
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="space-y-4 py-4 flex flex-col h-full bg-card text-card-foreground">
      <div className="px-3 py-2">
        <h2 className="mb-2 px-4 text-lg font-semibold">HealthHub</h2>
      </div>
      <ScrollArea className="flex-1 px-3">
        {routes.map((route) => (
          <Link href={route.href} key={route.href}>
            <Button
              variant={pathname === route.href ? "secondary" : "ghost"}
              className={cn("w-full justify-start mb-1", 
                pathname === route.href && "bg-primary/10"
              )}
            >
              <route.icon className="mr-2 h-4 w-4" />
              {route.label}
            </Button>
          </Link>
        ))}
      </ScrollArea>
    </div>
  );
}