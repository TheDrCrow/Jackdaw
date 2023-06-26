
$('document').ready(function () {

$("p,text,hr.subsection").hide();
$("h6").hide();
$('.show').show();

$("h5").click(function () {
  $(this).nextUntil("hr:not(.subsection)").toggle();
  $('.show').show();
});

$("h6,p").click(function () {
	$(this).toggleClass("selected");
	var words = $(this).text();
	copyStringToClipboard(words);
});

//Copy All function 
$("#copyAll").click(function () {
	var stuff, tt ;
	$(".selected").each(function() {
		tt = $(this).text(); 
		stuff = stuff + tt + "\n";
	});
	copyStringToClipboard(stuff);
});

function copyStringToClipboard(str) {
	var el = document.createElement('textarea');
	el.value = str;
	el.setAttribute('readonly', '');
	el.style = { position: 'absolute', left: '-9999px' };
	document.body.appendChild(el);
	el.select();
	document.execCommand('copy');
	document.body.removeChild(el);
};

// PROSTATE VOLUME AND BLADDER.  

$('#prMe').click(function () {
	var prwi = $('#prWi').val();
	var prhe = $('#prHe').val();
	var prde = $('#prDe').val();
	prvo = prwi * prhe * prde * 0.52;
	prvo = prvo.toFixed(1);
	var bph = $("input[name='bph']:checked").val();
	var blaVol = $('input[name="blaVol"]:checked').val();
	var blaWal = $("input[name='blaWal']:checked").val();
	var blaDiv = $("#blaDiv").val();
	prTe = '- Prostate measures: ' + prwi + ' w x ' + prde + ' d x ' + prhe + ' h (cm) = ' + prvo + ' cm^3';  
	prTe += '\n' + '- BPH grade: ' + bph;
	prTe += '\n' + '- Bladder filling: ' + blaVol; 
	prTe += '\n' + '- Bladder wall: ' + blaWal + ' with ' + blaDiv ; 

	copyStringToClipboard(prTe);
});

// PROSTATE LESION FUNCTION
$('#prle').click(function () {
	// Get the lesion number
	var prleNu = $("#prleNu1").val();
	// Get the image number on the Ax T2s
	var prlele = $("#prlele").val();

	// calc the lesion volume
	var prlewi = $('#prleWi').val();
	var prlehe = $('#prleHe').val();
	var prlede = $('#prleDe').val();
	var prlevo = prlewi * prlehe * prlede * 0.52;
	prlevo = prlevo.toFixed(1);

	//Get the lesion description and type
	var prledes = $("input[name= 'prleDes1']:checked").val();  // name is prleDes1 
	var prlety = $("input[name='prlety']:checked").val();
	// Get the lesion signal, b1400 and enhancement
	var prlesi = $("input[name='prleSi']:checked").val();
	var prlebS = $("input[name='prlebS']:checked").val();
	var prleen = $("input[name='prleen']:checked").val();
	// Get the invasive margin
	var prlema = $("input[name='prlema']:checked").val();
	// Get the lesion side, level and part
	var prlepo1 = $("input[name='prlepo1']:checked").val();
	var prlepo2 = $('#prlepo2').val();
	var prlepo3 = $('#prlepo3').val();
	// Likert score
	var prleLI = $('#prleLI').val();

	//Make the report
	var prleRe = '# ' + prleNu + '  ( Image: ' + prlele + ' of the axial T2s )' + "\n";
	prleRe += '- ' + prledes + ' ' + prlety + ' centred in the ' + prlepo1 + ' ' + prlepo2 + ' ' + prlepo3 + "\n";
	prleRe += '- Measures: ' + prlewi + 'cm(w) x ' + prlede + 'cm(d) x ' + prlehe + 'cm(h) = ' + prlevo + 'cm^3.' + "\n";
	prleRe += '- Signal: ' + prlesi + ' with ' + prlebS + ' b1400 signal and ' + prleen + ' enhancement.' + "\n";
	prleRe += '- ' + prlema + "\n" + 'LIKERT SCORE = ' + prleLI;

	// Copy the report to the clipboard. 
	copyStringToClipboard(prleRe);

});

});
                
                  
                
  

