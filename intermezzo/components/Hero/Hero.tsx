import React from 'react'
import { Button } from '@/components/ui/button'
import { ChevronRight } from 'lucide-react'
import { PHONE_NUMBER } from '@/app/constants/constants'

export default function Hero() {
  return (
    <section id="hero" className="w-full h-screen py-12 md:py-24 lg:py-32 xl:py-48 bg-[url('/images/violin.png')] bg-cover bg-center text-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
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
