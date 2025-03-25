import "./page.css"
export default function Home() {

  const artistas = [
    { id: 1, nome: "Playboi Carti", img: "/carti.jpg" },
    { id: 2, nome: "Niink", img: "/niink.jpg" },
    { id: 3, nome: "Yunk-vino", img: "/vino.jpg" },
    { id: 4, nome: "Jé Santiago", img: "/je.jpg" },
  ]

  const albuns = [
    {id: 1, nome:  'MUSIC', artista: "Playboi Carti", img: '/MUSIC.jpg'},
    {id: 2, nome:  'Calzone tapes 3', artista: "Recayd Mob", img: '/calzone.jpg'},
    {id: 3, nome:  'Um Quebrada Inteligente', artista: "Kyan, DJ MU540", img: '/quebrada.jpeg'},
    {id: 4, nome:  'SEMRÉH', artista: "Ryu, the runner", img: '/semreh.jpeg'},
    {id: 5, nome:  'Ainda no mesmo bairro', artista: "Niink", img: '/nink.jpeg'},
    {id: 6, nome:  'Menino bom, mlk ruim', artista: "Rudies Flacko", img: '/rudies.jpeg'},
  ]

  const faixas = [
    {id: 1, musica: 'RATHER LIE', artista: "Playboi Carti", img: '/MUSIC.jpg'},
    {id: 2, musica: 'Numa Balada Qualquer', artista: "Niink", img: '/nink.jpeg'},
    {id: 3, musica: 'Fui Mlk', artista: "Paiva", img: '/paiva.jpeg'},
    {id: 4, musica: 'Os Mlks é Ruim', artista: "Mc Negão Original, Veigh", img: '/mcnegao.jpeg'},
    {id: 5, musica: 'Mente do Coringa', artista: "CJota, Ghard, Ryu, the runner", img: '/cjota.jpeg'},
  ]


  return (
    <>
      <section id="banner">
        <div className="list">
          <div className="item">
            <img src="/flower-boy.png"></img>
            <div className="content">
              <div className="autor font-extrabold text-3xl">Tyler, the creator</div>
              <div className="title font-extrabold">Flower Boy</div>
              <div className="topic font-extrabold">Album</div>
            </div>
          </div>
        </div>
      </section>

      <section id="artista">
        <h1 className="font-extrabold text-4xl mt-6 hover:text-red-600 duration-300 flex justify-center">Artistas principais</h1>
        <div className="flex justify-center mt-5">
          <div className="artistas">
            {artistas.map((artista) => (
              <img src={artista.img}></img>
            ))}
          </div>
        </div>
      </section>

      <section id="album">
        <h1 className="font-extrabold text-4xl mt-6 hover:text-red-600 duration-300 ml-15">Albums principais</h1>
        <div className="albums flex justify-evenly mt-10">
          {albuns.map((album) => (
            <div  className="album-list hover:scale-110 duration-300 cursor-pointer">
            <img className="rounded-3xl mb-1" src={album.img} width={250}></img>
            <p>{album.nome}</p>
            <p className="text-gray-500">{album.artista}</p>
          </div>
          ))}
        </div>
      </section>

      <section id="faixa">
        <h1 className="font-extrabold text-3xl m-10">Faixas mais ouvidas</h1>
        <table className="ml-10 w-[50%]">
          {faixas.map((faixa) => (
            <tbody className="p-10 rounded-4xl">
            <tr className="border-b-3 hover:bg-[#11161a] duration-400">
              <td className="py-3">{faixa.id}</td>
              <td className="py-3"><img src={faixa.img} alt="Música" width={50} /></td>
              <td className="py-3">{faixa.musica}<p>{faixa.artista}</p></td>
              <td className="py-3"> <p className="ml-5"></p></td>
            </tr>
          </tbody>
      ))}
        </table>
      </section>

    </>

  );
}
