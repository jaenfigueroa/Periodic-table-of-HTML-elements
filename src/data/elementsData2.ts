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
      'description': '',
      'codeHTML': '',
      'codeJS': '',
    },
    {
      'tag': 'fieldset',
      'group': 'Elems. de formulario',
      'url': 'https://developer.mozilla.org/en/docs/Web/HTML/Element/fieldset',
      'description': '',
      'codeHTML': '',
      'codeJS': '',
    },
    {
      'tag': 'legend',
      'group': 'Elems. de formulario',
      'url': 'https://developer.mozilla.org/en/docs/Web/HTML/Element/legend',
      'description': '',
      'codeHTML': '',
      'codeJS': '',
    },
    {
      'tag': 'label',
      'group': 'Elems. de formulario',
      'url': 'https://developer.mozilla.org/en/docs/Web/HTML/Element/label',
      'description': '',
      'codeHTML': '',
      'codeJS': '',
    },
    {
      'tag': 'input',
      'group': 'Elems. de formulario',
      'url': 'https://developer.mozilla.org/en/docs/Web/HTML/Element/input',
      'description': '',
      'codeHTML': '',
      'codeJS': '',
    },
    {
      'tag': 'button',
      'group': 'Elems. de formulario',
      'url': 'https://developer.mozilla.org/en/docs/Web/HTML/Element/button',
      'description': '',
      'codeHTML': '',
      'codeJS': '',
    },
    {
      'tag': 'select',
      'group': 'Elems. de formulario',
      'url': 'https://developer.mozilla.org/en/docs/Web/HTML/Element/select',
      'description': '',
      'codeHTML': '',
      'codeJS': '',
    },
    {
      'tag': 'datalist',
      'group': 'Elems. de formulario',
      'url': 'https://developer.mozilla.org/en/docs/Web/HTML/Element/datalist',
      'description': 'El elemento "**<datalist>**" de HTML se utiliza junto con el elemento "**<input>**" para proporcionar una lista desplegable de opciones para que los usuarios elijan.',
      'codeHTML': `<!-- nuestro input -->
<label for="fruta">Selecciona una fruta:</label>
<input list="frutas" id="fruta" name="fruta">

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
      'description': '',
      'codeHTML': '',
      'codeJS': '',
    },
    {
      'tag': 'option',
      'group': 'Elems. de formulario',
      'url': 'https://developer.mozilla.org/en/docs/Web/HTML/Element/option',
      'description': '',
      'codeHTML': '',
      'codeJS': '',
    },
    {
      'tag': 'textarea',
      'group': 'Elems. de formulario',
      'url': 'https://developer.mozilla.org/en/docs/Web/HTML/Element/textarea',
      'description': '',
      'codeHTML': '',
      'codeJS': '',
    },
    {
      'tag': 'output',
      'group': 'Elems. de formulario',
      'url': 'https://developer.mozilla.org/en/docs/Web/HTML/Element/output',
      'description': '',
      'codeHTML': '',
      'codeJS': '',
    },
    {
      'tag': 'progress',
      'group': 'Elems. de formulario',
      'url': 'https://developer.mozilla.org/en/docs/Web/HTML/Element/progress',
      'description': '',
      'codeHTML': '',
      'codeJS': '',
    },
    {
      'tag': 'meter',
      'group': 'Elems. de formulario',
      'url': 'https://developer.mozilla.org/en/docs/Web/HTML/Element/meter',
      'description': '',
      'codeHTML': '',
      'codeJS': '',
    },
    {
      'tag': 'ul',
      'group': 'Elems. de lista',
      'url': 'https://developer.mozilla.org/en/docs/Web/HTML/Element/ul',
      'description': '',
      'codeHTML': '',
      'codeJS': '',
    },
    {
      'tag': 'ol',
      'group': 'Elems. de lista',
      'url': 'https://developer.mozilla.org/en/docs/Web/HTML/Element/ol',
      'description': '',
      'codeHTML': '',
      'codeJS': '',
    },
    {
      'tag': 'li',
      'group': 'Elems. de lista',
      'url': 'https://developer.mozilla.org/en/docs/Web/HTML/Element/li',
      'description': '',
      'codeHTML': '',
      'codeJS': '',
    },

    {
      'tag': 'dl',
      'group': 'Elems. de lista de definiciones',
      'url': 'https://developer.mozilla.org/en/docs/Web/HTML/Element/dl',
      'description': '',
      'codeHTML': '',
      'codeJS': '',
    },
    {
      'tag': 'dt',
      'group': 'Elems. de lista de definiciones',
      'url': 'https://developer.mozilla.org/en/docs/Web/HTML/Element/dt',
      'description': '',
      'codeHTML': '',
      'codeJS': '',
    },
    {
      'tag': 'dd',
      'group': 'Elems. de lista de definiciones',
      'url': 'https://developer.mozilla.org/en/docs/Web/HTML/Element/dd',
      'description': '',
      'codeHTML': '',
      'codeJS': '',
    },
    {
      'tag': 'div',
      'group': 'Elems. para secciones',
      'url': 'https://developer.mozilla.org/en/docs/Web/HTML/Element/div',
      'description': '',
      'codeHTML': '',
      'codeJS': '',
    },
    {
      'tag': 'header',
      'group': 'Elems. para secciones',
      'url': 'https://developer.mozilla.org/en/docs/Web/HTML/Element/header',
      'description': '',
      'codeHTML': '',
      'codeJS': '',
    },
    {
      'tag': 'nav',
      'group': 'Elems. para secciones',
      'url': 'https://developer.mozilla.org/en/docs/Web/HTML/Element/nav',
      'description': '',
      'codeHTML': '',
      'codeJS': '',
    },
    {
      'tag': 'aside',
      'group': 'Elems. para secciones',
      'url': 'https://developer.mozilla.org/en/docs/Web/HTML/Element/aside',
      'description': '',
      'codeHTML': '',
      'codeJS': '',
    },
    {
      'tag': 'main',
      'group': 'Elems. para secciones',
      'url': 'https://developer.mozilla.org/en/docs/Web/HTML/Element/main',
      'description': '',
      'codeHTML': '',
      'codeJS': '',
    },
    {
      'tag': 'section',
      'group': 'Elems. para secciones',
      'url': 'https://developer.mozilla.org/en/docs/Web/HTML/Element/section',
      'description': '',
      'codeHTML': '',
      'codeJS': '',
    },
    {
      'tag': 'article',
      'group': 'Elems. para secciones',
      'url': 'https://developer.mozilla.org/en/docs/Web/HTML/Element/article',
      'description': '',
      'codeHTML': '',
      'codeJS': '',
    },
    {
      'tag': 'footer',
      'group': 'Elems. para secciones',
      'url': 'https://developer.mozilla.org/en/docs/Web/HTML/Element/footer',
      'description': '',
      'codeHTML': '',
      'codeJS': '',
    },
    {
      'tag': 'details',
      'group': 'Elems. de interacción',
      'url': 'https://developer.mozilla.org/en/docs/Web/HTML/Element/details',
      'description': '',
      'codeHTML': '',
      'codeJS': '',
    },
    {
      'tag': 'summary',
      'group': 'Elems. de interacción',
      'url': 'https://developer.mozilla.org/en/docs/Web/HTML/Element/summary',
      'description': '',
      'codeHTML': '',
      'codeJS': '',
    },
    {
      'tag': 'dialog',
      'group': 'Elems. de interacción',
      'url': 'https://developer.mozilla.org/en/docs/Web/HTML/Element/dialog',
      'description': '',
      'codeHTML': '',
      'codeJS': '',
    },
    {
      'tag': 'table',
      'group': 'Elems. de tabla',
      'url': 'https://developer.mozilla.org/en/docs/Web/HTML/Element/table',
      'description': '',
      'codeHTML': '',
      'codeJS': '',
    },
    {
      'tag': 'caption',
      'group': 'Elems. de tabla',
      'url': 'https://developer.mozilla.org/en/docs/Web/HTML/Element/caption',
      'description': '',
      'codeHTML': '',
      'codeJS': '',
    },
    {
      'tag': 'colgroup',
      'group': 'Elems. de tabla',
      'url': 'https://developer.mozilla.org/en/docs/Web/HTML/Element/colgroup',
      'description': '',
      'codeHTML': '',
      'codeJS': '',
    },
    {
      'tag': 'col',
      'group': 'Elems. de tabla',
      'url': 'https://developer.mozilla.org/en/docs/Web/HTML/Element/col',
      'description': '',
      'codeHTML': '',
      'codeJS': '',
    },
    {
      'tag': 'thead',
      'group': 'Elems. de tabla',
      'url': 'https://developer.mozilla.org/en/docs/Web/HTML/Element/thead',
      'description': '',
      'codeHTML': '',
      'codeJS': '',
    },
    {
      'tag': 'tbody',
      'group': 'Elems. de tabla',
      'url': 'https://developer.mozilla.org/en/docs/Web/HTML/Element/tbody',
      'description': '',
      'codeHTML': '',
      'codeJS': '',
    },
    {
      'tag': 'tfoot',
      'group': 'Elems. de tabla',
      'url': 'https://developer.mozilla.org/en/docs/Web/HTML/Element/tfoot',
      'description': '',
      'codeHTML': '',
      'codeJS': '',
    },
    {
      'tag': 'tr',
      'group': 'Elems. de tabla',
      'url': 'https://developer.mozilla.org/en/docs/Web/HTML/Element/tr',
      'description': '',
      'codeHTML': '',
      'codeJS': '',
    },
    {
      'tag': 'th',
      'group': 'Elems. de tabla',
      'url': 'https://developer.mozilla.org/en/docs/Web/HTML/Element/th',
      'description': '',
      'codeHTML': '',
      'codeJS': '',
    },
    {
      'tag': 'td',
      'group': 'Elems. de tabla',
      'url': 'https://developer.mozilla.org/en/docs/Web/HTML/Element/td',
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
      'tag': 'img',
      'group': 'Elems. multimedia',
      'url': 'https://developer.mozilla.org/en/docs/Web/HTML/Element/img',
      'description': '',
      'codeHTML': '',
      'codeJS': '',
    },
    {
      'tag': 'picture',
      'group': 'Elems. multimedia',
      'url': 'https://developer.mozilla.org/en/docs/Web/HTML/Element/picture',
      'description': '',
      'codeHTML': '',
      'codeJS': '',
    },
    {
      'tag': 'audio',
      'group': 'Elems. multimedia',
      'url': 'https://developer.mozilla.org/en/docs/Web/HTML/Element/audio',
      'description': '',
      'codeHTML': '',
      'codeJS': '',
    },
    {
      'tag': 'video',
      'group': 'Elems. multimedia',
      'url': 'https://developer.mozilla.org/en/docs/Web/HTML/Element/video',
      'description': '',
      'codeHTML': '',
      'codeJS': '',
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