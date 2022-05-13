import FormCard from 'components/FormCard';
import { useParams } from 'react-router-dom';

function Form() {   

    const params = useParams();

    return (
        //o params acessa variáveis criadas lá na rota no App.tsx
        <FormCard movieId={`${params.movieId}`}/>
    )
}

export default Form;