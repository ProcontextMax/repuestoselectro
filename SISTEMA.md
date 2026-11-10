Perfecto. Ahora que el `llms.txt` está actualizado, el último paso para cerrar técnicamente el proyecto es actualizar el archivo de documentación interna **`SISTEMA.md`** para que refleje la 5ª marca.

**Paso único — actualizar `SISTEMA.md` con Frigidaire**

Abre:

```powershell
code SISTEMA.md
```

Borra todo (`Ctrl + A`, `Supr`) y pega esta versión actualizada:

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
| Samsung | DA97-17376B | `B071NFVVNG` | ✅ | 3/3 |
| LG | LT1000P | `B074HLRXMP` | ✅ | 3/3 |
| GE | XWFE | `B0882ZJ48W` | ✅ | 3/3 |
| Bosch | UltraClarity Pro | `B0973NDZTN` | ✅ | 3/3 |
| Frigidaire | EPTWFU01 | `B01BKWSHHE` | ✅ | 3/3 |

**Total:** 30 páginas generadas (home, categoría, 5 marcas, 5 fichas, 15 guías, 3 legales).

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
                ├── index.astro           ← FICHA DEL PRODUCTO (pilar)
                ├── como-saber-si-es-original.astro
                ├── no-encaja.astro
                └── original-vs-generico.astro
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
  "guiaCambio": ["paso 1", "paso 2"],
  "guiaReset": ["método 1", "método 2"],
  "guiaProblemas": [
    { "pregunta": "...", "respuesta": "..." }
  ],
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
- [ ] `guiaCambio`, `guiaReset`, `guiaProblemas` **específicos** del producto.
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
  ```

### Fase C — Verificación local

- [ ] `npm run build` sin errores. El número de páginas debe ser **5 × número de productos + 5** (home, categoría, 3 legales).
- [ ] Verificar que las 5 páginas del producto nuevo se generan:
  ```powershell
  Get-ChildItem -Recurse "dist\filtro-agua\[marca]" -Filter *.html | Select-Object FullName
  ```
- [ ] Verificar el sitemap:
  ```powershell
  Get-Content dist\sitemap-0.xml
  ```
- [ ] Verificar que las guías del producto nuevo muestran **su** contenido, no el de otro producto.
- [ ] Verificar que el interlinking funciona: cada guía enlaza a las otras dos del mismo producto.
- [ ] Verificar que el selector incluye los modelos del producto nuevo.
- [ ] Verificar que la pestaña del navegador muestra `tituloSeo` y el H1 muestra `titulo`.

### Fase D — Despliegue

- [ ] `git add .`
- [ ] `git commit -m "Añadir filtro [Marca] [Modelo] con sus 3 guías"`
- [ ] `git push`
- [ ] Esperar 1–2 minutos a que Cloudflare reconstruya.
- [ ] Verificar en producción:
  - Ficha del producto: `https://repuestoselectro.lat/filtro-agua/[marca]/[slug]/`
  - Página de marca: `https://repuestoselectro.lat/filtro-agua/[marca]/`
  - Las 3 guías.
  - El sitemap: `https://repuestoselectro.lat/sitemap-0.xml`
- [ ] En Search Console, si quieres acelerar la indexación, usar "Inspección de URLs" → "Solicitar indexación" para la ficha del producto nuevo.

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
10. **El bloque "Guías sobre este filtro"** solo existe en la ficha del producto, no en las guías.
11. **Interlinking entre guías:** cada guía enlaza a las otras dos del mismo producto.
12. **Selector con texto de ayuda de todas las marcas.** Cuando se añade una marca nueva, se añade una línea al `<ul>` del desplegable "¿Cómo saber el modelo de mi nevera?".

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

### 7.2 Rutas de importación en Astro

El número de `../` es igual al número de carpetas entre el archivo y `src/`:

| Ubicación del archivo | Import |
|---|---|
| `src/pages/index.astro` | `../data/repuestos.json` |
| `src/pages/filtro-agua/index.astro` | `../../data/repuestos.json` |
| `src/pages/filtro-agua/[marca]/index.astro` | `../../../data/repuestos.json` |
| `src/pages/filtro-agua/[marca]/[slug]/index.astro` | `../../../../data/repuestos.json` |
| `src/pages/filtro-agua/[marca]/[slug]/como-saber-si-es-original.astro` | `../../../../data/repuestos.json` |

### 7.3 Codificación UTF-8

Los archivos `.astro` y `.json` deben guardarse en **UTF-8** (sin BOM). El Bloc de notas clásico de Windows 10 guarda en ANSI, lo cual rompe los acentos. **Usar siempre VS Code** (guarda en UTF-8 por defecto).

Verificar acentos:
```powershell
Select-String -LiteralPath "src\data\repuestos.json" -Pattern "número|síntomas" | Select-Object -First 2
```

### 7.4 Cloudflare Pages y `.well-known`

Cloudflare Pages, si no encuentra un `404.html` en la raíz del build, activa un modo "SPA fallback" que devuelve `index.html` con estado 200 para cualquier URL no encontrada. Eso rompe el `ai-catalog.json` de `.well-known`.

**Solución:** tener `public/404.html` con un 404 real. Eso desactiva el fallback y permite que `.well-known` se sirva correctamente.

### 7.5 La CSP y Cloudflare Web Analytics

Cloudflare inyecta su beacon de analíticas (`static.cloudflareinsights.com`) en el HTML. Si la CSP no lo permite, el script se bloquea y la consola muestra un error.

**Solución:** añadir `https://static.cloudflareinsights.com` a `script-src` y `https://cloudflareinsights.com` a `connect-src` en `_headers`.

### 7.6 El problema del "modelo" duplicado

Las 50 páginas de modelo (`/modelo/[modelo]/`) eran contenido duplicado: todas mostraban la misma tarjeta del mismo filtro. Google las trata como duplicadas y no aportan valor.

**Solución:** eliminar la carpeta `modelo`, hacer que los chips de la tabla de compatibilidad sean texto plano (no enlaces), y hacer que el selector navegue directamente a la ficha del producto.

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
```

Verificar páginas generadas:
```powershell
Get-ChildItem -Recurse dist\filtro-agua -Filter index.html | Select-Object FullName
```

Buscar en archivos con corchetes:
```powershell
Select-String -LiteralPath "src\pages\filtro-agua\[marca]\[slug]\index.astro" -Pattern "guiaOriginal"
```

---

## 9. Próximos pasos (cuando se retome)

1. **Verificar en Search Console** que las nuevas URLs de Frigidaire se indexan (tarda unos días).
2. **Añadir una 6ª marca** siguiendo el sistema (Whirlpool, etc.).
3. **Esperar datos de Search Console** (2–4 semanas) para ver qué marcas y modelos traen más impresiones.
4. **Revisar Lighthouse** después de añadir Frigidaire (por si el peso de la imagen del schema afecta al LCP).
5. **Valorar AdSense** (con 30 páginas, ya cumples el mínimo de contenido).
6. **Considerar Clarity** (Microsoft) como alternativa a Statcounter (sin cookies problemáticas).
```

