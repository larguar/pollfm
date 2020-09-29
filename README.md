# Poll.fm Cheat
A JavaScript snippet for the browser console that allows you to automatically vote on a poll.fm (Crowdsignal) poll repeatedly until you leave the page for good.

First, let me be clear that the specific poll in this example said “Make sure to vote as often as you want…” While I’m calling this a ‘cheat’ and you can definitely use it as such, technically I wasn’t breaking any rules and neither should you.

Honestly polls like this one are annoying, because voting claims to be about talent (i.e. “Which player had the most impressive performance?”), but instead is entirely based on popularity and social media shares. It’s a scam and I love finding ways to cheat scams.

All this code is doing is voting *for you* over and over again. It’s performing exactly the same processes you would be doing if you were voting manually, but it’s much faster and makes it easy to run in the background while you’re working on other things.

![JavaScript Badge](https://img.shields.io/badge/-JavaScript-539436)  

![Application Screenshot](img/full.gif)


## Table of Contents 
* [Install](#installation)
* [Usage](#usage)    
* [Credits](#credits) 
* [Questions](#questions) 
* [Donate](#donate)
* [License](#license) 


## Installation
All you need to use this code is Google Chrome’s developer tools and this code. 

* Copy the code in the [pollfm.js](pollfm.js) file.

* Swap out the id for the answer you want selected in your own poll:

```
// swap with the id of the answer you want selected
radio = document.getElementById('PDI_answer49174251');
```

* Swap out the id for the poll's submit button:

```
// swap with the poll's submit button id
button = document.getElementById('pd-vote-button10615699');
```

* Open up Inspect, select Console, paste the code, hit enter, and watch the magic happen.


## Usage 
The code can be broken down into a couple of different steps that the user would manually take.

* First, we vote. We do this by 1. selecting the answer we want 2. clicking the button to submit our vote:

```
select();
try {
    radio.click();
    start(button, 'click');
}
```

* Next, we’re taken to the Results page. Here, we can see how many votes each answer has. We also have the option to click “ascdasdc”

```
select();
try {
    back.click();
}
```

* Lastly, we want to repeat the process indefinitely. Poll.fm allows you to vote 25 times in a row and then forces you to wait a couple of minutes before you can vote again, so I wrote a pause into the code. As long as you keep the tab open (pull the tab into a separate window if you want to have it run in the background), the loop will continue.

```
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
```

* To stop voting, all you have to do is close out of or refresh the page. 


## Credits
I was able to get this working with the help of some code in [this Reddit post](https://www.reddit.com/r/HelloInternet/comments/6p74ii/all_best_voting_bots/).


## Questions
If you have any questions, feel free to find me at:
* Email: laurensiminski@gmail.com
* Website: https://siminski.co
* Github: [@siminski](https://github.com/siminski)


## Donate
Appreciate this code? Say thanks with a coffee:

[![ko-fi](https://www.ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/W7W21YVJJ)


## License
Copyright (c) 2020 Lauren Siminski.
