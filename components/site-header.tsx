"use client"

import Link from "next/link"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-gray-200 bg-white/80 backdrop-blur" role="banner">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2" aria-label="Navy Bistro home">
          <div className="h-8 w-8 rounded bg-[#0a2342]" aria-hidden="true" title="Navy Bistro logo" />
          <span className="text-base font-semibold tracking-tight text-[#0a2342]">Navy Bistro</span>
        </Link>

        <nav aria-label="Primary navigation" className="hidden items-center gap-8 md:flex">
          <Link href="#about" className="text-sm font-medium text-gray-700 hover:text-[#0a2342]">
            About
          </Link>
          <Link href="#menus" className="text-sm font-medium text-gray-700 hover:text-[#0a2342]">
            Menus
          </Link>
          <Link href="#gallery" className="text-sm font-medium text-gray-700 hover:text-[#0a2342]">
            Gallery
          </Link>
          <Link href="#contact" className="text-sm font-medium text-gray-700 hover:text-[#0a2342]">
            Contact
          </Link>
          <Link href="#contact">
            <Button className="bg-[#0a2342] text-white hover:bg-[#0a2342]/90">Reserve</Button>
          </Link>
        </nav>

        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="md:hidden bg-transparent" aria-label="Open menu">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-72">
            <div className="mt-6 grid gap-4">
              <Link href="#about" className="text-sm font-medium text-gray-900 hover:text-[#0a2342]">
                About
              </Link>
              <Link href="#menus" className="text-sm font-medium text-gray-900 hover:text-[#0a2342]">
                Menus
              </Link>
              <Link href="#gallery" className="text-sm font-medium text-gray-900 hover:text-[#0a2342]">
                Gallery
              </Link>
              <Link href="#contact" className="text-sm font-medium text-gray-900 hover:text-[#0a2342]">
                Contact
              </Link>
              <Link href="#contact">
                <Button className="mt-2 w-full bg-[#0a2342] text-white hover:bg-[#0a2342]/90">Reserve</Button>
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
