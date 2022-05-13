import axios from "axios";
import MovieCard from "components/MovieCard";
import Pagination from "components/Pagination";
import { useState, useEffect } from "react";
import { MoviePage } from "types/movie";
import { BASE_URL } from "utils/requests";

function Listing() {

    const [pageNumber, setPageNumber] = useState(0);

    const [page, setPage] = useState<MoviePage>({
        content: [],
        last: true,
        totalPages: 0,
        totalElements: 0,
        size: 12,
        number: 0,
        first: true,
        numberOfElements: 0,
        empty: true
    });

    //Antes o get era executado fora do ciclo de vida do componente.     
    //Desta forma, provavelmente apresentaria comportamentos inesperados, 
    //como ser executado várias vezes.
    //Isso foi resolvido ao usar o hook useEffect, que executa agora dentro do ciclo de vida do app
    //useEffect->Executa algo na instanciação ou destruição do component, observa algo
    useEffect(() => {
        axios.get(`${BASE_URL}/movies?size=12&page=${pageNumber}&sort=id`)
            .then(response => {
                const data = response.data as MoviePage;
                setPage(data);
            });
    }, [pageNumber]);
    //lista de objetos para observar e reexecutar a função, caso sejam alterados

    return (
        <>
            <Pagination />

            <div className="container">
                <div className="row">
                    {page.content.map(movie => (
                        /*Em uma renderização dinâmica de coleção,  
                        cada elemento renderizado DEVE possuir um atributo key*/
                        <div key={movie.id} className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                            <MovieCard movie={movie} />
                        </div>
                    )
                    )}
                </div>
            </div>
        </>
    )
}

export default Listing;