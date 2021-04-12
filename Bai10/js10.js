alert('Tính giá điện sinh hoạt')
let kWh=+prompt(' Nhập số kWh ')
if (kWh<50){
    money=1678*kWh
    alert('Số tiền cần thanh toán là: '+money+'đ')
}else if (kWh<100){
    money=1734*kWh
    alert('Số tiền cần thanh toán là: '+money+'đ')
}else if(kWh<200){
    money=2014*kWh
    alert('Số tiền cần thanh toán là: '+money+'đ')
}else if (kWh<300){
    money=2536*kWh
    alert('Số tiền cần thanh toán là: '+money+'đ')
}else if (kWh<400){
    money=2834*kWh
    alert('Số tiền cần thanh toán là: '+money+'đ')
}else{
    money=2927*kWh
    alert('Số tiền cần thanh toán là: '+money+'đ')
}