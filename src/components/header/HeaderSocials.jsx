import React from 'react'
import {AiOutlineInstagram} from 'react-icons/ai/'
import {FaTiktok} from 'react-icons/fa/'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://instagram.com/ash.wadud" target="_blank"><AiOutlineInstagram/></a>
        <a href="https://tiktok.com/@ashwud" target="_blank"><FaTiktok/></a>
    </div>
  )
}

export default HeaderSocials