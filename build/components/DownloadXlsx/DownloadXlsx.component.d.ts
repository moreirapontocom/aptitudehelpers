interface DownloadXlsxProps {
    payload: any;
    filename: string;
    btnLabel?: string;
    btnClass?: string;
}
declare const DownloadXlsx: ({ payload, filename, btnLabel, btnClass }: DownloadXlsxProps) => any;
export default DownloadXlsx;
