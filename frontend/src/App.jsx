import { useRef, useState, useEffect } from "react";
import { uploadFile } from "./service/api";
import "./App.css";

function App() {
  const fileInputRef = useRef();
  const [file, setFile] = useState("");
  const [output, setOutput] = useState("");

  useEffect(() => {
    const getImage = async () => {
      if (file) {
        const data = new FormData();
        data.append("name", file.name); // we are sending 2 things 1. file mame
        data.append("file", file); // 2. whole file

        const response = await uploadFile(data);
        setOutput(response.path);
      }
    };
    getImage();
  }, [file]);

  console.log(file);

  const onUploadClick = () => {
    fileInputRef.current.click();
  };

  return (
    <>
      <div
        className="main-wrapper"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/23547/pexels-photo.jpg')`,
        }}
      >
        <div className="container">
          <div className="wrapper">
            <h1>File Sharing Application</h1>
            <p>Upload and share the download link</p>
            <button onClick={() => onUploadClick()}>Upload</button>
            <input
              type="file"
              ref={fileInputRef}
              style={{ display: "none" }}
              onChange={(e) => setFile(e.target.files[0])}
            />
            <a href={output}>{output}</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

// with this style={{ display: "none" }} we are hiding the choose file button
