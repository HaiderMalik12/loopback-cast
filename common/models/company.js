'use strict';

module.exports = function(Company) {
 
 Company.greet = function(msg, cb) {
     cb(null,msg);
 }

 Company.remoteMethod('greet', {
     accepts : {
         arg: 'msg',
         type: 'string'
     },
     returns : { 
         arg : 'greeting',
         type: 'string'
     },
     http :{
         verb : 'get'
     }
    
 });
};
