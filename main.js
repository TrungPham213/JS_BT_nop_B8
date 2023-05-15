
function getEle(id) {
    return document.getElementById(id);
}
var a = [];


getEle('btnAddNumber').onclick = function () {
    var num = getEle('txtNumber').value * 1;
    a.push(num);
    console.log(a);
    getEle("footerCard").innerHTML = a;
}
getEle('btnTongSoDuong').onclick = function () {
    var tong = 0;
    for (var i = 0; i < a.length; i++) {

        if (a[i] > 0) {
            tong += a[i];
        }
    }
    console.log("Tổng các số dương trong mảng: " + tong);
    getEle("footerCard").innerHTML = "Tổng các số dương trong mảng: " + tong;

}

getEle('btnDemSoDuong').onclick = function () {
    var dem = 0;
    for (var i = 0; i < a.length; i++) {

        if (a[i] > 0) {
            dem += 1;
        }
    }
    console.log("Tổng số dương có trong mảng: " + dem);
    getEle("footerCard").innerHTML = "Tổng số dương có trong mảng: " + dem;

}

getEle('btnMin').onclick = function () {
    var min = 0;
    for (var i = 0; i < a.length; i++) {

        if (a[i + 1] < a[i]) {
            min = a[i + 1];
        }
    }
    console.log("Số nhỏ nhất có trong mảng: " + min);
    getEle("footerCard").innerHTML = "Số nhỏ nhất có trong mảng: " + min;

}

getEle('btnMinDuong').onclick = function () {
    var minDuong = a[0];
    for (var i = 0; i < a.length; i++) {

        if (a[i + 1] < minDuong && a[i + 1] > 0) {
            minDuong = a[i + 1]

        }
    }
    console.log("Số nhỏ nhất lớn hơn 0 có trong mảng: " + minDuong);
    getEle("footerCard").innerHTML = "Số nhỏ nhất lớn hơn 0 có trong mảng: " + minDuong;

}
getEle('btnSoChanCuoi').onclick = function () {
    var soChanCuoi = 0;
    for (var i = 0; i < a.length; i++) {

        if (a[a.length - 1] % 2 === 0) {
            soChanCuoi = a[a.length - 1];
        } else {
            soChanCuoi = -1;
        }
        console.log("Số chẵn cuối cùng có trong mảng: " + soChanCuoi);
        getEle("footerCard").innerHTML = "Số chẵn cuối cùng có trong mảng: " + soChanCuoi;

    }
}

getEle('btnSosanhso').onclick = function () {
    function soLuongSoAm() {
        var dem = 0;
        for (var i = 0; i < a.length; i++) {

            if (a[i] < 0) {
                dem += 1;
            }
        }
        return dem;
    }
    function soLuongSoDuong() {
        var dem = 0;
        for (var i = 0; i < a.length; i++) {

            if (a[i] > 0) {
                dem += 1;
            }
        }
        return dem;
    }
    var soAm = soLuongSoAm();
    var soDuong = soLuongSoDuong();
    if (soAm > soDuong) {
        console.log("Số âm nhiều hơn số dương");
        getEle("footerCard").innerHTML = "Số âm nhiều hơn số dương";
    } else if (soAm < soDuong) {
        console.log("Số dương nhiều hơn số âm");
        getEle("footerCard").innerHTML = "Số dương nhiều hơn số âm";

    } else {
        console.log("Số dương bẳng số âm");

        getEle("footerCard").innerHTML = "Số dương bằng số âm";

    }

}