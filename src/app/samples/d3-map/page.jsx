"use client"

import { useState, useRef, useEffect } from 'react'
import * as d3 from 'd3'
import * as topojson from "topojson-client";

import Card from '../../components/card'

export default function D3Map() {
  const eduDataUrl = "https://cdn.freecodecamp.org/testable-projects-fcc/data/choropleth_map/for_user_education.json"
  const countyDataUrl = "https://cdn.freecodecamp.org/testable-projects-fcc/data/choropleth_map/counties.json"
  
  const width = 1000
  const height = 600

  const [countyData, setCountyData] = useState([])
  const [educationData, setEducationData] = useState([])
  const svgRef = useRef()
  const tooltipRef = useRef()

  const svg = d3.select(svgRef.current)
  svg.attr('width', width)
  svg.attr('height', height)

  const tooltip = d3.select(tooltipRef.current)
    .style('visibility', 'hidden')

  const drawMap = () => {
  
    svg.selectAll('path')
      .data(countyData)
      .enter()
      .append('path')
      .attr('d', d3.geoPath()) //draws the map
      .attr('class', 'county')
      .attr('fill', (countyItem) => {
        //match the id to the fips code
          let county = educationData.find((item) => { return item.fips === countyItem.id})
          let percentage = county.bachelorsOrHigher;
  
          if (percentage <= 15) {
            return '#4d908e'
          } else if (percentage <= 30) {
            return '#00798c'
          } else if (percentage <= 45) {
            return '#30638e'
          } else {
            return '#003d5b'
          }
       })
      .attr('data-fips', (countyItem) => {
        return countyItem.id;
      })
      .attr('data-education', (countyItem) => {
         let county = educationData.find((item) => {
           return item.fips === countyItem.id
         })
        return county.bachelorsOrHigher;
      })
       .on('mouseover', (e, countyDataItem)=> {
          tooltip.transition()
            .style('visibility', 'visible')
  
          let id = countyDataItem['id']
          let county = educationData.find((item) => {
            return item['fips'] === id
          })
          tooltip.text(county['area_name'] + ', ' + 
                       county['state'] + ' : ' + county['bachelorsOrHigher'] + '%')
  
          tooltip.attr('data-education', county['bachelorsOrHigher'] )
          .style('left', e.pageX + 10 + 'px')
          .style('top', e.pageY - 28 + 'px');
        })
       .on('mouseout', (countyDataItem) => {
          tooltip.transition()
            .style('visibility', 'hidden')
        })
   
  }
  
  useEffect(() => {
    d3.json(countyDataUrl).then(
      (data, error) =>{
        if (error) {
          console.log(error)
        } else {
          // turn topojson to GEOjson
          let cData = topojson.feature(data, data.objects.counties).features;
          setCountyData(cData)
          // console.log(countyData)
        }
      }
    )
    //the county ids will match the county fips number
    d3.json(eduDataUrl).then(
      (data, error) =>{
        if (error) {
        console.log(error)
      } else {
        let eData = data;
        setEducationData(eData)
        // console.log(educationData)
      }
    }
    )
  }, []);

  drawMap()
 
  return (
    <Card>
      <div className="mb-2 ">D3 map with US higher education data</div>
      <div className="text-sm font-thin">shows % of people with a Bachelors or higher education per county</div>
      <svg ref={svgRef}/>
      <div ref={tooltipRef} className='absolute py-3 px-6 bg-white font-medium tracking-wider'/>
      <div className="mt-2 text-sm font-thin">project idea & sample data (<a target='_blank' href={countyDataUrl} className='underline text-coral'>counties</a>, <a target='_blank' href={eduDataUrl} className='underline text-coral'>education</a>) from freeCodeCamp</div>
    </Card>
  );
}
