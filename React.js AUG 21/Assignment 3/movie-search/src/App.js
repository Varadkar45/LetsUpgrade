import logo from './logo.svg';
import { useState,useEffect} from 'react';
import './App.css';

//https://omdbapi.com/?t=the avengers&apikey=f505a7e1



function App() {

  let [movieinfo,setMovieinfo]=useState(null);
  let [title,setTitle]=useState("the avengers");

  useEffect(()=>{

    getMovieData();

  },[])


  function readTitle(value){
    setTitle(value);
  }

  function getMovieData(){

    let url=`https://omdbapi.com/?t=${title}&apikey=f505a7e1`;
  
    fetch(url)
    .then((response)=>response.json())
    .then((movie)=>{
        console.log(movie);
        setMovieinfo(movie);
    })
    .catch((err)=>{
      console.log(err);
    })
  

  }


  


  return (
    <div className="App">

        <div className="container">
          <div className="padd">
            <h1>Movie Search</h1>
            <div className="input-group">
              <input type="text" placeholder="Enter Movie Name" onChange={(event)=>{readTitle(event.target.value)}} className="search-field"/>
              <button className="btn" onClick={getMovieData}>Get Movie</button>
            </div>
              {
                movieinfo?.Error===undefined?(
              
                  <div className="movie">
                      <div className="poster">
                        <img src={movieinfo?.Poster} alt="poster" className="img-poster"/>
                      </div>
                      <div className="details">
                          <div className="padd">
                              <h1>{movieinfo?.Title}</h1>
                              <p><strong>Genre</strong> : {movieinfo?.Genre}</p>
                              <p><strong>Directed By</strong> :{movieinfo?.Director}</p>
                              <p><strong>Plot</strong> :{movieinfo?.Plot}</p>
                              <p><strong>Cast</strong> :{movieinfo?.Actors}</p>
                              <p><strong>Box Office</strong> :{movieinfo?.BoxOffice}</p>
                              <p><strong>Language</strong> :{movieinfo?.Language}</p>
                              <p><strong>Release Date</strong> :{movieinfo?.Released}</p>
                              <p><strong>Runtime</strong> :{movieinfo?.Runtime}</p>

                              <div className="ratings">

                                {

                                  movieinfo?.Ratings.map((rating,index)=>(

                                  <div key={index}>
                                    <strong>{rating.Source}</strong>
                                    <h3>{rating.Value}</h3>
                                  </div>

                                  ))

                                }

                                  

                                
                              </div>

                          </div>
                      </div>
                  </div>
                    
                ):
                (
                  <h1>Movie Not Found</h1>
                )
            }
              
          </div>
        </div>
        

    </div>
  );
}

export default App;
