import React, { Fragment, useEffect, useState } from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
ChartJS.register(ArcElement, Tooltip, Legend);

export function Donut({ moves }) {
    const [dataConsultas, setDataConsultas] = useState([]);
    useEffect(() => {
        if (!(moves === undefined)) {
            const numCorrectas = moves.filter(item => item.result >= 0).length;
            const numIncorrectas = moves.filter(item => item.result < 0).length;
            const data = {
                labels: ['Correctas', 'Incorrectas',],
                datasets: [
                    {
                        label: '# de Consultas',
                        data: [numCorrectas, numIncorrectas],
                        backgroundColor: [
                            '#02634b',
                            '#e74a3b',
                        ],
                    },
                ],
            };
            setDataConsultas(data);
        }
    }, [moves]);
    if (dataConsultas.length === 0) { return <Fragment></Fragment> } else {
        return <Doughnut data={dataConsultas} />;
    }
}


