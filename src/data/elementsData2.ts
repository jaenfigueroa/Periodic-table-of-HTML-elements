import { Data } from '../types/periodicTable'

export const elementsData2: Data = {
  'title': 'Tabla periodica de elementos HTML',
  'elements': [
    {
      'tag': 'html',
      'group': 'Elemento root',
      'url': 'https://developer.mozilla.org/en/docs/Web/HTML/Element/html',
      'description': 'Es el elemento raíz de todo el documento HTML y se utiliza para envolver y estructurar todo el contenido HTML.',
      'codeHTML': `<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Título de la página</title>
</head>
<body>
    <!-- Aquí va el contenido de la página -->
</body>
</html>
`,
      'codeCSS': '',
    },
    {
      'tag': 'head',
      'group': 'Elems. de estructura',
      'url': 'https://developer.mozilla.org/en/docs/Web/HTML/Element/head',
      'description': 'Se utiliza para incluir metadatos y otros elementos que no forman parte del contenido visible en la página web, pero que son importantes para el funcionamiento y presentación del documento.',
      'codeHTML': `<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Título de la página</title>
    <link rel="stylesheet" href="styles.css">
    <script src="script.js"></script>
</head>
<body>
    <!-- Contenido visible de la página -->
</body>
</html>
`,
      'codeCSS': '',
    },
    {
      'tag': 'title',
      'group': 'Elems. de estructura',
      'url': 'https://developer.mozilla.org/en/docs/Web/HTML/Element/title',
      'description': 'Se utiliza para definir el título de un documento HTML. El título se muestra en la barra de título del navegador o en la pestaña del navegador cuando se abre la página web.',
      'codeHTML': `<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Título de la página</title>
</head>
<body>
    <!-- Contenido visible de la página -->
</body>
</html>
`,
      'codeCSS': '',
    },
    {
      'tag': 'base',
      'group': 'Elems. de estructura',
      'url': 'https://developer.mozilla.org/en/docs/Web/HTML/Element/base',
      'description': 'Se utiliza para especificar la URL base para todas las URL relativas en un documento HTML. Establecer el elemento <base> permite evitar la repetición de la URL base en todas las URL relativas dentro del documento.',
      'codeHTML': `<!DOCTYPE html>
<html>
<head>
    <base href="https://www.ejemplo.com/">
    <title>Título de la página</title>
</head>
<body>
    <!-- Contenido visible de la página -->
    <a href="pagina.html">Enlace a otra página</a>
</body>
</html>
`,
      'codeCSS': '',
    },
    {
      'tag': 'link',
      'group': 'Elems. de estructura',
      'url': 'https://developer.mozilla.org/en/docs/Web/HTML/Element/link',
      'description': 'El elemento <link> en HTML se utiliza para enlazar recursos externos con el documento HTML. Se utiliza principalmente para enlazar hojas de estilo CSS, pero también se puede usar para enlazar otros tipos de recursos, como fuentes, iconos, archivos de JavaScript, archivos de imagen y más.',
      'codeHTML': `<!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" href="styles.css">
    <link rel="icon" href="favicon.ico" type="image/x-icon">
    <link rel="preload" href="script.js" as="script">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto">
    <title>Título de la página</title>
</head>
<body>
    <!-- Contenido visible de la página -->
</body>
</html>
`,
      'codeCSS': '',
    },
    {
      'tag': 'meta',
      'group': 'Elems. de estructura',
      'url': 'https://developer.mozilla.org/en/docs/Web/HTML/Element/meta',
      'description': 'El elemento <meta> en HTML se utiliza para agregar metadatos al documento HTML. Los metadatos son información adicional que no se muestra directamente en la página, pero que proporciona detalles sobre el documento, como la descripción, palabras clave, autor, codificación de caracteres y más.',
      'codeHTML': `<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="description" content="Descripción del sitio web">
    <meta name="keywords" content="palabra clave 1, palabra clave 2, palabra clave 3">
    <meta name="author" content="Nombre del autor">
    <title>Título de la página</title>
</head>
<body>
    <!-- Contenido visible de la página -->
</body>
</html>
`,
      'codeCSS': '',
    },
    {
      'tag': 'style',
      'group': 'Elems. de estructura',
      'url': 'https://developer.mozilla.org/en/docs/Web/HTML/Element/style',
      'description': 'El elemento <style> en HTML se utiliza para incluir reglas de estilo CSS directamente dentro del documento HTML. Esto te permite aplicar estilos específicos a elementos individuales o grupos de elementos sin la necesidad de enlazar una hoja de estilo externa.',
      'codeHTML': `<!DOCTYPE html>
<html>
<head>
    <title>Título de la página</title>
    <style>
        /* Reglas de estilo CSS */
        body {
            font-family: Arial, sans-serif;
            background-color: #f0f0f0;
        }
        
        h1 {
            color: #333;
        }
        
        /* Más reglas de estilo */
    </style>
</head>
<body>
    <!-- Contenido visible de la página -->
    <h1>Título de la sección</h1>
    <p>Este es un párrafo de ejemplo.</p>
</body>
</html>
`,
      'codeCSS': '',
    },
    {
      'tag': 'noscript',
      'group': 'Elems. de estructura',
      'url': 'https://developer.mozilla.org/en/docs/Web/HTML/Element/noscript',
      'description': 'El elemento <noscript> en HTML se utiliza para proporcionar contenido alternativo que se mostrará si el navegador del usuario no admite JavaScript o si JavaScript está deshabilitado en el navegador.',
      'codeHTML': `<!DOCTYPE html>
<html>
<head>
    <title>Título de la página</title>
</head>
<body>
    <!-- Contenido visible de la página -->
    
    <noscript>
        <p>El JavaScript está deshabilitado en tu navegador. Para ver este sitio web correctamente, habilita JavaScript en la configuración de tu navegador.</p>
    </noscript>
</body>
</html>
`,
      'codeCSS': '',
    },
    {
      'tag': 'script',
      'group': 'Elems. de estructura',
      'url': 'https://developer.mozilla.org/en/docs/Web/HTML/Element/script',
      'description': 'El elemento <script> en HTML se utiliza para insertar o enlazar código JavaScript en un documento HTML. Puedes utilizarlo para ejecutar scripts directamente en el documento o para enlazar archivos de JavaScript externos.',
      'codeHTML': `<!DOCTYPE html>
<html>
<head>
    <title>Título de la página</title>
</head>
<body>
    <!-- Contenido visible de la página -->
    
    <script>
        // Código JavaScript en línea
        console.log("Hola, mundo!");
    </script>
</body>
</html>
`,
      'codeCSS': '',
    },
    {
      'tag': 'body',
      'group': 'Elems. de estructura',
      'url': 'https://developer.mozilla.org/en/docs/Web/HTML/Element/body',
      'description': 'El elemento <body> en HTML se utiliza para envolver el contenido visible de una página web. Todo el contenido que deseas que los usuarios vean y experimenten en el navegador se coloca dentro del elemento <body>.',
      'codeHTML': `<!DOCTYPE html>
<html>
<head>
    <title>Título de la página</title>
</head>
<body>
    <!-- Contenido visible de la página -->
    <h1>Título de la página</h1>
    <p>Este es un párrafo de ejemplo.</p>
    <img src="imagen.jpg" alt="Descripción de la imagen">
    <ul>
        <li>Elemento de lista 1</li>
        <li>Elemento de lista 2</li>
        <li>Elemento de lista 3</li>
    </ul>
    <!-- Más contenido -->
</body>
</html>
`,
      'codeCSS': '',
    },
    {
      'tag': 'template',
      'group': 'Elems. de estructura',
      'url': 'https://developer.mozilla.org/en/docs/Web/HTML/Element/template',
      'description': 'El elemento <template> en HTML se utiliza para definir contenido que no se mostrará de forma inmediata en la página, pero que se puede clonar y utilizar posteriormente mediante scripts.',
      'codeHTML': `<!DOCTYPE html>
<html>
<head>
    <title>Título de la página</title>
</head>
<body>
    <!-- Contenido visible de la página -->
    
    <template id="miTemplate">
        <h1>Título del elemento clonado</h1>
        <p>Este es un contenido clonado desde el template.</p>
    </template>

    <script>
        // Clonar y mostrar el contenido del template
        const template = document.getElementById("miTemplate");
        const clone = template.content.cloneNode(true);
        document.body.appendChild(clone);
    </script>
</body>
</html>
`,
      'codeCSS': '',
    },

    /* XXXXXXXXXXXXXXXXXXXXXXX */
    {
      'tag': 'p',
      'group': 'Elems. de texto',
      'url': 'https://developer.mozilla.org/en/docs/Web/HTML/Element/p',
      'description': 'El elemento <p> en HTML se utiliza para representar un párrafo de texto en un documento HTML. Es uno de los elementos más comunes y básicos para estructurar y formatear el contenido de texto.',
      'codeHTML': `<!DOCTYPE html>
<html>
<head>
    <title>Título de la página</title>
</head>
<body>
    <!-- Contenido visible de la página -->
    <p>Este es un párrafo de ejemplo.</p>
    <p>Este es otro párrafo.</p>
    <p>Y aquí hay un tercer párrafo.</p>
</body>
</html>
`,
      'codeCSS': '',
    },
    {
      'tag': 'span',
      'group': 'Elems. de texto',
      'url': 'https://developer.mozilla.org/en/docs/Web/HTML/Element/span',
      'description': 'El elemento <span> en HTML se utiliza para aplicar estilos o seleccionar partes específicas de texto dentro de un documento HTML. A diferencia del elemento <p>, el elemento <span> no representa un bloque de texto independiente, sino que se utiliza para aplicar estilos o manipular partes más pequeñas de texto dentro de un bloque de texto más grande.',
      'codeHTML': `<!DOCTYPE html>
<html>
<head>
    <title>Título de la página</title>
    <style>
        .resaltado {
            color: red;
            font-weight: bold;
        }
    </style>
</head>
<body>
    <!-- Contenido visible de la página -->
    <p>Este es un texto de ejemplo con <span class="resaltado">una parte resaltada</span>.</p>
    <p>Otro <span style="font-style: italic;">texto</span> con diferentes estilos.</p>
</body>
</html>
`,
      'codeCSS': '',
    },
    {
      'tag': 'h1 - h6',
      'group': 'Elems. de texto',
      'url': 'https://developer.mozilla.org/en/docs/Web/HTML/Element/h1',
      'description': 'Las etiquetas <h1> a <h6> en HTML se utilizan para definir encabezados o títulos de diferentes niveles de importancia en una página web. La etiqueta <h1> representa el encabezado de nivel más alto y la etiqueta <h6> representa el encabezado de nivel más bajo.',
      'codeHTML': `<!DOCTYPE html>
<html>
<head>
    <title>Título de la página</title>
</head>
<body>
    <!-- Contenido visible de la página -->
    <h1>Encabezado de nivel 1</h1>
    <h2>Encabezado de nivel 2</h2>
    <h3>Encabezado de nivel 3</h3>
    <h4>Encabezado de nivel 4</h4>
    <h5>Encabezado de nivel 5</h5>
    <h6>Encabezado de nivel 6</h6>
</body>
</html>
`,
      'codeCSS': '',
    },
    {
      'tag': 'address',
      'group': 'Elems. de texto',
      'url': 'https://developer.mozilla.org/en/docs/Web/HTML/Element/address',
      'description': 'En HTML, el elemento <address> se utiliza para representar información de contacto o de ubicación, como una dirección postal, un número de teléfono o una dirección de correo electrónico.',
      'codeHTML': `<address>
  Nombre de la persona o entidad<br>
  Dirección<br>
  Ciudad, Estado, Código postal<br>
  Teléfono: <a href="tel:+123456789">123-456-789</a><br>
  Correo electrónico: <a href="mailto:info@example.com">info@example.com</a>
</address>
`,
      'codeCSS': '',
    },
    {
      'tag': 'blockquote',
      'group': 'Elems. de texto',
      'url': 'https://developer.mozilla.org/en/docs/Web/HTML/Element/blockquote',
      'description': 'El elemento <blockquote> se utiliza para resaltar citas o fragmentos de texto que han sido extraídos de otra fuente.',
      'codeHTML': `<blockquote>
  <p>Texto citado aquí.</p>
  <footer>Autor de la cita</footer>
</blockquote>
`,
      'codeCSS': '',
    },
    {
      'tag': 'pre',
      'group': 'Elems. de texto',
      'url': 'https://developer.mozilla.org/en/docs/Web/HTML/Element/pre',
      'description': 'El elemento <pre> se utiliza para mostrar texto preformateado, lo que significa que conservará el espaciado y los saltos de línea tal como están escritos en el código fuente.',
      'codeHTML': `<pre>
  function calcularPromedio() {
    var notas = [8, 7, 9, 6, 8];
    var suma = 0;

    for (var i = 0; i < notas.length; i++) {
      suma += notas[i];
    }

    var promedio = suma / notas.length;
    return promedio;
  }
</pre>
`,
      'codeCSS': '',
    },

    /* XXXXXXXXXXXXXXXXXXXXXXX */
    {
      'tag': 'a',
      'group': 'Elems. de enlace',
      'url': 'https://developer.mozilla.org/en/docs/Web/HTML/Element/a',
      'description': 'El Elemento HTML Anchor <a> crea un enlace a otras páginas de internet, archivos o ubicaciones dentro de la misma página, direcciones de correo, o cualquier otra URL.',
      'codeHTML': `<p>You can reach Michael at:</p>

<ul>
  <li><a href="https://example.com">Website</a></li>
  <li><a href="mailto:m.bluth@example.com">Email</a></li>
  <li><a href="tel:+123456789">Phone</a></li>
</ul>
`,
      'codeCSS': '',
    },

    /* XXXXXXXXXXXXXXXXXXXXXXX */
    {
      'tag': 'em',
      'group': 'Elems. de enfasis',
      'url': 'https://developer.mozilla.org/en/docs/Web/HTML/Element/em',
      'description': 'El elemento <em> se utiliza para resaltar texto enfatizado dentro de un bloque de texto. El texto enfatizado generalmente se muestra en cursiva por defecto en la mayoría de los navegadores web. ',
      'codeHTML': '<p>Por favor, <em>no toques</em> el objeto caliente.</p>',
      'codeCSS': '',
    },
    {
      'tag': 'strong',
      'group': 'Elems. de enfasis',
      'url': 'https://developer.mozilla.org/en/docs/Web/HTML/Element/strong',
      'description': 'El elemento <strong> se utiliza para resaltar texto fuertemente, es decir, para indicar que una parte del contenido tiene mayor importancia o énfasis. A diferencia del elemento <em>, el texto resaltado con <strong> no tiene un estilo de visualización específico asociado de forma predeterminada.',
      'codeHTML': '<p>¡Advertencia! <strong>No ingresar sin autorización</strong>.</p>',
      'codeCSS': '',
    },
    {
      'tag': 'small',
      'group': 'Elems. de enfasis',
      'url': 'https://developer.mozilla.org/en/docs/Web/HTML/Element/small',
      'description': 'El elemento <small> se utiliza para representar texto en una escala más pequeña, generalmente para indicar información adicional, notas a pie de página o contenido de menor importancia.',
      'codeHTML': '<p>El precio indicado es sin impuestos. <small>Los impuestos aplicables se agregarán al finalizar la compra.</small></p>',
      'codeCSS': '',
    },

    /* XXXXXXXXXXXXXXXX */
    /* XXXXXXXXXXXXXXXX */
    /* XXXXXX ME QUEDE AQUI XXXXXXXXXX */
    /* XXXXXXXX como se usa span en html XXXXXXXX */
    /* XXXXXXXXXXXXXXXX */

    {
      'tag': 's',
      'group': 'Elems. de enfasis',
      'url': 'https://developer.mozilla.org/en/docs/Web/HTML/Element/s',
      'description': '',
      'codeHTML': '',
      'codeCSS': '',
    },
    {
      'tag': 'cite',
      'group': 'Elems. de enfasis',
      'url': 'https://developer.mozilla.org/en/docs/Web/HTML/Element/cite',
      'description': '',
      'codeHTML': '',
      'codeCSS': '',
    },
    {
      'tag': 'q',
      'group': 'Elems. de enfasis',
      'url': 'https://developer.mozilla.org/en/docs/Web/HTML/Element/q',
      'description': '',
      'codeHTML': '',
      'codeCSS': '',
    },
    {
      'tag': 'dfn',
      'group': 'Elems. de enfasis',
      'url': 'https://developer.mozilla.org/en/docs/Web/HTML/Element/dfn',
      'description': '',
      'codeHTML': '',
      'codeCSS': '',
    },
    {
      'tag': 'abbr',
      'group': 'Elems. de enfasis',
      'url': 'https://developer.mozilla.org/en/docs/Web/HTML/Element/abbr',
      'description': 'El elemento HTML <abbr> (o Elemento de Abreviación HTML) representa una abreviación o acrónimo; el atributo opcional title puede ampliar o describir la abreviatura. Si está presente, el atributo title debe contener la descripción completa y nada más.',
      'codeHTML': '<p>I do <abbr title="Hypertext Markup Language">HTML</abbr></p>',
      'codeCSS': '',
    },
    {
      'tag': 'data',
      'group': 'Elems. de enfasis',
      'url': 'https://developer.mozilla.org/en/docs/Web/HTML/Element/data',
      'description': '',
      'codeHTML': '',
      'codeCSS': '',
    },
    {
      'tag': 'time',
      'group': 'Elems. de enfasis',
      'url': 'https://developer.mozilla.org/en/docs/Web/HTML/Element/time',
      'description': '',
      'codeHTML': '',
      'codeCSS': '',
    },

    /* XXXXXXXXXXXXXXXXXXXXXXX */
    {
      'tag': 'i',
      'group': 'Elems. de estilo',
      'url': 'https://developer.mozilla.org/en/docs/Web/HTML/Element/i',
      'description': '',
      'codeHTML': '',
      'codeCSS': '',
    },

    {
      'tag': 'b',
      'group': 'Elems. de estilo',
      'url': 'https://developer.mozilla.org/en/docs/Web/HTML/Element/b',
      'description': '',
      'codeHTML': '',
      'codeCSS': '',
    },
    {
      'tag': 'u',
      'group': 'Elems. de estilo',
      'url': 'https://developer.mozilla.org/en/docs/Web/HTML/Element/u',
      'description': '',
      'codeHTML': '',
      'codeCSS': '',
    },

    {
      'tag': 'mark',
      'group': 'Elems. de estilo',
      'url': 'https://developer.mozilla.org/en/docs/Web/HTML/Element/mark',
      'description': '',
      'codeHTML': '',
      'codeCSS': '',
    },

    /* XXXXXXXXXXXXXXXXXXXXXXX */
    {
      'tag': 'code',
      'group': 'Elems. de codigo y variable',
      'url': 'https://developer.mozilla.org/en/docs/Web/HTML/Element/code',
      'description': '',
      'codeHTML': '',
      'codeCSS': '',
    },
    {
      'tag': 'var',
      'group': 'Elems. de codigo y variable',
      'url': 'https://developer.mozilla.org/en/docs/Web/HTML/Element/var',
      'description': '',
      'codeHTML': '',
      'codeCSS': '',
    },


    {
      'tag': 'samp',
      'group': 'Elems. de codigo y variable',
      'url': 'https://developer.mozilla.org/en/docs/Web/HTML/Element/samp',
      'description': '',
      'codeHTML': '',
      'codeCSS': '',
    },
    {
      'tag': 'kbd',
      'group': 'Elems. de codigo y variable',
      'url': 'https://developer.mozilla.org/en/docs/Web/HTML/Element/kbd',
      'description': '',
      'codeHTML': '',
      'codeCSS': '',
    },
    {
      'tag': 'sup',
      'group': 'Elems. de codigo y variable',
      'url': 'https://developer.mozilla.org/en/docs/Web/HTML/Element/sup',
      'description': '',
      'codeHTML': '',
      'codeCSS': '',
    },
    {
      'tag': 'sub',
      'group': 'Elems. de codigo y variable',
      'url': 'https://developer.mozilla.org/en/docs/Web/HTML/Element/sub',
      'description': '',
      'codeHTML': '',
      'codeCSS': '',
    },
    /* XXXXXXXXXXXXXXXXXXXXXXX */
    {
      'tag': 'ruby',
      'group': 'Elems. para anotaciones ruby',
      'url': 'https://developer.mozilla.org/en/docs/Web/HTML/Element/ruby',
      'description': '',
      'codeHTML': '',
      'codeCSS': '',
    },
    {
      'tag': 'rt',
      'group': 'Elems. para anotaciones ruby',
      'url': 'https://developer.mozilla.org/en/docs/Web/HTML/Element/rt',
      'description': '',
      'codeHTML': '',
      'codeCSS': '',
    },
    {
      'tag': 'rp',
      'group': 'Elems. para anotaciones ruby',
      'url': 'https://developer.mozilla.org/en/docs/Web/HTML/Element/rp',
      'description': '',
      'codeHTML': '',
      'codeCSS': '',
    },
    /* XXXXXXXXXXXXXXXXXXXXXXX */
    {
      'tag': 'bdi',
      'group': 'Elems. de direccion',
      'url': 'https://developer.mozilla.org/en/docs/Web/HTML/Element/bdi',
      'description': '',
      'codeHTML': '',
      'codeCSS': '',
    },
    {
      'tag': 'bdo',
      'group': 'Elems. de direccion',
      'url': 'https://developer.mozilla.org/en/docs/Web/HTML/Element/bdo',
      'description': '',
      'codeHTML': '',
      'codeCSS': '',
    },
    /* XXXXXXXXXXXXXXXXXXXXXXX */
    {
      'tag': 'br',
      'group': 'Elems. de salto de linea',
      'url': 'https://developer.mozilla.org/en/docs/Web/HTML/Element/br',
      'description': '',
      'codeHTML': '',
      'codeCSS': '',
    },
    {
      'tag': 'wbr',
      'group': 'Elems. de salto de linea',
      'url': 'https://developer.mozilla.org/en/docs/Web/HTML/Element/wbr',
      'description': '',
      'codeHTML': '',
      'codeCSS': '',
    },
    {
      'tag': 'form',
      'group': 'Elems. de formulario',
      'url': 'https://developer.mozilla.org/en/docs/Web/HTML/Element/form',
      'description': '',
      'codeHTML': '',
      'codeCSS': '',
    },
    {
      'tag': 'fieldset',
      'group': 'Elems. de formulario',
      'url': 'https://developer.mozilla.org/en/docs/Web/HTML/Element/fieldset',
      'description': '',
      'codeHTML': '',
      'codeCSS': '',
    },
    {
      'tag': 'legend',
      'group': 'Elems. de formulario',
      'url': 'https://developer.mozilla.org/en/docs/Web/HTML/Element/legend',
      'description': '',
      'codeHTML': '',
      'codeCSS': '',
    },
    {
      'tag': 'label',
      'group': 'Elems. de formulario',
      'url': 'https://developer.mozilla.org/en/docs/Web/HTML/Element/label',
      'description': '',
      'codeHTML': '',
      'codeCSS': '',
    },
    {
      'tag': 'input',
      'group': 'Elems. de formulario',
      'url': 'https://developer.mozilla.org/en/docs/Web/HTML/Element/input',
      'description': '',
      'codeHTML': '',
      'codeCSS': '',
    },
    {
      'tag': 'button',
      'group': 'Elems. de formulario',
      'url': 'https://developer.mozilla.org/en/docs/Web/HTML/Element/button',
      'description': '',
      'codeHTML': '',
      'codeCSS': '',
    },
    {
      'tag': 'select',
      'group': 'Elems. de formulario',
      'url': 'https://developer.mozilla.org/en/docs/Web/HTML/Element/select',
      'description': '',
      'codeHTML': '',
      'codeCSS': '',
    },
    {
      'tag': 'datalist',
      'group': 'Elems. de formulario',
      'url': 'https://developer.mozilla.org/en/docs/Web/HTML/Element/datalist',
      'description': 'El elemento "**<datalist>**" de HTML se utiliza junto con el elemento "**<input>**" para proporcionar una lista desplegable de opciones para que los usuarios elijan.',
      'codeHTML': `<label for="fruta">Selecciona una fruta:</label>
<input list="frutas" id="fruta" name="fruta">

<datalist id="frutas">
  <option value="Manzana">
  <option value="Plátano">
  <option value="Naranja">
  <option value="Mango">
  <option value="Uva">
</datalist>
`,
      'codeCSS': '',
    },

    {
      'tag': 'optgroup',
      'group': 'Elems. de formulario',
      'url': 'https://developer.mozilla.org/en/docs/Web/HTML/Element/optgroup',
      'description': '',
      'codeHTML': '',
      'codeCSS': '',
    },
    {
      'tag': 'option',
      'group': 'Elems. de formulario',
      'url': 'https://developer.mozilla.org/en/docs/Web/HTML/Element/option',
      'description': '',
      'codeHTML': '',
      'codeCSS': '',
    },
    {
      'tag': 'textarea',
      'group': 'Elems. de formulario',
      'url': 'https://developer.mozilla.org/en/docs/Web/HTML/Element/textarea',
      'description': '',
      'codeHTML': '',
      'codeCSS': '',
    },
    {
      'tag': 'output',
      'group': 'Elems. de formulario',
      'url': 'https://developer.mozilla.org/en/docs/Web/HTML/Element/output',
      'description': '',
      'codeHTML': '',
      'codeCSS': '',
    },
    {
      'tag': 'progress',
      'group': 'Elems. de formulario',
      'url': 'https://developer.mozilla.org/en/docs/Web/HTML/Element/progress',
      'description': '',
      'codeHTML': '',
      'codeCSS': '',
    },
    {
      'tag': 'meter',
      'group': 'Elems. de formulario',
      'url': 'https://developer.mozilla.org/en/docs/Web/HTML/Element/meter',
      'description': '',
      'codeHTML': '',
      'codeCSS': '',
    },
    {
      'tag': 'ul',
      'group': 'Elems. de lista',
      'url': 'https://developer.mozilla.org/en/docs/Web/HTML/Element/ul',
      'description': '',
      'codeHTML': '',
      'codeCSS': '',
    },
    {
      'tag': 'ol',
      'group': 'Elems. de lista',
      'url': 'https://developer.mozilla.org/en/docs/Web/HTML/Element/ol',
      'description': '',
      'codeHTML': '',
      'codeCSS': '',
    },
    {
      'tag': 'li',
      'group': 'Elems. de lista',
      'url': 'https://developer.mozilla.org/en/docs/Web/HTML/Element/li',
      'description': '',
      'codeHTML': '',
      'codeCSS': '',
    },

    {
      'tag': 'dl',
      'group': 'Elems. de lista de definiciones',
      'url': 'https://developer.mozilla.org/en/docs/Web/HTML/Element/dl',
      'description': '',
      'codeHTML': '',
      'codeCSS': '',
    },
    {
      'tag': 'dt',
      'group': 'Elems. de lista de definiciones',
      'url': 'https://developer.mozilla.org/en/docs/Web/HTML/Element/dt',
      'description': '',
      'codeHTML': '',
      'codeCSS': '',
    },
    {
      'tag': 'dd',
      'group': 'Elems. de lista de definiciones',
      'url': 'https://developer.mozilla.org/en/docs/Web/HTML/Element/dd',
      'description': '',
      'codeHTML': '',
      'codeCSS': '',
    },
    {
      'tag': 'div',
      'group': 'Elems. para secciones',
      'url': 'https://developer.mozilla.org/en/docs/Web/HTML/Element/div',
      'description': '',
      'codeHTML': '',
      'codeCSS': '',
    },
    {
      'tag': 'header',
      'group': 'Elems. para secciones',
      'url': 'https://developer.mozilla.org/en/docs/Web/HTML/Element/header',
      'description': '',
      'codeHTML': '',
      'codeCSS': '',
    },
    {
      'tag': 'nav',
      'group': 'Elems. para secciones',
      'url': 'https://developer.mozilla.org/en/docs/Web/HTML/Element/nav',
      'description': '',
      'codeHTML': '',
      'codeCSS': '',
    },
    {
      'tag': 'aside',
      'group': 'Elems. para secciones',
      'url': 'https://developer.mozilla.org/en/docs/Web/HTML/Element/aside',
      'description': '',
      'codeHTML': '',
      'codeCSS': '',
    },
    {
      'tag': 'main',
      'group': 'Elems. para secciones',
      'url': 'https://developer.mozilla.org/en/docs/Web/HTML/Element/main',
      'description': '',
      'codeHTML': '',
      'codeCSS': '',
    },
    {
      'tag': 'section',
      'group': 'Elems. para secciones',
      'url': 'https://developer.mozilla.org/en/docs/Web/HTML/Element/section',
      'description': '',
      'codeHTML': '',
      'codeCSS': '',
    },
    {
      'tag': 'article',
      'group': 'Elems. para secciones',
      'url': 'https://developer.mozilla.org/en/docs/Web/HTML/Element/article',
      'description': '',
      'codeHTML': '',
      'codeCSS': '',
    },
    {
      'tag': 'footer',
      'group': 'Elems. para secciones',
      'url': 'https://developer.mozilla.org/en/docs/Web/HTML/Element/footer',
      'description': '',
      'codeHTML': '',
      'codeCSS': '',
    },
    {
      'tag': 'details',
      'group': 'Elems. de interacción',
      'url': 'https://developer.mozilla.org/en/docs/Web/HTML/Element/details',
      'description': '',
      'codeHTML': '',
      'codeCSS': '',
    },
    {
      'tag': 'summary',
      'group': 'Elems. de interacción',
      'url': 'https://developer.mozilla.org/en/docs/Web/HTML/Element/summary',
      'description': '',
      'codeHTML': '',
      'codeCSS': '',
    },
    {
      'tag': 'dialog',
      'group': 'Elems. de interacción',
      'url': 'https://developer.mozilla.org/en/docs/Web/HTML/Element/dialog',
      'description': '',
      'codeHTML': '',
      'codeCSS': '',
    },
    {
      'tag': 'table',
      'group': 'Elems. de tabla',
      'url': 'https://developer.mozilla.org/en/docs/Web/HTML/Element/table',
      'description': '',
      'codeHTML': '',
      'codeCSS': '',
    },
    {
      'tag': 'caption',
      'group': 'Elems. de tabla',
      'url': 'https://developer.mozilla.org/en/docs/Web/HTML/Element/caption',
      'description': '',
      'codeHTML': '',
      'codeCSS': '',
    },
    {
      'tag': 'colgroup',
      'group': 'Elems. de tabla',
      'url': 'https://developer.mozilla.org/en/docs/Web/HTML/Element/colgroup',
      'description': '',
      'codeHTML': '',
      'codeCSS': '',
    },
    {
      'tag': 'col',
      'group': 'Elems. de tabla',
      'url': 'https://developer.mozilla.org/en/docs/Web/HTML/Element/col',
      'description': '',
      'codeHTML': '',
      'codeCSS': '',
    },
    {
      'tag': 'thead',
      'group': 'Elems. de tabla',
      'url': 'https://developer.mozilla.org/en/docs/Web/HTML/Element/thead',
      'description': '',
      'codeHTML': '',
      'codeCSS': '',
    },
    {
      'tag': 'tbody',
      'group': 'Elems. de tabla',
      'url': 'https://developer.mozilla.org/en/docs/Web/HTML/Element/tbody',
      'description': '',
      'codeHTML': '',
      'codeCSS': '',
    },
    {
      'tag': 'tfoot',
      'group': 'Elems. de tabla',
      'url': 'https://developer.mozilla.org/en/docs/Web/HTML/Element/tfoot',
      'description': '',
      'codeHTML': '',
      'codeCSS': '',
    },
    {
      'tag': 'tr',
      'group': 'Elems. de tabla',
      'url': 'https://developer.mozilla.org/en/docs/Web/HTML/Element/tr',
      'description': '',
      'codeHTML': '',
      'codeCSS': '',
    },
    {
      'tag': 'th',
      'group': 'Elems. de tabla',
      'url': 'https://developer.mozilla.org/en/docs/Web/HTML/Element/th',
      'description': '',
      'codeHTML': '',
      'codeCSS': '',
    },
    {
      'tag': 'td',
      'group': 'Elems. de tabla',
      'url': 'https://developer.mozilla.org/en/docs/Web/HTML/Element/td',
      'description': '',
      'codeHTML': '',
      'codeCSS': '',
    },

    {
      'tag': 'map',
      'group': 'Elems. multimedia',
      'url': 'https://developer.mozilla.org/en/docs/Web/HTML/Element/map',
      'description': '',
      'codeHTML': '',
      'codeCSS': '',
    },
    {
      'tag': 'area',
      'group': 'Elems. multimedia',
      'url': 'https://developer.mozilla.org/en/docs/Web/HTML/Element/area',
      'description': 'Sirve para crear las distintas secciones en las que se puede dividir un mapas de imágenes en el cliente.',
      'codeHTML': '',
      'codeCSS': '',
    },
    {
      'tag': 'img',
      'group': 'Elems. multimedia',
      'url': 'https://developer.mozilla.org/en/docs/Web/HTML/Element/img',
      'description': '',
      'codeHTML': '',
      'codeCSS': '',
    },
    {
      'tag': 'picture',
      'group': 'Elems. multimedia',
      'url': 'https://developer.mozilla.org/en/docs/Web/HTML/Element/picture',
      'description': '',
      'codeHTML': '',
      'codeCSS': '',
    },
    {
      'tag': 'audio',
      'group': 'Elems. multimedia',
      'url': 'https://developer.mozilla.org/en/docs/Web/HTML/Element/audio',
      'description': '',
      'codeHTML': '',
      'codeCSS': '',
    },
    {
      'tag': 'video',
      'group': 'Elems. multimedia',
      'url': 'https://developer.mozilla.org/en/docs/Web/HTML/Element/video',
      'description': '',
      'codeHTML': '',
      'codeCSS': '',
    },
    {
      'tag': 'source',
      'group': 'Elems. multimedia',
      'url': 'https://developer.mozilla.org/en/docs/Web/HTML/Element/source',
      'description': '',
      'codeHTML': '',
      'codeCSS': '',
    },
    {
      'tag': 'track',
      'group': 'Elems. multimedia',
      'url': 'https://developer.mozilla.org/en/docs/Web/HTML/Element/track',
      'description': '',
      'codeHTML': '',
      'codeCSS': '',
    },
    /* DEPRECADO */
    // {
    //   'tag': 'embed',
    //   'group': 'Elems. multimedia',
    //   'url': 'https://developer.mozilla.org/en/docs/Web/HTML/Element/embed',
    //   'description': '',

    {
      'tag': 'figure',
      'group': 'Elems. multimedia',
      'url': 'https://developer.mozilla.org/en/docs/Web/HTML/Element/figure',
      'description': '',
      'codeHTML': '',
      'codeCSS': '',
    },
    {
      'tag': 'figcaption',
      'group': 'Elems. multimedia',
      'url': 'https://developer.mozilla.org/en/docs/Web/HTML/Element/caption',
      'description': '',
      'codeHTML': '',
      'codeCSS': '',
    },

    {
      'tag': 'object',
      'group': 'Elems. de contenido incrustado',
      'url': 'https://developer.mozilla.org/en/docs/Web/HTML/Element/object',
      'description': '',
      'codeHTML': '',
      'codeCSS': '',
    },

    {
      'tag': 'param',
      'group': 'Elems. de contenido incrustado',
      'url': 'https://developer.mozilla.org/en/docs/Web/HTML/Element/param',
      'description': '',
      'codeHTML': '',
      'codeCSS': '',
    },
    {
      'tag': 'iframe',
      'group': 'Elems. de contenido incrustado',
      'url': 'https://developer.mozilla.org/en/docs/Web/HTML/Element/iframe',
      'description': '',
      'codeHTML': '',
      'codeCSS': '',
    },


    {
      'tag': 'canvas',
      'group': 'Elems. de contenido incrustado',
      'url': 'https://developer.mozilla.org/en/docs/Web/HTML/Element/canvas',
      'description': '',
      'codeHTML': '',
      'codeCSS': '',
    },
    {
      'tag': 'svg',
      'group': 'Elems. de contenido incrustado',
      'url': 'https://developer.mozilla.org/en/docs/Web/HTML/Element/svg',
      'description': '',
      'codeHTML': '',
      'codeCSS': '',
    },
    {
      'tag': 'math',
      'group': 'Elems. para MathML',
      'url': 'https://developer.mozilla.org/en/docs/Web/HTML/Element/math',
      'description': '',
      'codeHTML': '',
      'codeCSS': '',
    },

    /* NUEVOS */
    /* NUEVOS */
    /* NUEVOS */
    /* NUEVOS */
    /* NUEVOS */

  ],
  'distribution': [
    'Elemento root',
    'Elems. de estructura',
    'Elems. de texto',
    'Elems. de enlace',
    'Elems. de enfasis',
    'Elems. de estilo',
    'Elems. de codigo y variable',
    'Elems. para anotaciones ruby',
    'Elems. de direccion',
    'Elems. de salto de linea',
    'Elems. de formulario',
    'Elems. de lista',
    'Elems. para secciones',
    'Elems. de interacción',
    'Elems. de tabla',
    'Elems. multimedia',
    'Elems. de contenido incrustado',
    'Elems. para MathML',
  ],
}