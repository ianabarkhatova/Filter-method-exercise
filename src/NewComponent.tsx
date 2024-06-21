import React from "react";

type NewComponentPropsType = {
    currentMoney: Array<{banknote: string; nominal: number; number: string}>,
    onClickFilterHandler: (buttonName: 'all' | 'dollar' | 'ruble') => void
};

export const NewComponent = ({currentMoney, onClickFilterHandler}: NewComponentPropsType) => {
    return (
        <>
            <ul>
                {currentMoney.map((m, index) => {
                    return (
                        <li key={index}>
                            <span>{m.banknote}</span>
                            <span>{m.nominal}</span>
                            <span>{m.number}</span>
                        </li>
                    )
                })}
            </ul>

            <div style={{marginLeft: "35px"}}>

                <button onClick={() => onClickFilterHandler("all")}>all</button>
                <button onClick={() => onClickFilterHandler("ruble")}>ruble</button>
                <button onClick={() => onClickFilterHandler("dollar")}>dollar</button>

            </div>
        </>
    );
};