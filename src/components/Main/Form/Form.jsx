import React, { Component } from "react";

class Form extends Component {
  render() {
    return <div className={"login-comp"}>
      <form>
        <div className="how-big">
          <div className="title-how-big">
            <p>How big is your party?</p>
          </div>
          <div className="input-how-big">
            <input name="1-6" type="checkbox"/>
            <label htmlFor="1-6">1-6 people</label>
            <input name="7-12" type="checkbox"/>
            <label htmlFor="7-12">7-12 people</label>
            <input name="hard" type="checkbox"/>
            <label htmlFor="hard">Party hard</label>
          </div>
        </div>

        <div className="beverage">
          <div className="title-beverage">
            <p>Beverage</p>
          </div>
          <div className="input-beverage">            
            <input name="ron" type="checkbox"/>
            <label htmlFor="ron">Ron</label>
            <input name="ginebra" type="checkbox"/>
            <label htmlFor="ginebra">Ginebra</label>
            <input name="whisky" type="checkbox"/>
            <label htmlFor="whisky">Whisky</label>
          </div>
        </div>

        <div className="dj">
          <div className="title-dj">
            <p>Choose your Dj</p>
          </div>
          <div className="input-dj">            
            <input name="arizti" type="checkbox"/>
            <label htmlFor="arizti">Dj Arizti</label>            
            <input name="serrano" type="checkbox"/>
            <label htmlFor="serrano">Dj Serrano</label>            
            <input name="espinosa" type="checkbox"/>
            <label htmlFor="espinosa">Dj Espinosa</label>
          </div>
        </div>

        <div className="button">
          <button type="submit">Send</button>
        </div>
      </form>
    </div>;
  }
}

export default Form;
