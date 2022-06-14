import ApexCharts from 'react-apexcharts'
import { useState } from 'react'
import { AiFillInfoCircle } from 'react-icons/ai'

import { Container, Header, Title } from './styles'

export default function CardBar () {
  const [state, setState] = useState({
    series: [
      {
        data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380]
      }
    ],
    options: {
      chart: {
        type: 'bar',
        height: 350
      },
      plotOptions: {
        bar: {
          borderRadius: 4,
          horizontal: true
        }
      },
      dataLabels: {
        enabled: false
      },
      xaxis: {
        categories: [
          'South Korea',
          'Canada',
          'United Kingdom',
          'Netherlands',
          'Italy',
          'France',
          'Japan',
          'United States',
          'China',
          'Germany'
        ]
      }
    }
  })

  return (
    <Container>
      <Header>
        <Title>Barras</Title>
        <AiFillInfoCircle size={13} color='#19D7AA' />
      </Header>

      <ApexCharts
        options={state.options}
        series={state.series}
        type='bar'
        height={340}
      />
    </Container>
  )
}
