"use client";

import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { useMaskedLines } from '@/hooks/use-masked-lines'
import { useEasyFromBelow } from '@/hooks/use-easy-from-below'

export default function About() {
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

  const { containerRef: nameRef } = useMaskedLines({
    stagger: 0.2,
    duration: 1.2,
    delay: 0.1,
    scroll: true,
    scrollStart: "top 80%",
  });

  const { containerRef: titleRef } = useMaskedLines({
    stagger: 0.15,
    duration: 1.0,
    delay: 0.2,
    scroll: true,
    scrollStart: "top 80%",
  });

  const { containerRef: bioRef } = useMaskedLines({
    stagger: 0.1,
    duration: 1.0,
    delay: 0.3,
    scroll: true,
    scrollStart: "top 80%",
  });

  const { ref: imageRef } = useEasyFromBelow({
    duration: 1.5,
    distance: 40,
    stagger: 0,
    scroll: true,
    scrollStart: "top 80%",
    delay: 0.4,
  });

  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-cyan-200 dark:bg-cyan-200 px-3 py-1 text-sm md:text-lg text-gray-900 dark:text-gray-900">
                  <span>Sobre Nosotros</span>
                </div>
                <h2 ref={headingRef as React.Ref<HTMLHeadingElement>} className="text-3xl md:text-5xl font-bold tracking-tighter">
                  Intermezzo Sound Studio™
                </h2>
                <p ref={descriptionRef as React.Ref<HTMLParagraphElement>} className="max-w-[900px] text-base md:text-xl text-muted-foreground">
                  Nos especializamos en la creación, producción y distribución
                  de música, abarcando géneros como música latina, tradicional
                  venezolana, afrobeat, jazz swing, música urbana, música
                  orquestal y pop en general.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div ref={imageRef}>
                <Image
                  src="/images/dorangel.png?height=400&width=400"
                  width={400}
                  height={400}
                  alt="Orangel Díaz, Fundador y Productor"
                  className="mx-auto shadow-2xl aspect-square overflow-hidden rounded-xl object-cover object-center sm:w-full"
                />
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h3 ref={nameRef as React.Ref<HTMLHeadingElement>} className="text-2xl md:text-4xl font-bold">Orangel Díaz</h3>
                  <p ref={titleRef as React.Ref<HTMLParagraphElement>} className="text-base md:text-xl text-cyan-200 font-medium">
                    Fundador y Productor
                  </p>
                </div>
                <div ref={bioRef as React.Ref<HTMLDivElement>}>
                  <p className="text-base md:text-xl text-muted-foreground">
                    Nuestra misión es ser un aliado creativo para los músicos,
                    facilitando el acceso a recursos profesionales, promoviendo la
                    autenticidad artística y fusionando la riqueza de las
                    tradiciones musicales con las tendencias modernas.
                  </p>
                  <p className="text-base md:text-xl text-muted-foreground">
                    También estamos en constante búsqueda de nuevos perfiles de
                    artistas y la exploración de sonidos contemporáneos para
                    enriquecer nuestras propuestas creativas.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
  )
}
