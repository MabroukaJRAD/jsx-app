import './App.css';
import './Style.css';
import imagesrc from './imagesrc.png';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div style={{border:"solid 1px black",maxWidth:"100vw"}}>

 <h1 className='title'>Your name here</h1>

<br/>

 <img src={imagesrc} alt='imageInsrc'/>

 <br/>

 <img src='/imageInPublic.png' alt='imageInPublic'/>

</div>

<video width="320" height="240" controls>

 <source src='https://www.youtube.com/embed/ZaI2IlHwmgQ' type='video/mp4' />

</video>
      </header>
    </div>
  );
}

export default App;
