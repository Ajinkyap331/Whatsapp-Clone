import React from "react";
import { Avatar } from "@mui/material";
import "./Profile.css";
import BlockIcon from "@mui/icons-material/Block";
import NotificationsOffIcon from "@mui/icons-material/NotificationsOff";

export const Profile = ({group}) => {
  return (
    <div className="profile">
      <nav style={{ width: "22vw", height: "7.8vh" }}></nav>
      <section className="profile-avatar">
        <Avatar sx={{ width: 120, height: 120 }} />
        <p>Deokumar Manwar</p>
        {!group && <p>2-12-1-7-3-3-14</p>}
      </section>
      <section className="profile-about">
        {group ? <>Description</> : <>About</>}
        <p>I am a Pro Comder</p>
      </section>
      {
        !group && <section className="profile-block">
        <BlockIcon sx = {{color : "red"}}/>
        <p>Block</p>
      </section>
      }
      {
        group && <div className="profile-block" style = {{flexDirection : "column", gap : 0}}>
        <h2>Members</h2>
        <section style = {{display : "flex", justifyContent : "space-between", width : "18vw"}}>
          <p>Ajinkya</p>
          <p>online</p>
        </section>
        <section style = {{display : "flex", justifyContent : "space-between", width : "18vw"}}>
          <p>Ruchi</p>
          <p>online</p>
        </section>
        <section style = {{display : "flex", justifyContent : "space-between", width : "18vw"}}>
        <p>Deokumar</p>
        <p>12:40</p>
        </section>
        </div>
      }
      <section className="profile-block">
        <NotificationsOffIcon sx = {{color : "#44a6c6"}}/>
        <p>Mute Notification</p>
      </section>
    </div>
  );
};
