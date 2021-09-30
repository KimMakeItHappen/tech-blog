const { Comment } = require('../models');

const commentsData = [
    {
        body: "this is a comment",
        blog_id: 1
        
    
    },

    {
        body: "this is another comment",
        blog_id: 2
        
    }
]


const seedComments = () => Comment.bulkCreate(commentsData);

module.exports = seedComments;