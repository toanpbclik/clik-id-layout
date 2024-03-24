export const calculateTimeDifference = (timestamp?: number): string => {
	if (!timestamp) return "";

	const currentTime = new Date().getTime();
	const timeDifference = currentTime - timestamp;

	const secondsAgo = Math.floor(timeDifference / 1000);
	if (secondsAgo < 60) return `${secondsAgo}s`;

	// Calculate the time in minutes
	const minutesAgo = Math.floor(secondsAgo / 60);
	if (minutesAgo < 60) return `${minutesAgo}m`;

	// Calculate the time in hours
	const hoursAgo = Math.floor(minutesAgo / 60);
	if (hoursAgo < 24) return `${hoursAgo}h`;

	// Calculate the time in days
	const daysAgo = Math.floor(hoursAgo / 24);
	if (daysAgo < 7) return `${daysAgo}d`;

	return new Date(timestamp).toLocaleString();
};
