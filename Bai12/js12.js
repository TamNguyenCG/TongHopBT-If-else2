let moneyht=+prompt('Nhập số tiền gửi ngân hàng: ')
let pt=+prompt('Số lãi xuất/năm: ')
let n=+prompt('số năm gửi: ')
moneytl=moneyht*(1+(pt/100))**n;
alert('Số tiền lãi sau khi gửi '+ n +' năm là: '+moneytl.toFixed(0))
