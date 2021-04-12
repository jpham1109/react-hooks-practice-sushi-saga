import React, { useState, useEffect } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  const [sushis, setSushis] = useState([])
  const [wallet, setWallet] = useState(100)

  useEffect (() => {
    fetch(API)
    .then(r => r.json())
    .then(sushis => {
      const updatedSushis = sushis.map((sushi) => {return {...sushi, eaten: false}})
      setSushis(updatedSushis)
    })
  }, [])

  function handleEatSushi (eatenSushi) {
    if (wallet >= eatenSushi.price) {
      const updatedSushis = sushis.map((sushi) => {
        if (sushi.id === eatenSushi.id) return {...sushi, eaten: true}
        return sushi;
      })
      setSushis(updatedSushis)
      setWallet((wallet) => wallet - eatenSushi.price)
    } else {
      alert("You need more money")
    }
  }

  function handleAddMoney(value) {
    setWallet(wallet => wallet + value)
  }
  const eatenSushis = sushis.filter((sushi) => sushi.eaten)

  if (!sushis) return <h3>Sushis coming right up...</h3>
  return (
    <div className="app">
      <SushiContainer sushis={sushis} onEatSushi={handleEatSushi} />
      <Table wallet={wallet} onAddMoney={handleAddMoney} plates={eatenSushis}/>
    </div>
  );
}

export default App;
