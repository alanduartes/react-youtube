import axios from 'axios'

const KEY = 'AIzaSyCZ7ayK_GQLXFArWL1f1VnZ5p9eu5ZbcCI'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        //type: video,
        maxResults: 5,
        key: KEY
    }
})