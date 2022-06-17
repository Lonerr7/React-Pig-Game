import s from './Player.module.scss';

const Player = ({ id, score, currentScore, active }) => {
  return (
    <div className={active ? `${s.player} ${s.active}` : s.player}>
      <h2 className={s.player__title}>Player {id}</h2>
      <p className={s.player__score}>{score}</p>
      <div className={s.player__currentScoreBox}>
        <p className={s.player__currentScoreTitle}>current</p>
        <p className={s.player__currentScore}>{currentScore}</p>
      </div>
    </div>
  );
};

export default Player;
