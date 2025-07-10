import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Check,
  ChevronRight,
  Facebook,
  Instagram,
  Mail,
  Music,
  Music2,
  PlayCircle,
  Radio,
  Sparkles,
  AudioWaveformIcon as Waveform,
  Youtube,
} from "lucide-react"

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Image 
              src="/round_logo.png"
              width={40}
              height={40}
              alt="Intermezzo Sound Studio™ Logo"
              className="h-10 w-10"
              />
            <span className="text-xl font-bold">Intermezzo Sound Studio™</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#services" className="text-sm font-medium hover:text-purple-600 transition-colors">
              Servicios
            </Link>
            <Link href="#process" className="text-sm font-medium hover:text-purple-600 transition-colors">
              Proceso
            </Link>
            <Link href="#pricing" className="text-sm font-medium hover:text-purple-600 transition-colors">
              Precios
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-purple-600 transition-colors">
              Contacto
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="#contact" className="text-sm font-medium hover:underline underline-offset-4">
              Iniciar Proyecto
            </Link>
            <Button className="bg-purple-600 hover:bg-purple-700">Contactar</Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-black to-gray-400 text-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Fusionando la herencia musical con las tendencias emergentes
                  </h1>
                  <p className="max-w-[600px] text-gray-300 md:text-xl">
                    Estudio digital y remoto de producción musical semiprofesional, diseñado para ofrecer servicios
                    accesibles y de alta calidad a artistas emergentes.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button className="bg-purple-600 hover:bg-purple-700">
                    Iniciar Proyecto
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button variant="outline" className="text-white border-white hover:bg-white/10">
                    Conocer Más
                  </Button>
                </div>
              </div>
              <Image
                src="/black-logo.png"
                width={550}
                height={550}
                alt="Estudio de música"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
              />
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-purple-100 dark:bg-purple-900 px-3 py-1 text-sm text-purple-600 dark:text-purple-300">
                  <span>Sobre Nosotros</span>
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Intermezzo Sound Studio™</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Nos especializamos en la creación, producción y distribución de música, abarcando géneros como música
                  latina, tradicional venezolana, afrobeat, jazz swing, música urbana, música orquestal y pop en
                  general.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <Image
                src="/placeholder.svg?height=400&width=400"
                width={400}
                height={400}
                alt="Orangel Díaz, Fundador y Productor"
                className="mx-auto aspect-square overflow-hidden rounded-xl object-cover object-center sm:w-full"
              />
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">Orangel Díaz</h3>
                  <p className="text-purple-600 font-medium">Fundador y Productor</p>
                </div>
                <p className="text-muted-foreground">
                  Nuestra misión es ser un aliado creativo para los músicos, facilitando el acceso a recursos
                  profesionales, promoviendo la autenticidad artística y fusionando la riqueza de las tradiciones
                  musicales con las tendencias modernas.
                </p>
                <p className="text-muted-foreground">
                  También estamos en constante búsqueda de nuevos perfiles de artistas y la exploración de sonidos
                  contemporáneos para enriquecer nuestras propuestas creativas.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-purple-100 dark:bg-purple-900 px-3 py-1 text-sm text-purple-600 dark:text-purple-300">
                  <span>Servicios</span>
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Nuestros Servicios</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Ofrecemos una amplia gama de servicios para ayudarte a llevar tu música al siguiente nivel.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <Waveform className="h-10 w-10 text-purple-600 mb-2" />
                  <CardTitle>Producción Musical Completa</CardTitle>
                  <CardDescription>
                    Desarrollo de proyectos desde los arreglos hasta la mezcla y masterización final.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Creamos un sonido único que refleja tu visión artística, adaptándonos a diversos géneros musicales.
                  </p>
                </CardContent>
                <CardFooter>
                  <p className="text-sm font-medium">$300 - $1,000</p>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <Music className="h-10 w-10 text-purple-600 mb-2" />
                  <CardTitle>Mezcla y Masterización</CardTitle>
                  <CardDescription>
                    Refinamos y equilibramos tus pistas para garantizar un sonido competitivo.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Optimizamos tu música para que suene profesional en todos los dispositivos y plataformas.
                  </p>
                </CardContent>
                <CardFooter>
                  <p className="text-sm font-medium">$50 por mezcla y masterización</p>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <Sparkles className="h-10 w-10 text-purple-600 mb-2" />
                  <CardTitle>Servicios de Arreglo</CardTitle>
                  <CardDescription>Arreglos personalizados y grabaciones de instrumentos.</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Guitarra, bajo, piano, violín, viola, cuatro, y mandolina en diversos estilos musicales.
                  </p>
                </CardContent>
                <CardFooter>
                  <p className="text-sm font-medium">Desde $50 por sesión</p>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <Radio className="h-10 w-10 text-purple-600 mb-2" />
                  <CardTitle>Distribución Digital</CardTitle>
                  <CardDescription>Publicamos tu música en todas las plataformas principales.</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Spotify, Apple Music, Amazon Music, YouTube Music y más, utilizando un modelo de pago único.
                  </p>
                </CardContent>
                <CardFooter>
                  <p className="text-sm font-medium">$50 por canción / $150 por álbum</p>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <PlayCircle className="h-10 w-10 text-purple-600 mb-2" />
                  <CardTitle>Minicovers para Redes</CardTitle>
                  <CardDescription>Contenido visual para promocionar tu música.</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Videos cortos optimizados para Instagram, TikTok y YouTube que destacan tu música.
                  </p>
                </CardContent>
                <CardFooter>
                  <p className="text-sm font-medium">Gratuito - $30 por video</p>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <Music2 className="h-10 w-10 text-purple-600 mb-2" />
                  <CardTitle>Asesoría Legal y Registro</CardTitle>
                  <CardDescription>Protección de tu música y gestión de derechos de autor.</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Orientación en aspectos básicos de protección y registro formal en oficinas de derechos de autor.
                  </p>
                </CardContent>
                <CardFooter>
                  <p className="text-sm font-medium">Desde $40 por sesión</p>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section id="process" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-purple-100 dark:bg-purple-900 px-3 py-1 text-sm text-purple-600 dark:text-purple-300">
                  <span>Proceso</span>
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Cómo Trabajamos</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Intermezzo Sound Studio™ opera completamente de manera virtual, ofreciendo servicios remotos a
                  artistas de todo el mundo.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-3xl gap-8 py-12">
              <div className="grid gap-1 border-l-2 border-purple-600 pl-6 relative">
                <div className="absolute w-4 h-4 bg-purple-600 rounded-full -left-[9px] top-1"></div>
                <h3 className="text-xl font-bold">1. Evaluación Inicial</h3>
                <p className="text-muted-foreground">
                  Determinamos el nivel de equipamiento del artista (micrófonos, audífonos, software, etc.) y ofrecemos
                  una guía técnica para maximizar el potencial de su equipo.
                </p>
              </div>
              <div className="grid gap-1 border-l-2 border-purple-600 pl-6 relative">
                <div className="absolute w-4 h-4 bg-purple-600 rounded-full -left-[9px] top-1"></div>
                <h3 className="text-xl font-bold">2. Asesoramiento y Entrenamiento</h3>
                <p className="text-muted-foreground">
                  Enseñamos técnicas básicas para grabar correctamente desde casa, optimizando los recursos disponibles.
                </p>
              </div>
              <div className="grid gap-1 border-l-2 border-purple-600 pl-6 relative">
                <div className="absolute w-4 h-4 bg-purple-600 rounded-full -left-[9px] top-1"></div>
                <h3 className="text-xl font-bold">3. Producción y Supervisión</h3>
                <p className="text-muted-foreground">
                  Acompañamos al artista en todo el proceso, asegurándonos de que el producto final refleje su visión
                  artística.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-purple-100 dark:bg-purple-900 px-3 py-1 text-sm text-purple-600 dark:text-purple-300">
                  <span>Modelos de Colaboración</span>
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Opciones Flexibles</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Ofrecemos diferentes modelos de colaboración para adaptarnos a tus necesidades y presupuesto.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>Pago Directo</CardTitle>
                  <CardDescription>Mantén el control total de tu música</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-500" />
                      <span>El artista cubre los costos de los servicios</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-500" />
                      <span>Conserva el 100% de las regalías</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-500" />
                      <span>Control total sobre tu música</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-500" />
                      <span>Asesoramiento completo</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-purple-600 hover:bg-purple-700">Seleccionar</Button>
                </CardFooter>
              </Card>
              <Card className="border-2 border-purple-600">
                <CardHeader>
                  <div className="inline-block rounded-lg bg-purple-100 dark:bg-purple-900 px-3 py-1 text-sm text-purple-600 dark:text-purple-300 mb-2">
                    <span>Recomendado</span>
                  </div>
                  <CardTitle>Modelo Híbrido</CardTitle>
                  <CardDescription>Compartimos costos y beneficios</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-500" />
                      <span>Costos compartidos del proyecto</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-500" />
                      <span>Regalías distribuidas según inversión</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-500" />
                      <span>Mayor alcance promocional</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-500" />
                      <span>Apoyo en marketing y distribución</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-purple-600 hover:bg-purple-700">Seleccionar</Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Inversión del Estudio</CardTitle>
                  <CardDescription>Para proyectos seleccionados</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-500" />
                      <span>Intermezzo financia algunos costos</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-500" />
                      <span>Publicación bajo Intermezzo Sound Studio™</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-500" />
                      <span>Porcentaje negociado de regalías</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-500" />
                      <span>Promoción profesional</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-purple-600 hover:bg-purple-700">Consultar</Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-purple-100 dark:bg-purple-900 px-3 py-1 text-sm text-purple-600 dark:text-purple-300">
                  <span>Testimonios</span>
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Lo Que Dicen Nuestros Artistas</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Descubre las experiencias de artistas que han confiado en Intermezzo Sound Studio™.
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
                    "Trabajar con Intermezzo Sound Studio ha sido una experiencia transformadora. Orangel entendió
                    perfectamente mi visión artística y logró darle vida a mis canciones con arreglos que respetan mi
                    esencia pero elevan la calidad a un nivel profesional."
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
                    "Como artista emergente, encontrar un estudio que ofrezca calidad profesional a precios accesibles
                    parecía imposible hasta que descubrí Intermezzo. El proceso de trabajo remoto fue fluido y los
                    resultados superaron mis expectativas."
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-purple-950 text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  ¿Listo para llevar tu música al siguiente nivel?
                </h2>
                <p className="max-w-[600px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Contáctanos para iniciar tu proyecto o resolver cualquier duda sobre nuestros servicios.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button className="bg-white text-purple-950 hover:bg-gray-200">
                  Iniciar Proyecto
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" className="text-white border-white hover:bg-white/10">
                  Solicitar Información
                </Button>
              </div>
              <p className="text-xs text-gray-300">Te responderemos en un plazo máximo de 24 horas.</p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <div className="flex items-center gap-2">
            <Music2 className="h-6 w-6 text-purple-600" />
            <span className="text-lg font-bold">Intermezzo Sound Studio™</span>
          </div>
          <div className="flex flex-col md:flex-row gap-4 md:gap-6">
            <Link href="#" className="text-xs md:text-sm text-muted-foreground hover:underline underline-offset-4">
              Términos de Servicio
            </Link>
            <Link href="#" className="text-xs md:text-sm text-muted-foreground hover:underline underline-offset-4">
              Política de Privacidad
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              <Youtube className="h-5 w-5" />
              <span className="sr-only">YouTube</span>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              <Facebook className="h-5 w-5" />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
