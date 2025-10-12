import { useState } from 'react';
import styles from './styles.module.scss';
import { BiShow } from 'react-icons/bi';
import { BiHide } from 'react-icons/bi';

function InputCommon({ id, label, type, formik, isRequired = false }) {
  const { container, inputLabel, boxInput, boxIcon, formError } = styles;
  const [showPass, setShowPass] = useState(false);

  const handleShowHidePassword = () => {
    setShowPass(!showPass);
  };
  const isShowPass = type === 'password' && !showPass ? 'password' : 'text';
  return (
    <div className={container}>
      <div className={inputLabel}>
        {label} {isRequired ? <span>*</span> : ''}
      </div>
      <div className={boxInput}>
        <input
          id={id}
          type={isShowPass}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values[id]}
        />
        {type === 'password' && (
          <div className={boxIcon} onClick={() => handleShowHidePassword()}>
            {showPass ? <BiShow /> : <BiHide />}
          </div>
        )}
      </div>
      {formik.errors[id] && formik.touched[id] && (
        <div className={formError}>{formik.errors[id]}</div>
      )}
    </div>
  );
}

export default InputCommon;
