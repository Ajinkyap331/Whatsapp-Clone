import React, { useEffect, useState } from "react";
import { Avatar } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SentimentSatisfiedSharpIcon from "@mui/icons-material/SentimentSatisfiedSharp";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import { Message, Message2 } from "./Message";
import { Data } from "../Data";
import Picker from "emoji-picker-react";

export const Right = ({ group, name }) => {
    
    var Status = "", Photo = "";
    if (name !== "") {
        Status = Data.Characters[name].seen;
        Photo = Data.Characters[name].photo;
    }

    const [message, setmessage] = useState([]);
    const [seen, setseen] = useState(false);
    const [mess, setmess] = useState("");

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
        if (key.shiftKey && key.key === "Enter" && mess !== "") {
            setmessage([...message, [mess, 2]]);
            document.getElementById("main-inp").value = "";
            setmess("", () => {
                console.log(1);
            });
        } else if (key.key === "Enter" && mess !== "") {
            setmessage([...message, [mess, 1]]);
            document.getElementById("main-inp").value = "";
            setmess("");
        }
    };

    return (
        <div className="right">
            <nav className="right-nav">
                <section>
                    <Avatar src={Photo} />
                    <div className="name-lastseen">
                        <p>{name}</p>
                        <p style={{ color: "grey", fontSize: "13px" }}>{Status}</p>
                    </div>
                </section>
                <section className="icons">
                    <SearchIcon />
                    <MoreVertIcon />
                </section>
            </nav>
            <div
                style={{ display: "flex", justifyContent: "center", marginTop: "1vh" }}
            >
                <div
                    style={{
                        padding: "5px",
                        borderRadius: "5px",
                        background: "#202c33",
                        width: "max-content",
                    }}
                >
                    TODAY
                </div>
            </div>
            <div className="message-container" id="message-container">
                {message.map((mess, i) => {
                    if (mess[1] === 1) return <Message text={mess[0]} seen={seen} />;
                    else {
                        return <Message2 text={mess[0]} group={group} />;
                    }
                })}
                <div style={{ height: "5vh" }}></div>
                <div id="picker" style={{ display: "none" }}>
                    <Picker
                        onEmojiClick={onEmojiClick}
                        pickerStyle={{
                            position: "absolute",
                            bottom: "90px",
                            width: "40vw",
                        }}
                    />
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
