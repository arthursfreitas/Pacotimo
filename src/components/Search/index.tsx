import React, { useState, useEffect } from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import packages, { IPackage } from '../../packages';
import { Container, FormSearch, DestinyInput, DateInput, ButtonSearch } from './styles';


export default function Search() {
  const [destiny, setDestiny] = useState<any>('');
  const [startMonth, setStartMonth] = useState<any>(new Date());
  const [startYear, setStartYear] = useState<any>(new Date());
  const [promoPackage, setPromoPackage] = useState<any[]>([{ destiny: '', imageUrl: '', inboundDate: 0, outboundDate: 0, price: 0 }]);

  useEffect(() => {
    setPromoPackage([packages()]);
  }, [])



  const handleClickSearch = (event: React.FormEvent) => {
    console.log(destiny);
    console.log(startMonth.getMonth());
    console.log(startYear.getFullYear());

    const filterItems = (query: any) => {
      return promoPackage.filter(el => console.log(el))
    }
    console.log(filterItems('Rio'))
    event.preventDefault();
  }

  return (
    <Container>
      <FormSearch onSubmit={handleClickSearch}>
        <DestinyInput>
          <label htmlFor="destiny">Destino</label>
          <input
            type="text"
            name="destiny"
            placeholder="Minas Gerais, Rio de Janeiro..."
            required
            onChange={destiny => destiny && setDestiny(destiny.target.value)} />
        </DestinyInput>
        <DateInput>
          <label htmlFor="month">Mês</label>
          <DatePicker
            selected={startMonth}
            onChange={month => month && setStartMonth(month)}
            showMonthYearPicker
            dateFormat="MM"
            name="month"
          />
          <label htmlFor="year">Ano</label>
          <DatePicker
            selected={startYear}
            onChange={year => year && setStartYear(year)}
            showYearPicker
            dateFormat="Y"
            name="year"
          />
        </DateInput>
        <ButtonSearch>
          <button type="submit" onSubmit={handleClickSearch} id="search">Buscar</button>
        </ButtonSearch>
      </FormSearch>
    </Container >

  )
}
