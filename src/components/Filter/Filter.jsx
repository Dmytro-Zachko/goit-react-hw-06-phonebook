import React from "react";
import { Input, Button, Finder } from "./Filter.styled";
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from "react-redux";
import { FilterContact } from "redux/FilterSlice";

export const Filter = () => {
    const filter = useSelector(state => state.filter.filter);
     const dispatch = useDispatch()
    
    const ClearFilter = () => {
    dispatch(FilterContact(''))
    }

     const OnFilterChange = event => {
    
    const {value} = event.currentTarget
   dispatch(FilterContact(value))
    }
    
    return (<form action="">
        <Finder>Find contacts by name</Finder>
        <Input type="text"
        value={filter}
        onChange={OnFilterChange}
        />
        <Button onClick={ClearFilter} >Clear</Button>
   </form> )
    
}