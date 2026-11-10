```markdown
# Sistema de productos — repuestoselectro.lat

Documento de referencia para añadir un producto nuevo. Se sigue al pie de la letra.

**Última actualización:** noviembre de 2026.

---

## 1. Estado actual del proyecto

**Stack:** Astro (export estático) + `repuestos.json` + Cloudflare Pages + GitHub.
**Dominio:** `repuestoselectro.lat` (Cloudflare Pages, deploy automático desde `main`).
**Tag de afiliado:** `qqo-20`.

**Productos publicados:**

| Marca | Producto | ASIN | Ficha | Guías |
|---|---|---|---|---|
| Samsung | DA97-17376B | `B071NFVVNG` | ✅ | 6/6 |
| LG | LT1000P | `B074HLRXMP` | ✅ | 6/6 |
| GE | XWFE | `B0882ZJ48W` | ✅ | 6/6 |
| Bosch | UltraClarity Pro | `B0973NDZTN` | ✅ | 6/6 |
| Frigidaire | EPTWFU01 | `B01BKWSHHE` | ✅ | 6/6 |
| Whirlpool | EveryDrop 1 | `B00UXG4WR8` | ✅ | 6/6 |

**Total:** 53 páginas generadas por Astro (home, categoría, 6 marcas, 6 fichas, 36 guías, 3 legales) + 1 `404.html` estático = 54 archivos `.html` en `dist`.
*Verificado con `npm run build`: `53 page(s) built`.*

---

## 2. Estructura de archivos

```
src/
├── data/
│   └── repuestos.json                    ← todos los productos
├── components/
│   ├── Header.astro                      ← logo + navegación
│   ├── MigasPan.astro                    ← migas de pan (recibe niveles[])
│   └── SelectorNevera.astro              ← desplegable marca → modelo
└── pages/
    ├── index.astro                       ← home (selector + tarjetas de categorías)
    ├── afiliados/index.astro
    ├── privacidad/index.astro
    ├── aviso-legal/index.astro
    └── filtro-agua/
        ├── index.astro                   ← categoría (lista de marcas)
        └── [marca]/
            ├── index.astro               ← marca (lista de productos)
            └── [slug]/
                ├── index.astro               ← FICHA DEL PRODUCTO (pilar)
                ├── como-saber-si-es-original.astro
                ├── no-encaja.astro
                ├── original-vs-generico.astro
                ├── como-reiniciar-luz.astro
                ├── como-cambiar.astro
                └── por-que-gotea.astro
```

**Archivos en `public/`:**

```
public/
├── favicon.svg                    ← "R" naranja (#c2410c)
├── favicon.ico
├── robots.txt                     ← permite búsqueda, bloquea bots de entrenamiento IA
├── llms.txt                       ← mapa del sitio para agentes de IA
├── 404.html                       ← desactiva el SPA fallback de Cloudflare
├── _headers                       ← HSTS, CSP, COOP, XFO, Permissions-Policy
├── _redirects                     ← regla para servir .well-known
└── .well-known/
    ├── ai-catalog.json            ← manifiesto ARD
    └── ard.json                   ← copia del manifiesto (ubicación recomendada)
```

**`SISTEMA.md`** (este archivo) en la raíz del proyecto.

---

## 3. Estructura de URLs

```
/                                                   home
/filtro-agua/                                       categoría
/filtro-agua/[marca]/                               marca
/filtro-agua/[marca]/[slug]/                        ficha del producto (pilar)
/filtro-agua/[marca]/[slug]/como-saber-si-es-original/
/filtro-agua/[marca]/[slug]/no-encaja/
/filtro-agua/[marca]/[slug]/original-vs-generico/
/filtro-agua/[marca]/[slug]/como-reiniciar-luz/
/filtro-agua/[marca]/[slug]/como-cambiar/
/filtro-agua/[marca]/[slug]/por-que-gotea/
/afiliados/  /privacidad/  /aviso-legal/
/.well-known/ai-catalog.json  /.well-known/ard.json
/llms.txt  /robots.txt  /sitemap-index.xml  /sitemap-0.xml
```

---

## 4. Esquema del JSON por producto

Cada producto es un objeto en `repuestos.json`. Los campos con `*` son obligatorios.

```json
{
  "categoria": "filtro-agua",
  "categoriaNombre": "Filtros de agua para nevera",
  "marca": "samsung",
  "marcaNombre": "Samsung",
  "slug": "da97-17376b",
  "titulo": "Filtro Samsung DA97-17376B — Original",
  "tituloSeo": "...",
  "numeroPieza": "DA97-17376B",
  "alias": ["HAF-QIN", "HAF-QIN/EXP"],
  "esOriginal": true,
  "fabricante": "Samsung",
  "tipoFiltro": "Cuadrado (bloque de carbón)",
  "modelosCompatibles": ["..."],
  "compatibilidad": {
    "familias": [
      { "nombre": "Familia 1", "modelos": ["..."] }
    ]
  },
  "contraindicaciones": ["..."],
  "sintomas": ["..."],
  "comoSaberModelo": "...",
  "guiaCambio": ["paso 1", "paso 2"],              // legacy opcional
  "guiaReset": ["método 1", "método 2"],
  "guiaProblemas": [                                // legacy opcional
    { "pregunta": "...", "respuesta": "..." }
  ],
  "guiaCambioDetalle": {                            // OBLIGATORIO
    "intro": "...",
    "pasos": [
      { "titulo": "...", "detalle": "..." }
    ],
    "errorComun": "..."
  },
  "guiaFugas": {                                    // OBLIGATORIO
    "intro": "...",
    "causas": [
      { "titulo": "...", "detalle": "..." }
    ],
    "prevencion": "..."
  },
  "guiaResetLuz": {
    "intro": "...",
    "metodos": [
      { "modelo": "...", "pasos": "..." }
    ],
    "errorComun": "..."
  },
  "guiaOriginal": {
    "intro": "...",
    "pasos": ["..."],
    "senales": ["..."],
    "queHacer": "..."
  },
  "guiaNoEncaja": {
    "intro": "...",
    "causas": [
      { "titulo": "...", "texto": "..." }
    ],
    "gotea": "..."
  },
  "guiaVsGenerico": {
    "intro": "...",
    "originalNoPerfecto": "...",
    "riesgosGenerico": ["..."],
    "tabla": [
      { "opcion": "...", "precio": "~$XX", "certificacion": "NSF ..." }
    ],
    "recomendacion": ["..."]
  },
  "textoOriginal": "...",
  "faqs": [
    { "q": "...", "a": "..." }
  ],
  "enlaceAfiliado": "https://www.amazon.com/dp/[ASIN]?tag=qqo-20",
  "imagenSchema": "https://m.media-amazon.com/images/I/...",
  "asin": "[ASIN]"
}
```

**Nota sobre imágenes:** la `imagenSchema` debe ser la URL original del CDN de Amazon (`m.media-amazon.com`). No se descarga ni se altera. Solo se enlaza.

**Nota sobre `guiaCambio` vs `guiaCambioDetalle`:** `guiaCambio` (array de strings) y `guiaProblemas` (array de `{pregunta, respuesta}`) son legado. La versión nueva y rica es `guiaCambioDetalle` (objeto con `intro`/`pasos`/`errorComun`) y `guiaFugas` (objeto con `intro`/`causas`/`prevencion`). Se mantienen ambos porque la ficha del producto aún consume los viejos; las páginas nuevas `/como-cambiar/` y `/por-que-gotea/` consumen los nuevos.

---

## 5. Checklist para añadir un producto

### Fase A — Verificación (manual, en Amazon.com)

- [ ] Es **original** (marca del fabricante, no tercero).
- [ ] Está disponible en **Amazon.com** (no `.mx`, no `.ca`, no `.es`).
- [ ] Tiene **stock estable**.
- [ ] El vendedor es **Amazon** o el **fabricante**.
- [ ] Anoto el **ASIN** de la URL (10 caracteres después de `/dp/`).
- [ ] Anoto la **lista de modelos compatibles** (de la ficha oficial del fabricante).
- [ ] Anoto el **precio actual** (para la tabla comparativa).
- [ ] Copio la **URL de la imagen** (clic derecho → "Copiar dirección de imagen", debe empezar por `m.media-amazon.com`).
- [ ] Reviso las **reseñas** para extraer defectos reales, problemas de autenticación y patrones de instalación.

### Fase B — JSON

- [ ] Crear el objeto completo en `repuestos.json`.
- [ ] `titulo` (H1) con número de pieza.
- [ ] `tituloSeo` (<title>) sin número de pieza, con diferencial.
- [ ] `modelosCompatibles` (lista plana, sin duplicados).
- [ ] `compatibilidad.familias` (agrupada).
- [ ] `guiaCambioDetalle`, `guiaFugas`, `guiaResetLuz` **específicos** del producto.
- [ ] `guiaOriginal`, `guiaNoEncaja`, `guiaVsGenerico` **específicos** del producto.
- [ ] `textoOriginal` 150-300 palabras, redactado desde cero.
- [ ] `faqs` 3 preguntas.
- [ ] `enlaceAfiliado` con `?tag=qqo-20`.
- [ ] `imagenSchema` con URL del CDN de Amazon.
- [ ] Verificar JSON:
  ```powershell
  $r = Get-Content src\data\repuestos.json -Raw -Encoding UTF8 | ConvertFrom-Json
  "Total: $($r.Count)"
  "$($r[N].marca) / $($r[N].slug)"
  "$($r[N].guiaCambioDetalle.intro)"
  "$($r[N].guiaFugas.intro)"
  ```

### Fase C — Verificación local

- [ ] `npm run build` sin errores. El número de páginas debe ser **53 con 6 productos**. La fórmula es `5 + 8N` (home + categoría + 3 legales = 5; ficha + marca + 6 guías = 8 por producto). Con cada producto nuevo se suman **8 páginas**. **Confirmar siempre con el log del build.**
- [ ] Verificar que las 8 páginas del producto nuevo se generan:
  ```powershell
  Get-ChildItem -Recurse -LiteralPath "dist\filtro-agua\[marca]" -Filter *.html | Select-Object FullName
  ```
- [ ] Verificar el sitemap:
  ```powershell
  Get-Content dist\sitemap-0.xml
  ```
- [ ] Verificar que las guías del producto nuevo muestran **su** contenido, no el de otro producto (especialmente `como-cambiar` y `por-que-gotea`):
  ```powershell
  Select-String -LiteralPath "dist\filtro-agua\[marca]\[slug]\por-que-gotea\index.html" -Pattern "filtro [Marca] gotea" -Quiet
  ```
- [ ] Verificar que el interlinking funciona: cada guía enlaza a las otras cinco del mismo producto.
- [ ] Verificar que la **ficha del producto** enlaza a las **6 guías** en el bloque "Guías sobre este filtro" (ver 7.8):
  ```powershell
  $html = Get-Content "dist\filtro-agua\[marca]\[slug]\index.html" -Raw
  ([regex]::Matches($html, "como-saber-si-es-original|no-encaja|original-vs-generico|como-reiniciar-luz|como-cambiar|por-que-gotea")).Count
  ```
  Debe devolver al menos **6** (idealmente 6, uno por guía).
- [ ] Verificar que el selector incluye los modelos del producto nuevo.
- [ ] Verificar que la pestaña del navegador muestra `tituloSeo` y el H1 muestra `titulo`.

### Fase D — Despliegue

- [ ] `git add .`
- [ ] `git commit -m "Añadir filtro [Marca] [Modelo] con sus 6 guías"`
- [ ] `git push`
- [ ] Esperar 1–2 minutos a que Cloudflare reconstruya.
- [ ] Verificar en producción las 8 URLs del producto nuevo (ficha, marca, 6 guías):
  ```powershell
  $urls = @(
    "https://repuestoselectro.lat/filtro-agua/[marca]/[slug]/",
    "https://repuestoselectro.lat/filtro-agua/[marca]/",
    "https://repuestoselectro.lat/filtro-agua/[marca]/[slug]/como-saber-si-es-original/",
    "https://repuestoselectro.lat/filtro-agua/[marca]/[slug]/no-encaja/",
    "https://repuestoselectro.lat/filtro-agua/[marca]/[slug]/original-vs-generico/",
    "https://repuestoselectro.lat/filtro-agua/[marca]/[slug]/como-reiniciar-luz/",
    "https://repuestoselectro.lat/filtro-agua/[marca]/[slug]/como-cambiar/",
    "https://repuestoselectro.lat/filtro-agua/[marca]/[slug]/por-que-gotea/"
  )
  foreach ($u in $urls) {
    try { $code = (Invoke-WebRequest -Uri $u -Method Head -UseBasicParsing -TimeoutSec 15).StatusCode }
    catch { $code = $_.Exception.Response.StatusCode.value__ }
    "{0}  {1}" -f $code, $u
  }
  ```
  Todas deben devolver `200`.
- [ ] Verificar el sitemap en producción:
  ```powershell
  (Invoke-WebRequest -Uri "https://repuestoselectro.lat/sitemap-0.xml" -UseBasicParsing).Content -split "`n" | Select-String "como-cambiar|por-que-gotea" | Measure-Object | Select-Object -ExpandProperty Count
  ```
  Debe devolver `2 × N` (con 6 productos, `12`).
- [ ] En Search Console, "Inspección de URLs" → "Solicitar indexación" para la ficha del producto nuevo y para las 2 guías nuevas.

---

## 6. Reglas fijas

1. **Solo originales verificados.** Si no hay original con stock y vendedor Amazon/fabricante, no se añade.
2. **El `<title>` no repite el número de pieza.** Ya está en la URL. Usa el espacio para el diferencial.
3. **El `<h1>` sí lleva el número de pieza.** Es la confirmación visual para el usuario.
4. **Guías específicas por producto.** No se comparten entre productos.
5. **Contenido redactado desde cero.** Nunca copiar de Google, de reseñas ni de la ficha de Amazon. Se extraen los datos y se reescriben.
6. **Sin precio ni envío en la ficha.** Eso lo muestra Amazon. En tablas comparativas, siempre con aviso "precios indicativos".
7. **Favicon con `?v=3`** en todas las páginas.
8. **Enlaces de afiliado con `rel="sponsored nofollow noopener noreferrer"`** y aviso "As an Amazon Associate..." cerca.
9. **Migas de pan en todas las páginas internas.**
10. **El bloque "Guías sobre este filtro"** existe en la ficha del producto y enlaza a las 6 guías (ver 7.8). No existe en las guías.
11. **Interlinking entre guías:** cada guía enlaza a las otras cinco del mismo producto.
12. **Selector con texto de ayuda de todas las marcas.** Cuando se añade una marca nueva, se añade una línea al `<ul>` del desplegable "¿Cómo saber el modelo de mi nevera?".
13. **`guiaCambioDetalle` y `guiaFugas` son obligatorios** en cada producto. Si falta uno, Astro explota al generar `como-cambiar/` o `por-que-gotea/` para ese producto (ver 7.7).
14. **Cuando se añade una guía nueva al producto**, hay que añadir también su `<li>` en el bloque manual "Guías sobre este filtro" de la ficha (ver 7.8).

---

## 7. Aprendizajes técnicos (para no repetir errores)

### 7.1 Corchetes en PowerShell

Los archivos y carpetas con corchetes (`[marca]`, `[slug]`) son problemáticos en PowerShell. `Test-Path`, `Remove-Item`, `Get-Content` interpretan `[...]` como patrón de globbing.

**Solución:** usar siempre `-LiteralPath`:

```powershell
Test-Path -LiteralPath "src\pages\filtro-agua\[marca]"
Remove-Item -Recurse -Force -LiteralPath "src\pages\filtro-agua\[marca]\modelo"
Get-ChildItem -LiteralPath "src\pages\filtro-agua\[marca]"
```

Y para escribir en archivos con corchetes en la ruta, usar `(Resolve-Path -LiteralPath $file).Path` en lugar de `(Resolve-Path $file)`.

### 7.2 Rutas de importación en Astro

El número de `../` es igual al número de carpetas entre el archivo y `src/`:

| Ubicación del archivo | Import |
|---|---|
| `src/pages/index.astro` | `../data/repuestos.json` |
| `src/pages/filtro-agua/index.astro` | `../../data/repuestos.json` |
| `src/pages/filtro-agua/[marca]/index.astro` | `../../../data/repuestos.json` |
| `src/pages/filtro-agua/[marca]/[slug]/index.astro` | `../../../../data/repuestos.json` |
| `src/pages/filtro-agua/[marca]/[slug]/como-cambiar.astro` | `../../../../data/repuestos.json` |
| `src/pages/filtro-agua/[marca]/[slug]/por-que-gotea.astro` | `../../../../data/repuestos.json` |

### 7.3 Codificación UTF-8

Los archivos `.astro` y `.json` deben guardarse en **UTF-8** (sin BOM). El Bloc de notas clásico de Windows 10 guarda en ANSI, lo cual rompe los acentos. **Usar siempre VS Code** (guarda en UTF-8 por defecto).

Verificar acentos:
```powershell
Select-String -LiteralPath "src\data\repuestos.json" -Pattern "número|síntomas" | Select-Object -First 2
```

### 7.4 Cloudflare Pages y `.well-known`

Cloudflare Pages, si no encuentra un `404.html` en la raíz del build, activa un modo "SPA fallback" que devuelve `index.html` con estado 200 para cualquier URL no encontrada. Eso rompe el `ai-catalog.json` de `.well-known`.

**Solución:** tener `public/404.html` con un 404 real. Eso desactiva el fallback y permite que `.well-known` se sirva correctamente.

**Nota sobre el conteo de `.html` en `dist`:** el build de Astro dice `53 page(s) built`, pero en `dist` hay `54` archivos `.html` porque el `404.html` viene de `public/` y se copia tal cual. No es un error.

### 7.5 La CSP y Cloudflare Web Analytics

Cloudflare inyecta su beacon de analíticas (`static.cloudflareinsights.com`) en el HTML. Si la CSP no lo permite, el script se bloquea y la consola muestra un error.

**Solución:** añadir `https://static.cloudflareinsights.com` a `script-src` y `https://cloudflareinsights.com` a `connect-src` en `_headers`.

### 7.6 El problema del "modelo" duplicado

Las 50 páginas de modelo (`/modelo/[modelo]/`) eran contenido duplicado: todas mostraban la misma tarjeta del mismo filtro. Google las trata como duplicadas y no aportan valor.

**Solución:** eliminar la carpeta `modelo`, hacer que los chips de la tabla de compatibilidad sean texto plano (no enlaces), y hacer que el selector navegue directamente a la ficha del producto.

### 7.7 Campos nuevos rompen el build en productos sin rellenar

Si añades un campo nuevo al schema (por ejemplo `guiaCambioDetalle` o `guiaFugas`) y solo lo rellenas en un producto, Astro falla al generar las páginas de los demás: `guiaCambioDetalle.intro` es `undefined` y la plantilla explota. El error típico es `Cannot read properties of undefined (reading 'intro')`.

**Solución:** cada vez que añadas un campo al schema, rellénalo en **todos** los productos del JSON antes de hacer `npm run build`. Verifica con:

```powershell
$r = Get-Content src\data\repuestos.json -Raw -Encoding UTF8 | ConvertFrom-Json
$r | ForEach-Object { "$($_.marca): cambio=$([bool]$_.guiaCambioDetalle) fugas=$([bool]$_.guiaFugas)" }
```

Todos deben salir con `cambio=True fugas=True`.

### 7.8 El bloque "Guías sobre este filtro" de la ficha es manual

La ficha (`src/pages/filtro-agua/[marca]/[slug]/index.astro`) tiene el bloque "Guías sobre este filtro" con los enlaces a las guías **escritos a mano** (no generados desde el JSON). Cuando añadas una guía nueva al producto (crear el `.astro` correspondiente), también hay que añadir su `<li>` en ese bloque.

**Síntoma:** la guía nueva se genera correctamente (`dist/filtro-agua/[marca]/[slug]/[nueva-guia]/index.html` existe y responde 200), pero la ficha del producto no la enlaza. Solo aparecen las que estaban en el HTML original (típicamente 3).

**Solución:** añadir el `<li>` con el `href` y los textos antes del `</ul>` del bloque, o refactorizar el bloque para que consuma un array `guias` compartido.

**Verificación local:**
```powershell
$html = Get-Content "dist\filtro-agua\[marca]\[slug]\index.html" -Raw
([regex]::Matches($html, "como-saber-si-es-original|no-encaja|original-vs-generico|como-reiniciar-luz|como-cambiar|por-que-gotea")).Count
```
Debe devolver **6** (uno por cada guía) o más si las guías se mencionan varias veces.

**Verificación en producción:**
```powershell
$html = (Invoke-WebRequest -Uri "https://repuestoselectro.lat/filtro-agua/[marca]/[slug]/" -UseBasicParsing).Content
([regex]::Matches($html, "como-reiniciar-luz|como-cambiar|por-que-gotea")).Count
```
Debe devolver 3 (o el número de guías nuevas que existan).

**Importante:** el HTML generado por Astro está minificado en una sola línea. `Select-String | Measure-Object` cuenta **líneas**, no coincidencias, así que devuelve `1` aunque haya 3 guías. Para contar coincidencias reales hay que usar `[regex]::Matches(...)`.

---

## 8. Comandos útiles

```powershell
cd C:\Users\mvx55\proyectos\repuestoseletro    # ir al proyecto
npm run dev                                     # servidor de desarrollo
npm run build                                   # build de producción
Get-Content dist\sitemap-0.xml                  # ver el sitemap
```

Verificar JSON:
```powershell
$r = Get-Content src\data\repuestos.json -Raw -Encoding UTF8 | ConvertFrom-Json
"Total: $($r.Count)"
$r | ForEach-Object { "$($_.marca) / $($_.slug)" }
$r | ForEach-Object { "$($_.marca): cambio=$([bool]$_.guiaCambioDetalle) fugas=$([bool]$_.guiaFugas)" }
```

Verificar páginas generadas:
```powershell
Get-ChildItem -Recurse dist\filtro-agua -Filter index.html | Select-Object FullName
Get-ChildItem -Recurse -LiteralPath "dist\filtro-agua" -Filter index.html |
  Where-Object { $_.FullName -match 'como-cambiar|por-que-gotea' } |
  Select-Object -ExpandProperty FullName
```

Contar `.html` en `dist` (debe ser `page(s) built` + 1 por el `404.html`):
```powershell
(Get-ChildItem -Recurse -LiteralPath "dist" -Filter *.html | Measure-Object).Count
```

Buscar en archivos con corchetes:
```powershell
Select-String -LiteralPath "src\pages\filtro-agua\[marca]\[slug]\index.astro" -Pattern "guiaOriginal"
Select-String -LiteralPath "dist\filtro-agua\lg\lt1000p\por-que-gotea\index.html" -Pattern "filtro LG gotea" -Quiet
```

Verificar producción:
```powershell
$urls = @(
  "https://repuestoselectro.lat/filtro-agua/lg/lt1000p/como-cambiar/",
  "https://repuestoselectro.lat/filtro-agua/lg/lt1000p/por-que-gotea/"
)
foreach ($u in $urls) {
  try { $code = (Invoke-WebRequest -Uri $u -Method Head -UseBasicParsing -TimeoutSec 15).StatusCode }
  catch { $code = $_.Exception.Response.StatusCode.value__ }
  "{0}  {1}" -f $code, $u
}
```

---

## 9. Próximos pasos (cuando se retome)

1. **Verificar en Search Console** que las 12 URLs nuevas (`como-cambiar/` y `por-que-gotea/`) se indexan (tarda unos días).
2. **Enviar el sitemap actualizado** desde Search Console (Sitemaps → `sitemap-index.xml` → "Enviar").
3. **Esperar datos de Search Console** (2–4 semanas) para ver qué marcas, modelos y guías traen más impresiones.
4. **Revisar Lighthouse** en la ficha de un producto (por si el peso de la imagen del schema afecta al LCP).
5. **Lote 1 de páginas transversales** (3 páginas, reutilizan datos del JSON, no necesitan contenido nuevo):
   - `/filtro-agua/cuando-cambiar-filtro/` → `sintomas`, `faqs`, `guiaProblemas` de los 6 productos.
   - `/filtro-agua/como-detectar-filtro-falso/` → `guiaOriginal` de los 6 productos.
   - `/filtro-agua/como-saber-modelo-nevera/` → `comoSaberModelo` de los 6 productos.
6. **Lote 2 de páginas por producto** (12 páginas, solo si el Lote 1 trae tráfico):
   - `por-que-sabe-a-plastico/` y `cuanto-dura-el-filtro/` por cada producto.
7. **Valorar AdSense** (con 53 páginas ya cumples de sobra el mínimo de contenido).
8. **Considerar Clarity** (Microsoft) como alternativa a Statcounter (sin cookies problemáticas).
```

---

**Guárdalo** sobrescribiendo `SISTEMA.md`, y cuando quieras lo commiteamos:

```powershell
git add SISTEMA.md
git commit -m "Actualizar SISTEMA.md: aprendizaje 7.8 y plan de paginas transversales"
git push
```

Pégame la salida del `git push` cuando lo hagas y cerramos esta sesión.