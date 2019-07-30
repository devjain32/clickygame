import React from "react";
import Sections from "./components/Sections";
import Header from "./components/Header"
import Wrapper from "./components/Wrapper";
import pictures from "./pictures.json";
import "./App.css";

class App extends React.Component {
  state = {
    pictures,
    score: 0
  }

  random = () => {
    // console.log("choosing random pictures");
    // const arrOfIds = [];
    // let randId = Math.floor(Math.random() * 40) + 1;
    // while(arrOfIds.includes(randId)) {
    //     console.log(`${randId} already exists in the array`)
    //     randId = Math.floor(Math.random() * 40) + 1;
    // }
    var array = this.state.pictures
    var currentIndex = array.length;
    var temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    array = array.slice(-12)
    console.log(array)
    return array;
  }

    handleStatus = (id, name) => {
        const pictures = this.state.pictures;
        if (pictures[id - 1].isClicked) {
            this.setState({pictures})
            console.log(`You already clicked on ${name}. Your score remains at ${this.state.score}`)
        }
        else {
            this.random();
            this.setState({ score: this.state.score + 1 });
            pictures[id - 1].isClicked = true;
            console.log(`You clicked on ${name}'s card and your new score is ${this.state.score}`)
        }
    }

  render() {
    return (
        <div>
      <Header />
      <div>
            SCORE: <span className = "score">{this.state.score}</span>/40
      </div>

      <Wrapper>
        {
          pictures.map(picture => 
            <Sections
               key={picture.id}
               id={picture.id}
               name={picture.name}
               image={picture.image}
               handleStatus={this.handleStatus}
               handleIncrement={this.handleIncrement}
            />
          )
        }
      </Wrapper>
      </div>
    );
  }
}

export default App;
