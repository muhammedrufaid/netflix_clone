import React, { useEffect, useState } from "react";
import axios from "../../Axios"; //export instance njml ivde vilikkunu njml eyuthya custom cheytha axios aanu vilikunneth . elland instal cheyha ell
import { API_KEY,imageUrl } from "../../constants/constants";
import "./Banner.css";

function Banner() {
  //nameum descriptionum dynamic aakan vendi njmk oru state venm
  const [movie, setMovie] = useState();

  //bannern parnja component load aavumbolan (mount aavumbolan) movie nta data aavishyam ulleth appm njml useEffect use cheyyenm
  useEffect(() => {
    // axios.get('https://api.themoviedb.org/3/trending/all/week?api_key={API_KEY_HERE}&language=en-US')
    axios
      .get(`trending/all/week?api_key=${API_KEY}&language=en-US`)
      .then((response) => {
        //trending il oru10 movies anu verunne appm njmk trending thottanu vendath baaki njml already cheythu vechittund baseUrl il ennit njml ahinullil venda api key vilikanel backtick ittit
        // console.log(response.data);
        // console.log(response.data.results[4]); // 1st ila data maathram print cheyyan arraynta position kodukkum 0 start cheyyunond 0
        setMovie(response.data.results[4]);
        //20 moviesil random aaytilla ethelum movie select cheyyua
        // setMovie(response.data.results.sort(function (a, b) { return 0.5 - Math.random() })[0])
      });
  }, []); //component mount aavumbm maathram athayath 1st time run aavumbo run aaya mathi appm njml empty array kodukkum  ennit axios install aakua

  return (
    <div 
    style={{backgroundImage: `url(${movie ?imageUrl+movie.backdrop_path : ""}) `}} //njml athyam background image css ilan cheythe
    className="banner"
    >
      <div className="content">
        {/*  <h1 className='title'>{movie.title}</h1> */}{/*movie.title ethumbm  aa oru movie enna state il null aayrikum kaarenm useEffect work cheythittilla movie indenkil maathram njmk movie.title show cheyyam ellenkil empty string oo angnatha enthelum koduukam*/}
        <h1 className="title">{movie ? movie.title : ""}</h1>
        <div className="banner_button">
          <button className="button"> play</button>
          <button className="button"> My list</button>
        </div>
        <h1 className="description">{movie ? movie.overview : ""}</h1>
      </div>
      <div className="fade_bottom"></div>
    </div>
  );
}

export default Banner;
