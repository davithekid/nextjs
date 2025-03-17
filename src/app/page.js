export default function Home() {
  return (
    <>
      <h1 className="text-red-700 text-6xl flex justify-center font-bold m-5">Hello Next!!!</h1>
      <p className="flex justify-center text-amber-300">oi bb</p>
      <div className="flex flex-col m-5">
        <h1 className="text-3xl">LINKS ABAIXO</h1>
        <a className="text-green-600" href="/contato">contato</a>
        <a className="text-blue-700" href="/sobre">sobre</a>
        <img className="w-80 duration-300 ease-out" src="MUSIC.jpg"></img>
      </div>
    </>

  );
}
