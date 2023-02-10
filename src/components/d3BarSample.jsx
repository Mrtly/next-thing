import { useState, useRef, useEffect } from 'react'
import * as d3 from 'd3'
import Card from './card'
import Button from './button';

export default function D3Bar() {
  
  const h = 200;
  const w = 500;
  const padding = 30;
  const initialData = [35,5,15,60,20,40,10,75,60,32];
  const randomData = [...Array(10)].map(element=>~~(Math.random()*125)); //
  
  const [dataSet, setData] = useState(initialData);
  const svgRef = useRef();

  useEffect( () => {
    const maxValue = Math.max(...initialData);
    const highestYValue = h - maxValue+padding;
    const svg = d3.select(svgRef.current)
        .attr('width', w)
        .attr('height', h);

    const xScale = d3.scaleBand()
      .domain(dataSet.map((el, index) => index))
      .range([padding, w-padding])
      .padding(0.5); 

    const colorScale = d3.scaleLinear()
      .domain([30,~~(highestYValue/2),highestYValue])
      .range(["green","orange","maroon"]);

    const yScale = d3.scaleLinear()
      .domain([0,highestYValue])
      .range([h-padding, 0]);  

    const xAxis = d3.axisBottom(xScale)
      .ticks(dataSet.length);
   
    svg.select(".x-axis")
      .style('transform', `translateY(${h-padding}px)`)
      .call(xAxis)
      .attr("class", "font-ubuntu text-md text-moss");

    const yAxis = d3.axisRight(yScale);
    svg.select(".y-axis")
      .style('transform', `translateX(${w-padding}px)`)
      .call(yAxis)
      .attr("class", "font-ubuntu text-md text-goldleaf");

    svg.selectAll(".bar")
      .data(dataSet)
        .join('rect')
          .attr('class','bar')
          .attr('transform','scale(1, -1)')
          .attr('x', (val, index) => xScale(index))
          .attr('y', -h+padding)
          .attr('width', xScale.bandwidth()) 
          .transition()
          .attr('fill',colorScale)  
          .attr('height',val => h - yScale(val) - padding);  

  },[dataSet,initialData,randomData]);

  return (
    <Card>
      <div className="px-8 py-4">
        <div className="mb-5">D3 bar chart</div>
        <svg ref={svgRef}>
          <g className="x-axis"/>
          <g className="y-axis"/>
        </svg>
        <br/>
        <div className="flex items-center justify-around">
            <Button color="pine" onClick={ () => setData(dataSet.map( value => value+ 5))}> Increase </Button>
            <Button onClick={() => setData(randomData)}> Random </Button>
            <Button color="wine" onClick={() => setData(initialData.map(value => value ))}> Reset </Button>
        </div>
      </div>
    </Card>
  );
}