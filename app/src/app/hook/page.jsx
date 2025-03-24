"use client";
import {useState} from 'react';
export default function Hook (){
    const [contador, setContador] = useState(0);

    function handleClickContador(){
        setContador(contador +1)
        if(contador >= 5){
            alert('u already have five clicks')
            setContador(5)
        } else {
            setContador(contador + 1)
        }
    }

    function handleClickContadorMenos(){
        if(contador <= -5){
            alert('u already have five clicks')
            setContador(-5)
        } else {
            setContador(contador -1)
        }
    }

    
    return (
        <>
            <div>
                <h2>Contagem</h2>
                <p>Contagem: {contador}</p>
            </div>
            <button className='cursor-pointer p-10 m-4 bg-white text-black' type="button" onClick={handleClickContador}>Clique aqui para adicionar</button>
            <button className='cursor-pointer p-10 bg-white text-black' type="button" onClick={handleClickContadorMenos}>Clique aqui para remover</button>
        </>
    )
}