import React from 'react'

export default class extends React.Component {
    static async getInitialProps({ req, res }) {
        const locals = res.locals;
        return {locals}
    }

    render() {
        return (
            <div>
                Hello World  {this.props.locals.aa}
            </div>
        )
    }
}