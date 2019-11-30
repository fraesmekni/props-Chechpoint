import React from 'react';
import src from "./res/download.png";
import Photo from  "./Photo";
import Title from "./Title";

function Wrapper(){
    return(
        <>
    <Photo srcx={src} />

	<Title  style={{

		color:'red',

}}>My Name here</Title>

	<Title small >My job here</Title>
    </>
    )
}
export default  Wrapper;