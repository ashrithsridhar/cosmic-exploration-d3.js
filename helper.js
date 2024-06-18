// Function to map planet type to a color
function getGradientIdByType(planetType) {
    const gradients = {
        "Gas Giant": "gradientGasGiant",
        Terrestrial: "gradientTerrestrial",
        "Neptune-like": "gradientNeptuneLike",
        Unknown: "gradientUnknown",
    };
    return gradients[planetType] || "gradientUnknown"; // Default gradient if type not found
}

// Function to calculate radius based on distance (inverse proportion)
function calculateRadius(
    distance,
    minDistance,
    maxDistance,
    minRadius,
    maxRadius
) {
    // Normalize distance into a 0-1 range
    let normalized = (distance - minDistance) / (maxDistance - minDistance);
    normalized = 1 - normalized; // Invert the value for inverse proportionality
    return normalized * (maxRadius - minRadius) + minRadius;
}

// Function to calculate rotation speed based on distance (direct proportion)
function calculateRotationSpeed(
    distance,
    minDistance,
    maxDistance,
    minSpeed,
    maxSpeed
) {
    // Normalize distance into a 0-1 range
    let normalized = (distance - minDistance) / (maxDistance - minDistance);
    normalized = 1 - normalized; // Invert the value for inverse proportionality
    return normalized * (maxSpeed - minSpeed) + minSpeed;
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

function toggleAnimations() {
    document.querySelectorAll(".star").forEach((star) => {
        star.classList.toggle("paused");
    });
}

function addAnimationToStars(ele) {
    console.log("animation stars", ele);
    ele.selectAll(".star")
        .attr("transform", "translate(-400,50) scale(3, 3)")
        .transition()
        .duration((d) => d.rotationspeed)
        .attrTween("transform", function () {
            return d3.interpolateString(
                "rotate(0, 200, 150)",
                "rotate(360, 200, 150)"
            );
        })
        .on("end", function repeat() {
            d3.select(this)
                .transition()
                .duration((d) => d.rotationspeed)
                .attrTween("transform", function () {
                    return d3.interpolateString(
                        "rotate(0, 200, 150)",
                        "rotate(360, 200, 150)"
                    );
                })
                .on("end", repeat);
        });
}

function addAnimationToStar(ele) {
    console.log("animation star", ele);
    ele.transition()
        .delay(1000)
        .duration(ele.attr("speed"))
        .attrTween("transform", function () {
            return d3.interpolateString(
                "rotate(0, 200, 150)",
                "rotate(360, 200, 150)"
            );
        })
        .on("end", function repeat() {
            d3.select(this)
                .transition()
                .duration(ele.attr("speed"))
                .attrTween("transform", function () {
                    return d3.interpolateString(
                        "rotate(0, 200, 150)",
                        "rotate(360, 200, 150)"
                    );
                })
                .on("end", repeat);
        });
}

function rotateStar(ele, rotationSpeed) {
    let angle = 0;
    let isPaused = false;
    let animationFrameId = null; // To keep track of the animation frame

    function animate() {
        if (!isPaused) {
            // Increment the angle for rotation
            angle = (angle + rotationSpeed) % 360;
            ele.attr("transform", `rotate(${angle}, 200, 150)`);

            // Request the next frame
            animationFrameId = requestAnimationFrame(animate);
        }
    }

    // Event listeners to pause and resume animation on hover
    ele.on("mouseenter", () => {
        isPaused = true;
        if (animationFrameId) {
            cancelAnimationFrame(animationFrameId); // Cancel the ongoing animation frame
            animationFrameId = null;
        }
    }).on("mouseleave", () => {
        isPaused = false;
        if (!animationFrameId) {
            animate(); // Resume the animation
        }
    });

    // Start the animation
    animate();
}

function calculateSpeedRange(closestPlanetDuration, furthestPlanetDuration) {
    const frameRate = 60; // Typical frame rate for requestAnimationFrame

    // Speed = Total Degrees (360) divided by (Duration in seconds * Frame Rate)
    let minSpeed = 360 / (closestPlanetDuration * frameRate); // Speed for the closest planet
    let maxSpeed = 360 / (furthestPlanetDuration * frameRate); // Speed for the furthest planet

    return { minSpeed, maxSpeed };
}
