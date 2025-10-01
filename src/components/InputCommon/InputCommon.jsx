import { useState } from 'react';
import styles from './styles.module.scss';
import { BiShow } from 'react-icons/bi';
import { BiHide } from 'react-icons/bi';

function InputCommon({ label, type, isRequired = false }) {
  const { container, inputLabel, boxInput, boxIcon } = styles;
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
        <input type={isShowPass} />
        {type === 'password' && (
          <div className={boxIcon} onClick={() => handleShowHidePassword()}>
            {showPass ? <BiShow /> : <BiHide />}
          </div>
        )}
      </div>
    </div>
  );
}

export default InputCommon;
