export const isAuthorizedUser = () => {
	const accessToken = window.localStorage.getItem("access_token");

	if (accessToken) {
		const parsedToken = parseJwt(accessToken);
		if (!parsedToken) return false;

		const currentTime = Date.now() / 1000;

		return parsedToken.exp > currentTime;
	} else {
		return false
	}
}

const parseJwt = token => {
	var array = token.split('.');
	if (array.length > 1) {
		var base64Url = array[1];
		var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
		var jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c) {
			return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
		}).join(''));

		return JSON.parse(jsonPayload);
	} else {
		return null;
	}
};