"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const storage_1 = require("firebase/storage");
const generateRandomString_1 = __importDefault(require("../../helpers/generateRandomString"));
const Separator_component_1 = __importDefault(require("../Separator/Separator.component"));
const Loading_component_1 = __importDefault(require("../Loading/Loading.component"));
const Upload = (props) => {
    const { storage, accept, folder, showProgress, loading, onUpload, } = props;
    // const storage: any = getStorage(app);
    const inputFile = (0, react_1.useRef)(null);
    const [loadingUploadFile, setLoadingUploadFile] = (0, react_1.useState)(false);
    const [progress, setProgress] = (0, react_1.useState)(0);
    const _uploadFile = (e) => {
        const file = e;
        if (!file)
            return;
        const acceptExtensions = accept ? accept.split(',').map((item) => item.split('/').pop()) : [];
        const extension = file.name.substring(file.name.lastIndexOf('.') + 1, file.name.length) || "pdf";
        if (acceptExtensions.length > 0 && !acceptExtensions.includes(extension)) {
            alert(`Invalid file extension. Accepted extensions are: ${acceptExtensions.join(', ')}`);
            return;
        }
        const generatedName = `${(0, generateRandomString_1.default)(20)}.${extension}`;
        const fileDetails = {
            fileName: file.name,
            folder: folder || "",
            contentType: file.type || "application/pdf",
            size: file.size,
            extension,
            generatedName,
        };
        setLoadingUploadFile(true);
        setProgress(0);
        const storageRef = (0, storage_1.ref)(storage, `${folder}/${generatedName}`);
        const uploadTask = (0, storage_1.uploadBytesResumable)(storageRef, file);
        uploadTask.on("state_changed", (snapshot) => {
            const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
            setProgress(progress);
        }, (error) => {
            console.log("Error when uploading file", error);
            setLoadingUploadFile(false);
        }, () => {
            (0, storage_1.getDownloadURL)(uploadTask.snapshot.ref).then((downloadURL) => {
                onUpload(Object.assign(Object.assign({}, fileDetails), { downloadURL }));
                setLoadingUploadFile(false);
                setProgress(0);
                inputFile.current.value = "";
            });
        });
    };
    return (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("input", { ref: inputFile, onChange: (e) => _uploadFile(e.target.files[0]), type: "file", accept: accept || "*", disabled: loading || loadingUploadFile, className: "form-control" }), (0, jsx_runtime_1.jsx)(Separator_component_1.default, { size: 5 }), (0, jsx_runtime_1.jsx)(Loading_component_1.default, { loading: loadingUploadFile, parent: "inline", color: "text-primary" }), loadingUploadFile && showProgress && (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(Separator_component_1.default, { size: 5 }), (0, jsx_runtime_1.jsxs)("small", { className: "text-muted", children: [progress, "%"] })] })] });
};
exports.default = Upload;
