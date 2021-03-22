import React, { useState, useEffect } from "react"
import Nav from "./componnets/Nav.jsx"
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
} from "@chakra-ui/react"

function App() {
  const [apiDataRaw, setApiDataRaw] = useState([])
  const [vacs, setVacs] = useState()

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/owid/covid-19-data/master/public/data/vaccinations/vaccinations.json"
    )
      .then((res) => res.json())
      .then((data) => setApiDataRaw(data))
  }, [])

  function btnClick() {
    console.log(apiDataRaw)
  }

  function getCountry(country) {
    fetch("https://world-population.p.rapidapi.com/population?country_name=" + country, {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "39506afecemsh29b15ea77a29f5bp1095b6jsn3b4b1a6c4c5c",
		"x-rapidapi-host": "world-population.p.rapidapi.com"
	}
})
      .then(res => res.json())
      .then(data => console.log(data.body.population))
  }



  const countries = apiDataRaw.map((stuff) => (
    <Tr>
      <Td>{stuff.country}</Td>
      <Td>{stuff.data[stuff.data.length - 1].total_vaccinations? stuff.data[stuff.data.length - 1].total_vaccinations.toLocaleString(): 'N/A'}</Td>
      <Td>{stuff.data[stuff.data.length - 1].people_vaccinated? stuff.data[stuff.data.length - 1].people_vaccinated.toLocaleString(): 'N/A'}</Td>
    </Tr>
  ))

  return (
    <div>
      <Nav />

      <div className="flex justify-center items-center h-screen ">
        <div className="overflow-auto bg-white w-2/3 h-4/5 rounded-xl shadow-lg -mt-10">
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>Country</Th>
                <Th>Number of vaccines</Th>
                <Th>Number of people vaccinated</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>Canada</Td>
                <Td>3000</Td>
                <Td>2300</Td>
              </Tr>
              {countries}
            </Tbody>
          </Table>
        </div>
      </div>
    </div>
  )
}

export default App

/*
const countries = apiDataRaw.map((data) =>
          <h1>{data.country}</h1>
          );
          */
