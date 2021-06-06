import React from 'react'

function MemoComp({name}) {
    console.log("render Memo component");
    return (
        <div>
            Memo component {name}
        </div>
    )
}


/* higher-order component */
export default React.memo(MemoComp)
 