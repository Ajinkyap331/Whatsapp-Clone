import Babban from "./Images/Babban Sharma.jpg";
import Crush from "./Images/Crush.png";
import Offical from "./Images/Offical.jpg";
import Masterji from "./Images/Masterji.jpg";
import Dekito from "./Images/Dekito.jpg";

export const Data = {
  MainCharcter: "Babban Sharma",
  DM: ["Crush", "Masterji", "Dekito"],
  Groups: ["Offical Group", "Un-Offical Group"],
  Characters: {
    Babban: Babban,
    Crush: {
      name: "Crush",
      time: "1:20pm",
      lastMessage: "Hey",
      photo: Crush,
      seen: "online",
      status: "I like Sundays",
      number: "2-12-1-7-3-3-14",
    },
    Masterji: {
      name: "Masterji",
      time: "5:00am",
      lastMessage: "GM",
      photo: Masterji,
      seen: "6:03am",
      status: "Be +ve",
      number: "2-12-1-7-3-3-14",
    },
    Dekito : {
        name: "Dekito",
        time: "11:00am",
        lastMessage: "GM bro",
        photo: Dekito,
        seen: "3:03am",
        status: "Be +ve",
        number: "2-12-1-7-3-3-14",
    },
    "Offical Group": {
      name: "Offical Group",
      time: "5:20pm",
      lastMessage: "Nice",
      photo: Offical,
      seen: "Crush, Handsome boi, Materji, Topper",
      status: "I like Sundays",
      number: "2-12-1-7-3-3-14",
    },
    "Un-Offical Group": {
      name: "Un-Offical Group",
      time: "1:20pm",
      lastMessage: "Hey",
      photo: "",
      seen: "Crush, Handsome boi, Topper",
      status: "I like Sundays",
      number: "2-12-1-7-3-3-14",
    },
  },
};
