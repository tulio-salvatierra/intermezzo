"use client";

import React, { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { EMAIL } from '@/app/constants/constants'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

export default function Header() {
  const headerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    const header = headerRef.current;
    if (!header) return;

    // Set initial state - hidden and positioned above
    gsap.set(header, {
      y: -100,
      opacity: 0,
    });

    // Animate dropping down
    gsap.to(header, {
      y: 0,
      opacity: 1,
      duration: 3,
      ease: "power3.out",
    });
  }, { scope: headerRef });

  return (
    <header ref={headerRef} className="fixed top-0 left-0 right-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
    <div className="container flex h-16 items-center justify-between">
      <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
        <Image
          src="/round_logo.png"
          width={40}
          height={40}
          alt="Intermezzo Sound Studio™ Logo"
          className="h-10 w-10"
        />
        <span className="text-xl md:text-3xl font-bold">Intermezzo Sound Studio™</span>
      </Link>
      <nav className="hidden md:flex gap-6">
        <Link
          href="#services"
          className="text-sm md:text-lg font-medium hover:text-cyan-200 transition-colors"
        >
          Servicios
        </Link>
        <Link
          href="#process"
          className="text-sm md:text-lg font-medium hover:text-cyan-200 transition-colors"
        >
          Proceso
        </Link>
        <Link
          href="#pricing"
          className="text-sm md:text-lg font-medium hover:text-cyan-200 transition-colors"
        >
          Precios
        </Link>
        <Link
          href="#contact"
          className="text-sm md:text-lg font-medium hover:text-cyan-200 transition-colors"
        >
          Contacto
        </Link>
      </nav>
      <div className="flex items-center gap-4">
        <Link
          href="#contact"
          className="text-sm md:text-lg font-medium hover:underline underline-offset-4"
        >
          Iniciar Proyecto
        </Link>
        <Button contact={{mode: "email", value: `mailto:${EMAIL}`}} className="bg-cyan-200 hover:bg-cyan-900 hover:text-white text-gray-900">
          Contactar
        </Button>
      </div>
    </div>
  </header>
  )
}