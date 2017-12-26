var cluster = require('cluster'),
    memored = require('../index');

if (cluster.isMaster) {
    cluster.fork();
} else {

	var users = [
	    {
	        name: 'Luke',
            job: 'Master Jedi'
        },
        {
            name: 'Yoda',
            job: 'Master Jedi'
        },
        {
            name: 'Han',
            job: 'Smuggler'
        },
        {
            name: 'Leya',
            job: 'Princess'
        }
    ];

	var jedi_filter = {job: 'Master Jedi'};

    memored.store('users', users, function() {
        console.log('Users stored!');

        memored.read('users', jedi_filter, function(err, value) {
            console.log('Found jedies:', value);
        });
    });
}