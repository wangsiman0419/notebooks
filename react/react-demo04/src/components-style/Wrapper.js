// import React from 'react'
import styled from 'styled-components';
const Title = styled.h1`
font-size:1.5em;
text-align:center;
color:red;
.one{
    color:pink;
}
h4{
    color:deeppink;
}
&:hover{
    color:yellow
}
`
//&表示的就是h1,就是最外层的元素，不用&也可以达到相同效果
export default Title;