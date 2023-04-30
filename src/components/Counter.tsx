import { useState } from 'react';
import styles from './counter.module.scss';

type Props = {};

export const Counter = (props: Props) => {
    const [count, setCount] = useState(0);

    return (
        <div className={styles.wrapper}>
            <h1>{count}</h1>

            <div>
                <button onClick={() => setCount((prev) => prev + 1)}>
                    increment
                </button>
            </div>
            <div>
                <button onClick={() => setCount((prev) => prev - 1)}>
                    decrement
                </button>
            </div>
        </div>
    );
};
