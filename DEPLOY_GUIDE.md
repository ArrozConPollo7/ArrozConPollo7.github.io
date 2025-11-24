# 🚀 Guía de Despliegue a GitHub Pages

## Método 1: Despliegue Automático con GitHub Actions (Recomendado)

### Paso 1: Crear Repositorio en GitHub
1. Ve a [github.com](https://github.com) y crea un **nuevo repositorio**
2. Nómbralo como quieras (ej: `akross-template` o `Template1`)
3. **NO inicialices** con README, .gitignore, o licencia

### Paso 2: Configurar `vite.config.js`
Ya lo configuré. Solo asegúrate de que la línea `base:` tenga el nombre de tu repositorio:
```javascript
base: '/nombre-de-tu-repo/', // Ejemplo: '/akross-template/'
```

### Paso 3: Subir el Código
Abre **CMD** (no PowerShell) en la carpeta del proyecto y ejecuta:

```bash
git init
git add .
git commit -m "Initial commit - Akross Template"
git branch -M main
git remote add origin https://github.com/TU-USUARIO/TU-REPO.git
git push -u origin main
```

### Paso 4: Habilitar GitHub Pages
1. Ve a tu repositorio en GitHub
2. Click en **Settings** (Configuración)
3. En el menú izquierdo, click en **Pages**
4. En **Source**, selecciona **GitHub Actions**
5. ¡Listo! El workflow se ejecutará automáticamente

### Paso 5: Acceder a tu Sitio
Después de unos minutos, tu sitio estará en:
```
https://TU-USUARIO.github.io/TU-REPO/
```

---

## Método 2: Despliegue Manual (Alternativa)

Si prefieres no usar GitHub Actions:

### 1. Compilar el Proyecto
```bash
npm run build
```

### 2. Instalar gh-pages
```bash
npm install --save-dev gh-pages
```

### 3. Agregar Script a package.json
Agrega esto en la sección `"scripts"`:
```json
"deploy": "gh-pages -d dist"
```

### 4. Desplegar
```bash
npm run deploy
```

---

## 🔧 Solución de Problemas

### Error: "Page build failed"
- Verifica que `base` en `vite.config.js` coincida con el nombre del repo
- Asegúrate de que el repositorio sea público

### Error: "404 Not Found"
- Espera 2-3 minutos después del primer despliegue
- Verifica la URL: `https://usuario.github.io/repo/` (con slash al final)

### Cambios no se reflejan
- Haz un nuevo commit y push
- El workflow se ejecutará automáticamente
- Espera 1-2 minutos

---

## 📝 Comandos Rápidos

```bash
# Ver estado de git
git status

# Hacer cambios y subir
git add .
git commit -m "Descripción del cambio"
git push

# Ver el workflow en GitHub
# Ve a: Actions > Deploy to GitHub Pages
```

---

## ✅ Checklist Final

- [ ] Repositorio creado en GitHub
- [ ] `base` configurado en `vite.config.js`
- [ ] Código subido con `git push`
- [ ] GitHub Pages habilitado (Source: GitHub Actions)
- [ ] Workflow ejecutado exitosamente (check verde en Actions)
- [ ] Sitio accesible en `https://usuario.github.io/repo/`
