"use client"

import { useState, useRef, useEffect, Ref } from 'react'
import * as d3 from 'd3'

import Card from '../../components/card'

export default function D3PieSample() {
  const [data] = useState<number[]>([55, 20, 30, 15, 15])

  const svgRef1 = useRef(null)
  const svgRef2 = useRef(null)

  const width: number = 250
  const height: number = 250
  const outerRadius: number = width/2

  const drawPie = (innerRadius:number, ref:null) => {

    const svg = d3.select(ref)
    .attr("width", width)
    .attr("height", height)
    // pie layout 
    const pie = d3.pie()
    const piedata = pie(data)
    // pie groups
    const arcs = svg.selectAll("g")
          .data(piedata)
          .enter()
          .append("g")
          .attr("transform", "translate(" + outerRadius + "," + outerRadius + ")")
    // create arc 
    const arc: any | d3.DefaultArcObject = d3.arc()
          .innerRadius(innerRadius)
          .outerRadius(outerRadius)
    // colors
    const color = d3.scaleLinear()
      .domain([0, 5])
      //@ts-ignore
      .range(['#81171b', '#D2A04A', '#ad2e24', '#c75146', '#ce796b']);
    // draw arc paths
    arcs.append("path")
      .transition()
      .delay(100) 
      .duration(1000) 
      .attr("d", arc)
      .attr('stroke', 'white')
      .attr('stroke-width', 1)
      .attr("fill", function(d, i) { return color(i) })
      .attrTween('d', function(d) {
        let i = d3.interpolate(d.startAngle+0.1, d.endAngle);
        return function(t) {
          d.endAngle = i(t); 
          return arc(d)
        }
      }); 
    // labels
    arcs.append("text")
    .attr("transform", function(d) {
      return "translate(" + arc.centroid(d) + ")"
    })
    .attr("text-anchor", "end")
    .attr("class", "font-semibold text-lg")
    .attr("fill", 'white')
    .transition()
	  .delay(1000)
    .text(function(d) {return d.value})
  }

  useEffect(() => {
    drawPie(0, svgRef1.current);
    drawPie(75, svgRef2.current);
  }, [])

  return(
    <Card>
      <div className="mb-5">D3 Pie and Donut with random simple data</div>
       <div className="flex">
        <svg ref={svgRef1} className="mr-5 shadow-md rounded-full"/>
        <svg ref={svgRef2} className="mr-5 shadow-md rounded-full"/>
      </div>
    </Card>
  )
}
