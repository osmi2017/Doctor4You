import * as React from "react"
import Svg, { Path, Rect } from "react-native-svg"
import { memo } from "react"

const Appointmentalarm = (props) => (
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
            fill="#FFA873"
            stroke="#fff"
            strokeWidth={3}
        />
        <Path
            d="M13.221 16.502a6.177 6.177 0 0 1 3.71-2.618.38.38 0 0 0 .233-.572 2.797 2.797 0 1 0-4.56 3.217.38.38 0 0 0 .617-.027ZM23.316 12c-.994 0-1.866.52-2.36 1.302a.381.381 0 0 0 .234.574 6.172 6.172 0 0 1 3.725 2.598.38.38 0 0 0 .619.022c.362-.47.579-1.06.579-1.7A2.797 2.797 0 0 0 23.316 12ZM25.238 20.563a6.12 6.12 0 0 0-.77-2.977 6.172 6.172 0 0 0-4.455-3.104 6.144 6.144 0 0 0-.935-.08 6.15 6.15 0 0 0-.976.086 6.174 6.174 0 0 0-4.43 3.124 6.14 6.14 0 0 0 1.323 7.552l-.518.732a.7.7 0 0 0 1.14.81l.519-.731c.875.477 1.877.75 2.942.75a6.122 6.122 0 0 0 2.942-.75l.518.73a.698.698 0 0 0 .975.165.7.7 0 0 0 .166-.975l-.52-.73a6.14 6.14 0 0 0 2.08-4.602Zm-6.16 4.438a4.442 4.442 0 0 1-4.437-4.438c0-.763.193-1.48.534-2.108a4.446 4.446 0 0 1 3.22-2.271c.223-.035.45-.059.683-.059.22 0 .435.021.646.053a4.446 4.446 0 0 1 3.252 2.265c.344.63.54 1.352.54 2.12A4.442 4.442 0 0 1 19.078 25Z"
            fill="#FFA873"
        />
        <Path
            d="m21.564 21.601-1.693-1.045a.809.809 0 0 0-.292-.49l.077-2.124a.492.492 0 0 0-.982-.036l-.078 2.127a.817.817 0 0 0 .828 1.402l1.624 1.004a.495.495 0 0 0 .677-.16.492.492 0 0 0-.16-.678Z"
            fill="#FFA873"
        />
    </Svg>
)

export default memo(Appointmentalarm);