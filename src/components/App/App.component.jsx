import React from "react";
import SearchBar from "../SearchBar/SearchBar.component";
import VideoList from "../VideoList/VideoList.component";
import VideoDetail from "../VideoDetail/VideoDetail.component";
import youtube from "../../api/youtube";
class App extends React.Component {
	constructor() {
		super();
		this.state = {
			videos: [],
			selectedVideo: null
		};
	}

	componentDidMount() {
		this.onTermSubmit("first we feast ashton kutcher");
	}

	onTermSubmit = async term => {
		const response = await youtube.get("/search", {
			params: {
				q: term
			}
		});
		this.setState({
			videos: response.data.items,
			selectedVideo: response.data.items[0]
		});
		//console.log(response.data.items);
	};

	onVideoSelect = video => {
		this.setState({ selectedVideo: video });
		console.log(video);
	};

	render() {
		return (
			<div className='ui container'>
				<SearchBar onFormSubmit={this.onTermSubmit} />
				<div className='ui grid'>
					<div className='ui row'>
						<div className='eleven wide column'>
							<VideoDetail video={this.state.selectedVideo} />
						</div>

						<div className='five wide column'>
							<VideoList
								onVideoSelect={this.onVideoSelect}
								videos={this.state.videos}
							/>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
