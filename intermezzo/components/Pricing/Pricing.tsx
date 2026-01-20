import React from 'react'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Check } from 'lucide-react'

export default function Pricing() {
  return (
    <section
    id="pricing"
    className="w-full py-12 md:py-24 lg:py-32 bg-[url('/images/money.png')] bg-cover bg-center"
  >
    <div className="container px-4 md:px-6">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2">
          <div className="inline-block rounded-lg bg-cyan-200 dark:bg-cyan-900 px-3 py-1 text-sm text-gray-900 dark:text-purple-300">
            <span>Modelos de Colaboración</span>
          </div>
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl text-white">
            Opciones Flexibles
          </h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Ofrecemos diferentes modelos de colaboración para adaptarnos a
            tus necesidades y presupuesto.
          </p>
        </div>
      </div>
      <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Pago Directo</CardTitle>
            <CardDescription>
              Mantén el control total de tu música
            </CardDescription>
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
            <Button className="w-full bg-cyan-200 hover:bg-cyan-900">
              Seleccionar
            </Button>
          </CardFooter>
        </Card>
        <Card className="border-2 border-purple-600">
          <CardHeader>
            <div className="inline-block rounded-lg bg-cyan-200 dark:bg-purple-900 px-3 py-1 text-sm text-gray-900 dark:text-gray-900 mb-2">
              <span>Recomendado</span>
            </div>
            <CardTitle>Modelo Híbrido</CardTitle>
            <CardDescription>
              Compartimos costos y beneficios
            </CardDescription>
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
            <Button className="w-full bg-cyan-200 hover:bg-cyan-900">
              Seleccionar
            </Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Inversión del Estudio</CardTitle>
            <CardDescription>
              Para proyectos seleccionados
            </CardDescription>
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
            <Button className="w-full bg-cyan-200 hover:bg-cyan-900">
              Consultar
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  </section>
  )
}
