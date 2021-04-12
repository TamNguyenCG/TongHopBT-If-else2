let a=+prompt('Nhập số a: ')
let b=+prompt('Nhập số b: ')
let c=+prompt('Nhập số c: ')
if(a&&b&&c>0){
    if (a+b>c){
        if(a+c>b){
            if(b+c>a){
                alert('3 cạnh abc là cạnh của một tam giác')
            }
        }
    }
}else {
    alert('3 cạnh abc không là cạnh của một tam giác')
}