$(document).ready(function () {
    divApiPath.innerHTML = apiPath;
});

function TestPost(button) {
    contentPane.value =  "";
    
    var parentTd = button.parentElement ;
    var parentTr = parentTd.parentElement ;
    var tdm = parentTr.children[1];
    var tdp = parentTr.children[2];
    var inputText = tdp.children[0];

    var methodName = apiPath + tdm.innerHTML;
    var methodParam = inputText.value;

    $.ajax( {
        url : methodName, 
        type : "POST", 
        data : methodParam, 
        datatype : "json",                                  //type of data accepted "accept" 
        contentType : "application/json; charset=utf-8",    //type of data sent
        success : function (data, status, xhr) {
            var s = JSON.stringify(data, null, 3);
            contentPane.value = s;
        },
        error : function (xhr, status, err) {
            var s = "status:" + xhr.status + "\n";
            s = s + "statusText:" + xhr.statusText + "\n";
            s = s + "responseText:" + xhr.responseText;
            contentPane.value = s;
        }
    });
}

function TestGet(button) {
    contentPane.value =  "";
    
    var parentTd = button.parentElement ;
    var parentTr = parentTd.parentElement ;
    var tdm = parentTr.children[1];
    var tdp = parentTr.children[2];
    var inputText = tdp.children[0];

    var methodName = apiPath + tdm.innerHTML;
    var methodParam = inputText.value;

    $.ajax( {
        url : methodName, 
        type : "GET", 
        data : methodParam, 
        datatype : "json",                                  //type of data accepted "accept" 
        contentType : "application/json; charset=utf-8",    //type of data sent
        
        success : function (data, status, xhr) {

            var s = JSON.stringify(data, null, 3);
            contentPane.value = s;                   
        },
        
        error : function (xhr, status, err) {

            var s = "status:" + xhr.status + "\n";
            s = s + "statusText:" + xhr.statusText + "\n";
            s = s + "responseText:" + xhr.responseText;
            contentPane.value = s;
        }
    });
}

function TestPostNewLine(button) {
    contentPane.value =  "";
    
    var parentTd = button.parentElement ;
    var parentTr = parentTd.parentElement ;
    var tdm = parentTr.children[1];
    var tdp = parentTr.children[2];
    var inputText = tdp.children[0];

    var methodName = apiPath + tdm.innerHTML;
    var methodParam = inputText.value;

    $.ajax( {
        url : methodName, 
        type : "POST", 
        data : methodParam, 
        datatype : "json",                                  //type of data accepted "accept" 
        contentType : "application/json; charset=utf-8",    //type of data sent
        success : function (data, status, xhr) {
            var s = JSON.stringify(data, null, 3);
            s = s.replace(/<newline>/g, "\n");
            s = s.replace(/<tab>/g, "\t");
            $("#contentPane").val(s);
        },
        error : function (xhr, status, err) {
            var s = "status:" + xhr.status + "\n";
            s = s + "statusText:" + xhr.statusText + "\n";
            s = s + "responseText:" + xhr.responseText;
            contentPane.value = s;
        }
    });
}

function TestWebServiceGet(button) {
    contentPane.value =  "";
    
    var parentTd = button.parentElement ;
    var parentTr = parentTd.parentElement ;
    var tdp = parentTr.children[2];
    var inputText = tdp.children[0];

    var methodName = inputText.innerHTML;

    $.ajax( {
        url : methodName, 
        type : "GET", 
       
        success : function (data, status, xhr) {

            var s = JSON.stringify(data, null, 3);
            contentPane.value = s;                   
        },
        
        error : function (xhr, status, err) {

            var s = "status:" + xhr.status + "\n";
            s = s + "statusText:" + xhr.statusText + "\n";
            s = s + "responseText:" + xhr.responseText;
            contentPane.value = s;
        }
    });
}

function ToggleDiv(divId, buttonId, hiddenId) {

    var oDiv = document.getElementById(divId);
    var oButton = document.getElementById(buttonId);
    var oHidden = document.getElementById(hiddenId);

    if (oHidden.value == 1)// ((oDiv.style.display == "block") || (oDiv.style.display == ""))
    {
        oDiv.style.display = "block";
        oButton.value = "-";
        oHidden.value = 2;
    }
    else {
        oDiv.style.display = "none";
        oButton.value = "+"
        oHidden.value = 1;
    }
}