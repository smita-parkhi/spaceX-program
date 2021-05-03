import React from 'react'

import './filter-section.component.scss'

export default function Filter({ filterHeading, options, activeFilterValue, lauchYearChangeCallback}) {

    console.log(activeFilterValue)

    const handleFilterClick = (filter) => {
        lauchYearChangeCallback(filter)
    }

    return (
        <div className='filter-wrapper'>
            <div className='filter-section'>
                <p className='heading'>{filterHeading}</p>
                <ul className='options'>
                    {options.map(filter => <li style={{ backgroundColor: (activeFilterValue && activeFilterValue.filterValue === filter.filterValue) ? 'red' : 'green' }}
                        onClick={() => {
                            handleFilterClick(filter);
                        }}>
                        <p>{filter.filterName}</p>
                    </li>)}
                </ul>
            </div>
        </div>
    )
}