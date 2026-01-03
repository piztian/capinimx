// ============================================
// EASY FREEDOM - GOOGLE APPS SCRIPT v3 (FINAL)
// COMPLETO CON TODAS LAS FUNCIONES
// ============================================

// 🔑 CONFIGURACIÓN GLOBAL
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
    Logger.log('⚠️ Pestaña no encontrada: ' + sheetName);
    // Retornar null en lugar de tirar error
    return null;
  }
  
  return sheet;
}

/**
 * Obtener todos los datos de una pestaña
 */
function getAllData(sheetName) {
  const sheet = getSheetByName(sheetName);
  
  if (!sheet) return [];
  
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
    
    if (!sheet) {
      Logger.log('⚠️ Pestaña LOGS no existe');
      return;
    }
    
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
    
    Logger.log('📝 Log: ' + accion);
  } catch (error) {
    Logger.log('⚠️ Error al loguear: ' + error);
  }
}

// ============================================
// 👤 FUNCIONES DE USUARIOS
// ============================================

/**
 * Verificar si usuario existe
 */
function usuarioExiste(email) {
  const sheet = getSheetByName(SHEETS.USUARIOS);
  
  if (!sheet) return false;
  
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
  try {
    const sheet = getSheetByName(SHEETS.USUARIOS);
    
    if (!sheet) {
      return null;
    }
    
    const data = sheet.getDataRange().getValues();
    
    // Encabezados esperados:
    // A:Email, B:ID_Usuario, C:Nombre, D:Teléfono, E:Fecha_Registro, 
    // F:Cigarros_Por_Dia, G:Precio_Cigarro_Local, H:Dinero_Ahorrado,
    // I:Días_Sin_Fumar, J:Estado, K:Motivación_Inicial, L:Fecha_Último_Acceso,
    // M:Seminario_Completado, N:Contraseña_Hash, O:Fecha_Actualización
    
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
          seminario: data[i][12],
          status: 'éxito'
        };
      }
    }
    
    return {
      status: 'error',
      message: 'Usuario no encontrado'
    };
    
  } catch (error) {
    Logger.log('❌ Error obteniendo usuario: ' + error);
    return {
      status: 'error',
      message: error.toString()
    };
  }
}

/**
 * Registrar nuevo usuario
 */
function registrarUsuario(email, nombre, cigarrosPorDia, precioCigarro, telefono = '') {
  try {
    // Validar que no exista
    if (usuarioExiste(email)) {
      return { status: 'error', message: 'Email ya registrado' };
    }
    
    const sheet = getSheetByName(SHEETS.USUARIOS);
    
    if (!sheet) {
      return { status: 'error', message: 'Pestaña de usuarios no encontrada' };
    }
    
    // Generar ID único
    const idUsuario = 'USER-' + email.split('@')[0] + '-' + Date.now();
    const fechaRegistro = new Date().toISOString().split('T')[0];
    
    sheet.appendRow([
      email,                          // A: Email
      idUsuario,                      // B: ID_Usuario
      nombre,                         // C: Nombre
      telefono,                       // D: Teléfono
      fechaRegistro,                  // E: Fecha_Registro
      cigarrosPorDia,                 // F: Cigarros_Por_Dia
      precioCigarro,                  // G: Precio_Cigarro_Local
      0,                              // H: Dinero_Ahorrado
      0,                              // I: Días_Sin_Fumar
      'Activo',                       // J: Estado
      5,                              // K: Motivación_Inicial
      fechaRegistro,                  // L: Fecha_Último_Acceso
      'No',                           // M: Seminario_Completado
      '',                             // N: Contraseña_Hash
      fechaRegistro                   // O: Fecha_Actualización
    ]);
    
    logActividad(email, 'REGISTRO', 'Usuario registrado', 'éxito');
    
    return { 
      status: 'éxito',
      message: 'Usuario registrado correctamente',
      idUsuario: idUsuario
    };
    
  } catch (error) {
    Logger.log('❌ Error registrando usuario: ' + error);
    logActividad(email, 'REGISTRO', error.toString(), 'error');
    return { status: 'error', message: error.toString() };
  }
}

/**
 * Actualizar último acceso de usuario
 */
function actualizarUltimoAcceso(email) {
  try {
    const sheet = getSheetByName(SHEETS.USUARIOS);
    
    if (!sheet) return;
    
    const data = sheet.getDataRange().getValues();
    
    for (let i = 1; i < data.length; i++) {
      if (data[i][0] === email) {
        const ahora = new Date().toISOString().split('T')[0];
        sheet.getRange(i + 1, 12).setValue(ahora); // Columna L
        break;
      }
    }
  } catch (error) {
    Logger.log('⚠️ Error actualizando acceso: ' + error);
  }
}

// ============================================
// ✅ FUNCIONES DE TAREAS
// ============================================

/**
 * Obtener tareas del día (solo activas)
 */
function obtenerTareasDia() {
  try {
    const data = getAllData(SHEETS.TAREAS);
    
    if (!data || data.length === 0) {
      return [];
    }
    
    // Filtrar solo tareas activas y ordenar por orden de aparición
    return data
      .filter(t => t['Activa'] === 'Sí' || t['Activa'] === true || t['Activa'] === 'TRUE')
      .sort((a, b) => (a['Orden_Aparicion'] || 0) - (b['Orden_Aparicion'] || 0))
      .map(t => ({
        id: t['ID_Tarea'],
        nombre: t['Nombre_Tarea'],
        descripcion: t['Descripción_Corta'],
        categoria: t['Categoría'],
        puntos: t['Puntos_Posibles'],
        emoji: t['Emoji_Tarea'],
        completada: false,
        orden: t['Orden_Aparicion'],
        instrucciones: t['Instrucciones']
      }));
      
  } catch (error) {
    Logger.log('❌ Error obteniendo tareas: ' + error);
    return [];
  }
}

/**
 * Obtener tarea específica
 */
function obtenerTarea(idTarea) {
  try {
    const data = getAllData(SHEETS.TAREAS);
    
    const tarea = data.find(t => t['ID_Tarea'] === idTarea);
    
    if (!tarea) return null;
    
    return {
      id: tarea['ID_Tarea'],
      nombre: tarea['Nombre_Tarea'],
      descripcion: tarea['Descripción_Corta'],
      categoria: tarea['Categoría'],
      puntos: tarea['Puntos_Posibles'],
      emoji: tarea['Emoji_Tarea'],
      instrucciones: tarea['Instrucciones']
    };
  } catch (error) {
    Logger.log('❌ Error obteniendo tarea: ' + error);
    return null;
  }
}

/**
 * Guardar tarea completada
 */
function guardarTareaCompletada(email, idTarea) {
  try {
    const sheet = getSheetByName(SHEETS.PROGRESO);
    
    if (!sheet) {
      return { status: 'error', message: 'Pestaña de progreso no encontrada' };
    }
    
    const tareaData = obtenerTarea(idTarea);
    if (!tareaData) {
      return { status: 'error', message: 'Tarea no encontrada' };
    }
    
    const puntosTarea = tareaData.puntos || 0;
    const fechaHoy = new Date().toISOString().split('T')[0];
    const data = sheet.getDataRange().getValues();
    
    // Buscar registro del día
    let filaEncontrada = false;
    
    for (let i = 1; i < data.length; i++) {
      if (data[i][0] === email && data[i][1] === fechaHoy) {
        // Actualizar
        const tareasActuales = parseInt(data[i][4]) || 0;
        const puntosActuales = parseInt(data[i][9]) || 0;
        
        sheet.getRange(i + 1, 5).setValue(tareasActuales + 1);
        sheet.getRange(i + 1, 10).setValue(puntosActuales + puntosTarea);
        
        filaEncontrada = true;
        break;
      }
    }
    
    if (!filaEncontrada) {
      // Crear nueva fila
      sheet.appendRow([
        email,
        fechaHoy,
        '',
        0,
        1,
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
    
    return { 
      status: 'éxito',
      message: 'Tarea completada, +' + puntosTarea + ' puntos',
      puntos: puntosTarea
    };
    
  } catch (error) {
    Logger.log('❌ Error guardando tarea: ' + error);
    return { status: 'error', message: error.toString() };
  }
}

// ============================================
// 📚 FUNCIONES DE LECCIONES
// ============================================

/**
 * Obtener todas las lecciones
 */
function obtenerLecciones() {
  try {
    const data = getAllData(SHEETS.LECCIONES);
    
    if (!data || data.length === 0) {
      return {};
    }
    
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
        videoUrl: leccion['URL_Video'],
        contenido: leccion['Contenido_HTML'],
        quiz: leccion['Quiz_JSON'],
        badge: leccion['Badge_Desbloqueado'],
        puntos: leccion['Puntos_Posibles'],
        orden: leccion['Orden_Semana']
      });
    });
    
    return lecciones;
    
  } catch (error) {
    Logger.log('❌ Error obteniendo lecciones: ' + error);
    return {};
  }
}

/**
 * Obtener lección específica
 */
function obtenerLeccion(idLeccion) {
  try {
    const data = getAllData(SHEETS.LECCIONES);
    
    const leccion = data.find(l => l['ID_Leccion'] === idLeccion);
    
    if (!leccion) return null;
    
    return {
      id: leccion['ID_Leccion'],
      semana: leccion['Semana'],
      modulo: leccion['Modulo'],
      titulo: leccion['Título_Leccion'],
      duracion: leccion['Duración_Minutos'],
      videoUrl: leccion['URL_Video'],
      contenido: leccion['Contenido_HTML'],
      quiz: leccion['Quiz_JSON'],
      badge: leccion['Badge_Desbloqueado'],
      puntos: leccion['Puntos_Posibles']
    };
  } catch (error) {
    Logger.log('❌ Error obteniendo lección: ' + error);
    return null;
  }
}

/**
 * Guardar progreso de lección
 */
function guardarProgresoLeccion(email, idLeccion, puntosQuiz) {
  try {
    const sheet = getSheetByName(SHEETS.PROGRESO);
    
    if (!sheet) {
      return { status: 'error', message: 'Pestaña de progreso no encontrada' };
    }
    
    const fechaHoy = new Date().toISOString().split('T')[0];
    const data = sheet.getDataRange().getValues();
    
    let filaEncontrada = false;
    
    for (let i = 1; i < data.length; i++) {
      if (data[i][0] === email && data[i][1] === fechaHoy) {
        sheet.getRange(i + 1, 3).setValue(idLeccion);
        sheet.getRange(i + 1, 4).setValue((parseInt(data[i][3]) || 0) + 1);
        filaEncontrada = true;
        break;
      }
    }
    
    if (!filaEncontrada) {
      sheet.appendRow([
        email,
        fechaHoy,
        idLeccion,
        1,
        0,
        0,
        0,
        0,
        0,
        puntosQuiz || 0,
        '[]',
        new Date().toISOString()
      ]);
    }
    
    logActividad(email, 'LECCION_COMPLETADA', 'Lección ' + idLeccion, 'éxito');
    
    return { 
      status: 'éxito',
      message: 'Lección guardada',
      puntos: puntosQuiz || 0
    };
    
  } catch (error) {
    Logger.log('❌ Error guardando lección: ' + error);
    return { status: 'error', message: error.toString() };
  }
}

// ============================================
// 🏆 FUNCIONES DE BADGES
// ============================================

/**
 * Obtener badges desbloqueados por usuario
 */
function obtenerBadgesUsuario(email) {
  try {
    const sheet = getSheetByName(SHEETS.PROGRESO);
    
    if (!sheet) return [];
    
    const data = sheet.getDataRange().getValues();
    const badges = [];
    
    for (let i = 1; i < data.length; i++) {
      if (data[i][0] === email) {
        const badgesJSON = data[i][10] || '[]';
        try {
          badges.push(...JSON.parse(badgesJSON));
        } catch (e) {
          Logger.log('⚠️ Error parsing badges: ' + e);
        }
      }
    }
    
    return [...new Set(badges)];
  } catch (error) {
    Logger.log('❌ Error obteniendo badges: ' + error);
    return [];
  }
}

// ============================================
// 📊 FUNCIONES DE DASHBOARD
// ============================================

/**
 * Calcular dinero ahorrado
 */
function calcularDineroAhorrado(email) {
  const usuario = obtenerUsuario(email);
  
  if (!usuario || usuario.status === 'error') return 0;
  
  return (usuario.cigarrosPorDia || 0) * (usuario.precioCigarro || 0) * (usuario.diasSinFumar || 0);
}

/**
 * Obtener dashboard completo
 */
function obtenerDashboard(email) {
  try {
    actualizarUltimoAcceso(email);
    
    const usuario = obtenerUsuario(email);
    
    if (!usuario || usuario.status === 'error') {
      return {
        status: 'error',
        message: 'Usuario no encontrado'
      };
    }
    
    const tareasDia = obtenerTareasDia();
    const badges = obtenerBadgesUsuario(email);
    const lecciones = obtenerLecciones();
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
    return {
      status: 'error',
      message: error.toString()
    };
  }
}

// ============================================
// 🌐 ENDPOINTS (doGet, doPost)
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
        response = { 
          status: 'éxito',
          lecciones: obtenerLecciones()
        };
        break;
        
      case 'tareas':
        response = { 
          status: 'éxito',
          tareas: obtenerTareasDia()
        };
        break;
        
      case 'usuario':
        response = obtenerUsuario(email);
        break;
        
      case 'badges':
        response = { 
          status: 'éxito',
          badges: obtenerBadgesUsuario(email)
        };
        break;
        
      default:
        response = { 
          status: 'error',
          message: 'Action no especificada'
        };
    }
    
    return ContentService
      .createTextOutput(JSON.stringify(response))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    Logger.log('❌ Error en doGet: ' + error);
    return ContentService
      .createTextOutput(JSON.stringify({ 
        status: 'error',
        message: error.toString()
      }))
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
          data.cigarrosPorDia || 20,
          data.precioCigarro || 2.50,
          data.telefono || ''
        );
        break;
        
      case 'guardar_leccion':
        response = guardarProgresoLeccion(
          data.email,
          data.idLeccion,
          data.puntosQuiz || 0
        );
        break;
        
      case 'guardar_tarea':
        response = guardarTareaCompletada(
          data.email,
          data.idTarea
        );
        break;
        
      default:
        response = { 
          status: 'error',
          message: 'Action no especificada'
        };
    }
    
    return ContentService
      .createTextOutput(JSON.stringify(response))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    Logger.log('❌ Error en doPost: ' + error);
    return ContentService
      .createTextOutput(JSON.stringify({ 
        status: 'error',
        message: error.toString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// ============================================
// 🧪 FUNCIONES DE TESTING
// ============================================

function prueba() {
  Logger.log('=== PRUEBAS EASY FREEDOM ===');
  Logger.log('Sheet ID: ' + SHEET_ID);
  Logger.log('Tareas: ' + obtenerTareasDia().length);
  Logger.log('Usuario test: ' + JSON.stringify(obtenerUsuario('test@easyfreedom.mx')));
  Logger.log('=== FIN PRUEBAS ===');
}
