/**
 * Created by User on 1/27/2017.
 */
import React from 'react';

// STAGE 1
// This could be a simple functional Component
let VideoList = (props) => {
    return(
        <ul className='col-md-4 list-group'>
          {props.videos.length}
        </ul>
    )
};

export default VideoList;
