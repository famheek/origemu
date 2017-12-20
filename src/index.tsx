import * as React from 'react';
import * as ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import { Settings } from './components/Settings';
import { Game } from './components/Game';
import { AppBar, ToolbarGroup, Toolbar } from 'material-ui';

import { games } from './games';
import { ToolbarTitle } from 'material-ui/Toolbar';

ReactDOM.render(
    <MuiThemeProvider>
        <div>
            <Toolbar>
                <ToolbarGroup>
                    <img src="src/assets/origemu_logo.svg" width="32px" height="32px" style={{marginRight: '16px'}}/>
                    <ToolbarTitle text="Origemu"/>
                </ToolbarGroup>
            </Toolbar>
            <Game/>
        </div>
    </MuiThemeProvider>,
    document.getElementById('root')
);