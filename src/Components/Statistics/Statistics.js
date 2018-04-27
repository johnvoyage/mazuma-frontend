import React from 'react';
import { Line } from 'react-chartjs-2';
import GraphOptions from './GraphOptions';
import data from './Data'

const Statistics = (props) => {


  return(
    <div>
      <GraphOptions />
      <Line
        data={data}
        // width={100}
        // height={50}
        // options={{
        //   maintainAspectRatio: false
        // }}
      />
    </div>
  )
}

export default Statistics
