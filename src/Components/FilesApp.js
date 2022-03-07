import { FileItem } from "./FileItem";
import FolderItem from "./FolderItem";
import { VideoItem } from "./VideoItem";
import React from "react";
import axios from 'axios';


export class FilesApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        posts: []
    }
  }
  
  componentDidMount() {
        axios.get("https://script.google.com/macros/s/AKfycbyL-rBrCXd5xZ49EcgJbmguGHxAX2M9JFEW9CtaU1NZrnLnQnsPu6F6KZMEWP2qL2nE/exec")
        .then( response => {
            this.setState({ posts:response.data });
        })
        .catch(error => {
            console.log(error);
        })
    }


  render() {
    let posts = this.state.posts
    posts = getTree(posts)
    return (
        <>
            <div>
                {posts}
            </div>
        </>
    );
  }

}

function getTree(posts) {
    let result = posts.map((folder)=>
        <FolderItem
            name = {folder.name}
            files = {[
                ...folder.files.map((file) => <FileItem name={file.name} link={file.url} rel="noreferrer"/>),
                ...folder.videos.map((video) => <VideoItem name={video.name} link = {video.url} rel="noreferrer"/>)
                ]
            }
            folders = {getTree(folder.folders)}
        />
    );
    return result;
}
