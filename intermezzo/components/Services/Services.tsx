"use client";

import React from 'react'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card'
import { Music, Sparkles, Radio, PlayCircle, Music2, LucideIcon } from 'lucide-react'
import { useMaskedLines } from '@/hooks/use-masked-lines'
import { useEasyFromBelow } from '@/hooks/use-easy-from-below'

interface Service {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
  content: string;
  price: string;
}

const services: Service[] = [
  {
    id: '1',
    icon: Music,
    title: 'Producción Musical Completa',
    description: 'Desarrollo de proyectos desde los arreglos hasta la mezcla y masterización final.',
    content: 'Creamos un sonido único que refleja tu visión artística, adaptándonos a diversos géneros musicales.',
    price: '$300 - $1,000',
  },
  {
    id: '2',
    icon: Music,
    title: 'Mezcla y Masterización',
    description: 'Refinamos y equilibramos tus pistas para garantizar un sonido competitivo.',
    content: 'Optimizamos tu música para que suene profesional en todos los dispositivos y plataformas.',
    price: '$50 por mezcla y masterización',
  },
  {
    id: '3',
    icon: Sparkles,
    title: 'Servicios de Arreglo',
    description: 'Arreglos personalizados y grabaciones de instrumentos.',
    content: 'Guitarra, bajo, piano, violín, viola, cuatro, y mandolina en diversos estilos musicales.',
    price: 'Desde $50 por sesión',
  },
  {
    id: '4',
    icon: Radio,
    title: 'Distribución Digital',
    description: 'Publicamos tu música en todas las plataformas principales.',
    content: 'Spotify, Apple Music, Amazon Music, YouTube Music y más, utilizando un modelo de pago único.',
    price: '$50 por canción / $150 por álbum',
  },
  {
    id: '5',
    icon: PlayCircle,
    title: 'Minicovers para Redes',
    description: 'Contenido visual para promocionar tu música.',
    content: 'Videos cortos optimizados para Instagram, TikTok y YouTube que destacan tu música.',
    price: 'Gratuito - $30 por video',
  },
  {
    id: '6',
    icon: Music2,
    title: 'Asesoría Legal y Registro',
    description: 'Protección de tu música y gestión de derechos de autor.',
    content: 'Orientación en aspectos básicos de protección y registro formal en oficinas de derechos de autor.',
    price: 'Desde $40 por sesión',
  },
];

export default function Services() {
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

  const { ref: cardsRef } = useEasyFromBelow({
    stagger: 0.1,
    duration: 1.2,
    distance: 30,
    scroll: true,
    scrollStart: "top 80%",
    delay: 0.3,
  });

  return (
    <section
          id="services"
          className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-cyan-200 dark:bg-cyan-900 px-3 py-1 text-sm md:text-lg text-gray-900 dark:text-gray-900">
                  <span>Servicios</span>
                </div>
                <h2 ref={headingRef as React.Ref<HTMLHeadingElement>} className="text-3xl md:text-5xl font-bold tracking-tighter">
                  Nuestros Servicios
                </h2>
                <p ref={descriptionRef as React.Ref<HTMLParagraphElement>} className="max-w-[900px] text-base md:text-xl text-muted-foreground">
                  Ofrecemos una amplia gama de servicios para ayudarte a llevar
                  tu música al siguiente nivel.
                </p>
              </div>
            </div>
            <div ref={cardsRef} className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => {
                const IconComponent = service.icon;
                return (
                  <Card key={service.id}>
                    <CardHeader>
                      <IconComponent className="h-10 w-10 text-cyan-200 mb-2" />
                      <CardTitle>{service.title}</CardTitle>
                      <CardDescription>{service.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm md:text-lg text-muted-foreground">{service.content}</p>
                    </CardContent>
                    <CardFooter>
                      <p className="text-sm md:text-lg font-medium">{service.price}</p>
                    </CardFooter>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>
  )
}
