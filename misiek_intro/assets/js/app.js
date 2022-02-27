
NextStep = 1
LastStep = 1
currentStep = null
function Forward() {
	NextStep = NextStep + 1
	LastStep = NextStep - 1
	var step = document.getElementById("step1");

	if (step) {
		$("#step" + LastStep).fadeOut(200)
		$("#step" + NextStep).fadeIn(200)
	} else {
		NextStep = NextStep
	}
}

function Backward() {
	LastStep = NextStep - 1
	var step = document.getElementById("step" + NextStep);

	currentStep = NextStep

	if (step) {
		$("#step" + currentStep).fadeOut(200)
		$("#step" + LastStep).fadeIn(200)

		NextStep = LastStep
	}
}

function Skip(data = {}) {
	fetch(`https://${GetParentResourceName()}/SkipSteps`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json; charset=UTF-8',
		},
		body: JSON.stringify(data)
	})
}

window.addEventListener('message', function (event) {
	var data = event.data

	if(data.openIntroSteps != undefined) {
		if(data.openIntroSteps)
			$("#app").fadeIn(200)
		else {
			$("#app").fadeOut(200)
		}
	}
});