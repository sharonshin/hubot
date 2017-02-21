 
 


 module.exports = function(robot) {
    robot.hear(/Hello!/, function(res) {
        return res.send("Hi there!");
    });

    robot.hear(/Monday/, function(res) {
        return res.send("https://s-media-cache-ak0.pinimg.com/736x/9b/b3/5e/9bb35e437965f0d34bf288c853c64559.jpg");
    });

    robot.respond(/What's your favorite color?/, function(res) {
        return res.send("I may be biased, but I like purple.");
    });
};