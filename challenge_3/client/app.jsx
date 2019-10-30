//we don't import bcuz we linked the react in the html using cdn links

//app class

class App extends React.Component {
    constructor() {
        super();

        this.state = {

        }
    }

    render() {
        return (
            <div>
                <h1>Checkout!</h1>
                <h2></h2>
            </div>
        );
    }
}


ReactDOM.render(<App />, document.getElementById('app'));
  
