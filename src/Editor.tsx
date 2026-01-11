import { EditorProvider } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'


const extensions = [
  StarterKit,
]

const content = '<p>Hello there!</p>'

function Editor() {
  return <EditorProvider extensions={extensions} content={content} />
}

export default Editor