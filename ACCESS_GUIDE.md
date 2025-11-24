# 🚀 Cómo Acceder a la Página

## Iniciar el Servidor de Desarrollo

1. **Abre una terminal** en la carpeta del proyecto:
   ```bash
   cd c:/Users/juand/OneDrive/Documents/Templates/Template1
   ```

2. **Ejecuta el servidor de desarrollo**:
   ```bash
   npm run dev
   ```

3. **Abre tu navegador** en:
   ```
   http://localhost:5173
   ```

## Estructura del Sitio

### 🏠 Home (`/`)
- Hero con animaciones
- Marquee infinito
- Grid de productos (4 productos)
- Precios en **COP**

### 👕 Página de Producto (`/product/:id`)
- Click en cualquier producto del grid
- Selecciona talla (S, M, L, XL)
- Botón "Add to Cart" (verde ácido)

### 🛒 Carrito (`/cart`)
- Click en el ícono del carrito (navbar)
- Ver items añadidos
- Ajustar cantidad (+/-)
- Ver total en COP

## Archivos Activos en el Proyecto

### ✅ Archivos que SE USAN:
```
Template1/
├── index.html              ✅ Punto de entrada HTML
├── package.json            ✅ Dependencias
├── vite.config.js          ✅ Configuración de Vite
├── src/
│   ├── main.jsx            ✅ Punto de entrada React
│   ├── App.jsx             ✅ Componente raíz + Routing
│   ├── index.css           ✅ Estilos globales
│   ├── components/
│   │   ├── Navbar.jsx      ✅ Navegación
│   │   ├── Hero.jsx        ✅ Sección hero
│   │   ├── Marquee.jsx     ✅ Texto infinito
│   │   ├── ProductGrid.jsx ✅ Grid de productos
│   │   ├── ProductCard.jsx ✅ Tarjeta individual
│   │   └── Footer.jsx      ✅ Pie de página
│   ├── pages/
│   │   ├── ProductPage.jsx ✅ Detalle de producto
│   │   └── CartPage.jsx    ✅ Página del carrito
│   └── context/
│       └── CartContext.jsx ✅ Estado global del carrito
```

### ❌ Archivos ELIMINADOS (no se usaban):
- `_legacy/` (carpeta completa con 4 archivos HTML/CSS/JS antiguos)
- `src/context/LanguageContext.jsx`
- `src/pages/CategoryPage.jsx`
- `src/pages/Home.jsx`
- `src/components/Sidebar.jsx`
- `src/App.css`
- `public/vite.svg`
- `src/assets/react.svg`

## Comandos Útiles

```bash
# Iniciar desarrollo
npm run dev

# Compilar para producción
npm run build

# Vista previa de producción
npm run preview
```
