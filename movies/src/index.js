import React from "react";
import ReactDOM from "react-dom";
import HomePage from "./pages/homePage";
import MovieDetailsPage from './pages/movieDetailsPage'

const sample = {
    "adult": false,
    "backdrop_path": "/3ombg55JQiIpoPnXYb2oYdr6DtP.jpg",
    "belongs_to_collection": {
        "id": 484312,
        "name": "Skyline Collection",
        "poster_path": "/jaWM0xXSLeb1O2lpfQ9kI0WiGOu.jpg",
        "backdrop_path": "/b2JplRt6qfZKkupnoxl57n3r46y.jpg"
    },
    "budget": 70000000,
    "genres": [
        {
            "id": 878,
            "name": "Science Fiction"
        },
        {
            "id": 28,
            "name": "Action"
        }
    ],
    "homepage": "",
    "id": 560144,
    "imdb_id": "tt9387250",
    "original_language": "en",
    "original_title": "Skylines",
    "overview": "When a virus threatens to turn the now earth-dwelling friendly alien hybrids against humans, Captain Rose Corley must lead a team of elite mercenaries on a mission to the alien world in order to save what's left of humanity.",
    "popularity": 69.653,
    "poster_path": "/2W4ZvACURDyhiNnSIaFPHfNbny3.jpg",
    "production_companies": [
        {
            "id": 9987,
            "logo_path": "/o5OTKAw7Acl5fTZYPyl8M8D9570.png",
            "name": "Lipsync Productions",
            "origin_country": "GB"
        },
        {
            "id": 10936,
            "logo_path": null,
            "name": "Hydraulx",
            "origin_country": ""
        },
        {
            "id": 27758,
            "logo_path": "/je3uCVqOU6CTnbAHRuVQrz8rug4.png",
            "name": "Artbox",
            "origin_country": "LT"
        },
        {
            "id": 66497,
            "logo_path": null,
            "name": "Mirabelle Pictures Productions",
            "origin_country": ""
        },
        {
            "id": 99449,
            "logo_path": null,
            "name": "M45 Productions",
            "origin_country": ""
        },
        {
            "id": 117747,
            "logo_path": null,
            "name": "Media Finance Capital",
            "origin_country": "GB"
        },
        {
            "id": 146052,
            "logo_path": null,
            "name": "Fasten Films",
            "origin_country": "ES"
        },
        {
            "id": 150079,
            "logo_path": null,
            "name": "Gifflar Films Limited",
            "origin_country": ""
        }
    ],
    "production_countries": [
        {
            "iso_3166_1": "FR",
            "name": "France"
        },
        {
            "iso_3166_1": "LT",
            "name": "Lithuania"
        },
        {
            "iso_3166_1": "GB",
            "name": "United Kingdom"
        },
        {
            "iso_3166_1": "US",
            "name": "United States of America"
        }
    ],
    "release_date": "2020-10-25",
    "revenue": 0,
    "runtime": 113,
    "spoken_languages": [
        {
            "english_name": "English",
            "iso_639_1": "en",
            "name": "English"
        }
    ],
    "status": "Released",
    "tagline": "To save our world she must invade theirs.",
    "title": "Skylines",
    "video": false,
    "vote_average": 5.624,
    "vote_count": 441
}

const images = [
  "/2W4ZvACURDyhiNnSIaFPHfNbny3.jpg",
  "/jaWM0xXSLeb1O2lpfQ9kI0WiGOu.jpg",
  "/3ombg55JQiIpoPnXYb2oYdr6DtP.jpg",
  "/b2JplRt6qfZKkupnoxl57n3r46y.jpg",
]
const movies = [sample, sample, sample, sample, sample, sample, sample];

const App = () => {
  return (
      <MovieDetailsPage movie={sample} images={images} />
      );
};

ReactDOM.render(<App />, document.getElementById("root"));