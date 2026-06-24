// ==========================================================================
// 1. EVENT LISTENER FOR CONVERT BUTTON
// ==========================================================================
document.getElementById('convertBtn').addEventListener('click', function() {
    // Inputs aur elements ko select karna
    const inputVal = document.getElementById('tempInput').value;
    const unit = document.getElementById('unitSelect').value;
    
    const errorDiv = document.getElementById('errorMessage');
    const resCelsius = document.getElementById('resultCelsius');
    const resFahrenheit = document.getElementById('resultFahrenheit');
    const resKelvin = document.getElementById('resultKelvin');

    // Purane errors aur results ko clear karna
    errorDiv.innerText = "";
    
    // ==========================================================================
    // 2. INPUT VALIDATION
    // ==========================================================================
    if (inputVal === "") {
        errorDiv.innerText = "Please enter a valid number!";
        return;
    }

    const temp = parseFloat(inputVal);
    let c, f, k;

    // ==========================================================================
    // 3. CONVERSION FORMULAS LOGIC
    // ==========================================================================
    if (unit === "Celsius") {
        c = temp;
        f = (c * 9/5) + 32;       // Celsius to Fahrenheit
        k = c + 273.15;           // Celsius to Kelvin
    } else if (unit === "Fahrenheit") {
        f = temp;
        c = (f - 32) * 5/9;       // Fahrenheit to Celsius
        k = c + 273.15;           // Fahrenheit to Kelvin
    } else if (unit === "Kelvin") {
        k = temp;
        c = k - 273.15;           // Kelvin to Celsius
        f = (c * 9/5) + 32;       // Kelvin to Fahrenheit
    }

    // ==========================================================================
    // 4. EDGE CASE: ABSOLUTE ZERO VALIDATION
    // ==========================================================================
    if (c < -273.15) {
        errorDiv.innerText = "Error: Temperature cannot be below Absolute Zero (-273.15°C / 0 K)!";
        resCelsius.innerText = "Celsius: --";
        resFahrenheit.innerText = "Fahrenheit: --";
        resKelvin.innerText = "Kelvin: --";
        return;
    }

    // ==========================================================================
    // 5. DISPLAY RESULTS (Rounded to 2 decimal places)
    // ==========================================================================
    resCelsius.innerText = `Celsius: ${c.toFixed(2)} °C`;
    resFahrenheit.innerText = `Fahrenheit: ${f.toFixed(2)} °F`;
    resKelvin.innerText = `Kelvin: ${k.toFixed(2)} K`;
});
