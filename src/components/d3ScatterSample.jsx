import { useState, useRef, useEffect } from 'react'
import * as d3 from 'd3'
import Card from './card'

export default function D3Scatter() {
  const source = "https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/cyclist-data.json"

  const [data, setData] = useState([])
  const svgRef = useRef()
  const tooltipRef = useRef()

  fetch(source)
    .then((response) => response.json())
    .then((data) => setData(data));

  let xScale, yScale;
  const width = 600
  const height = 400
  const padding = 40

  useEffect(() => {
    //svg
    const svg = d3.select(svgRef.current)
    const tooltip = d3.select(tooltipRef.current)
    
    svg.attr('width', width)
    svg.attr('height', height)

    //scaling
    xScale = d3.scaleLinear()
      .domain([d3.min(data, (item) => { return item['Year'] - 1}), 
            d3.max(data, (item) => { return item['Year'] + 1})])
      .range([padding, width-padding])
  
    yScale = d3.scaleTime()
      .domain([d3.min(data, (item) => { return new Date(item['Seconds'] * 1000)}), 
              d3.max(data, (item) => { return new Date(item['Seconds'] * 1000)})])
      .range([padding, height-padding])

    //axes
    const xAxis = d3.axisBottom(xScale)
      .tickFormat(d3.format('d'))
      
    svg.append('g')
      .call(xAxis)
      .attr('id', 'x-axis')
      .attr('transform', `translate(0, ${height-padding})`)
      .attr("class", "font-ubuntu text-md");

    const yAxis = d3.axisLeft(yScale)
      .tickFormat(d3.timeFormat('%M:%S'))
    
    svg.append('g')
      .call(yAxis)
      .attr('id', 'y-axis')
      .attr('transform', `translate(${padding}, 0)`)
      .attr("class", "font-ubuntu text-md");

    //data
    svg.selectAll('circle')
      .data(data)
      .enter()
      .append('circle')
      .attr('r', 8)
      .attr('class', 'dot')
      .attr('data-xvalue', (item) => { return item['Year'] } )
      .attr('data-yvalue', (item) => { return new Date(item['Seconds'] * 1000) } )
      .attr('cx', (item) => { return xScale(item['Year']) })
      .attr('cy', (item) => { return yScale(new Date(item['Seconds']*1000)) })
      .attr('class', (item) => { return item['Doping'] !== '' ? 'fill-berry hover:fill-lavender' : 'fill-grass hover:fill-lavender' })
      .on('mouseover', (x, item) => { 
        let name = `${item['Name']} - ${item['Time']} in ${item['Year']}`
        let dope = item['Doping'] === '' ? 'No Allegations' : `${item['Doping']}`
        tooltip.append('div').text(name).attr('data-name', item['Name'])
        tooltip.append('div').text(dope)
      })
      .on('mouseleave', (x, item) => { 
        tooltip.text('')
        .attr('data-year', null)
      })

  }, [data])

  return (
    <Card>
      <div className="px-8 py-4 flex flex-col">
        <div className="">D3 scatterplot with competitive cyclist data</div>
        <div className="mb-2 text-sm font-thin">project idea & sample data from <a target='_blank' href={source} className='underline text-moss'>freeCodeCamp</a></div>
        <Card id="legend" className="p-2 text-sm font-thin self-end">
          <span className='text-berry'>Red = Doping Allegation </span> | <span className='text-grass'>Green = No Doping Allegation</span>
        </Card>
        <svg ref={svgRef}/>
        <div ref={tooltipRef} className='h-14 py-2 px-4 bg-lavender bg-opacity-50 text-sm'/>
      </div>
    </Card>
  );
}
