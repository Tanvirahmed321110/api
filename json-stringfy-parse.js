// json(javascript object nation)

const shop={
    name:'alim stor',
    id:1212,
    phone:0174234223,
    item1:'cosmetik',
    item2:'bag',
    item3:{
        no1:'medecine',
        no2:'square'
    }
}
//  stringfy kora  (stringfy koele vitore access neya jay na)
const shopSrtingfy=JSON.stringify(shop)
console.log(shop)
console.log(shopSrtingfy)


//srtingfy thake parse objcet
const convert=JSON.parse(shopSrtingfy)
console.log(convert)

