import './index.css';
import reportWebVitals from './reportWebVitals';
import React, {useEffect, useState} from 'react';

function ChangeColor() {
    let [number, setNumber] = useState(0);
    let styleDiv = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        height: "100vh"
    };
    let styleContainer={
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        height:"200",
        width:"400px"
    }
    let buttonStyle={
        width: "180px",
        height: "90px",
        backgroundColor:"#ee786e",
        fontSize:"70px",
        margin:"5px"
    }
    let valueStyle={
        width:"380px",
        height:"120px",
        flex:'display',
        flexDirection:'row',
        justifyContent:"center",
        textAlign:"center",
        fontSize: "100px",
        backgroundColor: '#a2ccb6'

    }


    useEffect(() => {
        document.querySelector('body').style.backgroundColor = "#fceeb5";
        window.addEventListener('click', (e) => {
            var val=number;
            if(e.target.textContent==='-1'){
                val-=1;
               localStorage.setItem("number", JSON.stringify(val));
                setNumber(JSON.parse(localStorage.getItem('number')));

            }
            else if(e.target.textContent==='+1'){
                val+=1;

                localStorage.setItem("number", JSON.stringify(val));
                setNumber(JSON.parse(localStorage.getItem('number')));
            }
            else {
                val = 0;
                localStorage.setItem("number", JSON.stringify(val));
                setNumber(JSON.parse(localStorage.getItem('number')));
            }
        });
    }, [number]);


    return (
        <div style={styleDiv}>
            <div style={styleContainer}>
                <div style={valueStyle}><p>{number}</p></div>
                <div>
                    <button style={buttonStyle}>-1</button>
                    <button style={buttonStyle}>+1</button>
                </div>
                <button style={{height:"90px", width:"380px"}}>RESET</button>
            </div>
        </div>
    )
}

export default ChangeColor;


reportWebVitals();
