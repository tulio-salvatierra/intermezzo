import React from 'react'
import { Button } from '@/components/ui/button'
import { ChevronRight } from 'lucide-react'

export default function CTA() {
  return (
    <section
    id="contact"
    className="w-full h-screen py-12 md:py-24 lg:py-32 bg-purple-950 text-white bg-[url('/images/drumset.png')] bg-cover bg-bottom"
  >
    <div className="container px-4 md:px-6">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
            ¿Listo para llevar tu música al siguiente nivel?
          </h2>
          <p className="max-w-[600px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Contáctanos para iniciar tu proyecto o resolver cualquier duda
            sobre nuestros servicios.
          </p>
        </div>
        <div className="flex flex-col gap-2 min-[400px]:flex-row">
          <Button className="bg-cyan-200 text-gray-900 hover:bg-cyan-700">
            Iniciar Proyecto
            <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            className="text-black border-white hover:bg-white/10 hover:text-white"
          >
            Solicitar Información
          </Button>
        </div>
        <p className="text-xs text-gray-300">
          Te responderemos en un plazo máximo de 24 horas.
        </p>
      </div>
    </div>
  </section>
  )
}
