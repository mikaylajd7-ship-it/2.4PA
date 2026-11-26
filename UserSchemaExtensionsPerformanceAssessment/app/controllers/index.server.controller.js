// Name: Mikayla Dickerson
// Date: November 26, 2026
// Render the starter application's home page.

exports.render = function (req, res) {
    if (req.session.lastVisit) {
        console.log(`Previous visit: ${req.session.lastVisit}`);
    }

    req.session.lastVisit = new Date();

    res.render('index', {
        title: 'Hello World',
        studentName: 'Mikayla Dickerson'
    });
};
