import React from 'react'




export default function Proccess() {
  return (
    <section
          id="process"
          className="w-full h-screen py-12 md:py-24 lg:py-32 bg-[url('/images/studio.png')] bg-cover bg-center"
        >
          <div className="container px-4 md:px-6 bg-blend-overlay-dark bg-black/50 p-4">
            <div className="flex flex-col items-center justify-center space-y-4 text-center p-2">
              <div className="space-y-1">
                <div className="inline-block rounded-lg bg-cyan-200 dark:bg-cyan-900 px-3 py-1 text-sm text-gray-900 dark:text-gray-900">
                  <span>Proceso</span>
                </div>
                <h2 className="text-3xl text-white font-extrabold tracking-tighter md:text-4xl">
                  Cómo Trabajamos
                </h2>
                <p className="max-w-[900px] text-white  md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Intermezzo Sound Studio™ opera completamente de manera
                  virtual, ofreciendo servicios remotos a artistas de todo el
                  mundo.
                </p>
              </div>
            </div>
            <div className="mx-auto  grid max-w-3xl gap-8 py-12">
              <div className="grid gap-1 border-l-2 border-cyan-200 pl-6 relative">
                <div className="absolute w-4 h-4 bg-cyan-200 rounded-full -left-[9px] top-1"></div>
                <h3 className="text-xl font-black text-white">1. Evaluación Inicial</h3>
                <p className="text-white">
                  Determinamos el nivel de equipamiento del artista (micrófonos,
                  audífonos, software, etc.) y ofrecemos una guía técnica para
                  maximizar el potencial de su equipo.
                </p>
              </div>
              <div className="grid gap-1 border-l-2 border-cyan-200 pl-6 relative">
                <div className="absolute w-4 h-4 bg-cyan-200 rounded-full -left-[9px] top-1"></div>
                <h3 className="text-xl font-black text-white">
                  2. Asesoramiento y Entrenamiento
                </h3>
                <p className="text-white">
                  Enseñamos técnicas básicas para grabar correctamente desde
                  casa, optimizando los recursos disponibles.
                </p>
              </div>
              <div className="grid gap-1 border-l-2 border-cyan-200 pl-6 relative">
                <div className="absolute w-4 h-4 bg-cyan-200 rounded-full -left-[9px] top-1"></div>
                <h3 className="text-xl font-black text-white">
                  3. Producción y Supervisión
                </h3>
                <p className="text-white">
                  Acompañamos al artista en todo el proceso, asegurándonos de
                  que el producto final refleje su visión artística.
                </p>
              </div>
            </div>
          </div>
        </section>
  )
}
