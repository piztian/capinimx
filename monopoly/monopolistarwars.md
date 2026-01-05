# ⭐ STAR WARS: GALACTIC MONOPOLY

## Descripción General
Versión temática de Monopoly con la galaxia de Star Wars. Los jugadores son Jedi que conquistan planetas, naves y estaciones comerciales a través del crédito galáctico.

---

## 🎮 MECÁNICA DEL JUEGO

### Objetivo
Ser el último jugador sin bancarrota, acumulando la mayor cantidad de Créditos y propiedades.

### Flujo Principal
1. **Configuración**: 2-4 jugadores, Créditos iniciales (default: 500)
2. **Turnos**: Lanzar dados → Mover → Pagar acciones
3. **Propiedades**: Comprar o batallar por planetas
4. **Eventos**: Cartas aleatorias que afectan el juego
5. **Victoria**: Último jugador en pie gana

---

## 💰 PROPIEDADES Y PRECIOS

### Planetas Jedi (Azul) - 100-120 Créditos
- **Dagobah** (100) - Hogar del Maestro Yoda
- **Endor** (100) - Mundo de los Ewok
- **Kashyyyk** (240) - Planeta natal de Chewbacca
- **Felucia** (260) - Planeta exótico
- **Rodia** (300) - Planeta comercial

### Planetas Sith (Rojo) - 60-320 Créditos
- **Geonosis** (60) - Base separatista
- **Mustafar** (140) - Volcánico y oscuro
- **Korriban** (160) - Fortaleza Sith
- **Utapau** (260) - Plataforma aérea
- **Mustafar Shadow** (320) - Nivel avanzado

### Planetas Neutrales (Dorado) - 60-200 Créditos
- **Tatooine** (60) - Desierto de arenas
- **Naboo** (140) - Planeta real
- **Tatooine Cantina** (200) - Centro comercial

### Planetas Rebelión (Verde)
- **Hoth** (120) - Base rebelde helada
- **Bespin** (220) - Ciudad en las nubes
- **Alderaan** (220) - Mundo destruido
- **Mon Cala** (300) - Planeta acuático

### Planetas Imperio (Negro) - 280-400 Créditos
- **Scarif** (280) - Base Imperial
- **Palacio Imperial** (350) - Centro del poder
- **Estrella de la Muerte** (400) - Arma suprema

### Naves Capitanas (Tipos especiales) - 200 Créditos
- Nave Capitana (inicio)
- Portaaviones Imperial
- Star Destroyer
- Halcón Milenario

### Estaciones Comerciales - 150 Créditos
- Estación Comercial (posición 12)
- Puesto Comercial Hutt (posición 28)

---

## 🎲 MECÁNICA DE RENTA

### Planetas Regulares
Renta por nivel (1-5):
- **Nivel 1**: Renta base baja
- **Nivel 2-4**: Aumenta progresivamente
- **Nivel 5**: Máxima ganancia (2-3x más que nivel 1)

**Ejemplo - Tatooine:**
- Lv1: 2 Créditos
- Lv2: 6 Créditos
- Lv3: 18 Créditos
- Lv4: 30 Créditos
- Lv5: 90 Créditos

### Naves Capitanas
Renta basada en cantidad de naves poseídas:
- 1 nave: 50 Créditos
- 2 naves: 100 Créditos
- 3 naves: 200 Créditos
- 4 naves: 400 Créditos

### Estaciones Comerciales
15% del dinero total del jugador visitante

---

## 🎯 ESPACIOS ESPECIALES

### Esquinas
1. **CORUSCANT** (Salida) - Posición 0
   - +200 Créditos al pasar
   - Punto de inicio

2. **PRISIÓN IMPERIAL** (Posición 10)
   - Puede pagar 100 Créditos para salir
   - O usar "la Fuerza" (tirar dobles)
   - Max 3 turnos capturado

3. **PUERTO ESPACIAL** (Posición 20)
   - Punto neutro sin acción

4. **ATRAPADO POR VADER** (Posición 30)
   - Automaticamente capturado
   - Mismo mecánica que Prisión Imperial

### Impuestos
- **Impuesto Imperial** (Pos. 4): -200 Créditos
- **Cuota Sith** (Pos. 38): -100 Créditos

### Eventos (Posiciones 2, 17, 32)
Cartas aleatorias con efectos:
- Bonificaciones de Créditos
- Cambios de nivel de propiedades
- Efectos globales

### Teletransporte (Posiciones 7, 22, 36)
- Viaja a cualquier planeta por 5 Créditos
- Evita rutas normales

---

## 🃏 CARTAS DE EVENTO

### Eventos Positivos
1. **Rayo de Fuerza**
   - +1 Nivel a todas tus propiedades
   - Efecto temporal: ganancia inmediata

2. **Poder Absoluto**
   - Todos tus planetas suben +1
   - Similar a Rayo pero más épico

3. **Botín de Pirata**
   - +150 Créditos directo
   - Sin condiciones

4. **Escudo Deflector**
   - +200 Créditos
   - Protección temporal

### Eventos Negativos
1. **Explosión**
   - -1 Nivel a todas tus propiedades
   - Reduce ganancia de renta

2. **Reparaciones de Nave**
   - -150 Créditos
   - Mantenimiento obligatorio

3. **Ataque Sorpresa**
   - -100 Créditos
   - Daño directo

### Eventos Globales
1. **Recompensa**
   - Todos los demás te pagan 50 Créditos
   - Efecto cooperativo inverso

---

## ⚔️ SISTEMA DE BATALLA (SUBASTA)

### Mecánica
1. Propiedad sin dueño cae en batalla
2. Mínima oferta: 20 Créditos
3. Incremento: +20 Créditos por ronda
4. Último jugador de pie gana

### Fases
1. **Preparación**: Seleccionar jugador
2. **Aumento**: +20 Créditos
3. **Confirmación**: Validar oferta
4. **Retirada**: Abandonar batalla
5. **Finalización**: Ganador recibe propiedad

### Estrategia
- Plantear múltiples ofertas
- Provocar guerra de ofertas
- Retirarse en momento clave
- Calcular presupuesto final

---

## 💎 SISTEMA DE VALOR

### Cálculo de Poder Total
```
Poder Total = Créditos en Efectivo + Valor de Propiedades
```

### Bancarrota
- Dinero llega a 0 ⟹ DESTRUIDO
- No puede continuar jugando
- Propiedades vuelven al mercado

### Niveles de Propiedades
1. **Nivel 1**: Renta baja, fácil de obtener
2. **Nivel 2-3**: Equilibrio rentabilidad/inversión
3. **Nivel 4-5**: Máxima ganancia, alta amenaza

---

## 🎨 SISTEMA DE COLORES

### Por Facción
| Color | Facción | Planetas |
|-------|---------|----------|
| 🔵 Azul | Jedi | Dagobah, Endor, Kashyyyk, Felucia, Rodia |
| 🔴 Rojo | Sith | Geonosis, Mustafar, Korriban, Utapau |
| ⭐ Dorado | Neutral | Tatooine, Naboo |
| 🟢 Verde | Rebelión | Hoth, Bespin, Alderaan, Mon Cala |
| ⬛ Gris | Imperio | Scarif, Palacio Imperial, Estrella de la Muerte |
| 🟤 Marrón | Hutt | Kessel, Mos Eisley |

---

## 📊 CONFIGURACIÓN DEL JUEGO

### Parámetros Iniciales
- **Jugadores**: 2-4
- **Créditos Iniciales**: Default 500 (ajustable)
- **Distribución de Propiedades**: Equitativo o manual
- **Tiempo de Juego**: 30-90 minutos

### Modos
1. **Standard**: Sin distribución inicial
2. **Equitativo**: Planetas repartidos al inicio
3. **Personalizado**: Configuración manual

---

## 🎯 ESTRATEGIAS

### Inicio (Turno 1-5)
- Comprar propiedades baratas
- Acumular Créditos
- Evitar deudas innecesarias

### Medio Juego (Turno 6-15)
- Subir niveles de propiedades
- Crear monopolios por color
- Batirse por propiedades estratégicas

### Final (Turno 15+)
- Máxima renta de propiedades
- Defensiva: no caer en ruinas ajenas
- Agresiva: forzar bancarrotas

---

## 🛠️ ELEMENTOS TÉCNICOS

### Variables Principales
```javascript
game {
  players: [],          // Array de jugadores
  currentPlayerIndex: 0, // Turno actual
  isRolling: boolean,   // Estado de dados
  dice1, dice2: number, // Valores de dados
  gameStarted: boolean, // Estado del juego
  initialMoney: number, // Créditos iniciales
  auctionActive: boolean,
  auctionProperty: object,
  auctionBids: {},
  auctionCurrentBid: number
}
```

### Propiedades del Jugador
```javascript
player {
  id: number,
  name: string,
  money: number,
  position: number,
  properties: [],
  color: string,
  inJail: boolean,
  jailTurns: number,
  bankrupt: boolean
}
```

### Propiedades del Tablero
```javascript
property {
  id: number,
  name: string,
  type: 'property' | 'starship' | 'outpost' | 'event' | 'location' | 'tax' | 'corner',
  price: number,
  position: number,
  faction: string,
  color: string,
  baseRent: [],
  owner: number,
  rentLevel: number
}
```

---

## 🎪 EVENTOS ESPECIALES

### Dobles (Tirada de Dados)
- Si sacas dobles, tiras de nuevo
- Máximo 3 dobles seguidos
- Sistema para evitar ventaja extrema

### Salida
- Cada vez que pasas CORUSCANT: +200 Créditos
- Válido incluso después de compras

### Cárcel/Captura
- Posición 30: Atrapado automáticamente
- 3 opciones: Pagar, Usar Fuerza, Esperar

---

## 📈 PROGRESIÓN DE PRECIOS

### Tier 1 (60-120 Créditos)
Planetas iniciales, fácil compra

### Tier 2 (140-180 Créditos)
Nivel intermedio, equilibrio costo/beneficio

### Tier 3 (200-260 Créditos)
Propiedades caras, alta renta

### Tier 4 (280-400 Créditos)
Mega-propiedades, gamechanger

---

## 🏆 CONDICIONES DE VICTORIA

### Victoria por Eliminación
Último jugador con dinero > 0

### Puntos de Victoria
```
Poder Total = Créditos + (Valor de Propiedades × 0.8)
```

### Tiempos Estimados
- Rápido: 30-45 minutos
- Normal: 60-90 minutos
- Épico: 90+ minutos

---

## 🎬 NOTAS TEMÁTICAS

- **Créditos Galácticos**: Moneda de Star Wars
- **Jedi vs Sith**: Dinámicas de facción
- **Naves**: Elementos militares principales
- **Planetas**: Diversos por ecosistema
- **Eventos**: Referencias a la saga

---

## 📱 INTERFAZ

### Paneles
1. **Izquierdo**: Jugadores, Dados, Registro
2. **Central**: Tablero de 40 espacios
3. **Derecho**: Estadísticas, Propiedades

### Modales
- Setup: Configuración inicial
- Property: Detalles de propiedad
- Auction: Sistema de batalla
- Jail: Captura por Vader
- Event: Cartas especiales
- Location: Teletransporte
- Profile: Estadísticas de jugador

---

## 🔧 PERSONALIZACIÓN

### Valores Ajustables
- `initialMoney`: Créditos de inicio
- `auctionStartBid`: Oferta mínima
- `jailTurns`: Duración de captura
- `eventCards`: Array de eventos

### Colores Personalizables
- `playerColors`: Colores de tokens
- Gradientes de fondo
- Estilos de propiedades

---

## 📝 EJEMPLOS DE JUEGO

### Escenario 1: Monopolio Jedi
```
Jugador A compra: Dagobah, Endor, Kashyyyk
- Control total de región azul
- Renta exponencial
- Difícil de competir
```

### Escenario 2: Batalla por Estrella de la Muerte
```
Jugador B vs Jugador C
- Oferta inicial: 20 Créditos
- Batalla escalada hasta 280
- Vencedor: Jugador B con 280
- Impacto: Casi quiebra pero controla el tablero
```

### Escenario 3: Colapso por Eventos
```
Evento: Explosión
- Todos pierden 1 nivel
- Ganancia de renta cae 50%
- Recuperación necesaria
```

---

## 🚀 CARACTERÍSTICAS AVANZADAS

### Sistema de Alianzas (opcional)
- Negociación entre jugadores
- Intercambio de propiedades
- Pagar renta a aliados (reducida)

### Cartas de Poder (expansión)
- Eventos únicos por jugador
- Habilidades especiales
- Cambios de reglas temporales

### Modo Campaña
- Misiones especiales
- Bosses finales (Vader, Palpatine)
- Progresión de dificultad

---

## 📞 CONTROLES

| Acción | Control |
|--------|---------|
| Lanzar Dados | Botón "🎲 LANZAR DADOS" |
| Comprar Propiedad | Botón "💰 Conquistar" |
| Batallar | Botón "⚔️ Batalla" |
| Ver Perfil | Click en Jugador |
| Teletransporte | Click en Ubicación |
| Salir de Cárcel | Pagar o Tirar Dados |

---

## ✨ DIFERENCIAS CON MONOPOLY CLÁSICO

| Aspecto | Clásico | Star Wars |
|---------|---------|----------|
| Moneda | Dólares | Créditos Galácticos |
| Cárcel | Cárcel | Prisión Imperial/Vader |
| Ferrocarriles | Estaciones | Naves Capitanas |
| Servicios | Agua/Electricidad | Estaciones Comerciales |
| Escape de Cárcel | Dobles/Pago | Fuerza/Pago |
| Temática | Urbana | Espacial |
| Eventos | Casual | Temática Star Wars |
| Visual | Colorido pastel | Galáctico dorado |

---

**Versión**: 1.0  
**Última actualización**: 2026  
**Desarrollador**: Cris Gaming  
**Licencia**: Personal Use
