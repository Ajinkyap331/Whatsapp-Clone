import React from "react";
import { Avatar } from "@mui/material";
import "./Profile.css";
import BlockIcon from "@mui/icons-material/Block";
import NotificationsOffIcon from "@mui/icons-material/NotificationsOff";
import VideocamIcon from '@mui/icons-material/Videocam';
import CallIcon from '@mui/icons-material/Call';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import { Photo } from "../Data";

export const Profile = ({ group, name, Data }) => {

  var Status = "", _Photo = "", PNumber = "";
  if (name !== "") {
    Status = Data.Characters[name].status
    PNumber = Data.Characters[name].number
    _Photo = Photo[name]
  }

  return (
    <div className="profile">
      <nav style={{ width: "22vw", height: "7.8vh" }}></nav>
      <section className="profile-avatar">
        <Avatar sx={{ width: 120, height: 120 }} src={_Photo} />
        <p>{name}</p>
        {!group && <p>{PNumber}</p>}
      </section>
      <section className="profile-about">
        {group ? <>Description</> : <>About</>}
        <p>{Status}</p>
      </section>
      {
        !group && <section className="video-call">
          <div><div><VideocamIcon /></div> <p>Video</p></div>
          <div><div><CallIcon /></div> <p>Call</p></div>
        </section>
      }
      {
        !group && <section className="profile-block">
          <BlockIcon sx={{ color: "red" }} />
          <p>Block</p>
        </section>
      }
      {
        group && <div className="profile-block" style={{ flexDirection: "column", gap: 0 }}>
          <h2>Members</h2>
          {
            Data.Characters[name].seen.map(members => {
              return (
                <section style={{ display: "flex", justifyContent: "space-between", width: "18vw", alignItems : "center" }}>
                  <p>{members}</p>
                  {
                    (Data.Characters[members].seen === "online") && <p style = {{background : "green", height : "10px", width : "10px", borderRadius : "50%", marginRight : "10px" }}></p>
                  }
                  {
                    (Data.Characters[members].seen !== "online") && <p>{Data.Characters[members].seen}</p>
                  }
                </section>
              )
            })
          }
        </div>
      }
      <section className="profile-block">
        <NotificationsOffIcon sx={{ color: "#44a6c6" }} />
        <p>Mute Notification</p>
      </section>
      {
        group && <section className="profile-block">
        <PersonAddAlt1Icon/>
        <p>Add Participants</p>
      </section>
      }
      
    </div>
  );
};
