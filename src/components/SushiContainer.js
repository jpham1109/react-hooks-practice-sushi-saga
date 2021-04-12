import React, { useState } from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi"

function SushiContainer({sushis, onEatSushi}) {
  const [sushiIndex, setSushiIndex] = useState(0)
  const sushiItems = sushis.slice(sushiIndex, sushiIndex + 4).map((sushi) =>
    <Sushi key={sushi.id} sushi={sushi} onEatSushi={onEatSushi}/>)
  function handleClickMore () {
    setSushiIndex(sushiIndex => (sushiIndex + 4) % sushis.length)
  }
  return (
    <div className="belt">
      {sushiItems}
      <MoreButton onClickMore={handleClickMore}/>
    </div>
  );
}

export default SushiContainer;
