import DoneAllIcon from '@mui/icons-material/DoneAll';
import './Message.css'
export const Message = ({text, seen}) => {

    return <div className='messages'>
        <div>
            {text}
            <div style={{fontSize: "10px", display: 'flex', justifyContent: 'flex-end', alignItems : "center" }}>
                {
                    new Date().toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
                }
                {!seen && <DoneAllIcon sx={{ fontSize: "15px", marginLeft: "5px" }} />}
                {seen && <DoneAllIcon sx={{ fontSize: "15px", marginLeft: "5px", color: "#53adca" }} />}
            </div>
        </div>
    </div>;
};

export const Message2 = ({text, group }) => {
    return <div className='messages2'>
        <div>
            <p style = {{color : "red", fontSize: "15px"}}>{group && <>Name</>}</p>
            {text}
            <div style={{ fontSize: "10px", display: 'flex', justifyContent: 'flex-end' }}>
                {
                    new Date().toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
                }
            </div>
        </div>

    </div>;
};