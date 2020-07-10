class KeyWord{
    constructor(command, response, clas, action){
        this.clas = clas;
        this.command = command;
        this.response = response;
        this.action = action;
    }
};


/////////////VARIABLES

const utcolor="ut-color";
const prefix = `<br><span class="terminal-preview-text"><span class="yellowgreen">mock@terminal</span><span class="sky-blue">~</span>$ `;
const suffix = `</span>`;
const terminalPreview = document.querySelector("div.terminal-preview");
const terminalInput = document.querySelector("input.terminal-input");

const listcommands = `>_ ut education :scrolls to institutes from where i study(ed)<br>>_ ut projects :scrolls to My Projects<br>>_ ut skills :shows the languages I speak ;)<br>>_ ut connect :connect with me on any of the following platforms, emails are priorities<br>>_ ut linkedin :will open open my linkedin profile<br>>_ ut github :will open open my github profile<br>>_ ut twitter :will take you to my twitter profile<br>>_ ut facebook :will open my facebook profile<br>>_ ut email :email me through your email client<br>>_ ut help :opens a list of all commands<br>You're Welcome...`;
/*>_ ut about :tell you something about me<br>*/


let keywords = [
    new KeyWord(new RegExp("help","i"), `Help is on the way...<br>All commands are case-insenstive.<br>${listcommands}`, "cyan", ()=>{console.log("You're welcome");}),

    new KeyWord(new RegExp("education","i"), "Taking you to my institutes...", "custom-color1", ()=>{document.querySelector("#frdBSs").scrollIntoView({block: 'end', behavior: "smooth"});}),

    new KeyWord(new RegExp("projects","i"), "Taking you to my projects...", "lime", ()=>{document.querySelector("#KcajcM").scrollIntoView({block: 'end', behavior: "smooth"});}),

    new KeyWord(new RegExp("skills","i"), "These are my skills...", "orchid", ()=>{document.querySelector("#hVoudh").scrollIntoView({block: 'end', behavior: "smooth"});}),

    new KeyWord(new RegExp("connect","i"), "You can connect here...", "sky-blue", ()=>{document.querySelector("#YQLBsm").scrollIntoView({block: 'end', behavior: "smooth"});}),

    new KeyWord(new RegExp("facebook","i"), "Redirecting to facebook profile...", "fb-color", ()=>{window.open("https://www.facebook.com/utkarsh.utkarsh.927/","_blank")}),

    new KeyWord(new RegExp("twitter","i"), "Redirecting to twitter profile...", "tw-color", ()=>{window.open("https://twitter.com/utkarshdhiman48","_blank")}),

    new KeyWord(new RegExp("linkedin","i"), "Redirecting to linkedin profile...", "ln-color", ()=>{window.open("https://www.linkedin.com/in/utkarsh-dhiman-b626b5149/","_blank")}),

    new KeyWord(new RegExp("github","i"), "Redirecting to github profile...", "apricot", ()=>{window.open("https://github.com/utkarsh48","_blank")}),

    new KeyWord(new RegExp("email","i"), "Opening...", "custom-color1", ()=>{
        window.open("mailto:utkarshdhiman48@gmail.com","_target");
        console.log("utkarshdhiman48@gmail.com");
    }),
    
    new KeyWord(new RegExp("theme","i"), "Changing theme...", "orchid", ()=>{document.querySelector(".mode-change-btn").click();})

    // new KeyWord(new RegExp("about","i"), "Here is something about him...", "cyan", ()=>{document.querySelector("#YQLBsm").scrollIntoView({block: 'end', behavior: "smooth"});})
];
////////first line
terminalPreview.innerHTML=`<span class="yellowgreen">mock@terminal</span><span class="sky-blue">~</span>$ You can navigate my page using this terminal also.<br>Toggle Page Dark mode using button in top right corner or type 'ut theme'.<br>Type 'ut help' to get a list of all commands.${suffix}`;

////////Enter key event listener
terminalInput.addEventListener("keydown",(e)=>{
    let inputField = e.target;
    let prevCommands = terminalPreview.innerHTML;
    if(e.key==="Enter" || e.keyCode==13){
        let textChunks = inputField.value.split(" ");
        if((textChunks[0] ==="ut" || textChunks[0] === "UT") && textChunks.length === 2 ) {
            let [found] = keywords.filter((f)=>{
                return textChunks[1].match(f.command);
            });
            if(!found) {
                let output = `${prefix}"${inputField.value}" is not a valid command${suffix}`;
                terminalPreview.innerHTML=`${prevCommands}${output}`;
            }
            else{
                let output = `${prefix}<span class="${utcolor}">${textChunks[0]}</span> <span class="${found.clas}">${textChunks[1]}</span><br>${found.response}${suffix}`;
                terminalPreview.innerHTML=`${prevCommands}${output}`;
                setTimeout(()=>{
                    found.action();
                },500);
            }
            terminalPreview.lastChild.scrollIntoView(false);
        }
        else{
            let output = `${prefix}"${inputField.value}" is not a valid command${suffix}`;
            terminalPreview.innerHTML=`${prevCommands}${output}`;
            terminalPreview.lastChild.scrollIntoView(false);
        }
        inputField.value = "";
    }




});