import axios from "axios";
import MovieCard from "components/MovieCard";
import Pagination from "components/Pagination";
import { useState, useEffect } from "react";
import { MoviePage } from "types/movie";
import { BASE_URL } from "utils/requests";

function Listing() {

    const [pageNumber, setPageNumber] = useState(0);

    //Antes o get era executado fora do ciclo de vida do componente.     
    //Desta forma, provavelmente apresentaria comportamentos inesperados, 
    //como ser executado várias vezes.
    //Isso foi resolvido ao usar o hook useEffect, que executa agora dentro do ciclo de vida do app
    //useEffect->Executa algo na instanciação ou destruição do component, observa algo
    useEffect(() => {
        axios.get(`${BASE_URL}/movies?size=5&page=1`)
            .then(response => {
                const data = response.data as MoviePage;
                console.log(data);
                setPageNumber(data.number);
            });
    }, []); //lista de objetos para observar e reexecutar a função, caso sejam alterados

    return (
        <>
            <p>{pageNumber}</p>
            <Pagination />

            <div className="container">
                <div className="row">
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <MovieCard />
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <MovieCard />
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <MovieCard />
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <MovieCard />
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <MovieCard />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Listing;