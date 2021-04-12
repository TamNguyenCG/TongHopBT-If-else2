let money = +prompt('Nhập số tiền tính thuế (đã qua giảm trừ):')
if (money<0){
    alert('Hãy nhập lại số tiền')
}else if (money<5000000){
    thue=money*5/100
    alert('Số tiền thuế phải nộp là :'+thue)
}else if (money<100000000){
    thue=((money*10)/100)-250000
    alert('Số tiền thuế phải nộp là :'+thue)
}else if(money<18000000){
    thue=((money*15)/100)-750000
    alert('Số tiền thuế phải nộp là :'+thue)
}else if (money<32000000){
    thue=(money*20/100)-1650000
    alert('Số tiền thuế phải nộp là :'+thue)
}else if(money<52000000){
    thue=((money*25)/100)-3250000
    alert('Số tiền thuế phải nộp là :'+thue)
}else if(money<80000000){
    thue=((money*30)/100)-5850000
    alert('Số tiền thuế phải nộp là :'+thue)
}else{
    thue=((money*35)/100)-9850000
    alert('Số tiền thuế phải nộp là :'+thue)
}

