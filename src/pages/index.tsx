import Image from "next/image";

export default function Home() {
  return (
    <>
        <div className="flex justify-center place-items-center h-screen">
          <div className="flex flex-col gap-4">
            <Image
              src="/logo.png" 
              alt="logo" 
              width={200} 
              height={200} 
            />
            <a 
              href="/blog"
              className="bg-blue-500 text-white-100 text-center py-2 rounded-full drop-shadow-md hover:bg-blue-400"
            >
              Começar
            </a>
          </div>
        </div>
    </>
  )
}