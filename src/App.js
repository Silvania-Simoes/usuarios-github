import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { changeuserGitHub } from './redux/userGitHubSlice';
import Favoritos from "./components/Favoritos";
import SelecaoFavoritos from './components/SelecaoFavoritos';
import './App.css';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://api.github.com/users');
      const data =  await response.json();
      dispatch(changeuserGitHub(data));
      
    }
    fetchData();
    }, []);

  return (
    <div className="App">
      <div className='title'>
        <strong>Usuários do GitHub</strong>
      </div>
      <Favoritos/>
      <SelecaoFavoritos/>
    </div>
  );
}

export default App;
