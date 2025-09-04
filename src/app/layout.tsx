import './global.css'

export const metadata = {
  title: "👋",
  description: "Jiahong's personal site",
}

export default function RootLayout({children}: any):  React.ReactNode | Promise<React.ReactNode>  {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect"
          href="https://fonts.googleapis.com"
        />
        <link rel="preconnect"
          href="https://fonts.gstatic.com" crossOrigin="anonymous"
        />
        <link rel="preconnect"
          href="https://cdnjs.cloudflare.com" crossOrigin="anonymous"
        />
        <link rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,100..800;1,100..800&family=Rubik:ital,wght@0,300..900;1,300..900&display=swap"
        />
        <link rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.9.0/katex.min.css"
        />
        <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
        <meta name="theme-color" content="#ffffff" media="(prefers-color-scheme:light)" />
        <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
      </head>
      <body>
        <noscript>You need to enable JavaScript to run this app.</noscript>
        <div id="root">{children}</div>
      </body>
    </html>
  )
}
