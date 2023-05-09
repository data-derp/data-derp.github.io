import React from 'react';
import useFrontMatter from '@theme/useFrontMatter';
import Admonition from '@theme/Admonition';

export default function Readingtime({children, minutesToComplete}) {
    const timeToComplete = minutesToComplete || useFrontMatter()['minutesToComplete'];

    if (timeToComplete && timeToComplete >= 0) {
        return (
            <div style={{marginTop: '1em'}}>
                <Admonition type="tip" icon="🕑" title="Estimated time for completion">
                    <p>This section takes about {formatMinutes(timeToComplete)} to complete.</p>
                </Admonition>
            </div>
        );
    }
    return null;
}

function formatMinutes(totalMinutes) {
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    const hourPart = hours > 0 ? `${hours}h` : '';
    const minutePart = hours > 0 && minutes > 0 ? `${minutes}m` : minutes > 0 ? `${minutes} minutes` : '0m';
    return `${hourPart}${minutePart}`;
}
