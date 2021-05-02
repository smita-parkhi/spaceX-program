import React from 'react'
import { BRANDLOGO } from '../../constants/constant.component'

import './card.component.scss'

export default function Card() {
    return (
        <div className='card-wrapper'>
            <div className='card-container'>
                <div className='img-section'>
                    <img
                        src='https://images2.imgbox.com/40/e3/GypSkayF_o.png'
                        alt='Brand logo'
                        className='brand-logo'
                    />
                </div>
                <h5 className='img-heading'>falconSat #1</h5>
                <div className='card-info'>
                    <div className='heading-label-top'>
                        <p className='card-label-top'>Mission ids :</p>
                        <ul>
                            <li>list_mission_id</li>
                        </ul>
                    </div>
                    <div className='heading-label'>
                        <p className='card-label'>Launch Year :</p>
                        <p className='card-sub-label'>2006</p>
                    </div>
                    <div className='heading-label'>
                        <p className='card-label'>Successful Launch :</p>
                        <p className='card-sub-label'>true</p>
                    </div>
                    <div className='heading-label'>
                        <p className='card-label'>Successful Landing :</p>
                        <p className='card-sub-label'>true</p>
                    </div>
                </div>
            </div>
        </div>
    )
}