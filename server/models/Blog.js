const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BlogSchema = new Schema({
    title: { type: 'string', required: true },
    article: { type: 'string', required: true },
    published: { type:'date', required: true },
    featured: { type:'boolean', required: true },
    author: { type: Schema.Types.ObjectId, ref: 'User' }
});

module.exports = mongoose.model('Blog', BlogSchema);
