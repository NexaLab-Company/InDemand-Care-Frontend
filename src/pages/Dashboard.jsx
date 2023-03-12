import React from 'react'
import IncomeExpense from '../components/IncomeExpense/IncomeExpense'
import NavBar from '../components/NavBar/NavBar'
import Accountbalance from '../components/Account Balance/Accountbalance';
import LatestIncome from '../components/Latest Income/LatestIncome';
import ProjectBar from "../components/ProjectBar/ProjectBar"




function Dashboard() {



    return (



        <>
         <NavBar />
         <IncomeExpense />
         <Accountbalance />
         <ProjectBar />
         <LatestIncome />

        </>




    )
}

export default Dashboard