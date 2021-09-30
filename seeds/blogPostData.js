const { Post } = require('../models');

const blogpostData = [
    {
        title: 'This is a title',
        body: "This is a blog post",
        
    },
    {
        title: 'This is another title',
        body: 'This is another blog post',
    
    }
]

const seedBlogpost = () => Post.bulkCreate(blogpostData);

module.exports = seedBlogpost; 