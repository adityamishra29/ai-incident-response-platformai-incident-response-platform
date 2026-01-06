from flask import Flask, jsonify
import random

app = Flask(__name__)

@app.route("/health")
def health():
    return jsonify(status="UP")

@app.route("/detect")
def detect():
    anomaly = random.choice([True, False])
    if anomaly:
        return jsonify(alert="Anomaly detected", action="Restart service")
    return jsonify(status="Normal")

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
