import React from 'react'
import IncomeExpense from '../components/IncomeExpense/IncomeExpense'
import NavBar from '../components/NavBar/NavBar'
import Accountbalance from '../components/Account Balance/Accountbalance';
import LatestIncome from '../components/Latest Income/LatestIncome';
import ProjectBar from "../components/ProjectBar/ProjectBar"
import DashboardOverviewCards from '../components/Dashboard-overview-cards/DashboardOverviewCards';






function Dashboard() {



    return (



        <>
         <NavBar />
         <DashboardOverviewCards/>
         <IncomeExpense />
         <Accountbalance />
         <ProjectBar />
         <LatestIncome />

        </>




    )
}

export default Dashboard