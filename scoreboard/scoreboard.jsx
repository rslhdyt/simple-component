var playerData = [
    {
        name: "Asep Gorbachev",
        score: 100,
        id: 1,
    },
    {
        name: "Caroline Kinanti",
        score: 80,  
        id: 2,
    },
    {
        name: "Siti Bella",
        score: 70,
        id: 3,
    }
];

var PlayerScore = React.createClass({
    getInitialState: function() {
        return {
            score: this.props.score,
        };
    },

    increase: function() {
        this.setState({
            score: (this.state.score + 1),
        })
    },

    decrease: function() {
        this.setState({
            score: (this.state.score - 1),
        })
    },

    render: function() {
        return (
            <li className="list-group-item">
                {this.props.name}
                <span className="controls">
                    <i className="glyphicon glyphicon-chevron-up" onClick={this.increase} ></i>
                    <span className="score">{ this.state.score }</span>
                    <i className="glyphicon glyphicon-chevron-down" onClick={this.decrease} ></i>
                </span>
            </li>
        );
    }
})

var Scoreboard = React.createClass({
    propTypes: {
        players: React.PropTypes.arrayOf(React.PropTypes.shape({
            name: React.PropTypes.string,
            score: React.PropTypes.number
        })).isRequired,
    },

    render: function() {
        return (
            <div className="panel panel-primary">
                <div className="panel-heading">Scoreboard</div>
                <ul className="list-group">
                    {this.props.players.map(function(player) {
                        return <PlayerScore name={player.name} score={player.score} key={player.id} />
                    })}
                </ul>
            </div>
        );
    }
});

ReactDOM.render(<Scoreboard players={playerData} />, document.getElementById('app-container'));