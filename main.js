function loadD3Code(ele) {
    console.log("load ele:", ele);
    // Load and visualise the data
    d3.csv("cleaned_5250_map.csv").then(function (data) {
        // Data is now loaded and available for use
        const mydata = processData(data);

        // console.log(d3.count(mydata, d => d.radius));

        createStars(ele, mydata);
        createMoon(ele);
        createClouds(ele);

        changeYear(null, ele, 1992);
    });
}

// Process the data
function processData(data, num = null) {
    // Get min and max distance for normalization
    const distances = data.map((d) => +d.distance);
    const minDistance = Math.min(...distances);
    const maxDistance = Math.max(...distances);
    const minDiscoveryYear = Math.min(...data.map((d) => +d.discovery_year));
    const maxDiscoveryYear = Math.max(...data.map((d) => +d.discovery_year));
    const { minSpeed, maxSpeed } = calculateSpeedRange(30, 120);

    console.log("minDistance", minDistance);
    console.log("maxDistance", maxDistance);

    document.getElementById("customRange2").min = minDiscoveryYear;
    document.getElementById("customRange2").max = maxDiscoveryYear;

    console.log("slider value", $("#customRange2").val());

    console.log("min discovery_year", minDiscoveryYear);
    console.log("max discovery_year", maxDiscoveryYear);

    // Process each row
    return (num != null ? data.slice(0, num) : data).map((d) => ({
        name: d.name,
        distance: +d.distance,
        type: d.planet_type,
        radius: calculateRadius(+d.distance, minDistance, maxDistance, 5, 15),
        color: getGradientIdByType(d.planet_type),
        // rotationspeed: calculateRotationSpeed(+d.distance, minDistance, maxDistance, 700000, 1000000),
        rotationspeed: calculateRotationSpeed(
            +d.distance,
            minDistance,
            maxDistance,
            maxSpeed,
            minSpeed
        ),
        discovery_year: d.discovery_year,
        currentAngle: 0,
        stellar_magnitude: d.stellar_magnitude,
    }));
}

function createStars(ele, mydata) {
    // Create stars
    var stars = ele.append("g");
    console.log("stars", stars);

    stars
        .selectAll(".star")
        .data(mydata)
        .enter()
        .append("circle")
        // .attr("class", "star")
        .attr("class", (d) => {
            // console.log(d);
            return "star year-" + d.discovery_year;
        })
        .attr("year", (d) => d.discovery_year)
        .attr("speed", (d) => d.rotationspeed)
        .attr("cx", (d) => {
            return getRandomInt(
                -document.getElementById("scene").clientHeight * 4,
                document.getElementById("scene").clientHeight * 4
            );
        }) // Example positions, adjust as needed
        .attr("cy", (d) => {
            return getRandomInt(
                -document.getElementById("scene").clientWidth * 2,
                document.getElementById("scene").clientWidth * 2
            );
        }) // Adjust as needed
        .attr("r", (d) => d.radius)
        .style("fill", (d) => `url(#${getGradientIdByType(d.type)})`)
        .style("opacity", 0)
        .each(function (d) {
            rotateStar(d3.select(this), d.rotationspeed);
        });

    // addAnimationToStars(stars);
    addTooltip(stars);
}

function addTooltip(ele) {
    // Add tooltip
    let tooltip = d3
        .select("body")
        .append("div")
        .attr("class", "tooltip")
        .style("z-index", "10")
        .style("opacity", 0);

    ele.selectAll(".star")
        .on("mouseover", function (event, d) {
            console.log("Mouseover on star"); // For debugging

            // Check if the planet's opacity is not 0
            if (d3.select(this).style("opacity") !== "0") {
                tooltip.transition().duration(200).style("opacity", 0.9); // Show tooltip with fade-in
                tooltip
                    .html(
                        "<p>Name: " +
                            d.name +
                            "</p>" +
                            "<p>Discovery Year: " +
                            d.discovery_year +
                            "</p>" +
                            "<p>Distance: " +
                            d.distance +
                            " ly</p>" +
                            "<p>Planet Type: " +
                            d.type +
                            "</p>"
                    )
                    .style("left", event.pageX + 20 + "px")
                    .style("top", event.pageY + 20 + "px");
            }
        })
        .on("mousemove", function (event) {
            tooltip
                .style("left", event.pageX + 5 + "px")
                .style("top", event.pageY + 5 + "px");
        })
        .on("mouseout", function () {
            tooltip.transition().duration(500).style("opacity", 0);
        });
}

function changeYear(e, ele, year = null) {
    let yearText = $("#yearText");
    let yearSubText = $("#yearSubText");

    let value = year || $("#customRange2").val();
    $("#year").html(value);
    console.log("slider value changeYear", $("#customRange2").val());
    $("#customRange2").val(value);
    console.log("slider value new changeYear", $("#customRange2").val());

    console.log("changeYear ele", e, ele, year);
    console.log("value", value);

    // var dataFilter = mydata.filter(function(d){return parseInt(d.discovery_year) <= document.getElementById('customRange2').value});
    if (value == 1992) {
        yearText.fadeOut(1000, function () {
            yearText.html("1992 had just 2 stars!").fadeIn(1000);
        });
        yearSubText.fadeOut(1000, function () {
            yearSubText
                .html(
                    "Let's move on to some other year, or you can wait to catch it up in the sky!"
                )
                .fadeIn(1000);
        });
    } else if (value == 1999) {
        yearText.fadeOut(1000, function () {
            yearText.html("Hubble Space Telescope!").fadeIn(1000);
        });
        yearSubText.fadeOut(1000, function () {
            yearSubText
                .html(
                    "The Hubble Space Telescope made its first direct observation of an exoplanet through transit photometry."
                )
                .fadeIn(1000);
        });
    } else if (value == 2004) {
        yearText.fadeOut(1000, function () {
            yearText.html("Kepler Mission!").fadeIn(1000);
        });
        yearSubText.fadeOut(1000, function () {
            yearSubText
                .html(
                    "NASA's Kepler Space Telescope was launched, dedicated to the search for exoplanets using the transit method."
                )
                .fadeIn(1000);
        });
    } else if (value == 2005) {
        yearText.fadeOut(1000, function () {
            yearText.html("First Earth-sized Exoplanet!").fadeIn(1000);
        });
        yearSubText.fadeOut(1000, function () {
            yearSubText
                .html(
                    "The discovery of the first Earth-sized exoplanet, Gliese 876 d, was announced."
                )
                .fadeIn(1000);
        });
    } else if (value == 2010) {
        yearText.fadeOut(1000, function () {
            yearText.html("Kepler's First Exoplanet Catalog!").fadeIn(1000);
        });
        yearSubText.fadeOut(1000, function () {
            yearSubText
                .html(
                    "Kepler released its first catalog of exoplanet candidates, including many potentially habitable planets."
                )
                .fadeIn(1000);
        });
    } else if (value == 2011) {
        yearText.fadeOut(1000, function () {
            yearText.html("Kepler-22b!").fadeIn(1000);
        });
        yearSubText.fadeOut(1000, function () {
            yearSubText
                .html(
                    "The first exoplanet within the habitable zone of a sun-like star, Kepler-22b, was discovered."
                )
                .fadeIn(1000);
        });
    } else if (value == 2014) {
        yearText.fadeOut(1000, function () {
            yearText.html("TESS Mission!").fadeIn(1000);
        });
        yearSubText.fadeOut(1000, function () {
            yearSubText
                .html(
                    "NASA's Transiting Exoplanet Survey Satellite (TESS) was launched, continuing the search for exoplanets through the transit method."
                )
                .fadeIn(1000);
        });
    } else if (value == 2015) {
        yearText.fadeOut(1000, function () {
            yearText.html("Water Vapor Detected!").fadeIn(1000);
        });
        yearSubText.fadeOut(1000, function () {
            yearSubText
                .html(
                    "The Hubble Space Telescope detected water vapor in the atmosphere of an exoplanet, HAT-P-11b, marking a significant advancement in atmospheric characterization."
                )
                .fadeIn(1000);
        });
    } else if (value == 2016) {
        yearText.fadeOut(1000, function () {
            yearText.html("Proxima Centauri b!").fadeIn(1000);
        });
        yearSubText.fadeOut(1000, function () {
            yearSubText
                .html(
                    "Proxima Centauri b, an exoplanet in the habitable zone of the closest known star to the Sun, was discovered."
                )
                .fadeIn(1000);
        });
    } else if (value == 2020) {
        yearText.fadeOut(1000, function () {
            yearText.html("James Webb Space Telescope (JWST)!").fadeIn(1000);
        });
        yearSubText.fadeOut(1000, function () {
            yearSubText
                .html(
                    "The JWST, one of the most advanced space telescopes, was scheduled for launch."
                )
                .fadeIn(1000);
        });
    } else if (value == 2021) {
        yearText.fadeOut(1000, function () {
            yearText.html("Exoplanet Census").fadeIn(1000);
        });
        yearSubText.fadeOut(1000, function () {
            yearSubText
                .html(
                    "The total number of confirmed exoplanets crossed the 4,000 mark!"
                )
                .fadeIn(1000);
        });
    } else if (value == 2022) {
        yearText.fadeOut(1000, function () {
            yearText.html("TESS Extended Mission!").fadeIn(1000);
        });
        yearSubText.fadeOut(1000, function () {
            yearSubText
                .html(
                    "NASA extended the TESS mission to continue its survey of the sky for exoplanets."
                )
                .fadeIn(1000);
        });
    } else {
        yearText.fadeOut(1000, function () {
            yearText.html("");
        });
        yearSubText.fadeOut(1000, function () {
            yearSubText.html("");
        });
    }

    // ele.selectAll(".star").style("opacity", function (d) {
    //     return parseInt(d.discovery_year) <= value ? 1 : 0;
    // });

    ele.selectAll(".star").each(function (d) {
        let s = d3.select(this);
        // console.log(s.attr("year"));
        if (parseInt(s.attr("year")) <= value) {
            // console.log(s.attr("year"), "<=", value);
            s.transition()
                .duration(1000)
                .style("opacity", 1)
                .transition()
                .delay(1000);

            //   rotateStar(s, parseFloat(s.attr("speed")));
        } else {
            // console.log(s.attr("year"), "!<=", value);
            s.transition()
                .duration(1000)
                .style("opacity", 0)
                .transition()
                .delay(1000);

            //   rotateStar(s, parseFloat(s.attr("speed")));
        }
    });
}
