---
layout: "../../layouts/BlogLayout.astro"
title: "Vercel AI para Developers Dummies: Una Introducción Sencilla con Next.js"
description: ""
tags: ["code", "Vercel", "NextJS"]
time: 4
featured: true
timestamp: "2024-08-07T12:20:32-0300"
filename: "2024-08-07_Vercel-AI-para-Developers-Dummies--Una-Introducci-n-Sencilla-con-Next-js-8e38ca2ae813"
---

Vercel AI para Developers Dummies: Una Introducción Sencilla con Next.js \* { font-family: Georgia, Cambria, "Times New Roman", Times, serif; } html, body { margin: 0; padding: 0; } h1 { font-size: 50px; margin-bottom: 17px; color: #333; } h2 { font-size: 24px; line-height: 1.6; margin: 30px 0 0 0; margin-bottom: 18px; margin-top: 33px; color: #333; } h3 { font-size: 30px; margin: 10px 0 20px 0; color: #333; } header { width: 640px; margin: auto; } section { width: 640px; margin: auto; } section p { margin-bottom: 27px; font-size: 20px; line-height: 1.6; color: #333; } section img { max-width: 640px; } footer { padding: 0 20px; margin: 50px 0; text-align: center; font-size: 12px; } .aspectRatioPlaceholder { max-width: auto !important; max-height: auto !important; } .aspectRatioPlaceholder-fill { padding-bottom: 0 !important; } header, section\[data-field=subtitle\], section\[data-field=description\] { display: none; }

Vercel AI para Developers Dummies: Una Introducción Sencilla con Next.js
========================================================================

La inteligencia artificial (IA) está transformando el mundo del desarrollo de software, permitiendo crear aplicaciones más inteligentes y…

* * *

### Vercel AI para Developers Dummies: Una Introducción Sencilla con Next.js

![](https://cdn-images-1.medium.com/max/800/0*rr8oPcH3uzrw6DP7)

La inteligencia artificial (IA) está transformando el mundo del desarrollo de software, permitiendo crear aplicaciones más inteligentes y eficientes. Pero, ¿qué pasa si eres un desarrollador principiante y todo esto suena complicado? No te preocupes. En este blog, desglosaremos el Vercel AI SDK de manera sencilla para que puedas comenzar a utilizar la IA en tus proyectos con Next.js, incluso si eres un “dummy developer”.

#### ¿Qué es Vercel AI SDK?

El Vercel AI SDK es una herramienta que facilita la integración de funcionalidades de inteligencia artificial en tus aplicaciones web. Piensa en él como un asistente que hace gran parte del trabajo pesado por ti, permitiéndote agregar características avanzadas sin necesidad de ser un experto en IA.

#### ¿Por Qué Deberías Usar Vercel AI SDK?

1.  **Fácil de Usar**: No necesitas ser un genio de la programación para empezar. Con solo unas pocas líneas de código, puedes añadir funciones inteligentes a tus aplicaciones.
2.  **Documentación Clara**: La documentación del Vercel AI SDK está llena de ejemplos y guías que te ayudarán a entender cómo funciona todo.
3.  **Integración Sencilla**: Se integra perfectamente con Vercel, una plataforma popular para desplegar aplicaciones web. Esto significa que puedes hacer todo en un solo lugar.

#### Primeros Pasos con Vercel AI SDK en Next.js

Vamos a dar un vistazo rápido a cómo puedes comenzar.

1.  **Crear un Proyecto Next.js**: Primero, necesitas crear un proyecto Next.js. Si no tienes Next.js instalado, puedes instalarlo usando el siguiente comando:

npx create-next-app@latest mi-proyecto-vercel-ai

1.  Luego, navega hasta el directorio del proyecto:

cd mi-proyecto-vercel-ai

**Instalar el SDK de Vercel AI**: Ahora, instala el SDK de Vercel AI en tu proyecto.

npm install vercel-ai

**Configuración Básica**: Una vez instalado, puedes configurar el SDK en tu proyecto. Vamos a crear un archivo llamado `vercel-ai.js` en el directorio `lib` (si no existe, créalo) y configuramos el SDK:

// lib/vercel-ai.js import VercelAI from 'vercel-ai';    
const ai = new VercelAI({     apiKey: 'tu-api-key-aqui' });    
export default ai;

**Crear una API para la Función de IA**: Vamos a crear una API en Next.js para manejar las solicitudes de IA. Crea un archivo llamado `hello.js` en el directorio `pages/api`:

// pages/api/hello.js  
import ai from '../../lib/vercel-ai';  
  
export default async function handler(req, res) {  
    try {  
        const response = await ai.getGreeting('usuario');  
        res.status(200).json({ message: response });  
    } catch (error) {  
        res.status(500).json({ error: 'Error en la IA' });  
    }  
}

**Crear una Página para Mostrar el Resultado**: Ahora, vamos a crear una página en Next.js que llame a esta API y muestre el saludo de la IA. Crea un archivo llamado `index.js` en el directorio `pages`:

// pages/index.js  
import { useState } from 'react';  
  
export default function Home() {  
    const \[message, setMessage\] = useState('');  
  
    const fetchGreeting = async () => {  
        const response = await fetch('/api/hello');  
        const data = await response.json();  
        setMessage(data.message);  
    };  
  
    return (  
        <div\>  
            <h1\>Bienvenido a la IA de Vercel</h1\>  
            <button onClick\={fetchGreeting}\>Obtener Saludo de IA</button\>  
            {message && <p\>{message}</p\>}  
        </div\>  
    );  
}

#### ¡Eso es Todo!

Con estos sencillos pasos, has integrado una función básica de IA en tu aplicación Next.js utilizando el Vercel AI SDK. Ahora, cuando visites tu aplicación y hagas clic en el botón “Obtener Saludo de IA”, deberías ver el saludo generado por la inteligencia artificial.

#### codeIA.cl: Tu Socio en el Viaje de la IA

En **codeIA.cl**, estamos aquí para ayudarte en cada paso del camino. Ofrecemos servicios de consultoría y desarrollo para integrar IA en tus proyectos, sin importar tu nivel de experiencia. Aquí hay algunas maneras en las que podemos colaborar:

1.  **Asesoramiento Personalizado**: Te ayudamos a identificar las mejores oportunidades para usar IA en tu negocio y te guiamos en el proceso de implementación.
2.  **Desarrollo de Soluciones a Medida**: Creamos soluciones de IA personalizadas que se adaptan a tus necesidades específicas, asegurando que obtengas el máximo beneficio.
3.  **Soporte Continuo**: Ofrecemos soporte y mantenimiento continuo para asegurarnos de que tus aplicaciones de IA sigan funcionando de manera eficiente y se adapten a las necesidades cambiantes de tu negocio.

#### Conclusión

El Vercel AI SDK es una herramienta poderosa y accesible que facilita la integración de inteligencia artificial en tus proyectos, incluso si eres un desarrollador principiante. No dejes que la complejidad de la IA te intimide. Con las herramientas adecuadas y el apoyo de expertos como codeIA.cl, puedes llevar tus aplicaciones al siguiente nivel.

Para comenzar tu viaje con Vercel AI SDK, visita la [documentación oficial](https://sdk.vercel.ai/docs/introduction) y el [anuncio de la versión 3.3](https://vercel.com/blog/vercel-ai-sdk-3-3). ¡Estamos emocionados de ver lo que crearás!

By [Jaime Hernández](https://medium.com/@devjaime) on [August 7, 2024](https://medium.com/p/8e38ca2ae813).

[Canonical link](https://medium.com/@devjaime/vercel-ai-para-developers-dummies-una-introducci%C3%B3n-sencilla-con-next-js-8e38ca2ae813)

Exported from [Medium](https://medium.com) on March 15, 2025.