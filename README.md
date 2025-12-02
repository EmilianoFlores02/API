# Random Cats - Aplicación de Búsqueda de Gatos

Una aplicación web interactiva desarrollada con React que permite a los usuarios explorar imágenes aleatorias de gatos y buscar por razas específicas utilizando The Cat API.

---

## Información del Proyecto

**Nombre del Autor:** Emiliano Rafael Flores Ramírez
**Número de Control:** 20212404
**Institución:** Instituto Tecnológico de Tijuana 
**Clase:** Desarrollo de Aplicaciones Móviles  
**Fecha:** 01/12/2025

---

## Introducción

Random Cats es una aplicación web moderna y responsiva que utiliza React y The Cat API para alegrar tu día con imágenes de gatos :) 

La aplicación permite a los usuarios:

- Visualizar imágenes aleatorias de gatos al cargar la página
- Buscar imágenes de una raza específica
- Ver información sobre las razas de gatos
- Abrir imágenes en una nueva pestaña
- Disfrutar de una interfaz sencilla y fluida

Esta aplicación demuestra el uso de React, states, uso de APIs, y componentes, creando una experiencia fluida para el usuario.

---

## Características

- **Imágenes Aleatorias**: Muestra 10 imágenes aleatorias de gatos al cargar la aplicación
- **Búsqueda por Raza**: Permite buscar gatos por raza específica (Persian, Siamese, Maine Coon, etc.)
- **Información de Razas**: Muestra descripción detallada de la raza cuando se realiza una búsqueda
- **Vista Ampliada**: Al hacer clic en una imagen, se abre un modal con la imagen en tamaño completo
- **Abrir en Nueva Pestaña**: Opción para abrir la imagen original en una nueva pestaña del navegador
- **Diseño Responsivo**: Interfaz adaptada para diferentes tamaños de pantalla
- **Efectos Hover**: Animaciones suaves al pasar el mouse sobre las imágenes

---

## Instalación

### Prerrequisitos

- Node.js (versión 14 o superior)
- npm o yarn

### Pasos para Instalar

1. Clona el repositorio:
```bash
git clone [URL de tu repositorio]
```

2. Navega al directorio del proyecto:
```bash
cd API
```

3. Instala las dependencias:
```bash
npm install
```

4. Configura tu API Key de The Cat API:
   - Obtén una API key gratuita en [The Cat API](https://thecatapi.com/)
   - Abre el archivo `src/App.jsx`
   - Reemplaza `"live_4K4WJ9sCWsTYiiyRVJl7XCE8IwdGttGWgM0PD9ojHN2AG8aYy3bfNjgF9phDncnw"` con tu propia API key en la línea 25

5. Inicia el servidor de desarrollo:
```bash
npm run dev
```

6. Abre tu navegador en `http://localhost:5173`

---

## Descripción del Código

### Estructura del Proyecto

```
API/
├── src/
│   ├── Components/
│   │   ├── Buscador.jsx      # Componente de búsqueda
│   │   ├── Encabezado.jsx     # Encabezado de la aplicación
│   │   ├── Imagen.jsx         # Modal para mostrar imagen ampliada
│   │   └── Listado.jsx         # Lista de imágenes de gatos
│   ├── App.jsx                 # Componente principal
│   ├── App.css                 # Estilos principales
│   ├── index.css               # Estilos globales
│   └── main.jsx                # Punto de entrada
├── public/                     # Archivos estáticos
├── package.json                # Dependencias del proyecto
└── README.md                   # Documentación
```

### Componentes Principales

#### **App.jsx**
Componente principal que maneja el estado global de la aplicación:
- **Estados**:
  - `busquedaTexto`: Almacena el texto de búsqueda ingresado por el usuario
  - `arreglo`: Array con las imágenes de gatos obtenidas de la API
  - `total`: Número total de resultados
  - `busqueda`: Boolean que indica si hay una búsqueda activa
  - `imagenSeleccionada`: Objeto con la imagen seleccionada para el modal
  - `mostrarImagen`: Controla la visibilidad del modal
  - `infoRaza`: Información de la raza encontrada (nombre y descripción)

- **useEffect**: Se ejecuta cuando cambia `busquedaTexto`:
  - Si hay texto de búsqueda: Busca la raza en The Cat API y luego obtiene imágenes de esa raza
  - Si no hay búsqueda: Obtiene imágenes aleatorias de gatos

#### **Buscador.jsx**
Componente que renderiza el campo de búsqueda:
- Utiliza `InputGroup` de React Bootstrap
- Actualiza el estado `busquedaTexto` mediante `setBusquedaTexto` cuando el usuario escribe

#### **Listado.jsx**
Componente que muestra la lista de imágenes:
- Muestra mensaje informativo cuando no hay búsqueda
- Muestra el número de resultados y la descripción de la raza cuando hay búsqueda
- Renderiza las imágenes en una cuadrícula responsiva
- Cada imagen es clickeable y abre el modal al hacer clic
- Solo muestra información individual de raza en imágenes aleatorias (no en búsquedas)

#### **Imagen.jsx**
Componente modal que muestra la imagen seleccionada:
- Utiliza `Modal` de React Bootstrap
- Muestra la imagen en tamaño completo
- Incluye botones para cerrar y abrir la imagen en nueva pestaña
- Muestra información de la raza si está disponible

#### **Encabezado.jsx**
Componente simple que muestra el título "RANDOM CATS"

### Flujo de Datos

1. El usuario escribe en el buscador → `setBusquedaTexto` actualiza el estado
2. `useEffect` detecta el cambio → Realiza petición a The Cat API
3. La API responde → Se actualizan `arreglo`, `total`, `busqueda` e `infoRaza`
4. `Listado` recibe los nuevos datos → Renderiza las imágenes
5. Usuario hace clic en una imagen → Se abre el modal `Imagen`

### Estilos (App.css)

- Diseño flexbox para layout responsivo
- Efectos hover con `transform: scale()` y sombras
- Transiciones suaves para mejor UX
- Tamaños adaptativos usando unidades viewport (vw)

---

## Uso de la Aplicación

1. **Ver Gatos Aleatorios**: Al cargar la aplicación, se muestran automáticamente 10 imágenes aleatorias de gatos.

<img width="1895" height="858" alt="image" src="https://github.com/user-attachments/assets/9d047817-fe40-45d0-93bb-7a46d4aba8db" />

2. **Buscar por Raza**: 
   - Escribe el nombre de una raza en el buscador (ej: "Persian", "Siamese", "Maine Coon")
   - La aplicación buscará y mostrará imágenes de esa raza específica
   - Se mostrará la descripción de la raza debajo del título de resultados

<img width="1919" height="822" alt="image" src="https://github.com/user-attachments/assets/5198c611-3187-477c-bdff-08af262d51a9" />

3. **Ver Imagen Ampliada**:
   - Haz clic en cualquier imagen para abrirla en un modal
   - En el modal puedes cerrar o abrir la imagen en una nueva pestaña

<img width="1919" height="866" alt="image" src="https://github.com/user-attachments/assets/4d1e854e-ff08-4472-85ed-59b1341ec90c" />

4. **Efectos Interactivos**:
   - Pasa el mouse sobre las imágenes para ver el efecto de resaltado

<img width="770" height="370" alt="image" src="https://github.com/user-attachments/assets/815904bc-4803-4030-b4c1-e19920a35151" />

---

## Conclusión del Proyecto

Con el desarrollo de este proyecto pude practicar la implementación de una API en el entorno de REACT y esto me permitió tener un mejor entendimiento de estas aplicaciones web.

El desarrollar aplicaciones web me resultó complicado, pero con practica se pueden superar los retos que aparecen en el desarrollo. En este proyecto el principal reto fue el manejo de componentes con funciones de imagen, ya que no lo había implementadoo previamente en un programa.

En general, a través de este proyecto pude mejorar mi entendimiento de las aplicaciones de REACT y la implementación de APIs gracias a los conocimientos previos adquiridos en esta clase.

---

## Licencia

Este proyecto es de uso educativo y fue desarrollado como parte de un curso académico.
