(()=>{"use strict";if(typeof __nccwpck_require__!=="undefined")__nccwpck_require__.ab=__dirname+"/";var e={};(()=>{var n=e;Object.defineProperty(n,"__esModule",{value:true});n["default"]=void 0;function myCustomJsFunction(e,{inputs:n}){e.logger.info("Running my custom JS function");e.logger.info(`Hello, ${n.name.value}!}`);e.logger.info(`Your number is ${n.num.value}`);e.logger.info(`Your object is ${JSON.stringify(n.obj.value)}`);e.logger.info("Done running my custom JS function")}var o=myCustomJsFunction;n["default"]=o})();module.exports=e})();