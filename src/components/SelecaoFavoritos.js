import { useSelector } from 'react-redux';
import '../App.css';

const SelecaoFavoritos = () => {
    const {quantidade} = useSelector(state => state.favoritos);
    return (
        <div class="alert-danger d-flex justify-content-center p-3 selecaoFavorito" role="alert">
             Favoritos selecionados: {quantidade}
        </div>
        
    )
}
export default SelecaoFavoritos;