import React from 'react'

export default function Test() {
    async function dd(){
        const {data}=await axios.get("https://api.football-data.org/v4/matches")
        console.log(data);
    }
    test()
  return (
    <div>Test</div>
  )
}
