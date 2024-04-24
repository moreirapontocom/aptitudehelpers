interface GenerateGoogleCalendarLinkProps {
    title: string;
    description: string;
    location: string;
    startTime: Date;
    endTime: Date;
}
declare const generateGoogleCalendarLink: (event: GenerateGoogleCalendarLinkProps) => any;
export default generateGoogleCalendarLink;
