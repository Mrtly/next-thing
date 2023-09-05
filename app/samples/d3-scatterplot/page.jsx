"use client";

import { useState, useRef, useEffect } from "react";
import * as d3 from "d3";
import Card from "../../components/card";

export default function D3Scatter() {
  const source =
    "https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/cyclist-data.json";

  const [data, setData] = useState([]);
  const svgRef = useRef();
  const tooltipRef = useRef();

  let xScale, yScale;
  const width = 600;
  const height = 400;
  const padding = 40;

  const drawViz = () => {
    //svg
    const svg = d3.select(svgRef.current);
    const tooltip = d3.select(tooltipRef.current);

    svg.attr("width", width);
    svg.attr("height", height);

    //scaling
    xScale = d3
      .scaleLinear()
      .domain([
        d3.min(data, (item) => {
          return item["Year"] - 1;
        }),
        d3.max(data, (item) => {
          return item["Year"] + 1;
        }),
      ])
      .range([padding, width - padding]);

    yScale = d3
      .scaleTime()
      .domain([
        d3.min(data, (item) => {
          return new Date(item["Seconds"] * 1000);
        }),
        d3.max(data, (item) => {
          return new Date(item["Seconds"] * 1000);
        }),
      ])
      .range([padding, height - padding]);

    //axes
    const xAxis = d3.axisBottom(xScale).tickFormat(d3.format("d"));

    svg
      .append("g")
      .call(xAxis)
      .attr("id", "x-axis")
      .attr("transform", `translate(0, ${height - padding})`)
      .attr("class", "font-ubuntu text-md");

    const yAxis = d3.axisLeft(yScale).tickFormat(d3.timeFormat("%M:%S"));

    svg
      .append("g")
      .call(yAxis)
      .attr("id", "y-axis")
      .attr("transform", `translate(${padding}, 0)`)
      .attr("class", "font-ubuntu text-md");

    //data
    svg
      .selectAll("circle")
      .data(data)
      .enter()
      .append("circle")
      .attr("r", 8)
      .attr("class", "dot")
      .attr("data-xvalue", (item) => {
        return item["Year"];
      })
      .attr("data-yvalue", (item) => {
        return new Date(item["Seconds"] * 1000);
      })
      .attr("cx", (item) => {
        return xScale(item["Year"]);
      })
      .attr("cy", (item) => {
        return yScale(new Date(item["Seconds"] * 1000));
      })
      .attr("class", (item) => {
        return item["Doping"] !== ""
          ? "fill-yin hover:fill-violet"
          : "fill-gold hover:fill-violet";
      })
      .on("mouseover", (x, item) => {
        let name = `${item["Name"]} - ${item["Time"]} in ${item["Year"]}`;
        let dope =
          item["Doping"] === "" ? "No Allegations" : `${item["Doping"]}`;
        tooltip.append("div").text(name).attr("data-name", item["Name"]);
        tooltip.append("div").text(dope);
      })
      .on("mouseleave", (x, item) => {
        tooltip.text("").attr("data-year", null);
      });
  };

  useEffect(() => {
    fetch(source)
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  drawViz();

  return (
    <Card>
      <div className="flex flex-col px-8 py-4">
        <div className="">D3 scatterplot with competitive cyclist data</div>
        <Card id="legend" className="mt-2 self-end p-2 text-sm font-thin">
          <span className="text-yin">Purple = Doping Allegation </span> |{" "}
          <span className="text-gold">Gold = No Doping Allegation</span>
        </Card>
        <svg ref={svgRef} />
        <div
          ref={tooltipRef}
          className="bg-ground h-14 bg-opacity-25 px-4 py-2 text-sm"
        />
      </div>
      <div className="text-sm font-thin">
        project idea &{" "}
        <a target="_blank" href={source} className="text-coral underline">
          sample data
        </a>{" "}
        from freeCodeCamp
      </div>
    </Card>
  );
}
