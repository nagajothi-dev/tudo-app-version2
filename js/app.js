window.addEventListener('keydown',(e)=>{
    document.getElementById(
        "result"
    ).innerHTML = `The key pressed is <span>${e.key}</span><span>key code: ${e.keycode}</span>`;
});