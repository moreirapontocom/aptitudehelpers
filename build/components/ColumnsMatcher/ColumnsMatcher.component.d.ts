import "./ColumnsMatcher.component.scss";
interface ColumnsMatcherProps {
    columnsFrom: string[];
    columnsTo: string[];
    fromDescription?: string;
    toDescription?: string;
    onMatchColumns?: (columns: {
        from: string;
        to: string;
    }[]) => void;
}
declare const ColumnsMatcher: ({ columnsFrom, columnsTo, fromDescription, toDescription, onMatchColumns }: ColumnsMatcherProps) => import("react/jsx-runtime").JSX.Element;
export default ColumnsMatcher;
