import { useState } from 'react';
import Home from './Component/Home';
import './App.css';

function App() {
  const [appData, setAppData] = useState([
    {
      name: "react-project", key: 1687175851753, type: 'folder', time: 'Mon Jun 19 2023 11:31:50',
      children: [
        {
          name: "public", key: 1687175852754, type: 'folder', time: 'Mon Jun 19 2023 11:31:50', children: [
            { name: "index", ex: 'html', key: 1687175853755, type: 'file', time: 'Mon Jun 19 2023 11:31:50' },
            { name: 'favicon', ex: 'ico', key: 1687175854756, type: 'file', time: 'Mon Jun 19 2023 11:31:50' }
          ]
        },
        {
          name: "src", type: 'folder', key: 1687175855757, time: 'Mon Jun 19 2023 11:31:50', children: [
            {
              name: "assets", type: 'folder', key: 1687175856758, time: 'Mon Jun 19 2023 11:31:50', children: [
                { name: "add-file", ex: 'svg', key: 1687175857759, type: 'file', time: 'Mon Jun 19 2023 11:31:50' },
                { name: "add-folder", ex: 'js', key: 1687175858760, type: 'file', time: 'Mon Jun 19 2023 11:31:50' },
                { name: "folder-black", ex: 'ico', key: 1687175859761, type: 'file', time: 'Mon Jun 19 2023 11:31:50' },
                { name: "folder-white", ex: 'pdf', key: 1687175860762, type: 'file', time: 'Mon Jun 19 2023 11:31:50' },
                { name: "profile1", ex: 'png', key: 1687175861763, type: 'file', time: 'Mon Jun 19 2023 11:31:50' },
                { name: "profile2", ex: 'jpg', key: 1687175862764, type: 'file', time: 'Mon Jun 19 2023 11:31:50' },
                { name: "profile3", ex: 'jspeg', key: 1687175863765, type: 'file', time: 'Mon Jun 19 2023 11:31:50' },
              ]
            },
            {
              name: 'Components', key: 1687175864766, type: 'folder', time: 'Mon Jun 19 2023 11:31:50', children: [
                { name: "Home", ex: "js", key: 1687175865767, type: 'file', time: 'Mon Jun 19 2023 11:31:50' },
                { name: "About", ex: "js", key: 1687175866768, type: 'file', time: 'Mon Jun 19 2023 11:31:50' },
                { name: "Login", ex: "js", key: 1687175867769, type: 'file', time: 'Mon Jun 19 2023 11:31:50' },
                { name: "Data", key: 1687175868767, type: 'folder', time: 'Mon Jun 19 2023 11:31:50', children: [] }
              ]
            },
          ]
        }
      ]
    }
  ])
  const [dataNesting, setDataNesting] = useState([])
  const [currentFolder, setCurrentFolder] = useState()
  const [directoryString, setDirectoryString] = useState([]);

  console.log(dataNesting)
  console.log(currentFolder)

  // const getData = (data) => {
  //   data.forEach((item, index) => {
  //     console.log(item, index)
  //     console.log(new Date(item.key))
  //     if (item.children) {
  //       getData(item.children)
  //     }
  //   })
  // }


  // useEffect(() => {
  //   getData(appData)
  // }, [])


  return (
    <div className="App">
      <Home
        appData={appData}
        setAppData={setAppData}
        dataNesting={dataNesting}
        setDataNesting={setDataNesting}
        currentFolder={currentFolder}
        setCurrentFolder={setCurrentFolder}
        directoryString={directoryString}
        setDirectoryString={setDirectoryString}
      />
    </div>
  );
}

export default App;