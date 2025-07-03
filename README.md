# Repositorio de Widgets de Elementor Personalizados (React a Elementor)

Este repositorio contiene el desarrollo de widgets personalizados para Elementor, inspirados y convertidos a partir de componentes React. El objetivo es replicar la funcionalidad y el diseño de componentes React modernos dentro del ecosistema de WordPress y Elementor.

## Proyectos Actuales

*   **Widget Hero OTEC:** Un widget de sección Hero dinámico y personalizable.

## Librerías Externas

Las librerías de terceros utilizadas en este proyecto se encuentran en la carpeta `external-libraries/`.

*   **AOS (Animate On Scroll):** Para animaciones de scroll. Los archivos de la librería (`aos.css`, `aos.js`) deben colocarse en `external-libraries/aos/css/` y `external-libraries/aos/js/` respectivamente.

## Plugin de Mejoras (OTEC Elementor Enhancements)

Se está desarrollando un plugin personalizado (`wp-content/plugins/otec-elementor-enhancements/`) para:

*   Integrar Tailwind CSS para el estilizado de los widgets.
*   Integrar la librería AOS para animaciones.
*   Alojar el código de los widgets de Elementor personalizados.

## Configuración del Plugin `otec-elementor-enhancements`

1.  Navega a la carpeta del plugin: `wp-content/plugins/otec-elementor-enhancements/`.
2.  Ejecuta `npm install` para instalar las dependencias de desarrollo (como Tailwind CSS).
3.  Ejecuta `npm run build` para compilar los assets (ej. el CSS de Tailwind).
    *   Usa `npm run watch` durante el desarrollo para recompilación automática.
4.  Asegúrate de tener los archivos de AOS (`aos.css` y `aos.js`) en las carpetas `external-libraries/aos/css/` y `external-libraries/aos/js/`. Estos serán copiados o referenciados por el plugin.

---