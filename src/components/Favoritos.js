import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { changeFavoritos } from '../redux/favoritosSlice';
import { changeuserGitHub } from '../redux/userGitHubSlice';
import { useSelector } from 'react-redux';

  import { ImHeart } from "react-icons/im";

  
  function Favoritos() {
    const { user } = useSelector(state => state.userGitHub);
    const dispatch = useDispatch();
  
    function handleFavorite(id) {
      const newRepositories = user.map(repo => {
        return repo.id === id ? { ...repo, favorite: !repo.favorite} : repo;
        
      });
      dispatch(changeuserGitHub(newRepositories));
    }
  
    useEffect(() => {
      const filtered = user.filter(repo => repo.favorite); 
      document.title = `Tenho ${filtered.length} usuários favoritos`;
      dispatch(changeFavoritos(filtered.length));
    }, [user]);
  
    return (
      <div class="d-flex justify-content-around flex-wrap m-4">
          {user.map(repo => (
            <div class="card p-3 m-2" style={{width: '21em'}}>
            <img src={repo.avatar_url} class="card-img-top rounded" alt="Avatar"/>
            <div class="card-body d-flex flex-column p-0 pt-4">
              <h5 key={repo.id} onClick={() => handleFavorite(repo.id)} class="card-title">Name: {repo.login} {repo.favorite ? <ImHeart color='#e81526' /> : <ImHeart color='#a39e9f' />}</h5>
              <a href={repo.html_url} class="btn btn-primary">Exibir o repositórios</a>
            </div>
          </div>
          ))}
      </div>
    );
  }
  
  export default Favoritos;