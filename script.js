var deck = [],
	suit = [],
	mast,
	dashboard = $('#dashboard');

deck = ["6", "7", "8", "9", "10", "J", "Q", "K", "A"];
suit = ["hearts", "diamonds", "clubs", "spades"] 
console.dir(deck);
console.dir(suit);
 
for (var i = 0; i < suit.length; i++) {
	dashboard.append("<div class='cards-block-" + suit[i] + " cards-block'><ul></ul></div>");
	var cardsSuit = $(".cards-block-" + suit[i] + ' ul');
	switch (suit[i]) {
		case 'hearts' : mast = '&#9829';
			break;
		case 'diamonds' : mast = '&#9830';
			break;
		case 'clubs' : mast = '&#9827';
			break;
		case 'spades' : mast = '&#9824';
			break;
	}

	for (var j = 0; j < deck.length; j++){
		
		var text = deck[j] + mast;
		cardsSuit.append("<li><div class='first'><div class='top-index'>" + text + "</div><div class='middle-index'>" + text + "</div><div class='bottom-index'>" + text + "</div></div><div class='second'></div></li>");

	}
}

$(".cards-block ul li .second").click(function(){
	$(this).toggleClass('back');
})