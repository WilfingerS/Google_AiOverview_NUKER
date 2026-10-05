const AI_HIDDEN_CLASS = "google-ai-hidden";
const SEARCH_CONTENT_TAG = "center_col";

console.log("Google Ai Overview Remover Loaded");

function checkChild(child){
    let bool = false;
    bool = (child.id == null && child.className == null) || (child.id == SEARCH_CONTENT_TAG);
    return bool;
}

function hideAiOverview(){
    try {
        let main_content = document.querySelector("#"+SEARCH_CONTENT_TAG);
        const parentDiv = main_content.parentElement;
        const divChildren = parentDiv.children;
        Array.from(divChildren).forEach((child) => {
            if (checkChild(child))
                return
            child.setAttribute("class",AI_HIDDEN_CLASS);
        })
    } catch (err) {
    };
}

function hideAiMode(){
}

hideAiOverview();



