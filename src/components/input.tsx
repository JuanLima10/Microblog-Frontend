import { Input } from '../types/Input'

export const DefaultInput = ({ 
  type,
  placeholder,
  value,
  onChange 
}: Input) => {

  return(
    <>
        <div className="w-11/12 mx-auto">
            <input 
            className="w-full py-2 px-2 m-1  bg-green-500 text-white-100 rounded-lg outline-none"
            placeholder={ placeholder } 
            type={ type } 
            value={ value } 
            onChange={ onChange } 
            maxLength={60}
            />
        </div>
    </>
  )
}

export const TextArea = ({ 
  placeholder,
  value,
  onChange,
  counter 
}: Input) => {

  return(
    <>
        <div className="w-11/12 mx-auto">
            <textarea 
              className="w-full h-48 py-2 px-2 m-1 bg-green-500 text-white-100 rounded-lg outline-none resize-none"
              placeholder={ placeholder }
              value={ value }
              onChange={ onChange } 
              maxLength={200}
            />
            <span className="absolute -mt-10 ml-4 text-zinc-500">
                { counter } / 200
            </span>
            
        </div>
    </>
  )
}