import React, { useState, useEffect } from 'react';
import "../Css/Main.css";

function GuestSlider() {
  return (
    <div className='guest-slider-container'>
        <div className='guest-slider-content' style={{backgroundColor: '#08CADC', borderTopLeftRadius: '10px', borderBottomLeftRadius:'10px' }}>
            <div className='guest-slider-avatar'></div>
            <div className='guest-slider-avatar-data'>#1<span>Name#Aa</span></div>
        </div>
        <div className='guest-slider-content' style={{backgroundColor: '#7E4CD9'}}>
        <div className='guest-slider-avatar'></div>
            <div className='guest-slider-avatar-data'>#2<span>Name#Aa</span></div>
        </div>
        <div className='guest-slider-content' style={{backgroundColor: '#D9554C'}}>
        <div className='guest-slider-avatar'></div>
            <div className='guest-slider-avatar-data'>#3<span>Name#Aa</span></div>
        </div>
        <div className='guest-slider-content' style={{backgroundColor: '#AC4CD9' ,borderTopRightRadius: '10px', borderBottomRightRadius:'10px'}}>
        <div className='guest-slider-avatar'></div>
            <div className='guest-slider-avatar-data'>#4<span>Name#Aa</span></div>
        </div>
        </div>
  )
}

export default GuestSlider;