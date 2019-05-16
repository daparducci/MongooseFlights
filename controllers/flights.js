var Flight = require('../models/flight');
module.exports = {
    new: newFlight,
    create,
    index
};

function index(req, res) {
    Flight.find({}, function(err, flights) {
        res.render('flights/index', {flights})
    });
}

function create(req, res) {
    console.log(req.body);
    var flight = new Flight(req.body);
    flight.save(function(err) {
        if (err) return res.render('flights/new');
        res.redirect('/flights');
    })
    console.log(flight);
}

function newFlight(req, res) {
    res.render('flights/new');
}