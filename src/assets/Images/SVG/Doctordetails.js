import * as React from "react"
import Svg, { Path, Defs, Pattern, Use, Image } from "react-native-svg"
import { memo } from "react"

const Doctordetails = (props) => (
    <Svg
        width={414}
        height={364}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        {...props}
    >
        <Path fill="url(#a)" d="M0 0h414v373H0z" />
        <Defs>
            <Pattern
                id="a"
                patternContentUnits="objectBoundingBox"
                width={1}
                height={1}
            >
                <Use xlinkHref="#b" transform="matrix(.00067 0 0 .00075 -.572 -.024)" />
            </Pattern>
            <Image
                id="b"
                width={3200}
                height={2133}
            />
        </Defs>
    </Svg>
)

export default memo(Doctordetails);