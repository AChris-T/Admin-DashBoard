import Navbar from "../../components/navbar/Navbar"
import Sidebar from "../../components/sidebar/Sidebar"
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined"
import "./new.scss"
import { useState } from "react"

const New = ({inputs,title}) => {

  const[file, setFile ]=useState("");

  console.log(file)
  return ( 
    <div  className="new">
      <Sidebar/>
      <div className="newContainer">
        <Navbar/>
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img src={file ? URL.createObjectURL(file) : 
              "https://media.istockphoto.com/vectors/default-image-icon-vector-missing-picture-page-for-website-design-or-vector-id1357365823?k=20&m=1357365823&s=612x612&w=0&h=ZH0MQpeUoSHM3G2AWzc8KkGYRg4uP_kuu0Za8GFxdFc="} alt="img"/>
          </div>
          <div className="right">
            <form>
            <div className="formInput">
              <label htmlFor="file">
              image: <DriveFolderUploadOutlinedIcon className="icon"/>
              </label>
              <input type="file" id="file" hidden
                onChange={(e)=> setFile(e.target.files[0])}
              />
              </div>
              {inputs.map((input)=>(
                <div className="formInput" key={input.id}>
                <label>{input.label}</label>
                <input type={input.type} placeholder={input.placeholder}/>
                </div>
                ))}
              <button>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default New
