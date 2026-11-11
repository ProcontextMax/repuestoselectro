## `SISTEMA.md` actualizado — bloque completo para sobrescribir

Copia todo esto y sobrescribe `SISTEMA.md` (borra todo y pega):

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
| Samsung | DA97-17376B | `B071NFVVNG` | ✅ | 6/6 | 9 |
| LG | LT1000P | `B074HLRXMP` | ✅ | 6/6 | 0 |
| GE | XWFE | `B0882ZJ48W` | ✅ | 6/6 | 0 |
| Bosch | UltraClarity Pro | `B0973NDZTN` | ✅ | 6/6 | 0 |
| Frigidaire | EPTWFU01 | `B01BKWSHHE` | ✅ | 6/6 | 0 |
| Whirlpool | EveryDrop 1 | `B00UXG4WR8` | ✅ | 6/6 | 0 |

**Total:** 68 páginas generadas por Astro (home, categoría, 6 marcas, 6 fichas, 36 guías, 6 índices `/tecnicas/`, 9 artículos técnicos, 3 legales) + 1 `404.html` estático = 69 archivos `.html` en `dist`.
*Verificado con `npm run build`: `68 page(s) built`.*

**Artículos técnicos publicados (Samsung DA97-17376B):**

| # | Tema | Tipo | URL |
|---|---|---|---|
| 1 | `goteo-tras-cambiar` | diagnostico | `/filtro-agua/samsung/da97-17376b/tecnicas/goteo-tras-cambiar/` |
| 2 | `cuanto-dura` | mantenimiento | `/filtro-agua/samsung/da97-17376b/tecnicas/cuanto-dura/` |
| 3 | `gotea-solo-al-dispensar` | diagnostico | `/filtro-agua/samsung/da97-17376b/tecnicas/gotea-solo-al-dispensar/` |
| 4 | `flujo-debil-o-poca-agua` | diagnostico | `/filtro-agua/samsung/da97-17376b/tecnicas/flujo-debil-o-poca-agua/` |
| 5 | `ruido-silbido-despues-de-instalar` | diagnostico | `/filtro-agua/samsung/da97-17376b/tecnicas/ruido-silbido-despues-de-instalar/` |
| 6 | `jarra-autollenado-o-maquina-hielo-falla` | diagnostico | `/filtro-agua/samsung/da97-17376b/tecnicas/jarra-autollenado-o-maquina-hielo-falla/` |
| 7 | `sabor-a-plastico-despues-de-cambiar` | diagnostico | `/filtro-agua/samsung/da97-17376b/tecnicas/sabor-a-plastico-despues-de-cambiar/` |
| 8 | `empaque-clamshell-dificil-de-abrir` | instalacion | `/filtro-agua/samsung/da97-17376b/tecnicas/empaque-clamshell-dificil-de-abrir/` |
| 9 | `dispensador-no-funciona-sin-filtro` | diagnostico | `/filtro-agua/samsung/da97-17376b/tecnicas/dispensador-no-funciona-sin-filtro/` |

---

## 2. Estructura de archivos

```
src/
├── content.config.ts                     ← Schema de colecciones (raíz de src/)
├── content/
│   └── tecnicas/                         ← 1 .md por artículo técnico
│       ├── samsung-da97-17376b-goteo-tras-cambiar.md
│       ├── samsung-da97-17376b-cuanto-dura.md
│       ├── samsung-da97-17376b-gotea-solo-al-dispensar.md
│       ├── samsung-da97-17376b-flujo-debil-o-poca-agua.md
│       ├── samsung-da97-17376b-ruido-silbido-despues-de-instalar.md
│       ├── samsung-da97-17376b-jarra-autollenado-o-maquina-hielo-falla.md
│       ├── samsung-da97-17376b-sabor-a-plastico-despues-de-cambiar.md
│       ├── samsung-da97-17376b-empaque-clamshell-dificil-de-abrir.md
│       └── samsung-da97-17376b-dispensador-no-funciona-sin-filtro.md
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

Campos: `categoria`, `marca`, `slug`, `titulo`, `tituloSeo`, `numeroPieza`, `esOriginal`, `modelosCompatibles`, `compatibilidad`, `contraindicaciones`, `sintomas`, `comoSaberModelo`, `guiaCambioDetalle` (obligatorio), `guiaFugas` (obligatorio), `guiaResetLuz`, `guiaOriginal`, `guiaNoEncaja`, `guiaVsGenerico`, `textoOriginal`, `faqs`, `enlaceAfiliado`, `imagenSchema`, `asin`.

**Campos legacy:** `guiaCambio` y `guiaProblemas` se mantienen porque la ficha los consume; las páginas `/como-cambiar/` y `/por-que-gotea/` consumen los nuevos.

**IMPORTANTE:** en `repuestos.json`, el campo se llama `slug`. En el frontmatter de los `.md` técnicos, el campo se llama **`productoSlug`** (ver 7.11). Son nombres distintos a propósito para evitar la colisión del Content Layer.

---

## 5. Artículos técnicos (`src/content/tecnicas/*.md`)

### 5.1 Frontmatter obligatorio

```yaml
---
titulo: "H1 del artículo"                                  # 50-65 caracteres
tituloSeo: "Título para Google y pestaña"                  # máx. 65 caracteres
descripcion: "Meta description"                            # 120-160 caracteres (OBLIGATORIO, ver 7.13)
marca: "samsung"                                           # debe coincidir con repuestos.json
productoSlug: "da97-17376b"                                # OJO: productoSlug, NO slug (ver 7.11)
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

| `tipo` | Schema principal | Cuándo usarlo |
|---|---|---|
| `instalacion` | HowTo + FAQPage | Más del 60% es procedimental |
| `diagnostico` | HowTo + FAQPage | Troubleshooting con verificaciones |
| `mantenimiento` | HowTo + FAQPage | Calendario + verificaciones periódicas |
| `autenticidad` | Article + FAQPage | Análisis, no procedimiento |
| `compatibilidad` | Article + FAQPage | Tablas de referencia |
| `comparativa` | Article + FAQPage | Comparación entre opciones |

**Implementación actual:** el template `[tema].astro` emite siempre `Article` + `FAQPage`. Cuando se añada el soporte para `HowTo`, se hará en el template leyendo `tipo`. No requiere cambios en los `.md` ya escritos.

### 5.3 Reglas de autoría del cuerpo

El **cuerpo** del `.md` (después del frontmatter `---`) cumple:

- **NO** lleva H1 (va en `titulo` del frontmatter).
- **NO** lleva bloque E-E-A-T (el template lo renderiza desde `autor`, `revisor`, `fecha`).
- **NO** lleva FAQ (van en `faqs[]` del frontmatter).
- **NO** lleva enlaces al producto (los inyecta el template: CTA 1 tras el 3.er H2, CTA 2 antes de FAQ).
- **NO** lleva enlaces a Amazon ni a plataformas de compra.
- **NO** cita reseñas de terceros ni las parafrasea.
- **NO** menciona precios.
- **NO** atribuye frases a "la guía de Samsung", "el manual del fabricante" o similares sin cita exacta (ver 7.14).
- **NO** incluye cifras sin fuente verificable (ver 7.14).
- **SÍ** incluye el código de pieza literal en el primer párrafo y al menos 5 veces más.
- **SÍ** empieza con un bloque LLM (40-80 palabras, primera oración con sujeto de causa técnica).
- **SÍ** tiene al menos 3 H2 (para que el CTA 1 del medio quede bien ubicado).
- **SÍ** respeta las reglas del prompt del Módulo 2 (extensión, tabla con N°, decisión sin advertencias mezcladas, FAQ tercera persona, cero imperativos fuera de secciones permitidas).

### 5.4 Reglas del `tituloSeo`

Para técnicas, el `tituloSeo` **sí incluye el número de pieza**, porque la búsqueda del usuario es específica.

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
- [ ] **Verificar canibalización** con guías existentes del producto (ver 7.15). Si el tema solapa con una guía, cambiar el ángulo o descartar.
- [ ] Generar el artículo con la herramienta (o escribirlo desde cero).
- [ ] Convertirlo al formato `.md` con frontmatter. **Atención:** el campo del producto se llama `productoSlug`, NO `slug` (ver 7.11). Sin H1, sin E-E-A-T, sin FAQ en el cuerpo, sin CTAs, sin enlaces a Amazon.
- [ ] **Verificar `descripcion` entre 120-160 caracteres** (ver 7.13).
- [ ] **Verificar que no hay cifras sin fuente** (ver 7.14).
- [ ] **Verificar que no hay atribuciones vagas a Samsung/fabricante** (ver 7.14).
- [ ] **Verificar que no hay códigos de pieza no confirmados en `repuestos.json`** (ver 7.14).
- [ ] Verificar el `tituloSeo` (50-60 chars, keyword-first, código literal).
- [ ] Guardar el `.md` como `src/content/tecnicas/[marca]-[productoSlug]-[tema].md`.
- [ ] `npm run build` → el número total de páginas sube en 1.
- [ ] Verificar en local `/tecnicas/[tema]/` responde 200.
- [ ] Verificar que el CTA 1 está entre el primer y el último H2.
- [ ] Verificar que no hay `amazon.com` en el HTML.
- [ ] Verificar que el schema FAQPage está presente.
- [ ] Verificar que el índice `/tecnicas/` del producto muestra el nuevo artículo (contador +1).
- [ ] Verificar que la ficha del producto muestra el contador actualizado.
- [ ] Commit + push.
- [ ] Verificar en producción (200 + verificaciones).

### 5.6 Checklist de revisión de artículos generados por IA

**Antes de meter un artículo generado por IA, verificar SIEMPRE:**

| # | Verificación | Comando / método |
|---|---|---|
| 1 | `descripcion` entre 120-160 chars | `$desc.Length` |
| 2 | `tituloSeo` ≤ 65 chars | `$tituloSeo.Length` |
| 3 | Código literal en H1, LLM, tabla, FAQ | `-match "DA97-17376B"` varias veces |
| 4 | 8 H2 + 1 H3 fuera de FAQ | regex `<h2` |
| 5 | Tabla con 5-8 filas | inspección visual |
| 6 | 5-8 FAQ | inspección visual |
| 7 | Extensión 1.200-1.800 palabras | inspección visual |
| 8 | Cero Amazon | `-match "amazon\.com"` |
| 9 | Cero precios | `-match "\$|USD|precio"` |
| 10 | Cero atribuciones vagas ("el manual de Samsung") | `-match "manual de Samsung\|guía de Samsung\|documentación del fabricante"` |
| 11 | Cero cifras sin fuente (1,9 L/min, 30-125 PSI, 316 galones) | `-match "L/min\|GPM\|PSI\|galones"` |
| 12 | Cero códigos no verificados (DA97-08006C, HAF-CU1) | `-match "DA97-08006C\|HAF-CU1"` |
| 13 | Datos coherentes con `repuestos.json` (300 galones / 1.136 litros) | `-match "1\.136 litros"` |
| 14 | Diferencia clara con guías existentes | inspección manual |

**Si falla cualquier verificación, corregir antes del build.**

---

## 6. Reglas fijas

1. **Solo originales verificados.**
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
15. **Los artículos técnicos NO llevan enlaces a Amazon** ni CTAs de afiliado.
16. **El cuerpo del `.md` técnico NO lleva H1, ni E-E-A-T, ni FAQ, ni CTAs.**
17. **En el frontmatter de los `.md` técnicos, el campo del producto se llama `productoSlug`, NO `slug`** (ver 7.11).
18. **`descripcion` de los `.md` técnicos: 120-160 caracteres** (ver 7.13).
19. **Cero atribuciones vagas a Samsung/fabricante en los artículos técnicos** (ver 7.14).
20. **Cero cifras sin fuente verificable en los artículos técnicos** (ver 7.14).
21. **Verificar canibalización antes de crear un artículo técnico** (ver 7.15).

---

## 7. Aprendizajes técnicos (para no repetir errores)

### 7.1 Corchetes en PowerShell
Usar siempre `-LiteralPath`. Para escribir con `[System.IO.File]::WriteAllText` en rutas con corchetes, usar `(Resolve-Path -LiteralPath $file).Path` o `[System.IO.Directory]::CreateDirectory` (que ignora el globbing).

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
Si añades un campo al schema y solo lo rellenas en un producto, Astro explota. Rellenar en **todos** antes del `npm run build`.

### 7.8 El bloque "Guías sobre este filtro" de la ficha es manual
La ficha tiene el bloque con los enlaces **escritos a mano**. Cuando añadas una guía nueva, también hay que añadir su `<li>`.

### 7.9 Content Layer de Astro 5+: config en `src/content.config.ts`
Astro 5 cambió la API. Si pones la config en `src/content/config.ts`, el build falla con `[LegacyContentConfigError]`. **Solución:** mover a `src/content.config.ts` + `loader: glob(...)` en cada colección.

### 7.10 `build.log` se commitea por error
El `Tee-Object` y `Out-File` crean `build.log` en la raíz. Solución: `.gitignore` + `git rm --cached build.log`.

### 7.11 Colisión de `id` en Content Layer por el campo `slug`
**Síntoma:** 2 `.md` válidos, pero el build dice `60 page(s)` en vez de `61`. Solo se genera 1 artículo. `getCollection('tecnicas').length` devuelve `1`.

**Causa:** en Astro 5 Content Layer, si el frontmatter tiene un campo llamado `slug`, Astro lo usa como `id` de la entry. Si dos `.md` del mismo producto tienen el mismo `slug` (ej. `da97-17376b`), **colisionan** y Astro descarta uno silenciosamente.

**Solución:** renombrar `slug` → `productoSlug` en `config.ts`, todos los `.md`, y las referencias en `index.astro` y `[tema].astro`.

**Regla preventiva:** nunca llamar `slug` a un campo del frontmatter de Content Layer si puede repetirse entre archivos. Usar nombres específicos (`productoSlug`, `categoriaSlug`, `temaSlug`).

### 7.12 La sección de técnicas en la ficha es condicional pero manual
La ficha tiene un bloque `{tecnicas.length > 0 && (...)}` que muestra el botón "Ver guías técnicas →" solo si el producto tiene al menos 1 artículo técnico. **El bloque está escrito a mano.**

**Solución:** añadir import `getCollection`, const `tecnicas`, y el bloque condicional antes del bloque de Amazon.

### 7.13 `descripcion` debe estar entre 120-160 caracteres — NUEVO
El schema de `content.config.ts` valida `descripcion: z.string().min(120).max(160)`. Si el `.md` tiene una descripción de 118 o 119 caracteres, el build falla con:

```
[InvalidContentEntryDataError] tecnicas → [archivo] data does not match collection schema.
```

**Solución:** alargar la descripción 2-3 palabras hasta llegar a 120. Verificar antes del build con:

```powershell
$content = Get-Content -LiteralPath $f -Encoding UTF8 -Raw
$fm = ($content -split '---')[1]
$desc = [regex]::Match($fm, 'descripcion:\s*"(.*?)"').Groups[1].Value
"Descripcion: $($desc.Length) chars (schema: 120-160)"
```

**Causa raíz:** los artículos generados por IA a veces producen descripciones de 115-119 caracteres. Siempre verificar antes de meter.

### 7.14 Patrón de errores de los artículos generados por IA — NUEVO
Los artículos que produce la herramienta (o ChatGPT/Claude directamente) tienen **4 patrones de error recurrentes** que hay que corregir antes de publicar:

**A) Cifras sin fuente verificable:**
- ❌ "caudal nominal de 1,9 L/min", "0,5 GPM", "30-125 PSI", "2,5 galones"
- ✅ "caudal notablemente reducido", "aproximadamente cinco minutos"
- **Por qué:** el fabricante no publica esas cifras en la ficha del producto. Google penaliza datos inventados.
- **Cómo detectar:** `-match "L/min|GPM|PSI|galones"` + revisar si tienen fuente.

**B) Atribuciones vagas:**
- ❌ "el manual de Samsung indica", "la guía del fabricante describe", "las instrucciones de instalación indican"
- ✅ "el criterio práctico es", "la vida útil de referencia es"
- **Por qué:** no puedes citar la página exacta del manual. Es una atribución inventada.
- **Cómo detectar:** `-match "manual de Samsung|guía de Samsung|documentación del fabricante|instrucciones de instalación"`.

**C) Códigos de pieza no verificados:**
- ❌ "DA97-08006C", "HAF-CU1" (no están en `repuestos.json`)
- ✅ Solo los alias confirmados: `HAF-QIN`, `HAF-QIN/EXP`
- **Por qué:** introducir códigos que no existen rompe la credibilidad y puede confundir al usuario.
- **Cómo detectar:** `-match "DA97-08006C|HAF-CU1"` o comparar con `repuestos.json`.

**D) Datos contradictorios con el sitio:**
- ❌ "316 galones / 1.196 litros" cuando el sitio dice "300 galones / 1.136 litros"
- ✅ Coherencia total con `repuestos.json`
- **Por qué:** contradice tu propia ficha del producto y el resto de artículos.
- **Cómo detectar:** `-match "1\.196 litros|316 galones"` (debe ser `1.136 litros|300 galones`).

**Regla:** aplicar el checklist 5.6 a todo artículo generado por IA antes del build.

### 7.15 Canibalización de keywords entre guías y artículos técnicos — NUEVO
**Síntoma:** el artículo se genera bien, pero Google lo ve como competencia de una guía existente y ninguno de los dos posiciona.

**Ejemplos de canibalización detectados en esta sesión:**

| Guía existente | Artículo propuesto | ¿Canibaliza? |
|---|---|---|
| `/no-encaja/` | `no-se-asienta-o-no-gira` | **SÍ** — misma intención ("el filtro no encaja") |
| `/como-reiniciar-luz/` | `luz-no-se-apaga-despues-de-cambiar` | **SÍ** — misma intención ("apagar la luz") |
| `/flujo-debil-o-poca-agua/` | `jarra-autollenado` | **NO** — dispensador vs sistemas automáticos |
| `/goteo-tras-cambiar/` | `gotea-solo-al-dispensar` | **NO** — goteo continuo vs goteo al dispensar |

**Cómo detectar canibalización:**
1. Lee la guía existente. ¿Cuál es la intención del usuario?
2. Lee el artículo propuesto. ¿Cuál es la intención?
3. Si la intención es **la misma**, hay canibalización.
4. Si la intención es **distinta**, no la hay.

**Soluciones:**
- **A) Cambiar el ángulo del artículo** para que la intención sea distinta. Ej: `luz-sigue-encendida-despues-de-reset` (la guía es "cómo hacer el reset", el artículo es "por qué el reset falla").
- **B) Elegir otro tema** que no solape.
- **C) No crear el artículo** y mejorar la guía existente.

**Verificación antes de crear un artículo:**

```powershell
# Listar guías existentes del producto
Get-ChildItem -LiteralPath "src\pages\filtro-agua\[marca]\[slug]" -Filter *.astro | Select-Object -ExpandProperty Name
```

Si el tema del artículo propuesto se parece a una de esas guías, cambiar el ángulo.

### 7.16 El template de `[tema].astro` inyecta los CTAs automáticamente — NUEVO
El template `tecnicas/[tema].astro` inyecta **2 CTAs al producto** en el HTML final:

- **CTA 1** (después del 3.er o 4.º H2): "¿Ya sabes que este es tu filtro? Ver ficha completa del [Marca] [Código] →"
- **CTA 2** (antes de la FAQ): "Guía relacionada: Ficha completa del [Marca] [Código] — compatibilidad, todas las guías paso a paso."

**El `.md` NO debe incluir estos CTAs.** Si los incluyes, se duplican.

**Verificación:**
```powershell
$html = Get-Content -LiteralPath "dist\filtro-agua\...\tecnicas\[tema]\index.html" -Encoding UTF8 -Raw
$ctaCount = ([regex]::Matches($html, "Ver ficha completa del|Ficha completa del")).Count
# Debe ser 2 (uno por CTA), no 4
```

---

## 8. Comandos útiles

```powershell
cd C:\Users\mvx55\proyectos\repuestoseletro
npm run dev                                     # servidor de desarrollo
npm run build                                   # build de producción
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
$html = (Invoke-WebRequest -Uri "https://repuestoselectro.lat/filtro-agua/[marca]/[slug]/tecnicas/[tema]/" -UseBasicParsing).Content
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

Verificar longitud de `descripcion` de un `.md`:
```powershell
$content = Get-Content -LiteralPath "src\content\tecnicas\[archivo].md" -Encoding UTF8 -Raw
$fm = ($content -split '---')[1]
$desc = [regex]::Match($fm, 'descripcion:\s*"(.*?)"').Groups[1].Value
"Descripcion: $($desc.Length) chars (schema: 120-160)"
```

---

## 9. Próximos pasos

**Samsung DA97-17376B tiene 9 artículos técnicos publicados.** El cluster de diagnóstico/mantenimiento está completo.

**Temas pendientes por marca:**

| Marca | Temas sugeridos | Prioridad |
|---|---|---|
| Samsung | `que-pasa-si-no-cambio-el-filtro` (mantenimiento) | Baja |
| Samsung | `como-guardar-el-filtro-de-repuesto` (mantenimiento) | Baja |
| Samsung | `luz-sigue-encendida-despues-de-reset` (instalacion, ángulo diferenciado) | Media |
| LG | Replicar los 6 de Samsung con datos de LG | **Alta** |
| GE | Replicar los 6 con datos de GE (chip RFID) | Media |
| Bosch | Replicar los 6 | Media |
| Frigidaire | Replicar los 6 | Media |
| Whirlpool | Replicar los 6 | Media |

**Plan sugerido:**

1. **Replicar el cluster completo de Samsung a LG** (6 artículos, ~2 horas). Valida que el flujo escala a otra marca.
2. **Replicar a GE** (6 artículos). GE tiene la particularidad del chip RFID, que hace los artículos de autenticidad y reset más interesantes.
3. **Replicar a Bosch, Frigidaire y Whirlpool** (18 artículos, ~6 horas). Cobertura completa de las 6 marcas.
4. **Añadir los 2 de mantenimiento a Samsung** cuando el cluster esté replicado.
5. **Evaluar AdSense** con 65+ páginas.

**Nota:** no crear todos los artículos de golpe. Validar cada lote de 6 con el checklist 5.6 antes de pasar al siguiente.

---

## 10. Historial de sesiones

| Fecha | Qué se hizo | Páginas resultantes |
|---|---|---|
| Sesión 1 | Infraestructura `/tecnicas/` + 2 artículos Samsung | 61 |
| Sesión 2 | 4 artículos Samsung más | 65 |
| Sesión 3 | 4 artículos Samsung más (sabor, empaque, dispensador) | 68 |
| Sesión 3 (pendiente) | Replicar a LG | ~71 |
```

---

## Guárdalo y hacemos commit

1. **Abre `SISTEMA.md`** en VS Code.
2. **Ctrl+A** (seleccionar todo) → **Supr** (borrar).
3. **Pega** el bloque de arriba.
4. **Ctrl+S** (guardar).

**Verifica** que se guardó bien:

```powershell
$file = Join-Path (Get-Location).Path "SISTEMA.md"
$content = Get-Content -LiteralPath $file -Encoding UTF8 -Raw

if ($content -match "## 10\. Historial de sesiones") { "OK - historial presente" } else { "FALTA - historial" }
if ($content -match "### 7\.16 El template de") { "OK - aprendizaje 7.16" } else { "FALTA - 7.16" }
if ($content -match "### 7\.15 Canibalización") { "OK - aprendizaje 7.15" } else { "FALTA - 7.15" }
if ($content -match "### 7\.14 Patrón de errores") { "OK - aprendizaje 7.14" } else { "FALTA - 7.14" }
if ($content -match "### 7\.13 ") { "OK - aprendizaje 7.13" } else { "FALTA - 7.13" }
if ($content -match "65 page\(s\) built|65 páginas") { "OK - 65 paginas" } else { "FALTA - 65 paginas" }
if ($content -match "jarra-autollenado-o-maquina-hielo-falla") { "OK - articulo 6 listado" } else { "FALTA - articulo 6" }

$bytes = [System.IO.File]::ReadAllBytes($file)
if ($bytes[0] -eq 0xEF -and $bytes[1] -eq 0xBB -and $bytes[2] -eq 0xBF) { "AVISO - BOM" } else { "OK - UTF-8 sin BOM" }
```

**Deben salir 8 OK.**

**Pégame la salida.** Si todo está bien, hacemos commit y cerramos la sesión.