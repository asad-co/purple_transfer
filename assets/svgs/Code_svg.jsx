import React from 'react'

const Code_svg = ({color,...props}) => {
    return (
        <>
            <svg  
            viewBox="0 0 25 24" 
            fill='none'
            xmlns="http://www.w3.org/2000/svg"
            {...props}>
                <g clipPath="url(#clip0_113_1449)">
                    <path d="M17.25 7.75L21.75 12.08L17.25 16.25" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M7.75 16.25L3.25 11.92L7.75 7.75" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M10.75 19.25L14.25 4.75" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </g>
                <defs>
                    <clipPath id="clip0_113_1449">
                        <rect width="24" height="24" fill="white" transform="translate(0.5)" />
                    </clipPath>
                </defs>
            </svg>

        </>
    )
}

export default Code_svg
