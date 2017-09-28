import react, {Component} from 'react';
import DemoStore from '../store/DemoStore';
import Content from './Content';

class DemoApp extends Component {
    render() {
        const getIntialState = function () {
            return {
                value: DemoStore.getValue()
            }
        }

        const componentDidMount = function(){
            DemoStore.addChangeListener(this._onChange);
        }

        const componentWillMount = function(){
            DemoStore.removeChangeListener(this._onChange);
        }

        return(
          <div>
              <Header/>
              <Content value={this.state.value}/>
          </div>
        );

        const _onChange = function(){
            this.setState({
                value: DemoStore.getValue()
            })
        }
    }
}

export default DemoApp;