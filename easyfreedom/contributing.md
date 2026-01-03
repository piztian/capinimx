# 🤝 Guía de Contribución - Easy Freedom

¡Gracias por considerar contribuir a Easy Freedom! Este documento te guiará a través del proceso.

---

## 📋 Tabla de Contenidos

- [Código de Conducta](#código-de-conducta)
- [¿Cómo Puedo Contribuir?](#cómo-puedo-contribuir)
- [Reportar Bugs](#reportar-bugs)
- [Sugerir Mejoras](#sugerir-mejoras)
- [Pull Requests](#pull-requests)
- [Guía de Estilo](#guía-de-estilo)
- [Preguntas](#preguntas)

---

## 💬 Código de Conducta

### Nuestro Compromiso

Estamos comprometidos a proporcionar un ambiente acogedor e inclusivo para todos. Esperamos que todos los contribuidores:

- 🤝 Usen lenguaje inclusivo y respetuoso
- 👂 Acepten críticas constructivas
- 🎯 Se enfoquen en lo mejor para la comunidad
- ❤️ Muestren empatía hacia otros miembros

### Comportamiento Inaceptable

**NO toleramos:**
- Acoso de cualquier tipo
- Discriminación por cualquier motivo
- Lenguaje ofensivo o insultos
- Violaciones de privacidad

### Reporte de Comportamiento

Si experimentas o presencias comportamiento inaceptable, reporta a:
📧 contacto@easyfreedom.mx

---

## 🎯 ¿Cómo Puedo Contribuir?

Hay **muchas formas** de contribuir sin escribir código:

### 1. 📚 Mejorar Documentación
```
- Corregir typos
- Aclarar explicaciones
- Agregar ejemplos
- Mejorar estructura
```

### 2. 🐛 Reportar Bugs
```
- Encontrar problemas
- Crear issues detallados
- Ayudar a reproducir bugs
```

### 3. 💡 Sugerir Mejoras
```
- Nuevas características
- Mejoras de UX
- Optimizaciones
```

### 4. 📝 Crear Contenido
```
- Nuevas lecciones
- Tareas adicionales
- Videos
- Artículos
- Testimonios
```

### 5. 🧪 Testing
```
- Probar características
- Reportar casos edge
- Verificar en diferentes browsers
```

### 6. 💻 Código
```
- Arreglar bugs
- Implementar features
- Refactorizar
- Optimizar performance
```

---

## 🐛 Reportar Bugs

### Antes de Reportar

- ✅ Busca en issues existentes
- ✅ Verifica que sea realmente un bug
- ✅ Intenta reproducir en versión latest
- ✅ Recopila información relevante

### Cómo Reportar un Bug

Abre un **issue en GitHub** con:

```markdown
## Descripción del Bug

[Descripción clara y concisa]

## Pasos para Reproducir

1. [Primer paso]
2. [Segundo paso]
3. [...]

## Comportamiento Esperado

[Qué debería pasar]

## Comportamiento Actual

[Qué está pasando en realidad]

## Capturas de Pantalla

[Si aplica]

## Información del Sistema

- OS: [ej: Windows 10]
- Browser: [ej: Chrome 120]
- Versión: [ej: 1.0.0]

## Logs o Errores

[Error de console si existe]

## Contexto Adicional

[Cualquier otra información relevante]
```

### Ejemplo de Buen Reporte

```markdown
## Bug: Dashboard no carga tareas

### Pasos para Reproducir

1. Iniciar sesión con test@easyfreedom.mx
2. Esperar a que cargue el dashboard
3. Observar que la sección "Tus Tareas de Hoy" muestra "Cargando..."

### Comportamiento Esperado

Las 9 tareas deberían aparecer en el dashboard dentro de 2 segundos

### Comportamiento Actual

Muestra "Cargando..." indefinidamente. En console aparece error:

```
TypeError: tareasDelDia is not iterable
at renderizarTareas (dashboard-easy-freedom.html:450)
```

### Información del Sistema

- OS: macOS 14
- Browser: Safari 17
- Versión: 1.0.0

### Contexto

Esto solo ocurre en Safari. En Chrome y Firefox funciona perfecto.
```

---

## 💡 Sugerir Mejoras

### Antes de Sugerir

- ✅ Verifica si ya existe la feature
- ✅ Considera si es útil para otros
- ✅ Piensa en la implementación

### Cómo Sugerir

Abre un **issue con etiqueta "enhancement"**:

```markdown
## Feature: [Título de la mejora]

### Descripción

[Descripción clara de la feature]

### Motivación

[Por qué sería útil]
[Problemas que resolvería]

### Solución Propuesta

[Cómo implementarla]
[Mockups si aplica]

### Alternativas Consideradas

[Otras formas de resolver]

### Contexto Adicional

[Información relevante]
```

### Ejemplo de Buena Sugerencia

```markdown
## Feature: Recordatorios por Email

### Descripción

Enviar recordatorios diarios a los usuarios para completar tareas si no las han hecho.

### Motivación

Muchos usuarios olvidan hacer las tareas. Los recordatorios aumentarían el engagement.

### Solución Propuesta

- Email diario a las 10am (hora del usuario)
- Incluir tareas pendientes
- Link directo al dashboard
- Opción de desuscribirse

### Alternativas Consideradas

- Notificaciones push
- SMS (costo)
- WhatsApp (requiere API)

### Impacto Estimado

- +30% engagement diario (basado en benchmarks de apps similares)
```

---

## 🔀 Pull Requests

### Antes de Hacer un PR

1. **Fork** el repositorio
2. **Crea rama** desde `main`
3. **Lee la guía de estilo** completa
4. **Haz commits** con mensajes claros
5. **Prueba** tu código
6. **Documenta** cambios

### Nombre de Ramas

Usa formato descriptivo:

```
feature/nueva-leccion
feature/sistema-notificaciones
bugfix/dashboard-no-carga-tareas
docs/mejorar-api-docs
style/refactorizar-css
test/agregar-unit-tests
chore/actualizar-dependencias
```

### Proceso de PR

```bash
# 1. Fork el repo
# (En GitHub: Click "Fork")

# 2. Clona tu fork
git clone https://github.com/tu-usuario/easy-freedom.git
cd easy-freedom

# 3. Crea rama
git checkout -b feature/tu-feature

# 4. Haz cambios
# (Edita archivos)

# 5. Commit con mensaje claro
git commit -m "feat: agregar nueva lección sobre el pequeño monstruo"

# 6. Push a tu fork
git push origin feature/tu-feature

# 7. Abre PR en GitHub
# (Click "New Pull Request")
```

### Template de PR

```markdown
## Descripción

[Descripción clara de qué hace este PR]

## Tipo de Cambio

- [ ] Bug fix (arregla un problema)
- [ ] Nueva feature (agrega funcionalidad)
- [ ] Breaking change (cambia API)
- [ ] Documentación

## Relacionado con Issue

Closes #[número de issue]

## Cómo probar esto

[Pasos para probar los cambios]

1. [Paso 1]
2. [Paso 2]
3. [...]

## Checklist

- [ ] Mi código sigue la guía de estilo
- [ ] He actualizado la documentación
- [ ] He agregado tests si aplica
- [ ] Mis cambios no generan nuevos warnings
- [ ] He probado en múltiples browsers/dispositivos

## Screenshots (si aplica)

[Antes y después si hay cambios visuales]

## Notas adicionales

[Cualquier información relevante para el revisor]
```

### Ejemplo de Buen PR

```markdown
## Descripción

Agrega nueva lección "Lección 1.2: La Planta Carnívora" que explica 
la metáfora de cómo funciona la trampa de la nicotina.

## Tipo de Cambio

- [x] Nueva feature
- [x] Documentación

## Relacionado con Issue

Closes #45

## Cómo probar esto

1. Inicia sesión en test@easyfreedom.mx
2. Ve a la sección "Lecciones"
3. Selecciona Semana 1
4. Haz click en "Lección 1.2: La Planta Carnívora"
5. Verifica que la metáfora se entienda claramente

## Checklist

- [x] Mi código sigue la guía de estilo
- [x] He actualizado lecciones.md
- [x] He agregado el quiz
- [x] El video está embebido correctamente
- [x] Probé en Chrome y Firefox

## Screenshots

[Imagen mostrando la lección nueva]
```

### Proceso de Revisión

1. **Al menos 1 revisor** verifica cambios
2. **Conversación** sobre mejoras si aplica
3. **Approval** cuando está ready
4. **Merge** a main

---

## 📝 Guía de Estilo

### JavaScript

```javascript
// ✅ BUENO
const obtenerUsuario = (email) => {
  if (!email) {
    console.error('Email es requerido');
    return null;
  }
  
  // Lógica
  return usuario;
};

// ❌ MALO
function obtenerUsuario(email){
if(!email){console.log("error");return null;}
// ...
}
```

**Reglas:**
- Usa `const` por defecto, `let` si necesitas reasignar
- Usa arrow functions `() => {}`
- Usa nombres descriptivos: `obtenerUsuario` no `gU`
- Usa comentarios para lógica compleja
- Máximo 80 caracteres por línea
- 2 espacios de indentación

### HTML

```html
<!-- ✅ BUENO -->
<div class="task-card" id="task-001">
  <div class="task-emoji">💧</div>
  <h3 class="task-name">Vaso de agua</h3>
  <p class="task-points">+2 puntos</p>
</div>

<!-- ❌ MALO -->
<div>
  <span>💧</span>
  <span>Vaso de agua</span>
  <span>2 puntos</span>
</div>
```

**Reglas:**
- Usa clases BEM: `.bloque__elemento--modificador`
- Usa IDs solo si necesitas JavaScript
- Datos semánticos con atributos: `data-*`
- Indenta correctamente

### CSS

```css
/* ✅ BUENO */
.stat-card {
  background: white;
  padding: 20px;
  border-radius: 15px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.stat-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

/* ❌ MALO */
.stat-card { background:white; padding:20px; }
.stat-card:hover { transform: translateY(-5px); }
```

**Reglas:**
- Mobile-first (media queries para desktop)
- Variables CSS para colores
- Nombres descriptivos
- Sin IDs para styles
- BEM para clases

### Google Apps Script

```javascript
// ✅ BUENO
function obtenerUsuario(email) {
  try {
    const sheet = getSheetByName(SHEETS.USUARIOS);
    if (!sheet) {
      Logger.log('❌ Pestaña no encontrada');
      return null;
    }
    
    const data = sheet.getDataRange().getValues();
    
    for (let i = 1; i < data.length; i++) {
      if (data[i][0] === email) {
        return {
          email: data[i][0],
          nombre: data[i][2],
          // ...
        };
      }
    }
    
    return null;
  } catch (error) {
    Logger.log('❌ Error: ' + error);
    return null;
  }
}

// ❌ MALO
function getUser(e){
var s=SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Users");
for(var i=1;i<s.getLastRow();i++){
if(s.getRange(i,1).getValue()==e)return true;
}
}
```

**Reglas:**
- Usa nombres descriptivos en español o inglés (consistente)
- Try-catch para errores
- Logger.log() con emojis para identificar
- Const/Let siempre
- Comenta funciones complejas

### Commit Messages

```
# ✅ BUENO
feat: agregar nueva lección sobre el pequeño monstruo
fix: corregir bug donde dashboard no carga tareas
docs: mejorar documentación de API
style: refactorizar CSS del dashboard
test: agregar tests para función obtenerUsuario
chore: actualizar versión a 1.0.1

# ❌ MALO
fixed stuff
updated code
changes
asdf123
```

**Formato:**
```
<tipo>: <descripción>

<cuerpo opcional>

<footer opcional>
```

**Tipos:**
- `feat`: Nueva feature
- `fix`: Bug fix
- `docs`: Documentación
- `style`: Formatting, missing semicolons, etc
- `refactor`: Cambio de código sin cambiar funcionalidad
- `test`: Tests
- `chore`: Tasks, updates, etc

---

## 📊 Tipos de Contribución Buscados

### 🎯 Alto Impacto

**Lecciones nuevas** (Impacto: MUY ALTO)
```
- Semanas 3-8 del método
- Quiz interactivos
- Videos embebidos
- Flashcards
- Ejercicios prácticos
```

**Mejoras de UX** (Impacto: ALTO)
```
- Diseños mejorados
- Mobile optimization
- Accesibilidad
- Performance
```

**Features clave** (Impacto: ALTO)
```
- Sistema de notificaciones
- Integración WhatsApp
- App móvil
- Leaderboards
```

### 🔧 Mantenimiento

**Bugs** (Impacto: MEDIO)
```
- Fixes
- Compatibilidad
- Errores de console
```

**Documentación** (Impacto: MEDIO)
```
- Guías de instalación
- API docs
- Ejemplos
```

**Tests** (Impacto: MEDIO)
```
- Unit tests
- Integration tests
- E2E tests
```

---

## 🚀 Flujo Típico de Contribución

### Para Principiantes

```
1. Busca un issue con "good first issue"
2. Comenta que quieres trabajar en él
3. Haz fork y crea rama
4. Haz cambios pequeños
5. Abre PR
6. Colabora con revisores
7. 🎉 Merge!
```

### Para Contribuidores Experimentados

```
1. Propón feature en issue
2. Espera feedback
3. Implementa con tests
4. Haz PR detallado
5. Colabora en review
6. 🎉 Merge!
```

---

## 📚 Recursos para Contribuidores

### Documentación

- [README.md](../README.md) - Visión general
- [API.md](API.md) - Documentación de API
- [Estructura del Proyecto](../README.md#-estructura-del-proyecto)

### Herramientas Recomendadas

```bash
# Editor: VS Code
# Extensiones: Prettier, ESLint, Google App Scripts

# Testing: Jest (cuando agregues tests)
npm install --save-dev jest

# Version Control: Git
git --version
```

### Aprender el Método

- Lee [TRANSCRIPCION-ALLEN-CARR-NOTAS-LECCIONES.txt](../TRANSCRIPCION-ALLEN-CARR-NOTAS-LECCIONES.txt)
- Ve videos del método
- Entiende los 12 conceptos clave

---

## ❓ Preguntas

### Si tienes preguntas:

1. **Sobre un issue**: Comenta en el issue
2. **Sobre contribuir**: Abre una discussion
3. **General**: Email a contacto@easyfreedom.mx
4. **Urgente**: Telegram [@easyfreedom_mx](https://t.me/easyfreedom_mx)

---

## 🎉 Recognition

Todos los contribuidores son:
- Mencionados en README.md
- Agregados a Contributors
- Celebrados en changelog

```markdown
## Contributors ✨

Thanks to these wonderful people:

- @usuario (5 contributions)
- @otro-usuario (3 contributions)
```

---

## 📋 Checklist Final

Antes de hacer tu primer PR:

- [ ] Leí el README.md
- [ ] Leí esta guía de contribución
- [ ] Busqué issues relacionados
- [ ] Creé un fork
- [ ] Creé una rama descriptiva
- [ ] Hice commits con buenos mensajes
- [ ] Probé mis cambios
- [ ] Actualicé documentación
- [ ] Abrí un PR claro

---

## 🙏 Gracias!

¡Gracias por considerar contribuir a Easy Freedom! Estamos emocionados de trabajar contigo.

Si tienes ideas sobre cómo mejorar este documento, **¡hazlo!** 🚀

---

**Last Updated**: 2025-01-03  
**Version**: 1.0.0
