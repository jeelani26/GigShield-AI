function calculatePremium() {
    let income = document.getElementById("income").value;

    if (!income) {
        alert("Please enter income");
        return;
    }

    // Fake AI Risk Score
    let riskScore = (Math.random() * 0.5 + 0.2).toFixed(2);

    // Premium Formula
    let premium = income * riskScore * 0.05;

    document.getElementById("premium").innerText =
        "Weekly Premium: ₹" + premium.toFixed(2);

    document.getElementById("risk").innerText =
        "AI Risk Score: " + riskScore;
}

function checkDisruption() {
    let rain = Math.random() * 100;
    let temp = 30 + Math.random() * 15;
    let aqi = Math.random() * 400;

    let message = "";

    if (rain > 50) {
        message = "🌧️ Heavy Rain → Income Loss → Payout ₹500";
    } else if (temp > 42) {
        message = "🌡️ Extreme Heat → Income Loss → Payout ₹400";
    } else if (aqi > 300) {
        message = "🏭 High Pollution → Income Loss → Payout ₹300";
    } else {
        message = "✅ No Disruption Today";
    }

    document.getElementById("result").innerText = message;
}