import s from './Controls.module.scss';
import dice from './../../assets/images/dice-1.png';

const Controls = () => {
  return (
    <div className={s.controls}>
      <button className={s.controls__btn}>🔄 New Game</button>
      <img className={s.controls__dice} src={dice} alt="dice" />
      <div className={s.controls__btnBox}>
        <button className={s.controls__btn}>🎲 Roll Dice</button>
        <button className={s.controls__btn}>📥 Hold</button>
      </div>
    </div>
  );
};

export default Controls;
