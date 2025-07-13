import React from 'react'
import Image from 'next/image'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

export default function Testimonials() {
 return (
    <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-cyan-200 dark:bg-cyan-200 px-3 py-1 text-sm text-gray-900 dark:text-cyan-300">
                  <span>Testimonios</span>
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                  Lo Que Dicen Nuestros Artistas
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Descubre las experiencias de artistas que han confiado en
                  Intermezzo Sound Studio™.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2">
              <Card className="border-2 border-purple-100 dark:border-purple-900">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <Image
                      src="/placeholder.svg?height=60&width=60"
                      width={60}
                      height={60}
                      alt="Artista"
                      className="rounded-full"
                    />
                    <div>
                      <CardTitle>Carlos Mendoza</CardTitle>
                      <CardDescription>Cantautor</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    "Trabajar con Intermezzo Sound Studio ha sido una
                    experiencia transformadora. Orangel entendió perfectamente
                    mi visión artística y logró darle vida a mis canciones con
                    arreglos que respetan mi esencia pero elevan la calidad a un
                    nivel profesional."
                  </p>
                </CardContent>
              </Card>
              <Card className="border-2 border-purple-100 dark:border-purple-900">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <Image
                      src="/placeholder.svg?height=60&width=60"
                      width={60}
                      height={60}
                      alt="Artista"
                      className="rounded-full"
                    />
                    <div>
                      <CardTitle>María Rodríguez</CardTitle>
                      <CardDescription>Vocalista</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    "Como artista emergente, encontrar un estudio que ofrezca
                    calidad profesional a precios accesibles parecía imposible
                    hasta que descubrí Intermezzo. El proceso de trabajo remoto
                    fue fluido y los resultados superaron mis expectativas."
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
  )
}
