import * as d3 from "d3"
import React from 'react'


export class ProgressBars extends React.Component {


  componentDidMount(){
    const {data} = this.props
    const svg = d3.select(`#svg-${this.props.cardTile}`)
    const fullBarWidth = 150

    svg
      .selectAll('rect')
      .data(data)
      .enter()
      .append('rect')
      .attr('width', fullBarWidth)
      .attr('height', '15px')
      .attr('fill', 'grey')
      .attr('rx', 10)
      .attr('ry', 10)
      .attr('y', (d, i)=>  20 * i)


  const progress = svg
    .selectAll('.progressBars')
    .data(data)
    .enter()
    .append('rect')
    .attr('class', 'progressBars')
    .attr('fill', 'blue')
    .attr('height', '15px')
    .attr('rx', 10)
    .attr('ry', 10)
    .attr("width", 0)
    .attr('y', (d, i)=>  20 * i)
    .transition()
    .duration(1000)
    .attr("width", (d)=> {
      const multiple = fullBarWidth/d.fullBarValue
      return d.value * multiple
    })
    .attr('y', (d, i)=>20 * i)

    var format = d3.format(",d");
    d3.select("h1")
    .transition()
      .duration(2500)
      .on("start", function repeat() {
        d3.active(this)
            .tween("text", function() {
              var that = d3.select(this),
                  i = d3.interpolateNumber(that.text().replace(/,/g, ""), Math.random() * 1e6);
              return function(t) { that.text(format(i(t))); };
            })
          .transition()
            .delay(1500)
            .on("start", repeat);
      });

  }

  render(){
    const {cardTile} = this.props
  return (
    <div>
    <h1></h1>

      <svg id={`svg-${cardTile}`}></svg>
</div>
  )
}
}



