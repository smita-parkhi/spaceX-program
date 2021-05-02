import React from 'react'
import Card from '../card/card.component'

import './filter-section.component.scss'

export default function FilterSection() {
    return (
        <div className='filter-wrapper'>
            <h1>SpaceX Launch Program</h1>
            <div className='filter-section'>
                <h3>Filters</h3>
                <div className='filter-on-data'>
                    <p>Launch Year</p>

                </div>
            </div>
            <div className='card-section'>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>

        </div>
    )
}