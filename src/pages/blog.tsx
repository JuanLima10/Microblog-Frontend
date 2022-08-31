import { useEffect, useState } from 'react'
import { DefaultButton, DisabledButton } from '../components/button'
import { LoadingCard, PostsCard } from '../components/card'
import { DefaultInput, TextArea } from '../components/input'
import { NavBar } from '../components/navbar'
import { Blog } from '../types/Blog'

import api from './api/api'

export default function BlogPage() {

  const [ post, setPost ] = useState<Blog[]>([])

  const [ name, setName ] = useState('')
  const [ text, setText ] = useState('')

  const [ isLoading, setIsLoading ] = useState(false)
  const [ isSending, setIsSending ] = useState(false)
  const [ error, setError ] = useState(false)

  useEffect(() => {
    setIsLoading(true)

    api.get(`/read`)
      .then(res => {
        setPost(res.data.data)
        setIsLoading(false)
    })
  }, [])


  function handleCreatePost(e: any){
    e.preventDefault()
    setIsSending(true)

    const blog = { name, text }
    api.post('/create', blog).then(() => {
        setIsSending(false)
        window.location.reload()
    }).catch(() => {
      setIsSending(false)
      setError(true)
    })
  }

  return (
    <>
      <NavBar/>
      <form 
        className="w-[800px] max-w-[90%] mx-auto flex flex-col items-end gap-4 m-2 pt-8 pb-4 px-4 bg-green-800 rounded-lg"
        onSubmit={ handleCreatePost }>
        <DefaultInput 
          type="text" 
          placeholder="Nome" 
          value={ name }
          onChange={ (e : any) => setName(e.target.value) }
        />
        <TextArea 
          placeholder="O que você está pensando?"
          value={ text }
          onChange={ (e: any) => setText(e.target.value) }
          counter={ (text.toString()).length }
        />
        <div className="flex items-center gap-4">
          { error && <p className="text-red-600 -mt-2">Algo está errado</p> }
          { !isSending && <DefaultButton> Enviar </DefaultButton>}
          { isSending && <DisabledButton> Enviando </DisabledButton> }
        </div>
      </form>

      {
        !isLoading && post
          .sort((a, b) => (a.id < b.id) ? 1 : -1)
          .map((p) => (
            <PostsCard key={ p.id } name={ p.name } text={ p.text }/>
        ))
      }

      { isLoading && <><LoadingCard/><LoadingCard/></> }
      
    </>
  )
}