import { useState, useRef, useEffect } from 'react'
import * as d3 from 'd3'
import Card from './card'

export default function D3Line() {

  const [data, setData] = useState([...Array(10)].map(element=>~~(Math.random()*150)))
  const svgRef = useRef()
  
  useEffect(() => {
    //svg
    const w = 600
    const h = 200
    const svg = d3.select(svgRef.current)
      .attr('width', w)
      .attr('height', h)
      .attr('class', 'bg-lavender bg-opacity-50 overflow-visible');

    //scaling
    const xScale = d3.scaleLinear()
      .domain([0, data.length - 1])
      .range([0, w]);

    const yScale = d3.scaleLinear()
      .domain([0, h])
      .range([h, 0]);

    const generateScaledLine = d3.line()
      .x((d, i) => xScale(i))
      .y(yScale)
      .curve(d3.curveCardinal);
    //axes
    const xAxis = d3.axisBottom(xScale)
      .ticks(data.length)
      .tickFormat(i => i + 1);


    const yAxis = d3.axisLeft(yScale)
      .ticks(5);

    svg.append('g')
      .call(xAxis)
      .attr('transform', `translate(0, ${h})`)
      .attr("class", "font-ubuntu text-md");

    svg.append('g')
      .call(yAxis)
      .attr("class", "font-ubuntu text-md");

    //data
    svg.selectAll('.line')
      .data([data])
      .join('path') 
        .attr('d', d => generateScaledLine(d))
        .attr('fill', 'none')
        .attr('stroke-width', 3)
        .attr('stroke', '#1C1E1D');

  }, [data])

  return (
    <Card>
      <div className="px-8 py-4">
        <div className="mb-5">D3 line chart with random data</div>
        <svg ref={svgRef}></svg>
      </div>
    </Card>
  );
}
