# MenuScore - Guía Completa de Usuario

> Aprende a usar MenuScore para entender, gestionar y mejorar la rentabilidad de tu restaurante.

---

# PARTE 1: CONCEPTOS BÁSICOS

## 🎯 ¿Qué es MenuScore y para qué sirve?

MenuScore es una herramienta que te ayuda a **tomar decisiones basadas en datos** sobre tu carta. En lugar de intuir qué platos funcionan y cuáles no, MenuScore te da información objetiva:

### Lo que MenuScore te permite saber:

| Pregunta | Lo que descubrirás |
|----------|-------------------|
| "¿Cuánto me cuesta preparar cada plato?" | El coste real incluyendo ingredientes, trabajo y gastos generales |
| "¿Estoy cobrando bien?" | Si tu precio es adecuado para el margen que necesitas |
| "¿Qué platos me conviene promocionar?" | Los que tienen buen margen pero venden poco |
| "¿Qué platos debería replantear?" | Los que ni venden ni son rentables |
| "¿Cómo evoluciona mi negocio?" | Tendencias de ventas, ingresos y márgenes |

### La filosofía detrás de MenuScore

MenuScore se basa en el método de **Ingeniería de Menús** (Menu Engineering), una técnica profesional usada en hostelería para optimizar cartas. La idea es simple:

> **Un buen menú no es el que tiene los platos más ricos, sino el que combina platos rentables con platos populares de forma equilibrada.**

---

## 📱 Estructura de la App

MenuScore tiene **4 secciones principales** en la barra inferior:

1. **Carta** - Donde gestionas tus platos
2. **Ingredientes** - Donde gestionas precios y stock
3. **Ventas** - Donde registras lo que vendes
4. **Dashboard** - Donde ves gráficos y evolución

Además, hay un **menú lateral** (icono ☰) con opciones adicionales como categorías, backup y ajustes.

---

# PARTE 2: CONFIGURACIÓN INICIAL

## ⚙️ Por qué los ajustes son importantes

Antes de empezar a añadir platos, es fundamental **configurar bien los parámetros de cálculo**. Estos valores afectan directamente a los costes que MenuScore calcula para cada plato.

### Acceder a los ajustes

1. Abre el menú lateral (icono ☰)
2. Ve a "Ajustes" o "Configuración"

### Los parámetros que debes configurar:

---

### 💶 Coste operativo mensual (€)

**Qué es:** El total de todos tus gastos fijos mensuales sumados en un único número.

**Qué incluye:**
- Alquiler del local
- Nóminas y Seguridad Social del personal
- Luz, agua, gas
- Seguros
- Gestoría
- Mantenimiento
- Otros gastos fijos

**Ejemplo:**
- Alquiler: 1.500€/mes
- Nóminas + SS: 4.000€/mes
- Suministros: 800€/mes
- Seguros y gestoría: 300€/mes
- **Total: 6.600€/mes**

### ⏰ Horas de apertura mensuales

**Qué es:** Cuántas horas está abierto el local al mes.

**Ejemplo:** 
- 10 horas/día × 25 días = **250 horas/mes**

**Por qué importa:**

MenuScore divide el coste mensual entre las horas para obtener el coste por minuto operativo. Esto se aplica al tiempo de elaboración de cada plato.

| Si pones... | El efecto es... |
|-------------|-----------------|
| Coste muy bajo | Los costes de platos parecen más bajos → márgenes inflados artificialmente |
| Coste realista | Costes y márgenes reflejan la realidad |
| Coste muy alto | Los costes parecen más altos → márgenes parecen peores |

**Recomendación:** Suma todos tus gastos fijos reales. Es mejor saber la verdad aunque duela.

---

### 📊 Gastos generales / Overhead (%)

**Qué es:** Un porcentaje extra que se añade al coste base para cubrir gastos variables o imprevistos que no están incluidos en el coste operativo mensual.

**Qué puede incluir:**
- Mermas y desperdicios
- Roturas y pérdidas
- Productos de limpieza
- Pequeño material de cocina
- Imprevistos varios

**Cómo estimarlo:**

Un valor típico está entre el 5% y el 15% según tu tipo de negocio.

**Valores típicos:**
- Restaurante con buen control: 5-8%
- Restaurante medio: 10-12%
- Cocina con muchas mermas: 12-18%

**Por qué importa:**

El overhead se suma al coste de cada plato (ingredientes + trabajo). Si lo ignoras (0%), tus márgenes parecerán mejores de lo que realmente son.

---

### 💰 IVA (%)

**Qué es:** El porcentaje de IVA que aplicas a tus precios.

**Valores en España:**
- IVA reducido (restauración): **10%**
- IVA general: 21%

**Cómo se usa:**

MenuScore asume que tus precios de venta **incluyen IVA**. Este valor se usa para calcular correctamente los márgenes netos.

---

## 🏷️ Configurar categorías

Antes de añadir platos, crea las categorías de tu carta:

### Acceder a categorías

1. Menú lateral (☰)
2. "Gestionar categorías"

### Ejemplos de categorías típicas:
- Entrantes / Tapas
- Ensaladas
- Principales / Carnes
- Principales / Pescados
- Arroces
- Postres
- Bebidas
- Cafés e infusiones
- Menú del día

### Por qué importa:

- Los platos se organizan por categorías en la pantalla Carta
- Te ayuda a ver rápidamente el rendimiento de cada sección
- Facilita el análisis de "¿qué categoría funciona mejor?"

---

# PARTE 3: GESTIÓN DE PLATOS

## 🍽️ Añadir un plato nuevo

### Paso a paso:

1. Ve a la pestaña **Carta**
2. Pulsa el botón **+** (esquina inferior derecha)
3. Rellena la información:

---

### 📝 Nombre del plato

Pon el nombre tal como aparece en tu carta. Ejemplos:
- "Ensalada César"
- "Hamburguesa con queso"
- "Tarta de queso casera"

---

### 💶 Precio de venta

El precio que cobras al cliente, **con IVA incluido**.

**Importante:** Pon el precio real de tu carta, no el precio sin IVA.

---

### 🏷️ Categoría

Selecciona en qué categoría va este plato.

Si la categoría no existe, puedes crearla directamente desde aquí pulsando "Nueva categoría".

---

### ⏱️ Trabajo estimado (MUY IMPORTANTE)

Este campo indica **cuánto esfuerzo de cocina requiere el plato**. Afecta directamente al coste calculado.

| Nivel | Cuándo usarlo | Ejemplos | Tiempo efectivo |
|-------|---------------|----------|-----------------|
| **Mínimo** | Platos que casi no requieren cocina | Ensalada verde, tabla de quesos, gazpacho (preparado) | ~1 minuto |
| **Rápido** | Platos de preparación simple | Huevos fritos, plancha simple, sandwich | ~2 minutos |
| **Normal** | La mayoría de platos | Pasta, carnes a la plancha con guarnición, arroces simples | ~4 minutos |
| **Complejo** | Platos elaborados | Salsas hechas al momento, cocción lenta, técnicas múltiples | ~8 minutos |

**Por qué importa tanto:**

El "trabajo estimado" multiplica el coste operativo por minuto. La diferencia puede ser significativa:

**Ejemplo con coste operativo de 6.600€/mes y 200h/mes (= 0,55€/min):**

| Tipo de esfuerzo | Minutos | Coste de trabajo |
|------------------|---------|------------------|
| Mínimo | 1 min | 0,55€ |
| Rápido | 2 min | 1,10€ |
| Normal | 4 min | 2,20€ |
| Complejo | 8 min | 4,40€ |

En un plato de 15€, esa diferencia de 1,40€ entre "Mínimo" y "Complejo" puede suponer casi un 10% de margen.

**Recomendación:** Sé honesto. Si un plato requiere trabajo, márcalo como tal. Mejor saber que un plato elaborado tiene menos margen del que pensabas.

---

### 🍰 ¿Es postre?

Marca esta opción si el plato es un postre.

**Por qué existe:**
Los postres suelen tener características diferentes (márgenes altos, porciones pequeñas). MenuScore los tiene en cuenta en sus análisis.

---

### 🥗 Ingredientes

Aquí añades los ingredientes que componen el plato y sus cantidades.

**Este es el paso más importante para calcular el coste real.**

#### Cómo añadir ingredientes:

1. Pulsa "Añadir ingrediente"
2. Busca el ingrediente en el catálogo
3. Indica la **cantidad** que usas en este plato
4. Repite para cada ingrediente

#### Ejemplo para "Ensalada César":

| Ingrediente | Cantidad |
|-------------|----------|
| Lechuga romana | 150 g |
| Pechuga de pollo | 100 g |
| Queso parmesano | 20 g |
| Pan para picatostes | 30 g |
| Salsa César | 40 ml |
| Aceite de oliva | 10 ml |

#### Por qué es importante ser preciso:

Si pones cantidades incorrectas, el coste calculado será incorrecto:
- **Cantidad muy baja** → El coste parece menor → Margen inflado
- **Cantidad muy alta** → El coste parece mayor → Margen parece peor

**Consejo:** Pesa los ingredientes de un plato real una vez. Así tendrás datos precisos.

---

## 📊 Entender la ficha del plato

Una vez creado el plato, al tocarlo se despliega toda la información:

### Sección de precios y costes

| Campo | Qué significa |
|-------|---------------|
| **Precio** | Lo que cobras (editable) |
| **Coste** | Lo que te cuesta (ingredientes + trabajo + overhead) |
| **Margen €** | Precio - Coste = Lo que ganas por plato |
| **Margen %** | (Margen / Precio) × 100 = Porcentaje de beneficio |

**Ejemplo:**
- Precio: 14,00€
- Coste: 5,20€
- Margen: 8,80€ (62,8%)

### El precio recomendado

Si tu margen es bajo, MenuScore te sugiere un **precio recomendado** para alcanzar un margen saludable (normalmente 65-70%).

**Ejemplo:**
> "Con el coste actual de 5,20€, el precio recomendado es 14,85€ para lograr un margen del 65%"

No tienes que seguir esta recomendación, pero te da una referencia.

### La clasificación del plato

Cada plato tiene una etiqueta de color:

| Etiqueta | Color | Significa |
|----------|-------|-----------|
| ⭐ **Estrella** | Verde | Alta rentabilidad + Muy vendido |
| 🚜 **Tractor** | Azul | Baja rentabilidad + Muy vendido |
| 🧩 **Gancho** | Amarillo | Alta rentabilidad + Poco vendido |
| ⚓ **Lastre** | Rojo | Baja rentabilidad + Poco vendido |
| **Sin datos** | Gris | No hay suficientes ventas registradas |

**Importante:** Esta clasificación solo funciona si registras ventas regularmente.

---

## ⭐ El sistema de clasificación explicado

### ¿Cómo se clasifica un plato?

MenuScore cruza dos variables:

1. **Rentabilidad** (margen del plato)
2. **Popularidad** (cuánto se vende respecto a otros)

### La matriz de clasificación:

```
                    POPULARIDAD
                 Baja        Alta
              ┌─────────┬─────────┐
       Alta   │ 🧩      │ ⭐      │
              │ Gancho  │ Estrella│
MARGEN        ├─────────┼─────────┤
       Bajo   │ ⚓      │ 🚜      │
              │ Lastre  │ Tractor │
              └─────────┴─────────┘
```

### Qué hacer con cada tipo:

#### ⭐ Estrellas - "Tus mejores platos"
- Venden mucho Y ganan mucho
- **Estrategia:** No los toques. Mantén la receta y el precio. Destácalos en carta.

#### 🚜 Tractores - "Populares pero poco rentables"
- A la gente le encantan, pero te dejan poco margen
- **Estrategia:**
  - Subir ligeramente el precio (si el mercado lo permite)
  - Buscar ingredientes alternativos más económicos
  - Reducir un poco la cantidad sin que se note

#### 🧩 Ganchos - "Rentables pero desconocidos"
- Son muy rentables, pero la gente no los pide
- **Estrategia:**
  - Destacarlos más en carta (mejor posición, descripción atractiva)
  - Que los camareros los recomienden
  - Probar promociones para darlos a conocer

#### ⚓ Lastres - "Ni chicha ni limonada"
- No se venden Y cuando se venden, dejan poco margen
- **Estrategia:**
  - Plantearse eliminarlos de la carta
  - Si tienen valor sentimental, rediseñarlos por completo
  - Algunas veces, subirles mucho el precio los convierte en "Ganchos" (pocos los piden, pero los que lo hacen pagan bien)

---

# PARTE 4: GESTIÓN DE INGREDIENTES

## 🥕 El catálogo de ingredientes

### ¿Qué ves en la pantalla de Ingredientes?

Solo los ingredientes que **estás usando** en algún plato. El catálogo completo existe pero no se muestra para no abrumarte.

### Información de cada ingrediente:

| Campo | Significado |
|-------|-------------|
| **Nombre** | El nombre del ingrediente |
| **Precio de compra** | Lo que pagas al proveedor |
| **Cantidad de compra** | En qué cantidad lo compras (1 kg, 6 unidades, 1 litro...) |
| **Coste por unidad** | Calculado automáticamente (precio ÷ cantidad) |
| **Stock** | Cuánto tienes (si usas control de stock) |

### Por qué es crucial tener los precios actualizados

El coste de tus platos depende directamente del precio de los ingredientes.

**Ejemplo:**
- Tienes un plato con 200g de salmón
- Si tienes el salmón a 15€/kg, el coste del ingrediente es 3€
- Pero si el salmón sube a 20€/kg y no lo actualizas, MenuScore sigue calculando 3€
- Tu margen real ha bajado pero no lo sabes

**Recomendación:** Revisa los precios de ingredientes al menos una vez al mes, o cuando notes cambios importantes en tus proveedores.

---

### Añadir un ingrediente nuevo

Dos formas:

#### Desde el catálogo sugerido:
1. Pulsa "+" en Ingredientes
2. Busca el ingrediente (ej: "tomate")
3. Selecciona el que corresponda
4. Pon TU precio de compra

#### Crear desde cero:
1. Pulsa "+" en Ingredientes
2. Pulsa "Crear nuevo"
3. Rellena todos los campos:
   - Nombre
   - Precio de compra
   - Cantidad que compras (ej: 1 kg)
   - Unidad de uso (ej: gramos)

---

### Entender las unidades

Esto es importante para que los cálculos sean correctos:

**Ejemplo con aceite de oliva:**
- Compras: 5 litros por 25€
- Usas en recetas: mililitros

Configuración:
- Precio de compra: 25€
- Cantidad de compra: 5 L
- Unidad de uso: ml

MenuScore calcula: 25€ ÷ 5000 ml = **0,005€ por ml**

Si en un plato usas 20 ml de aceite, el coste es 0,10€.

---

## 📊 Insights de ingredientes

La pestaña "Insights" te da información valiosa:

### Ingredientes más vendidos
Basado en tus ventas registradas, ¿qué ingredientes estás moviendo más?

**Útil para:** Negociar con proveedores ("muevo 50kg de pollo al mes, ¿mejor precio?")

### Ingredientes más rentables
¿Qué ingredientes contribuyen más a tus ingresos?

**Útil para:** Saber qué ingredientes son estratégicos para tu negocio.

### Ingredientes en riesgo
Ingredientes que solo usas en un plato.

**Por qué importa:** Si ese plato deja de venderse, te quedas con el ingrediente parado. Peor si es perecedero.

### Valor del inventario (con stock activado)
Cuánto dinero tienes "parado" en ingredientes.

---

## 📦 Control de stock (opcional)

### ¿Para qué sirve?

- Ver cuánto tienes de cada ingrediente
- Que se descuente automáticamente al registrar ventas
- Recibir alertas cuando algo está bajo mínimos
- Ver el valor total de tu inventario

### Cómo activarlo

1. Ve a Ajustes
2. Activa "Gestión de stock"

### Configurar stock de un ingrediente

En cada ingrediente puedes definir:
- **Stock actual:** Cuánto tienes ahora
- **Stock mínimo:** Cuando baje de aquí, te avisamos

### Stock recurrente

Para ingredientes que repones semanalmente de forma fija:

1. En el ingrediente, activa "Stock recurrente"
2. Indica la cantidad semanal (ej: 10 kg)
3. Cada lunes, MenuScore añade esa cantidad automáticamente

**Útil para:** Ingredientes con pedido fijo semanal al proveedor.

---

# PARTE 5: REGISTRO DE VENTAS

## 📊 Por qué registrar ventas es FUNDAMENTAL

Sin datos de ventas, MenuScore **no puede clasificar tus platos** correctamente.

### Lo que aporta registrar ventas:

| Sin ventas | Con ventas |
|------------|------------|
| Solo ves costes y márgenes teóricos | Ves qué platos se venden realmente |
| Todos los platos aparecen como "Sin datos" | Los platos se clasifican (Estrella, Tractor, etc.) |
| No hay sugerencias de popularidad | Recibes consejos sobre qué promocionar |
| Dashboard vacío | Gráficos de evolución de tu negocio |
| No se descuenta stock | Stock se actualiza automáticamente |

### La regla de oro

> **Registra las ventas una vez por semana.** El sistema funciona con totales semanales: para cada semana, introduces cuántos platos vendiste en total esa semana.

**Importante:** Solo hay un registro por semana. No puedes añadir ventas múltiples veces a la semana ni registro diario — introduces el total acumulado de la semana cuando termine (o una estimación).

---

## 📝 Cómo registrar ventas

### Paso a paso:

1. Ve a la pestaña **Ventas**
2. Verás un calendario con las semanas disponibles
3. Selecciona la semana que quieres registrar (normalmente la anterior)
4. Pulsa **+** o "Registrar ventas"
5. Para cada plato, indica el **total de unidades vendidas esa semana**
6. Guarda

### Pantalla de registro

Verás todos tus platos organizados por categorías.

Para cada plato:
- Usa los botones **+** y **-** para ajustar la cantidad
- O toca el número para escribirlo directamente

### No hace falta que sea exacto al 100%

Si no tienes datos exactos de tu TPV, una estimación razonable es mejor que nada. 10 minutos por semana estimando los totales ya aporta mucho valor.

**Ejemplo:** "Esta semana vendimos unas 30 hamburguesas, 25 ensaladas césar y 40 cañas"

---

## 📄 Importar desde CSV

Si tu TPV puede exportar datos, puedes importarlos directamente.

### Formato del archivo:

```csv
nombre_plato,cantidad
Ensalada César,25
Hamburguesa clásica,42
Tarta de queso,18
```

O con fechas:
```csv
nombre_plato,cantidad,fecha
Ensalada César,25,2024-01-15
Hamburguesa clásica,42,2024-01-15
```

### Proceso:

1. En Ventas, pulsa el icono de importar
2. Selecciona tu archivo CSV
3. MenuScore intenta asociar los nombres automáticamente
4. Revisa que todo esté correcto
5. Confirma

### Si un nombre no coincide

MenuScore te avisará. Puedes:
- Editar el nombre en el CSV y reimportar
- Crear el plato que falta y reimportar

---

## 📅 Historial de ventas

Puedes ver todas las semanas anteriores:

- **Semanas con datos:** Muestran el total de unidades vendidas
- **Semana actual:** Destacada en azul
- **Editar:** Puedes modificar datos de semanas pasadas
- **Eliminar:** Si te equivocaste, puedes borrar una semana entera

### Eliminar una semana

Si eliminas una semana:
- Se borran los datos de ventas de esa semana
- Se restaura el stock (si lo tenías activado)
- Se recalculan las clasificaciones de platos

---

# PARTE 6: DASHBOARD Y ANÁLISIS

## 📈 La pantalla Dashboard

Aquí ves la **evolución de tu negocio** en forma de gráficos.

### Tipos de gráficos:

#### 💵 Ingresos
Cuánto facturas cada semana.

**Te permite ver:**
- ¿Los ingresos suben o bajan?
- ¿Hay semanas mejores que otras?
- ¿Cómo va el mes comparado con el anterior?

#### 📦 Unidades vendidas
Cuántos platos vendes cada semana.

**Te permite ver:**
- ¿Estás sirviendo más o menos platos?
- ¿El ticket medio sube o baja? (compara con ingresos)

#### 📊 Margen
La rentabilidad media de lo que vendes cada semana.

**Te permite ver:**
- ¿Tu rentabilidad mejora o empeora?
- ¿Estás vendiendo más platos rentables o menos rentables?

### Selector de período

Elige cuántas semanas ver:
- Últimas 4 semanas
- Últimas 8 semanas
- Últimas 12 semanas

### Comparar platos

Puedes seleccionar hasta 2 platos específicos para ver su evolución individual.

**Útil para:**
- "¿La hamburguesa sigue vendiendo igual que antes?"
- "¿El nuevo plato está despegando?"
- "¿Qué vende más, la pasta o el arroz?"

---

## 💡 La puntuación MenuScore

En la pantalla Carta, arriba, verás la **puntuación global** de tu menú.

### Qué mide:

- **Distribución de roles:** ¿Tienes equilibrio entre Estrellas, Tractores, etc.?
- **Márgenes medios:** ¿Tus platos tienen márgenes saludables?
- **Cobertura de datos:** ¿Tienes ingredientes en todos los platos?
- **Actividad:** ¿Registras ventas regularmente?

### Cómo mejorar la puntuación:

1. Añade ingredientes a todos los platos
2. Registra ventas semanalmente
3. Revisa platos con márgenes bajos
4. Actúa sobre los Lastres (eliminar o mejorar)
5. Promociona los Ganchos

### Toca la puntuación para ver detalles

Se abre un diálogo con:
- Desglose de los componentes del score
- Evolución histórica
- Cambios recientes
- El consejo más importante ahora mismo

---

## 🎯 Sugerencias y consejos

MenuScore genera **sugerencias automáticas** basadas en tus datos:

### Tipos de sugerencias:

#### Precio
> "El margen de *Ensalada César* es del 45%. Considera subir el precio a 13,50€"

#### Popularidad
> "*Risotto de setas* tiene un margen excelente pero representa solo el 2% de las ventas. ¿Podrías destacarlo más?"

#### Ingredientes
> "*Hamburguesa completa* no tiene ingredientes añadidos. Añádelos para calcular el coste real."

#### Rol
> "*Sopa del día* es un Lastre (bajo margen, pocas ventas). Considera eliminarlo o rediseñarlo."

### Dónde ver las sugerencias

- En la pantalla **Carta**, hay un panel de sugerencias
- En cada **ficha de plato**, aparecen sugerencias específicas para ese plato

---

# PARTE 7: FUNCIONES ADICIONALES

## 💾 Backup y restauración

### Exportar tus datos

1. Menú lateral > "Backup"
2. Pulsa "Exportar"
3. Se genera un archivo con todos tus datos
4. Guárdalo en tu móvil o en la nube

**Incluye:** Platos, ingredientes, categorías, ventas, configuración

### Restaurar datos

1. Menú lateral > "Backup"
2. Pulsa "Restaurar"
3. Selecciona un archivo de backup
4. Confirma

**Útil para:**
- Cambiar de móvil
- Recuperar datos si algo va mal
- Tener una copia de seguridad periódica

---

## 🏷️ Gestión de categorías

### Crear categoría

1. Menú lateral > "Categorías"
2. Pulsa "+"
3. Pon el nombre
4. Guarda

### Reordenar categorías

Mantén pulsada una categoría y arrástrala arriba o abajo.

El orden afecta a cómo se muestran los platos en la pantalla Carta.

### Eliminar categoría

Desliza hacia la izquierda o usa el botón de eliminar.

**Nota:** Los platos de esa categoría no se borran, solo quedan sin categoría asignada.

---

## 🌐 Idioma

MenuScore está disponible en:
- 🇪🇸 Español
- 🇬🇧 English

El idioma se detecta automáticamente según tu móvil

---

# PARTE 8: CONSEJOS PARA SACAR EL MÁXIMO PARTIDO

## ✅ Lista de verificación inicial

Antes de empezar a usar MenuScore en serio:

- [ ] Configurar coste operativo mensual (€)
- [ ] Configurar horas de apertura mensuales
- [ ] Configurar overhead (%)
- [ ] Configurar IVA (%)
- [ ] Crear todas las categorías
- [ ] Añadir todos los platos de la carta
- [ ] Poner los ingredientes de cada plato (con cantidades reales)
- [ ] Actualizar precios de ingredientes

## 📅 Rutina semanal recomendada

### Cada semana (5 minutos):
1. Registrar las ventas de la semana anterior
2. Revisar si hay alertas de stock bajo
3. Echar un vistazo al Dashboard

### Cada mes (15 minutos):
1. Revisar precios de ingredientes (¿han subido?)
2. Leer las sugerencias con calma
3. Revisar platos con peor rendimiento
4. Hacer un backup

### Cada trimestre (30 minutos):
1. Análisis profundo del Dashboard
2. Revisar si hay Lastres que eliminar
3. Considerar cambios de precio en Tractores
4. Evaluar nuevos platos añadidos

---

## ❓ Preguntas frecuentes

### "¿Por qué mi margen parece muy bajo?"

Revisa:
1. ¿Has puesto bien el coste operativo mensual?
2. ¿Las horas de apertura son correctas?
3. ¿El overhead es realista?
4. ¿Las cantidades de ingredientes son correctas?
5. ¿Los precios de ingredientes están actualizados?

### "¿Por qué todos mis platos aparecen como 'Sin datos'?"

Porque no has registrado ventas. La clasificación (Estrella, Tractor, etc.) necesita datos de ventas para funcionar.

### "¿Puedo usar MenuScore sin registrar ventas?"

Sí, pero pierdes mucha funcionalidad:
- No hay clasificación de platos
- No hay Dashboard
- Las sugerencias son menos precisas

### "¿Qué pasa si no pongo ingredientes en un plato?"

El coste calculado será solo el trabajo + overhead. El margen parecerá muy alto pero no es real.

### "¿Con qué frecuencia debo actualizar precios de ingredientes?"

Idealmente cuando cambian. En la práctica, una vez al mes suele ser suficiente para la mayoría de ingredientes. Los que fluctúan mucho (pescado fresco, verduras de temporada), más a menudo.

### "¿Puedo cambiar el porcentaje de margen objetivo?"

Actualmente MenuScore usa referencias estándar de la industria (65-70%). Esto puede variar en futuras versiones.

---

## 📞 Contacto y soporte

¿Tienes dudas o sugerencias?

📧 **info@menuscore.app**

---

*MenuScore - Entiende, Actúa, Mejora*
*Versión 1.x - Diciembre 2024*
