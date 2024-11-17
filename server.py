from flask import Flask, jsonify

app = Flask(__name__)

@app.route('/')
def home():
    return "Hello, Flask!"

locations = [
    {
        "id": 1,
        "latitude": 41.37937613418269,
        "longitude": -72.10613281840935,
        "marker_title": "Location 1",
        "marker_description": "Description for location 1"
    },
    {
        "id": 2,
        "latitude": 41.38,
        "longitude": -72.2,
        "marker_title": "Location 2",
        "marker_description": "Description for location 2"
    },
    {
        "id": 3,
        "latitude": 41.39,
        "longitude": -72.3,
        "marker_title": "Location 3",
        "marker_description": "Description for location 3"
    }
]

@app.route('/location')
def location():
    return jsonify(locations)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5001, debug=True)