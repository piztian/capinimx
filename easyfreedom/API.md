# 📡 Documentación de API - Easy Freedom

Documentación completa de los endpoints disponibles en la API de Easy Freedom.

---

## 📋 Tabla de Contenidos

- [Introducción](#introducción)
- [Autenticación](#autenticación)
- [Endpoints GET](#endpoints-get)
- [Endpoints POST](#endpoints-post)
- [Modelos de Datos](#modelos-de-datos)
- [Códigos de Error](#códigos-de-error)
- [Ejemplos](#ejemplos)
- [Rate Limiting](#rate-limiting)
- [Versioning](#versioning)

---

## 🚀 Introducción

### Base URL

```
https://script.google.com/macros/s/AKfycbwdRmvsPaIiE8gxpl2d1iNzzYL0vW64ujyESdMaH2u5XronAT1oTGibO2ZghbQpo1Yn/exec
```

### Formato de Respuesta

Todas las respuestas están en **JSON**:

```json
{
  "status": "éxito|error",
  "message": "Descripción",
  "data": {}
}
```

### Headers Requeridos

```
Content-Type: application/json
Accept: application/json
```

---

## 🔐 Autenticación

### Tipos de Autenticación Soportados

#### 1. Email (Recomendado)

Pasa el email como parámetro en GET o en el body en POST:

```javascript
// GET
/exec?action=dashboard&email=usuario@example.com

// POST
{
  "action": "registrar",
  "email": "usuario@example.com",
  "nombre": "Juan"
}
```

#### 2. Token (Futuro)

```javascript
// Header
Authorization: Bearer TOKEN_AQUI
```

### Ejemplo de Login

```javascript
const email = "usuario@example.com";
const dashboardUrl = `${API_BASE}?action=dashboard&email=${email}`;

fetch(dashboardUrl)
  .then(res => res.json())
  .then(data => {
    if (data.status === 'éxito') {
      localStorage.setItem('usuario', JSON.stringify(data.usuario));
    }
  });
```

---

## 📥 Endpoints GET

### 1. Obtener Dashboard

Obtiene todos los datos del dashboard de un usuario.

**Request:**
```
GET /exec?action=dashboard&email=usuario@example.com
```

**Parameters:**
| Parámetro | Tipo | Requerido | Descripción |
|-----------|------|-----------|-------------|
| action | string | ✅ | `dashboard` |
| email | string | ✅ | Email del usuario |

**Response (Success):**
```json
{
  "status": "éxito",
  "usuario": {
    "email": "usuario@example.com",
    "nombre": "Juan",
    "idUsuario": "USER-juan-1234567890",
    "diasSinFumar": 15,
    "dineroAhorrado": 750.00,
    "racha": 15,
    "estado": "Activo",
    "cigarrosPorDia": 20,
    "precioCigarro": 2.50,
    "motivacion": 8,
    "ultimoAcceso": "2025-01-03"
  },
  "tareasDia": [
    {
      "id": "TAREA-001",
      "nombre": "Vaso de agua",
      "emoji": "💧",
      "puntos": 2,
      "completada": false
    },
    // ... más tareas
  ],
  "lecciones": {
    "1": [
      {
        "id": "1.1",
        "titulo": "¿Por qué fumas?",
        "semana": 1,
        "puntos": 10
      }
    ]
  },
  "badgesDesbloqueados": ["BADGE-001", "BADGE-003"]
}
```

**Response (Error):**
```json
{
  "status": "error",
  "message": "Usuario no encontrado"
}
```

---

### 2. Obtener Usuario

Obtiene datos específicos de un usuario.

**Request:**
```
GET /exec?action=usuario&email=usuario@example.com
```

**Parameters:**
| Parámetro | Tipo | Requerido | Descripción |
|-----------|------|-----------|-------------|
| action | string | ✅ | `usuario` |
| email | string | ✅ | Email del usuario |

**Response:**
```json
{
  "status": "éxito",
  "usuario": {
    "email": "usuario@example.com",
    "idUsuario": "USER-juan-1234567890",
    "nombre": "Juan",
    "telefono": "+34612345678",
    "fechaRegistro": "2025-01-01",
    "cigarrosPorDia": 20,
    "precioCigarro": 2.50,
    "dineroAhorrado": 750.00,
    "diasSinFumar": 15,
    "estado": "Activo",
    "motivacion": 8,
    "ultimoAcceso": "2025-01-03",
    "seminario": "No",
    "fechaActualizacion": "2025-01-03"
  }
}
```

---

### 3. Obtener Tareas del Día

Obtiene las tareas activas del día.

**Request:**
```
GET /exec?action=tareas&email=usuario@example.com
```

**Parameters:**
| Parámetro | Tipo | Requerido | Descripción |
|-----------|------|-----------|-------------|
| action | string | ✅ | `tareas` |
| email | string | ❌ | Email (si quieres ver progreso del usuario) |

**Response:**
```json
{
  "status": "éxito",
  "tareas": [
    {
      "id": "TAREA-001",
      "nombre": "Vaso de agua",
      "descripcion": "Bebe un vaso de agua para mantenerte hidratado",
      "categoria": "Salud",
      "puntos": 2,
      "emoji": "💧",
      "completada": false,
      "orden": 1,
      "instrucciones": "Rellena un vaso de agua y bébetelo lentamente"
    },
    // ... más tareas (máximo 9)
  ]
}
```

---

### 4. Obtener Lecciones

Obtiene todas las lecciones organizadas por semana.

**Request:**
```
GET /exec?action=lecciones
```

**Parameters:**
| Parámetro | Tipo | Requerido | Descripción |
|-----------|------|-----------|-------------|
| action | string | ✅ | `lecciones` |

**Response:**
```json
{
  "status": "éxito",
  "lecciones": {
    "1": [
      {
        "id": "1.1",
        "titulo": "¿Por qué fumas?",
        "semana": 1,
        "modulo": "Entender la Trampa",
        "duracion": 5,
        "videoUrl": "https://youtu.be/...",
        "contenido": "<h2>¿Por qué fumas?</h2><p>...",
        "quiz": "{\"pregunta\": \"...\"}",
        "badge": "BADGE-001",
        "puntos": 10,
        "orden": 1
      },
      {
        "id": "1.2",
        "titulo": "La Planta Carnívora",
        "semana": 1,
        // ...
      }
    ],
    "2": [
      // Lecciones semana 2
    ]
  }
}
```

---

### 5. Obtener Badges del Usuario

Obtiene los badges desbloqueados por un usuario.

**Request:**
```
GET /exec?action=badges&email=usuario@example.com
```

**Parameters:**
| Parámetro | Tipo | Requerido | Descripción |
|-----------|------|-----------|-------------|
| action | string | ✅ | `badges` |
| email | string | ✅ | Email del usuario |

**Response:**
```json
{
  "status": "éxito",
  "badges": [
    {
      "id": "BADGE-001",
      "nombre": "Primer Día Libre",
      "emoji": "🌟",
      "descripcion": "Completaste tu primer día sin fumar",
      "puntos": 25
    },
    {
      "id": "BADGE-007",
      "nombre": "Una Semana de Libertad",
      "emoji": "🔥",
      "descripcion": "7 días sin fumar",
      "puntos": 100
    }
  ]
}
```

---

## 📤 Endpoints POST

### 1. Registrar Usuario

Crea un nuevo usuario en el sistema.

**Request:**
```
POST /exec

{
  "action": "registrar",
  "email": "nuevo@example.com",
  "nombre": "María García",
  "cigarrosPorDia": 20,
  "precioCigarro": 2.50,
  "telefono": "+34612345678"
}
```

**Body Parameters:**
| Parámetro | Tipo | Requerido | Descripción |
|-----------|------|-----------|-------------|
| action | string | ✅ | `registrar` |
| email | string | ✅ | Email único |
| nombre | string | ✅ | Nombre completo |
| cigarrosPorDia | number | ✅ | Cantidad que fumaba |
| precioCigarro | number | ✅ | Precio unitario |
| telefono | string | ❌ | Teléfono de contacto |

**Response (Success):**
```json
{
  "status": "éxito",
  "message": "Usuario registrado correctamente",
  "idUsuario": "USER-maria-1234567890",
  "usuario": {
    "email": "nuevo@example.com",
    "nombre": "María García",
    "idUsuario": "USER-maria-1234567890",
    "estado": "Activo",
    "fechaRegistro": "2025-01-03"
  }
}
```

**Response (Error):**
```json
{
  "status": "error",
  "message": "Email ya registrado"
}
```

---

### 2. Guardar Tarea Completada

Marca una tarea como completada.

**Request:**
```
POST /exec

{
  "action": "guardar_tarea",
  "email": "usuario@example.com",
  "idTarea": "TAREA-001"
}
```

**Body Parameters:**
| Parámetro | Tipo | Requerido | Descripción |
|-----------|------|-----------|-------------|
| action | string | ✅ | `guardar_tarea` |
| email | string | ✅ | Email del usuario |
| idTarea | string | ✅ | ID de la tarea |

**Response:**
```json
{
  "status": "éxito",
  "message": "Tarea completada, +2 puntos",
  "puntos": 2,
  "progreso": {
    "completadas": 3,
    "total": 9,
    "porcentaje": 33.33
  }
}
```

---

### 3. Guardar Lección Completada

Marca una lección como completada.

**Request:**
```
POST /exec

{
  "action": "guardar_leccion",
  "email": "usuario@example.com",
  "idLeccion": "1.1",
  "puntosQuiz": 8
}
```

**Body Parameters:**
| Parámetro | Tipo | Requerido | Descripción |
|-----------|------|-----------|-------------|
| action | string | ✅ | `guardar_leccion` |
| email | string | ✅ | Email del usuario |
| idLeccion | string | ✅ | ID de la lección (ej: "1.1") |
| puntosQuiz | number | ❌ | Puntos obtenidos en quiz |

**Response:**
```json
{
  "status": "éxito",
  "message": "Lección guardada",
  "puntos": 10,
  "badgeDesbloqueado": {
    "id": "BADGE-001",
    "nombre": "Primer Día Libre"
  }
}
```

---

## 📊 Modelos de Datos

### Usuario

```javascript
{
  email: string,           // Email único
  idUsuario: string,       // ID generado automáticamente
  nombre: string,          // Nombre completo
  telefono: string,        // Número de contacto (opcional)
  fechaRegistro: date,     // ISO 8601
  cigarrosPorDia: number,  // 1-100
  precioCigarro: number,   // Precio unitario
  dineroAhorrado: number,  // Calculado
  diasSinFumar: number,    // Desde fechaRegistro
  estado: string,          // "Activo", "Pausa", "Completado", "Recaído"
  motivacion: number,      // 1-10 escala
  ultimoAcceso: date,      // ISO 8601
  seminario: string,       // "Sí", "No", "Planeado"
  fechaActualizacion: date // ISO 8601
}
```

### Tarea

```javascript
{
  id: string,              // ID único (ej: "TAREA-001")
  nombre: string,          // Nombre de la tarea
  descripcion: string,     // Descripción corta
  categoria: string,       // "Salud", "Mental", "Reflexión"
  puntos: number,          // Puntos al completar
  emoji: string,           // Emoji representativo
  completada: boolean,     // True si el usuario la completó hoy
  orden: number,           // Orden de aparición
  instrucciones: string    // Cómo completar
}
```

### Lección

```javascript
{
  id: string,              // ID único (ej: "1.1", "2.3")
  titulo: string,          // Título de lección
  semana: number,          // 1-8
  modulo: string,          // Módulo de la semana
  duracion: number,        // Minutos
  videoUrl: string,        // URL del video
  contenido: string,       // HTML del contenido
  quiz: string,            // JSON con preguntas
  badge: string,           // ID del badge
  puntos: number,          // Puntos al completar
  orden: number            // Orden en la semana
}
```

### Badge

```javascript
{
  id: string,              // ID único
  nombre: string,          // Nombre del badge
  emoji: string,           // Emoji representativo
  descripcion: string,     // Descripción
  puntos: number,          // Puntos desbloqueados
  condicion: string        // Condición para desbloquear
}
```

### Respuesta API

```javascript
{
  status: string,          // "éxito" o "error"
  message: string,         // Mensaje descriptivo
  data: object             // Datos de la respuesta
}
```

---

## ❌ Códigos de Error

### Errores 4xx (Cliente)

| Código | Mensaje | Causa |
|--------|---------|-------|
| 400 | Bad Request | Parámetros inválidos |
| 401 | Unauthorized | No autenticado |
| 403 | Forbidden | Sin permisos |
| 404 | Not Found | Recurso no existe |
| 409 | Conflict | Email ya registrado |

### Errores 5xx (Servidor)

| Código | Mensaje | Causa |
|--------|---------|-------|
| 500 | Internal Server Error | Error en servidor |
| 503 | Service Unavailable | Servidor no disponible |

### Ejemplo de Error

```json
{
  "status": "error",
  "message": "Usuario no encontrado",
  "code": 404,
  "details": {
    "email": "noexiste@example.com",
    "searched_in": "Usuarios_EasyFreedom"
  }
}
```

---

## 💡 Ejemplos

### Ejemplo 1: Login y Obtener Dashboard

```javascript
async function loginYCargarDashboard() {
  const email = "usuario@example.com";
  
  try {
    // 1. Obtener dashboard
    const response = await fetch(
      `https://script.google.com/macros/s/.../exec?action=dashboard&email=${email}`
    );
    
    const data = await response.json();
    
    if (data.status === 'éxito') {
      // 2. Guardar sesión
      localStorage.setItem('usuario', JSON.stringify(data.usuario));
      
      // 3. Mostrar dashboard
      mostrarEstadisticas(data.usuario);
      renderizarTareas(data.tareasDia);
      mostrarLeccion(data.lecciones);
      
      return data;
    } else {
      console.error('Error:', data.message);
    }
  } catch (error) {
    console.error('Error de conexión:', error);
  }
}
```

### Ejemplo 2: Registrar Nuevo Usuario

```javascript
async function registrarUsuario(formulario) {
  const data = {
    action: "registrar",
    email: formulario.email,
    nombre: formulario.nombre,
    cigarrosPorDia: parseInt(formulario.cigarros),
    precioCigarro: parseFloat(formulario.precio),
    telefono: formulario.telefono
  };
  
  try {
    const response = await fetch(API_BASE, {
      method: 'POST',
      body: JSON.stringify(data)
    });
    
    const resultado = await response.json();
    
    if (resultado.status === 'éxito') {
      alert('✅ Registro exitoso!');
      // Redirigir a dashboard
      window.location.href = `/dashboard?usuario=${resultado.idUsuario}`;
    } else {
      alert('❌ ' + resultado.message);
    }
  } catch (error) {
    alert('❌ Error: ' + error.message);
  }
}
```

### Ejemplo 3: Completar Tarea

```javascript
async function completarTarea(idTarea) {
  const email = JSON.parse(localStorage.getItem('usuario')).email;
  
  const data = {
    action: "guardar_tarea",
    email: email,
    idTarea: idTarea
  };
  
  try {
    const response = await fetch(API_BASE, {
      method: 'POST',
      body: JSON.stringify(data)
    });
    
    const resultado = await response.json();
    
    if (resultado.status === 'éxito') {
      // Mostrar notificación
      mostrarNotificacion(
        `✓ ${resultado.message}`,
        'éxito'
      );
      
      // Actualizar progreso
      actualizarProgreso(resultado.progreso);
      
      // Recargar tareas
      cargarTareasDia();
    }
  } catch (error) {
    console.error('Error:', error);
  }
}
```

### Ejemplo 4: Completar Lección

```javascript
async function completarLeccion(idLeccion, puntosQuiz) {
  const email = JSON.parse(localStorage.getItem('usuario')).email;
  
  const data = {
    action: "guardar_leccion",
    email: email,
    idLeccion: idLeccion,
    puntosQuiz: puntosQuiz
  };
  
  try {
    const response = await fetch(API_BASE, {
      method: 'POST',
      body: JSON.stringify(data)
    });
    
    const resultado = await response.json();
    
    if (resultado.status === 'éxito') {
      // Mostrar puntos obtenidos
      mostrarNotificacion(
        `🎉 +${resultado.puntos} puntos`,
        'éxito'
      );
      
      // Si desbloqueó badge
      if (resultado.badgeDesbloqueado) {
        mostrarBadgeDesbloqueado(resultado.badgeDesbloqueado);
      }
      
      cerrarModalLeccion();
      cargarDashboard();
    }
  } catch (error) {
    console.error('Error:', error);
  }
}
```

---

## 🚦 Rate Limiting

### Límites Actuales

```
Requests por minuto: 30
Requests por hora: 1,000
Requests por día: 10,000
```

### Headers de Rate Limit

Las respuestas incluyen:

```
X-RateLimit-Limit: 30
X-RateLimit-Remaining: 29
X-RateLimit-Reset: 1609459200
```

### Qué Hacer si Se Alcanza el Límite

```json
{
  "status": "error",
  "code": 429,
  "message": "Too Many Requests",
  "retry_after": 60
}
```

Espera `retry_after` segundos antes de reintentar.

---

## 📦 Versioning

### Versión Actual

```
API Version: 1.0.0
Status: Production
```

### Historial de Versiones

| Versión | Fecha | Cambios |
|---------|-------|---------|
| 1.0.0 | 2025-01-03 | Release inicial |
| 0.9.0 | 2024-12-15 | Beta |

### Cómo Especificar Versión

```
GET /exec?v=1.0.0&action=dashboard
```

---

## 🧪 Playground / Testing

### Usar cURL

```bash
# GET
curl "https://script.google.com/macros/s/.../exec?action=usuario&email=test@example.com"

# POST
curl -X POST "https://script.google.com/macros/s/.../exec" \
  -H "Content-Type: application/json" \
  -d '{
    "action": "registrar",
    "email": "nuevo@example.com",
    "nombre": "Juan",
    "cigarrosPorDia": 20,
    "precioCigarro": 2.50
  }'
```

### Usar JavaScript

```javascript
const API_BASE = 'https://script.google.com/macros/s/.../exec';

// GET
fetch(`${API_BASE}?action=usuario&email=test@example.com`)
  .then(r => r.json())
  .then(d => console.log(d));

// POST
fetch(API_BASE, {
  method: 'POST',
  body: JSON.stringify({
    action: 'registrar',
    email: 'nuevo@example.com',
    nombre: 'Juan'
  })
})
  .then(r => r.json())
  .then(d => console.log(d));
```

### Usar Postman

1. Crear Nueva Request
2. URL: `https://script.google.com/macros/s/.../exec`
3. Método: GET o POST
4. Params / Body: Según endpoint
5. Send!

---

## 📞 Soporte

¿Preguntas sobre la API?

- 📧 Email: contacto@easyfreedom.mx
- 📱 Telegram: [@easyfreedom_mx](https://t.me/easyfreedom_mx)
- 📝 Issues: [GitHub Issues](https://github.com/tu-usuario/easy-freedom/issues)

---

**Last Updated**: 2025-01-03  
**Version**: 1.0.0  
**Status**: 🟢 Production
