# Cosmic Exploration: An Interactive Guide to NASA's Exoplanets

## Overview

Welcome to the Cosmic Exploration Visualization Project! This project is a personal endeavor aimed at creating a visually interesting and informative infographic exhibit for visitors to a museum. The goal is to effectively and creatively communicate the fascinating data on exoplanets discovered by NASA, using dynamic and interactive visualizations created with D3.js.

## About the Dataset

The NASA Exoplanet Archive is a comprehensive database that contains information on all known exoplanets (planets outside our solar system) discovered by NASA's various space missions, ground-based observatories, and other sources. The dataset includes details such as the planet's name, mass, radius, distance from its host star, orbital period, and other physical characteristics. Additionally, information about the host star, such as its name, mass, and radius, is also included. This archive is regularly updated with new discoveries, making it a valuable resource for astronomers studying the properties and distribution of exoplanets in our galaxy.

The dataset used in this project can be found on [Kaggle](https://www.kaggle.com/datasets/adityamishraml/nasaexoplanets).

## Project Structure

The project consists of the following files:

- **index.html**: The main landing page for the visualizations.
- **barplot.html**: Contains the code for the bar plot visualization.
  - **Title**: Exoplanet Discoveries by Detection Method Over Time
  - **Description**: This visualization displays a bar plot that illustrates the number of exoplanets discovered using various detection methods over time. Each bar represents a different detection method, and the height of the bar corresponds to the number of exoplanets discovered using that method in a given time period. This visualization helps visitors understand the popularity and effectiveness of different methods used to discover exoplanets.
- **lineplot.html**: Contains the code for the line plot visualization.
  - **Title**: Exoplanet Discoveries Visualization
  - **Description**: This line plot visualization shows the trend of exoplanet discoveries over time. It highlights the cumulative number of exoplanet discoveries each year, providing a clear picture of how the rate of discovery has accelerated with advancements in technology and new missions. This visualization gives visitors an overview of the history and progress of exoplanet exploration.
- **scatterplot.html**: Contains the code for the scatter plot visualization.
  - **Title**: Stellar Magnitude vs. Discovery Year
  - **Description**: This scatter plot visualization compares the stellar magnitude (brightness) of the host stars with the year of discovery of their exoplanets. Each dot represents an exoplanet, with its position on the x-axis indicating the year it was discovered and its position on the y-axis indicating the magnitude of its host star. This visualization helps visitors explore any potential patterns or trends between the brightness of host stars and the discovery dates of their exoplanets.
- **background.js**: Handles background data processing tasks.
- **helper.js**: Includes helper functions used across different visualizations.
- **main.js**: The main JavaScript file that initializes the visualizations.
- **cleaned_5250.csv**: Dataset used for the visualizations.
- **cleaned_5250_map.csv**: Additional dataset used for mapping data.

---

## Getting Started

To view the visualizations, simply open the `index.html` file in your web browser. From there, you can navigate to the different types of visualizations:

1. Bar Plot: `barplot.html`
2. Line Plot: `lineplot.html`
3. Scatter Plot: `scatterplot.html`

Each visualization is created using D3.js and showcases different features and interactivity options.

## Running the Project

To run this project locally, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/ashrithsridhar/cosmic-exploration-d3.js.git
   ```

2. **Navigate to the project directory:**
   ```bash
   cd cosmic-exploration-d3.js
   ```

3. **Open the index.html file in your web browser:**
   - You can open the file directly by double-clicking it, or you can use a local server to host it. For example, using Python's HTTP server:
     ```bash
     python -m http.server
     ```
   - Then, open your web browser and go to `http://localhost:8000`.

## Motivation

The primary motivation behind this project is to enhance my skills in data visualization and web development using D3.js. Additionally, I aim to create an engaging exhibit for museum visitors that highlights the fascinating discoveries of exoplanets by NASA.

## Features

- **Interactivity**: Each visualization is interactive, allowing users to explore the data in more depth.
- **Responsive Design**: The visualizations are designed to be responsive and adapt to different screen sizes.
- **Data Processing**: Efficient data processing techniques are implemented using JavaScript.

## Audience and Goal

This project is designed for visitors to a museum. The goal is to create a visually captivating and informative exhibit that communicates the dataset effectively and in a creative manner. The focus is on making the information accessible and engaging for a general audience, rather than supporting in-depth analysis by domain experts.

## Technologies Used

- **D3.js**: For creating dynamic and interactive data visualizations.
- **HTML/CSS**: For structuring and styling the web pages.
- **JavaScript**: For data processing and interactivity.

## Future Enhancements

In the future, I plan to add more types of visualizations and improve the existing ones with additional features such as tooltips, zooming, and filtering options. I also aim to incorporate more storytelling elements to make the exhibit even more engaging.

## Contributing

As this is a personal project, I am not currently accepting contributions. However, I welcome any feedback or suggestions for improvements. Feel free to reach out to me if you have any ideas or questions.

## License

This project is licensed under the MIT License. See the `LICENSE` file for more details.
