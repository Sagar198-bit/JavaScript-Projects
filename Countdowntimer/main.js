let enddate = "December 8, 2024 12:00:00 AM";
const input = document.querySelectorAll("input");

function clk(){
    const end = new Date(enddate).getTime();
    const now = new Date().getTime();

    const difffernce = end - now;

    if(difffernce < 0){
        return
    }
   let days = Math.floor((difffernce / (1000 * 60 * 60 * 24)));
   let hours = Math.floor((difffernce % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
   let minutes = Math.floor((difffernce % (1000 * 60 * 60 )) / (1000 * 60));
    let seconds = Math.floor((difffernce % (1000 * 60)) / 1000);
    
    input[0].value = `${days}`;
    input[1].value = `${hours}`;
    input[2].value =`${minutes}`;
    input[3].value = `${seconds}`;
    
    
    
    
}

setInterval ( clk , 1000)