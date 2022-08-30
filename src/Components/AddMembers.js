import React, { useLayoutEffect, useState } from 'react'

export const AddMembers = () => {

    const needToAdd = ["Masterji added You", "Masterji added (696) 950-8045", "Masterji added Hacker", "Masterji added (543) 820-9944", "Masterji added (458) 967-9883", "Masterji added Crush"]
    const [time, setTime] = useState(Date.now());
    const [Add, setAdd] = useState([])
    var add = []


    useLayoutEffect(() => {
        var i = 0;
        setTimeout(() => {
            const interval = setInterval(() => {
                if (i === needToAdd.length - 1) {
                    clearInterval(interval);
                }
                add.push(needToAdd[i++])
                setTime(Date.now())
                setAdd(add)
            }, 2000)
        }, 20000)
    }, [])



    return ( 
        <>
            {

                Add.map(e => {
                    return (
                        <div key={e} style={{ display: "flex", justifyContent: "center", marginTop: "1.2vh", color: "grey" }}>
                            <div key={e} style={{
                                padding: "10px",
                                borderRadius: "5px",
                                background: "#202c33",
                                width: "max-content",
                            }}>
                                {e}
                            </div>
                        </div>
                    )
                })
            }
        </>


    )
}
