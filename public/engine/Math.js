export var NubMath;
(function (NubMath) {
    function clamp(val, min, max) {
        return (val <= min) ? min : (val >= max) ? max : val;
    }
    NubMath.clamp = clamp;
})(NubMath || (NubMath = {}));
