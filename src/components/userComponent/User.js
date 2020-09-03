import React from 'react';
import './User.css';
import { DrawerMenu } from '../drawerComponent/DrawerMenu';


export class User extends React.Component {

    constructor(props) {
        super(props);
    }
    
    render(){

        return(
            <header>
                <div>
                    <DrawerMenu/>
                </div>
            </header>
            
        );

    }


}
