let mainNavUserDetails = document.querySelector('.mainNavUserDetails')
mainNavUserDetails.addEventListener('click', ()=>{
    mainNavUserDetails.classList.toggle('mainNavUserDetailsactive')
})
//CHANGE MONTH IN DATA STATS
let date = new Date()
let month = date.getMonth()+1
let monthDispaly
//SETTING MONTHS
if(month == 1){
    monthDispaly = 'January'
}else if(month == 2){
    monthDispaly = 'Febuary'
}else if(month == 3){
    monthDispaly = 'March'
}
else if(month == 4){
    monthDispaly = 'April'
}
else if(month == 5){
    monthDispaly = 'May'
}
else if(month == 6){
    monthDispaly = 'June'
}
else if(month == 7){
    monthDispaly = 'July'
}
else if(month == 8){
    monthDispaly = 'August'
}
else if(month == 9){
    monthDispaly = 'September'
}
else if(month == 10){
    monthDispaly = 'October'
}
else if(month == 11){
    monthDispaly = 'November'
}
else if(month == 12){
    monthDispaly = 'December'
}
let monthData = document.querySelector('.monthData').textContent = monthDispaly