// Bài tập 1: Cho người dùng nhập 3 số nguyên. Viết chương trình xuất 3 số theo thứ tự tăng dần
document.getElementById("calculate").onclick = function () {
    // Lấy giá trị ở các input
    let number01 = +document.getElementById("txtnumber1").value;
    let number02 = +document.getElementById("txtnumber2").value;
    let number03 = +document.getElementById("txtnumber3").value;

    // output
    let result = 0;

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

// Bài tập 5: Tính ngày tháng năm
// hàm kiểm tra năm nhuận hay không
function checkYear(month, year) {
    if (month < 1 || month > 12) {
        alert("Dữ liệu không hợp lệ!!!");
    }
    else {
        if (month === 1 || month === 3 || month === 5 || month === 7 || month === 8 || month === 10 || month === 12) {
            return 31;
        }

        else if (month === 4 || month === 6 || month === 9 || month === 11) {
            return 30;
        }

        else if (month === 2) {
            // Kiểm tra năm không nhuận
            if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
                return 29;
            }

            // Kiểm tra năm nhuận
            else {
                return 28;
            }
        }
    }
}

// Khi nhấn nút ngày hôm qua
document.getElementById("btn__yesterday").onclick = function () {
    let day = +document.getElementById("day").value;
    let month = +document.getElementById("month").value;
    let year = +document.getElementById("year").value;

    let result = 0;

    let newday = day;
    let newmonth = month;
    let newyear = year;

    checkYear(month, year);

    result = day + 1;

    // Kiểm tra trường hợp đầu tháng
    if (day === 1) {
        if (month === 5 || month === 7 || month === 10 || month === 12) {
            newday = 30;
            newmonth = month - 1;
        }

        else if (month === 1 || month === 2 || month === 4 || month === 6 || month === 8 || month === 9 || month === 11) {
            newday = 31;
            newmonth = month - 1;
        }

        else if (month === 3 && checkYear(month, year)) {
            newday = 29;
            newmonth = month - 1;
        }
    }



}

// Khi nhấn nút ngày mai
document.getElementById("btn__tomorrow").onclick = function () {
    let day = document.getElementById("day").value;
    let month = document.getElementById("month").value;
    let year = document.getElementById("year").value;
}
// Kết thúc bài tập 5

// Bài tập 6: Tính ngày
document.getElementById("btn__calcday").onclick = function () {
    // Lấy giá trị từ input
    let month = +document.getElementById("monthnumber").value;
    let year = +document.getElementById("yearnumber").value;

    // output
    let result = 0;

    if (month < 1 || month > 12) {
        alert("Dữ liệu không hợp lệ!!!");
    }
    else {
        if (month === 1 || month === 3 || month === 5 || month === 7 || month === 8 || month === 10 || month === 12) {
            result = 31;
        }

        else if (month === 4 || month === 6 || month === 9 || month === 11) {
            result = 30;
        }

        else if (month === 2) {
            // Kiểm tra năm không nhuận
            if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
                result = 29;
            }

            // Kiểm tra năm nhuận
            else {
                result = 28;
            }
        }

        // Hiển thị kết quả
        document.getElementById("result-calcday").style.display = "block";
        document.getElementById("result-b6").innerHTML = "Tháng " + month + " năm " + year + " có " + result + " ngày";
    }
}
// Kết thúc bài tập 6

// Bài tập 7:
document.getElementById("btn__read").onclick = function () {
    let number = +document.getElementById("readnumber").value;

    let hangDonVi = 0;
    let hangMuoi = 0;
    let hangTram = 0;

    let resultDonVi = 0;
    let resultMuoi = 0;
    let resultTram = 0;

    hangDonVi += number % 10;
    number = Math.floor(number / 10);

    hangMuoi += number % 10;
    number = Math.floor(number / 10);

    hangTram += number;

    // Hàng trăm
    switch (hangTram) {
        case 1:
            resultTram = "Một trăm ";
            break;

        case 2:
            resultTram = "Hai trăm ";
            break;

        case 3:
            resultTram = "Ba trăm ";
            break;

        case 4:
            resultTram = "Bốn trăm ";
            break;

        case 5:
            resultTram = "Năm trăm ";
            break;

        case 6:
            resultTram = "Sáu trăm ";
            break;

        case 7:
            resultTram = "Bảy trăm ";
            break;

        case 8:
            resultTram = "Tám trăm ";
            break;

        case 9:
            resultTram = "Chín trăm ";
            break;
    }

    // Xét chữu "lẻ" nếu hàng nghìn bằng 0
    if (hangMuoi % 10 === 0 && hangDonVi !== 0) {
        resultMuoi = " lẻ ";
    }

    // Hàng mươi
    switch (hangMuoi) {
        case 1:
            resultMuoi = "mười ";
            break;

        case 2:
            resultMuoi = "hai mươi ";
            break;

        case 3:
            resultMuoi = "ba mươi ";
            break;

        case 4:
            resultMuoi = "bốn mươi ";
            break;

        case 5:
            resultMuoi = "năm mươi ";
            break;

        case 6:
            resultMuoi = "sáu mươi ";
            break;

        case 7:
            resultMuoi = "bảy mươi ";
            break;

        case 8:
            resultMuoi = "tám mưới ";
            break;

        case 9:
            resultMuoi = "chín mươi ";
            break;
    }

    // Hàng đơn vị
    switch (hangDonVi) {
        case 1:
            resultDonVi = "một ";
            break;

        case 2:
            resultDonVi = "hai ";
            break;

        case 3:
            resultDonVi = "ba ";
            break;

        case 4:
            resultDonVi = "bốn ";
            break;

        case 5:
            resultDonVi = "năm ";
            break;

        case 6:
            resultDonVi = "sáu ";
            break;

        case 7:
            resultDonVi = "bảy ";
            break;

        case 8:
            resultDonVi = "tám ";
            break;

        case 9:
            resultDonVi = "chín ";
            break;
    }

    // Hiển thị kết quả
    document.getElementById("result-read").style.display = "block";
    document.getElementById("result-b7").innerHTML = resultTram + resultMuoi + resultDonVi;
}
// Kết thúc bài tập 7

// Bài tập 8: Tìm sinh viên xa trường nhất
document.getElementById("btn__search").onclick = function () {
    // sinh viên 1
    let name01 = document.getElementById("txtname01").value;
    let numberx01 = +document.getElementById("numberx01").value;
    let numbery01 = +document.getElementById("numbery01").value;

    // sinh viên 2
    let name02 = document.getElementById("txtname02").value;
    let numberx02 = +document.getElementById("numberx02").value;
    let numbery02 = +document.getElementById("numbery02").value;

    // sinh viên 3
    let name03 = document.getElementById("txtname03").value;
    let numberx03 = +document.getElementById("numberx03").value;
    let numbery03 = +document.getElementById("numbery03").value;

    // trường
    let numberx04 = +document.getElementById("numberx04").value;
    let numbery04 = +document.getElementById("numbery04").value;

    let d01 = Math.sqrt(Math.pow(numberx04 - numberx01, 2) + Math.pow(numbery04 - numbery01, 2));
    let d02 = Math.sqrt(Math.pow(numberx04 - numberx02, 2) + Math.pow(numbery04 - numbery02, 2));
    let d03 = Math.sqrt(Math.pow(numberx04 - numberx03, 2) + Math.pow(numbery04 - numbery03, 2));

    let resultMax = 0;
    let result;

    // Tìm độ dài lớn nhất
    if (d01 > d02 && d01 > d03) {
        resultMax = d01;
    }
    else if (d02 > d01 && d02 > d03) {
        resultMax = d02;
    }
    else if (d03 > d01 && d03 > d02) {
        resultMax = d03;
    }

    // Tìm tên sinh viên có độ dài lớn nhất
    if (resultMax === d01) {
        result = name01;
    }
    else if (resultMax === d02) {
        result = name02;
    }
    else if (resultMax === d03) {
        result = name03;
    }

    // Hiển thị kết quả
    document.getElementById("result-search").style.display = "block";
    document.getElementById("result-b8").innerHTML = "Sinh viên xa trường nhất: " + result;
}
// Kết thúc bài tập 8
