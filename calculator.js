// document.body.innerHTML="hey"

let ans = ""; 

function handleKeys(e){
        const value = e.target.innerText;
        ans += value.toString(); 
        console.log(ans);
        document.querySelector(".ans-display").innerText = ans;
}

function equalTo(){
    try{
        ans = ans
        .replace(/%/g, "*0.01*")
        .replace(/×/g, '*')
        .replace(/÷/g, '/');
        
        if (/[\+\-\*\/\.]$/.test(ans)) {
            ans = ans.slice(0, -1);
        }
        const value = eval(ans);
        ans = "";
        ans = value.toString();
        document.querySelector(".ans-display").innerText = ans;
    }catch(error){
        document.querySelector(".ans-display").innerText = "";
    }

}

function del(){
    ans = ans.slice(0, -1);
    document.querySelector(".ans-display").innerText = ans;
}

function allClear(){
    ans = "";
    document.querySelector(".ans-display").innerText = ans;
}

document.querySelectorAll(".key").forEach(key => {
    key.addEventListener("click", (e) => {
    handleKeys(e);
    });
});

document.querySelector(".ac").addEventListener("click", (e) => {
    allClear();
})

document.querySelector(".del").addEventListener("click", (e) => {
    del();
})

document.querySelector(".equal").addEventListener("click", (e) => {
    equalTo();  
})