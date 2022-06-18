import { useAppDispatch } from '../../../hooks/hooks';
import s from './NewGameBtn.module.scss';

type UtilityBtnProps = {
  title: string;
  icon?: JSX.Element;
  actionCreator?: any;
  classProp?: string;
};

const UtilityBtn: React.FC<UtilityBtnProps> = ({
  title,
  icon,
  actionCreator,
  classProp,
}) => {
  const dispatch = useAppDispatch();

  return (
    <button
      className={classProp ? `${classProp} ${s.utilityBtn}` : s.utilityBtn}
      onClick={() => dispatch(actionCreator())}
    >
      <>
        {icon ? icon : ''} {title}
      </>
    </button>
  );
};

export default UtilityBtn;
