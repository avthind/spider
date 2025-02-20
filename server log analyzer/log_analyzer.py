import re
import sys
import pandas as pd
import matplotlib.pyplot as plt
from collections import Counter
from datetime import datetime

LOG_PATTERN = r'(\d+\.\d+\.\d+\.\d+) - - \[(.*?)\] "(GET|POST|PUT|DELETE) (.*?) HTTP/1\.[01]" (\d+) (\d+)'

def parse_log_line(line):
    """Parse a single log line and return structured data."""
    match = re.match(LOG_PATTERN, line)
    if match:
        ip, timestamp, method, endpoint, status_code, _ = match.groups()
        timestamp = datetime.strptime(timestamp.split(" ")[0], "%d/%b/%Y:%H:%M:%S")
        return {"ip": ip, "timestamp": timestamp, "method": method, "endpoint": endpoint, "status_code": int(status_code)}
    return None

def process_log_file(log_file):
    """Read and process the log file into a DataFrame."""
    data = []
    with open(log_file, "r") as file:
        for line in file:
            entry = parse_log_line(line)
            if entry:
                data.append(entry)
    
    return pd.DataFrame(data)

def analyze_logs(df):
    """Generate insights from the log data."""
    print("\n--- Log Analysis ---\n")

    # Most frequent IPs
    top_ips = Counter(df["ip"]).most_common(5)
    print("Top 5 IPs making requests:")
    for ip, count in top_ips:
        print(f"{ip}: {count} requests")

    # Most requested endpoints
    top_endpoints = Counter(df["endpoint"]).most_common(5)
    print("\nTop 5 requested endpoints:")
    for endpoint, count in top_endpoints:
        print(f"{endpoint}: {count} requests")

    # HTTP status code distribution
    status_counts = df["status_code"].value_counts()
    print("\nHTTP Status Code Distribution:")
    for code, count in status_counts.items():
        print(f"{code}: {count} responses")

def plot_request_trends(df):
    """Plot request trends over time."""
    df["hour"] = df["timestamp"].dt.floor("h")
    hourly_counts = df.groupby("hour").size()

    plt.figure(figsize=(10, 5))
    plt.plot(hourly_counts.index, hourly_counts.values, marker='o', linestyle='-')
    plt.xlabel("Time")
    plt.ylabel("Requests per Hour")
    plt.title("Request Trend Over Time")
    plt.xticks(rotation=45)
    plt.grid()
    plt.show()

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Usage: python log_analyzer.py <logfile>")
        sys.exit(1)

    log_file = sys.argv[1]
    df = process_log_file(log_file)

    if df.empty:
        print("No valid log entries found.")
        sys.exit(1)

    analyze_logs(df)
    plot_request_trends(df)
