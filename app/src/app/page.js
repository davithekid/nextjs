import "./page.css"
export default function Home() {
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
            <img src="/carti.jpg"></img>
            <img src="/niink.jpg"></img>
            <img src="/vino.jpg"></img>
            <img src="/je.jpg"></img>
          </div>
        </div>
      </section>

      <section id="album">
        <h1 className="font-extrabold text-4xl mt-6 hover:text-red-600 duration-300 ml-15">Albums principais</h1>
        <div className="albums flex justify-evenly mt-10">

          <div className="album-list hover:scale-110 duration-300 cursor-pointer">
            <img className="rounded-3xl mb-1" src="/MUSIC.jpg" width={250}></img>
            <p>MUSIC</p>
            <p className="text-gray-500">Playboi Carti</p>
          </div>
          <div className="album-list hover:scale-110 duration-300 cursor-pointer">
            <img className="rounded-3xl mb-1" src="/calzone.jpg" width={250}></img>
            <p>Calzone tapes 3</p>
            <p className="text-gray-500">Recayd Mob</p>
          </div>
          <div className="album-list hover:scale-110 duration-300 cursor-pointer">
            <img className="rounded-3xl mb-1" src="/quebrada.jpeg" width={250}></img>
            <p>Um quebrada inteligente</p>
            <p className="text-gray-500">Kyan e MU54O</p>
          </div>
          <div className="album-list hover:scale-110 duration-300 cursor-pointer">
            <img className="rounded-3xl mb-1" src="/semreh.jpeg" width={250}></img>
            <p>SEMRÉH</p>
            <p className="text-gray-500">Ryu, the runner</p>
          </div>
          <div className="album-list hover:scale-110 duration-300 cursor-pointer">
            <img className="rounded-3xl mb-1" src="/nink.jpeg" width={250}></img>
            <p>Ainda no mesmo bairro</p>
            <p className="text-gray-500">Niink</p>
          </div>
          <div className="album-list hover:scale-110 duration-300 cursor-pointer">
            <img className="rounded-3xl mb-1" src="/rudies.jpeg" width={250}></img>
            <p>Menino bom, mlk ruim</p>
            <p className="text-gray-500">Rudies Flacko</p>
          </div>
        </div>
      </section>

      <section id="faixa">
        <h1 className="font-extrabold text-3xl m-10">Faixas mais ouvidas</h1>

        <table className="ml-10 w-[50%]">
          <tbody className="p-10 rounded-4xl">
            <tr className="border-b-3 hover:bg-[#11161a] duration-400">
              <td className="py-3">1</td>
              <td className="py-3"><img src="/MUSIC.jpg" alt="Música" width={50} /></td>
              <td className="py-3">MUSIC<p>Playboi Carti </p></td>
              <td className="py-3"> <p className="ml-5">Avaliação aqui</p></td>
            </tr>
            <tr className="border-b-3 hover:bg-[#11161a] duration-400">
              <td className="py-3">2</td>
              <td className="py-3"><img src="/nink.jpeg" alt="Música" width={50} /></td>
              <td className="py-3">Numa Balada Qualquer<p>Niink </p></td>
              <td className="py-3"> <p className="ml-5">Avaliação aqui</p></td>
            </tr>
            <tr className="border-b-3 hover:bg-[#11161a] duration-400">
              <td className="py-3">3</td>
              <td className="py-3"><img src="/paiva.jpeg" alt="Música" width={50} /></td>
              <td className="py-3">Fui Mlk<p>Mc Paiva </p></td>
              <td className="py-3"> <p className="ml-5">Avaliação aqui</p></td>
            </tr>
            <tr className="border-b-3 hover:bg-[#11161a] duration-400">
              <td className="py-3">4</td>
              <td className="py-3"><img src="/mcnegao.jpeg" alt="Música" width={50} /></td>
              <td className="py-3">Os Mlks é Ruim<p>Mc Negão Original, Veigh </p></td>
              <td className="py-3"> <p className="ml-5">Avaliação aqui</p></td>
            </tr>
            <tr className="hover:bg-[#11161a] duration-400">
              <td className="py-3">5</td>
              <td className="py-3"><img src="/cjota.jpeg" alt="Música" width={50} /></td>
              <td className="py-3">Mente do Coringa<p>CJota, Ryu, the runner, Ghard </p></td>
              <td className="py-3"> <p className="ml-5">Avaliação aqui</p></td>
            </tr>
          </tbody>
        </table>
      </section>

    </>

  );
}
