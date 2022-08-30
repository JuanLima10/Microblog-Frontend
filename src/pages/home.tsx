import { useEffect, useState } from 'react'
import { IBlog } from '../types/Blog'

import api from './api/api'

export default function App() {

  const [ post, setPost ] = useState<IBlog[]>([])

  const [ name, setName ] = useState('')
  const [ text, setText ] = useState('')

  const [ isLoading, setIsloading ] = useState(false)

  useEffect(() => {
    api.get(`/read`)
      .then(res => {
        setPost(res.data.data)
    })
  }, [])


  function handleCreatePost(e: any){
    e.preventDefault()

    setIsloading(true)

    const blog = { name, text }
    api.post('/create', blog).then(() => {
        setIsloading(false)
        window.location.reload()
    }).catch()
  }


  return (
    <>
      <form onSubmit={ handleCreatePost }>
        <input 
          type="text" 
          placeholder="Nome" 
          value={ name }
          onChange={ (e : any) => setName(e.target.value) }
        /><br/>
        <textarea 
          placeholder="Conteúdo"
          value={ text }
          onChange={ (e: any) => setText(e.target.value) }
        /><br/>
        { !isLoading && <button type="submit">Enviar</button> }
        { isLoading && <button type="submit">Enviar ...</button> }
      </form>

      {
        post.map((p) => (
          <p key={ p.id }>{ p.name }</p>
        ))
      }

    </>
  )
}