import React, { Component } from 'react';
import './FormMovie.css';



class FormMovie extends Component {
    constructor(props) {
        super(props);
        this.state = {
        
          name: '', 
          poster: '',
          comment: '',
    }
        this.onChange = this.onChange.bind(this);
        this.submitForm = this.submitForm.bind(this);
  
    }
      onChange(e) { 
        this.setState({
          [e.target.name]: e.target.value,
          
    });
    }
    submitForm(e) {
        e.preventDefault();
        
        const config = {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(this.state),
          };
      const url = "http://campus-bordeaux.ovh:3001/api/quests/movies/";

       fetch(url, config)
        .then(res => res.json())
        .then(res => {
        if (res.error) {
          console.log(res);
          
            alert(res.error);
        } else {
            alert(`Film ajouté avec  l'ID ${res}!`);
    }
        }).catch(e => {
            console.error(e);
            alert('Erreur lors de l\'ajout d\'un film');
    });
    }


   

  render() {

    
    return (
        <div className="FormEmployee">
        <h1>Mon film préféré</h1>
       
        <form onSubmit={this.submitForm}>
          <fieldset>
            <legend>Informations</legend>
            <div className="form-data">
              <label htmlFor="name">Film</label>
              <input
                type="text"
                id="name"
                name="name"
                onChange={this.onChange}
                value={this.state.mymovie}
              />
            </div>
       
            <div className="form-data">
              <label htmlFor="poster">Poster</label>
              <input
                type="text"
                id="poster"
                name="poster"
                onChange={this.onChange}
                value={this.state.myurl}
              />
            </div>
       
            <div className="form-data">
              <label htmlFor="comment">commentaire</label>
              <textarea
                type="text"
                id="comment"
                name="comment"
                onChange={this.onChange}
                value={this.state.com} rows='10' cols="40" textarea/>
            </div>
            <hr />
            <div className="form-data">
              <input type="submit" value="Envoyer"  />
            </div>
          </fieldset>
        </form>
       </div>
    );
  }

}
export default FormMovie;
