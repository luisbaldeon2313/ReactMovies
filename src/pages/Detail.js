import React, { Component } from 'react';
import { ButtonBackToHome } from '../components/ButtonBackToHome';
const API_KEY = '93948dcf'


export class Detail extends Component {

    state = { movie: {} }

    _fetchMovie(id) {
        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`)
            .then(res => res.json())
            .then(result => {
                this.setState({movie: result})
            })
    }

    componentDidMount() {
        const INDEX_ID = 2;
        const pathName = window.location.pathname;
        const idFromUrl = pathName.split("/")[INDEX_ID];

        this._fetchMovie(idFromUrl)
    }

    render() {
        const { Title,Poster, Actors, Metascore, Plot } = this.state.movie
        return (
            <div>
                <ButtonBackToHome></ButtonBackToHome>
                <h1>{Title}</h1>
                <img src={Poster} alt={Title} />
                <h3>{Actors}</h3>
                <span>{Metascore}</span>
                <p>{Plot}</p>

            </div>
        )
    }
}