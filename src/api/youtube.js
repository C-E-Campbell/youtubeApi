import axios from "axios";

const KEY = "AIzaSyC-SL7LVSFJ19W8DuJzJKtwJWtvj_nxi7o";

export default axios.create({
	baseURL: "https://www.googleapis.com/youtube/v3",
	params: {
		part: "snippet",
		maxResults: 5,
		key: KEY
		//specify q: if you have a cdertain search term u want to use.
	}
});
