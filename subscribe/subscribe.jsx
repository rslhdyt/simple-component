var Subscribe = React.createClass({

    getInitialState: function() {
        return {
            isSubscribe: false,
        };
    },

    actionSubscribe: function() {
        this.setState({
            isSubscribe: !this.state.isSubscribe,
        })
    },

    render: function() {
        return (
            <button className="btn btn-primary" onClick={this.actionSubscribe}>
                <i className={(this.state.isSubscribe) ? 'glyphicon glyphicon-remove' : 'glyphicon glyphicon-ok' } ></i> {(this.state.isSubscribe) ? 'Subscribe' : 'Unsubscribe'}
            </button>
        );
    }
});

ReactDOM.render(<Subscribe />, document.getElementById('app-container'));