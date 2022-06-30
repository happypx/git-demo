$(function(){
  $('form').on('click','a',function(e){
    e.preventDefault()
    $('form.active').removeClass('active').siblings("form").addClass('active')
    $('h3.active').removeClass('active').siblings("h3").addClass('active')
  })
  $('form').on('submit',function(e){
    // e.preventDefault()
    
  })
})