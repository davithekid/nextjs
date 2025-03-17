import "./header.css"
export default function Header (){
    return (
        <>
            <header>
                <nav>
                    <ul className="text-orange-500 flex justify-center gap-[2vw] text-3xl font-extrabold uppercase hover:text-red-500">
                        <li><a href="/">Home</a></li>
                        <li><a href="/contato">Contato</a></li>
                        <li><a href="/sobre">Sobre</a></li>
                    </ul>
                </nav>
            </header>
        </>
    )
}