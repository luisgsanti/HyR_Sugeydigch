HyR_Sugeydigch

Sistema de gestión de Hoja de Vida y Recurso Humano (HyR). Permite registrar, consultar y administrar la información de personal de manera eficiente, centralizada y segura.
Proyecto desarrollado por Luis G. Santi con fines académicos y demostrativos.

📋 Tabla de contenidos

Instalación

Tecnologías usadas

Estructura del proyecto

Uso / Cómo correrlo

Configuración

Pruebas / QA

Contribuciones

Licencia

Contacto

⚙️ Instalación

Clona este repositorio:

git clone https://github.com/luisgsanti/HyR_Sugeydigch.git
cd HyR_Sugeydigch


Instala dependencias:

npm install


(Opcional) configura tus variables de entorno.
Usa .env.example como plantilla y renómbralo a .env.

🧰 Tecnologías usadas

Angular – interfaz de usuario moderna y modular

Node.js + Express – backend y API REST

MongoDB – base de datos NoSQL

TypeScript – tipado fuerte para mayor mantenibilidad

Bootstrap / SCSS – estilos y diseño responsive

JWT – autenticación segura basada en tokens

🗂️ Estructura del proyecto
HyR_Sugeydigch/
├── src/                 # Código fuente principal
│   ├── app/             # Componentes Angular
│   ├── assets/          # Recursos estáticos (imágenes, íconos, estilos)
│   ├── environments/    # Configuración por entorno
│   └── main.ts          # Punto de entrada del frontend
├── server/              # API backend con Express
├── public/              # Archivos públicos
├── tests/               # Pruebas unitarias e integración
├── .env.example         # Plantilla de configuración
└── README.md

▶️ Uso / Cómo correrlo

Para ambiente de desarrollo:

npm run dev


Para ambiente de producción:

npm run build
npm start


Por defecto, la app estará disponible en:

http://localhost:4200


El backend puede correr en el puerto 3000 si está configurado así en .env.

⚙️ Configuración

Variables esperadas en el archivo .env:

Variable	Descripción	Valor de ejemplo
PORT	Puerto del backend	3000
MONGO_URI	Cadena de conexión a MongoDB	mongodb://localhost/hyr
JWT_SECRET	Clave secreta para JWT	clave_super_segura
CLIENT_URL	URL del frontend Angular	http://localhost:4200
🧪 Pruebas / QA

Ejecuta pruebas unitarias:

npm test


Para pruebas de integración o e2e (end-to-end):

npm run test:e2e

🤝 Contribuciones

Haz un fork del repositorio

Crea una nueva rama (feature/mi-mejora)

Aplica tus cambios con buenas prácticas y pruebas

Crea un Pull Request explicando la modificación

Sigue las convenciones de commit y el estilo del proyecto antes de enviar cambios.

📄 Licencia

Este proyecto está bajo la Licencia MIT.
Consulta el archivo LICENSE para más detalles.

📬 Contacto

Autor: Luis G. Santi
Correo: [tu_correo@ejemplo.com
]
GitHub: github.com/luisgsanti
