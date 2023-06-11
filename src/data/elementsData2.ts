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
    <p>Hola mundo</p>
</body>

</html>
`,
    },
    {
      'tag': 'head',
      'group': 'Elems. de estructura',
      'url': 'https://developer.mozilla.org/en/docs/Web/HTML/Element/head',
      'description': 'Se utiliza para incluir metadatos y otros elementos que **no forman parte del contenido visible en la página web**, pero que son importantes para el funcionamiento y presentación del documento.',
      'codeHTML': `<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <title>Título de la página</title>
    <link rel="stylesheet" href="styles.css">
    <script src="script.js"></script>
</head>

<body>
    <p>Hola mundo</p>
</body>

</html>
`,
    },
    {
      'tag': 'title',
      'group': 'Elems. de estructura',
      'url': 'https://developer.mozilla.org/en/docs/Web/HTML/Element/title',
      'description': 'Se utiliza para **definir el título** de un documento HTML. El título se muestra en la barra de título del navegador o en la pestaña del navegador cuando se abre la página web.',
      'codeHTML': `<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <!-- aqui se define el titulo del dicumento HTML -->
    <title>Título de la página</title>
</head>
<body>
    <p>Hola mundo</p>
</body>
</html>
`,
    },
    {
      'tag': 'base',
      'group': 'Elems. de estructura',
      'url': 'https://developer.mozilla.org/en/docs/Web/HTML/Element/base',
      'description': 'Se utiliza para **especificar la URL base para todas las URL relativas** en un documento HTML. Establecer el elemento <base> permite evitar la repetición de la URL base en todas las URL relativas dentro del documento.',
      'codeHTML': `<!DOCTYPE html>
<html>
<head>
    <!-- aqui se define que https://www.ejemplo.com sera la url base -->
    <base href="https://www.ejemplo.com/">
    <title>Título de la página</title>
</head>
<body>
    <!-- ahora esta url sera igual a https://www.ejemplo.com/pagina.html -->
    <a href="pagina.html">Enlace a otra página</a>
</body>
</html>
`,
    },
    {
      'tag': 'link',
      'group': 'Elems. de estructura',
      'url': 'https://developer.mozilla.org/en/docs/Web/HTML/Element/link',
      'description': 'Se utiliza para **enlazar recursos externos**. Utilizado principalmente para enlazar hojas de estilo CSS, pero también otros tipos de recursos, como fuentes, iconos, archivos de JavaScript, archivos de imagen y más.',
      'codeHTML': `<!DOCTYPE html>
<html>

<head>
    <title>Título de la página</title>
    <!-- usando la etiqueta link para enlazar recursos externos -->
    <link rel="icon" href="favicon.ico" type="image/x-icon">
    <link rel="stylesheet" href="styles.css">
    <link rel="preload" href="script.js" as="script">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto">
</head>
<body>
    <p>Hola mundo</p>
</body>

</html>
`,
    },
    {
      'tag': 'meta',
      'group': 'Elems. de estructura',
      'url': 'https://developer.mozilla.org/en/docs/Web/HTML/Element/meta',
      'description': 'Se utiliza para agregar **metadatos** al documento HTML. Los metadatos son **información adicional** que no se muestra directamente en la página, pero que proporciona detalles sobre el documento, como la **descripción, palabras clave, autor, codificación de caracteres y más**.',
      'codeHTML': `<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <meta name="author" content="Nombre del autor">
    <meta name="description" content="Descripción del sitio web">
    <meta name="keywords" content="palabra clave 1, palabra clave 2">
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="robots" content="index, follow">
    <title>Título de la página</title>
</head>
<body>
    <p>Hola mundo</p>
</body>

</html>
`,
    },
    {
      'tag': 'style',
      'group': 'Elems. de estructura',
      'url': 'https://developer.mozilla.org/en/docs/Web/HTML/Element/style',
      'description': 'Se utiliza para **incluir reglas de estilo CSS directamente dentro del documento HTML**. Esto te permite aplicar estilos específicos a elementos individuales o grupos de elementos sin la necesidad de enlazar una hoja de estilo externa.',
      'codeHTML': `<!DOCTYPE html>
<html>
<head>
    <title>Título de la página</title>
    <!-- Reglas de estilo CSS -->
    <style>
        h1 {
            background-color: yellow;
        }
        p {
            color: red;
        }
    </style>
</head>
<body>
    <h1>Título de la sección</h1>
    <p>Este es un párrafo de ejemplo.</p>
</body>
</html>
`,
    },
    {
      'tag': 'noscript',
      'group': 'Elems. de estructura',
      'url': 'https://developer.mozilla.org/en/docs/Web/HTML/Element/noscript',
      'description': 'Se utiliza para **proporcionar contenido alternativo que se mostrará si el navegador del usuario no admite JavaScript** o si JavaScript está deshabilitado en el navegador.',
      'codeHTML': `<!DOCTYPE html>
<html>
<head>
    <title>Título de la página</title>
</head>
<body>
    <p>Hola mundo</p>
    <noscript>
        <p>El JavaScript está deshabilitado en tu navegador.
          Para ver este sitio web correctamente, habilita JavaScript
          en la configuración de tu navegador.</p>
    </noscript>
</body>
</html>
`,
    },
    {
      'tag': 'script',
      'group': 'Elems. de estructura',
      'url': 'https://developer.mozilla.org/en/docs/Web/HTML/Element/script',
      'description': 'Se utiliza para **insertar o enlazar código JavaScript** en un documento HTML. Puedes utilizarlo para ejecutar scripts directamente en el documento o para enlazar archivos de JavaScript externos.',
      'codeHTML': `<!DOCTYPE html>
<html>
<head>
    <title>Título de la página</title>
</head>
<body>
    <p>Hola mundo</p>
    <!--  Código JavaScript en línea -->
    <script>
        console.log("Hola, mundo!");
    </script>
</body>
</html>
`,
    },
    {
      'tag': 'body',
      'group': 'Elems. de estructura',
      'url': 'https://developer.mozilla.org/en/docs/Web/HTML/Element/body',
      'description': 'Se utiliza para **envolver el contenido visible** de una página web. Todo el contenido que deseas que los usuarios vean y experimenten en el navegador se coloca dentro del elemento **<body>**.',
      'codeHTML': `<!DOCTYPE html>
<html>
<head>
    <title>Título de la página</title>
</head>
<body>
    <!-- Contenido visible de la página -->
    <h1>Título de la página</h1>
    <p>Este es un párrafo de ejemplo.</p>
    <img src="data:image/jpeg;base64,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" alt="Descripción de la imagen">
    <ul>
        <li>Elemento de lista 1</li>
        <li>Elemento de lista 2</li>
        <li>Elemento de lista 3</li>
    </ul>
    <!-- Más contenido -->
</body>
</html>
`,
    },
    {
      'tag': 'template',
      'group': 'Elems. de estructura',
      'url': 'https://developer.mozilla.org/en/docs/Web/HTML/Element/template',
      'description': 'Se utiliza **para definir contenido que no se mostrará de forma inmediata en la página**, pero que se puede **clonar** y **utilizar** posteriormente mediante scripts.',
      'codeHTML': `<!DOCTYPE html>
<html>
<head>
    <title>Título de la página</title>
</head>
<body>
    <div id='container'></div>

    <template id="miTemplate">
      <h2>Título del elemento clonado</h2>
      <p>Contenido del elemento clonado.</p>
    </template>
</body>
</html>
`,
      'codeCSS':`#container{
  border:1px solid red;
}`,
      'codeJS': `const miContainer = document.getElementById('container');

// Obtén una referencia al template utilizando su ID
const miTemplate = document.getElementById('miTemplate');

// Clona el contenido del template
const clonedElement = miTemplate.content.cloneNode(true);

// Agrega el elemento clonado al cuerpo del documento
miContainer.appendChild(clonedElement);
      `,
    },
    /* XXXXXXXXXXXXXXXXXXXXXXX */
    {
      'tag': 'p',
      'group': 'Elems. de texto',
      'url': 'https://developer.mozilla.org/en/docs/Web/HTML/Element/p',
      'description': `Se utiliza para **representar un párrafo de texto** en un documento HTML.

Es uno de los elementos más comunes y básicos para estructurar y formatear el contenido de texto.`,
      'codeHTML': `<!DOCTYPE html>
<html>
<head>
    <title>Título de la página</title>
</head>
<body>
    <p>Este es un párrafo de ejemplo.</p>
    <p>Este es otro párrafo.</p>
    <p>Y aquí hay un tercer párrafo.</p>
</body>
</html>
`,
    },
    {
      'tag': 'span',
      'group': 'Elems. de texto',
      'url': 'https://developer.mozilla.org/en/docs/Web/HTML/Element/span',
      'description': 'A diferencia del elemento **<p>**, el elemento **<span>** no representa un bloque de texto independiente, sino que **se utiliza para aplicar estilos o manipular partes más pequeñas de texto dentro de un bloque de texto más grande**.',
      'codeHTML': `<p>Este es un texto con <span class="resaltado">una parte resaltada</span>.</p>
<p>Otro <span class="cursiva">texto</span> con diferentes estilos.</p>
`,
      codeCSS: `.resaltado {
  color: red;
  font-weight: bold;
}

.cursiva{
  font-style: italic;
  color: blue;
}`,
    },
    {
      'tag': 'h1 - h6',
      'group': 'Elems. de texto',
      'url': 'https://developer.mozilla.org/en/docs/Web/HTML/Element/h1',
      'description': 'Las etiquetas **<h1>** a **<h6>** se utilizan para **definir encabezados o títulos de diferentes niveles de importancia en una página web**. La etiqueta <h1> representa el encabezado de nivel más alto y la etiqueta <h6> representa el encabezado de nivel más bajo.',
      'codeHTML': `<!DOCTYPE html>
<html>
<head>
    <title>Título de la página</title>
</head>
<body>
    <h1>Encabezado de nivel 1</h1>
    <h2>Encabezado de nivel 2</h2>
    <h3>Encabezado de nivel 3</h3>
    <h4>Encabezado de nivel 4</h4>
    <h5>Encabezado de nivel 5</h5>
    <h6>Encabezado de nivel 6</h6>
</body>
</html>
`,
    },
    {
      'tag': 'address',
      'group': 'Elems. de texto',
      'url': 'https://developer.mozilla.org/en/docs/Web/HTML/Element/address',
      'description': 'Se utiliza para **representar información de contacto o detalles de ubicación**, como una dirección postal, un número de teléfono o una dirección de correo electrónico.',
      'codeHTML': `<!DOCTYPE html>
<html>
<head>
    <title>Título de la página</title>
</head>
<body>
    <address>
        Leche Gloria S.A.A.<br>
        Av. Argentina 4793<br>
        Callao 07021, Perú<br>
        Teléfono: <a href="tel:+5117156000">+51 1 7156000</a><br>
        Email: <a href="mailto:info@lechegloria.pe">info@lechegloria.pe</a>
    </address>
</body>
</html>
`,
    },
    {
      'tag': 'blockquote',
      'group': 'Elems. de texto',
      'url': 'https://developer.mozilla.org/en/docs/Web/HTML/Element/blockquote',
      'description': 'Se utiliza para **resaltar citas o fragmentos de texto que han sido extraídos de otra fuente**.',
      'codeHTML': `<!DOCTYPE html>
<html>
<head>
    <title>Título de la página</title>
</head>
<body>
    <blockquote cite="https://www.brainyquote.com/quotes/albert_einstein">
        <p>"La creatividad es la inteligencia divirtiéndose." </p>
        <footer>Albert Einstein</footer>
    </blockquote>
</body>
</html>
`,
    },
    {
      'tag': 'pre',
      'group': 'Elems. de texto',
      'url': 'https://developer.mozilla.org/en/docs/Web/HTML/Element/pre',
      'description': 'Se utiliza para **mostrar texto preformateado**, lo que significa que **conservará el espaciado y los saltos de línea tal como están escritos en el código fuente**.',
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
    },
    {
      'tag': 'a',
      'group': 'Elems. de enlace',
      'url': 'https://developer.mozilla.org/en/docs/Web/HTML/Element/a',
      'description': '**Se utiliza para crear enlaces (hipervínculos)** a otras páginas web, archivos, ubicaciones dentro del mismo documento o direcciones de correo electrónico, o cualquier otra URL.',
      'codeHTML': `<p>Puede ponerse en contacto con Mario en:</p>

<ul>
  <li><a href="https://example.com">Website</a></li>
  <li><a href="mailto:m.bluth@example.com">Email</a></li>
  <li><a href="tel:+123456789">Phone</a></li>
</ul>
`,
      'codeJS': '',
    },
    {
      'tag': 'em',
      'group': 'Elems. de enfasis',
      'url': 'https://developer.mozilla.org/en/docs/Web/HTML/Element/em',
      'description': 'Se utiliza **para resaltar texto enfatizado dentro de un bloque de texto**. El texto enfatizado generalmente se muestra en cursiva por defecto en la mayoría de los navegadores web. <i> esta obsoleto, es mejor usar <em>',
      'codeHTML': '<p>Por favor, <em>no toques</em> el objeto caliente.</p>',
      'codeJS': '',
    },
    {
      'tag': 'strong',
      'group': 'Elems. de enfasis',
      'url': 'https://developer.mozilla.org/en/docs/Web/HTML/Element/strong',
      'description': 'Se utiliza para **resaltar texto fuertemente**, es decir, para **indicar que una parte del contenido tiene mayor importancia o énfasis**. A diferencia del elemento <em>, el texto resaltado con <strong> no tiene un estilo de visualización específico asociado de forma predeterminada. <b> esta obsoleto, es mejor usar <strong>',
      'codeHTML': '<p>¡Advertencia! <strong>No ingresar sin autorización</strong>.</p>',
    },
    {
      'tag': 'small',
      'group': 'Elems. de enfasis',
      'url': 'https://developer.mozilla.org/en/docs/Web/HTML/Element/small',
      'description': 'Se utiliza para **representar texto en una escala más pequeña**, generalmente para **indicar información adicional, notas a pie de página o contenido de menor importancia**.',
      'codeHTML': `<p>El precio indicado es sin impuestos.
  <small>Los impuestos aplicables se agregarán al finalizar la compra.</small>
</p>`,
    },
    {
      'tag': 's',
      'group': 'Elems. de enfasis',
      'url': 'https://developer.mozilla.org/en/docs/Web/HTML/Element/s',
      'description': `Se utiliza para **representar texto que ha sido eliminado o que ya no es válido**.

Se suele mostrar con una línea horizontal a través del texto. Se utiliza principalmente para indicar una modificación o una eliminación, y no se debe utilizar solo con fines estilísticos`,
      'codeHTML': '<p>Este es un texto de ejemplo <s>tachado</s>.</p>',
    },
    {
      'tag': 'cite',
      'group': 'Elems. de enfasis',
      'url': 'https://developer.mozilla.org/en/docs/Web/HTML/Element/cite',
      'description': 'Se utiliza **para brindar información sobre la fuente de una cita o referencia**, y se recomienda utilizarlo en situaciones en las que se hace una referencia explícita a una obra o recurso, como un libro, un artículo, una película, etc.',
      'codeHTML': `<p>Según el autor,
    <cite>Título del libro</cite>
    es una obra imprescindible para comprender el tema.
</p>
`,
    },
    {
      'tag': 'q',
      'group': 'Elems. de enfasis',
      'url': 'https://developer.mozilla.org/en/docs/Web/HTML/Element/q',
      'description': 'Se utiliza para **indicar citas en línea, es decir, fragmentos cortos de texto que se extraen de una fuente externa** y se muestra entre comillas (comillas dobles) en la mayoría de los navegadores. Es importante destacar que el elemento "q" se utiliza para citar texto breve en línea y **no debe confundirse con el elemento "blockquote"** que se utiliza para citas más largas o bloques de texto citados.',
      'codeHTML': '<p>El autor dijo: <q>Este es un ejemplo de una cita en línea.</q></p>',
    },
    {
      'tag': 'dfn',
      'group': 'Elems. de enfasis',
      'url': 'https://developer.mozilla.org/en/docs/Web/HTML/Element/dfn',
      'description': 'Se utiliza para **definir el significado de un término o una frase**. El término definido se muestra resaltado en negrita o cursiva para destacarlo.',
      'codeHTML': '<p>La etiqueta <dfn>dfn</dfn> se utiliza para definir términos en HTML.</p>',
    },
    {
      'tag': 'abbr',
      'group': 'Elems. de enfasis',
      'url': 'https://developer.mozilla.org/en/docs/Web/HTML/Element/abbr',
      'description': 'Es un elemento de Abreviación, **representa una abreviación o acrónimo**; el atributo opcional title puede ampliar o describir la abreviatura. Si está presente, el atributo title debe contener la descripción completa y nada más.',
      'codeHTML': '<p>I do <abbr title="Hypertext Markup Language">HTML</abbr></p>',
      'codeJS': '',
    },
    {
      'tag': 'time',
      'group': 'Elems. de enfasis',
      'url': 'https://developer.mozilla.org/en/docs/Web/HTML/Element/time',
      'description': 'Se utiliza para **representar fechas y horas en un formato estructurado y semántico**',
      'codeHTML': `<p>La fecha de publicación es
    <time datetime="2023-06-10">10 de junio de 2023</time>.
</p>`,
    },
    // {
    //   'tag': 'i',
    //   'group': 'Elems. de estilo',
    //   'url': 'https://developer.mozilla.org/en/docs/Web/HTML/Element/i',
    //   'description': 'Se utiliza para **aplicar estilo a un fragmento de texto y mostrarlo en cursiva**. Sin embargo, es importante tener en cuenta que la etiqueta <i> se utiliza principalmente para indicar un cambio en el estilo de fuente, no para transmitir información adicional o énfasis semántico',
    //   'codeHTML': '<p>Este es un texto de ejemplo <i>en cursiva</i>.</p>',
    // },
    // {
    //   'tag': 'b',
    //   'group': 'Elems. de estilo',
    //   'url': 'https://developer.mozilla.org/en/docs/Web/HTML/Element/b',
    //   'description': '',
    //   'codeHTML': '',
    //   'codeJS': '',
    // },
    // {
    //   'tag': 'u',
    //   'group': 'Elems. de estilo',
    //   'url': 'https://developer.mozilla.org/en/docs/Web/HTML/Element/u',
    //   'description': '',
    //   'codeHTML': '',
    //   'codeJS': '',
    // },
    {
      'tag': 'mark',
      'group': 'Elems. de estilo',
      'url': 'https://developer.mozilla.org/en/docs/Web/HTML/Element/mark',
      'description': 'Se utiliza para **resaltar o destacar un fragmento de texto dentro de un párrafo u otro elemento de texto**. El contenido envuelto se mostrará con un fondo resaltado por defecto, generalmente en amarillo, se utiliza comúnmente para resaltar términos de búsqueda o partes importantes de un texto.',
      'codeHTML': '<p>Texto de ejemplo <mark>resaltado</mark> dentro de un párrafo.</p>',
    },
    {
      'tag': 'code',
      'group': 'Elems. de codigo y variable',
      'url': 'https://developer.mozilla.org/en/docs/Web/HTML/Element/code',
      'description': 'Se utiliza para **marcar un fragmento de texto como código o código de programación**. El contenido dentro de la etiqueta <code> se mostrará en una fuente de monoespacio y con un estilo predeterminado que puede variar según el navegador. Si deseas resaltar aún más el código, puedes combinar la etiqueta **<code>** con la etiqueta **<pre>** para preservar el formato y los espacios en blanco del código.',
      'codeHTML': `<pre>
<code>function sumar(a, b) {
  return a + b;
}
</code>
</pre>
`,
    },
    {
      'tag': 'var',
      'group': 'Elems. de codigo y variable',
      'url': 'https://developer.mozilla.org/en/docs/Web/HTML/Element/var',
      'description': 'Se utiliza para **marcar una variable o un valor variable dentro de un texto**. Esta etiqueta se utiliza principalmente en contextos matemáticos o científicos para representar variables. La etiqueta <var> no proporciona ningún estilo o funcionalidad adicional por sí misma. Simplemente indica visualmente que el contenido marcado es una variable. Puedes utilizar CSS para aplicar estilos adicionales a los elementos <var>, como cambiar el color de fuente o aplicar estilos específicos para resaltar las variables en tu documento.',
      'codeHTML': `<p>La fórmula del área de un círculo es:
  <var>A</var> = <var>π</var>r<sup>2</sup>.
</p>`,
    },
    {
      'tag': 'samp',
      'group': 'Elems. de codigo y variable',
      'url': 'https://developer.mozilla.org/en/docs/Web/HTML/Element/samp',
      'description': 'Se utiliza para **representar una salida de muestra, como una salida de programa o una respuesta de un sistema**. Indica que el contenido dentro de la etiqueta representa una muestra o ejemplo de salida.',
      'codeHTML': '<p>La salida del programa es: <samp>Hola, mundo!</samp></p>',
    },
    {
      'tag': 'kbd',
      'group': 'Elems. de codigo y variable',
      'url': 'https://developer.mozilla.org/en/docs/Web/HTML/Element/kbd',
      'description': 'Se utiliza para **representar la entrada del usuario a través del teclado, como pulsaciones de teclas o combinaciones de teclas**. Se utiliza para resaltar y mostrar visualmente la entrada del teclado, por defecto no proporciona estilos pero con CSS lo puedes hacer.',
      'codeHTML': '<p>Pulsa la tecla <kbd>Enter</kbd> para enviar el formulario.</p>',
      codeCSS: `kbd {
  display: inline-block;
  border: 1px solid #999;
  border-radius: 4px;
  padding: 4px 8px;
  font-family: Arial, sans-serif;
  font-size: 14px;
  background-color: #f5f5f5;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.1);
}

kbd:hover {
  background-color: #e0e0e0;
}

kbd:active {
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
  transform: translateY(1px);
}`,
    },
    {
      'tag': 'sup',
      'group': 'Elems. de codigo y variable',
      'url': 'https://developer.mozilla.org/en/docs/Web/HTML/Element/sub',
      'description': 'Se utiliza para **representar texto o contenido que debe mostrarse como superíndice**, es decir, en una posición superior a la línea de texto principal. Se utiliza comúnmente para representar exponentes, números ordinales o notas a pie de página.',
      'codeHTML': `<p>La fórmula química del dióxido de carbono es CO<sup>2</sup>.
</p><p>Hoy es el 1<sup>er</sup> de enero.</p>`,
    },
    {
      'tag': 'sub',
      'group': 'Elems. de codigo y variable',
      'url': 'https://developer.mozilla.org/en/docs/Web/HTML/Element/sup',
      'description': 'Se utiliza para **representar texto o contenido que debe mostrarse como subíndice**, es decir, en una posición inferior a la línea de texto principal. Se utiliza comúnmente para representar fórmulas matemáticas, fórmulas químicas o notas a pie de página.',
      'codeHTML': '<p>La fórmula química del agua es H<sub>2</sub>O.</p>',
    },
    {
      'tag': 'ruby',
      'group': 'Elems. para anotaciones ruby',
      'url': 'https://developer.mozilla.org/en/docs/Web/HTML/Element/ruby',
      'description': 'Se utiliza para representar texto con anotaciones ruby. Las anotaciones ruby **son pequeñas anotaciones o explicaciones que se colocan encima o al lado de caracteres o palabras** para proporcionar su pronunciación o significado.',
      'codeHTML': '<ruby>漢<rp>(</rp><rt>かん</rt><rp>)</rp></ruby>字<ruby>辞<rp>(</rp><rt>じ</rt><rp>)</rp></ruby>典<ruby>（<rp>(</rp><rt>てん</rt><rp>)</rp></ruby>） ',
    },
    {
      'tag': 'rt',
      'group': 'Elems. para anotaciones ruby',
      'url': 'https://developer.mozilla.org/en/docs/Web/HTML/Element/rt',
      'description': 'Se utiliza en conjunto con la etiqueta <ruby> para **representar la pronunciación o significado de los caracteres o palabras**. La etiqueta <rt> se coloca dentro de la etiqueta **<ruby>** para indicar la anotación ruby asociada.',
      'codeHTML': '<ruby>漢<rp>(</rp><rt>かん</rt><rp>)</rp></ruby>字<ruby>辞<rp>(</rp><rt>じ</rt><rp>)</rp></ruby>典<ruby>（<rp>(</rp><rt>てん</rt><rp>)</rp></ruby>） ',
    },
    {
      'tag': 'rp',
      'group': 'Elems. para anotaciones ruby',
      'url': 'https://developer.mozilla.org/en/docs/Web/HTML/Element/rp',
      'description': 'Se utiliza en conjunto con la etiqueta <ruby> para **proporcionar paréntesis de reserva en caso de que el navegador no admita o muestre las anotaciones ruby**.',
      'codeHTML': '<ruby>漢<rp>(</rp><rt>かん</rt><rp>)</rp></ruby>字<ruby>辞<rp>(</rp><rt>じ</rt><rp>)</rp></ruby>典<ruby>（<rp>(</rp><rt>てん</rt><rp>)</rp></ruby>）',
    },
    {
      'tag': 'bdi',
      'group': 'Elems. de direccion',
      'url': 'https://developer.mozilla.org/en/docs/Web/HTML/Element/bdi',
      'description': 'Se utiliza para **aislar una parte del texto** que debe ser formateada de manera independiente del texto que la rodea, especialmente cuando se trata de **texto en diferentes idiomas o direcciones de escritura**.',
      'codeHTML': '<p>El resultado es: <bdi>مرحبا بك</bdi></p>',
    },
    {
      'tag': 'bdo',
      'group': 'Elems. de direccion',
      'url': 'https://developer.mozilla.org/en/docs/Web/HTML/Element/bdo',
      'description': 'Se utiliza para **especificar la dirección de escritura de un fragmento de texto**, lo cual puede ser útil cuando se necesita cambiar la dirección de escritura de un fragmento de texto en un contexto específico. es especialmente útil cuando se trabaja con idiomas que se escriben de derecha a izquierda, como el árabe, el hebreo o el persa. También puede ser utilizado para fines de estilo y diseño, cuando se desea presentar un fragmento de texto con una dirección de escritura diferente.',
      'codeHTML': `<p>Este es un ejemplo de texto en español: <bdo dir="rtl">¡Hola!</bdo></p>

<!-- rtl = Right-to-Left -->`,
    },
    {
      'tag': 'br',
      'group': 'Elems. de salto de linea',
      'url': 'https://developer.mozilla.org/en/docs/Web/HTML/Element/br',
      'description': 'Se utiliza para **insertar un salto de línea o una línea en blanco dentro de un texto**. No requiere una etiqueta de cierre y se considera una etiqueta de autocierra.',
      'codeHTML': '<p>Este es un texto que se muestra en una línea.<br>Este es otro texto que aparecerá en la línea siguiente.</p>',
    },
    {
      'tag': 'wbr',
      'group': 'Elems. de salto de linea',
      'url': 'https://developer.mozilla.org/en/docs/Web/HTML/Element/wbr',
      'description': 'Se utiliza para indicar un posible punto de quiebre opcional dentro de una palabra o una secuencia de caracteres. Sirve para indicar al navegador que puede realizar un salto de línea en ese punto si es necesario para ajustar el contenido en un espacio limitado.',
      'codeHTML': '<p>Esta es una palabra larga que puede ser dividida en varias líneas si es necesario: supe<wbr>rcalifragilistic<wbr>expialidocious</p>',
    },
    {
      'tag': 'form',
      'group': 'Elems. de formulario',
      'url': 'https://developer.mozilla.org/en/docs/Web/HTML/Element/form',
      'description': 'Se utiliza para **crear un formulario** en una página web. Los formularios son utilizados para recopilar información del usuario, como nombres, contraseñas, opciones seleccionadas, etc.',
      'codeHTML': `<form action="/procesar-formulario" method="POST">
  <label for="nombre">Nombre:</label>
  <input type="text" id="nombre" name="nombre" required>

  <label for="email">Email:</label>
  <input type="email" id="email" name="email" required>

  <input type="submit" value="Enviar">
</form>
`,
      codeCSS: `form{
  display: flex;
  flex-direction: column;
  max-width: 200px;
  gap: .3rem;
}`,
    },
    {
      'tag': 'fieldset',
      'group': 'Elems. de formulario',
      'url': 'https://developer.mozilla.org/en/docs/Web/HTML/Element/fieldset',
      'description': 'Se utiliza para **agrupar y etiquetar un conjunto de elementos relacionados en un formulario**. Proporciona una manera de organizar y estructurar los elementos del formulario de manera más semántica y visualmente coherente.',
      'codeHTML': `<form>
    <fieldset>
        <legend>Información Personal</legend>
        <label for="nombre">Nombre:</label>
        <input type="text" id="nombre" name="nombre" required><br>

        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required>
    </fieldset>

    <fieldset>
        <legend>Preferencias</legend>
        <input type="checkbox" id="opc1" name="opcion1">
        <label for="opc1">Opción 1</label><br>

        <input type="checkbox" id="opc2" name="opcion2">
        <label for="opc2">Opción 2</label><br>
    </fieldset>

    <input type="submit" value="Enviar">
</form>
`,
      codeCSS: `form{
  display:flex;
  flex-direction: column;
  gap:1rem;
}`,
    },
    {
      'tag': 'legend',
      'group': 'Elems. de formulario',
      'url': 'https://developer.mozilla.org/en/docs/Web/HTML/Element/legend',
      'description': 'Se utiliza dentro de la etiqueta <fieldset> para **proporcionar un título o una descripción al grupo de elementos relacionados en un formulario**.',
      'codeHTML': `<fieldset>
    <legend>Información Personal</legend>
    <label for="nombre">Nombre:</label>
    <input type="text" id="nombre" name="nombre" required><br>

    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required>
</fieldset>
`,
    },
    {
      'tag': 'label',
      'group': 'Elems. de formulario',
      'url': 'https://developer.mozilla.org/en/docs/Web/HTML/Element/label',
      'description': 'Se utiliza para **asociar una etiqueta descriptiva a un elemento de formulario**, como un campo de entrada o una casilla de verificación. El uso de la etiqueta <label> mejora la usabilidad del formulario, **ya que permite a los usuarios hacer clic en la etiqueta para activar el elemento correspondiente**.',
      'codeHTML': `<!-- Primera forma -->
<label for="nombre">Nombre:</label>
<input type="text" id="nombre" name="nombre"><br>

<!-- Segunda forma -->
<label>
  Apellido:
  <input type="text" name="lastname">
</label>
`,
    },
    {
      'tag': 'input',
      'group': 'Elems. de formulario',
      'url': 'https://developer.mozilla.org/en/docs/Web/HTML/Element/input',
      'description': `Se utiliza para **crear campos de entrada interactivos dentro de formularios web**. Los campos de entrada permiten a los usuarios ingresar y enviar datos al servidor.

Cuando el usuario hace clic en el botón de imagen **<input type="image"/>**, se envía el formulario asociado al botón de la misma manera que lo haría un botón de envío. Además, las coordenadas x e y del clic del usuario en la imagen también se envían al servidor como parte de la solicitud, lo que puede ser útil en ciertos escenarios.`,
      'codeHTML': `<!-- Campo de texto -->
<label>Nombre:
    <input type="text">
</label><br>

<!-- Campo de contraseña -->
<label>Contraseña:
    <input type="password">
</label><br>

<!-- Campo de correo electrónico -->
<label>Correo electrónico:
    <input type="email">
</label><br>

<!-- Campo de número -->
<label>Número:
    <input type="number">
</label><br>

<!-- Campo de teléfono -->
<label>Teléfono:
    <input type="tel">
</label><br>

<!-- Campo de fecha -->
<label>Fecha:
    <input type="date">
</label><br>

<!-- Campo de hora -->
<label>Hora:
    <input type="time">
</label><br>

<!-- Campo de búsqueda -->
<label>Búsqueda:
    <input type="search">
</label><br>

<!-- Campo de URL -->
<label>URL:
    <input type="url">
</label><br>

<!-- Campo de archivo -->
<label>Archivo:
    <input type="file">
</label><br>

<!-- Casilla de verificación -->
<label>
    <input type="checkbox">
    Acepto los términos y condiciones
</label><br>

<!-- Botón de radio -->
<label>
    <input type="radio" name="genero" value="masculino">
    Masculino
</label>
<label>
    <input type="radio" name="genero" value="femenino">
    Femenino
</label><br>

<!-- Botón de envío -->
<input type="submit" value="Enviar"><br>

<!-- Botón de reinicio -->
<input type="reset" value="Reiniciar"><br>

<!-- Botón de imagen -->
<input type="image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK5e-YX7QAeLZJByeZsGrRsckwKJgrTzN6Sg&usqp=CAU" alt="Botón de imagen"><br>

<!-- Selector de color -->
<label>Color:
    <input type="color">
</label><br>

<!-- Barra de deslizamiento (rango) -->
<label>Valor:
    <input type="range" min="0" max="100" step="1">
</label><br>

<!-- Selector de fecha y hora -->
<label>Fecha y hora:
    <input type="datetime-local">
</label><br>

<!-- Selector de mes -->
<label>Mes:
    <input type="month">
</label><br>

<!-- Selector de semana -->
<label>Semana:
    <input type="week">
</label><br>

`,
    },
    {
      'tag': 'button',
      'group': 'Elems. de formulario',
      'url': 'https://developer.mozilla.org/en/docs/Web/HTML/Element/button',
      'description': 'Se utiliza para **crear un botón interactivo** en una página web',
      'codeHTML': `<button type="button">Haz clic</button>

<button type="button">
    <span class="icono"></span>
    Clic aquí
</button>`,
    },
    {
      'tag': 'select',
      'group': 'Elems. de formulario',
      'url': 'https://developer.mozilla.org/en/docs/Web/HTML/Element/select',
      'description': `Se utiliza para **crear una lista desplegable de opciones seleccionables**.

**name:** Especifica el nombre del elemento de selección. para cuando se envía el formulario.

**size:** Define el número de opciones visibles a la vez en la lista desplegable.

**multiple:** Para permitir seleccionar múltiples opciones en la lista desplegable.`,
      'codeHTML': `<select name="frutas" size="5" multiple>
    <option value="manzana">Manzana</option>
    <option value="pera">Pera</option>
    <option value="naranja">Naranja</option>
    <option value="banana">Banana</option>
    <option value="uva">Uva</option>
    <option value="sandía">Sandía</option>
    <option value="mango">Mango</option>
    <option value="piña">Piña</option>
    <option value="fresa">Fresa</option>
    <option value="melón">Melón</option>
    <option value="kiwi">Kiwi</option>
    <option value="cereza">Cereza</option>
    <option value="limón">Limón</option>
    <option value="mandarina">Mandarina</option>
    <option value="durazno">Durazno</option>
    <option value="albaricoque">Albaricoque</option>
    <option value="higo">Higo</option>
    <option value="ciruela">Ciruela</option>
    <option value="frambuesa">Frambuesa</option>
    <option value="arándano">Arándano</option>
    <option value="mora">Mora</option>
    <option value="zarzamora">Zarzamora</option>
    <option value="guayaba">Guayaba</option>
    <option value="maracuyá">Maracuyá</option>
    <option value="granada">Granada</option>
    <option value="manzana verde">Manzana verde</option>
    <option value="coco">Coco</option>
    <option value="papaya">Papaya</option>
    <option value="níspero">Níspero</option>
    <option value="fruta de la pasión">Fruta de la pasión</option>
</select>
`,
    },
    {
      'tag': 'datalist',
      'group': 'Elems. de formulario',
      'url': 'https://developer.mozilla.org/en/docs/Web/HTML/Element/datalist',
      'description': 'Se utiliza junto con el elemento <input> para **proporcionar una lista de opciones sugeridas o autocompletadas** para el usuario',
      'codeHTML': `<!-- nuestro input -->
<label for="fruta">Selecciona una fruta:</label>
<input type="text" name="fruta" list="frutas">

<!-- aqui ponemos los posibles valores -->
<datalist id="frutas">
  <option value="Manzana">
  <option value="Plátano">
  <option value="Naranja">
  <option value="Mango">
  <option value="Uva">
</datalist>
`,
      'codeJS': '',
    },

    {
      'tag': 'optgroup',
      'group': 'Elems. de formulario',
      'url': 'https://developer.mozilla.org/en/docs/Web/HTML/Element/optgroup',
      'description': 'Se utiliza dentro del elemento <select> para **agrupar opciones relacionadas**. Esto permite organizar visualmente las opciones en categorías o grupos. ',
      'codeHTML': `<select>
  <optgroup label="Frutas">
    <option value="manzana">Manzana</option>
    <option value="pera">Pera</option>
    <option value="naranja">Naranja</option>
  </optgroup>
  <optgroup label="Verduras">
    <option value="zanahoria">Zanahoria</option>
    <option value="lechuga">Lechuga</option>
    <option value="tomate">Tomate</option>
  </optgroup>
</select>
`,
    },
    {
      'tag': 'option',
      'group': 'Elems. de formulario',
      'url': 'https://developer.mozilla.org/en/docs/Web/HTML/Element/option',
      'description': 'Se utiliza dentro del elemento <select> para **definir una opción seleccionable dentro de la lista desplegable**.',
      'codeHTML': `<select>
  <option value="opcion1">Opción 1</option>
  <option value="opcion2">Opción 2</option>
  <option value="opcion3">Opción 3</option>
</select>
`,
    },
    {
      'tag': 'textarea',
      'group': 'Elems. de formulario',
      'url': 'https://developer.mozilla.org/en/docs/Web/HTML/Element/textarea',
      'description': 'Se utiliza para **crear un campo de texto de múltiples líneas** donde los usuarios pueden ingresar y editar texto.',
      'codeHTML': '<textarea name="mensaje" rows="4" cols="30"></textarea>',
      codeJS: `const obtenerTexto = () => {
  let texto = document.getElementById("myTextarea").value;
  console.log(texto);
}
`,
    },
    {
      'tag': 'output',
      'group': 'Elems. de formulario',
      'url': 'https://developer.mozilla.org/en/docs/Web/HTML/Element/output',
      'description': 'Se utiliza para **mostrar resultados de cálculos** o **procesos** en la página web, no está limitado a operaciones matemáticas, también puede mostrar resultados de validaciones, consultas de bases de datos u otros procesos.',
      'codeHTML': `<form oninput="resultado.value = parseInt(num1.value) + parseInt(num2.value)">
    <input type="number" id="num1" name="num1" step="1">
    +
    <input type="number" id="num2" name="num2" step="1">
    =
    <output name="resultado"></output>
</form>
`,
      'codeJS': '',
    },
    {
      'tag': 'progress',
      'group': 'Elems. de formulario',
      'url': 'https://developer.mozilla.org/en/docs/Web/HTML/Element/progress',
      'description': 'Se utiliza para **mostrar visualmente el progreso de una tarea** o una operación en curso. Se utiliza principalmente para indicar el avance de una tarea determinada, como la carga de un archivo o la finalización de una descarga.',
      'codeHTML': '<progress value="30" max="100">30%</progress>',
    },
    {
      'tag': 'meter',
      'group': 'Elems. de formulario',
      'url': 'https://developer.mozilla.org/en/docs/Web/HTML/Element/meter',
      'description': 'Se utiliza para **representar un valor dentro de un rango específico en una escala**, también puedes agregar texto descriptivo dentro del elemento <meter> para proporcionar más información sobre el valor. En este caso, el texto "75% completado" se mostrará dentro del elemento **<meter>** junto con la representación gráfica.',
      'codeHTML': '<meter value="75" min="0" max="100">75% en curso</meter>',
      'codeJS': '',
    },
    {
      'tag': 'ul',
      'group': 'Elems. de lista',
      'url': 'https://developer.mozilla.org/en/docs/Web/HTML/Element/ul',
      'description': 'Se utiliza para **crear una lista desordenada**, también conocida como lista con viñetas.',
      'codeHTML': `<ul>
    <li>Elemento 1</li>
    <li>Elemento 2
        <ul>
          <li>Elemento 2.1</li>
          <li>Elemento 2.2</li>
        </ul>
    </li>
    <li>Elemento 3</li>
</ul>
`,
      'codeJS': '',
    },
    {
      'tag': 'ol',
      'group': 'Elems. de lista',
      'url': 'https://developer.mozilla.org/en/docs/Web/HTML/Element/ol',
      'description': 'Se utiliza para **crear una lista ordenada**, también conocida como lista **numerada**.',
      'codeHTML': `<h2>¿Como hacer una torta?</h2>
<ol>
  <li>Pasos para preparar un pastel:</li>
  <li>Mezclar los ingredientes secos en un recipiente.</li>
  <li>Agregar los ingredientes líquidos y mezclar bien.</li>
  <li>Verter la mezcla en un molde para pastel.</li>
  <li>Hornear a 180°C durante 30 minutos.</li>
  <li>Dejar enfriar y decorar según el gusto.</li>
</ol>

`,
    },
    {
      'tag': 'li',
      'group': 'Elems. de lista',
      'url': 'https://developer.mozilla.org/en/docs/Web/HTML/Element/li',
      'description': 'Se utiliza para **crear un elemento de lista**, ya sea en una lista ordenada **<ol>** o en una lista desordenada **<ul>**. Recuerda que la etiqueta **<li>** es obligatoria dentro de las listas ordenadas y desordenadas. Sin ella, los elementos de la lista no se representarán correctamente.',
      'codeHTML': `<ul>
    <li>Elemento 1</li>
    <li>Elemento 2</li>
    <li>Elemento 3</li>
</ul>

<ol>
    <li>Corta las verduras en trozos pequeños.</li>
    <li>Calienta una sartén a fuego medio.</li>
    <li>Agrega aceite y espera a que se caliente.</li>
    <li>Añade las verduras a la sartén y saltea durante 5 minutos.</li>
    <li>Condimenta con sal y pimienta al gusto.</li>
</ol>
`,
    },
    {
      'tag': 'dl',
      'group': 'Elems. de lista de definiciones',
      'url': 'https://developer.mozilla.org/en/docs/Web/HTML/Element/dl',
      'description': 'Se utiliza para **crear una lista de definición**, que consiste en términos y sus correspondientes definiciones.',
      'codeHTML': `<dl>
    <dt>HTML</dt>
    <dd>Lenguaje de marcado para crear páginas web.</dd>

    <dt>CSS</dt>
    <dd>Lenguaje de hojas de estilo para dar estilo a las páginas web.</dd>

    <dt>JavaScript</dt>
    <dd>Lenguaje de programación para hacer que las páginas web sean interactivas.</dd>
</dl>
`,
    },
    {
      'tag': 'dt',
      'group': 'Elems. de lista de definiciones',
      'url': 'https://developer.mozilla.org/en/docs/Web/HTML/Element/dt',
      'description': 'Se utiliza para **definir un término o nombre en una lista de definición <dl>**. Esta etiqueta se coloca dentro de la etiqueta <dl> y se utiliza en combinación con la etiqueta <dd> para especificar la definición o descripción correspondiente al término.',
      'codeHTML': `<dl>
    <dt>HTML</dt>
    <dd>Lenguaje de marcado para crear páginas web.</dd>

    <dt>CSS</dt>
    <dd>Lenguaje de hojas de estilo para dar estilo a las páginas web.</dd>

    <dt>JavaScript</dt>
    <dd>Lenguaje de programación para hacer que las páginas web sean interactivas.</dd>
</dl>
`,
    },
    {
      'tag': 'dd',
      'group': 'Elems. de lista de definiciones',
      'url': 'https://developer.mozilla.org/en/docs/Web/HTML/Element/dd',
      'description': 'Se utiliza para **especificar la definición o descripción de un término en una lista de definición <dl>**. Esta etiqueta se coloca dentro de la etiqueta <dl> y se utiliza en combinación con la etiqueta <dt> que define el término correspondiente.',
      'codeHTML': `<dl>
    <dt>HTML</dt>
    <dd>Lenguaje de marcado para crear páginas web.</dd>

    <dt>CSS</dt>
    <dd>Lenguaje de hojas de estilo para dar estilo a las páginas web.</dd>

    <dt>JavaScript</dt>
    <dd>Lenguaje de programación para hacer que las páginas web sean interactivas.</dd>
</dl>
`,
    },
    {
      'tag': 'div',
      'group': 'Elems. para secciones',
      'url': 'https://developer.mozilla.org/en/docs/Web/HTML/Element/div',
      'description': 'Se utiliza como un **contenedor genérico para agrupar elementos y aplicar estilos o manipular el contenido de manera conjunta**. Es una etiqueta de bloque que no tiene ningún significado o impacto semántico específico, pero es ampliamente utilizada en la construcción de estructuras y diseños en HTML y CSS.',
      'codeHTML': `<div>
    <h1>Título de la página</h1>
    <p>Este es un párrafo de texto.</p>
    <img src="data:image/jpeg;base64,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" alt="Descripción de la imagen">
</div>
`,
    },
    {
      'tag': 'header',
      'group': 'Elems. para secciones',
      'url': 'https://developer.mozilla.org/en/docs/Web/HTML/Element/header',
      'description': 'se utiliza para **definir el encabezado o cabecera de una sección o página web**. Por lo general, se coloca al inicio del documento y contiene elementos como el logotipo, el título principal, la navegación y otros elementos relacionados con el encabezado de la página.',
      'codeHTML': `<header>
    <h1>Nombre de la página</h1>
    <nav>
        <ul>
            <li><a href="#">Inicio</a></li>
            <li><a href="#">Acerca</a></li>
            <li><a href="#">Servicios</a></li>
            <li><a href="#">Contacto</a></li>
        </ul>
    </nav>
</header>
`,
      'codeCSS': `header {
  background-color: #f2f2f2;
  padding: 20px;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

h1 {
  margin: 0;
}

nav ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

nav ul li {
  display: inline-block;
  margin-right: 10px;
}

nav ul li a {
  text-decoration: none;
  color: #333;
}`,
    },
    {
      'tag': 'nav',
      'group': 'Elems. para secciones',
      'url': 'https://developer.mozilla.org/en/docs/Web/HTML/Element/nav',
      'description': 'Se utiliza para **definir una sección de navegación en una página web**. Se utiliza para agrupar enlaces u otros elementos de navegación relacionados que permiten a los usuarios moverse dentro del sitio web.',
      'codeHTML': `<nav>
  <ul>
    <li><a href="#">Inicio</a></li>
    <li><a href="#">Acerca</a></li>
    <li><a href="#">Servicios</a></li>
    <li><a href="#">Contacto</a></li>
  </ul>
</nav>
`,
    },
    {
      'tag': 'main',
      'group': 'Elems. para secciones',
      'url': 'https://developer.mozilla.org/en/docs/Web/HTML/Element/main',
      'description': 'Se utiliza para **marcar el contenido principal de una página web**. Representa la sección principal de un documento y normalmente contiene el contenido central y relevante para la página.',
      'codeHTML': `<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Título de la página</title>
</head>
<body>
    <header>
        <!-- Encabezado de la página -->
    </header>

    <main>
        <!-- Contenido principal de la página -->
        <h1>Título principal</h1>
        <p>Este es el contenido principal de la página.</p>
        <img src="imagen.jpg" alt="Descripción de la imagen">
    </main>

    <footer>
        <!-- Pie de página -->
    </footer>
</body>
</html>
`,
    },
    {
      'tag': 'section',
      'group': 'Elems. para secciones',
      'url': 'https://developer.mozilla.org/en/docs/Web/HTML/Element/section',
      'description': 'Se utiliza para **agrupar contenido relacionado en una página web**. Representa una sección autónoma y temáticamente coherente dentro de un documento.',
      'codeHTML': `<section>
    <h2>Introducción</h2>
    <p>Bienvenido a nuestro sitio web. Aquí encontrarás información sobre nuestro negocio y los servicios que ofrecemos.</p>
</section>

<section>
    <h2>Nuestros Servicios</h2>
    <ul>
        <li>Servicio 1</li>
        <li>Servicio 2</li>
        <li>Servicio 3</li>
    </ul>
</section>

<section>
    <h2>Testimonios</h2>
    <blockquote>
        <p>Excelente servicio al cliente. Estoy muy satisfecho con los resultados obtenidos.</p>
        <cite>Cliente 1</cite>
    </blockquote>

    <blockquote>
        <p>El equipo de trabajo es altamente profesional y entregó el proyecto a tiempo.</p>
        <cite>Cliente 2</cite>
    </blockquote>
</section>

`,
    },
    {
      'tag': 'article',
      'group': 'Elems. para secciones',
      'url': 'https://developer.mozilla.org/en/docs/Web/HTML/Element/article',
      'description': 'Se utiliza para **representar un contenido independiente y autónomo en una página web**. Se utiliza para agrupar contenido que **tiene sentido por sí mismo** y que **puede ser distribuido o reutilizado de forma independiente en otros contextos**.',
      'codeHTML': `<article>
  <header>
      <h2>Receta de Pastel de Chocolate</h2>
      <p>Una deliciosa receta para disfrutar en ocasiones especiales.</p>
  </header>

  <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4QBURXhpZgAASUkqAAgAAAACAA4BAgAcAAAAJgAAAJiCAgAKAAAAQgAAAAAAAABDaG9wcGVkIGNob2NvbGF0ZSB3aXRoIGNvY29hZWxpa2F0c2V2Yf/tAHhQaG90b3Nob3AgMy4wADhCSU0EBAAAAAAAXBwCUAAKZWxpa2F0c2V2YRwCeAAcQ2hvcHBlZCBjaG9jb2xhdGUgd2l0aCBjb2NvYRwCdAAKZWxpa2F0c2V2YRwCbgAYR2V0dHkgSW1hZ2VzL2lTdG9ja3Bob3Rv/+EFNmh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8APD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyI+Cgk8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgoJCTxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1sbnM6SXB0YzR4bXBDb3JlPSJodHRwOi8vaXB0Yy5vcmcvc3RkL0lwdGM0eG1wQ29yZS8xLjAveG1sbnMvIiAgIHhtbG5zOkdldHR5SW1hZ2VzR0lGVD0iaHR0cDovL3htcC5nZXR0eWltYWdlcy5jb20vZ2lmdC8xLjAvIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBsdXM9Imh0dHA6Ly9ucy51c2VwbHVzLm9yZy9sZGYveG1wLzEuMC8iICB4bWxuczppcHRjRXh0PSJodHRwOi8vaXB0Yy5vcmcvc3RkL0lwdGM0eG1wRXh0LzIwMDgtMDItMjkvIiB4bWxuczp4bXBSaWdodHM9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9yaWdodHMvIiBkYzpSaWdodHM9ImVsaWthdHNldmEiIHBob3Rvc2hvcDpDcmVkaXQ9IkdldHR5IEltYWdlcy9pU3RvY2tw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" alt="Imagen del pastel de chocolate">

  <p>El pastel de chocolate es un clásico irresistible que a todos les encanta. Aquí tienes la receta para prepararlo en casa:</p>

  <section>
      <h3>Ingredientes</h3>
      <ul>
          <li>200g de chocolate negro</li>
          <li>200g de mantequilla</li>
          <li>200g de azúcar</li>
          <li>4 huevos</li>
          <li>150g de harina</li>
          <li>1 cucharadita de esencia de vainilla</li>
          <li>1 pizca de sal</li>
      </ul>
  </section>

    <section>
        <h3>Preparación</h3>
        <ol>
            <li>Derrite el chocolate y la mantequilla juntos en baño maría.</li>
            <li>En un recipiente aparte, bate los huevos con el azúcar hasta obtener una mezcla espumosa.</li>
            <li>Agrega la harina tamizada, la esencia de vainilla y la sal a la mezcla de huevos y azúcar. Revuelve bien.</li>
            <li>Vierte la mezcla de chocolate y mantequilla derretida en la masa y mezcla hasta obtener una mezcla homogénea.</li>
            <li>Vierte la masa en un molde para pastel previamente engrasado.</li>
            <li>Hornea a 180°C durante aproximadamente 30-35 minutos, o hasta que al insertar un palillo en el centro del pastel, este salga limpio.</li>
            <li>Deja enfriar antes de desmoldar y decorar al gusto.</li>
        </ol>
    </section>

    <footer>
        <small>Autor: Ana Rodríguez</small>
        <time datetime="2023-06-10">10 de junio de 2023</time>
    </footer>
</article>
`,
    },
    {
      'tag': 'aside',
      'group': 'Elems. para secciones',
      'url': 'https://developer.mozilla.org/en/docs/Web/HTML/Element/aside',
      'description': 'Se utiliza para **representar un contenido relacionado o complementario al contenido principal de la página**. Por lo general, se coloca junto al contenido principal, pero puede ser independiente de él.',
      'codeHTML': `<main>
    <article>
        <h1>Título del artículo</h1>
        <p>Contenido principal del artículo.</p>
    </article>

    <aside>
        <h2>Anuncios</h2>
        <p>Contenido relacionado o anuncios aquí.</p>
    </aside>
</main>
`,
      codeCSS: `/* Estilos para el contenido principal */
main {
  display: flex;
  gap: 20px;
}

article {
  flex: 2;
  background-color: #f0f0f0;
  padding: 20px;
}

/* Estilos para el contenido complementario */
aside {
  flex: 1;
  background-color: #ebebeb;
  padding: 20px;
}

/* Estilos para los títulos */
h1, h2 {
  color: #333;
}

/* Estilos para los párrafos */
p {
  color: #666;
  line-height: 1.5;
}

/* Estilos para los anuncios */
aside h2 {
  color: #ff0000;
  font-size: 18px;
  margin-bottom: 10px;
}

aside p {
  font-size: 14px;
}
`,
    },
    {
      tag: 'footer',
      group: 'Elems. para secciones',
      url: 'https://developer.mozilla.org/en/docs/Web/HTML/Element/footer',
      description: 'Se utiliza para **representar la sección de pie de página de un documento HTML**. Se coloca típicamente al final del contenido principal de la página y contiene información de contacto, enlaces adicionales, derechos de autor u otros elementos relacionados con el pie de página.',
      codeHTML: `<footer>
    <p>&copy; 2023 Mi Sitio Web. Todos los derechos reservados.</p>
    <nav>
        <ul>
            <li><a href="/">Inicio</a></li>
            <li><a href="/about">Acerca de</a></li>
            <li><a href="/contact">Contacto</a></li>
        </ul>
    </nav>
</footer>
`,
      codeCSS: `/* Estilos generales del footer */
footer {
  background-color: #f0f0f0;
  padding: 20px;
  color: #666;
  text-align: center;
}

/* Estilos para el párrafo de derechos de autor */
footer p {
  font-size: 14px;
}

/* Estilos para el menú de navegación */
footer nav ul {
  list-style-type: none;
  padding: 0;
  margin: 10px 0;
}

footer nav li {
  display: inline-block;
  margin-right: 10px;
}

footer nav a {
  color: #333;
  text-decoration: none;
}

footer nav a:hover {
  text-decoration: underline;
}
`,
    },
    {
      'tag': 'details',
      'group': 'Elems. de interacción',
      'url': 'https://developer.mozilla.org/en/docs/Web/HTML/Element/details',
      'description': 'Se utiliza para **crear un elemento desplegable que muestra u oculta contenido adicional cuando el usuario interactúa con él**. Puede contener un elemento **<summary>** que sirve como encabezado o título del contenido desplegable.',
      'codeHTML': `<details>
    <summary>Información adicional</summary>
    <p>Este es el contenido adicional que se mostrará u ocultará.</p>
</details>
`,
    },
    {
      'tag': 'summary',
      'group': 'Elems. de interacción',
      'url': 'https://developer.mozilla.org/en/docs/Web/HTML/Element/summary',
      'description': 'Se utiliza dentro de la etiqueta <details> **para proporcionar un encabezado o título para el contenido desplegable**. El texto o contenido dentro de <summary> se mostrará como el encabezado visible antes de que el usuario interactúe con el elemento desplegable.',
      'codeHTML': `<details>
    <summary>Mostrar más información</summary>
    <p>Este es el contenido adicional que se mostrará u ocultará.</p>
</details>
`,
    },
    {
      'tag': 'dialog',
      'group': 'Elems. de interacción',
      'url': 'https://developer.mozilla.org/en/docs/Web/HTML/Element/dialog',
      'description': 'Se utiliza para **crear un cuadro de diálogo o ventana emergente en una página web**. Puede contener contenido HTML como texto, formularios u otros elementos interactivos. A través del uso de JavaScript, se puede controlar la apertura, cierre y manipulación del cuadro de diálogo.',
      'codeHTML': `<button onclick="openDialog()">Abrir cuadro de diálogo</button>

<dialog id="myDialog">
  <h2>Título del cuadro de diálogo</h2>
  <p>Contenido del cuadro de diálogo.</p>
  <button onclick="closeDialog()">Cerrar</button>
</dialog>`,
      'codeJS': `const openDialog = () => {
    let dialog = document.getElementById('myDialog');
    dialog.showModal();
}

const closeDialog = () => {
    let dialog = document.getElementById('myDialog');
    dialog.close();
}`,
    },
    {
      'tag': 'table',
      'group': 'Elems. de tabla',
      'url': 'https://developer.mozilla.org/en/docs/Web/HTML/Element/table',
      'description': 'Se utiliza para **crear tablas en HTML**. Las tablas se componen de filas y columnas, y se utilizan para organizar y mostrar datos de manera tabular.',
      'codeHTML': `<table>
    <tr>
        <th>Nombre</th>
        <th>Edad</th>
        <th>País</th>
    </tr>
    <tr>
        <td>John Doe</td>
        <td>25</td>
        <td>Estados Unidos</td>
    </tr>
      <tr>
        <td>Jane Smith</td>
        <td>30</td>
        <td>Canadá</td>
    </tr>
</table>
`,
      codeCSS: `table {
    border-collapse: collapse;
    width: 100%;
}

th, td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
}

th {
    background-color: #f2f2f2;
    font-weight: bold;
}

tr:nth-child(even) {
    background-color: #f9f9f9;
}`,
    },
    {
      'tag': 'caption',
      'group': 'Elems. de tabla',
      'url': 'https://developer.mozilla.org/en/docs/Web/HTML/Element/caption',
      'description': 'Se utiliza en una estructura de tabla **para proporcionar un título o descripción a la tabla**. Se coloca dentro del elemento **<table>** y se coloca antes de las filas de datos.',
      'codeHTML': `<table>
    <caption>Título de la tabla</caption>
    <tr>
        <th>Nombre</th>
        <th>Edad</th>
        <th>País</th>
    </tr>
    <tr>
        <td>John Doe</td>
        <td>25</td>
        <td>Estados Unidos</td>
    </tr>
    <tr>
        <td>Jane Smith</td>
        <td>30</td>
        <td>Canadá</td>
    </tr>
</table>
`,
      'codeCSS': `table {
    border-collapse: collapse;
    width: 100%;
}

caption {
    font-weight: bold;
    font-size: 1.2em;
    text-align: center;
    padding: 10px;
}

th, td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
}

th {
    background-color: #f2f2f2;
    font-weight: bold;
}

tr:nth-child(even) {
    background-color: #f9f9f9;
}`,
    },
    {
      'tag': 'colgroup',
      'group': 'Elems. de tabla',
      'url': 'https://developer.mozilla.org/en/docs/Web/HTML/Element/colgroup',
      'description': 'Se utiliza en una estructura de tabla para **agrupar y aplicar estilos a una o más columnas de la tabla**. Se coloca dentro del elemento **<table>** y puede contener una o más etiquetas **<col>** como hijos.',
      'codeHTML': `<table>
    <colgroup>
        <col style="background-color: yellow;">
        <col span="1" style="background-color: lightblue;">
        <col span="1" style="background-color: pink;" width="160px">
    </colgroup>
    <!-- encabezado -->
    <thead>
        <tr>
            <th>Encabezado 1</th>
            <th>Encabezado 2</th>
            <th>Encabezado 3</th>
        </tr>
    </thead>
    <!-- cuerpo -->
    <tbody>
        <tr>
            <td>Dato 1</td>
            <td>Dato 2</td>
            <td>Dato 3</td>
        </tr>
      <tr>
            <td>Dato 4</td>
            <td>Dato 5</td>
            <td>Dato 6</td>
      </tr>
    </tbody>
    <!-- footer -->
    <tfoot>
        <tr>
            <td>Pie de tabla 1</td>
            <td>Pie de tabla 2</td>
            <td>Pie de tabla 3</td>
        </tr>
    </tfoot>
</table>
`,
      'codeJS': '',
    },
    {
      'tag': 'col',
      'group': 'Elems. de tabla',
      'url': 'https://developer.mozilla.org/en/docs/Web/HTML/Element/col',
      'description': 'Es un **elemento utilizado dentro de un elemento **<colgroup>** en una tabla** HTML. El elemento **<colgroup>** se utiliza para agrupar las columnas de una tabla y puede contener uno o varios elementos **<col>**. Puedes ajustar las propiedades de cada columna utilizando los atributos y estilos de CSS en el elemento **<col>**. Por ejemplo, puedes establecer el ancho de una columna utilizando el atributo width o estilos CSS como width: 170px;.',
      'codeHTML': `<table>
    <colgroup>
        <col style="background-color: yellow;">
        <col style="background-color: cyan;">
        <col style="background-color: pink;" width='170px'>
    </colgroup>
    <!-- encabezado -->
    <thead>
        <tr>
            <th>Encabezado 1</th>
            <th>Encabezado 2</th>
            <th>Encabezado 3</th>
        </tr>
    </thead>
    <!-- cuerpo -->
    <tbody>
        <tr>
            <td>Dato 1</td>
            <td>Dato 2</td>
            <td>Dato 3</td>
        </tr>
      <tr>
            <td>Dato 4</td>
            <td>Dato 5</td>
            <td>Dato 6</td>
      </tr>
    </tbody>
    <!-- footer -->
    <tfoot>
        <tr>
            <td>Pie de tabla 1</td>
            <td>Pie de tabla 2</td>
            <td>Pie de tabla 3</td>
        </tr>
    </tfoot>
</table>
`,
      'codeJS': '',
    },
    {
      'tag': 'thead',
      'group': 'Elems. de tabla',
      'url': 'https://developer.mozilla.org/en/docs/Web/HTML/Element/thead',
      'description': 'Se utiliza para **agrupar el contenido de encabezado de una tabla**. Proporciona una estructura semántica que separa visualmente el encabezado de la tabla del cuerpo de la misma.',
      'codeHTML': `<table>
    <!-- encabezado -->
    <thead>
        <tr>
            <th>Encabezado 1</th>
            <th>Encabezado 2</th>
            <th>Encabezado 3</th>
        </tr>
    </thead>
    <!-- cuerpo -->
    <tbody>
        <tr>
            <td>Dato 1</td>
            <td>Dato 2</td>
            <td>Dato 3</td>
        </tr>
        <tr>
            <td>Dato 4</td>
            <td>Dato 5</td>
            <td>Dato 6</td>
        </tr>
    </tbody>
    <!-- footer -->
    <tfoot>
        <tr>
            <td>Pie de tabla 1</td>
            <td>Pie de tabla 2</td>
            <td>Pie de tabla 3</td>
        </tr>
    </tfoot>
</table>
`,
      'codeCSS': `  table {
    width: 100%;
    border-collapse: collapse;
}

th, td {
    padding: 8px;
    text-align: left;
    border-bottom: 1px solid #ddd;
    border: 1px solid #ddd;
}

th {
    background-color: #f2f2f2;
}

thead {
    font-weight: bold;
    border:2px dashed red;
}`,
    },
    {
      'tag': 'tbody',
      'group': 'Elems. de tabla',
      'url': 'https://developer.mozilla.org/en/docs/Web/HTML/Element/tbody',
      'description': 'Se utiliza para **agrupar el contenido del cuerpo de una tabla**. Ayuda a estructurar y organizar las filas y celdas de datos de una tabla de manera semántica.',
      'codeHTML': `<table>
    <!-- encabezado -->
    <thead>
        <tr>
            <th>Encabezado 1</th>
            <th>Encabezado 2</th>
            <th>Encabezado 3</th>
        </tr>
    </thead>
    <!-- cuerpo -->
    <tbody>
        <tr>
            <td>Dato 1</td>
            <td>Dato 2</td>
            <td>Dato 3</td>
        </tr>
        <tr>
            <td>Dato 4</td>
            <td>Dato 5</td>
            <td>Dato 6</td>
        </tr>
    </tbody>
    <!-- footer -->
    <tfoot>
        <tr>
            <td>Pie de tabla 1</td>
            <td>Pie de tabla 2</td>
            <td>Pie de tabla 3</td>
        </tr>
    </tfoot>
</table>
`,
      'codeCSS': `  table {
    width: 100%;
    border-collapse: collapse;
}

th, td {
    padding: 8px;
    text-align: left;
    border-bottom: 1px solid #ddd;
    border: 1px solid #ddd;
}

th {
    background-color: #f2f2f2;
}

thead {
    font-weight: bold;
}

tbody{
    border:2px dashed blue;
}
`,
    },
    {
      'tag': 'tfoot',
      'group': 'Elems. de tabla',
      'url': 'https://developer.mozilla.org/en/docs/Web/HTML/Element/tfoot',
      'description': 'Se utiliza para **agrupar el contenido del pie de una tabla**. Proporciona una forma de separar visualmente y estructurar el contenido que se encuentra en la parte inferior de una tabla.',
      'codeHTML': `<table>
    <!-- encabezado -->
    <thead>
        <tr>
            <th>Encabezado 1</th>
            <th>Encabezado 2</th>
            <th>Encabezado 3</th>
        </tr>
    </thead>
    <!-- cuerpo -->
    <tbody>
        <tr>
            <td>Dato 1</td>
            <td>Dato 2</td>
            <td>Dato 3</td>
        </tr>
      <tr>
            <td>Dato 4</td>
            <td>Dato 5</td>
            <td>Dato 6</td>
      </tr>
    </tbody>
    <!-- footer -->
    <tfoot>
        <tr>
            <td>Pie de tabla 1</td>
            <td>Pie de tabla 2</td>
            <td>Pie de tabla 3</td>
        </tr>
    </tfoot>
</table>
`,
      'codeCSS': `  table {
    width: 100%;
    border-collapse: collapse;
}

th, td {
    padding: 8px;
    text-align: left;
    border-bottom: 1px solid #ddd;
    border: 1px solid #ddd;
}

th {
    background-color: #f2f2f2;
}

thead {
    font-weight: bold;
}

tfoot{
    border:2px dashed green;
}

`,
    },
    {
      'tag': 'tr',
      'group': 'Elems. de tabla',
      'url': 'https://developer.mozilla.org/en/docs/Web/HTML/Element/tr',
      'description': 'Se utiliza para **definir cada una de las filas en una tabla**. Cada fila de una tabla HTML debe estar dentro de un elemento **<thead>,<tbody>** o **<tfoot>**. Las celdas de datos dentro de esa fila se definen utilizando elementos **<th>** o **<td>**.',
      'codeHTML': `<table>
    <!-- encabezado -->
    <thead>
        <tr>
            <th>Encabezado 1</th>
            <th>Encabezado 2</th>
            <th>Encabezado 3</th>
        </tr>
    </thead>
    <!-- cuerpo -->
    <tbody>
        <tr>
            <td>Dato 1</td>
            <td>Dato 2</td>
            <td>Dato 3</td>
        </tr>
      <tr>
            <td>Dato 4</td>
            <td>Dato 5</td>
            <td>Dato 6</td>
      </tr>
    </tbody>
    <!-- footer -->
    <tfoot>
        <tr>
            <td>Pie de tabla 1</td>
            <td>Pie de tabla 2</td>
            <td>Pie de tabla 3</td>
        </tr>
    </tfoot>
</table>
`,
      'codeCSS': `  table {
    width: 100%;
    border-collapse: collapse;
}

th, td {
    padding: 8px;
    text-align: left;
    border-bottom: 1px solid #ddd;
    border: 1px solid #ddd;
}

tr{
  border: 2px dashed red;
}

th {
    background-color: #f2f2f2;
}

thead {
    font-weight: bold;
}`,
    },
    {
      'tag': 'th',
      'group': 'Elems. de tabla',
      'url': 'https://developer.mozilla.org/en/docs/Web/HTML/Element/th',
      'description': 'Se utiliza para **definir cada una de las celdas de encabezado en una tabla**. Esta celda se utiliza típicamente en la primera fila o columna, para describir el contenido de las celdas correspondientes en las filas o columnas siguientes. El uso de **<th>** en lugar de **<td>** proporciona un estilo y formato visualmente diferente para resaltar los encabezados en la tabla.',
      'codeHTML': `<table>
    <!-- encabezado -->
    <thead>
        <tr>
            <th>Encabezado 1</th>
            <th>Encabezado 2</th>
            <th>Encabezado 3</th>
        </tr>
    </thead>
    <!-- cuerpo -->
    <tbody>
        <tr>
            <td>Dato 1</td>
            <td>Dato 2</td>
            <td>Dato 3</td>
        </tr>
      <tr>
            <td>Dato 4</td>
            <td>Dato 5</td>
            <td>Dato 6</td>
      </tr>
    </tbody>
    <!-- footer -->
    <tfoot>
        <tr>
            <td>Pie de tabla 1</td>
            <td>Pie de tabla 2</td>
            <td>Pie de tabla 3</td>
        </tr>
    </tfoot>
</table>
`,
      'codeCSS': `  table {
    width: 100%;
    border-collapse: collapse;
}

th, td {
    padding: 8px;
    text-align: left;
    border-bottom: 1px solid #ddd;
    border: 1px solid #ddd;
}

th {
    background-color: #f2f2f2;
    border: 2px dashed blue;
}

thead {
    font-weight: bold;
}`,
    },
    {
      'tag': 'td',
      'group': 'Elems. de tabla',
      'url': 'https://developer.mozilla.org/en/docs/Web/HTML/Element/td',
      'description': 'Se utiliza para **definir cada una de las celdas de datos del cuerpo de una tabla**. Cada celda **<td>** se coloca dentro de una fila **<tr>** en la estructura de la tabla.',
      'codeHTML': `<table>
    <!-- encabezado -->
    <thead>
        <tr>
            <th>Encabezado 1</th>
            <th>Encabezado 2</th>
            <th>Encabezado 3</th>
        </tr>
    </thead>
    <!-- cuerpo -->
    <tbody>
        <tr>
            <td>Dato 1</td>
            <td>Dato 2</td>
            <td>Dato 3</td>
        </tr>
      <tr>
            <td>Dato 4</td>
            <td>Dato 5</td>
            <td>Dato 6</td>
      </tr>
    </tbody>
    <!-- footer -->
    <tfoot>
        <tr>
            <td>Pie de tabla 1</td>
            <td>Pie de tabla 2</td>
            <td>Pie de tabla 3</td>
        </tr>
    </tfoot>
</table>
`,
      'codeCSS': `  table {
    width: 100%;
    border-collapse: collapse;
}

th, td {
    padding: 8px;
    text-align: left;
    border-bottom: 1px solid #ddd;
    border: 1px solid #ddd;
}

th {
    background-color: #f2f2f2;
}

td {
    border: 2px dashed green;
}

thead {
    font-weight: bold;
}`,
    },

    {
      'tag': 'img',
      'group': 'Elems. multimedia',
      'url': 'https://developer.mozilla.org/en/docs/Web/HTML/Element/img',
      'description': 'Se utiliza para **insertar imágenes en una página web**. Este elemento es autónomo, lo que significa que no tiene una etiqueta de cierre y puede contener atributos para especificar la fuente de la imagen, el texto alternativo, el tamaño, entre otros.',
      'codeHTML': '<img  alt="Texto alternativo y descriptivo" src="data:image/jpeg;base64,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">',
    },
    {
      'tag': 'picture',
      'group': 'Elems. multimedia',
      'url': 'https://developer.mozilla.org/en/docs/Web/HTML/Element/picture',
      'description': 'Se utiliza **para proporcionar múltiples fuentes de imagen en diferentes resoluciones o formatos**, permitiendo al navegador seleccionar automáticamente la mejor opción según las capacidades del dispositivo y las necesidades de visualización. Si ninguna de las fuentes de imagen especificadas es compatible, el navegador utilizará la imagen definida en el elemento **<img>** que se encuentra dentro del **<picture>**.',
      'codeHTML': `<picture>
    <source srcset="imagen.webp" type="image/webp">
    <source srcset="imagen.jpg" type="image/jpeg">
    <img src="imagen.jpg" alt="Texto alternativo">
</picture>
`,
    },
    {
      'tag': 'audio',
      'group': 'Elems. multimedia',
      'url': 'https://developer.mozilla.org/en/docs/Web/HTML/Element/audio',
      'description': 'Se utiliza para **insertar archivos de audio en una página web**. Permite reproducir audio directamente en el navegador sin necesidad de complementos o reproductores externos. Recuerda que el soporte para diferentes formatos de audio varía entre los navegadores, por lo que es recomendable proporcionar el audio en diferentes formatos (como MP3, OGG o WAV) utilizando elementos **<source>** dentro del elemento **<audio>**. De esta manera, el navegador seleccionará automáticamente el formato compatible.',
      'codeHTML': `<audio src="ruta_del_audio.mp3" controls>
    Tu navegador no soporta el elemento de audio.
</audio>


<audio controls>
    <source src="audio.mp3" type="audio/mpeg">
    <source src="audio.ogg" type="audio/ogg">
    Tu navegador no soporta el elemento de audio.
</audio>

`,
    },
    {
      'tag': 'video',
      'group': 'Elems. multimedia',
      'url': 'https://developer.mozilla.org/en/docs/Web/HTML/Element/video',
      'description': 'Se utiliza para **insertar y reproducir archivos de video** en una página web. Permite mostrar contenido de video directamente en el navegador sin necesidad de complementos o reproductores externos. El soporte para diferentes formatos de video varía entre los navegadores, por lo que es recomendable proporcionar el video en diferentes formatos (como MP4, WebM o OGG) utilizando elementos <source> dentro del elemento <video>. De esta manera, el navegador seleccionará automáticamente el formato compatible.',
      'codeHTML': `<video src="ruta_del_video.mp4" controls>
  Tu navegador no soporta el elemento de video.
</video>

<video controls>
  <source src="video.mp4" type="video/mp4">
  <source src="video.webm" type="video/webm">
  Tu navegador no soporta el elemento de video.
</video>

`,
    },
    {
      'tag': 'source',
      'group': 'Elems. multimedia',
      'url': 'https://developer.mozilla.org/en/docs/Web/HTML/Element/source',
      'description': '',
      'codeHTML': '',
      'codeJS': '',
    },
    {
      'tag': 'track',
      'group': 'Elems. multimedia',
      'url': 'https://developer.mozilla.org/en/docs/Web/HTML/Element/track',
      'description': '',
      'codeHTML': '',
      'codeJS': '',
    },

    {
      'tag': 'figure',
      'group': 'Elems. multimedia',
      'url': 'https://developer.mozilla.org/en/docs/Web/HTML/Element/figure',
      'description': '',
      'codeHTML': '',
      'codeJS': '',
    },
    {
      'tag': 'figcaption',
      'group': 'Elems. multimedia',
      'url': 'https://developer.mozilla.org/en/docs/Web/HTML/Element/caption',
      'description': '',
      'codeHTML': '',
      'codeJS': '',
    },
    {
      'tag': 'map',
      'group': 'Elems. multimedia',
      'url': 'https://developer.mozilla.org/en/docs/Web/HTML/Element/map',
      'description': '',
      'codeHTML': '',
      'codeJS': '',
    },
    {
      'tag': 'area',
      'group': 'Elems. multimedia',
      'url': 'https://developer.mozilla.org/en/docs/Web/HTML/Element/area',
      'description': 'Sirve para crear las distintas secciones en las que se puede dividir un mapas de imágenes en el cliente.',
      'codeHTML': '',
      'codeJS': '',
    },
    {
      'tag': 'object',
      'group': 'Elems. de contenido incrustado',
      'url': 'https://developer.mozilla.org/en/docs/Web/HTML/Element/object',
      'description': '',
      'codeHTML': '',
      'codeJS': '',
    },

    {
      'tag': 'param',
      'group': 'Elems. de contenido incrustado',
      'url': 'https://developer.mozilla.org/en/docs/Web/HTML/Element/param',
      'description': '',
      'codeHTML': '',
      'codeJS': '',
    },
    {
      'tag': 'iframe',
      'group': 'Elems. de contenido incrustado',
      'url': 'https://developer.mozilla.org/en/docs/Web/HTML/Element/iframe',
      'description': '',
      'codeHTML': '',
      'codeJS': '',
    },


    {
      'tag': 'canvas',
      'group': 'Elems. de contenido incrustado',
      'url': 'https://developer.mozilla.org/en/docs/Web/HTML/Element/canvas',
      'description': '',
      'codeHTML': '',
      'codeJS': '',
    },
    {
      'tag': 'svg',
      'group': 'Elems. de contenido incrustado',
      'url': 'https://developer.mozilla.org/en/docs/Web/HTML/Element/svg',
      'description': '',
      'codeHTML': '',
      'codeJS': '',
    },
    {
      'tag': 'math',
      'group': 'Elems. para MathML',
      'url': 'https://developer.mozilla.org/en/docs/Web/HTML/Element/math',
      'description': '',
      'codeHTML': '',
      'codeJS': '',
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