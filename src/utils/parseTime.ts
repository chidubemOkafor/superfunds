export const getTimeUntilUnlock = (unlockTime: number) => {
    const currentTime = Math.floor(Date.now() / 1000); // Get current time in UNIX timestamp
    const timeDifference = unlockTime - currentTime;
    const days = Math.floor(timeDifference / (24 * 3600)); // Calculate days
    const hours = Math.floor((timeDifference % (24 * 3600)) / 3600); // Calculate hours
    return `${days} days ${hours} hours`;
  }