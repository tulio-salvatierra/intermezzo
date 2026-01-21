"use client";

import React from 'react'
import Script from 'next/script'
import { Button } from '@/components/ui/button'
import { ChevronRight } from 'lucide-react'
import { PHONE_NUMBER } from '@/app/constants/constants'
import { useMaskedLines } from '@/hooks/use-masked-lines'
import { useEasyFromBelow } from '@/hooks/use-easy-from-below'

export default function Hero() {
  const { containerRef: headingRef } = useMaskedLines({
    stagger: 0.2,
    duration: 1.4,
    delay: 0.1,
  });

  const { containerRef: descriptionRef } = useMaskedLines({
    stagger: 0.15,
    duration: 1.2,
    delay: 0.3,
  });

  const { ref: buttonsRef } = useEasyFromBelow({
    stagger: 0.1,
    duration: 1.2,
    distance: 20,
    scroll: false, // Animate immediately, not on scroll
    delay: 0.5, // Start after text animations
  });

  return (
    <section id="hero" className="relative w-full h-screen py-12 md:py-24 lg:py-32 xl:py-48 text-white overflow-hidden">
      {/* UnicornStudio Background */}
      <div className="absolute inset-0 z-0 w-full h-full">
        <div 
          data-us-project="Cm0aDmjwXpkJPmkM7CHf" 
          className="w-full h-full"
        />
      </div>
      
      {/* UnicornStudio Initialization Script */}
      <Script
        id="unicorn-studio-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v2.0.2/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
          `,
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 container px-4 md:px-6 h-full">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px] h-full">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 ref={headingRef as React.Ref<HTMLHeadingElement>} className="text-4xl sm:text-5xl md:text-6xl xl:text-8xl font-bold tracking-tighter">
                Fusionando la herencia musical con las tendencias emergentes
              </h1>
              <p ref={descriptionRef as React.Ref<HTMLParagraphElement>} className="max-w-[600px] text-base md:text-xl text-gray-300">
                Estudio digital y remoto de producción musical semiprofesional, diseñado para ofrecer servicios accesibles y de alta calidad a artistas emergentes.
              </p>
            </div>
            <div ref={buttonsRef} className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button contact={{mode: 'phone', value: `callto:${PHONE_NUMBER}` }} className="bg-cyan-200 hover:bg-cyan-900">
                Iniciar Proyecto
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
              scrollTarget="about"
                variant="outline"
                className="text-gray-900 border-white hover:bg-white/10 hover:text-white"
              >
                Conocer Más
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
