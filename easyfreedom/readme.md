# 🚭 Easy Freedom - Dejar de Fumar con Método Allen Carr

> **Sistema gamificado de educación y apoyo para dejar de fumar basado en el Método Easy Way de Allen Carr**

---

## 📋 Tabla de Contenidos

- [Descripción General](#descripción-general)
- [Tecnología](#tecnología)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Configuración](#configuración)
- [Características](#características)
- [Dashboard](#dashboard)
- [Lecciones](#lecciones)
- [Sistema de Puntos](#sistema-de-puntos)
- [Base de Datos](#base-de-datos)
- [Método Allen Carr](#método-allen-carr)
- [Instalación](#instalación)
- [Uso](#uso)
- [Contribuciones](#contribuciones)

---

## 🎯 Descripción General

**Easy Freedom** es una plataforma digital que ayuda a las personas a dejar de fumar utilizando el **Método Easy Way de Allen Carr**. 

### ¿Por qué este método?

El método se basa en la idea revolucionaria de que **dejar de fumar es fácil si sabes cómo**:

✅ **NO requiere fuerza de voluntad**  
✅ **NO hay traumas o sufrimiento**  
✅ **NO engordarás**  
✅ Se basa en **entender la verdad** sobre la adicción  

### El Concepto Clave

> "En realidad dejar de fumar es muy fácil si sabes cómo"

La adicción a la nicotina funciona como una **planta carnívora**: el fumador queda atrapado sin darse cuenta, y las razones que cree que tiene para fumar son **ilusiones creadas por la adicción**.

---

## 🛠️ Tecnología

### Stack Tecnológico

```
Frontend:
├── HTML5
├── CSS3 (Responsive)
├── JavaScript Vanilla
└── Material Design

Backend:
├── Google Apps Script (GAS)
└── Google Sheets (Database)

Hosting:
├── Bitrix24 (Site Hosting)
├── GitHub (Code Repository)
└── Google Drive (Data Storage)

APIs:
└── Google Apps Script REST API
```

### Herramientas Utilizadas

- **Bitrix24**: CMS y hosting de páginas
- **Google Apps Script**: Backend serverless
- **Google Sheets**: Base de datos
- **Google Drive**: Almacenamiento de archivos
- **Telegram**: Canal educativo complementario
- **GitHub**: Versionamiento de código

---

## 📁 Estructura del Proyecto

```
easy-freedom/
├── README.md                          # Este archivo
├── TRANSCRIPCION-ALLEN-CARR.txt       # Material de video
├── LECCIONES.md                       # Contenido de lecciones
├── CONCEPTOS-CLAVE.md                 # Conceptos del método
│
├── frontend/
│   ├── dashboard-easy-freedom.html    # Dashboard principal
│   ├── lecciones-easy-freedom.html    # Página de lecciones
│   ├── config-easy-freedom.html       # Página de configuración
│   ├── css/
│   │   └── estilos.css               # Estilos globales
│   └── js/
│       ├── api.js                    # Funciones de API
│       ├── auth.js                   # Autenticación
│       └── utils.js                  # Utilidades
│
├── backend/
│   └── Main.gs                        # Google Apps Script Principal
│       ├── doGet()                   # Endpoints GET
│       ├── doPost()                  # Endpoints POST
│       ├── obtenerUsuario()          # Funciones de usuario
│       ├── obtenerTareasDia()        # Funciones de tareas
│       ├── obtenerLecciones()        # Funciones de lecciones
│       ├── guardarTareaCompletada()  # Guardar progreso
│       └── guardarProgresoLeccion()  # Guardar lecciones
│
├── docs/
│   ├── INSTALACION.md               # Guía de instalación
│   ├── API.md                       # Documentación de API
│   ├── CONTRIBUIR.md                # Guía de contribución
│   └── PREGUNTAS-FRECUENTES.md      # FAQ
│
├── sheets/
│   ├── Usuarios_EasyFreedom.csv      # Estructura de usuarios
│   ├── Tareas_Diarias.csv            # Tareas disponibles
│   ├── Lecciones_EasyFreedom.csv     # Contenido de lecciones
│   └── Progreso_Usuario.csv          # Progreso de usuarios
│
└── assets/
    ├── logos/
    ├── icons/
    └── images/
```

---

## ⚙️ Configuración

### Variables de Entorno / Configuración

```javascript
// En frontend/js/api.js
const API_BASE = 'https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec';
const SHEET_ID = '1OBpmqK7DSvJBh5tZjp4bpqa9ziD3joXzp2uGIv_ty_g';
const BITRIX24_BASE = 'https://capinimx.bitrix24.site/easyfreedom';
```

### Configuración de Google Sheets

Las siguientes pestañas son **REQUERIDAS**:

| Pestaña | Descripción | Columnas |
|---------|-------------|----------|
| **Usuarios_EasyFreedom** | Datos de usuarios | Email, ID, Nombre, Teléfono, Fecha_Registro, Cigarros/día, Precio, Dinero_Ahorrado, Días_Sin_Fumar, Estado, Motivación, Último_Acceso, Seminario, Contraseña_Hash, Fecha_Actualización |
| **Tareas_Diarias** | Tareas disponibles | ID_Tarea, Nombre, Descripción, Categoría, Puntos_Posibles, Emoji, Activa, Orden_Aparicion, Instrucciones |
| **Lecciones_EasyFreedom** | Contenido de lecciones | ID_Leccion, Semana, Módulo, Título, Duración_Minutos, URL_Video, Contenido_HTML, Quiz_JSON, Badge, Puntos_Posibles, Orden_Semana |
| **Progreso_Usuario** | Seguimiento de progreso | Email, Fecha, ID_Leccion, Lecciones_Completadas, Tareas_Completadas, Tareas_Total, Dinero_Ahorrado_Hoy, Dinero_Acumulado, Racha_Días, Puntos_Totales, Badges_JSON, Timestamp |
| **Badges_EasyFreedom** | Badges/Logros | ID_Badge, Nombre, Descripción, Emoji, Puntos_Desbloqueado, Orden |
| **Logs_Actividad** | Auditoría | Timestamp, Email, Acción, Detalles, IP, Status |

---

## ✨ Características

### 🎮 Dashboard Principal

El usuario ve:

- **Estadísticas en tiempo real**
  - 🚭 Días sin fumar
  - 💰 Dinero ahorrado
  - ✅ Tareas completadas hoy
  - 🔥 Racha de días

- **Progreso Visual**
  - Timeline de 3 semanas
  - Barra de progreso de tareas
  - Porcentaje de cumplimiento

- **Lección del Día**
  - Video/contenido
  - Quiz interactivo
  - Badges al completar

- **Sistema de Tareas Gamificadas**
  - 9+ tareas diarias
  - Puntos por completar
  - Emojis motivadores
  - Progreso visible

- **Comunidad**
  - Feed de usuarios
  - Logros de otros
  - Inspiración mutua

### 📚 Sistema de Lecciones

Estructura de 8 semanas:

**Semana 1-2: Entender la Trampa**
- Lección 1.1: ¿Por qué fumas?
- Lección 1.2: La planta carnívora
- Lección 1.3: El pequeño monstruo

**Semana 3-4: Desmontar Ilusiones**
- Lección 2.1: Razones contradictorias
- Lección 2.2: La falsa relajación
- Lección 2.3: Verdad vs ilusión

**Semana 5-8: Viviendo sin Fumar**
- Lección 3.1: El síndrome de abstinencia
- Lección 3.2: Libertad real
- Lección 3.3: Manteniendo la victoria

### 🏆 Sistema de Puntos y Badges

**Tareas Diarias:**
- Vaso de agua: 2 puntos
- Respiración consciente: 3 puntos
- Caminata: 5 puntos
- Mindfulness: 2 puntos
- Escribir razón: 1 punto
- Llamada de apoyo: 5 puntos
- Lectura: 2 puntos
- Visualización: 3 puntos
- Diario: 2 puntos

**Badges Disponibles:**
- 🌟 Primer día libre
- 🔥 Una semana sin fumar
- 💪 30 días de libertad
- 🏆 100 días conquista
- 💎 Vida nueva completada

---

## 📊 Dashboard

### Pantalla Principal

```
┌─────────────────────────────────────────────────┐
│           🚭 EASY FREEDOM DASHBOARD             │
│         Tu Viaje de Libertad Comienza Hoy       │
└─────────────────────────────────────────────────┘

┌──────────┬──────────┬──────────┬──────────┐
│  🚭      │   💰     │   ✅     │   🔥     │
│  15      │  $750    │   87%    │   15     │
│  Días    │ Ahorrado │  Tareas  │  Racha   │
└──────────┴──────────┴──────────┴──────────┘

📈 Tu Progreso en Easy Freedom
┌─────────────┬─────────────┬─────────────┐
│ Semana 1-2  │ Semana 3-4  │ Semana 5-8  │
│ Entender    │ Desmontar   │ Viviendo    │
│ [████████]  │ [        ]  │ [        ]  │
└─────────────┴─────────────┴─────────────┘

📚 Lección de Hoy
┌──────────────────────────────────────┐
│ 🧠 Lección 1.1: ¿Por qué fumas?      │
│ ⏱️ 5 min | 📍 Semana 1                │
│ Entender la nicotina y cómo funciona │
│ la adicción es el primer paso...      │
│ [Ver Lección] [Saltar]               │
└──────────────────────────────────────┘

✅ Tus Tareas de Hoy (8/9 completadas)
┌──────────┬──────────┬──────────┐
│ 💧 Vaso  │ 🫁 Respi │ 🚶 Camin │
│ +2 pts   │ +3 pts   │ +5 pts   │
└──────────┴──────────┴──────────┘
```

---

## 📚 Lecciones

### Estructura de Cada Lección

```markdown
## Lección X.Y: [Título]

### 🎯 Objetivo
[Qué aprenderá el usuario]

### 📍 El Problema
[Cuál es la creencia falsa]

### 💡 La Ilusión
[Por qué los fumadores creen esto]

### 🎬 Video
[Embed de video o link]

### 📖 Contenido
[Explicación detallada]

### 💭 Reflexión
[Preguntas para reflexionar]

### ✅ Quiz
[Preguntas para verificar comprensión]

### 🏆 Badge
[Logro al completar]

### 📝 Tareas
[Tareas del día relacionadas]
```

### Lecciones Principales (8 semanas)

**Semana 1 - Entender la Trampa**
- 1.1: ¿Por qué fumas? (La ilusión de placer)
- 1.2: La planta carnívora (Metáfora de la adicción)
- 1.3: El pequeño monstruo (El síndrome de abstinencia)

**Semana 2 - Entender Más**
- 2.1: Razones contradictorias (El humo de tus excusas)
- 2.2: La falsa relajación (Mito vs realidad)
- 2.3: Verdad vs ilusión (Tu mente engañada)

**Semana 3-4 - Desmontar**
- 3.1-4.3: Profundizar en cada ilusión

**Semana 5-8 - Vivir Libre**
- 5.1-8.3: Mantener la libertad

---

## 📱 Sistema de Tareas

### Tareas Disponibles (9+)

```javascript
const tareasDisponibles = [
  { id: 1, nombre: "Vaso de agua", emoji: "💧", puntos: 2 },
  { id: 2, nombre: "Respiración", emoji: "🫁", puntos: 3 },
  { id: 3, nombre: "Caminata", emoji: "🚶", puntos: 5 },
  { id: 4, nombre: "Mindfulness", emoji: "🧘", puntos: 2 },
  { id: 5, nombre: "Escribir razón", emoji: "✍️", puntos: 1 },
  { id: 6, nombre: "Llamada apoyo", emoji: "📱", puntos: 5 },
  { id: 7, nombre: "Lectura", emoji: "📖", puntos: 2 },
  { id: 8, nombre: "Visualización", emoji: "👁️", puntos: 3 },
  { id: 9, nombre: "Diario", emoji: "📔", puntos: 2 }
];
```

### Categorías

- 🏃 **Salud**: Caminata, Respiración, Ejercicio
- 🧠 **Mental**: Mindfulness, Visualización, Meditación
- 📝 **Reflexión**: Diario, Escribir razón, Lectura
- 👥 **Social**: Llamada de apoyo, Comunidad
- 💧 **Básico**: Vaso de agua, Higiene

---

## 🔐 Sistema de Autenticación

### Login

```javascript
// Usuario ingresa email
const email = "usuario@example.com";
localStorage.setItem('easyFreedom_usuario', JSON.stringify(usuario));
```

### Sesión

La sesión se guarda en **localStorage** del navegador.

```javascript
{
  email: "usuario@example.com",
  nombre: "Usuario",
  diasSinFumar: 15,
  dineroAhorrado: 750,
  racha: 15
}
```

### Logout

```javascript
localStorage.removeItem('easyFreedom_usuario');
location.reload();
```

---

## 📊 Base de Datos

### Esquema de Google Sheets

#### Tabla: Usuarios_EasyFreedom

| Columna | Tipo | Descripción |
|---------|------|-------------|
| Email | String | Email único |
| ID_Usuario | String | ID único generado |
| Nombre | String | Nombre del usuario |
| Teléfono | String | Contacto |
| Fecha_Registro | Date | Cuándo se registró |
| Cigarros_Por_Dia | Number | Cantidad antes de dejar |
| Precio_Cigarro_Local | Number | Precio unitario en su zona |
| Dinero_Ahorrado | Number | Fórmula: días × precio × cantidad |
| Días_Sin_Fumar | Number | Contador desde registro |
| Estado | String | Activo/Pausa/Completado/Recaído |
| Motivación_Inicial | Number | 1-10 escala |
| Fecha_Último_Acceso | Date | Última vez que usó |
| Seminario_Completado | String | Sí/No/Planeado |
| Contraseña_Hash | String | Hash de contraseña (opcional) |
| Fecha_Actualización | Date | Última modificación |

#### Tabla: Tareas_Diarias

| Columna | Tipo | Descripción |
|---------|------|-------------|
| ID_Tarea | String | ID único |
| Nombre_Tarea | String | Nombre de tarea |
| Descripción_Corta | String | Breve descripción |
| Categoría | String | Categoría (Salud, Mental, etc) |
| Puntos_Posibles | Number | Puntos al completar |
| Emoji_Tarea | String | Emoji representativo |
| Activa | Boolean/String | Sí/No |
| Orden_Aparicion | Number | Orden en dashboard |
| Instrucciones | String | Cómo completar |

#### Tabla: Lecciones_EasyFreedom

| Columna | Tipo | Descripción |
|---------|------|-------------|
| ID_Leccion | String | ID único (ej: 1.1, 2.3) |
| Semana | Number | Semana (1-8) |
| Modulo | String | Módulo de la semana |
| Título_Leccion | String | Título |
| Duración_Minutos | Number | Minutos de video |
| URL_Video | String | Link a video |
| Contenido_HTML | String | Contenido en HTML |
| Quiz_JSON | String | Preguntas en JSON |
| Badge_Desbloqueado | String | ID de badge |
| Puntos_Posibles | Number | Puntos al completar |
| Orden_Semana | Number | Orden en la semana |

---

## 🧠 Método Allen Carr

### Conceptos Clave

#### 1. **La Trampa de la Nicotina**

La nicotina funciona como una **planta carnívora**:
- El olor (el primer cigarrillo) es irresistible
- El néctar (la falsa sensación de placer) es pegajoso
- Cuanto más intentas escapar, más atrapado estás
- Finalmente, no hay alternativa

#### 2. **El Pequeño Monstruo**

La **adicción física a la nicotina** que:
- Causa síndrome de abstinencia (vacío, inquietud)
- Se alimenta con cada cigarrillo
- Muere en **3-5 días** sin nicotina
- Puede ser vencido reconociendo qué es

#### 3. **Las Razones Contradictorias**

Los fumadores dan **razones contradictorias** para fumar:
- "Fumo para relajarme" Y "Fumo cuando estoy relajado"
- "Fumo cuando estoy estresado" Y "Fumo cuando estoy en paz"
- "Fumo para concentrarme" Y "Fumo sin pensar"

**Conclusión**: Las razones son **ILUSIONES** creadas por la adicción.

#### 4. **La Verdad**

```
REALIDAD = Fumas SOLO para alimentar la adicción

NO fumas por:
✗ Placer (es mínimo y temporal)
✗ Relajación (la nicotina estimula)
✗ Concentración (afecta el enfoque)
✗ Social (muchos no fuman)

Fumas por:
✓ Alimentar el síndrome de abstinencia
✓ Mantener los niveles de nicotina
✓ Una adicción que niega tu libertad
```

#### 5. **Dejar es Fácil**

Una vez entiendes:
- Que NO hay ventajas reales
- Que las razones son ilusiones
- Que el monstruo morirá en días
- Que NO es sacrificio sino liberación

**Entonces dejarlo es FÁCIL**

---

## 🚀 Instalación

### Requisitos Previos

- [ ] Cuenta de Google (Gmail)
- [ ] Google Sheets con estructura completa
- [ ] Google Apps Script deployado
- [ ] Acceso a Bitrix24 (si usas hosting)

### Pasos de Instalación

#### 1. **Crear Google Sheet**

```bash
# Crea un nuevo Google Sheet con:
- Pestaña: Usuarios_EasyFreedom
- Pestaña: Tareas_Diarias
- Pestaña: Lecciones_EasyFreedom
- Pestaña: Progreso_Usuario
- Pestaña: Badges_EasyFreedom
- Pestaña: Logs_Actividad
```

#### 2. **Configurar Google Apps Script**

```bash
# En Google Sheet > Extensiones > Apps Script

# Copia el contenido de:
backend/Main.gs

# Reemplaza SHEET_ID con tu ID
const SHEET_ID = 'TU_SHEET_ID_AQUI';

# Deploya como nuevo despliegue:
- Tipo: API ejecutable
- Ejecutar como: Tu cuenta
- Quién tiene acceso: Cualquiera
```

#### 3. **Copiar Deployment URL**

```javascript
// La URL será algo como:
const API_BASE = 'https://script.google.com/macros/s/AKfycbwdRmvs.../exec';
```

#### 4. **Configurar Dashboard HTML**

```javascript
// En frontend/dashboard-easy-freedom.html

// Reemplaza:
const API_BASE = 'https://script.google.com/macros/s/YOUR_ID/exec';
```

#### 5. **Alojar en Bitrix24 (u otro hosting)**

```bash
# En Bitrix24:
- Crea página en /tabla_tareas/
- Pega contenido de dashboard-easy-freedom.html
- Asegúrate de marcar: "Move scripts to page bottom"
```

#### 6. **Poblar Base de Datos**

```bash
# Agrega datos de ejemplo en Google Sheet:

Usuarios_EasyFreedom:
- test@easyfreedom.mx | USER-001 | Test User | ... (ver estructura)

Tareas_Diarias:
- TAREA-001 | Vaso de agua | ... (ver estructura)

Lecciones_EasyFreedom:
- 1.1 | 1 | Entender | ¿Por qué fumas? | ... (ver estructura)
```

---

## 📖 Uso

### Para Usuarios Nuevos

1. **Ingresa tu email** en el login del dashboard
2. **Completa tu perfil** (cigarros/día, precio, etc)
3. **Mira la lección del día** (5-10 minutos)
4. **Completa las 9 tareas** (10-20 minutos totales)
5. **Sigue el proceso** de 8 semanas

### Para Administradores

1. **Agregar usuarios**
   - Manualmente en Google Sheet
   - O vía formulario automático

2. **Crear lecciones**
   - Editar pestaña `Lecciones_EasyFreedom`
   - Incluir video URL, contenido HTML, quiz

3. **Crear tareas**
   - Editar pestaña `Tareas_Diarias`
   - Asignar puntos, emoji, orden

4. **Monitorear progreso**
   - Ver pestaña `Progreso_Usuario`
   - Revisar `Logs_Actividad`

### Para Desarrolladores

1. **Clonar repositorio**
   ```bash
   git clone https://github.com/tu-usuario/easy-freedom.git
   cd easy-freedom
   ```

2. **Configurar variables locales**
   ```bash
   # Crear archivo .env
   SHEET_ID=tu_id_aqui
   API_DEPLOYMENT=tu_url_aqui
   ```

3. **Hacer cambios**
   - Editar archivos en `frontend/` o `backend/`
   - Tesitear en local
   - Commitear cambios

4. **Deployar cambios**
   ```bash
   # Copiar archivos nuevos a Bitrix24
   # O actualizar Apps Script
   git push origin main
   ```

---

## 🤝 Contribuciones

### Cómo Contribuir

Estamos **MUY ABIERTOS** a contribuciones. Aquí hay formas de ayudar:

#### 1. **Reportar Bugs**
```bash
# Abre un issue con:
- Descripción del problema
- Pasos para reproducir
- Screenshots si es posible
```

#### 2. **Sugerir Mejoras**
```bash
# Abre un issue con etiqueta "enhancement"
- Descripción de la mejora
- Por qué sería útil
- Ejemplos si es posible
```

#### 3. **Crear Contenido**
```bash
# Ayuda a crear:
- Nuevas lecciones
- Tareas adicionales
- Videos
- Artículos
- Testimonios
```

#### 4. **Mejorar Código**
```bash
# Fork el repo > Crea rama > Haz cambios > PR

# Guía de contribución:
ver CONTRIBUIR.md
```

### Proceso de Pull Request

1. **Fork** el repositorio
2. **Crea rama** con nombre descriptivo: `feature/nueva-leccion`
3. **Haz commits** con mensajes claros
4. **Push** a tu fork
5. **Abre Pull Request** con descripción

---

## 📝 Licencia

Este proyecto está bajo licencia **MIT**.

Puedes:
- ✅ Usar gratuitamente
- ✅ Modificar
- ✅ Distribuir
- ✅ Usar comercialmente

Debes:
- 📌 Mencionar la licencia
- 📌 Mencionar cambios

---

## 📞 Contacto y Soporte

### Equipo

- **Cris** - Creador y Product Manager
- **Equipo CapiniMX** - Consultoría en psicología infantil

### Redes y Canales

- 📧 Email: contacto@easyfreedom.mx
- 📱 Telegram: [@easyfreedom_mx](https://t.me/easyfreedom_mx)
- 🌐 Web: https://capinimx.bitrix24.site/easyfreedom
- 💻 GitHub: https://github.com/tu-usuario/easy-freedom

### Preguntas Frecuentes

Ver archivo: `docs/PREGUNTAS-FRECUENTES.md`

---

## 🗺️ Roadmap

### Próximas Características

- [ ] App móvil (React Native)
- [ ] Integración con WhatsApp
- [ ] Sistema de coaching por chat
- [ ] Comunidad integrada
- [ ] Reportes avanzados
- [ ] Integraciones con salud (Apple Health, Google Fit)
- [ ] Gamificación avanzada (leaderboards)
- [ ] Soporte multiidioma

---

## 📚 Recursos Adicionales

### Documentación Completa
- [API Documentation](docs/API.md)
- [Installation Guide](docs/INSTALACION.md)
- [Contributing Guide](docs/CONTRIBUIR.md)
- [FAQ](docs/PREGUNTAS-FRECUENTES.md)

### Material de Referencia
- [Transcripción Video Allen Carr](TRANSCRIPCION-ALLEN-CARR-NOTAS-LECCIONES.txt)
- [Conceptos Clave](CONCEPTOS-CLAVE.md)
- [Plan de Lecciones](LECCIONES.md)

### Enlaces Útiles
- [Libro: Easy Way to Stop Smoking - Allen Carr](https://www.amazon.com/Easy-Way-Stop-Smoking-Revised/dp/0615482155)
- [Sitio Oficial Allen Carr](https://www.allencarr.com/)
- [YouTube Allen Carr](https://www.youtube.com/c/AllenCarrEasyWay)

---

## 📊 Estadísticas

### Usuarios Activos
- 🚭 Total usuarios registrados: [DATO]
- ✅ Usuarios completaron semana 1: [DATO]
- 🏆 Usuarios completaron todo: [DATO]

### Engagement
- 📊 Promedio de tareas/día: [DATO]
- 🎯 Tasa de finalización: [DATO]

---

## 🎯 Misión y Visión

### Misión
> Ayudar a millones de personas a dejar de fumar de forma fácil, basándose en entender la verdad sobre la adicción a la nicotina.

### Visión
> Un mundo donde nadie necesita luchar contra la adicción al tabaco, porque entienden cómo liberarse.

### Valores
- 💡 **Honestidad**: Decimos la verdad sobre la adicción
- 🤝 **Empatía**: Entendemos el viaje del fumador
- 🎯 **Eficacia**: Métodos que realmente funcionan
- 🔓 **Libertad**: Libertad de verdad, sin sacrificio

---

## 🙏 Agradecimientos

- **Allen Carr** - Por el revolucionario método Easy Way
- **CapiniMX** - Por la consultoría en psicología
- **Comunidad de contribuidores** - Por ayudar a mejorar

---

## ⚖️ Disclaimer

Easy Freedom es una plataforma educativa basada en el método Allen Carr. No es un sustituto de consejo médico profesional. Si tienes problemas de salud relacionados con el consumo de tabaco, consulta con un profesional médico.

---

**Last Updated**: 2025-01-03  
**Version**: 1.0.0  
**Status**: 🟢 Production

---

Made with 🚭 by Cris & Easy Freedom Team
