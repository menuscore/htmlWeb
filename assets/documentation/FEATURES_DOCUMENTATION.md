# MenuScore - Guía de Funcionalidades

> Todo lo que necesitas saber para sacar el máximo partido a MenuScore y mejorar la rentabilidad de tu restaurante.

---

## 🎯 ¿Qué es MenuScore?

MenuScore es tu asistente para **entender, gestionar y mejorar la rentabilidad de tu carta**. Te ayuda a responder preguntas como:

- ¿Cuáles son mis platos más rentables?
- ¿Estoy cobrando el precio correcto por cada plato?
- ¿Qué platos debería promocionar más?
- ¿Cuánto me cuesta realmente preparar cada plato?
- ¿Qué ingredientes me conviene vigilar?

---

## 📱 Las 4 Secciones de la App

MenuScore se organiza en 4 pestañas principales en la parte inferior:

| Pestaña | Para qué sirve |
|---------|----------------|
| **Carta** | Ver y gestionar todos tus platos |
| **Ingredientes** | Gestionar precios y stock de ingredientes |
| **Ventas** | Registrar lo que vendes cada semana |
| **Dashboard** | Ver gráficos y evolución del negocio |

---

## 🍽️ TU CARTA

### Visión general de tus platos

En la pantalla principal de Carta verás:

- **Todos tus platos organizados por categorías** (Entrantes, Principales, Postres...)
- **La puntuación MenuScore** de tu carta (de 0 a 100)
- **Sugerencias de mejora** personalizadas para tu negocio

### La puntuación MenuScore

En la parte superior verás un número del 0 al 100 que representa **la salud general de tu carta**:

- **80-100** 🟢 Excelente - Tu carta está muy bien equilibrada
- **60-79** 🟡 Buena - Hay margen de mejora pero funciona bien
- **40-59** 🟠 Regular - Revisa algunos platos
- **0-39** 🔴 Necesita atención - Hay problemas que resolver

**Toca la puntuación** para ver qué factores la afectan y cómo mejorarla.

### Información de cada plato

Al tocar un plato se despliega una tarjeta con todo lo que necesitas saber:

#### 💰 Rentabilidad
- **Precio de venta** - Lo que cobras al cliente
- **Coste real** - Lo que te cuesta prepararlo (ingredientes + trabajo)
- **Margen** - Cuánto ganas con cada plato (en € y en %)
- **Precio recomendado** - Si el margen es bajo, te sugiere un precio mejor

#### 🏷️ Clasificación del plato
Cada plato recibe una etiqueta según su rendimiento:

| Etiqueta | Significa | Qué hacer |
|----------|-----------|-----------|
| ⭐ **Estrella** | Vende mucho Y da buen margen | ¡Perfecto! Mantenerlo destacado |
| 🚜 **Tractor** | Vende mucho PERO da poco margen | Subir precio o reducir costes |
| 🧩 **Gancho** | Da buen margen PERO vende poco | Promocionarlo más |
| ⚓ **Lastre** | Vende poco Y da poco margen | Plantearse eliminarlo |

#### 🥗 Ingredientes
- Lista de todos los ingredientes del plato
- Cantidad usada de cada uno
- Coste que aporta cada ingrediente
- Puedes añadir, quitar o modificar ingredientes

### Añadir un plato nuevo

Pulsa el botón **+** y rellena:

1. **Nombre** del plato
2. **Precio de venta** (lo que cobras)
3. **Categoría** (Entrantes, Principales, etc.)
4. **Trabajo estimado** - Cuánto tiempo/esfuerzo requiere:
   - *Mínimo*: Ensaladas, platos fríos
   - *Rápido*: Plancha, frituras
   - *Normal*: La mayoría de platos
   - *Complejo*: Platos elaborados con salsas
5. **Ingredientes** - Selecciona del catálogo y pon las cantidades

### Sugerencias inteligentes

MenuScore analiza tu carta y te da **consejos personalizados**:

- "El margen de *Ensalada César* es solo del 45%. Considera subir el precio a 12,50€"
- "*Risotto de setas* tiene buen margen pero vende poco. ¿Lo destacas más en carta?"
- "*Hamburguesa* no tiene ingredientes añadidos. Añádelos para calcular el coste real"

---

## 🥕 TUS INGREDIENTES

### Catálogo de ingredientes

Aquí gestionas todos los ingredientes que usas en tus platos:

- **Solo ves los que usas** - No se muestra el catálogo completo, solo los ingredientes que has añadido a algún plato
- **Precio de compra** - Lo que pagas al proveedor
- **Coste por uso** - El precio calculado por la unidad que usas en los platos (ej: €/gramo)

### Añadir ingredientes

Dos formas:
1. **Desde el catálogo** - MenuScore incluye cientos de ingredientes comunes. Solo tienes que buscar, añadir y poner tu precio
2. **Crear nuevo** - Si no está en el catálogo, créalo desde cero

### Configurar un ingrediente

Para cada ingrediente defines:
- **Precio de compra**: Ej. 15€
- **Cantidad que compras**: Ej. 1 kg
- **Unidad para cocinar**: Ej. gramos

MenuScore calcula automáticamente que cada gramo te cuesta 0,015€.

### Análisis de ingredientes (Pestaña "Insights")

Información valiosa sobre tus ingredientes:

#### 📊 Lo más vendido
"¿Qué ingredientes muevo más?" - Basado en tus ventas reales de los últimos 30 días

#### 💎 Lo más rentable  
"¿Qué ingredientes me generan más ingresos?" - Los que más contribuyen a tu facturación

#### ⚠️ Ingredientes en riesgo
"¿Tengo ingredientes que solo uso en un plato?" - Si ese plato no vende, el ingrediente se queda parado

#### 📦 Valor del inventario (si usas control de stock)
"¿Cuánto dinero tengo en ingredientes?" - El valor total de tu despensa

---

## 📊 TUS VENTAS

### ¿Para qué registrar ventas?

MenuScore necesita saber **qué vendes realmente** para:
- Clasificar correctamente cada plato (Estrella, Tractor, etc.)
- Mostrarte tendencias en el Dashboard
- Darte consejos más precisos
- Descontar stock automáticamente (si lo tienes activado)

### Cómo registrar ventas

1. Ve a la pestaña **Ventas**
2. Selecciona la **semana** que quieres registrar
3. Pulsa **+** para abrir el registro
4. Indica **cuántas unidades** de cada plato vendiste
5. Guarda

### Importar desde archivo

Si tienes los datos en un archivo CSV (por ejemplo, de tu TPV):

1. Pulsa el icono de importar
2. Selecciona tu archivo CSV
3. MenuScore asocia automáticamente los nombres
4. Revisa y confirma

**Formato del CSV:**
```
nombre_plato,cantidad
Ensalada César,25
Hamburguesa,40
```

### Historial de ventas

Puedes ver todas las semanas anteriores:
- Cuánto vendiste cada semana
- Comparar semanas
- Eliminar una semana si te equivocaste

---

## 📈 TU DASHBOARD

### Evolución del negocio

Gráficos que te muestran cómo va tu restaurante:

#### 💵 Ingresos por semana
"¿Estoy facturando más o menos que antes?"

#### 📦 Unidades vendidas
"¿Estoy vendiendo más platos?"

#### 📊 Margen
"¿Mi rentabilidad mejora o empeora?"

### Comparar platos

Puedes seleccionar hasta 2 platos para comparar su evolución:
- "¿La hamburguesa vende más que el mes pasado?"
- "¿Qué plato tiene mejor tendencia?"

### Períodos

Elige ver las últimas 4, 8 o 12 semanas.

---

## 🏷️ CATEGORÍAS

### Organiza tu carta

Crea las categorías que necesites:
- Entrantes
- Principales
- Postres
- Bebidas
- Menú del día
- *Las que quieras...*

### Gestionar categorías

Desde el menú lateral:
- **Crear** nuevas categorías
- **Renombrar** las existentes
- **Reordenar** con arrastrar y soltar
- **Eliminar** las que ya no uses

---

## 📦 CONTROL DE STOCK (Opcional)

### ¿Qué aporta?

Si activas el control de stock:
- **Ves cuánto tienes** de cada ingrediente
- **Se descuenta automáticamente** cuando registras ventas
- **Alertas** cuando algo está bajo mínimos
- **Valor del inventario** en tiempo real

### Configurar stock

Para cada ingrediente puedes definir:
- **Stock actual**: Cuánto tienes ahora
- **Stock mínimo**: Cuándo te avisamos

### Stock recurrente

Para ingredientes que repones semanalmente:
- Activa "Stock recurrente"
- Indica la cantidad semanal
- MenuScore lo añade automáticamente cada lunes

---

## 💾 GUARDAR TUS DATOS

### Exportar copia de seguridad

Desde el menú lateral > "Backup":
- Exporta todos tus datos a un archivo
- Guárdalo en tu móvil o en la nube
- Útil antes de cambiar de móvil

### Restaurar datos

Si cambias de móvil o pierdes datos:
- Selecciona tu archivo de backup
- MenuScore restaura todo: platos, ingredientes, ventas, categorías

---

## ⚙️ AJUSTES

### Personaliza los cálculos

En Ajustes puedes configurar:

- **Coste de mano de obra** (€/hora) - Afecta al coste calculado de cada plato
- **Gastos generales (%)** - Un porcentaje extra sobre el coste base
- **IVA (%)** - Para cálculos de precios

### Idioma

MenuScore está disponible en:
- 🇪🇸 Español
- 🇬🇧 English

---

## 💡 CONSEJOS PARA EMPEZAR

### 1️⃣ Primeros pasos
1. Añade tus **categorías** (Entrantes, Principales, etc.)
2. Crea tus **platos** con nombres y precios
3. Añade los **ingredientes** de cada plato
4. Revisa el **MenuScore** inicial

### 2️⃣ Cada semana
1. Registra las **ventas** de la semana anterior
2. Revisa las **sugerencias** nuevas
3. Mira el **Dashboard** para ver tendencias

### 3️⃣ Periódicamente
1. Actualiza **precios de ingredientes** cuando cambien
2. Revisa platos con bajo rendimiento
3. Exporta un **backup** por seguridad

---

## 🆘 ¿NECESITAS AYUDA?

### Contacto
📧 **info@menuscore.app**

### Información legal
Desde el menú lateral puedes acceder a:
- Política de privacidad
- Términos de servicio
- Aviso legal

---

## 📋 RESUMEN: ¿QUÉ INFORMACIÓN TE DA MENUSCORE?

| Pregunta | Dónde encontrar la respuesta |
|----------|------------------------------|
| ¿Cuánto me cuesta cada plato? | Carta > Tocar plato > Ver coste |
| ¿Qué margen tengo? | Carta > Tocar plato > Ver margen |
| ¿Qué platos debería promocionar? | Carta > Sugerencias |
| ¿Qué precio debería poner? | Carta > Tocar plato > Precio recomendado |
| ¿Cuáles son mis platos estrella? | Carta > Ver etiquetas de cada plato |
| ¿Cómo van mis ventas? | Dashboard > Gráficos |
| ¿Qué ingredientes uso más? | Ingredientes > Insights |
| ¿Cuánto vale mi inventario? | Ingredientes > Insights (con stock activado) |
| ¿Qué debería mejorar? | Carta > Análisis del menú |

---

*MenuScore - Entiende, Actúa, Mejora*
