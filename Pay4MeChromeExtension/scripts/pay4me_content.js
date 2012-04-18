/**
 * @author: Toby Yu (yuyang226@gmail.com)
 */
var URL_PREFIX_ITEM = "cgi.ebay.com";
var URL_PREFIX_SEARCH = "shop.ebay.com";

var DEFAULT_BACKGROUND_COLOR = "#FEBE43";

var PAY4ME_BTN_ID = "pay4me";
var PAY4ME_BTN_VALUE = "Pay For Me";

var sellerId = "";
var pay4MeBtn = null;

init();

function init(){
    console.log("[Func] init");
    var pmsec = document.getElementById("pmsec");
    if (pmsec != null && typeof pmsec != "undefined") {
        // check out page
    	initCheckoutSection();
    }
}

function initCheckoutSection(){
    console.log("[Func] initCheckoutSection");
    
    // get the pay4me button
    var btn = getPay4MeButton();
    if (!btn) {
        console.error("Error: unable to create/find button to pay 4 me.");
        return;
    }
    
    btn.addEventListener("click", pay4meListener);
}

function pay4meListener(){
    console.log("[Func] pay4meListener");
    window.location.href = 'http://ebaypayforme.appspot.com/';
}

function getPay4MeButton(){
    console.log("[Func] getPay4MeButton");
    
    if (pay4MeBtn) {
        return pay4MeBtn;
    }
    
    pay4MeBtn = createPay4MeButton();
    
    return pay4MeBtn;
}

function createPay4MeButton(){
    console.log("[Func] createPay4MeButton");
    
    var elms = document.getElementById("pmsec");
    if (elms.children.length > 0) {
    	var child = elms.children[0];
    	if (child.children.length > 1 && child.nodeName == "DIV" && child.className == "cf") {
    		 console.log("<div> found: " + child);
             
             var span = document.createElement("span");
             span.className = "bn-b psb-b psb-S";
             
             var input = document.createElement("input");
             input.id = PAY4ME_BTN_ID;
             input.value = PAY4ME_BTN_VALUE;
             input.type = "button";
             
             span.appendChild(input);
             
             var label = document.createElement("label");
             label.element_id = "Pay4Me";
             label.appendChild(span);
             
             var div = document.createElement("div");
             div.className = "cf";
             div.appendChild(label);
             child.appendChild(div);
             
             //also configure the class name of Paypal div to be higher
             var paypal = child.children[1];
             paypal.className = "pb10 " + paypal.className;
             return input;
    	}
    }
}

