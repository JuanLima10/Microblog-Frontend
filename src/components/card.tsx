import { Card } from "../types/Card"

export const PostsCard = ({ key, name, text }: Card) => {
    return(
        <div className="w-[700px] max-w-[100%] flex justify-center gap-4 mx-auto p-4">
            <div 
                key={ key }
                className="w-[700px] max-w-[90%] max-h-full p-4 mt-3 bg-green-800 rounded-lg 
                relative before:absolute before:content-[''] before:bg-green-800 before:p-2 before:rotate-45 before:top before:left-[-8px] before:border-none" 
            >    
                <h1 className="text-white-100 text-xl mb-2">{ name }</h1>
                <p className="text-white-100 m-2">{ text }</p>
            </div>
        </div>
    )
}

export const LoadingCard = () => {
    return(
        <div className="w-[600px] max-w-[90%] rounded-md p-4 mx-auto ">
            <div className="animate-pulse flex space-x-4">
                    <div className="flex-1 space-y-6 py-1">
                        <div className="flex flex-col gap-8 border-4 border-slate-700 shadow rounded-md p-8 w-full">
                            <div className="w-40 h-2 bg-slate-700 rounded"></div>
                            <div className="space-y-3">
                            <div className="h-2 bg-slate-700 rounded"></div>
                            <div className="h-2 bg-slate-700 rounded"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}