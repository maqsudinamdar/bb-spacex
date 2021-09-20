import parseISO from "date-fns/parseISO";
import format from "date-fns/format";


export const getStatus = (upcoming, launchSuccess) => {
    const status = upcoming ? "upcoming" : launchSuccess ? "success" : "failed";
    return <span className={`round-span ${status}`}>{status}</span>;
};


export const formatDate = date => {
    return format(
        parseISO(date),
        "dd MMMM yyyy 'at' HH:mm"
    )
}