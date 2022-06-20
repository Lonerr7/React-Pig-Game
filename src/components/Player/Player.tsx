import s from './Player.module.scss';

type PlayerProps = {
  currentScore: number;
  score: number;
  active: boolean;
  name: string;
};

const Player: React.FC<PlayerProps> = ({
  score,
  currentScore,
  active,
  name,
}) => {
  return (
    <div className={active ? `${s.player} ${s.active}` : s.player}>
      <h2 className={s.player__title}>{name}</h2>
      <p className={s.player__score}>{score}</p>
      <div className={s.player__currentScoreBox}>
        <p className={s.player__currentScoreTitle}>current</p>
        <p className={s.player__currentScore}>{currentScore}</p>
      </div>
    </div>
  );
};

export default Player;
