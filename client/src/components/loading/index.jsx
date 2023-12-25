import { infinity } from 'ldrs'
import 'ldrs/ring'
import React from 'react'
import './index.scss'

infinity.register()

const Loading = () => {
    return (
    <div className='section d-flex justify-content-center align-items-center'>
        <div className="loading">

            <l-infinity
                size="105"
                stroke="8"
                stroke-length="0.15"
                bg-opacity="0.1"
                speed="1.3"
                color="var(--secondarycolor1)"
            ></l-infinity>
        </div>
    </div>
    )
}

export default Loading