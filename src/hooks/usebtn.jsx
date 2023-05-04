import {useState}from 'react'


function useToggle(initialValue = false) {
    const [value, setValue] = useState(initialValue);

    const toggle = () => {
        setValue(!value);
    };

    return [value, toggle];
}

function Button() {
    const [isToggled, toggle] = useToggle(true);

    const buttonStyle = {
        backgroundColor: isToggled ? 'green' : 'red',
        color: 'white',
        padding: '10px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
    };

    return (
        <button onClick={toggle} style={buttonStyle}>
            {isToggled ? 'On' : 'Off'}
        </button>
    );
}

export default Button;