import React from 'react'
import { useState } from 'react'
import {McCloudUpload, MdDelete} from 'react-icons/md'
import {AiFillFileImage} from 'react-icons/ai'
import "./Uploader.css"

function Uploader() {
  return (
    <main>
        <form action="">
            <input type="file" accept='pdf/*' />
        </form>
    </main>
  )
}

export default Uploader