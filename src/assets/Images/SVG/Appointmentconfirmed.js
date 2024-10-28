import * as React from "react"
import Svg, { Path, Rect } from "react-native-svg"
import { memo } from "react"

const Appointmentconfirmed = (props) => (
    <Svg
        width={38}
        height={38}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Rect
            opacity={0.1}
            x={1.5}
            y={1.5}
            width={35}
            height={35}
            rx={11.5}
            fill="#A079EC"
            stroke="#fff"
            strokeWidth={3}
        />
        <Path
            d="M13.001 20.934v-.153c.027-.491.181-.967.45-1.38a3.83 3.83 0 0 0 .892-1.767c.034-.5 0-1.014.034-1.52.242-2.434 2.65-4.114 4.959-4.114h.067c2.349 0 4.697 1.68 4.952 4.114.047.5 0 1.02.04 1.52.134.657.442 1.267.893 1.767.28.408.44.886.463 1.38v.153a2.743 2.743 0 0 1-.671 1.814c-.56.598-1.322.97-2.14 1.047-2.39.306-4.81.306-7.2 0a3.364 3.364 0 0 1-2.115-1.047 2.702 2.702 0 0 1-.624-1.814Z"
            fill="#A079EC"
        />
        <Path
            opacity={0.4}
            d="M20.248 24.822c-.476-.034-.865 0-1.254 0a4.757 4.757 0 0 0-1.148.12c-.322.073-.67.246-.67.613.033.354.225.675.523.873a2.791 2.791 0 0 0 2.013.554 2.339 2.339 0 0 0 1.738-.98.664.664 0 0 0-.114-.927 2.496 2.496 0 0 0-1.087-.253Z"
            fill="#A079EC"
        />
    </Svg>
)

export default memo(Appointmentconfirmed);
