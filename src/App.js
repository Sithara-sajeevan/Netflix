import './App.css';
import Row from './components/Row';
import requests from './requests';
import Banner from './components/Banner';
import Nav from './components/Nav';
function App() {
  return (
    <div  >
    <Nav/>
      <Banner fetchUrl={requests.fetchNetflixOriginals} />
      <Row isPoster={true} title="NetflixOriginal" fetchUrl={requests.fetchNetflixOriginals}/>
      <Row title="Trending Movies" fetchUrl={requests.fetchTrending}/>
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated}/>
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
      <Row title="Horror Movie" fetchUrl={requests.fetchHorrorMovies}/>
      <Row title="Comady Movie" fetchUrl={requests.fetchComedyMovies}/>
      <Row title="Romans Movies" fetchUrl={requests.fetchRomanceMovies}/>
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries}/>

    </div>
  );
}

export default App;
