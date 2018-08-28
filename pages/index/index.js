import React from 'react'
import Head from 'next/head'
import './index.less'
const names = ['Alice', 'Emily', 'Kate'];

 class Index extends React.Component {
    static async getInitialProps({req, res}) {
        const locals = res.locals;
        return {names, locals ,a: 2}
    }
    constructor(props) {
        super(props);
        this.state = {
            ...props
        }
    }
    meClick(){
        this.setState({
            count: 1,
            a: 3
        })
    }

    render() {
        let nameEle = this.props.names.map((name, index) => {
            return <div key={index}>{name}</div>
        });


        return (
            <div className="app-index">
                <Head>
                    <title>My page title</title>
                </Head>
                {nameEle}
                <div className="hello" onClick={this.meClick.bind(this)}> Hello World {this.props.locals.aa}</div>
            </div>
        )
    }
}
export default Index;