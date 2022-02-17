import DoneAllIcon from '@mui/icons-material/DoneAll';
import { Avatar } from '@mui/material';
import './Message.css'
import { Photo } from '../Data';
export const Message = ({ text, seen, Data }) => {
    return <div className='messages'>
        <div>
            {
                (text.includes("_photo")) &&
                <img style={{ maxWidth: "20vw",borderRadius : "16px", marginTop : "5px" }} src={text.replace("_photo", "")} ></img>
            }
            {
                !(text.includes("_photo")) && text
            }
            
            <div style={{ fontSize: "10px", display: 'flex', justifyContent: 'flex-end', alignItems: "center" }}>
                {
                    new Date().toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
                }
                {!seen && <DoneAllIcon sx={{ fontSize: "15px", marginLeft: "5px" }} />}
                {seen && <DoneAllIcon sx={{ fontSize: "15px", marginLeft: "5px", color: "#53adca" }} />}
            </div>
        </div>
    </div>;
};

export const Message2 = ({ text, group, By, Data }) => {
    // console.log(By)
    // console.log(Data.Characters[By])
    return <div className='messages2'>
        {
            group && (By !== undefined) && <section>
                <Avatar src={Photo[By]} />
            </section>
        }
        <div>
            <p style={{ color: "red", fontSize: "15px" }}>{group && <>{By}</>}</p>
            {
                (text.includes("_photo")) &&
                <img style={{ maxWidth: "20vw",borderRadius : "16px", marginTop : "5px" }} src={text.replace("_photo", "")} ></img>
            }
            {
                !(text.includes("_photo")) && text
            }
            <div style={{ fontSize: "10px", display: 'flex', justifyContent: 'flex-end' }}>
                {
                    new Date().toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
                }
            </div>
        </div>

    </div>;
};