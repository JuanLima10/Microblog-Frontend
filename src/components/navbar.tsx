import Image from "next/image"


export const NavBar = () => {
    return(
        <div className="flex items-center justify-center gap-4 p-4">
            <Image 
                src="/logo.png" 
                alt="logo" 
                width={55} 
                height={55} 
            />
            <h1 className="text-xl text-white-100 mt-2 shadow-md">
                Alguma coisa em mente?
            </h1>
        </div>
    )
}