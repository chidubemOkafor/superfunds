export const parseDateToUnix = (date: string) => {
    const unlockDate = new Date(date)
    return Math.floor(unlockDate.getTime() / 100)
}