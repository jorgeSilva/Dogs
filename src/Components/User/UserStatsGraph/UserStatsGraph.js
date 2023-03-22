import React from 'react'
import style from './UserStatsGraph.module.css'
import { VictoryPie, VictoryChart, VictoryBar } from 'victory'

const UserStatsGraph = ({data}) => {

  const [graph, setGraph] = React.useState([])
  const [total, setTotal] = React.useState(0)

  React.useEffect(() => {
    const graphData = data.map((item) => {
      return{ 
        x: item.title,
        y: Number(item.acessos)
      }
    
    })

    setTotal(data.map(({acessos}) => Number(acessos)).reduce((a,b) => a + b ))
    setGraph(graphData)

  }, [data])

  if(data) return (
    <section className={` ${style.graph} animeLeft`}>
      <div className={`${style.total} ${style.graphItem}`}>
        <p>Acessos: {total} </p>
      </div>
    <div className={` ${style.graphItem}`}>
      <VictoryPie data={graph} innerRadius={50} padding={{top: 20, bottom: 20, left: 80, right: 80}} style={{
        data:{
          fillOpacity: .9,
          stroke: '#fff',
          strokeWidth: 2
        },
        labels:{
          fontSize: 14,
          fill: '#333'
        }
      }}/>
    </div>
    <div className={`${style.graphItem}`}>
      <VictoryChart>
        <VictoryBar alignment='start' data={graph}>

        </VictoryBar>
      </VictoryChart>
    </div>
    </section>
  )
  else return null
}

export default UserStatsGraph