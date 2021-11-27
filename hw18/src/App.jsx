
import './App.css';
import Post from "./components/Post";
import UserPhoto from './assets/hubble.jpeg';
import Image from './assets/Nebula.jpeg';



const tweetAuthor = {
  name: 'Hubble',
  nickname: "@NASAHubble",
  photo: UserPhoto
}

const tweetContent = {
  text: `Feast your eyes on the stunning Orion Nebula. 
Is it just us, or does it look like a space turkey? #HappyThanksgiving from the Hubble team!`,
  img: Image,
  date: '5:00 PM · Nov 25, 2021',
  location: 'Sprinklr'
}

function App() {
  return (
    <div className="App">
    <Post author={tweetAuthor} tweet={tweetContent}/>
    </div>
  );
}

export default App;
