const appRoot = document.getElementById('app');

class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false
        };
        this.handleVisibilityToggle = this.handleVisibilityToggle.bind(this);
    };
    handleVisibilityToggle() {
        this.setState((prevState) => {
            return {
                visible: !prevState.visible
            };
        });
    };
    render() {
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.handleVisibilityToggle}>{this.state.visible ? 'Hide Details' : 'Show Details'}</button>
                {this.state.visible && <p>Hey. This is a details!</p>}
            </div>
        );
    };
};

ReactDOM.render(<VisibilityToggle/>,appRoot)