const readline = require('readline')
const { stdin : input, stdout : output} = require('process');

const rl = readline.createInterface({input,output})

// rl.question(`Masukan nilai pertama : `,(nilai1)=>{
//     rl.question(`Masukan nilai kedua : `,(nilai2)=>{
//         rl.question(`Pilih jenis operasi aritmatika (+,-,*,/) : `,(operasi)=>{
//             if(operasi == "+"){
//                 const penjumlahan = parseInt(nilai1) + parseInt(nilai2)
//                 console.log(`Hasil dari ${nilai1} + ${nilai2} = ${penjumlahan}`)
//             }
//             if(operasi == "-"){
//                 const pengurangan = parseInt(nilai1) - parseInt(nilai2)
//                 console.log(`Hasil dari ${nilai1} - ${nilai2} = ${pengurangan}`)
//             }
//             if(operasi == "*"){
//                 const perkalian = parseInt(nilai1) * parseInt(nilai2)
//                 console.log(`Hasil dari ${nilai1} * ${nilai2} = ${perkalian}`)
//             }
//             if(operasi == "/"){
//                 const pembagian = parseInt(nilai1) / parseInt(nilai2)
//                 console.log(`Hasil dari ${nilai1} / ${nilai2} = ${pembagian}`)
//             }
//         rl.close()
//         })
//     })
// })
console.log('\n')
console.log('----- KALKULATOR SEDERHANA -----')
console.log('--------------------------------\n')
    rl.question(`Pilih operasi aritmatika (+,-,*,/) : `,(operasi)=>{
        const arrOperasi = {"+" : 'Tambah',"-" : 'Kurang',"*" : 'Kali',"/" : 'Bagi'}
        if(operasi in arrOperasi){
            rl.question(`Masukan angka pertama : `,(angka1)=>{
                rl.question(`Masukan angka kedua : `,(angka2)=>{
                    if(operasi == "+"){
                        const penjumlahan = parseInt(angka1) + parseInt(angka2)
                        console.log(`Hasil dari ${angka1} + ${angka2} = ${penjumlahan}`)
                    }else if(operasi == "-"){
                        const pengurangan = parseInt(angka1) - parseInt(angka2)
                        console.log(`Hasil dari ${angka1} - ${angka2} = ${pengurangan}`)
                    }else if(operasi == "*"){
                        const perkalian = parseInt(angka1) * parseInt(angka2)
                        console.log(`Hasil dari ${angka1} * ${angka2} = ${perkalian}`)
                    }else if(operasi == "/"){
                        const pembagian = parseInt(angka1) / parseInt(angka2)
                        console.log(`Hasil dari ${angka1} / ${angka2} = ${pembagian}`)
                    }
                    console.log('---TERIMAKASIH---')
                rl.close()
                })
            })         
        }else{
            rl.question('OOPS OPERASI YANG ANDA MASUKAN SALAH, PRESS "y" untuk mengulang : ',(chose)=>{
                if(chose == 'y'){
                    rl.close()
                }
            })
        }
    })