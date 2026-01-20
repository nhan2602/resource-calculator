function calculate() {
    let livingArea = document.getElementById("livingArea").value;
    let carKm = document.getElementById("carKm").value;

    // Chuyển sang số
    livingArea = parseFloat(livingArea) || 0;
    carKm = parseFloat(carKm) || 0;

    // Công thức mẫu (tạm thời cho dễ hiểu)
    let total = livingArea * 0.2 + carKm * 0.0003;

    // Hiển thị ra giao diện
    document.getElementById("result").innerText = 
        "Tổng tài nguyên tiêu thụ: " + total.toFixed(2) + " tấn/năm";
}
