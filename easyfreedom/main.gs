// ============================================
// EASY FREEDOM - GOOGLE APPS SCRIPT v2
// ACTUALIZADO CON SHEET ID Y URLs DE BITRIX24
// ============================================

// 🔑 CONFIGURACIÓN GLOBAL - ACTUALIZADO
const SHEET_ID = '1OBpmqK7DSvJBh5tZjp4bpqa9ziD3joXzp2uGIv_ty_g';
const TIMEZONE = 'America/Mexico_City';
const BITRIX24_BASE = 'https://capinimx.bitrix24.site/easyfreedom';
const DASHBOARD_URL = BITRIX24_BASE + '/tabla_tareas/';
const LECCIONES_URL = BITRIX24_BASE + '/lecciones_EF/';

// 📋 NOMBRES DE TABLAS
const SHEETS = {
  USUARIOS: 'Usuarios_EasyFreedom',
  LECCIONES: 'Lecciones_EasyFreedom',
  TAREAS: 'Tareas_Diarias',
  PROGRESO: 'Progreso_Usuario',
  BADGES: 'Badges_EasyFreedom',
  CONFIG: 'Configuracion_App',
  LOGS: 'Logs_Actividad'
};

// ============================================
// 🔧 FUNCIONES AUXILIARES BÁSICAS
// ============================================

/**
 * Obtener Google Sheet
 */
function getSheet() {
  try {
    return SpreadsheetApp.openById(SHEET_ID);
  } catch (error) {
    Logger.log('❌ Error abriendo Sheet: ' + error);
    throw error;
  }
}

/**
 * Obtener una pestaña específica
 */
function getSheetByName(sheetName) {
  const ss = getSheet();
  const sheet = ss.getSheetByName(sheetName);
  
  if (!sheet) {
    Logger.log('❌ Pestaña no encontrada: ' + sheetName);
    throw new Error('Pestaña no encontrada: ' + sheetName);
  }
  
  return sheet;
}

/**
 * Obtener todos los datos de una pestaña
 */
function getAllData(sheetName) {
  const sheet = getSheetByName(sheetName);
  const data = sheet.getDataRange().getValues();
  
  if (data.length < 2) return [];
  
  // Convertir a array de objetos
  const headers = data[0];
  const rows = data.slice(1);
  
  return rows.map(row => {
    const obj = {};
    headers.forEach((header, index) => {
      obj[header] = row[index];
    });
    return obj;
  });
}

/**
 * Log de actividad (auditoría)
 */
function logActividad(email, accion, detalles, status = 'éxito') {
  try {
    const sheet = getSheetByName(SHEETS.LOGS);
    const timestamp = new Date().toISOString();
    const ip = 'web';
    
    sheet.appendRow([
      timestamp,
      email,
      accion,
      detalles,
      ip,
      status
    ]);
    
    Logger.log('📝 Log guardado: ' + accion);
  } catch (error) {
    Logger.log('⚠️ Error al loguear: ' + error);
  }
}

/**
 * Obtener configuración de la app
 */
function getConfig(key) {
  const sheet = getSheetByName(SHEETS.CONFIG);
  const data = sheet.getDataRange().getValues();
  
  for (let i = 1; i < data.length; i++) {
    if (data[i][0] === key) {
      return data[i][1];
    }
  }
  
  return null;
}

// ============================================
// 👤 FUNCIONES DE USUARIOS
// ============================================

/**
 * Registrar nuevo usuario
 */
function registrarUsuario(email, nombre, cigarrosPorDia, precioCigarro, telefono = '') {
  try {
    // Validar que no exista
    if (usuarioExiste(email)) {
      return { status: 'error', message: 'Email ya registrado' };
    }
    
    // Generar ID único
    const idUsuario = 'USER-' + email.split('@')[0] + '-' + Date.now();
    
    const sheet = getSheetByName(SHEETS.USUARIOS);
    const fechaRegistro = new Date().toISOString().split('T')[0];
    
    sheet.appendRow([
      email,                              // A: Email
      idUsuario,                          // B: ID_Usuario
      nombre,                             // C: Nombre
      telefono,                           // D: Teléfono
      fechaRegistro,                      // E: Fecha_Registro
      cigarrosPorDia,                     // F: Cigarros_Por_Dia
      precioCigarro,                      // G: Precio_Cigarro_Local
      0,                                  // H: Dinero_Ahorrado (fórmula)
      0,                                  // I: Días_Sin_Fumar (fórmula)
      'Activo',                           // J: Estado
      5,                                  // K: Motivación_Inicial
      fechaRegistro,                      // L: Fecha_Último_Acceso
      'No',                               // M: Seminario_Completado
      '',                                 // N: Contraseña_Hash
      fechaRegistro                       // O: Fecha_Actualización
    ]);
    
    // Crear registro en Progreso_Usuario
    crearProgresoUsuario(email);
    
    // Log
    logActividad(email, 'REGISTRO', 'Usuario registrado correctamente', 'éxito');
    
    return { 
      status: 'éxito',
      message: 'Usuario registrado correctamente',
      idUsuario: idUsuario,
      dashboardUrl: DASHBOARD_URL + '?usuario=' + email,
      leccionesUrl: LECCIONES_URL + '?usuario=' + email
    };
    
  } catch (error) {
    Logger.log('❌ Error registrando usuario: ' + error);
    logActividad(email, 'REGISTRO', error.toString(), 'error');
    return { status: 'error', message: error.toString() };
  }
}

/**
 * Verificar si usuario existe
 */
function usuarioExiste(email) {
  const sheet = getSheetByName(SHEETS.USUARIOS);
  const data = sheet.getDataRange().getValues();
  
  for (let i = 1; i < data.length; i++) {
    if (data[i][0] === email) {
      return true;
    }
  }
  
  return false;
}

/**
 * Obtener datos de usuario por email
 */
function obtenerUsuario(email) {
  const sheet = getSheetByName(SHEETS.USUARIOS);
  const data = sheet.getDataRange().getValues();
  
  for (let i = 1; i < data.length; i++) {
    if (data[i][0] === email) {
      return {
        email: data[i][0],
        idUsuario: data[i][1],
        nombre: data[i][2],
        telefono: data[i][3],
        fechaRegistro: data[i][4],
        cigarrosPorDia: data[i][5],
        precioCigarro: data[i][6],
        dineroAhorrado: data[i][7],
        diasSinFumar: data[i][8],
        estado: data[i][9],
        motivacion: data[i][10],
        ultimoAcceso: data[i][11],
        seminario: data[i][12]
      };
    }
  }
  
  return null;
}

/**
 * Actualizar último acceso de usuario
 */
function actualizarUltimoAcceso(email) {
  const sheet = getSheetByName(SHEETS.USUARIOS);
  const data = sheet.getDataRange().getValues();
  
  for (let i = 1; i < data.length; i++) {
    if (data[i][0] === email) {
      const ahora = new Date().toISOString().split('T')[0];
      sheet.getRange(i + 1, 12).setValue(ahora); // Columna L
      break;
    }
  }
}

// ============================================
// 📚 FUNCIONES DE LECCIONES
// ============================================

/**
 * Obtener todas las lecciones
 */
function obtenerLecciones() {
  const data = getAllData(SHEETS.LECCIONES);
  
  // Agrupar por semana
  const lecciones = {};
  
  data.forEach(leccion => {
    const semana = leccion['Semana'];
    
    if (!lecciones[semana]) {
      lecciones[semana] = [];
    }
    
    lecciones[semana].push({
      id: leccion['ID_Leccion'],
      semana: semana,
      modulo: leccion['Modulo'],
      titulo: leccion['Título_Leccion'],
      duracion: leccion['Duración_Minutos'],
      urlVideo: leccion['URL_Video'],
      contenido: leccion['Contenido_HTML'],
      quiz: leccion['Quiz_JSON'],
      badge: leccion['Badge_Desbloqueado'],
      puntos: leccion['Puntos_Posibles'],
      orden: leccion['Orden_Semana']
    });
  });
  
  return lecciones;
}

/**
 * Obtener lección específica por ID
 */
function obtenerLeccion(idLeccion) {
  const data = getAllData(SHEETS.LECCIONES);
  
  const leccion = data.find(l => l['ID_Leccion'] === idLeccion);
  
  if (!leccion) return null;
  
  return {
    id: leccion['ID_Leccion'],
    semana: leccion['Semana'],
    modulo: leccion['Modulo'],
    titulo: leccion['Título_Leccion'],
    duracion: leccion['Duración_Minutos'],
    urlVideo: leccion['URL_Video'],
    contenido: leccion['Contenido_HTML'],
    quiz: JSON.parse(leccion['Quiz_JSON'] || '{}'),
    badge: leccion['Badge_Desbloqueado'],
    puntos: leccion['Puntos_Posibles']
  };
}

/**
 * Guardar progreso de lección
 */
function guardarProgresoLeccion(email, idLeccion, puntosQuiz) {
  try {
    const sheet = getSheetByName(SHEETS.PROGRESO);
    const data = sheet.getDataRange().getValues();
    
    const fechaHoy = new Date().toISOString().split('T')[0];
    let filaEncontrada = false;
    
    // Buscar si ya existe entrada para hoy
    for (let i = 1; i < data.length; i++) {
      if (data[i][0] === email && data[i][1] === fechaHoy) {
        // Actualizar
        sheet.getRange(i + 1, 3).setValue(idLeccion); // C: ID_Leccion
        sheet.getRange(i + 1, 4).setValue(parseInt(data[i][3]) + 1); // D: Lecciones_Completadas
        filaEncontrada = true;
        break;
      }
    }
    
    // Si no existe, crear nueva fila
    if (!filaEncontrada) {
      sheet.appendRow([
        email,                           // A: Email_Usuario
        fechaHoy,                       // B: Fecha
        idLeccion,                      // C: ID_Leccion
        1,                              // D: Lecciones_Completadas_Total
        0,                              // E: Tareas_Completadas_Hoy
        0,                              // F: Tareas_Completadas_Total
        0,                              // G: Dinero_Ahorrado_Hoy
        0,                              // H: Dinero_Ahorrado_Acumulado
        0,                              // I: Racha_Días
        puntosQuiz,                     // J: Puntos_Totales
        '[]',                           // K: Badges_Desbloqueados_JSON
        new Date().toISOString()        // L: Timestamp
      ]);
    }
    
    // Verificar si se desbloqueó badge
    const leccion = obtenerLeccion(idLeccion);
    if (leccion.badge) {
      desbloquearBadge(email, leccion.badge);
    }
    
    logActividad(email, 'LECCION_COMPLETADA', 'Lección ' + idLeccion + ' completada', 'éxito');
    
    return { status: 'éxito', message: 'Lección guardada', puntos: leccion.puntos };
    
  } catch (error) {
    Logger.log('❌ Error guardando lección: ' + error);
    return { status: 'error', message: error.toString() };
  }
}

// ============================================
// ✅ FUNCIONES DE TAREAS
// ============================================

/**
 * Obtener tareas del día
 */
function obtenerTareasDia() {
  const data = getAllData(SHEETS.TAREAS);
  
  // Filtrar solo tareas activas
  return data.filter(t => t['Activa'] === 'Sí')
    .sort((a, b) => a['Orden_Aparicion'] - b['Orden_Aparicion']);
}

/**
 * Guardar tarea completada
 */
function guardarTareaCompletada(email, idTarea) {
  try {
    const sheet = getSheetByName(SHEETS.PROGRESO);
    const fechaHoy = new Date().toISOString().split('T')[0];
    
    const tareaData = obtenerTarea(idTarea);
    if (!tareaData) {
      return { status: 'error', message: 'Tarea no encontrada' };
    }
    
    const puntosTarea = tareaData.puntosPosibles;
    const data = sheet.getDataRange().getValues();
    
    // Buscar o crear registro del día
    let filaEncontrada = false;
    
    for (let i = 1; i < data.length; i++) {
      if (data[i][0] === email && data[i][1] === fechaHoy) {
        // Actualizar
        const tareasActuales = parseInt(data[i][4]) || 0;
        const puntosActuales = parseInt(data[i][9]) || 0;
        
        sheet.getRange(i + 1, 5).setValue(tareasActuales + 1); // E: Tareas_Completadas_Hoy
        sheet.getRange(i + 1, 10).setValue(puntosActuales + puntosTarea); // J: Puntos_Totales
        
        filaEncontrada = true;
        break;
      }
    }
    
    if (!filaEncontrada) {
      // Crear nueva fila con esta tarea
      sheet.appendRow([
        email,
        fechaHoy,
        '',
        0,
        1,                              // 1 tarea completada
        0,
        0,
        0,
        0,
        puntosTarea,
        '[]',
        new Date().toISOString()
      ]);
    }
    
    logActividad(email, 'TAREA_COMPLETADA', 'Tarea ' + idTarea, 'éxito');
    
    return { status: 'éxito', message: 'Tarea completada, +' + puntosTarea + ' puntos' };
    
  } catch (error) {
    Logger.log('❌ Error guardando tarea: ' + error);
    return { status: 'error', message: error.toString() };
  }
}

/**
 * Obtener tarea específica
 */
function obtenerTarea(idTarea) {
  const data = getAllData(SHEETS.TAREAS);
  
  const tarea = data.find(t => t['ID_Tarea'] === idTarea);
  
  if (!tarea) return null;
  
  return {
    id: tarea['ID_Tarea'],
    nombre: tarea['Nombre_Tarea'],
    descripcion: tarea['Descripción_Corta'],
    categoria: tarea['Categoría'],
    puntosPosibles: tarea['Puntos_Posibles'],
    emoji: tarea['Emoji_Tarea'],
    instrucciones: tarea['Instrucciones']
  };
}

// ============================================
// 🏆 FUNCIONES DE BADGES
// ============================================

/**
 * Obtener todos los badges disponibles
 */
function obtenerBadgesDisponibles() {
  return getAllData(SHEETS.BADGES);
}

/**
 * Desbloquear badge
 */
function desbloquearBadge(email, idBadge) {
  try {
    const sheet = getSheetByName(SHEETS.PROGRESO);
    const data = sheet.getDataRange().getValues();
    
    const fechaHoy = new Date().toISOString().split('T')[0];
    
    for (let i = 1; i < data.length; i++) {
      if (data[i][0] === email && data[i][1] === fechaHoy) {
        // Obtener badges actuales
        const badgesJSON = data[i][10] || '[]';
        const badges = JSON.parse(badgesJSON);
        
        // Agregar nuevo badge si no existe
        if (!badges.includes(idBadge)) {
          badges.push(idBadge);
          sheet.getRange(i + 1, 11).setValue(JSON.stringify(badges)); // K: Badges
          
          logActividad(email, 'BADGE_DESBLOQUEADO', 'Badge: ' + idBadge, 'éxito');
        }
        
        break;
      }
    }
    
  } catch (error) {
    Logger.log('⚠️ Error desbloqueando badge: ' + error);
  }
}

/**
 * Obtener badges desbloqueados por usuario
 */
function obtenerBadgesUsuario(email) {
  const sheet = getSheetByName(SHEETS.PROGRESO);
  const data = sheet.getDataRange().getValues();
  
  const badges = [];
  
  for (let i = 1; i < data.length; i++) {
    if (data[i][0] === email) {
      const badgesJSON = data[i][10] || '[]';
      badges.push(...JSON.parse(badgesJSON));
    }
  }
  
  return [...new Set(badges)]; // Eliminar duplicados
}

// ============================================
// 📊 FUNCIONES DE DASHBOARD
// ============================================

/**
 * Calcular dinero ahorrado
 */
function calcularDineroAhorrado(email) {
  const usuario = obtenerUsuario(email);
  
  if (!usuario) return 0;
  
  return usuario.cigarrosPorDia * usuario.precioCigarro * usuario.diasSinFumar;
}

/**
 * Crear progreso inicial para usuario
 */
function crearProgresoUsuario(email) {
  try {
    const sheet = getSheetByName(SHEETS.PROGRESO);
    const fechaHoy = new Date().toISOString().split('T')[0];
    
    sheet.appendRow([
      email,                           // A: Email_Usuario
      fechaHoy,                       // B: Fecha
      '',                             // C: ID_Leccion
      0,                              // D: Lecciones_Completadas_Total
      0,                              // E: Tareas_Completadas_Hoy
      0,                              // F: Tareas_Completadas_Total
      0,                              // G: Dinero_Ahorrado_Hoy
      0,                              // H: Dinero_Ahorrado_Acumulado
      0,                              // I: Racha_Días
      0,                              // J: Puntos_Totales
      '[]',                           // K: Badges_Desbloqueados_JSON
      new Date().toISOString()        // L: Timestamp
    ]);
    
  } catch (error) {
    Logger.log('⚠️ Error creando progreso: ' + error);
  }
}

/**
 * Obtener dashboard completo para usuario
 */
function obtenerDashboard(email) {
  try {
    actualizarUltimoAcceso(email);
    
    const usuario = obtenerUsuario(email);
    const tareasDia = obtenerTareasDia();
    const badges = obtenerBadgesUsuario(email);
    const lecciones = obtenerLecciones();
    
    if (!usuario) {
      return { status: 'error', message: 'Usuario no encontrado' };
    }
    
    // Calcular estadísticas
    const dineroAhorrado = calcularDineroAhorrado(email);
    
    return {
      status: 'éxito',
      usuario: usuario,
      dineroAhorrado: dineroAhorrado,
      tareasDia: tareasDia,
      badgesDesbloqueados: badges,
      lecciones: lecciones,
      dashboardUrl: DASHBOARD_URL,
      leccionesUrl: LECCIONES_URL
    };
    
  } catch (error) {
    Logger.log('❌ Error obteniendo dashboard: ' + error);
    return { status: 'error', message: error.toString() };
  }
}

// ============================================
// 🌐 FUNCIONES PARA ENDPOINTS (doGet, doPost)
// ============================================

/**
 * Endpoint GET
 */
function doGet(e) {
  try {
    const action = e.parameter.action || '';
    const email = e.parameter.email || '';
    
    let response = {};
    
    switch(action) {
      case 'dashboard':
        response = obtenerDashboard(email);
        break;
        
      case 'lecciones':
        response = { status: 'éxito', lecciones: obtenerLecciones() };
        break;
        
      case 'tareas':
        response = { status: 'éxito', tareas: obtenerTareasDia() };
        break;
        
      case 'usuario':
        response = { status: 'éxito', usuario: obtenerUsuario(email) };
        break;
        
      case 'badges':
        response = { status: 'éxito', badges: obtenerBadgesUsuario(email) };
        break;
        
      default:
        response = { status: 'error', message: 'Action no especificada' };
    }
    
    return ContentService
      .createTextOutput(JSON.stringify(response))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    Logger.log('❌ Error en doGet: ' + error);
    return ContentService
      .createTextOutput(JSON.stringify({ status: 'error', message: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

/**
 * Endpoint POST
 */
function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    const action = data.action || '';
    
    let response = {};
    
    switch(action) {
      case 'registrar':
        response = registrarUsuario(
          data.email,
          data.nombre,
          data.cigarrosPorDia,
          data.precioCigarro,
          data.telefono
        );
        break;
        
      case 'guardar_leccion':
        response = guardarProgresoLeccion(
          data.email,
          data.idLeccion,
          data.puntosQuiz
        );
        break;
        
      case 'guardar_tarea':
        response = guardarTareaCompletada(
          data.email,
          data.idTarea
        );
        break;
        
      default:
        response = { status: 'error', message: 'Action no especificada' };
    }
    
    return ContentService
      .createTextOutput(JSON.stringify(response))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    Logger.log('❌ Error en doPost: ' + error);
    return ContentService
      .createTextOutput(JSON.stringify({ status: 'error', message: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// ============================================
// 🧪 FUNCIONES DE TESTING
// ============================================

function prueba() {
  Logger.log('=== INICIANDO PRUEBAS ===');
  Logger.log('Sheet ID: ' + SHEET_ID);
  Logger.log('Dashboard URL: ' + DASHBOARD_URL);
  Logger.log('Lecciones URL: ' + LECCIONES_URL);
  Logger.log('=== FIN PRUEBAS ===');
}
