import React from 'react';
import { Line } from 'react-chartjs-2';
import GraphOptions from './GraphOptions';
import data from './Data'

const Statistics = (props) => {

  // data: [65, 59, 80, 81, 56, 55, 40]
  // labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],

  data.datasets[0].data = [65, 59, 80, 81, 56, 55, 40]
  data.labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July']

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
