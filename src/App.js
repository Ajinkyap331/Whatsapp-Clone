import { useState, useEffect } from 'react';
import './App.css';
import { CenterBox } from './Components/CenterBox'
import { Avatar } from '@mui/material';
import Unoffical from './Images/Unoffical.jpg'
const axios = require('axios');


function App() {

  const [reload, setreload] = useState(false)
  useEffect(() => {
    axios.get('http://127.0.0.1:5000/')
      .then((response) => {
        setData(response.data)
      })
  }, [reload])
  const [showprompt, setshowprompt] = useState(false)
  const [groupname, setgroupname] = useState(false)
  const [Avatarsrc, setAvatarsrc] = useState("")
  const [Data, setData] = useState(false)
  return (
    <div>
      {
        Data ? <>
          <div>
            <CenterBox Data={Data} setshowprompt={setshowprompt} Reload = {[reload, setreload]} />
            {
              showprompt && <div className='center-prompt'>
                {
                  !groupname && <section>
                    <p>Create a Group</p>
                    <input placeholder='Group Name' />
                    <button onClick={() => setgroupname(true)}>NEXT</button>
                  </section>
                }
                {
                  groupname && <section>
                    <p>Select Group Icon</p>
                    <Avatar src={Avatarsrc} />
                    {
                      (Avatarsrc === "") && <input onChange={() => setAvatarsrc(Unoffical)} type="file" />
                    }
                    {
                      (Avatarsrc !== "") && <button onClick={() => { setshowprompt(false); setgroupname(false); setAvatarsrc("") }}>SET</button>
                    }
                  </section>
                }
              </div>
            }
          </div>
        </> : <>GETTING DATA FROM BACKEND</>
      }
    </div>
  );
}

export default App;
