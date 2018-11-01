var mongoose = require('mongoose');

var User = mongoose.model('User', {
    email : {
        type : String,
        required : true,
        trim : true,
        minlength : 1
    }
});

// var user = new User({
//     email : 'andrew@gmail.com'
// });

module.exports = {User};