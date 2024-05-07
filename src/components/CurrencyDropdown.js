import React, { useState, useContext } from "react";
import { AppContext } from "../context/AppContext";

const CurrencyDropdown = (props) => {
    const { dispatch } = useContext(AppContext);
    const [currencyValue, setCurrencyValue] = useState("£ Pound");
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => setIsOpen(!isOpen);
    const handleCurrencyChange = (currency) => {
        setCurrencyValue(currency);
        dispatch({
            type: "CHG_CURRENCY",
            payload: currency[0],
        });
    };

    return (
        <div className="dropdown">
            <button
                className="btn btn-success p-3 dropdown-toggle"
                type="button"
                id="dropdownMenuButton"
                aria-expanded={isOpen}
                onClick={toggleDropdown}
            >
                Currency ({currencyValue})
            </button>
            <ul
                className={`dropdown-menu${isOpen ? " show" : ""}`}
                aria-labelledby="dropdownMenuButton"
            >
                <li>
                    <a
                        onClick={() => handleCurrencyChange("$ Dollar")}
                        className="dropdown-item"
                        href="#"
                    >
                        $ Dollar
                    </a>
                </li>
                <li>
                    <a
                        onClick={() => handleCurrencyChange("£ Pound")}
                        className="dropdown-item"
                        href="#"
                    >
                        £ Pound
                    </a>
                </li>
                <li>
                    <a
                        onClick={() => handleCurrencyChange("€ Euro")}
                        className="dropdown-item"
                        href="#"
                    >
                        € Euro
                    </a>
                </li>
                <li>
                    <a
                        onClick={() => handleCurrencyChange("₹ Ruppee")}
                        className="dropdown-item"
                        href="#"
                    >
                        ₹ Ruppee
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default CurrencyDropdown;
