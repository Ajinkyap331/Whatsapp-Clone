import React from "react";
import { Avatar } from "@mui/material";
import "./Profile.css";
import BlockIcon from "@mui/icons-material/Block";
import NotificationsOffIcon from "@mui/icons-material/NotificationsOff";
import { Data } from "../Data";
import VideocamIcon from '@mui/icons-material/Videocam';
import CallIcon from '@mui/icons-material/Call';

export const Profile = ({ group, name }) => {

  var Status = "", Photo = "", PNumber = "";
  if (name !== "") {
    Status = Data.Characters[name].status
    PNumber = Data.Characters[name].number
    Photo = Data.Characters[name].photo
  }

  return (
    <div className="profile">
      <nav style={{ width: "22vw", height: "7.8vh" }}></nav>
      <section className="profile-avatar">
        <Avatar sx={{ width: 120, height: 120 }} src={Photo} />
        <p>{name}</p>
        {!group && <p>{PNumber}</p>}
      </section>
      <section className="profile-about">
        {group ? <>Description</> : <>About</>}
        <p>{Status}</p>
      </section>
      {
        !group && <section className="video-call">
        <div><div><VideocamIcon /></div> <p>Call</p></div>
        <div><div><CallIcon /></div> <p>Video</p></div>
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
          <section style={{ display: "flex", justifyContent: "space-between", width: "18vw" }}>
            <p>Ajinkya</p>
            <p>online</p>
          </section>
          <section style={{ display: "flex", justifyContent: "space-between", width: "18vw" }}>
            <p>Ruchi</p>
            <p>online</p>
          </section>
          <section style={{ display: "flex", justifyContent: "space-between", width: "18vw" }}>
            <p>Deokumar</p>
            <p>12:40</p>
          </section>
        </div>
      }
      <section className="profile-block">
        <NotificationsOffIcon sx={{ color: "#44a6c6" }} />
        <p>Mute Notification</p>
      </section>
    </div>
  );
};
