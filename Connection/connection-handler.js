module.exports = connectionHandler = (function(){
    const rl = require("readline").createInterface({
        input: process.stdin,
        output: process.stdout
      });

    function setLogoutOnExitEvent(listener) {
        rl.on('SIGINT', ()=> {
            var listener_ = listener();
            if (listener_.then) {
                listener_.then(()=>process.exit(0))
            } else process.exit(0);
        });
    }

    return {
        setLogoutOnExitEvent
    }
})();