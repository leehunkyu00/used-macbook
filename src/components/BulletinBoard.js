import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import SortBar from './SortBar';
import '../css/BulletinBoard.css';

function BulletinBoard(props) {
  const [bulletins, setBulletins] = useState([
		{
			id: 1,
			title: 'MacBook Pro 13-inch',
			description: 'Great condition, lightly used MacBook Pro 13-inch from 2019.',
			price: 1200,
			date: new Date(2021, 3, 1),
			appleCare: true,
			productionYear: 2019,
		},
		{
			id: 2,
			title: 'MacBook Air 11-inch',
			description: 'Used MacBook Air 11-inch from 2013 in fair condition.',
			price: 400,
			date: new Date(2021, 2, 15),
			appleCare: false,
			productionYear: 2013,
		},
		{
			id: 3,
			title: 'MacBook Pro 15-inch',
			description: 'Slightly used MacBook Pro 15-inch from 2015 in great condition.',
			price: 900,
			date: new Date(2021, 1, 10),
			appleCare: true,
			productionYear: 2015,
		},

	]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    // Fetch bulletin data from API and update state
    fetch('/api/bulletins')
      .then(response => response.json())
      .then(data => {
        setBulletins(data);
        setLoading(false);
      })
      .catch(error => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  function handleSearch(searchQuery) {
		return ; // not working
    // Filter bulletins by search query
    const filteredBulletins = bulletins.filter(bulletin => {
      return (
        bulletin.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        bulletin.productionYear.toString().includes(searchQuery)
      );
    });
    props.onSearch(filteredBulletins);
  }

  function handleSort(sortType) {
    // Sort bulletins by sort type
    const sortedBulletins = [...bulletins].sort((a, b) => {
      if (sortType === 'priceAsc') {
        return a.price - b.price;
      } else if (sortType === 'priceDesc') {
        return b.price - a.price;
      } else if (sortType === 'dateAsc') {
        return new Date(a.date) - new Date(b.date);
      } else if (sortType === 'dateDesc') {
        return new Date(b.date) - new Date(a.date);
      } else {
        return 0;
      }
    });
    props.onSort(sortedBulletins);
  }

	const searchOption = (searchOption) => {
		// props.onSearchOption(searchOption);
	}


  return (
    <div>
      <h2>Bulletin Board</h2>
      <SearchBar onSearch={handleSearch} onSearchOption={searchOption}/>
      <SortBar onSort={handleSort} />
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {bulletins.map(bulletin => (
						<li key={bulletin.id}>
							<div className="card">
								<div className="card-body">
									<h5 className="card-title">{bulletin.title}</h5>
									<h6 className="card-subtitle mb-2 text-muted">{bulletin.date.toString()}</h6>
									<p className="card-text">{bulletin.description}</p>
									<ul className="list-group list-group-flush">
										<li className="list-group-item">{bulletin.price}</li>
										<li className="list-group-item">{bulletin.appleCare ? 'Includes AppleCare' : 'No AppleCare'}</li>
										<li className="list-group-item">{bulletin.productionYear}</li>
									</ul>
								</div>
							</div>
						</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default BulletinBoard;
