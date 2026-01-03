# 🚀 Guía de Instalación - Easy Freedom

Guía completa para instalar y configurar Easy Freedom en tu entorno.

---

## 📋 Tabla de Contenidos

- [Requisitos Previos](#requisitos-previos)
- [Instalación Rápida (5 minutos)](#instalación-rápida-5-minutos)
- [Instalación Detallada](#instalación-detallada)
- [Configuración de Google Sheets](#configuración-de-google-sheets)
- [Configuración de Google Apps Script](#configuración-de-google-apps-script)
- [Deployment](#deployment)
- [Verificación](#verificación)
- [Troubleshooting](#troubleshooting)

---

## ✅ Requisitos Previos

### Cosas que Necesitas

- [ ] **Google Account** (Gmail)
- [ ] **Google Drive** acceso
- [ ] **Acceso a Bitrix24** (si usas ese hosting)
- [ ] O **Hosting alternativo** (Netlify, GitHub Pages, tu servidor)
- [ ] **Git** instalado (opcional pero recomendado)

### Habilidades Requeridas

- Básico: Google Sheets, navegación web
- Intermedio: Copiar-pegar código, GitHub (opcional)
- Avanzado: Modificar JavaScript, Google Apps Script

### Tiempo Estimado

```
Instalación rápida:     5-10 minutos
Instalación completa:   30-45 minutos
Con personalizaciones:  1-2 horas
```

---

## ⚡ Instalación Rápida (5 minutos)

Si solo quieres probar, sigue estos pasos:

### 1. Copiar Plantilla de Google Sheet

```bash
1. Abre: https://docs.google.com/spreadsheets/d/1OBpmqK7DSvJBh5tZjp4bpqa9ziD3joXzp2uGIv_ty_g/
2. Haz click: "Archivo" > "Crear una copia"
3. Nombra: "Easy Freedom - Mi Copia"
4. Guarda
```

### 2. Copiar el Script

```bash
1. En tu Sheet: Extensiones > Google Apps Script
2. Copia el contenido de: backend/Main.gs
3. Pega TODO el código en el editor
4. Cambia SHEET_ID = 'TU_ID_AQUI' (de tu Sheet)
5. Guarda el proyecto
```

### 3. Deploy del Script

```bash
1. Click en "Implementar"
2. Selecciona "Nueva Implementación"
3. Tipo: "Aplicación web"
4. Ejecutar como: Tu cuenta
5. Quien tiene acceso: "Cualquiera"
6. Click "Implementar"
7. Copia la URL que aparece (termina en /exec)
```

### 4. Copiar Dashboard

```bash
1. Abre: frontend/dashboard-easy-freedom-CORREGIDO.html
2. Copia TODO el código
3. En Bitrix24 (o tu hosting):
   - Crea página: /tabla_tareas/
   - Pega el HTML
4. En el HTML, busca: const API_BASE = '...'
5. Reemplaza con tu URL del Step 3
6. Guarda
```

### 5. ¡Listo!

```bash
Abre: https://tu-sitio.com/tabla_tareas/
Login: test@easyfreedom.mx
```

---

## 📖 Instalación Detallada

### PASO 1: Crear Google Sheet Base

#### Opción A: Desde Template

```bash
# Si tienes acceso al template oficial
1. Abre: https://docs.google.com/spreadsheets/d/[TEMPLATE_ID]/
2. "Archivo" > "Crear una copia"
3. Nombra: "Easy Freedom - [Tu Nombre]"
4. Google Sheets te abrirá la copia automáticamente
```

#### Opción B: Crear Manualmente

```bash
1. Ve a: https://sheets.google.com
2. Click "+ Nuevo" > "Hoja de Cálculo"
3. Nombra: "Easy Freedom - [Tu Nombre]"
4. Click "Crear"
```

#### Obtener tu SHEET_ID

```bash
La URL será algo como:
https://docs.google.com/spreadsheets/d/1a2b3c4d5e6f7g8h9i0j/edit

Tu SHEET_ID es: 1a2b3c4d5e6f7g8h9i0j
(Todo lo que está entre /d/ y /edit)

⚠️ GUARDA ESTE ID, lo necesitarás después
```

---

### PASO 2: Crear Pestañas en Google Sheets

Crea las siguientes pestañas (pestañas tabs):

#### Pestaña 1: Usuarios_EasyFreedom

```bash
1. Click derecho en la pestaña "Hoja1"
2. Click "Renombrar"
3. Escribe: "Usuarios_EasyFreedom"
4. Presiona Enter

Agrega estos encabezados en la primera fila:
A: Email
B: ID_Usuario
C: Nombre
D: Teléfono
E: Fecha_Registro
F: Cigarros_Por_Dia
G: Precio_Cigarro_Local
H: Dinero_Ahorrado
I: Días_Sin_Fumar
J: Estado
K: Motivación_Inicial
L: Fecha_Último_Acceso
M: Seminario_Completado
N: Contraseña_Hash
O: Fecha_Actualización
```

#### Pestaña 2: Tareas_Diarias

```bash
Click + > Nueva Pestaña > "Tareas_Diarias"

Encabezados:
A: ID_Tarea
B: Nombre_Tarea
C: Descripción_Corta
D: Categoría
E: Puntos_Posibles
F: Emoji_Tarea
G: Activa
H: Orden_Aparicion
I: Instrucciones
```

#### Pestaña 3: Lecciones_EasyFreedom

```bash
Click + > Nueva Pestaña > "Lecciones_EasyFreedom"

Encabezados:
A: ID_Leccion
B: Semana
C: Modulo
D: Título_Leccion
E: Duración_Minutos
F: URL_Video
G: Contenido_HTML
H: Quiz_JSON
I: Badge_Desbloqueado
J: Puntos_Posibles
K: Orden_Semana
```

#### Pestaña 4: Progreso_Usuario

```bash
Click + > Nueva Pestaña > "Progreso_Usuario"

Encabezados:
A: Email_Usuario
B: Fecha
C: ID_Leccion
D: Lecciones_Completadas_Total
E: Tareas_Completadas_Hoy
F: Tareas_Completadas_Total
G: Dinero_Ahorrado_Hoy
H: Dinero_Ahorrado_Acumulado
I: Racha_Días
J: Puntos_Totales
K: Badges_Desbloqueados_JSON
L: Timestamp
```

#### Pestaña 5: Badges_EasyFreedom

```bash
Click + > Nueva Pestaña > "Badges_EasyFreedom"

Encabezados:
A: ID_Badge
B: Nombre
C: Descripción
D: Emoji
E: Puntos_Desbloqueado
F: Orden
```

#### Pestaña 6: Logs_Actividad

```bash
Click + > Nueva Pestaña > "Logs_Actividad"

Encabezados:
A: Timestamp
B: Email
C: Acción
D: Detalles
E: IP
F: Status
```

#### Pestaña 7: Configuracion_App

```bash
Click + > Nueva Pestaña > "Configuracion_App"

Encabezados:
A: Clave
B: Valor

Filas iniciales:
Clave: "VERSION" | Valor: "1.0.0"
Clave: "TIMEZONE" | Valor: "America/Mexico_City"
Clave: "CURRENCY" | Valor: "USD"
```

---

### PASO 3: Poblar Datos Iniciales

#### Agregar Usuario de Test

En **Usuarios_EasyFreedom**, fila 2:

```
Email: test@easyfreedom.mx
ID_Usuario: USER-test-001
Nombre: Test User
Teléfono: +1234567890
Fecha_Registro: 2025-01-01
Cigarros_Por_Dia: 20
Precio_Cigarro_Local: 2.50
Dinero_Ahorrado: 0
Días_Sin_Fumar: 0
Estado: Activo
Motivación_Inicial: 5
Fecha_Último_Acceso: 2025-01-01
Seminario_Completado: No
Contraseña_Hash: (dejar en blanco)
Fecha_Actualización: 2025-01-01
```

#### Agregar Tareas de Ejemplo

En **Tareas_Diarias**, fila 2 en adelante:

```
TAREA-001 | Vaso de agua | Bebe agua | Salud | 2 | 💧 | Sí | 1 | Bebe un vaso
TAREA-002 | Respiración | Respira profundo | Mental | 3 | 🫁 | Sí | 2 | 3 respiraciones
TAREA-003 | Caminata | Camina 10 min | Salud | 5 | 🚶 | Sí | 3 | Camina
... (etc)
```

#### Agregar Lecciones de Ejemplo

En **Lecciones_EasyFreedom**, fila 2 en adelante:

```
1.1 | 1 | Entender | ¿Por qué fumas? | 5 | https://youtu.be/... | <h2>...</h2> | {...} | BADGE-001 | 10 | 1
1.2 | 1 | Entender | La Planta Carnívora | 8 | https://youtu.be/... | <h2>...</h2> | {...} | BADGE-002 | 10 | 2
```

---

### PASO 4: Crear Google Apps Script

#### Abrir Apps Script

```bash
1. En tu Google Sheet
2. Extensiones > Google Apps Script
3. Se abrirá una pestaña nueva
```

#### Copiar Código

```bash
1. Copia TODO el contenido de: backend/Main.gs
2. En Apps Script, borra el código default (function myFunction() {...})
3. Pega TODO el código
4. IMPORTANTE: Busca la línea 2:
   const SHEET_ID = '1OBpmqK7DSvJBh5tZjp4bpqa9ziD3joXzp2uGIv_ty_g';
5. Reemplaza con tu SHEET_ID de Step 1
6. Click "Guardar" (Ctrl+S)
```

#### Ejemplo:

```javascript
// ❌ ANTES
const SHEET_ID = '1OBpmqK7DSvJBh5tZjp4bpqa9ziD3joXzp2uGIv_ty_g';

// ✅ DESPUÉS
const SHEET_ID = '1a2b3c4d5e6f7g8h9i0j'; // Tu ID aquí
```

---

### PASO 5: Deploy del Google Apps Script

#### Crear Implementación

```bash
1. Click en "Implementar" (arriba a la derecha)
2. Selecciona "Nueva implementación"
3. En "Seleccionar tipo":
   - Elige "Aplicación web"
4. En "Ejecutar como":
   - Elige tu email
5. En "Quién tiene acceso":
   - Elige "Cualquiera"
6. Click "Implementar"
```

#### Autorizar

```bash
1. Te pedirá autorizaciones
2. Click "Revisar permisos"
3. Selecciona tu cuenta
4. Click "Permitir"
```

#### Obtener URL de Deployment

```bash
1. Después de "Implementar", aparecerá:
   "Implementación realizada"
   "URL: https://script.google.com/macros/s/AKfycb.../exec"
2. Copia esa URL COMPLETA
3. ⚠️ GUARDA ESTA URL, la necesitarás

Formato esperado:
https://script.google.com/macros/s/[ID_LARGO]/exec
```

---

### PASO 6: Descargar y Preparar Frontend

#### Clonar o Descargar Archivos

```bash
# Opción A: Con Git
git clone https://github.com/tu-usuario/easy-freedom.git
cd easy-freedom

# Opción B: Descarga manual
# Descarga del GitHub como ZIP
# Extrae en una carpeta
```

#### Archivos Necesarios

```
frontend/
├── dashboard-easy-freedom-CORREGIDO.html
├── lecciones-easy-freedom.html (próximamente)
└── config-easy-freedom.html (próximamente)
```

---

### PASO 7: Configurar Frontend

#### Actualizar API_BASE

En **dashboard-easy-freedom-CORREGIDO.html**, busca (línea ~150):

```javascript
const API_BASE = 'https://script.google.com/macros/s/AKfycbwdRmvsPaIiE8gxpl2d1iNzzYL0vW64ujyESdMaH2u5XronAT1oTGibO2ZghbQpo1Yn/exec';
```

Reemplaza con tu URL del Step 5:

```javascript
const API_BASE = 'https://script.google.com/macros/s/TU_ID_AQUI/exec';
```

### Verificar Configuración

```bash
Busca estas 3 líneas y actualiza:
1. const API_BASE = '...';       // Step 5
2. const SHEET_ID = '...';       // Step 1 (si aplica)
3. const BITRIX24_BASE = '...';  // Tu dominio
```

---

### PASO 8: Hosting del Frontend

#### Opción A: Bitrix24 (Recomendado)

```bash
1. Abre tu sitio Bitrix24: https://capinimx.bitrix24.site
2. En "Sitio Web", crea página:
   - Nombre: "Easy Freedom"
   - URL: /tabla_tareas/
3. En "HTML/Código":
   - Copia TODO el código de dashboard-easy-freedom-CORREGIDO.html
   - Pega
4. ⚠️ IMPORTANTE:
   - Marca: "Move found scripts to the page bottom"
   - Esto asegura que los scripts se ejecuten DESPUÉS del HTML
5. Click "Publicar"

Tu URL será:
https://capinimx.bitrix24.site/tabla_tareas/
```

#### Opción B: Netlify (Gratis)

```bash
1. Ve a: https://netlify.com
2. Sign up con GitHub
3. Click "New site from Git"
4. Selecciona tu repositorio
5. Build settings:
   - Build command: (dejar en blanco)
   - Publish directory: frontend/
6. Deploy

Tu URL será:
https://tu-proyecto.netlify.app/dashboard-easy-freedom-CORREGIDO.html
```

#### Opción C: GitHub Pages (Gratis)

```bash
1. En tu repositorio GitHub
2. Settings > Pages
3. Source: Deploy from a branch
4. Branch: main
5. Folder: /docs o /
6. Save

Tu URL será:
https://tu-usuario.github.io/easy-freedom/frontend/dashboard-easy-freedom-CORREGIDO.html
```

---

### PASO 9: Prueba Inicial

```bash
1. Abre tu URL del Step 8
2. Deberías ver: 
   - Login form
   - Email: test@easyfreedom.mx
3. Click "Login"
4. Deberías ver el dashboard con:
   - Estadísticas (días, dinero, etc)
   - Tareas
   - Lecciones
```

Si ves esto, ¡instalación exitosa! ✅

---

## 🔧 Configuración Avanzada

### Cambiar Datos de Usuario

```bash
En Google Sheet "Usuarios_EasyFreedom":

1. Fila 2: Usuario de test
   Email: test@easyfreedom.mx
   
2. Agrega fila 3 con tus datos:
   Email: tuEmail@example.com
   Nombre: Tu Nombre
   etc.
```

### Agregar Más Tareas

```bash
En "Tareas_Diarias", agrega filas:

TAREA-010 | Nueva Tarea | Descripción | Categoría | 3 | 🎯 | Sí | 10 | Instrucciones
```

### Agregar Lecciones

```bash
En "Lecciones_EasyFreedom", agrega filas:

2.1 | 2 | Desmontar | Razones Contradictorias | 7 | [URL_VIDEO] | [HTML] | [QUIZ] | BADGE | 10 | 1
```

---

## ✅ Verificación

### Checklist de Instalación

- [ ] Google Sheet creado con 7 pestañas
- [ ] SHEET_ID guardado
- [ ] Google Apps Script deployado
- [ ] URL de deployment obtenida
- [ ] Frontend configurado con URL correcta
- [ ] Frontend hosteado
- [ ] Login funciona con test@easyfreedom.mx
- [ ] Dashboard muestra datos
- [ ] Tareas cargan
- [ ] Console limpia (sin errores)

### Verificar Funcionamiento

```bash
1. Abre tu URL
2. F12 para abrir Console
3. Deberías ver: "🚀 Inicializando Easy Freedom Dashboard"
4. Sin errores rojos
5. Login funciona
```

---

## 🐛 Troubleshooting

### Problema: "Dashboard no carga"

```
Solución:
1. F12 > Console
2. Busca errores rojos
3. Verifica API_BASE está correcto
4. Verifica SHEET_ID en Apps Script
5. Intenta hardrefresh: Ctrl+Shift+R
```

### Problema: "API_BASE is not defined"

```
Solución:
1. Verifica que const API_BASE esté en el HTML
2. No esté comentado (sin // al inicio)
3. Está ANTES de usarlo en el código
```

### Problema: "Pestaña no encontrada"

```
Solución:
1. En Google Sheet, verifica:
   - Nombres de pestañas exactos (mayúsculas/minúsculas)
   - Usuarios_EasyFreedom (exacto)
   - Tareas_Diarias (exacto)
   - etc.
2. En Apps Script, verifica:
   const SHEETS = { ... }
   Los nombres coinciden
```

### Problema: "Usuario no encontrado"

```
Solución:
1. En Google Sheet > Usuarios_EasyFreedom
2. Verifica que el email existe
3. Revisa la fila (debería ser fila 2+)
4. Email debe ser exacto (minúsculas)
```

### Problema: "Error de CORS"

```
Solución:
1. No debería ocurrir (Google Apps Script maneja CORS)
2. Si ocurre:
   - Verifica que API_BASE es HTTPS
   - Intenta en incógnito
   - Limpia cache del navegador
```

### Problema: "Tareas no cargan"

```
Solución:
1. F12 > Network
2. Busca request a /exec
3. Verifica que responde 200
4. Verifica que JSON es válido
5. Revisa Console para errores
```

---

## 📞 Soporte

¿Problemas durante la instalación?

- 📧 Email: contacto@easyfreedom.mx
- 💬 Telegram: [@easyfreedom_mx](https://t.me/easyfreedom_mx)
- 🐛 Issues: [GitHub Issues](https://github.com/tu-usuario/easy-freedom/issues)

---

## 📚 Próximos Pasos

Después de instalar:

1. **Personaliza datos** en Google Sheets
2. **Agrega tus lecciones** (Semanas 1-8)
3. **Configura usuarios reales**
4. **Personaliza branding** (colores, logos)
5. **Promociona** tu plataforma

---

**Last Updated**: 2025-01-03  
**Version**: 1.0.0  
**Status**: 🟢 Production Ready
