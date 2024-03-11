import { useEffect, useState } from 'react';
import CoffeeList from '../coffeeList/CoffeeList';
import './coffeeFilter.scss';

const CoffeeFilter = (props) => {

    const {data} = props;

	const [term, setTerm] = useState('');
	const [visibleData, setVisibleData] = useState([]);
	const [filter, setFilter] = useState('all');

	const filterData = (items, filter) => {
		if (filter === 'all') {
			return items;
		} else {
			return items.filter(item => item.country === filter);
		}
	}

	const buttonsData = [
		{ id:'Brazil', label: 'Brazil' },
		{ id:'Kenya', label: 'Kenya' },
		{ id:'Columbia', label: 'Columbia'},
		{ id:'all', label: 'all'}
	]

	const onFilterSelect = (filter) => {
		setFilter(filter)
	}

	const buttons = buttonsData.map(({id, label}) => {
		const active = filter === id;
		const clazz = active ? 'active' : null;
		return (
			<button type='button'
					className={`btn-item ${clazz}`}
					key={id}
					onClick={() => onFilterSelect(id)}
			>
				{label}
			</button>
		)
	})

	const searchCoffeeByName = (items, value) => {
		if (term.length === 0) {
			return items;
		}
		return items.filter(item => {
			return item.name.toLowerCase().includes(value)
		})
	}

	useEffect(() => {
		setVisibleData(filterData(searchCoffeeByName(data, term), filter))
	},[term, filter])

	const onUpdateSearch = (e) => {
		const term = e.target.value;
		setTerm(term)
	}

    return (
        <section className="filters">
          	<div className="container">
            	<div className="filters-wrapper">
					<div className="filters-searchbar">
						<label className="filters-searchbar-label" htmlFor="searchbar">Looking for</label>
						<input name="searchbar"
						className="filters-searchbar-input"
						id="searchbar"
						type="text"
						placeholder="start typing here..."
						value={term}
						onChange={onUpdateSearch}
						/>
					</div>
					<div className="filters-btns">
						<label className="filters-btns-label" htmlFor="filters-country">Or filter</label>
						<div className='btns'>
							{buttons}
						</div>
					</div>
            	</div>
			    <CoffeeList data={visibleData}/>
          	</div>
        </section>

    )
}

export default CoffeeFilter;
