(function(){
    $('a', '#theory')
        .click(test);
    $('#sub')
        .click(submit);
})();
function test(){
    $('#theory').css({'display':'none'});
    $('#quiz').css({'display': 'block'});

}
function submit(){
    alert('Спасибо. Вы молодец ;-)');
    $('#quiz').css({'display':'none'});
    $('#afterSubmit').css({'display': 'block'});
    window.location.hash='#afterSubmit';
}
