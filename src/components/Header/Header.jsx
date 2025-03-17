import "./header.css"
export default function Header (){
    return (
        <>
            <header>
                <nav>
                    
                 

                    <ul className="text-white fixed flex left-[30%] tracking-tighter gap-[2vw] text-3xl font-extrabold uppercase "> 
                        <li><a className="text-black" href="">wusyname<span className="text-red-600">.fm</span></a></li> 
                        <li><a className="duration-300 hover:text-red-600" href="/">Home</a></li>
                        <li><a className="duration-300 hover:text-red-600" href="/contato">Musicas</a></li>
                        <li><a className="" href="/sobre"><img src="/perfil-de-usuario.png" width={40} alt="" /></a></li>
                    </ul>
                </nav>
            </header>
        </>
    )
}