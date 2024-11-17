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
        "marker_title": "Construction at Intersection",
        "marker_description": "Between Plant and NLH. Alternative sidewalk"
    },
    {
        "id": 2,
        "latitude": 41.38,
        "longitude": -72.2,
        "marker_title": "Construction in front of Cro",
        "marker_description": "Only back entrace is open. Go through library green."
    },
    {
        "id": 3,
        "latitude": 41.39,
        "longitude": -72.3,
        "marker_title": "Elevator broken.",
        "marker_description": "..."
    }
]

@app.route('/location')
def location():
    return jsonify(locations)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5001, debug=True)