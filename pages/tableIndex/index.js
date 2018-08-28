import React from 'react'
import Head from 'next/head'
import './index.less'
class tableIndex extends React.Component {
    render() {
        return (
            <div>
                <Head>
                    <title>首页</title>
                </Head>
                <div className="table-index">
                    <div className="img_container">
                        <img />
                        <div className="store_name"></div>
                    </div>
                    <div className="main">
                        <div className="number"></div>
                        <div className="order">
                            <a >开始点餐</a>
                        </div>
                    </div>
                </div>
            </div>)
    };
};
export default tableIndex;