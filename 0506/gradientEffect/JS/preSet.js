// 1. should try better data format than this.
var data = {
    "main": "all",
    "children": [
      {"city":"Pittsburgh",
       "children":[
        {"neighbor": "polish hill", "attendee": 10, "names":["james"] },
        {"neighbor": "college town", "attendee": 16 ,"names":["james"]},
        {"neighbor": "prospect hill", "attendee": 4 ,"names":["james"]}
       ]},
       {"city":"New York",
       "children":[
        {"neighbor": "alignton", "attendee": 4,"names":["james"]},
        {"neighbor": "kepsbay", "attendee": 1,"names":["james"] }
       ]} ,
       {"city":"New York",
       "children":[
        {"neighbor": "lincon", "attendee": 4,"names":["james"]},
        {"neighbor": "williamsburg", "attendee": 1,"names":["james"] },
        {"neighbor": "downtown", "attendee": 8,"names":["james"]},
        {"neighbor": "uptown", "attendee": 1,"names":["james"] }
       ]}   
    ]
  };

  /*
  var data = {
    "city": "Pittsburgh",
    "children": [
      { "neighbor": "polish hill", "attendee": 12 },
      { "neighbor": "college town", "attendee": 2 },
      { "neighbor": "downtown", "attendee": 2 },
      { "neighbor": "prospect hill", "attendee": 1 }
    ]
  };
  */

  var   color = d3.scale.category20();

  var treemap =
    d3.layout.treemap()
    .size([100, 100])
    .sticky(true)
    .value(function(d) { return d.attendee; });
  
  var div = d3.select("#bg");
  
  function position() {

    this
      .style("left", function(d) {return d.x+(Math.random()*-5)+"%"; })
      .style("top", function(d) { return d.y+(Math.random()*-5)+"%"; })
      .style("width", function(d) { return d.dx+(Math.random()*10)+"%"; })
      .style("height", function(d) { return d.dy+(Math.random()*10)+"%"; })
      .style("position", "absolute")
      .attr("id",function (d){return d.neighbor;})
      .attr("index", function(d, i) {return i;});
  }
   
  var node =
    div.datum(data).selectAll(".div")
    .data(treemap.nodes)
    .enter().append("div")
    .style("background", function(d,i) { return color(i); })
    .call(position);


