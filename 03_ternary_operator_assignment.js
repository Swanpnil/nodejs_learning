
var tcsEligibilityCheck = function (grad_score, hsc_score, ssc_score, candidate_name) {
        var result = grad_score >= 70 || hsc_score >= 80 || ssc_score > 90  // false || true
            ? `Congrates ${candidate_name} you are eligible for TCS interview`
            : `Sorry ${candidate_name}  Unfortunately you are not eligible for interview`;
        console.log(result);
    }
    tcsEligibilityCheck(80, 86, 90, "Mohit Sharma");
    tcsEligibilityCheck(69, 65, 88, "Anil Pende");
    