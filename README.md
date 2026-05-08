# Hackathon Dev3pack x ChileDAO

Sitio web de la sede Chile para la Dev3pack Global Hackathon x ChileDAO.

El sitio está pensado para personas no técnicas, estudiantes, diseñadores, builders y equipos con experiencia técnica. Resume la agenda presencial en USACH, pasos para participar, categorías, premios, beneficios, recursos para construir con IA y Blockchain, y un glosario bilingüe para términos que aparecen en inglés por marca o documentación.

## Sitio en vivo

- Producción: https://hackathon.felirami.com
- Repositorio: https://github.com/felirami/hackathon-dev3pack-chiledao

## Qué incluye

- Guía en español para empezar aunque no sepas programar.
- Checklist técnica para equipos con experiencia.
- Agenda local y agenda global de la hackathon.
- Categorías, premios y recursos por track.
- Sección de IA gratis y abierta con OpenCode, OpenRouter, Ollama, Aider, Cline, Continue, Hermes Agent y OpenClaw.
- Glosario bilingüe para términos comunes en inglés.
- Configuración de Vercel para despliegue desde `main`.

## Desarrollo local

Requisitos:

- Node.js
- npm

Instalar dependencias:

```bash
npm install
```

Levantar el servidor local:

```bash
npm run dev
```

Compilar para producción:

```bash
npm run build
```

Previsualizar el build:

```bash
npm run preview
```

## Despliegue

El proyecto está configurado para Vercel con `vercel.json`.

- Rama de producción: `main`
- Comando de build: `npm run build`
- Directorio de salida: `dist`

Cuando se hace push a `main`, Vercel debe crear un nuevo despliegue de producción desde GitHub.

## Estructura

```text
src/App.tsx       Contenido y estructura principal del sitio
src/styles.css    Estilos responsive para desktop y mobile
index.html        Metadatos SEO y entrada de Vite
vercel.json       Configuración de build y cache para Vercel
public/logos/     Logos e imagen principal del evento
```

## Notas de contenido

El sitio mantiene nombres de marcas y herramientas en inglés cuando corresponde, pero agrega traducciones o explicaciones visibles para que el contenido siga siendo entendible en español.
