import React from "react";
import Header from "../layouts/Header";
import Contents from "../layouts/Contents";
import Footer from "../layouts/Footer";
import { Link } from "react-router-dom";
import ContInfo from "../layouts/ContInfo";

class ReferDetail extends React.Component {
    componentDidMount() {
        const { location, history} = this.props;
        console.log(location);

        if(location.state == undefined) {
            history.push("/reference")
        }
    }

    render(){
        const {location} = this.props;
        const {title,desc1,desc2,element,tag,version,use,definition,view} = this.props.location.state.cssRefer;
        return (
            location.state
            ? (
                <div>
                    <Header></Header>
                    <Contents>
                    <section id="referCont">
                            <div className="container">
                                <div className="refer__detail pt200">
                                    <h3>{title}</h3>
                                    <p>{desc2}</p>
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>특징</th>
                                                <th>설명</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th>기본 값</th>
                                                <td>{element}</td>
                                            </tr>
                                            <tr>
                                                <th>적용</th>
                                                <td>{tag}</td>
                                            </tr>
                                            <tr>
                                                <th>버전</th>
                                                <td>{version}</td>
                                            </tr>
                                            <tr>
                                                <th>사용성</th>
                                                <td>{use}</td>
                                            </tr>
                                        </tbody>
                                    </table>

                                    <h4>정의(Definition)</h4>
                                    <ul>
                                        {definition.map((definition) => (
                                            <li key={definition.toString()}>{definition}</li>
                                        ))}
                                    </ul>
                                    <Link className="list-btn" to="/reference">목록보기</Link>
                                </div>
                            </div>
                        </section>
                        <ContInfo></ContInfo>
                    </Contents>
                    <Footer></Footer> 
                </div>
            )
            :<span></span>
        )
    }
}

export default ReferDetail