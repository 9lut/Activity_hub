import type { FC } from 'react';
import { memo } from 'react';
import resets from '../_resets.module.css';
import classes from './Homepage.module.css';

interface Props {
    className?: string;
}

export const Homepage: FC<Props> = memo(function Homepage(props = {}) {
    return (
        <div className={`${resets.clapyResets} ${classes.root}`}>
            <div className={classes.wpp2}></div>
            <div className={classes.activity11}></div>
            <div className={classes.welcomeTo}>Welcome to</div>
            <a href = "http://localhost:3000/Home" className={classes.homepage}>Login &gt;&gt;</a>
        </div>
    );
});