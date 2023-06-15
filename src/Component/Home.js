import React, { useEffect, useState } from 'react'
import { ReactComponent as FolderBlack } from "../assets/folder-black.svg";
import { ReactComponent as FolderWhite } from "../assets/folder-white.svg";
import { ReactComponent as FileBlack } from "../assets/file-black.svg";
import { ReactComponent as FileWhite } from "../assets/file-white.svg";
import { ReactComponent as SearchIcon } from "../assets/search-icon.svg";
import { ReactComponent as MiniFolder } from "../assets/mini-folder.svg";
import { ReactComponent as ArrowRight } from "../assets/arrow-right.svg";
import { ReactComponent as ArrowDown } from "../assets/arrow-down.svg";
import MainFolder from './MainFolder';
export default function Home() {
  const [openKey, setOpenKey] = useState(-1);

  const handleClickOutside = (e) => {
    const popoverClass = e.target.parentElement.className;
    if (popoverClass === "popover-more") return
    let path = e.composedPath();
    const classExists = path.some((el) => el.classList && el.classList.contains("moreOptions"));
    if (classExists) return
    setOpenKey(-1)
  }
  useEffect(() => {
    window.addEventListener('click', handleClickOutside, true);
    return () => window.removeEventListener('click', handleClickOutside, true)
  }, [])
  return (
    <div className='home'>
      <header>
        <div className='header_input'>
          <input placeholder='Search file or folder' />
          <SearchIcon />
        </div>
        <div className='header_right'>
        
          <img src={require('../assets/profile.png')} alt='profile' />
        </div>
      </header>
      <div className='main'>
        <div className='main_header'>
          <div className='breadcrumb'>
            <span className='main_folder'>
              <MiniFolder />
              <ArrowDown />
            </span>
            <p className='folder'>All file </p>
            <ArrowRight />
            <p className='folder'>data</p>
          </div>
          <div className='main_header-right'>
            <span className='main_folder'>
              <MiniFolder />
              <ArrowDown />
            </span>
          </div>
        </div>
        <div className='main_body'>
          {Array(10).fill(0).map((item, index) => {
            return <MainFolder index={index} openKey={openKey} setOpenKey={setOpenKey} />
          })}

        </div>
        {/* <MainFolder /> */}
      </div>

      <FolderBlack />
      <FolderWhite />
      <FileBlack />
      <div>
        <label className="switch">
          <input type="checkbox" />
          <span className="slider round"></span>
        </label>
      </div>
      <FileWhite />
    </div>
  )
}
