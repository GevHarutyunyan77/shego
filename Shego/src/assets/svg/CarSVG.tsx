import * as React from "react"
import Svg, { Path } from "react-native-svg"

function CarSVG(props:any) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
  x="0px"
  y="0px"
  viewBox="0 0 1000 1000"
  {...props}
>
  <Path d="M229.4 475.8c-37.6 0-68.1 30.5-68.1 68.1 0 2.9.2 5.8.6 8.6 4.2 33.6 32.8 59.6 67.5 59.6 35.7 0 64.9-27.4 67.9-62.3.2-1.9.3-3.9.3-5.8 0-37.7-30.6-68.2-68.2-68.2zm-34.1 42.4l13.9 13.9c-1.1 1.9-1.9 3.9-2.5 6h-19.6c1-7.4 3.9-14.1 8.2-19.9zm-8.3 31.7h19.7c.6 2.1 1.4 4.1 2.5 5.9l-13.9 13.9c-4.3-5.6-7.2-12.4-8.3-19.8zm36.5 36.3c-7.4-1-14.1-3.9-19.8-8.2l13.9-13.9c1.8 1.1 3.8 1.9 5.9 2.4v19.7zm0-65c-2.1.6-4.1 1.4-6 2.5l-13.9-13.9c5.7-4.3 12.5-7.2 19.9-8.2v19.6zm11.8-19.5c7.5 1 14.2 3.9 19.9 8.2l-13.9 13.9c-1.9-1.1-3.9-1.9-6-2.5v-19.6zm0 84.5v-19.6c2.1-.6 4.1-1.3 5.9-2.4l13.8 13.9c-5.6 4.3-12.3 7.1-19.7 8.1zm28.2-16.4l-14-14c1.1-1.8 2-3.8 2.5-5.9h19.6c-1 7.4-3.8 14.3-8.1 19.9zm-11.4-31.7c-.5-2.1-1.4-4.1-2.5-6l13.9-13.9c4.3 5.7 7.2 12.5 8.2 19.9h-19.6z" />
  <Path d="M784.4 543.9c0-30.3 16.3-56.7 40.4-71.4l-160.5-71.1H563.5c-6 0-10.9 4.9-10.9 10.9v14.3c0 6 4.8 10.9 10.9 10.9h7.1v9.9h-18.3c-5.7 0-10.9 3.7-12.7 9.1l-1.5 4.4c-33.3-2.7-49.1 22.8-65.7 22.8l-11.2-13.5c-6.7-8.1-16.9-12.3-27.4-11.4-3.2.3-6.6.9-10 2.1l-6.3 22.8s-57.2-3.3-131.4-.7c16.4 15.2 26.7 36.9 26.7 61 0 2.4.4 52.8.4 52.8h490.1c-9.7-11.8-16.2-26.3-18.3-42.3-.4-3.8-.6-7.3-.6-10.6zM145.9 543.9c0-19.1 6.5-36.7 17.4-50.8-57.4 8-113.2 21.3-153.3 43.3 0 11.7 51.3.2 51.3 24.3H21.7c-4 0-7.2 3.2-7.2 7.2v21.6c0 4 3.2 7.2 7.2 7.2h98.9c4 0 7.2-3.2 7.2-7.2v-33.3H147l-.3-1.8c-.5-3.7-.8-7.2-.8-10.5zM972 387.9H866.3c-10 0-18 8.1-18 18v23.6c0 4.8 1.9 9.3 5.3 12.7l18.4 18.4c44.1 2.2 79.4 38.6 79.4 83.3 0 1.1-.1 2.2-.2 3.3H990V406c0-10-8-18.1-18-18.1z" />
  <Path d="M870.8 475.8c-37.6 0-68.1 30.5-68.1 68.1 0 2.9.2 5.8.6 8.6 4.2 33.6 32.8 59.6 67.5 59.6 35.7 0 64.9-27.4 67.9-62.3.2-1.9.3-3.9.3-5.8 0-37.7-30.5-68.2-68.2-68.2zm-34.1 42.4l13.9 13.9c-1.1 1.9-1.9 3.9-2.5 6h-19.6c1-7.4 3.9-14.1 8.2-19.9zm-8.2 31.7h19.7c.6 2.1 1.4 4.1 2.5 5.9l-13.9 13.9c-4.4-5.6-7.3-12.4-8.3-19.8zm36.4 36.3c-7.4-1-14.1-3.9-19.8-8.2l13.8-13.8c1.8 1 3.8 1.8 5.9 2.4v19.6h.1zm0-65c-2.1.6-4.1 1.4-6 2.5l-13.8-13.9c5.7-4.3 12.5-7.2 19.9-8.2l-.1 19.6zm11.8-19.5c7.5 1 14.2 3.9 19.9 8.2l-13.9 13.9c-1.9-1.1-3.9-1.9-6-2.5v-19.6zm0 84.5v-19.6c2.1-.6 4.1-1.3 5.9-2.4l13.9 13.9c-5.7 4.3-12.4 7.1-19.8 8.1zm28.3-16.4l-14-14c1.1-1.8 2-3.8 2.5-5.9h19.6c-1 7.4-3.8 14.3-8.1 19.9zm-11.5-31.7c-.5-2.1-1.4-4.1-2.5-6l13.9-13.9c4.3 5.7 7.2 12.5 8.2 19.9h-19.6z" />
    </Svg>
)
}

export default CarSVG