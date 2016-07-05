import React, { Component, PropTypes } from 'react';
const {
  // main component
  Chart, 
  // graphs
  Bars, Cloud, Dots, Labels, Lines, Pies, RadialLines, Ticks, Title,
  // wrappers
  Layer, Animate, Transform, Handlers,
  // helpers
  DropShadow, Gradient, helpers
} = require('rumble-charts');


// const exampleSleepData = [ 
//   { user_id: 1, date_performed: '06/24/2016', duration: 7.6, quality: 12 },
//   { user_id: 1, date_performed: '06/25/2016', duration: 8.1, quality: 12 },
//   { user_id: 1, date_performed: '06/26/2016', duration: 5.8, quality: 9.6 },
//   { user_id: 1, date_performed: '06/27/2016', duration: 5.7, quality: 7.7 },
//   { user_id: 1, date_performed: '06/28/2016', duration: 7.3, quality: 9.2 },
//   { user_id: 1, date_performed: '06/29/2016', duration: 7.9, quality: 11.1 },
//   { user_id: 1, date_performed: '06/30/2016', duration: 5.6, quality: 8.9 } 
// ];

// const durationData = exampleSleepData.map(s => s.duration);

// const qualityData = exampleSleepData.map(s => s.quality);

class SleepChart extends Component {
  constructor(props) {
    super(props);
    const sleepData = [];
    console.log('inside sleep chart')
  }

  componentWillReceiveProps(nextProps) {
    console.log('sleep', nextProps);
    this.sleepData = nextProps.activities.data;
  }

  render() {
    if(this.sleepData) { 
      this.durationData = this.sleepData[0].slice(-7).map(s => parseInt(s.duration));
      this.qualityData = this.sleepData[0].slice(-7).map(s => parseInt(s.quality));

      console.log('this is sleep data', this.durationData);
      console.log('this is sleep with map data', this.sleepData);
    }  
    const series = [{
        data: this.durationData
    }, {
        data: this.qualityData
    }];
    console.log('this is duration', this.sleepData);

    return (
      <div className="profile-chart-container">
      <div>
        <Chart
          className="profile-chart" 
          width={300} height={200} series={series} minY={0}
          scaleX={{paddingStart: 0, paddingEnd: 0}}
          scaleY={{paddingTop: 10}}>
          <Transform method='stack'>
            <Lines asAreas={true} />
          </Transform>
        </Chart>
        </div>
      </div>

    );
  }
}

export default SleepChart;