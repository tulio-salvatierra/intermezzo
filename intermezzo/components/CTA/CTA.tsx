"use client";

import React from 'react'
import { Button } from '@/components/ui/button'
import { ChevronRight } from 'lucide-react'
import { useMaskedLines } from '@/hooks/use-masked-lines'
import { useEasyFromBelow } from '@/hooks/use-easy-from-below'
import { EMAIL, PHONE_NUMBER } from '@/app/constants/constants';

export default function CTA() {
  const { containerRef: headingRef } = useMaskedLines({
    stagger: 0.2,
    duration: 1.4,
    delay: 0.1,
    scroll: true,
    scrollStart: "top 80%",
  });

  const { containerRef: descriptionRef } = useMaskedLines({
    stagger: 0.15,
    duration: 1.2,
    delay: 0.2,
    scroll: true,
    scrollStart: "top 80%",
  });

  const { ref: buttonsRef } = useEasyFromBelow({
    stagger: 0.1,
    duration: 1.2,
    distance: 20,
    scroll: true,
    scrollStart: "top 80%",
    delay: 0.3,
  });
  return (
    <section
    id="contact"
    className="w-full h-screen py-12 md:py-24 lg:py-32 bg-purple-950 text-white bg-[url('/images/drumset.png')] bg-cover bg-bottom"
  >
    <div className="container px-4 md:px-6">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2">
          <h2 ref={headingRef as React.Ref<HTMLHeadingElement>} className="text-3xl md:text-5xl font-bold tracking-tighter">
            ¿Listo para llevar tu música al siguiente nivel?
          </h2>
          <p ref={descriptionRef as React.Ref<HTMLParagraphElement>} className="max-w-[600px] text-base md:text-xl text-gray-300">
            Contáctanos para iniciar tu proyecto o resolver cualquier duda
            sobre nuestros servicios.
          </p>
        </div>
        <div ref={buttonsRef} className="flex flex-col gap-2 min-[400px]:flex-row">
          <Button 
            contact={{mode: 'phone', value: PHONE_NUMBER}} 
            className="bg-cyan-200 text-gray-900 hover:bg-cyan-700"
          >
            Iniciar Proyecto
            <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            className="text-black border-white hover:bg-white/10 hover:text-white"
            contact={{mode: 'email', value: EMAIL}}
          >
            Solicitar Información
          </Button>
        </div>
        <p className="text-xs md:text-base text-gray-300">
          Te responderemos en un plazo máximo de 24 horas.
        </p>
      </div>
    </div>
  </section>
  )
}
