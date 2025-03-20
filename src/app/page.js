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

        <table className="ml-10 border-separate border border-gray-400">
          <thead>
            <tr>
              <th>#</th>
              <th>Música</th>
              <th>Artista</th>
              <th>Avaliação</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td><img src="/MUSIC.jpg" alt="Música" width={39}/></td>
              <td>MUSIC<p>Playboi carti </p></td>
              <td> <p className="ml-5">Avaliação aqui</p></td>
            </tr>
          </tbody>
        </table>


      </section>

      {/* <section id="faixas">

        
        <div className="ml-40">

          <table className="table-fixed"> */}
      {/* <tbody>
              <tr className="">
                <td className="font-extrabold text-4xl">1</td>
                <td><img className="w-15 mr-10" src="/MUSIC.jpg"></img></td>
                <td className="font-extrabold text-2xl mr-1">Evil Jordan</td>
                <td className="font-extrabold text-2xl mr-1">Playboi Carti</td>
              </tr>
              <tr>

                <td className="font-extrabold text-4xl">2</td>
                <td><img className="w-15 " src="/MUSIC.jpg"></img></td>
                <td className="font-extrabold text-2xl">Evil Jordan</td>

              </tr>

              <tr>
                <td className="font-extrabold text-4xl">3</td>
                <td><img className="w-15 " src="/MUSIC.jpg"></img></td>
                <td className="font-extrabold text-2xl">Evil Jordan</td>

              </tr>
              <tr>
                <td className="font-extrabold text-4xl">4</td>
                <td><img className="w-15 " src="/MUSIC.jpg"></img></td>
                <td className="font-extrabold text-2xl">Evil Jordan</td>

              </tr>
              <tr>
                <td className="font-extrabold text-4xl">5</td>
                <td><img className="w-15 " src="/MUSIC.jpg"></img></td>
                <td className="font-extrabold text-2xl">Evil Jordan</td>

              </tr>
              <tr>
                <td className="font-extrabold text-4xl">6</td>
                <td><img className="w-15 " src="/MUSIC.jpg"></img></td>
                <td className="font-extrabold text-2xl">Evil Jordan</td>

              </tr>
              <tr>
                <td className="font-extrabold text-4xl">7</td>
                <td><img className="w-15 " src="/MUSIC.jpg"></img></td>
                <td className="font-extrabold text-2xl">Evil Jordan</td>

              </tr>
              <tr>
                <td className="font-extrabold text-4xl">8</td>
                <td><img className="w-15 " src="/MUSIC.jpg"></img></td>
                <td className="font-extrabold text-2xl">Evil Jordan</td>

              </tr>
              <tr>
                <td className="font-extrabold text-4xl">9</td>
                <td><img className="w-15 " src="/MUSIC.jpg"></img></td>
                <td className="font-extrabold text-2xl">Evil Jordan</td>

              </tr>
              <tr>
                <td className="font-extrabold text-4xl">10</td>
                <td><img className="w-15 " src="/MUSIC.jpg"></img></td>
                <td className="font-extrabold text-2xl">Evil Jordan</td>

              </tr>
            </tbody>
          </table>
        </div> */}
      {/* </section> */}



    </>

  );
}
