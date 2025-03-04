"use client"
import React from 'react';
import ChartOverview from '../shared/ChartOverview';
import DistributorTable from '../shared/DistributorTable';
import { subDistributorList } from '@/lib/dummyData';

const MainAgentOverview = () => {

    return(
        <section className='p-5'>
            {/* Charts */}
            <ChartOverview />
            
            {/* DISTRIBUTORS */}
            <DistributorTable distRank={'All'} distributors={subDistributorList} matrix={300}/>
    </section>
    );
}

export default MainAgentOverview