let a=+prompt('Nhập a: ')
let b=+prompt('Nhập b: ')
x=-b/a
if(a===0 && b===0){
    alert('Phương trình vô số nghiệm')
}else if (a===0 && b!==0){
    alert('Phương trình vô nghiệm')
}else if(a!==0 && b !==0) {
    alert('Phương trình có 1 nghiệm '+x)
}