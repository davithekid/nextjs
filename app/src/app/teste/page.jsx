import './teste.css'
export default function teste() {

    const musicas = [
        {
            id: 1,
            nome: 'Master of Puppets',
            valor: 200.00
        },
        {
            id: 2,
            nome: 'RATHER LIE',
            valor: 35.00
        }, {
            id: 3,
            nome: 'RADAR',
            valor: 135.00
        }
    ]

    const artistas = [
        { id: 1, nome: "Frank Ocean", genero: "rap", foto: "/blonde.jpeg" },
        { id: 2, nome: "Playboi Carti", genero: "trap", foto: "/MUSIC.jpg" }
    ]

    return (
        <>
            <div>

                <h1>Lista de Produtos</h1>
                {musicas.map((musica) => (
                    <div key={musica.id}>
                        <h2>Musica: {musica.nome}</h2>
                        <h2>Valor: {musica.valor ? musica.valor.toFixed(2) : '0.00'}</h2>
                    </div>
                ))}

                <h1>Lista Funcionarios</h1>
                <div className="flex">
                {artistas.map((artista) => (                  
                    <div className='listaArtista' key={artista.id}>
                        <div className='cardArtista border border-white'>
                            <img className='w-60 p-15' src={artista.foto} alt="" />
                            <h2>Nome do Artista {artista.nome}</h2>
                            <h3>Genero Musical {artista.genero}</h3>
                        </div>
                    </div>
                ))}
                </div>


                
            </div>
        </>
    )
}