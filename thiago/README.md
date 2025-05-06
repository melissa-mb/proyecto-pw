# 📦 Módulo de Usuario y Catálogo – Proyecto de Programación Web (Thiago Checa)

Este módulo corresponde a las funcionalidades que desarrollé dentro del proyecto grupal de Programación Web. Mi responsabilidad se centró en la experiencia del usuario, abarcando el proceso de autenticación, recuperación de contraseña, navegación del catálogo de juegos y configuración de perfil.

## ✨ Funcionalidades desarrolladas

### 🔐 Recuperación de contraseña

-   Como usuario, si olvidé mi contraseña, puedo restablecerla desde la pantalla de inicio de sesión.
-   El sistema envía un correo electrónico con un enlace seguro para restablecer la contraseña.

### 🕹️ Catálogo de juegos con filtros

-   Como usuario, puedo explorar un catálogo de videojuegos con múltiples opciones de filtrado:
    -   Por **rango de precios**.
    -   Por **categoría** del juego.
    -   Ver únicamente juegos en **oferta**.
    -   Por **plataforma**: PS4, PS5, Nintendo Switch, Windows o macOS.

### 📧 Confirmación de compra por correo

-   Como usuario autenticado, al finalizar una compra recibiré automáticamente en mi correo electrónico las claves digitales de los juegos adquiridos.

### ⚙️ Edición de perfil

-   Como usuario autenticado, puedo modificar mi información personal (nombre, correo, etc.) desde la sección de configuración de la página.

## 🛠️ Tecnologías utilizadas

-   Frontend: HTML, CSS, JS (sin backend en la presentación de la semana 8)
-   Backend: Node.js + Azure (semana 15)
-   Autenticación: JWT
-   Emails: SMTP2GO
-   Seguridad: contraseñas hasheadas, sin datos sensibles en el código (uso de `.env`)

---
