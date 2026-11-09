markdown
# Sistema de productos — repuestoselectro.lat

Documento de referencia para añadir un producto nuevo. Se sigue al pie de la letra.

---

## 1. Estructura de archivos
src/
├── data/
│ └── repuestos.json ← todos los productos
├── components/
│ ├── Header.astro ← logo + navegación
│ ├── MigasPan.astro ← migas de pan (recibe niveles[])
│ └── SelectorNevera.astro ← desplegable marca → modelo
└── pages/
├── index.astro ← home (tarjetas de categorías)
├── afiliados/index.astro
├── privacidad/index.astro
├── aviso-legal/index.astro
└── filtro-agua/
├── index.astro ← categoría
└── [marca]/
├── index.astro ← marca (lista de productos)
├── modelo/[modelo].astro ← resultados por modelo de nevera
└── [slug]/
├── index.astro ← FICHA DEL PRODUCTO (pilar)
├── como-saber-si-es-original.astro
├── no-encaja.astro
└── original-vs-generico.astro

text

## 2. Estructura de URLs
/ home
/filtro-agua/ categoría
/filtro-agua/[marca]/ marca
/filtro-agua/[marca]/modelo/[modelo]/ resultados por modelo
/filtro-agua/[marca]/[slug]/ ficha del producto (pilar)
/filtro-agua/[marca]/[slug]/como-saber-si-es-original/
/filtro-agua/[marca]/[slug]/no-encaja/
/filtro-agua/[marca]/[slug]/original-vs-generico/
/afiliados/ /privacidad/ /aviso-legal/

text

## 3. Esquema del JSON por producto

```json
{
  "categoria": "filtro-agua",
  "categoriaNombre": "Filtros de agua para nevera",
  "marca": "samsung",                    // slug de marca (minúsculas)
  "marcaNombre": "Samsung",              // nombre visible
  "slug": "da97-17376b",                 // slug del producto (minúsculas)
  "titulo": "Filtro Samsung DA97-17376B — Original",   // H1 visible
  "tituloSeo": "...",                    // <title> (sin número de pieza, con diferencial)
  "numeroPieza": "DA97-17376B",
  "alias": ["HAF-QIN", "HAF-QIN/EXP"],
  "esOriginal": true,
  "fabricante": "Samsung",
  "tipoFiltro": "Cuadrado (bloque de carbón)",
  "modelosCompatibles": ["...", "..."],  // lista plana → selector
  "compatibilidad": {
    "familias": [
      { "nombre": "Familia 1", "modelos": ["..."] },
      { "nombre": "Familia 2", "modelos": ["..."] }
    ]
  },
  "contraindicaciones": ["...", "..."],
  "sintomas": ["...", "..."],
  "comoSaberModelo": "...",
  "guiaCambio": ["paso 1", "paso 2", "..."],
  "guiaReset": ["método 1", "método 2", "..."],
  "guiaProblemas": [
    { "pregunta": "...", "respuesta": "..." }
  ],
  "textoOriginal": "...",                // 150-300 palabras, redactado desde cero
  "faqs": [
    { "q": "...", "a": "..." }
  ],
  "enlaceAfiliado": "https://www.amazon.com/dp/[ASIN]?tag=qqo-20",
  "asin": "[ASIN]"
}
4. Checklist para añadir un producto
Fase A — Verificación (manual, en Amazon.com)
□ Es original (marca del fabricante, no tercero)
□ Está disponible en Amazon.com (no .mx, no .ca, no .es)
□ Tiene stock estable
□ El vendedor es Amazon o el fabricante
□ Anoto el ASIN de la URL
□ Anoto la lista de modelos compatibles (de la ficha oficial del fabricante)
□ Anoto el precio actual (para la tabla comparativa, con aviso "indicativo")
Fase B — JSON
□ Crear el objeto completo en repuestos.json
□ titulo (H1) con número de pieza
□ tituloSeo (<title>) sin número de pieza, con diferencial
□ modelosCompatibles (lista plana, sin duplicados)
□ compatibilidad.familias (agrupada)
□ guiaCambio, guiaReset, guiaProblemas específicos del producto
□ textoOriginal 150-300 palabras, redactado desde cero
□ faqs 3 preguntas
□ enlaceAfiliado con ?tag=qqo-20
Fase C — Páginas
□ Ficha del producto ([slug]/index.astro) — copiar plantilla existente, no tocar el código salvo el contenido
□ Guía 1: como-saber-si-es-original.astro
□ Guía 2: no-encaja.astro
□ Guía 3: original-vs-generico.astro (con aviso de precio indicativo)
□ El bloque "Guías sobre este filtro" de la ficha enlaza a las 3 guías
□ Cada guía tiene el enlace "← Volver a la ficha del [número de pieza]"
Fase D — Verificación
□ npm run dev → todas las URLs cargan
□ La pestaña del navegador muestra tituloSeo, no titulo
□ El H1 muestra titulo
□ El selector de nevera incluye los nuevos modelos
□ Las 3 tarjetas de "Guías sobre este filtro" navegan correctamente
□ El enlace de afiliado abre Amazon.com con el tag qqo-20
□ El schema Product y FAQPage están en el HTML (Ctrl+U)
□ npm run build sin errores
□ El sitemap tiene las URLs nuevas
5. Reglas fijas
Solo originales verificados. Si no hay original con stock y envío, no se añade.

El <title> no repite el número de pieza. Ya está en la URL. Usa el espacio para el diferencial.

El <h1> sí lleva el número de pieza. Es la confirmación visual para el usuario.

Guías específicas por producto. No se comparten entre productos.

Contenido redactado desde cero. Nunca copiar de Google, de reseñas ni de la ficha de Amazon.

Sin precio ni envío en la ficha. Eso lo muestra Amazon. En tablas comparativas, siempre con aviso "precios indicativos".

Favicon con ?v=3 en todas las páginas.

Enlaces de afiliado con rel="sponsored nofollow noopener noreferrer" y aviso "As an Amazon Associate..." cerca.

Migas de pan en todas las páginas internas.

El bloque "Guías sobre este filtro" solo existe en la ficha del producto, no en las guías.

6. Comandos útiles
powershell
cd C:\Users\mvx55\proyectos\repuestoseletro    # ir al proyecto
npm run dev                                     # servidor de desarrollo
npm run build                                   # build de producción
Get-Content dist\sitemap-0.xml                  # ver el sitemap
Select-String -LiteralPath "ruta\archivo" -Pattern "texto"   # buscar en archivos (corchetes)
7. Estado actual del catálogo
Producto	Marca	ASIN	Estado	Ficha	Guías
DA97-17376B	Samsung	B071NFVVNG	✅ Publicado	✅	✅ 3/3
Próximos candidatos (pendientes de verificar en Amazon.com):

LG LT1000P (B074HLRXMP) — original, 30K/mes

GE RPWFE — original, 60K/mes