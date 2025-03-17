---
layout: "../../layouts/BlogLayout.astro"
title: "Continuando con el Modelo O1: Casos de Uso Avanzados y Ejecución Planificada "
description: ""
tags: ["code", "OpenAI", "O1"]
time: 4
featured: true
timestamp: "2024-12-28T12:20:33-0300"
filename: "2024-12-28_Continuando-con-el-Modelo-O1--Casos-de-Uso-Avanzados-y-Ejecuci-n-Planificada-2377137147fb"
---

Continuando con el Modelo O1: Casos de Uso Avanzados y Ejecución Planificada
============================================================================

En el blog anterior exploramos los fundamentos y principios del modelo O1. Ahora profundizaremos en sus capacidades para planificar tareas…

* * *

### Continuando con el Modelo O1: Casos de Uso Avanzados y Ejecución Planificada

![](https://cdn-images-1.medium.com/max/800/1*lENhlrAgzo1lL_-lCoIdWw.jpeg)

[https://openai.com/index/openai-o1-mini-advancing-cost-efficient-reasoning/](https://openai.com/index/openai-o1-mini-advancing-cost-efficient-reasoning/)

En el blog anterior exploramos los fundamentos y principios del modelo **O1**. Ahora profundizaremos en sus capacidades para **planificar tareas complejas** y ejecutar cada paso con herramientas adicionales como **GPT-4o-mini**. Este enfoque se aplica a escenarios como la gestión de cadenas de suministro, donde se requiere tomar decisiones escalonadas con datos dinámicos.

* * *

### Planificación y Ejecución con O1 y GPT-4o-mini

El modelo O1 puede generar planes detallados para resolver tareas utilizando herramientas predefinidas. Una vez generado el plan, cada paso se ejecuta mediante GPT-4o-mini, que llama a funciones específicas para cumplir las instrucciones.

### Ejemplo Real: Gestión de un Pedido en la Cadena de Suministro

#### Escenario

Un pedido requiere 200 unidades del producto **Smart Home Hub X200**, pero solo hay 50 unidades disponibles en el inventario actual. El plan debe considerar:

1.  Revisar el inventario disponible.
2.  Identificar proveedores para obtener componentes adicionales.
3.  Programar producción para satisfacer la demanda.
4.  Organizar el envío al cliente.
5.  Notificar al cliente sobre el progreso.

#### Contexto Inicial (En Python)

context = {  
    'inventory': {  
        'X200': 50  \# Cantidad disponible en inventario  
    },  
    'orders': \[  
        {  
            'order\_id': 'ORD3001',  
            'product\_id': 'X200',  
            'quantity': 200,  
            'customer\_id': 'CUST9001',  
            'destination': 'Los Angeles',  
        }  
    \],  
    'available\_suppliers': \['SUPP1001', 'SUPP1002'\],  
    'production\_capacity': {  
        'immediate': 100,  
        'next\_week': 150  
    },  
    'shipping\_options': {  
        'Los Angeles': \[  
            {'carrier\_id': 'CARRIER1', 'service\_level': 'Standard', 'cost': 1000},  
            {'carrier\_id': 'CARRIER2', 'service\_level': 'Express', 'cost': 1500}  
        \]  
    },  
    'customers': {  
        'CUST9001': {  
            'name': 'ElectroWorld',  
            'address': '123 Market Street, Los Angeles, CA'  
        }  
    },  
    'products': {  
        'X200': {  
            'name': 'Smart Home Hub X200',  
            'components\_needed': {  
                'COMP\_X200': 1  \# Cada unidad requiere 1 componente COMP\_X200  
            }  
        }  
    }  
}

* * *

### Generación del Plan con O1

#### Prompt

Eres un asistente de gestión de cadenas de suministro. Revisa el siguiente escenario y genera un plan detallado para procesar el pedido.  
  
Funciones disponibles:  
\- get\_inventory\_status(product\_id)  
\- get\_product\_details(product\_id)  
\- update\_inventory(product\_id, quantity\_change)  
\- fetch\_new\_orders()  
\- allocate\_stock(order\_id, product\_id, quantity)  
\- check\_available\_suppliers()  
\- get\_supplier\_info(supplier\_id)  
\- place\_purchase\_order(supplier\_id, component\_id, quantity)  
\- check\_production\_capacity(time\_frame)  
\- schedule\_production\_run(product\_id, quantity, time\_frame)  
\- calculate\_shipping\_options(destination, weight, dimensions)  
\- book\_shipment(order\_id, carrier\_id, service\_level)  
\- send\_order\_update(customer\_id, order\_id, message)  
Genera un plan estructurado paso a paso.

#### Plan Generado

1. \*\*Revisar el inventario:\*\*  
   - Llamar a \`get\_inventory\_status\` para verificar la disponibilidad del producto X200.  
  
2. \*\*Evaluar producción:\*\*  
   - Si el inventario es insuficiente, llamar a \`check\_production\_capacity\` para programar la producción de las unidades faltantes.  
3. \*\*Ordenar componentes adicionales:\*\*  
   - Identificar proveedores disponibles con \`check\_available\_suppliers\`.  
   - Obtener detalles del proveedor con \`get\_supplier\_info\`.  
   - Colocar órdenes de compra con \`place\_purchase\_order\`.  
4. \*\*Organizar envío:\*\*  
   - Calcular opciones de envío con \`calculate\_shipping\_options\`.  
   - Reservar envío con \`book\_shipment\`.  
5. \*\*Notificar al cliente:\*\*  
   - Actualizar al cliente con \`send\_order\_update\`.

* * *

### Ejecución del Plan con GPT-4o-mini

Cada paso del plan se ejecuta llamando funciones específicas. Por ejemplo:

#### Verificar Inventario

def get\_inventory\_status(product\_id):  
    quantity = context\['inventory'\].get(product\_id, 0)  
    return {'product\_id': product\_id, 'quantity': quantity}  
  
\# Ejecución  
inventory\_status = get\_inventory\_status('X200')  
print(inventory\_status)  \# {'product\_id': 'X200', 'quantity': 50}

#### Programar Producción

def schedule\_production\_run(product\_id, quantity, time\_frame):  
    capacity = context\['production\_capacity'\].get(time\_frame, 0)  
    if capacity >= quantity:  
        context\['production\_capacity'\]\[time\_frame\] -= quantity  
        context\['inventory'\]\[product\_id\] += quantity  
        return {'status': 'Scheduled', 'quantity': quantity, 'time\_frame': time\_frame}  
    return {'error': 'Capacidad insuficiente'}  
  
\# Ejecución  
production\_result = schedule\_production\_run('X200', 100, 'immediate')  
print(production\_result)  \# {'status': 'Scheduled', 'quantity': 100, 'time\_frame': 'immediate'}

* * *

### Tutorial: Creación de un Componente en React Usando GPT-4o-mini

### Caso: Formulario de Feedback para Entrevistas

El objetivo es crear un componente React llamado **FeedbackForm**, que permita recolectar retroalimentación estructurada y objetiva durante entrevistas.

#### Prompt para GPT-4o-mini

Crea un componente elegante y funcional en React para recolectar feedback durante entrevistas. Debe:  
\- Permitir calificar candidatos según múltiples dimensiones con rubricas.  
\- Recolectar evidencia específica para cada calificación.  
\- Calcular una recomendación final basada en puntuaciones ponderadas.  
\- Guiar al usuario a proporcionar retroalimentación objetiva.  
  
Responde solo con el código del componente. Usa "use client" al inicio.

#### Resultado

'use client';  
import React, { useState } from 'react';  
  
function FeedbackForm() {  
    const \[ratings, setRatings\] = useState({});  
    const \[finalScore, setFinalScore\] = useState(0);  
    const handleRatingChange = (dimension, value) => {  
        setRatings({ ...ratings, \[dimension\]: value });  
        calculateFinalScore();  
    };  
    const calculateFinalScore = () => {  
        let totalScore = 0;  
        let dimensions = Object.keys(ratings);  
        dimensions.forEach(dimension => {  
            totalScore += ratings\[dimension\];  
        });  
        setFinalScore(totalScore / dimensions.length);  
    };  
    return (  
        <div\>  
            <h2\>Feedback Form</h2\>  
            <label\>Technical Skills:</label\>  
            <input type\="number" onChange\={(e) => handleRatingChange('technical', parseInt(e.target.value))} />  
            <label\>Communication:</label\>  
            <input type\="number" onChange\={(e) => handleRatingChange('communication', parseInt(e.target.value))} />  
            <h3\>Final Recommendation: {finalScore}</h3\>  
        </div\>  
    );  
}  
export default FeedbackForm;

Este componente es funcional y puede integrarse fácilmente en cualquier sistema de entrevistas.

* * *

### Aplicaciones Reales

1.  **E-commerce:** Gestionar pedidos complejos con inventarios limitados y proveedores dispersos.
2.  **Manufactura:** Optimizar la producción basada en la demanda y capacidad.
3.  **Logística:** Coordinar opciones de envío para cumplir plazos ajustados.
4.  **Recursos Humanos:** Implementar sistemas de retroalimentación estructurada.

* * *

### Enlaces útiles

*   **Documentación de OpenAI Python SDK:** [Enlace oficial](https://platform.openai.com/docs/)
*   **Guía de Prompting:** [Mejores prácticas](https://platform.openai.com/docs/guides/chat)

* * *

Este enfoque combinado de O1 y GPT-4o-mini permite resolver tareas complejas de forma eficiente y detallada. ¡Experimenta con estos ejemplos! 🌟

By [Jaime Hernández](https://medium.com/@devjaime) on [December 28, 2024](https://medium.com/p/2377137147fb).

[Canonical link](https://medium.com/@devjaime/continuando-con-el-modelo-o1-casos-de-uso-avanzados-y-ejecuci%C3%B3n-planificada-2377137147fb)

Exported from [Medium](https://medium.com) on March 15, 2025.