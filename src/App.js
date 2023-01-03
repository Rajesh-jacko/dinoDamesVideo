import './App.css';
import video from './assets/videos/dinoDames_video3.mp4'
function App() {
  return (
    <>
     <div className="App">
        <video loop="true" id="myVideo" controls class="video">
      <source src={video} type="video/mp4" />
    </video>
    </div>
    </>
  );
}

export default App;
