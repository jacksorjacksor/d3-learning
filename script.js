const width = 400;
const height = 600;
const widthOfBar = 30;
const maxDataItems = 10;
const maxDataValue = 50;

createRandomData = () => {
    let numDataItems = Math.floor(Math.random() * maxDataItems) + 1;
    let d = [];
    for(let i = 0; i<numDataItems; i++){
        d.push(Math.floor(Math.random()*maxDataValue)+1)
    }
    return d
}

let svg = d3
    .select('#vis')
    .append('svg')
    .attr("width", width)
    .attr("height", height);

svg.selectAll('.bar')
    .data(createRandomData())
    .join(function(enter){
        enter.append('rect')
        .attr('width', widthOfBar)
        .attr('height', (d) => d*10 + 'px')
        .attr('fill', 'red')
        .attr('x', (d, i) => i*widthOfBar + i + 'px')
        .attr('y', (d) => height - (d*10) + 'px')
    })
    