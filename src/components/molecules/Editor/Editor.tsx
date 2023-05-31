import './Editor.scss'
import { useEffect, useRef, useState } from 'react'
import CodeMirror from '@uiw/react-codemirror'
import { html } from '@codemirror/lang-html'
import { css } from '@codemirror/lang-css'
// import { javascript } from '@codemirror/lang-javascript'

type Props = {
  htmlDefault: string
  cssDefault: string
}

export const Editor = ({htmlDefault = '', cssDefault = ''}:Props) => {
  const iframeRef = useRef(null)

  const [htmlCode, setHtmlCode] = useState(htmlDefault)
  const [cssCode, setCssCode] = useState(cssDefault)
  // const [jsCode, setJsCode] = useState('console.log(\'hello world!\');')

  /* ACTUALIZAR EL IFRAME */
  useEffect(() => {
    const iframeDocument = iframeRef.current.contentDocument
    iframeDocument.open()
    iframeDocument.write(
      `
      <html>
        <head>
          <style>
          * {
            box-sizing: border-box;
            text-rendering: optimizeLegibility;
            font-family: sans-serif;
          }
          ${cssCode}</style>
        </head>
        <body>
          ${htmlCode}
        </body>
      </html>
      `,
    )
    iframeDocument.close()
  }, [htmlCode, cssCode])

  return (
    <div className='editor'>
      <div className='editor__container-editors'>
        <div>
          <h2 className='editor__names'>HTML</h2>
          <CodeMirror
            className='editor__editor-code'
            value={htmlCode}
            height='200px'
            extensions={[html()]}
            onChange={(value) => setHtmlCode(value)}
          />
        </div>
        <div>
          <h2 className='editor__names'>CSS</h2>
          <CodeMirror
            className='editor__editor-code'
            value={cssCode}
            height='200px'
            extensions={[css()]}
            onChange={(value) => setCssCode(value)}
          />
        </div>
      </div>
      <div className='editor__container-iframe'>
        <h2 className='editor__names'>Resultado</h2>
        <iframe ref={iframeRef} title='Result' className='result-iframe' />
      </div>
    </div>
  )
}
