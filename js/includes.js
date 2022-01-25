$(function(){
    var includes = $('[data-include]');
    jQuery.each(includes, function(){
    var file = '../../includes/' + $(this).data('include') + '.html';
    $(this).load(file);
    });
});
