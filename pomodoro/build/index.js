
class PomodoroTimer extends React.Component {

    constructor() {
        super();

        this.work = 5;
        this.rest = 2;
        this.period = this.work;

        this.workMsg = "Time to take a break!";
        this.restMsg = "Timer has ended";
        this.msg = this.workMsg;

        this.state = { timeElapsed: this.work };
    }

    totalTime(time1, time2) {
        return time1 + time2;
    }

    componentDidMount() {
        this.interval = setInterval(this.elapseTime.bind(this), 1000);
        this.setState({ start: new Date() });
    }

    elapseTime() {
        var currentTime = new Date();
        var elapse = this.period - Math.floor((currentTime - this.state.start) / 1000); //the new elapsed time

        this.setState({ timeElapsed: elapse }); //sets the elapsed time to the state

        if (this.state.timeElapsed == 0) {
            //when timer gets to 0
            alert(this.msg);

            this.setState({ start: new Date() });

            if (this.period == this.work) {
                this.period = this.rest;
                this.msg = this.restMsg;
            } else {
                clearInterval(this.interval);
            }
        }
    }

    formatSeconds(num, size) {
        var s = num + "";
        while (s.length < size) s = "0" + s;
        return s;
    }

    render() {
        return React.createElement(
            "div",
            null,
            "This timer runs for ",
            this.props.workingTime,
            " minutes, followed by a rest of ",
            this.props.restTime,
            " minutes. For a total of ",
            this.totalTime(this.props.workingTime, this.props.restTime),
            " minutes.",
            React.createElement("br", null),
            "There are ",
            Math.floor(this.state.timeElapsed / 60),
            ":",
            this.formatSeconds(this.state.timeElapsed % 60, 2),
            " seconds elapsed."
        );
    }

}

ReactDOM.render(React.createElement(PomodoroTimer, { workingTime: 25, restTime: 5 }), document.getElementById('app'));