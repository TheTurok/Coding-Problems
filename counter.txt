const { Component } = React;
const { render } = ReactDOM;


// Counter Component
// class Counter extends Component {
//   render() {
//     const { value } = this.props;
//     const { id } = this.props;

//     return (
//       <div className="counter">
//         <b>{value}</b>
//         <div className="counter-controls">
//           <button className="button is-danger is-small"
//             onClick = {() => this.props.onDecrement(id, 1)}>-</button>
//           <button className="button is-success is-small"
//             onClick = {() => this.props.onIncrement(id, 1)}>+</button>
//         </div>
//       </div>
//     );
//   }
// }

//Copy Counter Component
class Counter extends Component {
  render() {
    const { value } = this.props;
    const { id } = this.props;

    return (
      <div className="counter">
        <b>{value}</b>
        <div className="counter-controls">
          <button className="button is-danger is-small"
            //onClick = {() => this.props.onDecrement(id, 1)}
            onClick = {() => this.props.onChange(id, -1)}
            >-</button>
          <button className="button is-success is-small"
            //onClick = {() => this.props.onIncrement(id, 1)}
            onClick = {() => this.props.onChange(id, 1)}
            >+</button>
        </div>
      </div>
    );
  }
}

// Total Component
class Total extends Component{
  render() {
    let add = 0;
    for(let d of this.props.data){
        add += d.value;
    }

    return(
      <div>
         Total: {add}
      </div>
    );
  }
}

class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      data : [
        { id: 1, value: 0 },
        { id: 2, value: 0 },
        { id: 3, value: 0 },
        { id: 4, value: 0 }
      ]
    };
  }

  onIncrement = (key, amount) => {
     let newState = Object.assign({}, this.state);
     newState.data[key-1].value += amount;
     this.setState(newState);
  }

  onDecrement = (key, amount) => {
    let newState = Object.assign({}, this.state);
    newState.data[key-1].value += amount;
    this.setState(newState);
  }

  handleChange = (key, amount) => {
    let newState = Object.assign({}, this.state);
    newState.data[key-1].value += amount;
    this.setState(newState);
  }

  render() {

    return (
      <div>
        {this.state.data.map(counter => (
          <Counter
            id = {counter.id}
            value={counter.value}
            onChange = {this.handleChange}
            //onIncrement = {this.onIncrement}
            //onDecrement = {this.onDecrement}
            />
        ))}
        <Total
           data = {this.state.data}
          />
      </div>
    );
  }
}


render(
  <App/>
, document.querySelector('#root'))
