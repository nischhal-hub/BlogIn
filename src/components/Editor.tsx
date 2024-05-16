import React from 'react'
import EditorJS from '@editorjs/editorjs'

const Editor = () => {
    const editor = new EditorJS({
        
    });
    return (
        <div className='editorjs'>Editor</div>
    )
}

export default Editor