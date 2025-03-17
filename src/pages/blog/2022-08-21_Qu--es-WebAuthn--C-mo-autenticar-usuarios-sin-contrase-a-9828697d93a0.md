---
layout: "../../layouts/BlogLayout.astro"
title: "Qué es WebAuthn? Cómo autenticar usuarios sin contraseña"
description: ""
tags: ["code", "webAuth"]
time: 4
featured: true
timestamp: "2022-08-21T12:20:32-0300"
filename: "2022-08-21_Qu--es-WebAuthn--C-mo-autenticar-usuarios-sin-contrase-a-9828697d93a0"
---

Qué es WebAuthn? Cómo autenticar usuarios sin contraseña
========================================================

La mayoría de nosotros estamos acostumbrados a iniciar sesión en diferentes cuentas usando una contraseña. Durante años esto ha sido la…

* * *

### Qué es WebAuthn? Cómo autenticar usuarios sin contraseña

![](https://cdn-images-1.medium.com/max/800/0*hR8RUjePb6mHkRQu.png)

La mayoría de nosotros estamos acostumbrados a iniciar sesión en diferentes cuentas usando una contraseña. Durante años esto ha sido la norma. Pero las contraseñas se enfrentan a una serie de problemas de seguridad:

*   Son extremadamente molestos cuando no los recordamos y aún más difíciles de restablecer.
*   Pueden ser bastante inseguros y la contraseña más común es `password`o`123456`
*   Los ataques de phishing son comunes en la era actual de Internet y, al usar esta técnica, los piratas informáticos pueden robar sus contraseñas.

¿No sería más sencillo avanzar hacia un inicio de sesión sin contraseña? ¿Un lugar donde no tenemos que recordar o ingresar contraseñas para acceder a nuestras cuentas? Una de esas soluciones sin contraseña es WebAuthn.

### ¿Qué es WebAuthn?

La API de autenticación web (también conocida como WebAuthn) es una API que permite una autenticación sólida con criptografía de clave pública. Le permite implementar autenticación sin contraseña y/o autenticación segura de segundo factor sin mensajes de texto SMS.

Analicemos eso para entender rápidamente las partes:

*   **Criptografía de clave pública** : por lo tanto, utilizamos una autenticación basada en clave (clave pública y privada) para iniciar sesión y no una contraseña.

> Si no está seguro de cómo funciona, sugiero ver este [video](https://youtu.be/6-JjHa-qLPk?t=277) .

*   **Autenticación sin contraseña** : en este tipo de autenticación, no usaremos una contraseña para iniciar sesión, pero usaremos alguna forma de interacción del usuario para verificar e iniciar sesión. Esto utiliza un autenticador de hardware como un sensor de huellas dactilares en su dispositivo o una [YubiKey](https://en.wikipedia.org/wiki/YubiKey).
*   **Autenticación segura de segundo factor sin mensajes de texto SMS** : la autenticación de dos factores en la actualidad está impulsada predominantemente por OTP basado en SMS, pero estos también son susceptibles al intercambio de SIM. El intercambio de SIM es esencialmente tomar el control del número de teléfono de alguien y engañar a un operador para que lo transfiera a un nuevo teléfono. Un escenario de autenticación de dos factores impulsado por un autenticador de hardware usando WebAuthn sería una solución más segura para el problema anterior.

WebAuthn es una especificación escrita por [W3C](https://www.w3.org/) y [FIDO](https://fidoalliance.org/) , con la participación de Google, Mozilla, Microsoft, Yubico y otros.

La autenticación web funciona de la mano con otros estándares de la industria como [Credential Management Level 1](https://www.w3.org/TR/credential-management-1/) y [FIDO 2.0 Client to Authenticator Protocol 2](https://fidoalliance.org/specs/fido-v2.0-rd-20170927/fido-client-to-authenticator-protocol-v2.0-rd-20170927.html) .

### ¿Cómo funciona WebAuthn?

Entonces, como cualquier otra situación de inicio de sesión:

*   A un usuario se le solicitará un nombre de usuario para identificarlo.
*   Luego, el navegador solicitaría al usuario que use su autenticador de hardware y se verifique.
*   En una autenticación exitosa, se iniciarían sesión en el sistema.

Ahora, lo que no vemos a menudo es lo que sucede en segundo plano para facilitar este proceso. Déjame explicar un poco más.

![](https://cdn-images-1.medium.com/max/800/0*zCDBGPUdRsgOzI2v.png)

### Flujo de registro

En este proceso, se crea un nuevo conjunto de credenciales clave con el nombre de usuario ingresado por el usuario. Esta credencial clave es el quid del proceso que nos permite asegurarnos de que esta autenticación se realiza sin contraseña.

Hay un proceso simple de 8 pasos que se lleva a cabo:

1.  Un usuario hace clic en el botón de registro en un sitio en su navegador (agente de usuario).
2.  El servidor de autenticación (parte de confianza) emite un desafío (un conjunto aleatorio de datos enviados como una matriz) al navegador del usuario para poder habilitar el inicio de sesión de WebAuthn.
3.  El navegador envía este desafío al dispositivo autenticador.
4.  El dispositivo autenticador solicita al usuario que se autentique. Esto sería diferente según el dispositivo, por ejemplo, Touch ID en una Macbook o tocar una YubiKey.
5.  Una vez que el usuario autoriza el dispositivo autenticador, el autenticador creará un nuevo par de claves (una clave pública y una privada) y luego usará la clave privada para firmar el desafío.
6.  El dispositivo de autenticación luego devolverá el desafío firmado, la clave pública y los detalles relacionados con el proceso, al servidor de autenticación.
7.  El servidor de autenticación luego confirmará la autenticidad de la clave privada utilizando la clave pública para garantizar que la clave privada haya firmado el desafío.
8.  Luego almacenará los detalles recibidos contra el nombre de usuario para uso futuro y responderá que el usuario está registrado.

![](https://cdn-images-1.medium.com/max/800/0*4K2TGOpfc3_L91xg.png)

### El flujo de autenticación de WebAuthn

La autenticación es un proceso similar en el que las credenciales generadas anteriormente se utilizan para verificar la identidad del usuario pasando nuevamente por un proceso de desafío firmado.

Hay un proceso simple de 8 pasos que se lleva a cabo:

1.  Un usuario hace clic en el botón de inicio de sesión en un sitio en su navegador (agente de usuario) e ingresa su nombre de usuario.
2.  El servidor de autenticación (parte de confianza) emite un desafío (un conjunto aleatorio de datos enviados como una matriz) al navegador del usuario junto con la ID de clave privada guardada registrada con el nombre de usuario.
3.  El navegador envía este desafío e ID de clave privada al dispositivo de autenticación.
4.  El dispositivo autenticador solicita al usuario que se autentique. Esto sería diferente según el dispositivo (nuevamente, Touch ID en una Macbook o tocando una YubiKey).
5.  Una vez que el usuario autorice el dispositivo autenticador, el autenticador recuperará el par de claves generado guardado en él con la ID de clave privada provista. Luego utilizará la clave privada para firmar el desafío.
6.  El dispositivo de autenticación luego devolverá el desafío firmado, así como los detalles relacionados con el proceso al servidor de autenticación.
7.  El servidor de autenticación luego confirmará la autenticidad de la clave privada utilizando su clave pública guardada para garantizar que la clave privada haya firmado el desafío.
8.  Luego iniciará la sesión del usuario.

![](https://cdn-images-1.medium.com/max/800/0*FRBse8UZByr8pOw_.png)

### Beneficios de WebAuthn

Eso suena increíble, ¿verdad? Absolutamente. Veamos rápidamente algunos de los beneficios:

*   **Autenticación basada en clave privada/pública** : es una forma más segura de autenticar a los usuarios en comparación con la norma actual de autenticación basada en contraseña, ya que utiliza criptografía asimétrica de forma predeterminada.
*   **Resistente al phishing** : WebAuthn es resistente a los ataques de phishing debido a que el nombre de dominio se almacena en el autenticador. Esto hace que sea más difícil para los piratas informáticos falsificar sitios web y obtener acceso a las credenciales.
*   **Almacene datos públicos en su base de datos** : solo los datos públicos se almacenan en la base de datos. No es necesario almacenar datos confidenciales, como contraseñas, en este flujo.
*   **Control detallado** : puede controlar qué tipo de interacción del usuario desea como parte del flujo, por ejemplo, un dispositivo de hardware específico.
*   **Mejor UX** : un usuario no necesitará recordar ninguna contraseña o algo así y solo necesitará usar un autenticador de hardware para poder iniciar sesión en el dispositivo.
*   **Recomendación W3C** : esto significa que debe ser compatible con todos los principales navegadores en todos los dispositivos.

y por último **NO MÁS CONTRASEÑAS.**

### Desventajas de WebAuthn

Dicho todo esto, tiene algunos problemas que aún deben resolverse:

*   **Gestión de credenciales de** usuario: la experiencia del usuario con respecto a la gestión de credenciales aún se encuentra en un estado muy primitivo.
*   **Credenciales de dispositivos cruzados** : poder pasar credenciales de un dispositivo a otro no es muy fácil a menos que use un autenticador de hardware itinerante como YubiKey.
*   **Recuperación del dispositivo del autenticador perdido/robado** : en caso de que no tenga acceso o pierda su autenticador de hardware itinerante, el escenario alternativo generalmente es una contraseña para obtener acceso a una cuenta, pero debe configurarse explícitamente.
*   **WebAuthn podría reemplazar las contraseñas** : WebAuthn aún se encuentra en una fase muy temprana y se está adoptando y admitiendo lentamente. Podría reemplazar el inicio de sesión basado en contraseña en el futuro, pero podría pasar un tiempo antes de que veamos que eso sucede.

Nota: esto no reemplaza cosas como flujos de autenticación basados ​​en tokens como OAuth u OIDC o proveedores de identidad como Auth0, Okta, Google y otros.

Artículos relaciones

[**FIDO Authentication with WebAuthn**  
_The Web Authentication API (also known as WebAuthn) is a specification written by the W3C and FIDO, with the…_auth0.com](https://auth0.com/docs/secure/multi-factor-authentication/fido-authentication-with-webauthn "https://auth0.com/docs/secure/multi-factor-authentication/fido-authentication-with-webauthn")[](https://auth0.com/docs/secure/multi-factor-authentication/fido-authentication-with-webauthn)

[**A demonstration of the WebAuthn specification**  
_Welcome to webauthn.io! This site is designed by Duo Labs to test the new W3C Specification Web Authentication…_webauthn.io](https://webauthn.io/ "https://webauthn.io/")[](https://webauthn.io/)

[**Auth0 WebAuthn Passwordless with Device Biometrics is Now Available**  
_The average person has to keep track of approximately 100 passwords and spends almost 13 minutes every week resetting…_auth0.com](https://auth0.com/blog/auth0-webauthn-passwordless-with-device-biometrics-is-now-available/ "https://auth0.com/blog/auth0-webauthn-passwordless-with-device-biometrics-is-now-available/")[](https://auth0.com/blog/auth0-webauthn-passwordless-with-device-biometrics-is-now-available/)

[**Password-less authentication in NextJS application with WebAuthn and NextAuth**  
_This tutorial explains step by step how to implement passwordless authentication with Email link and WebAuthn using…_dev.to](https://dev.to/jsombie/password-less-authentication-in-nextjs-application-with-webauthn-and-nextauth-3mgl "https://dev.to/jsombie/password-less-authentication-in-nextjs-application-with-webauthn-and-nextauth-3mgl")[](https://dev.to/jsombie/password-less-authentication-in-nextjs-application-with-webauthn-and-nextauth-3mgl)

### Conclusión

WebAuthn es un flujo de autenticación mucho más seguro que simplemente usar una contraseña. Es resistente al phishing y solo almacena datos públicos en una base de datos con la mayoría de los datos privados generalmente almacenados solo en el autenticador de hardware.

Utiliza criptografía asimétrica para realizar una verificación de usuario y proporciona una experiencia de usuario mucho mejor en comparación con el flujo de inicio de sesión existente.

Actualmente, WebAuthn se está impulsando principalmente como una autenticación de dos factores o un flujo de trabajo universal de segundo factor. Pero posiblemente podría reemplazar el inicio de sesión basado en contraseña en el futuro.

Con suerte, este artículo lo ayudará a comprender qué es WebAuthn y cómo funciona.

¡Gracias por leer! Realmente espero que encuentres útil este artículo. Siempre estoy interesado en conocer sus pensamientos y feliz de responder a cualquier pregunta que pueda tener en su mente. Si crees que esta publicación fue útil, compártela para que otros también puedan verla.

By [Jaime Hernández](https://medium.com/@devjaime) on [August 21, 2022](https://medium.com/p/9828697d93a0).

[Canonical link](https://medium.com/@devjaime/qu%C3%A9-es-webauthn-c%C3%B3mo-autenticar-usuarios-sin-contrase%C3%B1a-9828697d93a0)

Exported from [Medium](https://medium.com) on March 15, 2025.