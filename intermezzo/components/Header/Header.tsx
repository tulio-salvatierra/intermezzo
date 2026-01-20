import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { EMAIL } from '@/app/constants/constants'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
    <div className="container flex h-16 items-center justify-between">
      <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
        <Image
          src="/round_logo.png"
          width={40}
          height={40}
          alt="Intermezzo Sound Studio™ Logo"
          className="h-10 w-10"
        />
        <span className="text-xl font-bold">Intermezzo Sound Studio™</span>
      </Link>
      <nav className="hidden md:flex gap-6">
        <Link
          href="#services"
          className="text-sm font-medium hover:text-cyan-200 transition-colors"
        >
          Servicios
        </Link>
        <Link
          href="#process"
          className="text-sm font-medium hover:text-cyan-200 transition-colors"
        >
          Proceso
        </Link>
        <Link
          href="#pricing"
          className="text-sm font-medium hover:text-cyan-200 transition-colors"
        >
          Precios
        </Link>
        <Link
          href="#contact"
          className="text-sm font-medium hover:text-cyan-200 transition-colors"
        >
          Contacto
        </Link>
      </nav>
      <div className="flex items-center gap-4">
        <Link
          href="#contact"
          className="text-sm font-medium hover:underline underline-offset-4"
        >
          Iniciar Proyecto
        </Link>
        <Button contact={{mode: "email", value: `${EMAIL}`}} className="bg-cyan-200 hover:bg-cyan-900 hover:text-white text-gray-900">
          Contactar
        </Button>
      </div>
    </div>
  </header>
  )
}