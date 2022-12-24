// Bài tập 1: Cho người dùng nhập 3 số nguyên. Viết chương trình xuất 3 số theo thứ tự tăng dần
document.getElementById("calculate").onclick = function () {
    // Lấy giá trị ở các input
    let number01 = +document.getElementById("txtnumber1").value;
    let number02 = +document.getElementById("txtnumber2").value;
    let number03 = +document.getElementById("txtnumber3").value;

    // output
    let result = '';

    // xét điều kiện
    if (number01 > number02 && number01 > number03) {
        if (number02 > number03) {
            result = number03 + ", " + number02 + ", " + number01;
        }
        else {
            result = number02 + ", " + number03 + ", " + number01;
        }
    }
    else if (number02 > number01 && number02 > number03) {
        if (number01 > number03) {
            result = number03 + ", " + number01 + ", " + number02;
        }
        else {
            result = number01 + ", " + number03 + ", " + number02;

        }
    }
    else if (number03 > number01 && number03 > number02) {
        if (number01 > number02) {
            result = number02 + ", " + number01 + ", " + number03;
        }
        else {
            result = number01 + ", " + number02 + ", " + number03;
        }
    }

    // Hiển thị kết quả
    document.getElementById("result-wrapper").style.display = "block";
    document.getElementById("result-b1").innerHTML = result;
}
// Kết thúc bài tập 1

// Bài tập 2: Viết chương trình “Chào hỏi” các thành viên trong gia đình với các đặc điểm. Đầu tiên máy sẽ hỏi ai sử dụng máy. Sau đó dựa vào câu trả lời và đưa ra lời chào phù hợp. Giả sử trong gia đình có 4 thành viên: Bố (B), Mẹ (M), anh Trai (A) và Em gái (E)
document.getElementById("btn__sent").onclick = function () {
    // Lấy giá trị từ input
    let choose = document.getElementById("choose").value;

    // Xét điều kiện
    switch (choose) {
        case 'B':
            document.getElementById("result-choose").style.display = "block";
            document.getElementById("result-b2").innerHTML = "Xin chào Bố!";
            break;

        case 'M':
            document.getElementById("result-choose").style.display = "block";
            document.getElementById("result-b2").innerHTML = "Xin chào Mẹ!";
            break;

        case 'A':
            document.getElementById("result-choose").style.display = "block";
            document.getElementById("result-b2").innerHTML = "Xin chào Anh Trai!";
            break;

        case 'E':
            document.getElementById("result-choose").style.display = "block";
            document.getElementById("result-b2").innerHTML = "Xin chào Em Gái!";
            break;

        default:
            document.getElementById("result-choose").style.display = "block";
            document.getElementById("result-b2").innerHTML = "Xin chào Người lạ ơi!";
            break;
    }
}
// Kết thúc bài tập 2

// Bài tập 3: Đếm số chẳn lẻ
document.getElementById("btn__count").onclick = function () {
    // Lấy giá trị ở các input
    let number01 = +document.getElementById("txtnumber01").value;
    let number02 = +document.getElementById("txtnumber02").value;
    let number03 = +document.getElementById("txtnumber03").value;

    // output
    let count = 0;
    let result = 0;

    if (number01 != 0 && number02 != 0 && number03 != 0) {
        if (number01 % 2 === 0) {
            count += 1;
        }

        if (number02 % 2 === 0) {
            count += 1;

        }

        if (number03 % 2 === 0) {
            count += 1;

        }

        result = 3 - count;

        // Hiển thị kết quả
        document.getElementById("result-count").style.display = "block";
        document.getElementById("result-b3").innerHTML = "Có " + count + " số chẵn, " + result + " số lẻ";
    }
    else {
        alert("Dữ liệu không hợp lệ!!!");
    }
}
// Kết thúc bài tập 3

// Bài tập 4: Đoán hình tam giác
document.getElementById("btn__guess").onclick = function () {
    // Lấy giá trị ở các input
    let numberA = +document.getElementById("txtnumberA").value;
    let numberB = +document.getElementById("txtnumberB").value;
    let numberC = +document.getElementById("txtnumberC").value;

    // output
    let sumAB = numberA + numberB;
    let sumAC = numberA + numberC;
    let sumBC = numberB + numberC;

    let sqrtBC = Math.sqrt(Math.pow(numberA, 2) + Math.pow(numberB, 2));

    let result = '';

    if (numberA !== 0 && numberB !== 0 && numberC !== 0) {
        if (sumAB > numberC && sumAC > numberB && sumBC > numberA) {
            // Tam giác đều nếu 3 cạnh bằng nhau
            if (numberA === numberB && numberB === numberC && numberA === numberC) {
                result = "Hình tam giác đều";
            }

            // Tam giác cân nếu 2 cạnh bằng nhau 
            else if (numberA === numberB || numberA === numberC || numberB === numberC) {
                result = "Hình tam giác cân";
            }

            // Tam giác vuông
            else if (numberC === sqrtBC) {
                result = "Hình tam giác vuông";
            }
        }

        // Hiển thị kết quả
        document.getElementById("result-guess").style.display = "block";
        document.getElementById("result-b4").innerHTML = result;
    }
    else {
        alert("Dữ liệu không hợp lệ!!!");
    }
}
// Kết thúc bài tập 4
