"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Clock } from "lucide-react"
import SiteHeader from "@/components/site-header"

export default function Page() {
  return (
    <div className="flex min-h-dvh flex-col bg-white">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero */}
        <section aria-label="Hero" className="relative overflow-hidden" style={{ backgroundColor: "#0a2342" }}>
          <div className="absolute inset-0 opacity-20">
            <Image
              src="/moody-restaurant-interior.png"
              alt="Moody restaurant interior background"
              fill
              sizes="100vw"
              className="object-cover"
              priority
            />
          </div>
          <div className="relative">
            <div className="mx-auto max-w-7xl px-4 py-24 sm:py-28 md:py-32">
              <div className="max-w-2xl">
                <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">Navy Bistro</h1>
                <p className="mt-4 text-lg text-white/80">
                  Coastal-inspired cuisine, seasonal ingredients, and warm hospitality in the heart of the city.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Link href="#menus" className="w-full sm:w-auto">
                    <Button className="w-full bg-white text-[#0a2342] hover:bg-white/90" aria-label="View Menus">
                      View Menus
                    </Button>
                  </Link>
                  <Link href="#contact" className="w-full sm:w-auto">
                    <Button
                      variant="outline"
                      className="w-full border-white text-white hover:bg-white/10 hover:text-white bg-transparent"
                      aria-label="Book a Table"
                    >
                      Book a Table
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" aria-label="About" className="w-full py-16 sm:py-20 md:py-24">
          <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 md:grid-cols-2">
            <div className="order-last md:order-first">
              <h2 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">About Us</h2>
              <p className="mt-4 text-gray-600">
                At Navy Bistro, we celebrate ocean-forward flavors with seasonal produce, thoughtfully curated wines,
                and craft cocktails. Our kitchen blends classic technique with modern sensibilities to create dishes
                that feel both familiar and new.
              </p>
              <p className="mt-4 text-gray-600">
                Join us for a cozy dinner, a celebratory evening, or a casual weekend brunch. We look forward to hosting
                you.
              </p>
              <div className="mt-6">
                <Link href="#gallery" className="inline-block">
                  <Button className="bg-[#0a2342] text-white hover:bg-[#0a2342]/90">Explore the Space</Button>
                </Link>
              </div>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl border">
              <Image
                src="/chef-plating-seafood.png"
                alt="Chef plating a seasonal seafood dish"
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* Menus */}
        <section id="menus" aria-label="Menus" className="w-full bg-gray-50 py-16 sm:py-20 md:py-24">
          <div className="mx-auto max-w-7xl px-4">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">Our Menus</h2>
              <p className="mt-3 text-gray-600">
                Seasonal selections inspired by the coast. Ask about daily specials and chef&apos;s tasting.
              </p>
            </div>

            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>Brunch</CardTitle>
                  <CardDescription>Weekends 10am–2pm</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2 text-sm text-gray-600">
                  <p>{"• Smoked Salmon Benedict"}</p>
                  <p>{"• Lemon Ricotta Pancakes"}</p>
                  <p>{"• Crab Omelette"}</p>
                  <Link href="#" aria-label="View full brunch menu">
                    <Button
                      variant="outline"
                      className="mt-4 border-[#0a2342] text-[#0a2342] hover:bg-[#0a2342]/10 bg-transparent"
                    >
                      View full menu
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Lunch</CardTitle>
                  <CardDescription>Daily 11:30am–3pm</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2 text-sm text-gray-600">
                  <p>{"• Lobster Roll"}</p>
                  <p>{"• Tuna Niçoise"}</p>
                  <p>{"• Grilled Shrimp Skewers"}</p>
                  <Link href="#" aria-label="View full lunch menu">
                    <Button
                      variant="outline"
                      className="mt-4 border-[#0a2342] text-[#0a2342] hover:bg-[#0a2342]/10 bg-transparent"
                    >
                      View full menu
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Dinner</CardTitle>
                  <CardDescription>Nightly from 5pm</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2 text-sm text-gray-600">
                  <p>{"• Seared Scallops"}</p>
                  <p>{"• Charred Octopus"}</p>
                  <p>{"• Herb-Crusted Sea Bass"}</p>
                  <Link href="#" aria-label="View full dinner menu">
                    <Button
                      variant="outline"
                      className="mt-4 border-[#0a2342] text-[#0a2342] hover:bg-[#0a2342]/10 bg-transparent"
                    >
                      View full menu
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section id="gallery" aria-label="Gallery" className="w-full py-16 sm:py-20 md:py-24">
          <div className="mx-auto max-w-7xl px-4">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">Gallery</h2>
              <p className="mt-3 text-gray-600">A glimpse into our space and plates.</p>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6">
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                <Image
                  src="/signature-seafood-dish.png"
                  alt="Signature seafood dish"
                  fill
                  sizes="(min-width: 768px) 33vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                <Image
                  src="/elegant-restaurant.png"
                  alt="Dining room ambiance"
                  fill
                  sizes="(min-width: 768px) 33vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg sm:col-span-2 sm:row-span-2">
                <Image
                  src="/bar-and-cocktails.png"
                  alt="Bar and craft cocktails"
                  fill
                  sizes="(min-width: 768px) 66vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                <Image
                  src="/fresh-oysters.png"
                  alt="Fresh oysters on ice"
                  fill
                  sizes="(min-width: 768px) 33vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                <Image
                  src="/elegant-dessert-plating.png"
                  alt="Dessert plating"
                  fill
                  sizes="(min-width: 768px) 33vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" aria-label="Contact" className="w-full bg-gray-50 py-16 sm:py-20 md:py-24">
          <div className="mx-auto max-w-7xl px-4">
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <h2 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">Contact</h2>
                <p className="mt-3 text-gray-600">
                  Reserve a table, plan a private event, or ask a question. We&apos;re here to help.
                </p>

                <div className="mt-6 space-y-4 text-gray-700">
                  <p className="flex items-start gap-3">
                    <MapPin className="mt-0.5 h-5 w-5 text-[#0a2342]" aria-hidden="true" />
                    {"123 Harbor Lane, Seaside City"}
                  </p>
                  <p className="flex items-start gap-3">
                    <Phone className="mt-0.5 h-5 w-5 text-[#0a2342]" aria-hidden="true" />
                    <a href="tel:+1234567890" className="hover:underline">
                      {"(+1) 234-567-890"}
                    </a>
                  </p>
                  <p className="flex items-start gap-3">
                    <Clock className="mt-0.5 h-5 w-5 text-[#0a2342]" aria-hidden="true" />
                    {"Mon–Thu 11:30am–10pm · Fri–Sat 11:30am–11pm · Sun 10am–9pm"}
                  </p>
                </div>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Send us a message</CardTitle>
                  <CardDescription>We usually respond within one business day.</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={(e) => e.preventDefault()} className="grid gap-4" aria-label="Contact form">
                    <div className="grid gap-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Name
                      </label>
                      <Input id="name" name="name" placeholder="Your name" />
                    </div>
                    <div className="grid gap-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email
                      </label>
                      <Input id="email" name="email" type="email" placeholder="you@example.com" />
                    </div>
                    <div className="grid gap-2">
                      <label htmlFor="message" className="text-sm font-medium">
                        Message
                      </label>
                      <Textarea id="message" name="message" placeholder="How can we help?" rows={5} />
                    </div>
                    <Button className="bg-[#0a2342] text-white hover:bg-[#0a2342]/90">Send</Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-6 sm:flex-row">
          <p className="text-sm text-gray-500">
            {"\u00A9"} {new Date().getFullYear()} Navy Bistro. All rights reserved.
          </p>
          <nav aria-label="Footer navigation" className="flex gap-6 text-sm">
            <Link href="#about" className="text-gray-600 hover:text-[#0a2342] hover:underline underline-offset-4">
              About
            </Link>
            <Link href="#menus" className="text-gray-600 hover:text-[#0a2342] hover:underline underline-offset-4">
              Menus
            </Link>
            <Link href="#gallery" className="text-gray-600 hover:text-[#0a2342] hover:underline underline-offset-4">
              Gallery
            </Link>
            <Link href="#contact" className="text-gray-600 hover:text-[#0a2342] hover:underline underline-offset-4">
              Contact
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}
