import { FileItem } from "./FileItem";
import FolderItem from "./FolderItem";
import { VideoItem } from "./VideoItem";
import React from "react";
import axios from "axios";
import { ImSpinner } from "react-icons/im";
import { AiOutlineReload } from "react-icons/ai";
import { data } from "autoprefixer";

const DRIVE_API_URL =
  "https://script.google.com/macros/s/AKfycbyL-rBrCXd5xZ49EcgJbmguGHxAX2M9JFEW9CtaU1NZrnLnQnsPu6F6KZMEWP2qL2nE/exec";

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

  async getFoldersFromAPI() {
    const response = await axios.get(DRIVE_API_URL);
    this.setState({
      posts: response.data,
      loading: false,
      fetchDate: getFetchDate(),
      fetchHour: getFetchHour(),
    });
    populateLocalStorage({
      isLoaded: true,
      data: JSON.stringify(response.data),
      date: JSON.stringify({
        fetchDate: getFetchDate(),
        fetchHour: getFetchHour(),
      }),
    });
  }

  getFoldersFromStorage() {
    const date = JSON.parse(localStorage.getItem("date"));
    this.setState({
      posts: JSON.parse(localStorage.getItem("data")),
      loading: false,
      fetchDate: date ? date.fetchDate : "null",
      fetchHour: date ? date.fetchHour : "00:00",
    });
  }

  async componentDidMount() {
    if (localStorage.getItem("isLoaded") !== "true") {
      this.getFoldersFromAPI();
    } else {
      this.getFoldersFromStorage();
    }
  }

  render() {
    let folderStructure = this.state.posts;
    folderStructure = renderFolders(folderStructure);
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
                <button
                  className="btn btn-info hover:bg-blue-600 hover:border-blue-600 text-white rounded-lg mx-3 my-3"
                  onClick={async () => {
                    this.setState({ loading: true, posts: [] });
                    this.getFoldersFromAPI();
                  }}
                >
                  <AiOutlineReload size={"20"} className="px-0" />
                </button>
              </div>
            )}
            <div>{folderStructure}</div>
          </div>
        </div>
      </>
    );
  }
}

function renderFolders(folderArray) {
  let result = folderArray.map((folder) => (
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
      folders={renderFolders(folder.folders)}
    />
  ));
  return result;
}

function getFetchDate() {
  const today = new Date();
  const dd = String(today.getDate()).padStart(2, "0");
  const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  const yyyy = today.getFullYear();

  return `${dd}/${mm}/${yyyy}`;
}
function getFetchHour() {
  const today = new Date();

  const hour = String(today.getHours()).padStart(2, "0");
  const minutes = String(today.getMinutes()).padStart(2, "0");

  return `${hour}:${minutes}`;
}

function populateLocalStorage(args) {
  for (const [key, value] of Object.entries(args)) {
    localStorage.setItem(`${key}`, `${value}`);
  }
}
