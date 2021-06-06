import React from 'react'

function Column() {
    const items = [
        {
            id: "qwertt",
            title: "SDE"
        },
        {
            id: "uytrel",
            title: "EM"
        }]
    return (
        <React.Fragment>
            {
                items.map (item => {
                    return (
                        <React.Fragment key={item.id}>
                            <td>{item.title}</td>
                        </React.Fragment>
                    )
                })
            }
            <td>Name</td>
            <td>Sam</td>
        </React.Fragment>
    )
}


/* we can siimply ignore the tag that enclosing the content. However, you can not pass the keey attributes; */
// function Column() {
//     const items = []
//     return (
//         <>
//             {
//                 items.map (item => {
//                     <React.Fragment key={item.id}>
//                         <p>title</p>
//                         <p>item.title</p>
//                     </React.Fragment>
//                 })
//             }
//             <td>Name</td>
//             <td>Sam</td>
//         </>
//     )
// }

export default Column
