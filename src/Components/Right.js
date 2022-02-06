import React, { useEffect, useState } from 'react';
import { Avatar } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SentimentSatisfiedSharpIcon from '@mui/icons-material/SentimentSatisfiedSharp';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import { Message, Message2 } from './Message';

export const Right = ({group}) => {

    var name = "Deokumar"
    var status = "online"
    var members = "Ajinkya, Deo, Ruchi"

    const [message, setmessage] = useState([])
    const [seen, setseen] = useState(false)
    const [mess, setmess] = useState("")

    useEffect(() => {
        var objDiv = document.getElementById("message-container");
        objDiv.scrollTop = objDiv.scrollHeight;
        // setTimeout(() => {
        //     setseen(true)
        // }, 10000)
    }, [message])

    const HandleEnter = (key) => {
        if (key.shiftKey && key.key === "Enter" && mess !== "") {
            setmessage([...message, [mess, 2]])
            document.getElementById("main-inp").value = "";
            setmess("", () => {
                console.log(1)
            })
        }
        else if (key.key === "Enter" && mess !== "") {
            setmessage([...message, [mess, 1]])
            document.getElementById("main-inp").value = "";
            setmess("")
        }

    }

    return <div className='right'>
        <nav className='right-nav'>
            <section>
                <Avatar />
                <div className='name-lastseen'>
                    <p>{name}</p>
                    {!group && <p style={{ color: "grey", fontSize: "13px" }}>{status}</p>}
                    {group && <p style={{ color: "grey", fontSize: "13px" }}>{members}</p>}
                    
                </div>
            </section>
            <section className="icons">
                <SearchIcon />
                <MoreVertIcon />
            </section>
        </nav>
        <div style= {{display : "flex", justifyContent : "center", marginTop : "1vh"}}>
            <div style={{ padding : "5px", borderRadius : "5px", background: "#202c33", width: "max-content" }}>TODAY</div>

        </div>
        <div className='message-container' id="message-container">
            {
                message.map((mess, i) => {
                    if (mess[1] === 1)
                        return (
                            <Message text={mess[0]} seen={seen} />
                        )
                    else {
                        return (
                            <Message2 text={mess[0]} group = {group}/>
                        )
                    }
                })
            }
            <div style={{ height: "3vh" }}></div>
        </div>
        <div className='right-footer'>
            <SentimentSatisfiedSharpIcon />
            <AttachFileIcon />
            <section>
                <input placeholder='Message' id="main-inp" onChange={(e) => setmess(e.target.value)} onKeyPress={(d) => HandleEnter(d)} />
            </section>
        </div>
        
    </div>;
};
