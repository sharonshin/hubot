 
 
var weekend = [
    "http://connect.citizen.co.za/wp-content/uploads/sites/25/2016/05/WE2.jpg?x71574",       "http://lifepopper.com/wp-content/uploads/2015/02/Funny-friday-hilarious-lifepopper-pictures-love-weekend-fun-memes-6.jpg",
    "http://cdn.pophangover.com/images/meme-912-1.jpg",
    "https://cdn.meme.am/instances/56049068.jpg"
]

 module.exports = function(robot) {
    robot.hear(/hello|hi|hey/, function(res) {
        return res.send("Hello friend!");
    });

    robot.hear(/weekend/, function(res) {
        return res.send(res.random(weekend));
    });

    robot.hear(/monday/, function(res) {
        return res.send("https://s-media-cache-ak0.pinimg.com/736x/9b/b3/5e/9bb35e437965f0d34bf288c853c64559.jpg");
    });

    robot.respond(/What's your favorite color?/, function(res) {
        return res.send("I may be biased, but I like purple.");
    });
};