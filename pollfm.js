let radio;
let button;
let back;

let i = 0;
setInterval(() => {
	if (i === 25) {
	    pause(120000);
	    i = 0;
	}
	select();
	try {
		radio.click();
		start(button, 'click');
    }
    catch (err) {}
}, 1000);
setInterval(() => {
	select();
	try {
        back.click();
    }
    catch (err) {}
}, 1000, 500);

function select() {
    // swap with the id of the answer you want selected
    radio = document.getElementById('PDI_answer49174251');
    // swap with the poll's submit button id
	button = document.getElementById('pd-vote-button10615699');
	back = document.querySelector('a.pds-return-poll');
}

function start(element, event) {
	if (element.fireEvent) {
		element.fireEvent('on' + event);
	} else {
		let object = document.createEvent('Events');
		object.initEvent(event, true, false);
		object.which = element;
		i++;
		element.dispatchEvent(object);
	}
}

function pause(ms) {
	let currentTime = new Date().getTime();
	while (currentTime + ms >= new Date().getTime()) {
        // do nothing for 2 minutes
    }
}