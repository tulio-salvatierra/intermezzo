import React from 'react'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card'
import { Music, Sparkles, Radio, PlayCircle, Music2 } from 'lucide-react'



export default function Services() {
  return (
    <section
          id="services"
          className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-cyan-200 dark:bg-cyan-900 px-3 py-1 text-sm text-gray-900 dark:text-gray-900">
                  <span>Servicios</span>
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                  Nuestros Servicios
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Ofrecemos una amplia gama de servicios para ayudarte a llevar
                  tu música al siguiente nivel.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <Music className="h-10 w-10 text-cyan-200 mb-2" />
                  <CardTitle>Producción Musical Completa</CardTitle>
                  <CardDescription>
                    Desarrollo de proyectos desde los arreglos hasta la mezcla y
                    masterización final.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Creamos un sonido único que refleja tu visión artística,
                    adaptándonos a diversos géneros musicales.
                  </p>
                </CardContent>
                <CardFooter>
                  <p className="text-sm font-medium">$300 - $1,000</p>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <Music className="h-10 w-10 text-cyan-200 mb-2" />
                  <CardTitle>Mezcla y Masterización</CardTitle>
                  <CardDescription>
                    Refinamos y equilibramos tus pistas para garantizar un
                    sonido competitivo.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Optimizamos tu música para que suene profesional en todos
                    los dispositivos y plataformas.
                  </p>
                </CardContent>
                <CardFooter>
                  <p className="text-sm font-medium">
                    $50 por mezcla y masterización
                  </p>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <Sparkles className="h-10 w-10 text-cyan-200 mb-2" />
                  <CardTitle>Servicios de Arreglo</CardTitle>
                  <CardDescription>
                    Arreglos personalizados y grabaciones de instrumentos.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Guitarra, bajo, piano, violín, viola, cuatro, y mandolina en
                    diversos estilos musicales.
                  </p>
                </CardContent>
                <CardFooter>
                  <p className="text-sm font-medium">Desde $50 por sesión</p>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <Radio className="h-10 w-10 text-cyan-200 mb-2" />
                  <CardTitle>Distribución Digital</CardTitle>
                  <CardDescription>
                    Publicamos tu música en todas las plataformas principales.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Spotify, Apple Music, Amazon Music, YouTube Music y más,
                    utilizando un modelo de pago único.
                  </p>
                </CardContent>
                <CardFooter>
                  <p className="text-sm font-medium">
                    $50 por canción / $150 por álbum
                  </p>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <PlayCircle className="h-10 w-10 text-cyan-200 mb-2" />
                  <CardTitle>Minicovers para Redes</CardTitle>
                  <CardDescription>
                    Contenido visual para promocionar tu música.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Videos cortos optimizados para Instagram, TikTok y YouTube
                    que destacan tu música.
                  </p>
                </CardContent>
                <CardFooter>
                  <p className="text-sm font-medium">
                    Gratuito - $30 por video
                  </p>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <Music2 className="h-10 w-10 text-cyan-200 mb-2" />
                  <CardTitle>Asesoría Legal y Registro</CardTitle>
                  <CardDescription>
                    Protección de tu música y gestión de derechos de autor.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Orientación en aspectos básicos de protección y registro
                    formal en oficinas de derechos de autor.
                  </p>
                </CardContent>
                <CardFooter>
                  <p className="text-sm font-medium">Desde $40 por sesión</p>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>
  )
}
