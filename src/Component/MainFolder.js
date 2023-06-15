import React, { useState } from 'react'
import { ReactComponent as FileWhite } from "../assets/file-white.svg";
import { ReactComponent as FolderWhite } from "../assets/folder-white.svg";
import { ReactComponent as AddFile } from "../assets/add-file.svg";
import { ReactComponent as AddFolder } from "../assets/add-folder.svg";
import { ReactComponent as MoreOptions } from "../assets/more-options.svg";
import { ReactComponent as Triangle } from "../assets/triangle.svg";
import { ReactComponent as Delete } from "../assets/delete-red.svg";

export default function MainFolder(props) {
  // const [openPopover, setOpenPopover] = useState(false)
  console.log(props.index, props.openKey)
  return (
    <div className='folder_card'>
      {props.index}
      : {props.openKey}
      <FolderWhite />
      <p className='folderName'>Document</p>

      <button className='moreOptions' onClick={(e) => {
        if (props.index === props.openKey)
          props.setOpenKey(-1)
        else
          props.setOpenKey(props.index)
      }}>
        <MoreOptions className='moreOptions__icon' />
      </button>
      {props.openKey === props.index && <div className='popover-more'>
        <span className='popover-tri'>
          <Triangle />
        </span>
        <span className='btn'>Add File {< AddFile />}</span>
        <span className='btn'>Add Folder {< AddFolder />}</span>
        <span className='delete btn'>Delete {<Delete />}</span>
      </div>}

      <div>

      </div>
    </div>

  )
}
