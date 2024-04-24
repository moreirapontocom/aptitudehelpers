"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const generateGoogleCalendarLink = (event) => {
    const start = event.startTime.toISOString().replace(/[.:-]/g, '');
    const end = event.endTime.toISOString().replace(/[.:-]/g, '');
    // Final URL
    // https://calendar.google.com/calendar/r/eventedit?text=TITLE&details=DESCRIPTION&location=LOCATION&dates=START/END
    const url = new URL('https://calendar.google.com/calendar/r/eventedit');
    url.searchParams.append('text', event.title || 'New Event');
    url.searchParams.append('details', event.description || 'No Description');
    url.searchParams.append('location', event.location || 'At some place');
    url.searchParams.append('dates', `${start}/${end}`);
    return url.href;
};
exports.default = generateGoogleCalendarLink;
