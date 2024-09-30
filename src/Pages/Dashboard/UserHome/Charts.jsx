import React from 'react';
import useGetUser from '../../../Hooks/useGetUser';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Legend } from 'recharts';
import { PieChart, Pie, Sector, ResponsiveContainer } from 'recharts';


const Charts = () => {
    const [currentUser] = useGetUser()
    const axiosSecure = useAxiosSecure()
    const data = [
        { name: 'Group A', value: 400 },
        { name: 'Group B', value: 300 },
        { name: 'Group C', value: 300 },
        { name: 'Group D', value: 200 },
    ];
    const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];
    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };
    const getPath = (x, y, width, height) => {
        return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
        ${x + width / 2}, ${y}
        C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
        Z`;
    };
    const TriangleBar = (props) => {
        const { fill, x, y, width, height } = props;

        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
    };
    const { data: userStats = [] } = useQuery({
        queryKey: ['userOrderStats'],
        queryFn: async () => {
            const response = await axiosSecure.get(`/user-order-stats?email=${currentUser.email}`)
            return response.data
        }
    })
    const pieChartData = userStats.map(data =>{
       return {name: data.title, value: data.price}
    })
    console.log(pieChartData);
    const CustomLegendContent = (props) => {
        const { payload } = props;
        return (
            <div className='flex'>
                <ul className='text-center mx-auto '>
                    {
                        payload.map((entry, index) => (
                            // console.log(entry)

                            <li className='flex items-center gap-1' key={index} >
                                <div style={{ backgroundColor: entry.color }} className='w-4 h-4 '></div> {entry.payload.title} ({entry.payload.value})
                            </li>
                        ))
                    }
                </ul>
            </div>
        )
    }
    // console.log(userStats);
    return (
        <div className='mt-10 flex items-center text-center'>
            <div>
                <h5>Quntitty</h5>
                <BarChart
                    className='w-full'
                    width={500}
                    height={300}
                    data={userStats}
                    margin={{
                        top: 20,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="title" />
                    <YAxis />
                    <Bar dataKey="quantity" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                        {userStats.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                        ))}
                    </Bar>
                </BarChart>
            </div>
            <div>
                <h5>Total Cost</h5>
                <PieChart className='w-full  ' width={400} height={400}>
                    <Pie
                        data={pieChartData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={renderCustomizedLabel}
                        outerRadius={120}
                        fill="#8884d8"
                        dataKey="value"
                        className=''
                    >
                        {userStats.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                    <Legend ></Legend>
                    
                </PieChart>
            </div>
        </div>

    );
};

export default Charts;