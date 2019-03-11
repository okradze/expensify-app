class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state = {
            count: 0
        };
    };
    componentDidMount() {
        try {
            const count = parseInt(JSON.parse(localStorage.getItem('count')), 10);
            if (count && !isNaN(count)) {
                this.setState(() => ({ count }));
            }
        } catch (err) {

        }
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.count !== this.state.count) {
            localStorage.setItem('count', JSON.stringify(this.state.count));
        }
    };
    handleAddOne() {
        this.setState(prevState => ({ count: prevState.count + 1 }));
    };
    handleMinusOne() {
        this.setState(prevState => ({ count: prevState.count - 1 }));
    };
    handleReset() {
        this.setState(() => ({ count: 0 }));
    };
    render() {
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>Reset</button>
            </div>
        );
    };
};

const appRoot = document.getElementById('app');
ReactDOM.render(<Counter />, appRoot);