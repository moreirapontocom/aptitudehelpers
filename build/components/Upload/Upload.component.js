"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const storage_1 = require("firebase/storage");
const __1 = require("../../");
const Upload = (props) => {
    const { storage, accept, folder, showProgress, loading, onUpload, } = props;
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
        const generatedName = `${(0, __1.generateRandomString)(20)}.${extension}`;
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
        // If we don't want to send the file to storage,
        // We just return the file details and content
        if (!storage) {
            const reader = new FileReader();
            reader.onload = (e) => {
                onUpload(Object.assign(Object.assign({}, fileDetails), { content: e.target.result }));
                setLoadingUploadFile(false);
                inputFile.current.value = "";
            };
            reader.readAsText(file);
            return;
        }
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
    return (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("input", { ref: inputFile, onChange: (e) => _uploadFile(e.target.files[0]), type: "file", accept: accept || "*", disabled: loading || loadingUploadFile, className: "form-control" }), (0, jsx_runtime_1.jsx)(__1.Separator, { size: 5 }), (0, jsx_runtime_1.jsx)(__1.Loading, { loading: loadingUploadFile, parent: "inline", color: "text-primary" }), loadingUploadFile && showProgress && (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(__1.Separator, { size: 5 }), (0, jsx_runtime_1.jsxs)("small", { className: "text-muted", children: [progress, "%"] })] })] });
};
exports.default = Upload;
