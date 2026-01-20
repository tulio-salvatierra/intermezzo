import React from 'react'
import Script from 'next/script'
import { Button } from '@/components/ui/button'
import { ChevronRight } from 'lucide-react'
import { PHONE_NUMBER } from '@/app/constants/constants'

export default function Hero() {
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
              <h1 className="text-5xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Fusionando la herencia musical con las tendencias emergentes
              </h1>
              <p className="max-w-[600px] text-gray-300 md:text-xl">
                Estudio digital y remoto de producción musical
                semiprofesional, diseñado para ofrecer servicios accesibles
                y de alta calidad a artistas emergentes.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
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
