import React, { useEffect } from 'react'
import "./IncomeExpense.css"
import { Column } from '@ant-design/plots';
import Layout from 'antd/es/layout/layout';
import { Typography } from 'antd';
import "./IncomeExpenseMobile.css"
import DashboardService from '../../services/DashboardService';
import { useDispatch, useSelector } from 'react-redux';
import { incomeAndExpenseAction } from '../../redux/actions/DashboardActions';







const month = [


    "Jan.",
    "Feb.",
    "Mar.",
    "Apr.",
    "May.",
    "Jun.",
    "Jul.",
    "Aug.",
    "Sep.",
    "Oct.",
    "Nov.",
    "Dec.",

]








const { Title } = Typography;
const { Text } = Typography;





function IncomeExpense() {





    const dispatch = useDispatch();


    const incomeAndExpenseState = useSelector(state => state.incomeAndExpenseReducer);









    // const data = [
    //     {
    //         name: 'Income',
    //         month: 'Jan.',
    //         value: 18.9,
    //     },
    //     {
    //         name: 'Income',
    //         month: 'Feb.',
    //         value: 28.8,
    //     },
    //     {
    //         name: 'Income',
    //         month: 'Mar.',
    //         value: 39.3,
    //     },
    //     {
    //         name: 'Income',
    //         month: 'Apr.',
    //         value: 81.4,
    //     },
    //     {
    //         name: 'Income',
    //         month: 'May',
    //         value: 47,
    //     },
    //     {
    //         name: 'Income',
    //         month: 'Jun.',
    //         value: 20.3,
    //     },
    //     {
    //         name: 'Income',
    //         month: 'Jul.',
    //         value: 24,
    //     },
    //     {
    //         name: 'Income',
    //         month: 'Aug.',
    //         value: 35.6,
    //     },
    //     {
    //         name: 'Expense',
    //         month: 'Jan.',
    //         value: 12.4,
    //     },
    //     {
    //         name: 'Expense',
    //         month: 'Feb.',
    //         value: 23.2,
    //     },
    //     {
    //         name: 'Expense',
    //         month: 'Mar.',
    //         value: 34.5,
    //     },
    //     {
    //         name: 'Expense',
    //         month: 'Apr.',
    //         value: 99.7,
    //     },
    //     {
    //         name: 'Expense',
    //         month: 'May',
    //         value: 52.6,
    //     },
    //     {
    //         name: 'Expense',
    //         month: 'Jun.',
    //         value: 35.5,
    //     },
    //     {
    //         name: 'Expense',
    //         month: 'Jul.',
    //         value: 37.4,
    //     },
    //     {
    //         name: 'Expense',
    //         month: 'Aug.',
    //         value: 42.4,
    //     },
    // ];




    









    const config = {
        isGroup: true,
        xField: 'month',
        yField: 'value',
        seriesField: 'name',
        data: incomeAndExpenseState ,

        /** 设置颜色 */
        //color: ['#1ca9e6', '#f88c24'],

        /** 设置间距 */
        // marginRatio: 0.1,
        label: {
            // 可手动配置 label 数据标签位置
            position: 'middle',
            style: {

                fontWeight: 700,

            },
            // 'top', 'middle', 'bottom'
            // 可配置附加的布局方法
            layout: [
                // 柱形图数据标签位置自动调整
                {
                    type: 'interval-adjust-position',
                }, // 数据标签防遮挡
                {
                    type: 'interval-hide-overlap',
                }, // 数据标签文颜色自动调整
                {
                    type: 'adjust-color',
                },
            ],
        },
    };















    const handleIncomeAndExpenseService = async () => {


        const { data } = await DashboardService.getIncomeAndExpenseOfCurrentYear();


        for (let i = 0; i < data.data.incomeOfCurrentYear.length; i++) {



            dispatch(incomeAndExpenseAction(
                {
                    name: "Income",
                    month: month[i],
                    value: data.data.incomeOfCurrentYear[i] == undefined ? 0 : parseInt(data.data.incomeOfCurrentYear[i].incomeOfCurrentYear)

                }
            ));
        }





        for (let i = 0; i < data.data.expenseOfCurrentYear.length; i++) {



            dispatch(incomeAndExpenseAction(
                {
                    name: "Expense",
                    month: month[i],
                    value: data.data.expenseOfCurrentYear[i] == undefined ? 0 : parseInt(data.data.expenseOfCurrentYear[i].expenseOfCurrentYear)

                }
            ));
        }


    }







    




    useEffect(() => {

        handleIncomeAndExpenseService();


    }, [])











    return (

        <Layout id='income-expense-layout'>



            <Layout id='income-expense-container'>



                <Title level={3} id="income-expense-heading"

                    style=
                    {
                        {
                            marginLeft: 23,
                            textAlign: "center"
                        }
                    }


                >
                    Income & Expense
                </Title>
                <Title level={4} id="current-year-heading">Current Year - 2023</Title>


            </Layout>



            {



                <Column {...config}


                    style=
                    {
                        {
                            width: "100%",
                            marginTop: 50
                        }
                    } />

            }
        </Layout>


    )
};



export default IncomeExpense;