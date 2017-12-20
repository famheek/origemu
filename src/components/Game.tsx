import * as React from 'react';
import { LinearProgress, FlatButton, RaisedButton } from 'material-ui';
import { Settings } from './Settings';
import { Board } from './Board';

import { games } from './../games';

function shuffle<T>(a: T[]): void {
    for(let i = a.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let t = a[i];
        a[i] = a[j];
        a[j] = t;
    }
}

export interface GameProps {
}

export interface GameState {
    gameTime: number;
    hiddenPart: boolean;
    hiddenPartIndex: number;
    hiddenColour: string;
    progress: number;
    running: boolean;
    game: number;
    currentGame: string;
}

export class Game extends React.Component<GameProps, GameState> {
    constructor(props: GameProps) {
        super(props);
        this.state = {
            gameTime: 30,
            hiddenPart: false,
            hiddenPartIndex: 0,
            hiddenColour: '',
            progress: 0,
            running: false,
            game: 0,
            currentGame: 'RGBY'
        }
    }
    componentDidMount() {
        shuffle(games);
    }
    handleGameTimeChange = (gameTime: number): void => {
        this.setState({gameTime: gameTime});
    }
    handleHiddenPartChange = (hiddenPart: boolean): void => {
        this.setState({hiddenPart: hiddenPart});
    }
    handleHiddenPart() {
        if(this.state.hiddenPart && this.state.running) {
            const i = this.state.hiddenPartIndex;
            const game = this.state.currentGame;
            return game.substr(0, i) + 'W' + game.substr(i + 1);
        }
        return this.state.currentGame;
    }
    handleStartClick = (): void => {
        if(this.state.running === true) return;
        //setup
        this.setState({
            running: true, 
            game: this.state.game + 1,
            currentGame: games[this.state.game],
            hiddenPartIndex: Math.floor(Math.random() * 4)
        });
        this.progress(0, this.state.gameTime);
    }
    progress(completed: number, max: number): void {
        if(completed >= max) {
            this.handleHiddenPart();
            this.setState({
                progress: max, 
                running: false
            });
        } else {
            this.setState({progress: completed});
            setTimeout(() => this.progress(completed + 1, max), 1000);
        }
    }
    render() {
        return(
            <>
                {/* <pre>{JSON.stringify(this.state)}</pre> */}
                <div>
                    <Settings
                        handleGameTimeChange={this.handleGameTimeChange}
                        handleHiddenPartChange={this.handleHiddenPartChange}
                        gameTime={this.state.gameTime}
                        hiddenPart={this.state.hiddenPart}
                    />
                    <RaisedButton
                        label="start"
                        primary={true}
                        onClick={this.handleStartClick}
                    />
                </div>
                <div style={{
                    flexDirection: 'row',
                    display: 'flex',
                    alignItems: 'center',
                    padding: '8px',
                    maxWidth: '512px'
                }}>
                    <p style={{marginRight: '8px'}}>{this.state.progress}</p>
                    <LinearProgress
                        style={{height: '32px'}}
                        mode="determinate"
                        max={this.state.gameTime}
                        value={this.state.progress}
                    />
                </div>
                <Board game={this.handleHiddenPart()}/>
            </>
        );
    }
}