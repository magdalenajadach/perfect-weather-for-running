export default function Blob({ items }) {
	return (
		<div className="">
			{items.map((item) => {
				return (
					<div>
						<p>Coord lon: {item.coord.lon}</p>
						<p>Weather main: {item.weather.main}</p>
						<p>Weather desc: {item.weather.description}</p>
					</div>
				);
			})}
		</div>
	);
}
