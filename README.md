# queuing-simulator
Overview of the Project: Dynamic Queuing Network Simulator

Purpose

The Dynamic Queuing Network Simulator is an interactive web-based application designed to model and analyze queuing networks. It enables users to simulate queue dynamics by adjusting parameters such as arrival rate (λ), service rate (μ), and the number of servers. The simulator provides key performance metrics to help users understand system utilization and efficiency.

Features

1. User Input for Configuration:

Allows users to input values for:

Arrival Rate (λ): The rate at which jobs or tasks arrive in the system.

Service Rate (μ): The rate at which jobs or tasks are processed by the system.

Number of Servers: The total number of service points available.


Input fields ensure precision with support for decimal and integer values.



2. Simulation Results:

Calculates and displays:

Utilization (ρ): The percentage of the system's capacity being utilized.

Average Waiting Time (Wq): The time a job spends waiting in the queue before being served.

Average Queue Length (Lq): The number of jobs waiting in the queue.


Results are dynamically displayed in the output section.



3. Responsive Design:

Clean, user-friendly interface optimized for desktop and mobile devices.

A simple layout ensures usability for users of varying technical expertise.



4. Canvas Integration:

Includes a <canvas> element for potential visualization of queue behavior (currently unused but ready for graphical extensions).




Technical Components

1. HTML (index.html):

Structures the application with sections for user input, simulation results, and a canvas for future graphical output.

Uses semantic elements to improve readability and maintainability.



2. JavaScript (script.js):

Implements the core functionality of the simulator:

Captures user input.

Validates inputs to ensure no empty or invalid values are submitted.

Computes queuing metrics using mathematical formulas:

ρ (Utilization): 

Wq (Average Waiting Time): 

Lq (Average Queue Length): 


Dynamically updates the results section with the computed metrics.




3. CSS (style.css):

Provides a visually appealing and responsive design.

Ensures consistency in layout with styling for inputs, buttons, and output sections.

Uses modern design elements like rounded corners, shadows, and hover effects for interactivity.




Applications

Educational Tool: Helps students and professionals understand queuing theory principles.

Performance Analysis: Simulates real-world queuing systems such as customer service centers, server farms, or manufacturing lines.

Optimization Insights: Provides data to optimize system configurations by balancing arrival and service rates.


Future Enhancements

Graphical Visualization:

Use the canvas element to plot metrics like queue length over time.


Advanced Models:

Incorporate additional queuing models such as M/M/c/K or M/G/1.


Real-Time Simulation:

Animate job arrivals and departures to demonstrate queue dynamics visually.


Extended Metrics:

Include system-specific metrics like total response time or throughput.


Styling Enhancements:

Integrate themes and animations for improved user engagement.



This project serves as a foundation for a versatile simulation tool, bridging theoretical concepts and practical analysis of queuing systems.

