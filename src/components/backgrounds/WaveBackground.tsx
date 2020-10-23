import React from "react"
import styled from "styled-components"

export default function WaveBackground() {
  return (
    <Wrapper>
      <Wave
        src="/images/waves/hero-wave1.svg"
        style={{ top: "100px", filter: `blur(60px)` }}
      />
      <Wave src="/images/waves/hero-wave2.svg" style={{ top: "350px" }} />
      <Wave src="/images/waves/hero-wave3.svg" style={{ top: "550px" }} />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: relative;
`

const Wave = styled.img`
  position: absolute;
  width: 100%;
  height: 800px;
  /* background: linear-gradient(180deg, #4316db 0%, #9076e7 100%); */
  z-index: -1;
`
