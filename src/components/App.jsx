import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';
import Search from './Search.js';
class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      currentVideo: props.data[0]
    }
  }

  whenVideoChange(obj) {
    this.setState({
      currentVideo: obj
    });
  }
  render() {return(
    <div>
    <nav className="navbar">
      <div className="col-md-6 offset-md-3">
        <Search/>
      </div>
    </nav>
    <div className="row">
      <div className="col-md-7">
        <VideoPlayer video={this.state.currentVideo}/>
      </div>
      <div className="col-md-5">
        <VideoList videos={this.props.data} videoOnClick={this.whenVideoChange.bind(this)}/>
      </div>
    </div>
  </div>
  );}
}

// var App = (props) => (
//   <div>
//     <nav className="navbar">
//       <div className="col-md-6 offset-md-3">
//         <div><h5><em>search</em> view goes here</h5></div>
//       </div>
//     </nav>
//     <div className="row">
//       <div className="col-md-7">
//         <div><h5><VideoPlayer video={props.data}/></h5></div>
//       </div>
//       <div className="col-md-5">
//         <div><h5><VideoList videos={props.data}/></h5></div>
//       </div>
//     </div>
//   </div>
// );

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;