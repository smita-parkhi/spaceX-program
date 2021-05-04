import React, { useEffect, useState } from 'react';
import Filter from '../../common/filter-section/filter-section.component';
import Card from '../../common/card/card.component';
import axios from 'axios'

import './home.component.scss'

export default function Home() {
    const [spaceXData, setSpaceXData] = useState()
    const [activeLanuchYear, setActiveLaunchYear] = useState(undefined)
    const [isSuccessfulLaunch, setSuccessfulLaunch] = useState(undefined)
    const [isSuccessfulLand, setSuccessfulLand] = useState(undefined)

    useEffect(() => {
        fetchFilteredMissions()
    }, [activeLanuchYear, isSuccessfulLaunch, isSuccessfulLand])

    function fetchFilteredMissions(params) {
        let url = 'https://api.spacexdata.com/v3/launches?limit=100'
        if (isSuccessfulLaunch) {
            url = url + `&launch_success=${isSuccessfulLaunch.filterValue}`
        }
        if (isSuccessfulLand) {
            url = url + `&land_success=${isSuccessfulLand.filterValue}`
        }
        if (activeLanuchYear) {
            url = url + `&launch_year=${activeLanuchYear.filterValue}`
        }
        axios.get(url).then(res => {
            if (res) {
                setSpaceXData(res.data);
            }
        });
    }
  

    const launchYearFilter = [
        { id: 1, filterName: 2006, filterValue: 2006 },
        { id: 2, filterName: 2007, filterValue: 2007 },
        { id: 3, filterName: 2008, filterValue: 2008 },
        { id: 4, filterName: 2009, filterValue: 2009 },
        { id: 5, filterName: 2010, filterValue: 2010 },
        { id: 6, filterName: 2011, filterValue: 2011 },
        { id: 7, filterName: 2012, filterValue: 2012 },
        { id: 8, filterName: 2013, filterValue: 2013 },
        { id: 9, filterName: 2014, filterValue: 2014 },
        { id: 10, filterName: 2015, filterValue: 2015 },
        { id: 11, filterName: 2016, filterValue: 2016 },
        { id: 12, filterName: 2017, filterValue: 2017 },
        { id: 13, filterName: 2018, filterValue: 2018 },
        { id: 14, filterName: 2019, filterValue: 2019 },
        { id: 15, filterName: 2020, filterValue: 2020 },
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
    }

    const handleSuccessfulLaunch = (filter) => {
        setSuccessfulLaunch(filter)
    }

    const handleSuccessfulLand = (activeFilter) => {
        setSuccessfulLand(activeFilter)
    }

    return (
        <div className='home-container'> 
        <h2 className='home-heading'>SpaceX Launch Program</h2>
            <div className='home-wrapper'>
                
                <div className='filter'>
                    <p className='filter-heading'>Filters</p>
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
                    {spaceXData && spaceXData.map(spaceXRocket => <Card Rocket={spaceXRocket} />)}
                </div>

            </div>
        </div>
    )
}