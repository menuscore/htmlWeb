# Guía para Editar archivos JSON de i18n (es.json / en.json)

## ⚠️ REGLAS IMPORTANTES

### 1. **NUNCA uses saltos de línea reales dentro de las comillas**
   
❌ **INCORRECTO:**
```json
"texto": "Primera línea
Segunda línea"
```

✅ **CORRECTO:**
```json
"texto": "Primera línea\\nSegunda línea"
```

### 2. **Usa `\\n` para saltos de línea**
   - Escribe **dos barras invertidas** seguidas de `n`: `\\n`
   - El sistema automáticamente convertirá `\\n` en saltos de línea en el navegador

### 3. **Cierra siempre las comillas en la misma línea**
   - Cada valor debe empezar y terminar con `"` en la **misma línea**

### 4. **Usa comas correctamente**
   - Pon una coma `,` después de cada propiedad **excepto la última** de un objeto
   - No pongas coma después de la última propiedad antes de `}`

---

## 📝 PASOS PARA EDITAR EL ARCHIVO JSON

### Paso 1: Abre el archivo correctamente
1. Cierra el archivo `es.json` si lo tienes abierto en el Bloc de notas
2. Guarda cualquier cambio pendiente
3. **Importante**: Asegúrate de que el servidor local esté corriendo (ya lo tienes con `npx serve`)

### Paso 2: Edita el contenido
1. Busca la clave que quieres modificar (por ejemplo: `"placeholder"`)
2. Localiza el texto entre comillas: `"texto aquí"`
3. Modifica el texto **SIN salir de las comillas**
4. Si necesitas un salto de línea, escribe `\\n` (dos barras invertidas + n)

**Ejemplo práctico:**
```json
"placeholder": "Texto en línea 1\\nTexto en línea 2\\n\\nTexto después de línea vacía"
```

### Paso 3: Verifica la sintaxis
Antes de guardar, verifica:
- ✅ Todas las comillas están cerradas en la misma línea
- ✅ Hay comas entre propiedades (excepto la última)
- ✅ Los saltos de línea usan `\\n` (no saltos reales)
- ✅ No hay comas después de la última propiedad antes de `}`

### Paso 4: Guarda el archivo
1. **Guarda el archivo** (Ctrl + S en Bloc de notas)
2. **Cierra el Bloc de notas** (esto es importante)

### Paso 5: Limpia la caché del navegador
**Este es el paso que probablemente te faltaba:**

1. Abre el navegador en la página del tutorial
2. Presiona **Ctrl + Shift + R** (o **Ctrl + F5**)
   - Esto recarga la página **ignorando la caché**
3. Alternativamente:
   - Presiona **F12** para abrir las herramientas de desarrollo
   - Haz clic derecho en el botón de recargar
   - Selecciona **"Vaciar caché y recargar de manera forzada"**

---

## 🔍 POR QUÉ NO VEÍAS LOS CAMBIOS

El navegador **guarda en caché** los archivos JSON para cargar más rápido. Cuando modificas el archivo, el navegador sigue usando la versión antigua guardada en memoria.

**Soluciones:**
1. **Recarga forzada**: Ctrl + Shift + R
2. **Cierra y abre el navegador** completamente
3. **Usa modo incógnito** para probar (Ctrl + Shift + N)

---

## 📋 EJEMPLO COMPLETO DE EDICIÓN

### Antes:
```json
"intro": {
  "title": "Introducción",
  "placeholder": "Texto antiguo"
}
```

### Después (con saltos de línea):
```json
"intro": {
  "title": "Introducción",
  "placeholder": "Primera línea del texto.\\nSegunda línea del texto.\\n\\nTercera línea después de espacio."
}
```

**Nota:** Observa que:
- Todo está en una sola línea
- Los saltos de línea usan `\\n`
- Hay coma después de `"title"` pero NO después de `"placeholder"` (es el último)

---

## 🛠️ VALIDAR QUE EL JSON ES CORRECTO

Después de editar, puedes validar que el JSON es correcto:

1. Abre PowerShell en la carpeta del proyecto
2. Ejecuta:
   ```powershell
   node -e "const fs = require('fs'); try { JSON.parse(fs.readFileSync('assets\\i18n\\es.json', 'utf8')); console.log('✓ JSON válido'); } catch(e) { console.log('✗ Error:', e.message); }"
   ```

Si dice "✓ JSON válido", está bien. Si muestra un error, hay un problema de sintaxis.

---

## ⚡ RESUMEN RÁPIDO

1. **Edita** el archivo JSON
2. Usa `\\n` para saltos de línea (NO saltos reales)
3. **Guarda** el archivo
4. **Cierra** el Bloc de notas
5. En el navegador: **Ctrl + Shift + R** (recarga forzada)
6. ✅ ¡Deberías ver los cambios!

---

## 🆘 SI ALGO SALE MAL

Si el JSON se rompe y la página no carga:
1. No entres en pánico
2. Pídeme ayuda y te lo arreglo
3. Siempre puedo restaurar el archivo a una versión funcional

---

**Última actualización:** 2025-12-28
