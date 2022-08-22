import { useState } from "react";
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { changeuserGitHub } from '../redux/userGitHubSlice';

 function Navbar() {
    const dispatch = useDispatch();

    const [usuario, setUsuario] = useState("");
    const { user } = useSelector(state => state.userGitHub);

    function handleChange(event){
        setUsuario(event.target.value);
    }

    function handleSubmit() {
    
        const fetchData = async () => {
            const response = await fetch(`https://api.github.com/users/${usuario}`);
            const data =  await response.json();

            const filtered = user.filter(repo => repo.id === data.id);
            if(data.id === undefined){
                 alert("O usuário não encontratdo!");
            }else if(filtered.length === 0){
                dispatch(changeuserGitHub([data, ...user])) 
            }else{
                alert("O usuário '" + usuario + "' já está na tela!");
            }
        }
        fetchData();
    }
    

    return (
        <nav class="navbar navbar-light bg-light">
            <div class="container-fluid">
                <strong>Usuários do GitHub</strong>
                <div class="d-flex">
                    <input class="form-control me-2" type="text" placeholder="Adicione mais um usuário" aria-label="Search" onChange={handleChange}/>
                    <button class="btn btn-primary" onClick={handleSubmit}>Adiocionar</button>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;