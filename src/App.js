import { useState, useEffect } from 'react';
import Header from './components/Header';
import Browse from './components/Browse';
import Meme from './components/Meme';
import Footer from './components/Footer';

export default function App() {
	const [browse, setBrowse] = useState(true);
	const [memes, setMemes] = useState([]);

	useEffect(() => {
		fetch('https://api.imgflip.com/get_memes')
			.then(data => data.json())
			.then(({ data }) => {
				setMemes(data.memes);
				// setCurrMeme(
				// 	data.memes[Math.floor(Math.random() * data.memes.length + 1)]
				// );
				console.log('MEMES SET');
				console.log(memes);
			});
	}, []);

	return (
		<div className='flex flex-col justify-between dark:bg-palenight min-h-screen w-screen'>
			<Header />
			{browse ? <Browse memes={memes} /> : <Meme memes={memes} />}
			<Footer />
		</div>
	);
}
