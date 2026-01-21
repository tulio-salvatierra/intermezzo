import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { EMAIL, INSTAGRAM } from '@/app/constants/constants'
import { Facebook, Instagram, Mail, Youtube } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="w-full border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <div className="flex items-center gap-2">
          <Image
              src="/round_logo.png"
              width={40}
              height={40}
              alt="Intermezzo Sound Studio™ Logo"
              className="h-10 w-10"
            />
            <span className="text-lg md:text-2xl font-bold">Intermezzo Sound Studio™</span>
          </div>
      
          <div className="flex items-center gap-4">
            <Link
              href={INSTAGRAM}
              className="text-muted-foreground hover:text-foreground"
            >
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link
              href="https://www.youtube.com/@intermezzosound"
              className="text-muted-foreground hover:text-foreground"
            >
              <Youtube className="h-5 w-5" />
              <span className="sr-only">YouTube</span>
            </Link>
            <Link
              href={INSTAGRAM}
              className="text-muted-foreground hover:text-foreground"
            >
              <Facebook className="h-5 w-5" />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link
              href={EMAIL}
              className="text-muted-foreground hover:text-foreground"
            >
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </Link>
          </div>
        </div>
      </footer>
  )
}
