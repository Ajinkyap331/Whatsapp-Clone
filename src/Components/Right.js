import React, { useEffect, useState } from "react";
import { Avatar } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SentimentSatisfiedSharpIcon from "@mui/icons-material/SentimentSatisfiedSharp";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import { Message, Message2 } from "./Message";
import Picker from "emoji-picker-react";
import { Photo } from "../Data";

export const Right = ({ group, name, message, setmessage, Data }) => {
    var Status = "", _Photo = "";
    if (name !== "") {
        Status = Data.Characters[name].seen;
        _Photo = Photo[name];
    }

    const [seen, setseen] = useState(false);
    const [mess, setmess] = useState("");
    const [leftmess, setleftmess] = useState(false)

    var emoji = false

    useEffect(() => {
        var objDiv = document.getElementById("message-container");
        objDiv.scrollTop = objDiv.scrollHeight;
    }, [message]);

    const ToggelEmoji = () => {
        if (emoji) document.getElementById("picker").style.display = "none"
        else document.getElementById("picker").style.display = "inline-block"
        emoji = !emoji
    }

    const onEmojiClick = (event, emojiObject) => {
        setmess(mess + emojiObject.emoji);
    };

    const HandleEnter = (key) => {
        if (key.shiftKey && key.key === "Enter") {
            setleftmess(true)
        } else if (key.key === "Enter" && mess !== "") {
            setmessage([...message, [mess, 1]]);
            document.getElementById("main-inp").value = "";
            setmess("");
        }
        if ((key.key >= 0 && key.key <= 9 && leftmess && mess !== "") || (!group && key.shiftKey && key.key === "Enter")) {
            const _name = Data.Characters[name].seen
            if (key.key === 0)
                setmessage([...message, [mess, 2, undefined]]);
            else setmessage([...message, [mess, 2, _name[key.key - 1]]]);
            console.log(message)
            setmess("");
            document.getElementById("main-inp").value = "";
            setleftmess(false)
        }
    };

    return (
        <div className="right">
            <nav className="right-nav">
                <section>
                    <Avatar src={_Photo} />
                    <div className="name-lastseen">
                        <p>{name}</p>
                        {
                            group && <p style={{ color: "grey", fontSize: "13px" }}>{Status.join(', ')}</p>
                        }
                        {
                            !group && <p style={{ color: "grey", fontSize: "13px" }}>{Status}</p>
                        }
                    </div>
                </section>
                <section className="icons">
                    <SearchIcon />
                    <MoreVertIcon />
                </section>
            </nav>
            <div style={{ display: "flex", justifyContent: "center", marginTop: "1vh" }}>
                <div style={{
                    padding: "10px",
                    borderRadius: "5px",
                    background: "#202c33",
                    width: "max-content",
                }}>
                    YESTERDAY
                </div>
            </div>
            <div className="message-container" id="message-container">
                {message.map((mess) => {
                    if (mess[1] === 1) return <Message text={mess[0]} seen={seen} Data={Data} />;
                    else {
                        return <Message2 text={mess[0]} group={group} By={mess[2]} Data={Data} />;
                    }
                })}
                <div style={{ height: "6vh" }}></div>
                <div id="picker" style={{ display: "none" }}>
                    {/* <Picker
                        onEmojiClick={onEmojiClick}
                        pickerStyle={{
                            position: "absolute",
                            bottom: "90px",
                            width: "40vw",
                        }}
                    /> */}
                </div>
            </div>
            <div className="right-footer">
                <SentimentSatisfiedSharpIcon
                    onClick={ToggelEmoji}
                    style={{ padding: "5px", cursor: "pointer" }}
                />
                <AttachFileIcon />
                <section>
                    <input
                        placeholder="Message"
                        value={mess}
                        id="main-inp"
                        onChange={(e) => setmess(e.target.value)}
                        onKeyPress={(d) => HandleEnter(d)}
                    />
                </section>
            </div>
        </div>
    );
};
