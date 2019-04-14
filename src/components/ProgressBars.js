import * as d3 from "d3"
import React from 'react'


export class ProgressBars extends React.Component {


  componentDidMount(){
    const {data} = this.props
    const svg = d3.select(`#svg-${this.props.cardTile}`).attr('transform', 'translate(0, 10)')
    const formatValue = d3.format(".0f");
    const fullBarWidth = 150

    svg.selectAll('text')
    .data(data)
    .enter()
    .append('text')
    .attr('width', '30px')
    .attr('height', '20px')
    .text(d=>
      `${d.title}: 0`)
    .attr('x', '220px')
    .attr('y', (d, i)=>  (30 * i) + 15)
    .attr('fill', 'rgb(211, 101, 67)')
    .attr('text-anchor', 'end')

  svg.selectAll('text').transition().duration(2000).tween("text", d=>{
    var i = d3.interpolate(0, d.value);
    return function(t) {
      d3.select(this)
        .text(d=>
          `${d.title}:
        ${formatValue(i(t))}`)
  }})
  const progress = svg
    .selectAll('.progressBars')
    .data(data)
    .enter()
    .append('rect')
    .attr('class', 'progressBars')
    .attr('fill', 'white')
    .attr('stroke', 'rgb(211, 101, 67)')
    .attr('stroke-width', '2px')
    .attr('height', '10px')
    .attr('rx', 5)
    .attr('ry', 5)
    .attr("width", 0)
    .attr('y', (d, i)=>  30 * i)
    .transition()
    .duration(1000)
    .attr("width", (d)=> {
      const multiple = fullBarWidth/d.fullBarValue
      return d.value * multiple
    })
    .attr('y', (d, i)=>30 * i)
    .attr('transform', 'translate(5, 5)')



  }

  render(){
    const {cardTile} = this.props
  return (
    <div>
      <svg id={`svg-${cardTile}`}></svg>
</div>
  )
}
}



