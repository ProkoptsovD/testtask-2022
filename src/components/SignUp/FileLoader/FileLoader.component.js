import Input from "../../common/Input";
import s from './FileLoader.module.scss';

const FileLoader = ({ loadedFile, btnText, onClick }) => {
    return (
        <label className={s.label}>
            <Input
                type="file"
                accept="image/png, image/jpg, image/gif, image/jpeg"
                className={`${s.fileloader}`}
            />
            <button
                type="button"
                className={s.upload_btn}
                disabled={true}
                onClick={onClick}
            >
                {btnText ?? 'Upload'}
            </button>
            <span>{`${loadedFile ?? 'Upload your photo'}`}</span>
        </label>
    )
}

export default FileLoader;