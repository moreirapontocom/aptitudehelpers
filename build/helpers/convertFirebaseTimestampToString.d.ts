declare const convertFirebaseTimestampToString: (firebaseTimestamp: {
    _seconds: number;
    _nanoseconds: number;
} | any, format?: string) => string;
export default convertFirebaseTimestampToString;
