import React from "react";
import Contents from "../layouts/Contents";
import ContInfo from "../layouts/ContInfo";
import Footer from "../layouts/Footer";
import Header from "../layouts/Header";
import WrapTitle from '../layouts/WrapTitle';
import { Link } from 'react-router-dom';

// function ReferDetail(props) {
//     console.log(props);
//         return <span>dddd</span>
// }
class ReferDetail extends React.Component {
    componentDidMount(){
        const { location, history } = this.props;
        if (location.state === undefined ) {
            history.push('/Reference');
        }
    }
    render(){
        const { location } = this.props;
        console.log(location.state)
        console.log(location.state.definition)
       if (location.state ){
        return (
            <div>
                <Header />
                <Contents>
                    <section id="referCont">
                    <div className="container">
                        <WrapTitle text={['Reference', 'book']} />
                        <div className="refer__detail">
                            <h3>{location.state.title}</h3>
                                <p>{location.state.desc2}</p>
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>특징</th>
                                                <th>{location.state.desc2}</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                                <tr>
                                                    <th>요소</th>
                                                    <td>{location.state.element}</td>
                                                </tr>
                                                <tr>
                                                    <th>닫는 태그</th>
                                                    <td>{location.state.tag}</td>
                                                </tr>
                                                <tr>
                                                    <th>버전</th>
                                                    <td>{location.state.version}</td>
                                                </tr>
                                                <tr>
                                                    <th>시각적 표현</th>
                                                    <td>{location.state.view}</td>
                                                </tr>
                                                <tr>
                                                    <th>사용성</th>
                                                    <td>{location.state.use}</td>
                                                </tr>
                                        </tbody>
                                    </table>

                                <h4>정의(Definition)</h4>
                                <ul>
                                    {location.state.definition.map((defer) => ( //개수만큼 나옴
                                        <li key={defer.toString()}>{defer}</li> 
                                    ))}
                                </ul>
                                <Link className="list-btn" to="/reference">목록보기</Link>
                            </div>
                        </div>
                    </section>
                    <ContInfo />
                </Contents>
                <Footer />
            </div>
        )
       } else {
           return null;
       }
    }
}
export default ReferDetail;