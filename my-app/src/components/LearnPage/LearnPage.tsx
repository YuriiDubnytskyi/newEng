import React, {FC, useState, useEffect, ChangeEvent} from 'react';
import {connect} from "react-redux";
import * as API from "./../../api/api"
import {IreduceWords} from "../../interfaces/IreduceWords";

type LearnPageProps = {
    state:IreduceWords
}

const LearnPage:FC<LearnPageProps> = (props:LearnPageProps) => {

    const words = props.state.fullWords;
    const randomSize = props.state.fullWords.length;

    const [word,setWord] = useState<string>('');
    const [rightWord,setRightWord] = useState<string>('');
    let [right,setRight] = useState<number>(0);
    let [wrong, setWrong] = useState<number>(0);
    const [userWord, setUserWord] = useState<string>('');
    let [userWell,setUserWell] = useState<string>('');

    const setUserWordHandler = (e:ChangeEvent<HTMLInputElement>) => {
        setUserWord(e.target.value);
    };

    const checkWord = () => {
        if (userWord === rightWord) {
            setRight(right + 1);
            setUserWell('true');
        } else {
            setWrong(wrong + 1);
            setUserWell('false');
        }
        setInterval(() => {
            setUserWell('undefined');
        }, 5000);


        const num:number = Math.floor(Math.random() * randomSize);
        setWord(words[num]);
        setUserWord('');
        API.getWordTranslate(words[num])
            .then(res => {
                setRightWord(res.data.text[0]);
            })
    };

    useEffect(()=>{
        const num = Math.floor(Math.random()*randomSize);
        setWord(words[num]);

        API.getWordTranslate(words[num])
            .then(res=>{
                setRightWord(res.data.text[0]);
                console.log(res.data.text)
            })
    },[]);

    return (
        <div className="main-content">
            <div className="container mt-5">
                <div className="row margin-t">
                    <div className="col-lg-10 mx-auto">
                        <h1 className="text-uppercase text-center"><strong>Learning</strong></h1>
                    </div>
                </div>
            </div>
            <div className="d-flex justify-content-around">
                <div>
                    <h2 className="text-uppercase text-center">Lets go</h2>
                    <h3 className="text-uppercase text-center"><strong>So what does it mean</strong></h3>
                    <p className="display-3 text-center">{word}</p>
                </div>
                <div>
                    <h2 className="text-uppercase text-center">Score</h2>
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Right words ---- <span>{right}</span></h5>
                            <h5 className="card-title">Wrong words ---- <span>{wrong}</span></h5>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                {userWell==='true'?
                <div className="alert alert-success text-center" role="alert">
                    Success
                </div>:<></>
                }
                {userWell==="false"?
                <div className="alert alert-danger text-center" role="alert">
                    Wrong. A right word is -- {rightWord}
                </div>:<></>
                }
            </div>
            <div className="container">
                <div className="flex-column justify-content-center text-center">
                    <div className="form-group">
                        <label>Example label</label>
                        <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Example input placeholder" value={userWord} onChange={setUserWordHandler}/>
                    </div>
                    <p className="btn btn-dark btn-xl  rounded-pill " role="button"  onClick={checkWord}>Go Learn</p>
                </div>
            </div>
        </div>
    )
};

const mapStateToProps = ( state:{ words:IreduceWords } ) => {
    return {
        state: state.words
    }
};

export default connect(mapStateToProps)(LearnPage);