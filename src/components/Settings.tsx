import * as React from 'react';
import { DropDownMenu } from 'material-ui/DropDownMenu';
import { MenuItem, Checkbox } from 'material-ui';

export interface SettingsProps {
    handleGameTimeChange: (gameTime: number) => void;
    handleHiddenPartChange: (hiddenPart: boolean) => void;
    gameTime: number;
    hiddenPart: boolean;
}

export interface SettingsState {
}

export class Settings extends React.Component<SettingsProps, SettingsState> {
    constructor(props: SettingsProps) {
        super(props);
        this.state = {value: 30};
    }
    handleGameTimeChange = (event: any, index: number, value: any): void => {
        this.props.handleGameTimeChange(value);
    }
    handleHiddenPartChange = (): void => {
        this.props.handleHiddenPartChange(!this.props.hiddenPart);
    }
    render() {
        const {gameTime, hiddenPart} = this.props;
        return(
            <div style={{
                flexDirection: 'row',
                display: 'flex',
                alignItems: 'center',
                margin: '8px'
            }}>
                <DropDownMenu
                    value={gameTime} 
                    onChange={this.handleGameTimeChange}
                >
                    {[5, 20, 30, 40, 45, 50, 60].map((t) => (
                        <MenuItem key={t} value={t} primaryText={t.toString()}/>
                    ))}
                </DropDownMenu>
                <Checkbox
                    label="hidden part"
                    checked={hiddenPart}
                    onCheck={this.handleHiddenPartChange}
                />
            </div>
        );
    }
}