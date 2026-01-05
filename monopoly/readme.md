# 📋 GUÍA: Cambiar Costos de Propiedades por Nivel

## 🎯 Ubicación en el Código

En el HTML, busca la sección donde están definidas las propiedades. Está aproximadamente en la **línea 400-450**.

Se ve así:
```javascript
const properties = [
    { id: 0, name: 'SALIDA', type: 'corner', price: 0, position: 0 },
    { id: 1, name: 'Mediterránea', type: 'property', price: 60, color: 'brown', position: 1, baseRent: [2, 6, 18, 30, 90, 160] },
    ...
]
```

---

## 🏠 Estructura de una Propiedad

```javascript
{
    id: 1,                                          // ID único
    name: 'Mediterránea',                          // Nombre
    type: 'property',                              // Tipo
    price: 60,                                     // Precio inicial
    color: 'brown',                                // Color del grupo
    position: 1,                                   // Posición en tablero
    baseRent: [2, 6, 18, 30, 90, 160]            // AQUÍ VAN LOS COSTOS POR NIVEL
}
```

---

## 💰 El Array `baseRent` - Explicado

El `baseRent` es un **array con 6 números**, uno para cada nivel:

```
baseRent: [2, 6, 18, 30, 90, 160]
           ↑  ↑  ↑   ↑   ↑   ↑
        Lv1 Lv2 Lv3 Lv4 Lv5 Lv6*

(*Lv6 es especial para cuando está completamente mejorada)
```

### Cómo funciona:
- **Nivel 1**: Renta = $2 (primer índice [0])
- **Nivel 2**: Renta = $6 (segundo índice [1])
- **Nivel 3**: Renta = $18 (tercer índice [2])
- **Nivel 4**: Renta = $30 (cuarto índice [3])
- **Nivel 5**: Renta = $90 (quinto índice [4])
- **Nivel 6**: Renta = $160 (sexto índice [5])

---

## ✏️ CÓMO MODIFICAR

### Ejemplo 1: Aumentar Todas las Rentas

**Antes:**
```javascript
{ id: 1, name: 'Mediterránea', type: 'property', price: 60, color: 'brown', position: 1, baseRent: [2, 6, 18, 30, 90, 160] },
```

**Después (duplicadas):**
```javascript
{ id: 1, name: 'Mediterránea', type: 'property', price: 60, color: 'brown', position: 1, baseRent: [4, 12, 36, 60, 180, 320] },
```

### Ejemplo 2: Cambiar Solo Nivel 1 y 2

**Antes:**
```javascript
baseRent: [2, 6, 18, 30, 90, 160]
```

**Después:**
```javascript
baseRent: [5, 10, 18, 30, 90, 160]
           ↑  ↑   (estos dos cambiaron)
```

---

## 📊 Todas las Propiedades y Sus Posiciones

### Grupo MARRÓN (Posiciones 1, 3)
```javascript
{ id: 1, name: 'Mediterránea', baseRent: [2, 6, 18, 30, 90, 160] },
{ id: 3, name: 'Báltica', baseRent: [4, 12, 36, 60, 180, 320] },
```

### Grupo AZUL CLARO (Posiciones 6, 8, 9)
```javascript
{ id: 6, name: 'Oriental', baseRent: [6, 18, 54, 90, 270, 450] },
{ id: 8, name: 'Vermont', baseRent: [6, 18, 54, 90, 270, 450] },
{ id: 9, name: 'Connecticut', baseRent: [8, 24, 72, 120, 360, 600] },
```

### Grupo ROSA (Posiciones 11, 13, 14)
```javascript
{ id: 11, name: 'St. Charles', baseRent: [10, 30, 90, 160, 480, 750] },
{ id: 13, name: 'Estados', baseRent: [10, 30, 90, 160, 480, 750] },
{ id: 14, name: 'Virginia', baseRent: [12, 36, 108, 180, 540, 900] },
```

### Grupo NARANJA (Posiciones 16, 18, 19)
```javascript
{ id: 16, name: 'St. James', baseRent: [14, 42, 126, 210, 630, 1100] },
{ id: 18, name: 'Tennessee', baseRent: [14, 42, 126, 210, 630, 1100] },
{ id: 19, name: 'Nueva York', baseRent: [16, 48, 144, 240, 720, 1275] },
```

### Grupo ROJO (Posiciones 21, 23, 24)
```javascript
{ id: 21, name: 'Kentucky', baseRent: [18, 54, 162, 270, 810, 1400] },
{ id: 23, name: 'Indiana', baseRent: [18, 54, 162, 270, 810, 1400] },
{ id: 24, name: 'Illinois', baseRent: [20, 60, 180, 300, 900, 1550] },
```

### Grupo AMARILLO (Posiciones 26, 27, 29)
```javascript
{ id: 26, name: 'Atlantic', baseRent: [22, 66, 198, 330, 990, 1700] },
{ id: 27, name: 'Ventnor', baseRent: [22, 66, 198, 330, 990, 1700] },
{ id: 29, name: 'Marvin Gardens', baseRent: [24, 72, 216, 360, 1080, 1900] },
```

### Grupo VERDE (Posiciones 31, 33, 34)
```javascript
{ id: 31, name: 'Pacific', baseRent: [26, 78, 234, 390, 1170, 2000] },
{ id: 33, name: 'Carolina N', baseRent: [26, 78, 234, 390, 1170, 2000] },
{ id: 34, name: 'Pensilvania', baseRent: [28, 84, 252, 420, 1260, 2150] },
```

### Grupo AZUL OSCURO (Posiciones 37, 39)
```javascript
{ id: 37, name: 'Park Place', baseRent: [35, 105, 315, 525, 1575, 2100] },
{ id: 39, name: 'Paseo Marítimo', baseRent: [50, 150, 450, 625, 750, 1000] },
```

---

## 🎨 Patrón de Cálculo

Fíjate en el patrón: cada nivel multiplica aproximadamente por 3:

**Mediterránea:** [2, 6, 18, 30, 90, 160]
- Lv1: $2
- Lv2: $6 (3× Lv1)
- Lv3: $18 (3× Lv2)
- Lv4: $30 (1.67× Lv3)
- Lv5: $90 (3× Lv4)
- Lv6: $160 (1.78× Lv5)

---

## 🔧 Cambios Comunes

### Hacer todo más caro (×2)
Multiplica cada número por 2:
```javascript
// Antes
baseRent: [2, 6, 18, 30, 90, 160]

// Después
baseRent: [4, 12, 36, 60, 180, 320]
```

### Hacer todo más barato (÷2)
Divide cada número por 2:
```javascript
// Antes
baseRent: [2, 6, 18, 30, 90, 160]

// Después
baseRent: [1, 3, 9, 15, 45, 80]
```

### Aumentar solo nivel 5
```javascript
// Antes
baseRent: [2, 6, 18, 30, 90, 160]
                             ↑

// Después
baseRent: [2, 6, 18, 30, 150, 160]  // Cambié 90 a 150
```

---

## 🖥️ Pasos para Modificar

1. **Abre el archivo HTML** en un editor de texto (VS Code, Notepad++, etc)
2. **Busca** con Ctrl+F: `const properties = [`
3. **Encuentra la propiedad** que quieras cambiar
4. **Localiza el `baseRent:`** 
5. **Modifica los números** dentro del array
6. **Guarda el archivo**
7. **Recarga el navegador** (F5)

---

## ⚡ Ejemplo Práctico Completo

Quiero que Mediterránea cueste el doble:

**ANTES:**
```javascript
{ id: 1, name: 'Mediterránea', type: 'property', price: 60, color: 'brown', position: 1, baseRent: [2, 6, 18, 30, 90, 160] },
```

**DESPUÉS:**
```javascript
{ id: 1, name: 'Mediterránea', type: 'property', price: 60, color: 'brown', position: 1, baseRent: [4, 12, 36, 60, 180, 320] },
```

Listo! Ahora los costos son el doble en cada nivel. 🎉

---

## 💡 Tips

- **Mantén el patrón**: Los números deben crecer lógicamente (no hagas Lv3 más barato que Lv2)
- **Prueba en el juego**: Después de cambiar, abre el juego y compra una propiedad para ver si funciona
- **Los ferrocarriles no cambian**: Sus costos se calculan automáticamente según cuántos tengas
- **Las utilities no cambian**: Siempre son 10% de tu dinero (a menos que modifiques el código de payRent)
