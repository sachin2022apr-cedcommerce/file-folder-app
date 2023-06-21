import React, { useEffect, useState } from 'react'
import { ReactComponent as FolderBlack } from "../assets/folder-black.svg";
import { ReactComponent as FolderWhite } from "../assets/folder-white.svg";
import { ReactComponent as FileBlack } from "../assets/file-black.svg";
import { ReactComponent as FileWhite } from "../assets/file-white.svg";
import { ReactComponent as SearchIcon } from "../assets/search-icon.svg";
import { ReactComponent as MiniFolder } from "../assets/mini-folder.svg";
import { ReactComponent as ArrowRight } from "../assets/arrow-right.svg";
import { ReactComponent as ArrowDown } from "../assets/arrow-down.svg";
import { ReactComponent as Back } from "../assets/back.svg";
import MainFolder from './MainFolder';
import Loader from './Loader/Loader';

export default function Home(props) {
  const { dataNesting, setDataNesting, currentFolder, setCurrentFolder, appData, directoryString, setDirectoryString } = props;
  const [openKey, setOpenKey] = useState(-1);
  const [showFolder, setShowFolder] = useState([])
  const [showLoader, setShowLoader] = useState(false)
  useEffect(() => {
    window.addEventListener('click', handleClickOutside, true);
    return () => window.removeEventListener('click', handleClickOutside, true)
  }, [])

  useEffect(() => {
    setShowLoader(true)
    setTimeout(function () {
      getData(appData)
      setShowLoader(false)
    }, 1000);
  }, [dataNesting])

  const getData = (data) => {
    data?.forEach((item, index) => {
      if (dataNesting.length === 0) {
        setShowFolder(appData)
      } else if (item.key === currentFolder || dataNesting.length === 1) {
        setShowFolder([...item.children])
      } else if (dataNesting.includes(item.key)) {
        getData(item.children)
      }
    })
  }

  // handle popover component
  const handleClickOutside = (e) => {
    const popoverClass = e.target.parentElement.className;
    if (popoverClass === "popover-more") return
    let path = e.composedPath();
    const classExists = path.some((el) => el.classList && el.classList.contains("moreOptions"));
    if (classExists) return
    setOpenKey(-1)
  }

  // goto parent directory
  const goBack = () => {
    if (dataNesting.length > 0) {
      const tempDirectory = [...directoryString]
      const tempDataNesting = [...dataNesting]
      tempDataNesting.pop()
      tempDirectory.pop()
      setDirectoryString([...tempDirectory])
      setCurrentFolder(tempDataNesting[tempDataNesting.length - 1]);
      setDataNesting([...tempDataNesting])
    }
  }

  // go to specific dirrectory
  const directTo = (index) => {
    const tempDirectory = [...directoryString]
    const tempNestingData = [...dataNesting]
    tempNestingData.splice(index + 1)
    tempDirectory.splice(index + 1)
    console.log(tempDirectory)
    console.log(tempNestingData)
    setDirectoryString([...tempDirectory])
    setDataNesting([...tempNestingData])
    setCurrentFolder(tempNestingData[tempNestingData.length - 1])
  }

  // go to home directory
  const toHome = () => {
    setCurrentFolder()
    setDataNesting([])
    setDirectoryString([])
  }


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
            </span>
            <p className='folder' onClick={() => toHome()}>Home</p>
            {directoryString.map((item, index) => {
              return <>
                <ArrowRight />
                <p className='folder' onClick={() => directTo(index)}>{item}</p>
              </>
            })}

          </div>

          <div className='main_header-right'>

            {/* Back button  */}
            <button className='main_folder'
              style={{ cursor: dataNesting.length === 0 ? 'not-allowed' : 'pointer' }}
              onClick={() => goBack()}
            >
              <Back />
            </button>

            {/* Change view */}
            <button className='main_folder'>
              <MiniFolder />
              <ArrowDown />
            </button>
          </div>
        </div>
        {/* {<Loader />} */}
        <div className='main_body'>
          {showLoader ? <Loader /> :
            showFolder.length === 0 ?
              <div className='no_image'>
                <img src={require('../assets/Images/No Items.png')} alt='no items' />
              </div> :
              showFolder?.map((item, index) => {
                return <MainFolder
                  data={item}
                  openKey={openKey}
                  setOpenKey={setOpenKey}
                  key={item.key}
                  dataNesting={dataNesting}
                  setDataNesting={setDataNesting}
                  currentFolder={currentFolder}
                  setCurrentFolder={setCurrentFolder}
                  directoryString={directoryString}
                  setDirectoryString={setDirectoryString}
                />
              })
          }
        </div>
      </div>

      {/* <FolderBlack />
      <FolderWhite />
      <FileBlack />
      <div>
        <label className="switch">
          <input type="checkbox" />
          <span className="slider round"></span>
        </label>
      </div>
      <FileWhite /> */}
    </div>
  )
}
