
export const getStatus = (upcoming, launchSuccess) => {
    const status = upcoming ? "upcoming" : launchSuccess ? "success" : "failed";
    return <span className={`round-span ${status}`}>{status}</span>;
};