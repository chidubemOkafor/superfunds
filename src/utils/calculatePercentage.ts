export const progressPercentage = (max: number, current: number) => {
    return max > 0 
    ? ((current / max) * 100)
    : 0;
}