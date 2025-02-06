import React from "react";
import { SpeedInsights } from '@vercel/speed-insights/next';

import styles from './Layout.module.scss';
export default function Container({children, className=''}) {

    return (
        <div className={`${styles.container} ${className}`}>
            {children}
            <SpeedInsights />
        </div>
    );
}