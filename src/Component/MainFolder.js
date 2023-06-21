import React from 'react'
import { ReactComponent as FileWhite } from "../assets/file-white.svg";
import { ReactComponent as FolderWhite } from "../assets/folder-white.svg";
import { ReactComponent as AddFile } from "../assets/add-file.svg";
import { ReactComponent as AddFolder } from "../assets/add-folder.svg";
import { ReactComponent as MoreOptions } from "../assets/more-options.svg";
import { ReactComponent as Triangle } from "../assets/triangle.svg";
import { ReactComponent as Delete } from "../assets/delete-red.svg";
import { fileIcon } from './utility';


export default function MainFolder(props) {
  const { dataNesting, setDataNesting, setCurrentFolder, directoryString, setDirectoryString } = props;
  const getFileIcon = (type) => {
    return fileIcon[type] ?? <FileWhite />
  }
  const insideFolder = (id, name) => {
    setDataNesting([...dataNesting, id])
    setCurrentFolder(id)
    setDirectoryString([...directoryString, name])
  }



  return (
    <div className='folder_card'
      style={{ cursor: props.data.type === 'folder' ? 'pointer' : 'not-allowed' }}
      key={props.data.key}
      onDoubleClick={() => {
        if (props.data.type === 'folder')
          insideFolder(props.data.key, props.data.name)
      }}
    >
      <p>
        {props.data.type === 'folder' ?
          <FolderWhite /> : getFileIcon(props.data.ex)
        }
      </p>
      <p className='folderName'>{props.data.name}{props.data.ex && '.' + props.data.ex}</p>
      <p className='description'>{props.data.type !== 'file' && '2 Files & 2 Folder'}</p>
      <p className='datetime'>{props.data.time}</p>
      <button className='moreOptions' onClick={(e) => {
        if (props.data.key === props.openKey)
          props.setOpenKey(-1)
        else
          props.setOpenKey(props.data.key)
      }}>
        <MoreOptions className='moreOptions__icon' />
      </button>
      {props.openKey === props.data.key && <div className='popover-more'>
        <span className='popover-tri'>
          <Triangle />
        </span>
        <span className='btn'>{< AddFile />} Add File </span>
        <span className='bt 1687175851753n'>{< AddFolder />} Add Folder </span>
        <span className='delete btn'>{<Delete />} Delete </span>
      </div>}

      <div>

      </div>
      <div className='folder_modal'>
        <div className='modal_header'></div>
        <div className='modal_body'></div>
        <div className='modal_footer'></div>
      </div>
    </div>
  )
}
