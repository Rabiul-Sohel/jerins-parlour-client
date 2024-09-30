import React from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Legend } from 'recharts';
import { PieChart, Pie, Sector, ResponsiveContainer } from 'recharts';
import useAxiosSecure from '../../../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';


const Recharts = () => {

    const axiosSecure = useAxiosSecure()
    const { data: orderStats = [] } = useQuery({
        queryKey: ['orderStats'],
        queryFn: async () => {
            const response = await axiosSecure.get('/order-stats')
            return response.data;
        }
    })
    // const newStats = orderStats.map(({quantity, ...rest})=> rest)
    // console.log(newStats);

    const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];
    const CustomLegend = (props) => {
        const { payload } = props;
        return (
            <ul>
                {
                    payload.map((entry, index) => (
                        <li
                            key={`item-${index}`}
                            style={{color: entry.color}}
                        >
                            {`${entry.payload.title} (${entry.payload.value})`}
                        </li>
                    ))
                }
            </ul>
        )
    }

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


    // const data = [
    //     {
    //       name: 'Page A',
    //       uv: 4000,
    //       pv: 2400,
    //       amt: 2400,
    //     },
    //     {
    //       name: 'Page B',
    //       uv: 3000,
    //       pv: 1398,
    //       amt: 2210,
    //     },
    //     {
    //       name: 'Page C',
    //       uv: 2000,
    //       pv: 9800,
    //       amt: 2290,
    //     },
    //     {
    //       name: 'Page D',
    //       uv: 2780,
    //       pv: 3908,
    //       amt: 2000,
    //     },
    //     {
    //       name: 'Page E',
    //       uv: 1890,
    //       pv: 4800,
    //       amt: 2181,
    //     },
    //     {
    //       name: 'Page F',
    //       uv: 2390,
    //       pv: 3800,
    //       amt: 2500,
    //     },
    //     {
    //       name: 'Page G',
    //       uv: 3490,
    //       pv: 4300,
    //       amt: 2100,
    //     },

    //   ];
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
    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

    return (

        <div className='flex items-center'>
            <div>
                <h5 className='text-2xl font-semibold text-hPink mb-5'>Quantity</h5>
                <BarChart
                    width={600}
                    height={400}
                    data={orderStats}
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
                        {orderStats.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                        ))}
                    </Bar>
                </BarChart>
            </div>
            <div>
                <h2 className='text-2xl font-semibold text-pink mb-5'>Revenue</h2>
                <PieChart className='' width={400} height={400}>
                    <Pie

                        data={orderStats}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={renderCustomizedLabel}
                        outerRadius={150}
                        fill="#8884d8"
                        dataKey="revenue"
                    // legendType='square'


                    >
                        {orderStats.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                    <Legend
                    content={<CustomLegend></CustomLegend>}
                    ></Legend>
                </PieChart>
            </div>


        </div>
    );
};

export default Recharts;