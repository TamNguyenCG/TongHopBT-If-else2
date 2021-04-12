let a=+prompt('Nhập chiều dài:')
let b=+prompt('Nhập chiều rộng:')
s=a*b;
if (a && b===0){
    alert ('Sai, nhập lại !')
}else {
    alert('diện tích HCN là:' +s)
}