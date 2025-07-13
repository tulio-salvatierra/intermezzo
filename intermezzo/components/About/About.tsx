import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

export default function About() {
  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-cyan-200 dark:bg-cyan-200 px-3 py-1 text-sm text-gray-900 dark:text-gray-900">
                  <span>Sobre Nosotros</span>
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                  Intermezzo Sound Studio™
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Nos especializamos en la creación, producción y distribución
                  de música, abarcando géneros como música latina, tradicional
                  venezolana, afrobeat, jazz swing, música urbana, música
                  orquestal y pop en general.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <Image
                src="/images/dorangel.png?height=400&width=400"
                width={400}
                height={400}
                alt="Orangel Díaz, Fundador y Productor"
                className="mx-auto shadow-2xl aspect-square overflow-hidden rounded-xl object-cover object-center sm:w-full"
              />
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">Orangel Díaz</h3>
                  <p className="text-cyan-200 font-medium">
                    Fundador y Productor
                  </p>
                </div>
                <p className="text-muted-foreground">
                  Nuestra misión es ser un aliado creativo para los músicos,
                  facilitando el acceso a recursos profesionales, promoviendo la
                  autenticidad artística y fusionando la riqueza de las
                  tradiciones musicales con las tendencias modernas.
                </p>
                <p className="text-muted-foreground">
                  También estamos en constante búsqueda de nuevos perfiles de
                  artistas y la exploración de sonidos contemporáneos para
                  enriquecer nuestras propuestas creativas.
                </p>
              </div>
            </div>
          </div>
        </section>
  )
}
