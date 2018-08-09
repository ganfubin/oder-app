import React from 'react'

export default class extends React.Component {
    static async getInitialProps({req, res}) {
        const locals = res.locals;
        return {locals}
    }

    render() {
        return (
            <div>
                <style jsx> {`
                    .hello {
                        color: #4a4a4a;
                        font-size: 18px;
                    }
                `}</style>
                <div className="hello"> Hello World {this.props.locals.aa}</div>
            </div>
        )
    }
}