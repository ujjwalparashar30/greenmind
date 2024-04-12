import { useNavigate } from "react-router-dom";

function changeUrl(){
    let input_file = document.getElementById("side-bar-profile-photo");
    let inputFilesIimg = document.getElementById("input-files-img");
    inputFilesIimg.src = URL.createObjectURL(input_file.files[0]);
}

export default function Sidebar(){
    const navigate= useNavigate();
    return(
        <div className="side-bar">
            <div className="side-bar-profile">
            <label for="side-bar-profile-photo">
                            <img src="" alt="" id="input-files-img" onChange={changeUrl}/>
                        </label>
                <input type="file" accept="image/jpeg, image/png, image/jpg" id="side-bar-profile-photo" />
                <div className="side-bar-name">Name of user</div>
            </div>
            <div className="side-bar-options">
                <button onClick={()=>navigate("/dashboard")} className="side-bar-btn" >Dashboard</button>
                <button onClick={()=>navigate("/home")} className="side-bar-btn" >Explore</button>
                <button onClick={()=>navigate("/trashout")} className="side-bar-btn" >Trash Out</button>
            </div>
        </div>
    )
}