
import './App.css';
import Profile from './Profile/Components/Profile';


function App() {
const handleName =(namee)=>{
   alert(namee);
}

  return (
    <div className="App">
     <Profile bio="Hamza learning js full stack at go my code this is my first bio" fullName="Hamza Lahmedi"   handleName={ handleName} >
     <img src="./images.png" alt="profile picture"/>
     </Profile>
    </div>
  );
}

export default App;
