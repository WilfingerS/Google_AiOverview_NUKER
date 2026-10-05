const AI_HIDDEN_CLASS = "google-ai-hidden";
const BODY_ID_TAG = "rcnt";
const SEARCH_CONTENT_TAG = "center_col";

console.log("Google Ai Overview Remover Loaded");

let main_content = document.querySelector("#"+BODY_ID_TAG);
const content_children = main_content.children;

function checkChild(child){
    let bool = false;
    bool = (child.id == child.className) || (child.id == SEARCH_CONTENT_TAG);
    return bool;
}

Array.from(content_children).forEach((child, index) => {
    if (checkChild(child))
        return
    child.setAttribute("class",AI_HIDDEN_CLASS);
})