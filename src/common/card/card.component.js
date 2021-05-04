import React from 'react'
import { BRANDLOGO } from '../../constants/constant.component'

import './card.component.scss'

export default function Card({ Rocket }) {
    const { mission_name,launch_success, land_success, links, launch_year, mission_id, rocket } = Rocket
    console.log(launch_success)
    return (
        <div className='card-wrapper'>
            <div className='card-container'>
                <div className='img-section'>
                    <img
                        src={links.mission_patch}
                        alt='Brand logo'
                        className='brand-logo'
                    />
                </div>
                <h5 className='img-heading'>{mission_name}</h5>
                <div className='card-info'>
                    {mission_id.length ? <div className='heading-label-top'>
                        <p className='card-label-top'>Mission ids :</p>
                        <ul>
                            {mission_id.map(missionId => <li>{missionId}</li>)}
                        </ul>
                    </div> : 
                    <div className='heading-label-top' style={{display: 'flex', alignItems: 'center'}}>
                        <p className='card-label-top'>Mission ids :</p>
                        <p style={{margin: '0px 0px 0px 5px ', color: 'gray'}}>NA</p>
                    </div>}
                    <div className='heading-label'>
                        <p className='card-label'>Launch Year :</p>
                        <p className='card-sub-label'>{launch_year}</p>
                    </div>
                    <div className='heading-label'>
                        <p className='card-label'>Successful Launch :</p>
                        <p className='card-sub-label'>{launch_success ? "true" : "false"}</p>
                    </div>
                    <div className='heading-label'>
                        <p className='card-label'>Successful Landing :</p>
                        <p className='card-sub-label'>{rocket.first_stage.cores[0].land_success ? "true" : "false"}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}