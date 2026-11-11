## ✅ Verificación en producción correcta

Todo OK:
- 3 URLs con `200`
- 3 verificaciones del índice en producción
- 2 verificaciones del sitemap en producción

**Total: 61 páginas en producción** (53 base + 6 índices + 2 artículos).

---

## `SISTEMA.md` actualizado (bloque completo para reemplazar)

Copia esto y sobrescribe `SISTEMA.md`:

```markdown
# Sistema de productos — repuestoselectro.lat

Documento de referencia para añadir un producto nuevo o un artículo técnico. Se sigue al pie de la letra.

**Última actualización:** noviembre de 2026.

---

## 1. Estado actual del proyecto

**Stack:** Astro 5 + Content Layer + `repuestos.json` + Cloudflare Pages + GitHub.
**Dominio:** `repuestoselectro.lat` (Cloudflare Pages, deploy automático desde `main`).
**Tag de afiliado:** `qqo-20`.

**Productos publicados:**

| Marca | Producto | ASIN | Ficha | Guías | Técnicas |
|---|---|---|---|---|---|
| Samsung | DA97-17376B | `B071NFVVNG` | ✅ | 6/6 | 2 |
| LG | LT1000P | `B074HLRXMP` | ✅ | 6/6 | 0 |
| GE | XWFE | `B0882ZJ48W` | ✅ | 6/6 | 0 |
| Bosch | UltraClarity Pro | `B0973NDZTN` | ✅ | 6/6 | 0 |
| Frigidaire | EPTWFU01 | `B01BKWSHHE` | ✅ | 6/6 | 0 |
| Whirlpool | EveryDrop 1 | `B00UXG4WR8` | ✅ | 6/6 | 0 |

**Total:** 61 páginas generadas por Astro (home, categoría, 6 marcas, 6 fichas, 36 guías, 6 índices `/tecnicas/`, 2 artículos técnicos, 3 legales) + 1 `404.html` estático = 62 archivos `.html` en `dist`.
*Verificado con `npm run build`: `61 page(s) built`.*

---

## 2. Estructura de archivos

```
src/
├── content.config.ts                     ← Schema de colecciones (raíz de src/)
├── content/
│   └── tecnicas/                         ← 1 .md por artículo técnico
│       ├── samsung-da97-17376b-goteo-tras-cambiar.md
│       └── samsung-da97-17376b-cuanto-dura.md
├── data/
│   └── repuestos.json                    ← todos los productos
├── components/
│   ├── Header.astro
│   ├── MigasPan.astro
│   └── SelectorNevera.astro
└── pages/
    ├── index.astro
    ├── afiliados/index.astro
    ├── privacidad/index.astro
    ├── aviso-legal/index.astro
    └── filtro-agua/
        ├── index.astro
        └── [marca]/
            ├── index.astro
            └── [slug]/
                ├── index.astro               ← FICHA DEL PRODUCTO (pilar)
                ├── como-saber-si-es-original.astro
                ├── no-encaja.astro
                ├── original-vs-generico.astro
                ├── como-reiniciar-luz.astro
                ├── como-cambiar.astro
                ├── por-que-gotea.astro
                └── tecnicas/
                    ├── index.astro            ← listado de técnicas del producto
                    └── [tema].astro           ← template del artículo técnico
```

**Archivos en `public/`:** `favicon.svg`, `favicon.ico`, `robots.txt`, `llms.txt`, `404.html`, `_headers`, `_redirects`, `.well-known/ai-catalog.json`, `.well-known/ard.json`.

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
/filtro-agua/[marca]/[slug]/tecnicas/               listado de técnicas
/filtro-agua/[marca]/[slug]/tecnicas/[tema]/        artículo técnico
/afiliados/  /privacidad/  /aviso-legal/
/.well-known/ai-catalog.json  /.well-known/ard.json
/llms.txt  /robots.txt  /sitemap-index.xml  /sitemap-0.xml
```

---

## 4. Esquema del JSON por producto (`repuestos.json`)

Sin cambios respecto a versiones anteriores. Campos: `categoria`, `marca`, `slug`, `titulo`, `tituloSeo`, `numeroPieza`, `esOriginal`, `modelosCompatibles`, `compatibilidad`, `contraindicaciones`, `sintomas`, `comoSaberModelo`, `guiaCambioDetalle` (obligatorio), `guiaFugas` (obligatorio), `guiaResetLuz`, `guiaOriginal`, `guiaNoEncaja`, `guiaVsGenerico`, `textoOriginal`, `faqs`, `enlaceAfiliado`, `imagenSchema`, `asin`.

**Campos legacy:** `guiaCambio` (array) y `guiaProblemas` (array) se mantienen porque la ficha los consume; las páginas `/como-cambiar/` y `/por-que-gotea/` consumen los nuevos.

**IMPORTANTE:** en `repuestos.json`, el campo se llama `slug`. En el frontmatter de los `.md` técnicos, el campo se llama **`productoSlug`** (ver 5.1 y 7.11). Son nombres distintos a propósito para evitar la colisión del Content Layer.

---

## 5. Artículos técnicos (`src/content/tecnicas/*.md`)

Los artículos técnicos son piezas de contenido profundo por producto. No son fichas ni guías estructuradas: son artículos tipo blog técnico, de 1.200 a 1.800 palabras, con tabla de verificaciones y FAQ.

### 5.1 Frontmatter obligatorio

```yaml
---
titulo: "H1 del artículo"                                  # 50-65 caracteres
tituloSeo: "Título para Google y pestaña"                  # máx. 65 caracteres
descripcion: "Meta description"                            # 120-160 caracteres
marca: "samsung"                                           # debe coincidir con repuestos.json
productoSlug: "da97-17376b"                                # OJO: se llama productoSlug, NO slug (ver 7.11)
tema: "goteo-tras-cambiar"                                 # URL slug del artículo
tipo: "diagnostico"                                        # ver tabla 5.2
keyword: "goteo filtro samsung da97-17376b"
fecha: 2026-11-11                                          # YYYY-MM-DD
autor: "Equipo editorial de repuestoselectro.lat"          # opcional, tiene default
revisor: "Revisión técnica pendiente"                      # opcional, tiene default
faqs:                                                       # opcional, 5-8 recomendado
  - q: "¿Pregunta?"
    a: "Respuesta."
---
```

### 5.2 Tipos y schema estructurado

El schema (`Article` vs `HowTo`) se decide por el campo `tipo`:

| `tipo` | Schema principal | Cuándo usarlo |
|---|---|---|
| `instalacion` | HowTo + FAQPage | Más del 60% es procedimental (pasos de instalación) |
| `diagnostico` | HowTo + FAQPage | Troubleshooting con verificaciones paso a paso |
| `mantenimiento` | HowTo + FAQPage | Calendario + verificaciones periódicas |
| `autenticidad` | Article + FAQPage | Análisis, no procedimiento |
| `compatibilidad` | Article + FAQPage | Tablas de referencia, no procedimiento |
| `comparativa` | Article + FAQPage | Comparación entre opciones |

**Implementación actual:** el template `[tema].astro` emite siempre `Article` + `FAQPage`. Cuando se añada el soporte para `HowTo`, se hará en el template leyendo `tipo`. No requiere cambios en los `.md` ya escritos.

### 5.3 Reglas de autoría del cuerpo

El **cuerpo** del `.md` (después del frontmatter `---`) cumple:

- **NO** lleva H1 (va en `titulo` del frontmatter).
- **NO** lleva bloque E-E-A-T (el template lo renderiza desde `autor`, `revisor`, `fecha`).
- **NO** lleva FAQ (van en `faqs[]` del frontmatter).
- **NO** lleva enlaces al producto (los inyecta el template automáticamente: CTA 1 tras el 3.er H2, CTA 2 antes de FAQ).
- **NO** lleva enlaces a Amazon ni a plataformas de compra.
- **NO** cita reseñas de terceros ni las parafrasea.
- **NO** menciona precios.
- **SÍ** incluye el código de pieza literal en el primer párrafo y al menos 5 veces más.
- **SÍ** empieza con un bloque LLM (40-80 palabras, primera oración con sujeto de causa técnica).
- **SÍ** tiene al menos 3 H2 (para que el CTA 1 del medio quede bien ubicado).
- **SÍ** respeta las reglas del prompt del Módulo 2 (extensión, tabla con N°, decisión sin advertencias mezcladas, FAQ tercera persona, cero imperativos fuera de secciones permitidas).

### 5.4 Reglas del `tituloSeo`

**Excepción a la regla general de la ficha.** Para técnicas, el `tituloSeo` **sí incluye el número de pieza**, porque la búsqueda del usuario es específica. Reglas:

1. **50-60 caracteres**.
2. **Keyword principal al principio**.
3. **Número de pieza literal** si el artículo es específico de un producto.
4. **Sin clickbait ni imperativos**.
5. **Diferente del H1**, aunque compartan keywords.

Ejemplo válido:
- H1: `"Goteo tras cambiar DA97-17376B: diagnóstico de fuga"` (52)
- SEO: `"Por qué gotea el filtro Samsung DA97-17376B al cambiarlo"` (55)

### 5.5 Flujo de autoría (checklist)

- [ ] Elegir producto y tema (`tema` = slug de URL, en kebab-case).
- [ ] Generar el artículo con la herramienta (o escribirlo desde cero).
- [ ] Convertirlo al formato `.md` con frontmatter. **Atención:** el campo del producto se llama `productoSlug`, NO `slug` (ver 7.11). Sin H1, sin E-E-A-T, sin FAQ en el cuerpo, sin CTAs, sin enlaces a Amazon.
- [ ] Verificar el `tituloSeo` (50-60 chars, keyword-first, código literal).
- [ ] Verificar `descripcion` (120-160 chars).
- [ ] Guardar el `.md` como `src/content/tecnicas/[marca]-[productoSlug]-[tema].md`.
- [ ] `npm run build` → el número total de páginas sube en 1.
- [ ] Verificar en local `/tecnicas/[tema]/` responde 200.
- [ ] Verificar que el CTA 1 está entre el primer y el último H2.
- [ ] Verificar que no hay `amazon.com` en el HTML.
- [ ] Verificar que el schema FAQPage está presente.
- [ ] Verificar que el índice `/tecnicas/` del producto ahora muestra el nuevo artículo (contador +1).
- [ ] Commit + push.
- [ ] Verificar en producción (200 + 4 verificaciones OK).

---

## 6. Reglas fijas

1. **Solo originales verificados.** Si no hay original con stock y vendedor Amazon/fabricante, no se añade.
2. **El `<title>` de la ficha no repite el número de pieza.** **Excepción:** los artículos técnicos sí lo llevan (ver 5.4).
3. **El `<h1>` sí lleva el número de pieza.**
4. **Guías y técnicas específicas por producto.**
5. **Contenido redactado desde cero.**
6. **Sin precio ni envío en la ficha.**
7. **Favicon con `?v=3`.**
8. **Enlaces de afiliado con `rel="sponsored nofollow noopener noreferrer"`.**
9. **Migas de pan en todas las páginas internas.**
10. **El bloque "Guías sobre este filtro"** existe en la ficha del producto y enlaza a las 6 guías (ver 7.8).
11. **Interlinking entre guías:** cada guía enlaza a las otras cinco del mismo producto.
12. **Selector con texto de ayuda de todas las marcas.**
13. **`guiaCambioDetalle` y `guiaFugas` son obligatorios** (ver 7.7).
14. **Cuando se añade una guía nueva**, hay que añadir su `<li>` en el bloque manual de la ficha (ver 7.8).
15. **Los artículos técnicos NO llevan enlaces a Amazon** ni CTAs de afiliado. Solo los 2 CTAs al producto que inyecta el template.
16. **El cuerpo del `.md` técnico NO lleva H1, ni E-E-A-T, ni FAQ, ni CTAs.**
17. **En el frontmatter de los `.md` técnicos, el campo del producto se llama `productoSlug`, NO `slug`** (ver 7.11).

---

## 7. Aprendizajes técnicos (para no repetir errores)

### 7.1 Corchetes en PowerShell
Usar siempre `-LiteralPath`. Para escribir con `[System.IO.File]::WriteAllText` en rutas con corchetes, usar `(Resolve-Path -LiteralPath $file).Path` o `[System.IO.Directory]::CreateDirectory` (que ignora el globbing de PowerShell).

### 7.2 Rutas de importación en Astro
El número de `../` es igual al número de carpetas entre el archivo y `src/`. En `tecnicas/index.astro` y `tecnicas/[tema].astro` son **5 niveles** (`../../../../../`).

### 7.3 Codificación UTF-8
Los `.astro`, `.json` y `.md` en **UTF-8 sin BOM**. `Get-Content -Raw` sin `-Encoding UTF8` lee con ANSI y rompe los `-match` con tildes. **Siempre** `Get-Content -Encoding UTF8 -Raw`.

### 7.4 Cloudflare Pages y `.well-known`
Si no hay `404.html`, Cloudflare activa SPA fallback y rompe `.well-known`. Tener siempre `public/404.html`.

### 7.5 La CSP y Cloudflare Web Analytics
`https://static.cloudflareinsights.com` en `script-src` y `https://cloudflareinsights.com` en `connect-src`.

### 7.6 El problema del "modelo" duplicado
No crear páginas `/modelo/[modelo]/` que solo cambien una tarjeta. Google las trata como duplicadas.

### 7.7 Campos nuevos rompen el build en productos sin rellenar
Si añades un campo al schema y solo lo rellenas en un producto, Astro explota al generar las páginas de los demás. Rellenar en **todos** antes del `npm run build`.

### 7.8 El bloque "Guías sobre este filtro" de la ficha es manual
La ficha (`src/pages/filtro-agua/[marca]/[slug]/index.astro`) tiene el bloque "Guías sobre este filtro" con los enlaces **escritos a mano**. Cuando añadas una guía nueva, también hay que añadir su `<li>` en ese bloque.

### 7.9 Content Layer de Astro 5+: config en `src/content.config.ts`, no en `src/content/config.ts`
**Astro 5** cambió la API de Content Collections. Si pones la config en `src/content/config.ts`, el build falla con `[LegacyContentConfigError]`. **Solución:**

1. Mover el archivo a **`src/content.config.ts`** (raíz de `src/`, no dentro de `content/`).
2. Cada colección debe tener un **`loader`**:
   ```typescript
   import { defineCollection, z } from 'astro:content';
   import { glob } from 'astro/loaders';

   const tecnicas = defineCollection({
     loader: glob({ pattern: '**/*.md', base: './src/content/tecnicas' }),
     schema: z.object({ /* ... */ }),
   });

   export const collections = { tecnicas };
   ```

**Sin el `loader`,** Astro no lee los `.md` y `getCollection('tecnicas')` devuelve array vacío.

### 7.10 `build.log` se commitea por error
El `Tee-Object` y `Out-File` de PowerShell crean `build.log` en la raíz. Solución:

```powershell
Add-Content -LiteralPath ".gitignore" -Value "build.log" -Encoding UTF8
git rm --cached build.log
```

**Alternativa más limpia:** no usar `Tee-Object` ni `Out-File`. Hacer `npm run build` directamente.

### 7.11 Colisión de `id` en Content Layer por el campo `slug` — NUEVO Y CRÍTICO
**Síntoma:** tienes 2 `.md` en `src/content/tecnicas/`, ambos válidos, pero el build dice `60 page(s)` en vez de `61`. Solo se genera 1 artículo. `getCollection('tecnicas').length` devuelve `1` aunque hay 2 archivos.

**Causa:** en Astro 5 Content Layer, si el frontmatter tiene un campo llamado `slug`, Astro lo usa como `id` de la entry. Si dos `.md` del mismo producto tienen el mismo `slug` (ej. `da97-17376b`), **colisionan** y Astro descarta uno silenciosamente (sin error, sin warning).

**Solución:** renombrar el campo `slug` → `productoSlug` en:
1. `src/content.config.ts` (schema)
2. Todos los `.md` (frontmatter)
3. `src/pages/filtro-agua/[marca]/[slug]/tecnicas/index.astro` (`t.data.slug` → `t.data.productoSlug`)
4. `src/pages/filtro-agua/[marca]/[slug]/tecnicas/[tema].astro` (`entry.data.slug` → `entry.data.productoSlug` en las referencias al producto)

Al no llamarse `slug`, Astro usa el **nombre del archivo** como `id`, que es único por archivo.

**Comando de migración (si vuelve a pasar):**

```powershell
# 1. En los .md
Get-ChildItem "src\content\tecnicas" -Filter *.md | ForEach-Object {
  $c = Get-Content -LiteralPath $_.FullName -Encoding UTF8 -Raw
  $c = $c -replace "(?m)^slug: ", "productoSlug: "
  [System.IO.File]::WriteAllText($_.FullName, $c, (New-Object System.Text.UTF8Encoding $false))
}
```

**Verificación del síntoma:** si el build da menos páginas de las esperadas y el índice `/tecnicas/` solo muestra 1 artículo, es este bug. Comprobar con:

```powershell
# En el getStaticPaths, añadir temporalmente:
console.log('Total tecnicas:', tecnicas.length);
tecnicas.forEach(t => console.log('  id:', t.id, '| tema:', t.data.tema));
```

Si `Total tecnicas` es menor que el número de `.md` en disco, es colisión de `id`.

**Regla preventiva:** nunca llamar `slug` a un campo del frontmatter de Content Layer si puede repetirse entre archivos. Usar nombres específicos (`productoSlug`, `categoriaSlug`, `temaSlug`).

---
### 7.12 La sección de técnicas en la ficha es condicional pero manual

La ficha (`src/pages/filtro-agua/[marca]/[slug]/index.astro`) tiene un bloque `{tecnicas.length > 0 && (...)}` que muestra el botón "Ver guías técnicas →" solo si el producto tiene al menos 1 artículo técnico. **El bloque está escrito a mano** (no se genera desde una lista compartida), igual que el bloque "Guías sobre este filtro" (ver 7.8).

**Síntoma:** la página `/tecnicas/` existe y responde 200, pero es huérfana (no se llega a ella desde la ficha). El usuario solo puede llegar escribiendo la URL a mano. Google la indexa pero no recibe autoridad interna.

**Solución:** añadir el bloque `{tecnicas.length > 0 && (...)}` antes del bloque de Amazon en la ficha. Requiere tres cambios en `index.astro`:

1. **Import:** `import { getCollection } from 'astro:content';`
2. **Const:** `const tecnicas = (await getCollection('tecnicas')).filter(t => t.data.marca === filtro.marca && t.data.productoSlug === filtro.slug);`
3. **Bloque condicional** antes del bloque de Amazon con el botón y el contador.

**Cuándo se muestra:** solo si `tecnicas.length > 0`. Las marcas sin artículos técnicos (LG, GE, Bosch, Frigidaire, Whirlpool por ahora) no muestran la sección vacía.

**Verificación local:**
```powershell
$f = "dist\filtro-agua\samsung\da97-17376b\index.html"
$html = Get-Content -LiteralPath $f -Encoding UTF8 -Raw
if ($html -match "Ver guías técnicas") { "OK - boton visible" } else { "REVISAR" }
if ($html -match "2 artículos técnicos") { "OK - contador = 2" } else { "REVISAR" }

## 8. Comandos útiles

```powershell
cd C:\Users\mvx55\proyectos\repuestoseletro
npm run dev                                     # servidor de desarrollo
npm run build                                   # build de producción
```

Verificar JSON:
```powershell
$r = Get-Content src\data\repuestos.json -Raw -Encoding UTF8 | ConvertFrom-Json
"Total: $($r.Count)"
```

Verificar total de páginas:
```powershell
npm run build 2>&1 | Select-String "page\(s\) built"
```

Verificar técnicas generadas:
```powershell
Get-ChildItem -Recurse -LiteralPath "dist\filtro-agua" -Filter index.html |
  Where-Object { $_.FullName -match 'tecnicas' } |
  Select-Object -ExpandProperty FullName
```

Verificar un artículo en producción:
```powershell
$html = (Invoke-WebRequest -Uri "https://repuestoselectro.lat/filtro-agua/samsung/da97-17376b/tecnicas/goteo-tras-cambiar/" -UseBasicParsing).Content
if ($html -match "amazon\.com") { "REVISAR - contiene Amazon" } else { "OK - cero Amazon" }
if ($html -match "FAQPage") { "OK - schema FAQPage" } else { "REVISAR - FAQPage" }
```

Verificar los 6 índices `/tecnicas/`:
```powershell
$marcas = @("samsung/da97-17376b","lg/lt1000p","ge/xwfe","bosch/ultraclarity-pro","frigidaire/eptwfu01","whirlpool/everydrop-1")
foreach ($m in $marcas) {
  $u = "https://repuestoselectro.lat/filtro-agua/$m/tecnicas/"
  try { $code = (Invoke-WebRequest -Uri $u -Method Head -UseBasicParsing -TimeoutSec 15).StatusCode }
  catch { $code = "ERROR" }
  "{0}  {1}" -f $code, $u
}
```

---

## 9. Próximos pasos

1. **Replicar `cuanto-dura` a los otros 5 productos** (LG, GE, Bosch, Frigidaire, Whirlpool). Mismo `tema`, mismo `tipo: mantenimiento`, cambia `marca`, `productoSlug`, `keyword`. 5 artículos nuevos.
2. **Añadir `goteo-tras-cambiar` a los otros 5 productos** (mismo `tema`, `tipo: diagnostico`). 5 artículos nuevos.
3. **Implementar schema `HowTo`** para los tipos `instalacion`, `diagnostico` y `mantenimiento` en `[tema].astro` (actualmente emite `Article` siempre).
4. **Verificar en Search Console** que las URLs nuevas (`/tecnicas/` + 2 artículos) se indexan.
5. **Enviar el sitemap actualizado** desde Search Console.
6. **Revisar Lighthouse** en la ficha de un producto y en un artículo técnico.
7. **Valorar AdSense** (con 61 páginas ya cumples de sobra el mínimo).
8. **Considerar Clarity** (Microsoft) como alternativa a Statcounter.
```

---

**Guarda el archivo** y dime si quieres:

- **Verificar** que se guardó bien (comando de PowerShell).
- **Commit + push** directamente.
- **Pasar al siguiente paso** (replicar `cuanto-dura` a los 5 productos restantes).

¿Qué hacemos?