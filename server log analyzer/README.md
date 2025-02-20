## Server Log Analyzer

### Overview

The Server Log Analyzer is a Python script that processes web server logs to extract meaningful insights. It helps identify trends such as:
- Most frequent IP addresses
- Most requested endpoints
- HTTP status code distribution
- Request activity trends over time
The script supports Apache/Nginx-style logs but can be modified to fit other formats as needed.

### Features

- Interactive File Path Input – Users specify the log file at runtime.
- Parse Server Logs – Extracts timestamps, IPs, requested endpoints, and status codes.
- Analyze Traffic – Identifies the most active users and endpoints.
- Visualize Request Trends – Generates a plot of request activity over time.

### Requirements

- Python 3.x
- Pandas
- Matplotlib

### Usage

1. **Clone the Repository**
2. **Run the Script**
3. **Provide File Path**
4. **Check the Output:**
- The script will display statistics such as:
  - Top IP addresses making requests
  - Most requested endpoints
  - HTTP status code distribution
  - A visualization of request trends
