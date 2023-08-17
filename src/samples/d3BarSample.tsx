import { useState, useRef, useEffect } from 'react'
import * as d3 from 'd3'
import Card from '../components/card'
import Button from '../components/button';

export default function D3Bar() {
  
  const h: number = 200;
  const w: number = 500;
  const padding: number = 30;
  const initialData: number[] = [35,5,15,60,20,40,10,75,60,32];
  const randomData: number[] = [...Array(10)].map(element=>~~(Math.random()*125)); //
  
  const [dataSet, setData] = useState<number[]>(initialData);
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect( () => {
    const maxValue = Math.max(...initialData);
    const highestYValue = h - maxValue+padding;
    const svg = d3.select(svgRef.current)
        .attr('width', w)
        .attr('height', h);

    const xScale = d3.scaleBand()
      //@ts-ignore
      .domain(dataSet.map((el, index) => index))
      .range([padding, w-padding])
      .padding(0.5); 

    const colorScale = d3.scaleLinear()
      .domain([30,~~(highestYValue/2),highestYValue])
      //@ts-ignore
      .range(['#81171b', '#D2A04A', '#ad2e24', '#c75146', '#ce796b']);

    const yScale = d3.scaleLinear()
      .domain([0,highestYValue])
      .range([h-padding, 0]);  

    const xAxis = d3.axisBottom(xScale)
      .ticks(dataSet.length);
   
    svg.select(".x-axis")
      .style('transform', `translateY(${h-padding}px)`)
      //@ts-ignore
      .call(xAxis)
      .attr("class", "font-ubuntu text-md text-maple");

    const yAxis = d3.axisLeft(yScale);
    svg.select(".y-axis")
      .style('transform', `translateX(${padding}px)`)
      //@ts-ignore
      .call(yAxis)
      .attr("class", "font-ubuntu text-md text-wood");

    svg.selectAll(".bar")
      .data(dataSet)
        .join('rect')
          .attr('class','bar')
          .attr('transform','scale(1, -1)')
          //@ts-ignore
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
        <div className="mb-5">D3 bar chart with random data</div>
        <svg ref={svgRef}>
          <g className="x-axis"/>
          <g className="y-axis"/>
        </svg>
        <br/>
        <div className="flex items-center justify-around">
            <Button small color="apple" onClick={ () => setData(dataSet.map( value => value+ 5))}> Increase </Button>
            <Button small onClick={() => setData(randomData)}> Random </Button>
            <Button small color="leaf" onClick={() => setData(initialData.map(value => value ))}> Reset </Button>
        </div>
      </div>
    </Card>
  );
}