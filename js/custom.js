

function addItenery(iteneryID) {

  document.getElementById(iteneryID).insertAdjacentHTML("beforeend",
  '<div class="input-group input-group-merge speech-to-text mt-2">'+
  '<input type="text" class="form-control" placeholder="Add Itenery" '+
  'aria-describedby="text-to-speech-addon"><span class="input-group-text" '+
  'id="text-to-speech-addon"><i class="bx bx-minus cursor-pointer remove-to-itenery-toggle">'+
  '</i></span></div>');
  removeItenery();
}

function addHighlight() {

  document.getElementById("iteneryHighlight").insertAdjacentHTML("beforebegin",
  '<div class="input-group speech-to-text mb-3">'+
    '<input class="form-control" type="text" placeholder="Highlight Title" required>'+
    '<textarea placeholder="Highlight Description" class="form-control" id="exampleFormControlTextarea2" rows="3"></textarea>'+
    '<span class="input-group-text">'+
      '<i class="bx bx-minus cursor-pointer remove-to-itenery-highlight"></i>'+
    '</span>'+
  '</div>');
  removeHighlight();
}

$(".add-to-itenery-toggle").click(function() {

    var pid = $(this).closest('div').parent().attr("id");
    addItenery(pid);
});

function removeItenery() {

  $(".remove-to-itenery-toggle").click(function() {

      var classrem = $(this).closest('div').remove();
  });
}

$(".add-to-itenery-highlight").click(function() {

    addHighlight();
});

function removeHighlight() {

  $(".remove-to-itenery-highlight").click(function() {

      var classrem = $(this).closest('div').remove();
  });
}
