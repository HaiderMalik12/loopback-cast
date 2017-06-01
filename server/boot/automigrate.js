'use strict';

module.exports = function(app) {
 app.dataSources.mysql.autoupdate('Product',err => {
     if(err) throw err;
     console.log('Models Synced!');
 })
}