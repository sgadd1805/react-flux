import react, {Component} from 'react';
import DemoAction from '../actions/DemoAction';

class Header extends Component{
    render() {
        var handleIncrease = function() {
            DemoAction.increase();
        }

        var handleDecrease = function() {
            DemoAction.decrease();
        }

        return(
            <div>
                <button onClick={this.handleIncrease}>Increase</button>
                <button onClick={this.handleDecrease}>Decrease</button>
            </div>
        )
    }
}