"use client";
import React from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import Link from "next/link";
import { sidebarLinks } from "@/constants";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

const MobileNav = () => {
  const pathname = usePathname();
  return (
    <section className="w-full max-w-[264px]">
      <Sheet>
        <SheetTrigger>
          <Image
            src="/icons/hamburger.svg"
            alt="menu"
            width={30}
            height={30}
            className=" cursor-pointer"
          />
        </SheetTrigger>
        <SheetContent side="left" className=" border-none bg-white">
          <Link
            href="/"
            className="gap-2  flex mb-12 cursor-pointer item-center"
          >
            <Image
              src="/icons/logo.svg"
              width={34}
              height={34}
              alt="Arcon logo"
              className="size-[24] max-xl:size-14"
            />
            <h1 className="text-26 font-ibm-plex-serif font-bold text-black-1">
              Arcon Bankign{" "}
            </h1>
          </Link>
          <div className="mobilenav-sheet">
            <SheetClose asChild>
              <nav className="flex h-full flex-col gap-6 py-16 text-white">
                {sidebarLinks.map((item) => {
                  const isActive =
                    pathname === item.route ||
                    pathname.startsWith(`${item.route}/`);

                  return (
                    <SheetClose asChild key={item.route}>
                      <Link
                        href={item.route}
                        key={item.label}
                        className={cn("mobilenav-sheet_close w-full", {
                          "bg-bank-gradient": isActive,
                        })}
                      >
                        <div className="relative size-6">
                          <Image
                            src={item.imgURL}
                            alt={item.label}
                            width={20}
                            height={20}
                            className={cn({
                              "brightness-[3] invert-0": isActive,
                            })}
                          ></Image>
                        </div>
                        <p
                          className={cn("text-16 font-semibold text-black-2", {
                            "!text-white": isActive,
                          })}
                        >
                          {item.label}
                        </p>
                      </Link>
                    </SheetClose>
                  );
                })}
                USER
              </nav>
            </SheetClose>
            FOOTER  
          </div>
        </SheetContent>
      </Sheet>
    </section>
  );
};

export default MobileNav;
