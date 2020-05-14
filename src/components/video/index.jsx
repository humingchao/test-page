

import React from 'react';
import Styles from './index.module.css';
import QierPlayer from 'qier-player';

class App extends React.Component {

   	constructor(props){
		super(props)
		this.state = {
		}
    }

    render() {
        return (
            <div className={Styles.video}>
                <QierPlayer
                    language="zh"
                    srcOrigin="https://vhotwsh.video.qq.com/n0207aht3pu.p201.1.mp4?level=0&vkey=4F7350ACEC092C15732C54E3CCFE2D4BD3BB2B8688BB9A00C0DA40CF0CFD5C347BA260BB18D909D59973E74BE43A1E5C0968B22F6D78092A4CAC13074705D589D98DE31962C19EFA13BC1375957138BD4290C46AF1C492A7D003ACBAACA9C0E73523EBBEB0670A1D95420655AD49B434526D3893A8B75D4F&platform=10901&fmt=shd&sdtfrom="
                />
            </div>
        )
    }

}

export default App