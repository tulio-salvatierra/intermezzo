// app/head.tsx
export default function Head() {
    return (
      <>
        <title>Intermezzo Sound Studio™</title>
        <meta
          name="description"
          content="Estudio digital de producción musical accesible y de alta calidad para artistas emergentes."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
  
        {/* Open Graph for social previews */}
        <meta property="og:title" content="Intermezzo Sound Studio™" />
        <meta
          property="og:description"
          content="Producción musical profesional para artistas emergentes."
        />
        <meta property="og:image" content="/images/og-preview.jpg" />
        <meta property="og:url" content="https://intermezzosound.com" />
        <meta property="og:type" content="website" />
  
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
      </>
    );
  }