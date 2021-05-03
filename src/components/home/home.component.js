import React, { useEffect, useState } from 'react';
import Filter from '../../common/filter-section/filter-section.component';
import Card from '../../common/card/card.component';

import './home.component.scss'



export default function Home() {

    const [activeLanuchYear, setActiveLaunchYear] = useState(undefined)
    const [isSuccessfulLaunch, setSuccessfulLaunch] = useState(undefined)
    const [isSuccessfulLand, setSuccessfulLand] = useState(undefined)

    useEffect(() => {
        console.log('cal api')
    }, [activeLanuchYear, isSuccessfulLaunch, isSuccessfulLand])


    const launchYearFilter = [
        { id: 1, filterName: 2006, filterValue: 2006 },
        { id: 2, filterName: 2007, filterValue: 2007 },
        { id: 3, filterName: 2008, filterValue: 2008 },
    ]

    const successfulLaunchFilter = [
        { id: 1, filterName: 'True', filterValue: true },
        { id: 2, filterName: 'False', filterValue: false }
    ]

    const successfulLandFilter = [
        { id: 1, filterName: 'True', filterValue: true },
        { id: 2, filterName: 'False', filterValue: false }
    ]

    const handleLauchYearChange = (activeFilter) => {
        setActiveLaunchYear(activeFilter)
        setSuccessfulLaunch(activeFilter)
        setSuccessfulLand(activeFilter)
    }

    const handleSuccessfulLaunch = (filter) => {
        console.log(filter)
        setSuccessfulLaunch(filter)
    }

    const handleSuccessfulLand = (activeFilter) => {
        setSuccessfulLand(activeFilter)
    }


    return (
        <div className='home-wrapper'>
            <div className='filter'>
                <Filter
                    filterHeading='Launch Year'
                    options={launchYearFilter}
                    activeFilterValue={activeLanuchYear}
                    lauchYearChangeCallback={(year) => handleLauchYearChange(year)}
                />

                <Filter
                    filterHeading='Successful Launch'
                    activeFilterValue={isSuccessfulLaunch}
                    options={successfulLaunchFilter}
                    lauchYearChangeCallback={(year) => handleSuccessfulLaunch(year)}
                />

                <Filter
                filterHeading='Successful Land'
                activeFilterValue={isSuccessfulLand}
                options={successfulLandFilter}
                lauchYearChangeCallback={(year) => handleSuccessfulLand(year)}
            />
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