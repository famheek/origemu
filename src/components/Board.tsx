import * as React from 'react';

class colourMapping {
    [i: string]: string
}
const colours: colourMapping = {
    'R': 'red',
    'Y': 'yellow',
    'B': 'blue',
    'G': 'green',
    'W': 'white'
}

export interface BoardProps {
    game: string;
}

export interface BoardState {
}

export class Board extends React.Component<BoardProps, BoardState> {
    constructor(props: BoardProps) {
        super(props);
    }
    render() {
        const [lr, lc, rr, rc] = this.props.game.split('');
        return(
            <div style={{
                width: '50%',
                maxWidth: '1024px'
            }}>
                {/* <pre>{JSON.stringify([lr, lc, rr, rc])}</pre> */}
                <svg style={{
                    width: '100vh',
                    height: '50vh',
                    maxWidth: '1024px'
                }}>
                    <rect style={{stroke: 'black', 'stroke-opacity': '0.3', strokeWidth: '2px'}}width="50%" height="100%" fill={colours[lr]}/>
                    <circle style={{stroke: 'black', 'stroke-opacity': '0.3', strokeWidth: '2px'}}cx="25%" cy="50%" r="20%" fill={colours[lc]}/>
                    <rect style={{stroke: 'black', 'stroke-opacity': '0.3', strokeWidth: '2px'}}x="50%" width="50%" height="100%" fill={colours[rr]}/>
                    <circle style={{stroke: 'black', 'stroke-opacity': '0.3', strokeWidth: '2px'}}cx="75%" cy="50%" r="20%" fill={colours[rc]}/>
                </svg>
            </div>
        );
    }
}