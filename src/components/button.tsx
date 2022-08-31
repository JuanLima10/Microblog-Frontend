import { Button } from "../types/Button"


export const DefaultButton = ({ children }: Button) => {
    return(
        <button 
            className="w-32 mr-6 mb-2 cursor-pointer text-center border-none rounded-full bg-white-100 text-black py-2 px-8 hover:bg-white-300"
            type="submit"
        >
            { children }
        </button> 
    )
}

export const DisabledButton = ({ children }: Button) => {
    return(
        <button 
            className="w-32 mr-6 mb-2 cursor-not-allowed text-center border-none rounded-full bg-zinc-400 text-white-200 py-2 px-8"
            type="submit"
            disabled
        >
            { children }
        </button> 
    )
}