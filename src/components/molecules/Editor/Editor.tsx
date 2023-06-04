import './Editor.scss'
import { useEffect, useRef, useState } from 'react'
import CodeMirror from '@uiw/react-codemirror'
import { html } from '@codemirror/lang-html'
import { css } from '@codemirror/lang-css'
import { javascript } from '@codemirror/lang-javascript'
import { themeHTML } from '../../../themes/themeHTML'
import { themeCSS } from '../../../themes/themeCSS'
import { themeJS } from '../../../themes/themeJS'

type Props = {
  htmlDefault: string
  cssDefault: string
}

type Values = 'html' | 'css' | 'js'

export const Editor = ({htmlDefault = '', cssDefault = ''}:Props) => {
  const iframeRef = useRef<HTMLIFrameElement>(null)

  const [htmlCode, setHtmlCode] = useState<string>(htmlDefault)
  const [cssCode, setCssCode] = useState<string>(cssDefault)
  const [jsCode, setJsCode] = useState<string>(cssDefault)

  // const [htmlCodeVisible, setHTMLVIsible] = useState<boolean>(true)
  const [languageVisible, setLanguageVisible] = useState<Values>('html')

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
          <script>${jsCode}</script>
        </body>
      </html>
      `,
    )
    iframeDocument?.close()
  }, [htmlCode, cssCode, jsCode])

  return (
    <div className='editor'>
      <div className='editor__container-global'>
        <div className='editor__container-titles'>
          <button onClick={() =>setLanguageVisible('html')} className='editor__names'>HTML</button>
          <button onClick={() =>setLanguageVisible('css')} className='editor__names'>CSS</button>
          <button onClick={() =>setLanguageVisible('js')} className='editor__names'>JS</button>
        </div>
        <div className='editor__container-editors'>
          <CodeMirror
            className={`editor__editor-code ${languageVisible === 'html' && 'editor__editor-code--visible'}`}
            value={htmlCode}
            height='100%'
            extensions={[html()]}
            theme={themeHTML}
            onChange={(value) => setHtmlCode(value)}
          />
          <CodeMirror
            className={`editor__editor-code ${languageVisible === 'css' && 'editor__editor-code--visible'}`}
            value={cssCode}
            height='100%'
            extensions={[css()]}
            theme={themeCSS}
            onChange={(value) => setCssCode(value)}
          />
          <CodeMirror
            className={`editor__editor-code ${languageVisible === 'js' && 'editor__editor-code--visible'}`}
            value={jsCode}
            height='100%'
            extensions={[javascript()]}
            theme={themeJS}
            onChange={(value) => setJsCode(value)}
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
