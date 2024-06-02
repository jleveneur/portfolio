"use client";

import Link from "next/link";
import { buttonVariants } from "../ui/button";
import { ModeToggle } from "./mode-toggle";
import Image from "next/image";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { navLinks, socialLinks } from "@/constants";
import { Separator } from "../ui/separator";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center justify-between">
        <Link href="/" className="hidden md:block">
          <span className="text-lg font-bold tracking-wider">JLEVENEUR</span>
        </Link>
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger>
              <Image
                src="/assets/icons/menu.svg"
                alt="Menu"
                width={20}
                height={20}
                className="dark:invert"
                priority
              />
            </SheetTrigger>
            <SheetContent side="left">
              <SheetHeader>
                <SheetTitle className="text-left">JLEVENEUR</SheetTitle>
                <SheetDescription className="text-left">
                  Full Stack Developer
                </SheetDescription>
              </SheetHeader>
              <Separator className="my-4" />
              <nav className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <SheetClose key={link.label} asChild>
                    <Link
                      href={link.route}
                      className="flex items-center gap-3 rounded-lg p-2 hover:bg-gray-100 dark:hover:bg-gray-800"
                    >
                      <Image
                        src={link.icon}
                        alt={link.label}
                        width={20}
                        height={20}
                        className="dark:invert"
                      />
                      <span className="text-lg font-bold">{link.label}</span>
                    </Link>
                  </SheetClose>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
        <nav className="hidden items-center gap-4 md:flex lg:gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.route}
              className={`${
                pathname === link.route
                  ? "text-foreground"
                  : "text-foreground/60"
              } transition-colors hover:text-foreground/80`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <nav className="flex items-center gap-2">
          {socialLinks.map((link) => (
            <Link
              key={link.label}
              className={buttonVariants({ variant: "ghost", size: "icon" })}
              href={link.url}
              target="_blank"
            >
              <Image
                src={link.icon}
                alt={link.label}
                width={16}
                height={16}
                className="dark:invert"
              />
            </Link>
          ))}
          <ModeToggle />
        </nav>
      </div>
    </header>
  );
};

export default Header;
