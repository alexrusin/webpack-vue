function notifier (message) {
	alert(message);
}

function logger (message) {
	console.log(message);
}

export default {
	notifier: notifier,
	logger: logger
};