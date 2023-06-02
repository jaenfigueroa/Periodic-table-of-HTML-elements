import './Editor.scss'
import { useEffect, useRef, useState } from 'react'
import CodeMirror from '@uiw/react-codemirror'
import { html } from '@codemirror/lang-html'
import { css } from '@codemirror/lang-css'
import { themeHTML } from '../../../themes/themeHTML'
import { themeCSS } from '../../../themes/themeCSS'

type Props = {
  htmlDefault: string
  cssDefault: string
}

export const Editor = ({htmlDefault = '', cssDefault = ''}:Props) => {
  const iframeRef = useRef<HTMLIFrameElement>(null)

  const [htmlCode, setHtmlCode] = useState<string>(htmlDefault)
  const [cssCode, setCssCode] = useState<string>(cssDefault)

  const [htmlCodeVisible, setHTMLVIsible] = useState<boolean>(true)

  /* ACTUALIZAR EL IFRAME */
  useEffect(() => {
    const iframeDocument = iframeRef.current?.contentDocument
    iframeDocument?.open()
    iframeDocument?.write(
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
    iframeDocument?.close()
  }, [htmlCode, cssCode])

  return (
    <div className='editor'>
      <div className='editor__container-editors'>
        <div className='editor__container-titles'>
          <button onClick={() =>setHTMLVIsible(true)} className='editor__names'>HTML</button>
          <button onClick={() =>setHTMLVIsible(false)} className='editor__names'>CSS</button>
        </div>
        {
          htmlCodeVisible
            ? (
              <CodeMirror
                className='editor__editor-code'
                value={htmlCode}
                height='100%'
                extensions={[html()]}
                theme={themeHTML}
                onChange={(value) => setHtmlCode(value)}
              />
            )
            : (
              <CodeMirror
                className='editor__editor-code'
                value={cssCode}
                height='100%'
                extensions={[css()]}
                theme={themeCSS}
                onChange={(value) => setCssCode(value)}
              />
            )
        }
      </div>
      <div className='editor__container-iframe'>
        <h2 className='editor__names'>Resultado</h2>
        <iframe ref={iframeRef} title='Result' className='result-iframe' />
      </div>
    </div>
  )
}
