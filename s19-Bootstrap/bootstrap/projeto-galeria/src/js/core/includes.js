import $ from 'jquery';

const loadHtmlSuccessCallbacks = [];

export function onLoadHtmlSuccess(callback){
    if(!loadHtmlSuccessCallbacks.includes(callback)){
        loadHtmlSuccessCallbacks.push(callback);
    }
}

function loadIncludes(parent){ //This function will read all elements with the attribute wm-include
    if(!parent) parent = 'body';
    $(parent).find('[wm-include]').each(function(i,e){
        const url = $(e).attr('wm-include');
        $.ajax({
            url,
            success(data){ //In case the AJAX request is sccessful
                $(e).html(data);
                $(e).removeAttr('wm-include'); //Avoids the attribute being processed a sencond time

                loadHtmlSuccessCallbacks.forEach(callback => callback(data));
                loadIncludes(e);
            }
        });
    });
}

loadIncludes();