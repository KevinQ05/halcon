import { FileItem } from "./FileItem";
import FolderItem from "./FolderItem";
import { VideoItem } from "./VideoItem";
import React from "react";
import axios from "axios";
import { ImSpinner } from "react-icons/im";
import { AiOutlineReload } from "react-icons/ai";

export class FilesApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      loading: true,
      fetchDate: "null",
      fetchHour: "00:00",
    };
  }

  componentDidMount() {
    if (localStorage.getItem("isLoaded") !== "true") {
      axios
        .get(
          "https://script.google.com/macros/s/AKfycbyL-rBrCXd5xZ49EcgJbmguGHxAX2M9JFEW9CtaU1NZrnLnQnsPu6F6KZMEWP2qL2nE/exec"
        )
        .then((response) => {
          const data = response.data;
          const today = new Date();
          const dd = String(today.getDate()).padStart(2, "0");
          const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
          const yyyy = today.getFullYear();
          const hour = today.getHours();
          const minutes = today.getMinutes();

          this.setState({
            posts: data,
            loading: false,
            fetchDate: `${dd}/${mm}/${yyyy}`,
            fetchHour: `${hour}:${minutes}`,
          });
          localStorage.setItem("data", JSON.stringify(this.state.posts));
          localStorage.setItem("isLoaded", true);
          localStorage.setItem(
            "date",
            JSON.stringify({
              fetchDate: this.state.fetchDate,
              fetchHour: this.state.fetchHour,
            })
          );
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      this.setState({
        posts: JSON.parse(localStorage.getItem("data")),
        loading: false,
        fetchDate: JSON.parse(localStorage.getItem("date")).fetchDate,
        fetchHour: JSON.parse(localStorage.getItem("date")).fetchHour,
      });
    }
  }

  render() {
    let posts = this.state.posts;
    posts = getTree(posts);
    return (
      <>
        <div className={this.state.loading ? "h-auto" : ""}>
          <div>
            {this.state.loading ? (
              <div className=" flex w-ful h-full justify-center py-6 font-bold text-3xl">
                Cargando <ImSpinner className=" mx-6 animate-spin" />
              </div>
            ) : (
              <div className="w-full flex justify-center items-center">
                <div className="w-ful h-full justify-end px-3 hidden sm:flex">
                  {`Recuperado el ${this.state.fetchDate} a las ${this.state.fetchHour}`}
                </div>
                <div className="flex-col w-ful h-full justify-center items-center px-3 sm:hidden">
                  <p>{`Recuperado el ${this.state.fetchDate}`}</p>
                  <p className=" text-center">{`a las ${this.state.fetchHour}`}</p>
                </div>
                <a
                  href=""
                  className="btn btn-info hover:bg-blue-600 hover:border-blue-600 text-white rounded-lg mx-3 my-3"
                  onClick={() => {
                    this.setState({ loading: true });
                    localStorage.setItem("isLoaded", false);
                  }}
                >
                  <AiOutlineReload size={"20"} className="px-0" />
                </a>
              </div>
            )}
            <div>{posts}</div>
          </div>
        </div>
      </>
    );
  }
}

function getTree(posts) {
  console.log(JSON.stringify(posts));
  let result = posts.map((folder) => (
    <FolderItem
      name={folder.name}
      files={[
        ...folder.files.map((file) => (
          <FileItem name={file.name} link={file.url} rel="noreferrer" />
        )),
        ...folder.videos.map((video) => (
          <VideoItem name={video.name} link={video.url} rel="noreferrer" />
        )),
      ]}
      folders={getTree(folder.folders)}
    />
  ));
  return result;
}
