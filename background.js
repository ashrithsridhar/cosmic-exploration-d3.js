function svgDefs(ele) {
  // Define a radial gradient for the halo
  var defs = ele.append("defs");

  var gradientGasGiant = defs
    .append("radialGradient")
    .attr("id", "gradientGasGiant");
  gradientGasGiant
    .append("stop")
    .attr("offset", "0%")
    .attr("stop-color", "#FDE293");
  gradientGasGiant
    .append("stop")
    .attr("offset", "100%")
    .attr("stop-color", "#BA9B48");

  // Gradient for Terrestrial planets - often have rocky, grey or reddish surfaces
  var gradientTerrestrial = defs
    .append("radialGradient")
    .attr("id", "gradientTerrestrial");
  gradientTerrestrial
    .append("stop")
    .attr("offset", "0%")
    .attr("stop-color", "#D6D6D6");
  gradientTerrestrial
    .append("stop")
    .attr("offset", "100%")
    .attr("stop-color", "#A0A0A0");

  // Gradient for Neptune-like planets - known for their blue color
  var gradientNeptuneLike = defs
    .append("radialGradient")
    .attr("id", "gradientNeptuneLike");
  gradientNeptuneLike
    .append("stop")
    .attr("offset", "0%")
    .attr("stop-color", "#8ED6FF");
  gradientNeptuneLike
    .append("stop")
    .attr("offset", "100%")
    .attr("stop-color", "#004CB3");

  // Gradient for Unknown type planets - a neutral or generic appearance
  var gradientUnknown = defs
    .append("radialGradient")
    .attr("id", "gradientUnknown");
  gradientUnknown
    .append("stop")
    .attr("offset", "0%")
    .attr("stop-color", "#CCCCCC");
  gradientUnknown
    .append("stop")
    .attr("offset", "100%")
    .attr("stop-color", "#666666");

  var planetGradient = defs
    .append("radialGradient")
    .attr("id", "planetGradient")
    .attr("cx", "50%")
    .attr("cy", "50%")
    .attr("r", "50%");

  planetGradient
    .append("stop")
    .attr("offset", "0%")
    .attr("stop-color", "#fff"); // Lighter color at the center

  planetGradient
    .append("stop")
    .attr("offset", "100%")
    .attr("stop-color", "#0c0c0c"); // Darker color at the edges

  var haloGradient = defs
    .append("radialGradient")
    .attr("id", "haloGradient")
    .attr("cx", "50%") // not real percent, just a ratio
    .attr("cy", "50%")
    .attr("r", "50%");

  haloGradient
    .append("stop")
    .attr("offset", "50%")
    .attr("stop-color", "#F5F985")
    .attr("stop-opacity", 0.2);

  haloGradient
    .append("stop")
    .attr("offset", "100%")
    .attr("stop-color", "#F5F985")
    .attr("stop-opacity", 0);

  var cloudGradient = defs
    .append("linearGradient")
    .attr("id", "cloudGradient");

  cloudGradient
    .append("stop")
    .attr("offset", "0%")
    .attr("stop-color", "rgba(121, 92, 153, 0.4)");

  cloudGradient
    .append("stop")
    .attr("offset", "100%")
    .attr("stop-color", "rgba(121, 92, 153, 0.2)");
}

function createMilyWayGalaxy(ele) {
  // Milky Way Galaxy
  ele.append("path")
    .attr(
      "d",
      "M13.9162244,300.787407 L40.8937937,287.085709 L36.7965069,275.763467 L81.395636,275.763467 L132.537519,265.569263 L147.223228,252.867818 L190.473801,252.44921 L200.262123,242.944607 L228.83344,240.710563 L248.042295,227.445099 L268.354514,228.092839 L271.232294,233.691169 L290.008837,225.440187 L282.182051,219.987268 L245.409708,219.694243 L255.630342,210.901273 L277.839572,205.719348 L278.813888,193.791226 L256.243321,193.93884 L223.142405,193.93884 L209.682657,197.990524 L202.339802,208.184728 L195.797048,218.25335 L187.596022,223.413243 L158.598845,224.248256 L141.835457,224.248256 L131.621276,229.701175 L135.228179,237.764885 L128.685424,245.53557 L107.024649,254.476153 L88.1255104,253.202704 L88.1255104,261.035078 L77.8468048,263.562148 L58.2056374,262.163116 L55.3343104,255.020344 L34.4671831,252.513103 L12.0192129,250.424469 L0.94685963,246.225171 L5.04414652,238.245183 L22.659254,230.139612 L85.9187826,223.016668 L95.3393163,215.287844 L64.4451279,211.672393 L66.0969475,206.931108 L88.9772299,199.263974 L125.685049,187.818352 L224.058649,168.306817 L241.435017,176.537971 L221.800302,188.94639 L269.148162,187.274162 L276.491016,171.794482 L259.35984,165.506551 L341.034577,156.482245 L402.642286,150.341928 L431.697534,141.819953 L419.831533,127.864887 L455.313393,119.340708 L500.222238,114.328429 L527.199807,116.439094 L552.099697,114.202847 L559.442552,102.777054 L590.885196,94.4004895 L613.339618,91.4746406 L610.829627,81.4280508 L609.603667,73.6155053 L664.726694,67.869561 L680.270574,70.376802 L733.735329,74.5540683 L770.87546,65.6355167 L786.838748,55.8797492 L832.231525,47.6706279 L871.023476,45.5599627 L891.884151,31.3140747 L945.232762,20.4082371 L983.469805,15.9379453 L1038.95417,15.9379453 L1085.39224,4.63773497 L1147.97426,-1.79441263e-14 L1175.75193,7.54155193 L1199,14.664496 L1161.37594,18.8417622 L1135.55335,22.6026238 L1140.45074,31.4176251 L1125.2811,41.9246835 L1101.47812,47.6485959 L1048.3747,47.3555703 L1023.8426,55.6087557 L988.909195,62.6061174 L989.341507,71.4211186 L964.009305,75.7459993 L948.904189,73.2167262 L922.778339,78.5440626 L886.6835,85.3761843 L888.703107,98.0754263 L833.825273,108.791789 L813.02267,122.182835 L732.999753,134.862249 L676.837887,154.373783 L651.454065,159.720949 L597.556998,171.294356 L594.375955,181.885136 L553.932185,183.242307 L501.996654,190.239668 L472.50264,196.926379 L434.330122,205.029747 L401.964782,208.101007 L372.967605,206.283367 L393.460492,193.020106 L433.781666,191.618871 L487.678733,183.40975 L494.221487,175.742616 L524.444624,175.326211 L557.113228,151.762992 L599.512082,153.726043 L611.378083,145.642504 L599.937942,141.588617 L615.04951,135.300685 L657.506435,140.502439 L661.177863,120.429089 L698.376066,119.30105 L730.61881,119.30105 L764.139133,119.25919 L773.133807,103.341073 L788.73576,101.523434 L794.059006,106.286751 L813.267862,105.158713 L797.298121,85.3122915 L820.978504,82.9526649 L857.318535,81.4280508 L875.669218,75.8495496 L922.655743,64.5273073 L941.438739,60.6210346 L949.207453,52.4736028 L904.30506,49.8209506 L863.493501,58.3451295 L819.016968,67.4112955 L791.981327,75.9134424 L778.824842,82.0757915 L761.267806,87.2334815 L751.414961,96.7182554 L709.751683,101.043136 L684.735649,105.784421 L653.228481,101.856117 L637.6846,107.998637 L621.289,115.414606 L577.122183,123.916753 L559.442552,128.658039 L579.503126,138.01723 L542.369448,146.519377 L528.057979,153.49691 L501.932129,151.115251 L482.781346,162.541044 L461.062499,166.740342 L436.898185,163.105063 L425.090256,171.752621 L391.13762,173.843458 L344.273692,184.099351 L319.31573,197.197372 L317.296122,207.411405 L331.491447,213.115489 L386.182162,213.115489 L391.505408,226.233339 L349.474342,237.806746 L302.552342,242.255006 L282.059455,255.291337 L246.938931,255.291337 L219.470978,261.140832 L181.479127,266.298522 L147.952351,276.59848 L123.420249,288.610323 L86.5898344,289.026728 C86.5898344,289.026728 62.7287839,295.693601 48.5979836,298.240508 C34.4671833,300.787416 13.9162244,300.787407 13.9162244,300.787407 Z"
    ) // Replace with your actual path data
    .style("fill", "rgba(255,255,255,0.025)")
    .attr("transform", "translate(-400,50) scale(3, 3)")
    .transition()
    .duration(500000)
    .attrTween("transform", function() {
      return d3.interpolateString(
        "rotate(0, 200, 150)",
        "rotate(360, 200, 150)"
      );
    })
    .on("end", function repeat() {
      d3.select(this)
        .transition()
        .duration(500000)
        .attrTween("transform", function() {
          return d3.interpolateString(
            "rotate(0, 200, 150)",
            "rotate(360, 200, 150)"
          );
        })
        .on("end", repeat);
    });
}

function createMoon(ele) {
  // Moon base
  var moonBase = ele
    .append("circle")
    .attr("cx", 200)
    .attr("cy", 150)
    .attr("r", 80)
    .style("fill", "#fff985"); // Simplified color

  // Moon halo with gradient
  var moonHalo = ele
    .append("circle")
    .attr("cx", 200)
    .attr("cy", 150)
    .attr("r", 140)
    .style("fill", "url(#haloGradient)");

  // Craters on the moon
  // Coordinates and sizes need to be adjusted as per your design
  var cratersData = [
    { cx: 170, cy: 120, r: 10, fill: "rgba(132, 132, 132, 0.3)" },
    { cx: 150, cy: 160, r: 7, fill: "rgba(132, 132, 132, 0.3)" },
    { cx: 260, cy: 200, r: 22, fill: "rgba(132, 132, 132, 0.3)" },
    { cx: 130, cy: 120, r: 8, fill: "rgba(132, 132, 132, 0.3)" },
    { cx: 200, cy: 170, r: 13, fill: "rgba(132, 132, 132, 0.3)" },
    { cx: 200, cy: 100, r: 14, fill: "rgba(132, 132, 132, 0.3)" },
    { cx: 230, cy: 70, r: 15, fill: "rgba(132, 132, 132, 0.3)" },
    { cx: 180, cy: 200, r: 14, fill: "rgba(132, 132, 132, 0.3)" },
    { cx: 250, cy: 140, r: 16, fill: "rgba(132, 132, 132, 0.3)" },
  ];

  // Create craters on the moon
  var craters = ele
    .selectAll(".crater")
    .data(cratersData)
    .enter()
    .append("circle")
    .attr("class", "crater")
    .attr("cx", function(d) {
      return d.cx;
    })
    .attr("cy", function(d) {
      return d.cy;
    })
    .attr("r", function(d) {
      return d.r;
    })
    .style("fill", "rgba(132, 132, 132, 0.3)"); // Simplified color

  // Clip the crators
  ele.append("clipPath")
    .attr("id", "moonClip")
    .append("circle")
    .attr("cx", 200)
    .attr("cy", 150)
    .attr("r", 80);

  // Apply the clip path to the craters
  ele.selectAll(".crater").attr("clip-path", "url(#moonClip)");
}

function createClouds(ele) {
  var cloud1 = ele
    .append("path")
    .attr(
      "d",
      "M147.847656,161.519531 C147.847656,161.519531 101.959132,162.083219 60.5279115,161.098228 C34.9269913,160.489588 11.0279474,159.289636 0.708881557,157 C-3.22615132,139.018914 25.7376645,139.524671 37.4765625,136.964844 C12.3289474,107.476974 94.5123355,108.29523 90.515625,110.519531 C68.1184211,12.3536184 251.782072,33.8708882 263.8125,54.703125 C267.143914,-10.2615132 331.589834,1.66796877 331.589844,1.66796875 C375.95148,6.93421053 377.550771,45.2935839 377.550781,50.3359375 C420.667776,6.73684218 509.713816,68.0649671 515.921875,97.0390625 C552.793569,74.2615137 587.337171,96.6011513 590.476562,101.742187 C700.511513,75.4333882 753.184194,117.226151 764.066406,121.703125 C796.650503,97.0390635 1003.55016,167.945725 741.48602,161.708059 C706.165296,162.567434 571.975329,162.448191 571.975329,162.448191 L147.847656,161.519531 Z"
    )
    .attr("fill", "url(#cloudGradient)")
    .attr("transform", "translate(0,100) scale(0.6, 0.6)")
    .transition()
    .duration(400000)
    .attr("transform", "translate(1200,100) scale(0.8, 0.8)")
    .ease(d3.easeLinear)
    .on("end", function repeat() {
      d3.select(this)
        .attr("transform", "translate(0,100) scale(0.6, 0.6)")
        .transition()
        .duration(400000)
        .attr("transform", "translate(1200,100) scale(0.8, 0.8)")
        .ease(d3.easeLinear)
        .on("end", repeat);
    });

  var cloud2 = ele
    .append("path")
    .attr(
      "d",
      "M463.495905,137.632396 C440.200282,139.737664 179.653407,146.949836 25.7615452,137.632401 C-9.17266534,131.041118 -14.4358232,78.9975329 47.5543079,76.7730263 C52.4091403,-37.7428099 178.977006,-4.27960526 183.693289,55.9547697 C250.128322,36.1891447 241.04115,103.672697 241.04115,103.672697 C241.04115,103.672697 273.791973,93.9276316 308.565822,103.129934 C351.176841,76.9292763 379.014012,108.314967 379.014012,108.314967 C379.014012,108.314967 436.908749,99.7376645 463.49592,126.053454 C486.590084,113.224507 523.123801,139.310033 463.495905,137.632396 Z"
    )
    .attr("fill", "url(#cloudGradient)")
    .attr("transform", "translate(0,60) scale(-1.0, 1.0)")
    .transition()
    .duration(500000)
    .attr("transform", "translate(1300,60) scale(-1.2, 1.2)")
    .ease(d3.easeLinear)
    .on("end", function repeat() {
      d3.select(this)
        .attr("transform", "translate(0,60) scale(-1.0, 1.0)")
        .transition()
        .duration(500000)
        .attr("transform", "translate(1300,60) scale(-1.2, 1.2)")
        .ease(d3.easeLinear)
        .on("end", repeat);
    });

  var cloud3 = ele
    .append("path")
    .attr(
      "d",
      "M59.4465469,88.0386522 C-68.3495033,94.708063 50.1702298,57.0065783 59.4465461,59.5024671 C50.1702303,57.0065789 73.7146382,-0.106907895 111.884868,32.9523026 C125.670378,-13.8142255 191.066612,-7.86595395 203.344572,32.9523021 C229.154605,22.5822368 267.361842,29.4819079 278.122533,72.6398026 C371.806746,102.660364 178.665303,83.4786165 59.4465469,88.0386522 Z"
    )
    .attr("fill", "url(#cloudGradient)")
    .attr("transform", "translate(-800,60) scale(-1.0, 1.0)") // Starting off-screen to the left
    .transition()
    .duration(600000) // Duration of 600 seconds
    .attr("transform", "translate(1600,60) scale(-1.2, 1.2)") // Moving to the right of the viewport
    .ease(d3.easeLinear)
    .on("end", function repeat() {
      d3.select(this)
        .attr("transform", "translate(-800,60) scale(-1.0, 1.0)") // Reset to start off-screen
        .transition()
        .duration(600000)
        .attr("transform", "translate(1600,60) scale(-1.2, 1.2)") // Repeat the animation to the right
        .ease(d3.easeLinear)
        .on("end", repeat); // Repeat the animation
    });
}
