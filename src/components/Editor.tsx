import React, { useRef, useEffect } from 'react'
import EditorJS from '@editorjs/editorjs'
import Header from '@editorjs/header'
import List from '@editorjs/list'
import LinkTool from '@editorjs/link'
import RawTool from '@editorjs/raw';
import { useGlobalContext } from '../context'

const Editor = () => {
    const {setDescription,editorContent} = useGlobalContext();
    const DEFAULT_INITIAL_DATA = editorContent
    const initEditor = () => {
        const editor = new EditorJS({
            holder: "editorjs",
            onReady: () => {
                ejInstance.current = editor
            },
            autofocus: true,
            data: DEFAULT_INITIAL_DATA,
            onChange: async () => {
                let content = await editor.saver.save()
                console.log(content)
                setDescription(content)
            },
            tools: {
                header: {
                    class: Header,
                    inlineToolbar: ['link'],
                    config: {
                        placeholder: "Header"
                    }
                },
                list: {
                    class: List,
                    inlineToolbar: true
                },
                linkTool:{
                    class:LinkTool,
                    inlineToolbar:true
                },
                raw:{
                    class:RawTool,
                    inlineToolbar:true
                }
            },
        });
    }

    const ejInstance = useRef();

    useEffect(() => {
        if (ejInstance.current === null) {
          initEditor();
        }
    
        return () => {
          ejInstance?.current?.destroy();
          ejInstance.current = null;
        };
      }, []);
    
      
    // editor.save().then((outputData) => {
    //     console.log('Article data: ', outputData)
    //   }).catch((error) => {
    //     console.log('Saving failed: ', error)
    //   });

    return (
        <div id='editorjs' className='bg-secondary rounded-md px-6 py-4 font-urbanist'></div>
    )
}

export default Editor