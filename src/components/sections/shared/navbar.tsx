"use client";
import * as SheetPrimitive from "@radix-ui/react-dialog";
import { Menu, XIcon } from "lucide-react";
import React from "react";
import { Button } from "@/components/ui/button";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import Container from "../../container";

const pages = [
  { name: "Início", href: "/" },
  { name: "Sobre", href: "/company" },
  { name: "Serviços", href: "/features" },
  { name: "Projectos", href: "/blog" },
  { name: "Comunica Summit", href: "/comunicasummit" },
  { name: "Contacto", href: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);
  const scrollRafRef = React.useRef<number | null>(null);

  const handleScroll = React.useCallback(() => {
    if (scrollRafRef.current !== null) return;
    scrollRafRef.current = requestAnimationFrame(() => {
      scrollRafRef.current = null;
      setIsScrolled(window.scrollY > 24);
    });
  }, []);

  React.useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollRafRef.current !== null) cancelAnimationFrame(scrollRafRef.current);
    };
  }, [handleScroll]);

  const closeSheet = React.useCallback(() => setIsOpen(false), []);

  return (
    <header className={cn("fixed inset-x-0 top-0 z-50 w-full transition-all duration-300", isScrolled ? "border-b border-white/10 bg-[#000038]/90 py-4 backdrop-blur-xl" : "border-b border-white/5 bg-[#000038]/70 pt-5 pb-4 backdrop-blur-sm")}>
      <Container className="flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <span className="text-white font-bold tracking-[0.2em] text-xl">CRIATIVA</span>
        </Link>

        <div className="flex items-center lg:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <button aria-label="Abrir menu" className="h-11 w-11 flex items-center justify-center text-white">
                <Menu className="w-6 h-6" />
              </button>
            </SheetTrigger>
            <SheetContent className="bg-[#000038] border-white/10 text-white">
              <div className="h-full flex flex-col">
                <SheetHeader className="border-b border-white/10">
                  <SheetTitle className="text-left text-white font-bold tracking-[0.2em]">CRIATIVA</SheetTitle>
                  <SheetPrimitive.Close aria-label="Fechar menu" className="absolute right-4 top-4">
                    <XIcon className="size-5 text-white" />
                  </SheetPrimitive.Close>
                </SheetHeader>
                <div className="px-2 py-8 flex flex-col gap-3">
                  {pages.map((page) => (
                    <Link key={page.href} to={page.href} onClick={closeSheet} className="py-2 text-white/70 hover:text-white">
                      {page.name}
                    </Link>
                  ))}
                  <Button asChild className="mt-5 bg-[#EF203D] hover:bg-[#EF203D]/90">
                    <Link to="/contact" onClick={closeSheet}>Falar com a Criativa</Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>

        <NavigationMenu className="hidden lg:block">
          <NavigationMenuList className="gap-1">
            {pages.map((page) => (
              <NavigationMenuItem key={page.href}>
                <NavigationMenuLink asChild>
                  <Link to={page.href} className="px-3 xl:px-4 py-2 text-sm text-white/75 hover:text-white transition-colors">{page.name}</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        <div className="hidden lg:flex items-center gap-3">
          <Button asChild className="bg-[#EF203D] hover:bg-[#EF203D]/90">
            <Link to="/contact">Falar com a Criativa</Link>
          </Button>
        </div>
      </Container>
    </header>
  );
};

export default Navbar;
