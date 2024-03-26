import React from 'react'
import { useState } from 'react'
import { IoMdCloudUpload } from "react-icons/io";
import {AiFillFileImage} from 'react-icons/ai'
import { FaFilePdf } from "react-icons/fa";
import "./Uploader.css"

export default function Pdfer() {
    const [image,setImage] = useState(null)
    const [fileName,setFileName] = useState("No selected file")
  return (
    <main>
    <form action=""
    onClick={() => document.querySelector(".input-field").click()}
    >
        <input type="file" accept='pdf/*' className='input-field' hidden 
        onChange={({target : {files}}) => {
            files[0] && setFileName(files[0].name)
            if(files){
                setImage(URL.createObjectURL(files[0]))
            }
        }}
        
        />
    {image ?
     <FaFilePdf color='red' size={100}/>
     :
     <IoMdCloudUpload color='#1475cf' size={60} />
    }
    </form>
    <section>
        <AiFillFileImage color='#1475cf'/>
        <span>
            {fileName}
        </span>
    </section>
    </main>
  )
}
